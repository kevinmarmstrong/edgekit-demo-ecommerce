# Edgekit Ecommerce Demo

Fresh external demo for Edgekit's guarded ecommerce sidecar.

Live URLs:

- Cloudflare Pages COOP/COEP mirror: https://edgekit-demo-ecommerce.pages.dev/
- GitHub Pages fallback/no-model proof: https://kevinmarmstrong.github.io/edgekit-demo-ecommerce/

This repo installs Edgekit from the published `@kevinmarmstrong/*` npm packages.

## Quickstart

```bash
npm install
npm run dev
```

Open the local URL and try:

```text
show running shoes under $100 in size 10
```

For deterministic no-model mode:

```bash
npm run dev -- --open '/?modelMode=none'
```

## Verification

```bash
npm install
npm run typecheck
npm run build
```

## Cloudflare Pages

The `public/_headers` file enables cross-origin isolation for local-model/WebLLM readiness:

```bash
npm run deploy:cloudflare
```
