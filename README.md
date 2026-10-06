# 49th Security Division — Club Website

A fully static Next.js site (App Router, TypeScript, Tailwind CSS v4, Lucide) for UNC Charlotte's 49th Security Division. It exports to plain HTML/CSS/JS in `out/` and runs on GitHub Pages with no server.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export to ./out
```

## Deploy to GitHub Pages

1. Push this repo to GitHub with `main` as the default branch.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. Push to `main`. `.github/workflows/deploy.yml` builds and publishes automatically.

The base path is detected for you: `actions/configure-pages` sets `BASE_PATH` to `/<repo>` for project sites, and to empty for `<org>.github.io` repos or custom domains. To preview a subpath build locally, run:

```bash
BASE_PATH=/my-repo npm run build
```

## Editing content

| What | Where |
| --- | --- |
| Discord / Niner Engage / GitHub links, contact email, form URL, meeting info | `lib/site.ts` |
| Competition results (the timeline and hero stats update automatically) | `lib/data.ts` |
| Training tracks | `components/TrainingTracks.tsx` |
| Sponsors / partners | `components/Sponsors.tsx` |
| Colors and fonts | `app/globals.css` (`@theme` block) |
| Club emblem (placeholder shield) | `components/icons.tsx` → `Emblem`, plus `app/icon.svg` |

To send sponsor inquiries to a Google Form instead of email, set `contact.formUrl` in `lib/site.ts`.

## Static-export notes

- `images.unoptimized: true` is set. Static imports (`import logo from "./logo.png"`) used with `next/image` get the base path automatically. For a plain string `src` pointing into `/public`, wrap it with `withBase("/file.png")` from `lib/site.ts`.
- `trailingSlash: true` makes GitHub Pages resolve nested routes such as `/events/` to `events/index.html`.
- Don't add API routes, middleware, `cookies()`/`headers()`, or uncached dynamic routes. Any of these will break `output: "export"`.
