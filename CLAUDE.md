# CLAUDE.md

Technical guidance for work in this repository.

## Commands

```bash
# Development
npm run dev          # Start Vite development server
npm run build        # Production build
npm run build:dev    # Development-mode build
npm run preview      # Preview Vite build locally
npm run start        # Run the SSR server
npm run lint         # ESLint
npm run format       # Prettier (write)
```

There are no tests in this project.

Use Node 22, as defined in `.nvmrc`. For a new checkout, install dependencies with `npm ci --ignore-scripts` before reviewing package scripts.

## Architecture

This is a marketing site for Andre Rediss (Personal Trainer and Muay Thai Coach), built with TanStack Start on Vite and served by a Node SSR server.

**Stack:**
- **TanStack Start** (SSR-capable React meta-framework) + **TanStack Router** (file-based routing)
- **Tailwind CSS v4** with `@theme inline` — all design tokens are CSS custom properties in `src/styles.css`, not `tailwind.config.*`
- **shadcn/ui** components (Radix UI primitives) live in `src/components/ui/` — these are vendored, edit in place
- **Vite** configured via `@lovable.dev/vite-tanstack-config`; production SSR is served by `server.mjs`

**Routing:** TanStack Router file-based. `src/routeTree.gen.ts` is auto-generated and must not be edited by hand. Routes live in `src/routes/`. The root layout (`__root.tsx`) sets the HTML shell, `<head>` defaults, and 404 handler. Each route can override `head()` meta. Parent routes that have children render an `Outlet`; for example, `treinar/turma.tsx` is the layout for the turma pages.

**Design system:** Defined entirely in `src/styles.css`.
- All colors use `oklch` format. The site is dark-only (`:root` has dark values; `.dark` block is unused boilerplate from the template).
- Primary brand color: `oklch(0.553 0.214 27.5)` (red).
- Display font: `Barlow Condensed` / `Bebas Neue`; body font: `DM Sans` — loaded from Google Fonts.
- `--gradient-dark` CSS variable used for the hero background.
- Scroll-reveal animation: add `fade-up` class + attach the `useReveal` hook ref to trigger `.in-view` via `IntersectionObserver`.

**Home route (`src/routes/index.tsx`):** The page uses inline section components: `Hero → Bio → Services → CTAFooter → WebDevPromo → FooterBar`. Contact links are module-level constants at the top of the file.

**Turma flow:** There are two turmas, one folder each under `src/routes/treinar/turma/` — `studio-top-fitness/` and `ct-ishigeki/` — and each has a page plus its own waiting-list form under `interesse.tsx`. Neither turma has started: the pages read "Em breve" and must not announce a start date until the turma is confirmed. The forms stay open as waiting lists only — they must not promise a spot or an enrollment, and must not redirect users to WhatsApp.

| Turma | Webhook | Data Table | Form fields |
| --- | --- | --- | --- |
| Studio Top Fitness | `/webhook/interesse/turma` | `interessados_turma_muay_thai` | name, WhatsApp, age, preferred shift |
| CT Ishigeki | `/webhook/interesse/turma-ishigeki` | `interessados_turma_ct_ishigeki` | name, WhatsApp, age |

When a turma opens, update the unit page, the card in `/treinar/turma`, the card in `/treinar`, and the meta descriptions of all four routes — each one states the turma's status.

**Booking flow:** `/treinar/personal/agendar` and `/treinar/muaythai/agendar` render `BookingCalendar`, which reads free slots from `/webhook/slots/...` and posts the booking to `/webhook/agendar/...`. All n8n webhooks live on `https://n8n.marcaki.com` and are unauthenticated — never put anything but public form input through them.

**`calcYears` utility (index.tsx):** Computes years of martial arts practice from birth year + starting age, accounting for the April 6 birthday.

## Deployment

Deploys through EasyPanel with Nixpacks. `nixpacks.toml` installs dependencies with npm, builds the application, and starts the SSR server with `npm run start`. The production runtime is Node 22 from `.nvmrc`.

Do not add Node 20 to EasyPanel Nixpacks packages or environment variables. Including Node 20 and 22 in the same Nix environment causes a dependency-file conflict during image creation. The canonical production domain is `https://andrerediss.com`.
