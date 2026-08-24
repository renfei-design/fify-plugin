# Fify marketplace listing kit

Use this copy for the official MCP Registry, Smithery, Glama, MCP directories, and community showcases. Keep the claims and URLs synchronized with the plugin manifest and hosted service.

## Identity

- **Name:** Fify
- **Publisher:** renfei-design
- **Tagline:** Turn grounded AI answers into trusted interactive views.
- **Repository:** https://github.com/renfei-design/fify-plugin
- **Website:** https://fify-chatgpt.renfei1992.chatgpt.site
- **Remote MCP endpoint:** https://fify-chatgpt.renfei1992.chatgpt.site/api/mcp
- **License:** Apache-2.0
- **Pricing:** Free and open source
- **Authentication:** None
- **Primary category:** AI & Machine Learning
- **Secondary categories:** Productivity, Developer Tools, Data Visualization

## Short description

Turn grounded AI answers into interactive comparisons, plans, checklists, timelines, profiles, and decision views.

## Long description

Fify gives complex AI answers a usable shape. A host supplies a grounded answer and sources; Fify validates that information, selects a trusted presentation pattern, and renders an interactive comparison, plan, checklist, timeline, profile, explainer, or decision view. The model never writes executable UI code, and the complete plain-language answer remains available as the authoritative fallback.

Fify is read-only and requires no Fify account, subscription, or end-user API key. It is available as a self-contained Git marketplace for Codex and as a public Streamable HTTP MCP endpoint for ChatGPT developer mode and compatible MCP clients.

## Best first prompts

1. Compare these options by cost, effort, and risk.
2. Turn this rollout plan into a checklist I can work through.
3. Show these milestones as a timeline with dependencies.
4. Make this research summary easier to scan and explore.
5. Help me choose by separating evidence, assumptions, and tradeoffs.

## Capabilities

- Produces trusted comparisons, plans, checklists, timelines, profiles, explainers, decision views, and editable summaries.
- Preserves the supplied grounded answer and sources instead of inventing authoritative facts.
- Uses a catalog-constrained component system rather than model-generated HTML, JavaScript, or React.
- Returns an immediate complete result from the hosted endpoint and a complete text fallback on every supported host.
- Performs no purchases, account changes, external writes, or other consequential actions.

## Limitations

- Fify does not research or verify facts; the host must supply grounded information.
- Inline interactive UI requires a host that supports the MCP Apps UI extension.
- Clients without MCP Apps UI can still consume the model-readable result and complete plain-language fallback.
- The public hosted service is a prerelease and is supported on a reasonable-effort basis.

## Privacy and safety

- No authentication or end-user API key is requested.
- The hosted tool is read-only and performs no consequential actions.
- Do not send credentials or sensitive personal information.
- Privacy: https://fify-chatgpt.renfei1992.chatgpt.site/privacy
- Terms: https://fify-chatgpt.renfei1992.chatgpt.site/terms
- Security: https://github.com/renfei-design/fify-plugin/security/policy

## Visual assets

- Square logo: `plugins/fify/assets/logo.png`
- Hero screenshot: `plugins/fify/assets/fify-timeline-hero.png`
- Additional screenshots: `plugins/fify/assets/launch-page.png` and `plugins/fify/assets/interactive-decision.png`

## Curation rationale

Most AI answers are delivered as linear prose even when the information is naturally comparative, chronological, procedural, or decision-oriented. Fify adds a safe presentation layer without granting the model permission to execute arbitrary UI code. It helps users understand and act on grounded answers while keeping the original answer available as fallback.

## OpenAI developer showcase draft

**Project summary:** Fify is an open-source presentation layer that turns grounded AI answers into trusted interactive information interfaces. It compiles semantic answer structure into catalog-constrained components for comparisons, timelines, plans, checklists, profiles, and decision support while preserving the original answer as fallback.

**What makes it useful:** Fify focuses on comprehension and action rather than decorative generative UI. It gives designers and developers control over components, accessibility, responsive behavior, and trust boundaries while letting the response choose an appropriate information structure.

**Demo URL:** https://fify-chatgpt.renfei1992.chatgpt.site

**Source URL:** https://github.com/renfei-design/Fify

## Suggested discovery tags

`mcp`, `mcp-server`, `mcp-apps`, `codex-plugin`, `chatgpt-plugin`, `generative-ui`, `ai-ui`, `a2ui`, `information-design`, `data-visualization`, `decision-support`, `productivity`
