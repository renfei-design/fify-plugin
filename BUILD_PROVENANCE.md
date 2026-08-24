# Build provenance

Plugin release 0.1.2 bundles `plugins/fify/server/server.mjs`, produced from the Apache-2.0 Fify 0.1.0 workspace sources and its locked JavaScript dependencies.

This marketplace profile deliberately replaces the optional provider-backed composition step with Fify's deterministic, catalog-constrained compiler. The bundle contains no provider endpoint, API-key lookup, install script, workspace-relative import, or machine-specific path. It performs no separate dependency download at runtime; users need Node.js 20 or newer on `PATH`.

The published boundary is this repository alone. It excludes the development monorepo, environment files, package stores, build caches, databases, test reports, and local runtime state.

Validation includes manifest/schema checks, forbidden-pattern scanning, an MCP initialization and tool-list exchange, and a complete synthetic render through `render_information_ui`. The public bundle also carries the web-parity component styling used by the current Codex plugin.
