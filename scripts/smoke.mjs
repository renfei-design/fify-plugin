import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pluginRoot = path.join(root, "plugins/fify");
const mcp = JSON.parse(await readFile(path.join(pluginRoot, ".mcp.json"), "utf8"));
const server = mcp.mcpServers.fify;
assert.equal(server.cwd, ".", "The MCP process must start from the installed plugin root.");
const child = spawn(server.command, server.args, {
  cwd: path.resolve(pluginRoot, server.cwd),
  stdio: ["pipe", "pipe", "pipe"],
  env: { PATH: process.env.PATH ?? "" },
});
let buffer = "";
let stderr = "";
const pending = new Map();
child.stderr.setEncoding("utf8");
child.stderr.on("data", (chunk) => { stderr += chunk; });
child.stdout.setEncoding("utf8");
child.stdout.on("data", (chunk) => {
  buffer += chunk;
  for (;;) {
    const newline = buffer.indexOf("\n");
    if (newline < 0) break;
    const line = buffer.slice(0, newline).trim();
    buffer = buffer.slice(newline + 1);
    if (!line) continue;
    const message = JSON.parse(line);
    if (message.id !== undefined && pending.has(message.id)) {
      pending.get(message.id)(message);
      pending.delete(message.id);
    }
  }
});
let nextId = 1;
function request(method, params) {
  const id = nextId++;
  const response = new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error(`Timed out waiting for ${method}. ${stderr}`)), 15_000);
    pending.set(id, (value) => { clearTimeout(timeout); resolve(value); });
  });
  child.stdin.write(`${JSON.stringify({ jsonrpc: "2.0", id, method, params })}\n`);
  return response;
}
function notify(method, params = {}) {
  child.stdin.write(`${JSON.stringify({ jsonrpc: "2.0", method, params })}\n`);
}

try {
  const initialized = await request("initialize", {
    protocolVersion: "2025-06-18",
    capabilities: {},
    clientInfo: { name: "fify-release-smoke", version: "0.1.0" },
  });
  assert.ok(!initialized.error, JSON.stringify(initialized.error));
  notify("notifications/initialized");
  const listed = await request("tools/list", {});
  assert.ok(!listed.error, JSON.stringify(listed.error));
  assert.ok(listed.result.tools.some((tool) => tool.name === "render_information_ui"));

  const rendered = await request("tools/call", {
    name: "render_information_ui",
    arguments: {
      version: "1.0",
      originalRequest: "Help me decide whether to launch the pilot.",
      groundedAnswer: "Launch a small pilot first, measure adoption, and review the risk controls before a wider rollout.",
      locale: "en-US",
      sections: [{
        id: "pilot-launch",
        title: "Pilot launch",
        body: "Start with a reversible pilot.",
        items: [{ id: "measure-adoption", label: "Measure adoption", value: "Week 1", detail: "Track usage and feedback.", sourceIds: [] }],
        sourceIds: [],
      }],
      sources: [],
      suggestedRefinements: ["Show this as a checklist"],
    },
  });
  assert.ok(!rendered.error, JSON.stringify(rendered.error));
  assert.equal(rendered.result.isError, undefined);
  assert.equal(rendered.result.structuredContent.state, "complete");
  assert.match(rendered.result.structuredContent.fallbackText, /launch a small pilot/i);
  assert.ok(rendered.result.structuredContent.frames.length > 0);
  console.log("Smoke-tested MCP initialization, tool discovery, and a complete deterministic render.");
} finally {
  child.stdin.end();
  child.kill();
}
