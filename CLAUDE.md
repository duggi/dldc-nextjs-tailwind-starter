# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server at localhost:3000
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — run Next.js linter

No test framework is configured.

## Architecture

Next.js 15 App Router with Tailwind CSS v4, TypeScript in strict mode. Single-page starter kit with no database or service dependencies.

**Routing:** Uses the App Router (`src/app/`). Currently a single route — the home page (`page.tsx`) composed of `TopBar`, `HomeHero`, `ShowcaseGrid`, and `Footer`.

**Layout:** `src/app/layout.tsx` is the root layout. Global styles and font imports are in `src/styles/globals.css`.

**Components:**
- `src/components/` — page-level components (TopBar, HomeHero, ShowcaseGrid, Footer)
- `src/components/ui/` — reusable primitives (Button, Container, Section, Link, Heading/Subheading/Lead from text.tsx)
- `src/components/icons/` — SVG icon components

**UI primitives** use Headless UI for accessibility and `clsx` for conditional class merging. The `Button` component supports `color`, `outline`, and `plain` variants. The `Link` component wraps Next.js `Link` with Headless UI's `DataInteractive`.

**Styling:** Tailwind CSS v4 via PostCSS (`postcss.config.mjs`). Custom theme tokens (DLDC brand colors, fonts) are defined in `src/styles/globals.css` using `@theme`. Fonts: IBM Plex Sans (body/headings) and Outfit (display), loaded via Google Fonts CSS import.

**Path aliases** (tsconfig.json):
- `@/*` → `./src/*`
- `@/ui/*` → `./src/components/ui/*`
- `@/public/*` → `./public/*`

**Client components:** Only `TopBar` uses `'use client'` (for mobile menu state). All other components are server components.
