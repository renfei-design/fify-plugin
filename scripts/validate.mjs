import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readJson = async (relative) => JSON.parse(await readFile(path.join(root, relative), "utf8"));
const exists = async (relative) => stat(path.join(root, relative)).then(() => true, () => false);

const marketplace = await readJson(".agents/plugins/marketplace.json");
assert.equal(marketplace.name, "fify");
assert.equal(marketplace.plugins.length, 1);
assert.equal(marketplace.plugins[0].source.path, "./plugins/fify");

const manifest = await readJson("plugins/fify/.codex-plugin/plugin.json");
assert.equal(manifest.name, "fify");
assert.equal(manifest.version, "0.1.2");
assert.equal(manifest.mcpServers, "./.mcp.json");
assert.ok(await exists("plugins/fify/server/server.mjs"));
const mcp = await readJson("plugins/fify/.mcp.json");
assert.equal(mcp.mcpServers.fify.command, "node");
assert.deepEqual(mcp.mcpServers.fify.args, ["./server/server.mjs"]);
assert.equal(mcp.mcpServers.fify.cwd, ".");
for (const asset of [manifest.interface.logo, ...manifest.interface.screenshots]) {
  assert.ok(await exists(path.join("plugins/fify", asset)), `Missing ${asset}`);
}

const forbidden = [
  /OPENAI_API_KEY/,
  /FIFY_COMPOSER_MODEL/,
  /api\.openai\.com/,
  /file:\/\/\//,
  /\/Users\//,
  /BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY/,
  /(?:sk|ghp|github_pat)_[A-Za-z0-9_\-]{20,}/,
];
const ignored = new Set([".git", "node_modules"]);
async function scan(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) await scan(absolute);
    else if (!entry.name.endsWith(".png")) {
      if (path.relative(root, absolute) === "scripts/validate.mjs") continue;
      const content = await readFile(absolute, "utf8");
      for (const pattern of forbidden) assert.ok(!pattern.test(content), `${pattern} found in ${path.relative(root, absolute)}`);
    }
  }
}
await scan(root);
console.log("Validated marketplace structure, assets, bundle boundary, and forbidden-pattern scan.");
