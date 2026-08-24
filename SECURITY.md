# Security policy

Please report suspected vulnerabilities privately to the repository maintainers rather than opening a public issue. Include the affected file or capability, reproduction steps, potential impact, and any suggested mitigation. Never include live API keys, private application data, or credentials.

Fify is a read-only presentation compiler. Grounded envelopes supplied by the host are treated as untrusted input and validated against catalog-constrained schemas before the deterministic local compiler renders them. The plugin performs no purchasing, publishing, account changes, or other consequential third-party mutations.

The public plugin does not request or accept an end-user provider API key. Content sent to the local plugin is still processed through the host application, so do not submit credentials or sensitive personal data that you are not authorized to process. Apply the same caution to the hosted app.
