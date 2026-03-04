# CLAUDE.md

## Project

VGDH (Verse Global Dev House) — Next.js 15 static landing page. Deployed to Vercel.

## Commands

```bash
pnpm install                    # Install dependencies
pnpm dev                        # Local dev server
pnpm build                      # Production build
pnpm lint                       # Lint check
```

## Stack

- Next.js 15, React 19, TypeScript 5
- Tailwind CSS 4 with vendored Verse design tokens
- pnpm package manager
- Deployed to Vercel (auto-detects Next.js)

## Structure

- `src/app/` — Next.js App Router (layout, page, globals.css)
- `src/components/` — Section components (hero, proof-strip, verticals-grid, how-it-works, social-proof, cta-section, footer)
- `src/lib/constants.ts` — Verticals data, stats, URLs
- `public/images/` — Image assets

## Design Tokens

Verse color palette defined as CSS custom properties in `globals.css` via `@theme`. Use `text-verse-*`, `bg-verse-*`, `border-verse-*` utility classes.

## Fonts

- Barlow (headings) — `var(--font-barlow)`
- Lexend (body) — `var(--font-lexend)`
- IBM Plex Sans (stat numbers) — `var(--font-ibm-plex)`
