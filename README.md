# BuildHarness.github.io

Public product site for HarnessBuilder, served at <https://buildharness.github.io>.

Static, framework-free HTML/CSS/JS with self-hosted fonts. No external requests at runtime.
The source repositories stay private; only this site and the client release artifacts
([`HarnessBuilder_Downloads`](https://github.com/BuildHarness/HarnessBuilder_Downloads)) are public.

## Edit

- `index.html` — structure and copy keys
- `site.js` — the zh / en dictionary and interactions
- `site.css` — styling, tokens at the top
- `assets/shots/` — product screenshots (2880×1800)
- `assets/fonts/` — Instrument Serif, IBM Plex Sans/Mono (OFL), self-hosted

Every string exists in both languages; add the key to both packs in `site.js`.
English is the default; the chosen language is stored in `localStorage` under
`hb-site-lang`. Shareable links can force a language with `?lang=zh` or
`?lang=en`, and toggling updates the query string.

## Preview

```bash
python3 -m http.server 8080
```

Deployment runs from `.github/workflows/pages.yml` on every push to `main`.
