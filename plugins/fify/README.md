# Fify

Fify turns a fully grounded answer into a useful interactive information view. Ask normally or tag `@Fify`; no Fify account, end-user API key, schema knowledge, or separate npm or pnpm install is required.

The plugin is best for comparisons, plans, timelines, trackers, structured explanations, decision support, and editable summaries. It preserves the complete ordinary answer as fallback and is intentionally read-only and non-consequential.

Try:

- “Turn this answer into an interactive comparison I can filter.”
- “Make this rollout plan a checklist I can work through.”
- “Show these milestones as a timeline with risks and next steps.”

The bundled MCP server uses a deterministic, catalog-constrained compiler. It does not research or verify facts; the host supplies the grounded answer and sources. Node.js 20 or newer is required. Each host identity is limited to 20 successful renders per UTC day and two concurrent renders.
