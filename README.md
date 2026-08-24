# Fify plugin marketplace

Fify turns grounded AI answers into trusted interactive comparisons, plans, checklists, timelines, and decision views. It preserves the complete plain-language answer as an authoritative fallback and performs no consequential actions.

This repository is a Git-backed marketplace for Codex and ChatGPT desktop. The plugin is self-contained: it requires Node.js 20 or newer, installs no packages, asks users for no API key, and runs a bundled deterministic information-view compiler locally.

## Install in Codex

```bash
codex plugin marketplace add renfei-design/fify-plugin
codex plugin install fify@fify
```

Start a new Codex task after installation, then ask normally or tag `@Fify`:

- Compare these options by cost and risk.
- Make this rollout plan a checklist I can work through.
- Show these milestones as a timeline.

## What is included

- A Codex plugin manifest and Fify information-UI skill.
- A bundled local MCP server with `render_information_ui`.
- Product screenshots, activation evals, and reviewer cases.
- Validation and end-to-end protocol smoke tests.

The hosted ChatGPT-compatible MCP endpoint remains available at `https://fify-chatgpt.renfei1992.chatgpt.site/api/mcp`.

## Verify locally

```bash
npm run check
```

See [BUILD_PROVENANCE.md](./BUILD_PROVENANCE.md) for the public bundle boundary and [SECURITY.md](./SECURITY.md) for reporting guidance.

## License

Apache-2.0. Bundled dependency notices are in [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).

