# Rheumatology Consultants — Landing Page

Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion landing page for
Rheumatology Consultants, an independent rheumatology and osteoporosis specialty
practice in Hagerstown, MD.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build
npm start
```

for a production build.

> Note: this project was assembled in a sandboxed environment without access to
> `fonts.googleapis.com`, so a production build could not be verified end-to-end here
> (the only failure was Next.js trying to fetch Fraunces/Inter at build time). Type
> checking (`tsc --noEmit`) passes cleanly. On your machine or in CI/Vercel, `next build`
> will fetch and self-host both fonts automatically via `next/font/google`, no extra
> setup needed.

## What to replace before launch

- **`public/hero-bg.jpg`** — placeholder gradient. Swap in a real photo of the office,
  exam room, or infusion suite (next/image alt text is already written for a real photo).
- **`public/og-image.jpg`**, **`public/icon-192.png`**, **`public/icon-512.png`**,
  **`public/favicon.ico`** — placeholder brand-color assets, replace with real logo marks.
- **`app/actions.ts`** — the contact form Server Action logs submissions to the console.
  Wire the `TODO` to a real Supabase insert (or your provider of choice) once the
  database is set up.
- **`app/layout.tsx`** — update `siteUrl` to the real production domain once it's live
  (currently `https://www.rheumatologyconsultantsmd.com`), and update the JSON-LD if any
  practice details change.

## Structure

- `app/layout.tsx` — fonts, metadata, JSON-LD (MedicalClinic + Physician schema)
- `app/page.tsx` — assembles all sections
- `app/actions.ts` — contact form Server Action (Supabase stub)
- `app/sitemap.ts`, `app/robots.ts` — SEO
- `components/` — one component per section, each self-contained

## Brand tokens

All colors, fonts, spacing, and the card border radius are defined as CSS custom
properties in `app/globals.css` and surfaced through `tailwind.config.ts` as
`primary`, `accent`, `bg` / `bg-alt`, and `ink` / `ink-muted`.
