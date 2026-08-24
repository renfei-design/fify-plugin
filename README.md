# Fify plugin marketplace

Fify turns grounded AI answers into trusted interactive comparisons, plans, checklists, timelines, and decision views. It preserves the complete plain-language answer as an authoritative fallback and performs no consequential actions.

![Fify rendering a grounded Steve Jobs timeline as an interactive information view inside Codex.](plugins/fify/assets/fify-timeline-hero.png)

This repository is a Git-backed marketplace for Codex. The plugin is self-contained: it requires Node.js 20 or newer, performs no separate npm or pnpm install, asks users for no Fify account or end-user API key, and runs a bundled deterministic information-view compiler locally.

## Install in Codex

```bash
codex plugin marketplace add renfei-design/fify-plugin
codex plugin add fify@fify
```

Start a new Codex task after installation, then ask normally or tag `@Fify`:

- Compare these options by cost and risk.
- Make this rollout plan a checklist I can work through.
- Show these milestones as a timeline.

## Use with ChatGPT

This Git marketplace cannot be added directly as a user-defined ChatGPT marketplace. For developer testing in ChatGPT, enable developer mode and create an app that connects to Fify's deployed MCP endpoint:

`https://fify-chatgpt.renfei1992.chatgpt.site/api/mcp`

Public discovery across ChatGPT and Codex requires publication to OpenAI's universal plugin directory. This repository is the Codex distribution and testing source; it does not by itself make Fify discoverable in ChatGPT. See OpenAI's [plugin packaging guide](https://developers.openai.com/plugins/build/plugins) and [plugin quickstart](https://developers.openai.com/plugins/quickstart).

## What is included

- A Codex plugin manifest and Fify information-UI skill.
- A bundled local MCP server with `render_information_ui`.
- Product screenshots, activation evals, and reviewer cases.
- Validation and end-to-end protocol smoke tests.

The local compiler does not research or verify facts. Codex supplies the grounded answer and sources, and Fify validates and renders that material. The bundled server limits each host identity to 20 successful renders per UTC day and two concurrent renders.

## Verify locally

```bash
npm run check
```

See [BUILD_PROVENANCE.md](./BUILD_PROVENANCE.md) for the public bundle boundary and [SECURITY.md](./SECURITY.md) for reporting guidance.

## License

Apache-2.0. Bundled dependency notices are in [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).
