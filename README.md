# -Cleaning-kuwati-

Premium bilingual (Arabic RTL & English LTR) single-page website for **Cleaning Q Kuwait (شركة تنظيف بالكويت)**.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide Icons**

## Local Development

```bash
npm install
npm run dev
```

## Production Build & Lint

```bash
npm run lint
npm run build
```

## Media & Content Configuration

- Service photography: `public/images/`
- Company cleaning videos: `public/videos/` (`src/data/videosData.ts`)
- Gallery manifest: `src/data/galleryData.ts`
- Verified testimonials (hidden when empty): `src/data/testimonialsData.ts`
- Bilingual dictionary: `src/data/translations.ts`

## Cloudflare Deployment

When deploying to **Cloudflare Pages**, use these exact dashboard build settings (do not deploy the repository root `/` directly, as serving unbuilt `/src/main.tsx` causes a strict MIME type `application/octet-stream` module script error):

- **Framework preset:** `Vite` (or `None`)
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node.js version:** `22` (configured via `.nvmrc` and `package.json` `engines`, or set environment variable `NODE_VERSION=22`)

For **Cloudflare Workers Static Assets** / Workers Builds, `wrangler.jsonc` is configured to serve `./dist` with SPA fallback handling, and `public/_headers` + `public/_redirects` are automatically copied to `dist/`.
