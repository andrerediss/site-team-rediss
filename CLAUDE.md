# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
bun run dev          # Start dev server (Vite)
bun run build        # Production build
bun run build:dev    # Development build
bun run preview      # Preview production build locally
bun run lint         # ESLint
bun run format       # Prettier (write)
```

There are no tests in this project.

## Architecture

This is a single-page marketing/landing site for André Rediss (Personal Trainer & Muay Thai Coach), built with TanStack Start on Vite + Cloudflare Workers.

**Stack:**
- **TanStack Start** (SSR-capable React meta-framework) + **TanStack Router** (file-based routing)
- **Tailwind CSS v4** with `@theme inline` — all design tokens are CSS custom properties in `src/styles.css`, not `tailwind.config.*`
- **shadcn/ui** components (Radix UI primitives) live in `src/components/ui/` — these are vendored, edit in place
- **Vite** configured via `@lovable.dev/vite-tanstack-config`; Cloudflare Workers deployment via `wrangler.jsonc`

**Routing:** TanStack Router file-based. `src/routeTree.gen.ts` is auto-generated — do not edit by hand. Routes live in `src/routes/`. The root layout (`__root.tsx`) sets the HTML shell, `<head>` defaults, and 404 handler. Each route can override `head()` meta.

**Design system:** Defined entirely in `src/styles.css`.
- All colors use `oklch` format. The site is dark-only (`:root` has dark values; `.dark` block is unused boilerplate from the template).
- Primary brand color: `oklch(0.553 0.214 27.5)` (red).
- Display font: `Barlow Condensed` / `Bebas Neue`; body font: `DM Sans` — loaded from Google Fonts.
- `--gradient-dark` CSS variable used for the hero background.
- Scroll-reveal animation: add `fade-up` class + attach the `useReveal` hook ref to trigger `.in-view` via `IntersectionObserver`.

**Single route (`src/routes/index.tsx`):** The entire page is one file with inline section components: `Hero → Bio → Services → CTAFooter → WebDevPromo → FooterBar`. Contact links (WhatsApp/Instagram) are module-level constants at the top of the file.

**`calcYears` utility (index.tsx):** Computes years of martial arts practice from birth year + starting age, accounting for the April 6 birthday.

## Deployment

Deploys to Cloudflare Workers via `wrangler.jsonc`. The `start` script (`vite preview --host 0.0.0.0 --port 3000`) is used by the hosting platform (configured in `nixpacks.toml`). Production domain: `https://www.rediss.cloud`.
