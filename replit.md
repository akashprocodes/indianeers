# Skillionaires

A stunning multi-page website for Skillionaires — an Indian NGO focused on skill development, vocational training, and youth empowerment, affiliated with Indianeers Media Private Limited ("Skilling India's Future").

## Run & Operate

- `pnpm --filter @workspace/skillionaires run dev` — run the frontend (port 25339)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, Framer Motion
- Routing: Wouter
- Icons: Lucide React
- Carousel: Embla Carousel
- Fonts: Syne (display), DM Sans (body), Space Mono (mono) — Google Fonts

## Where things live

- `artifacts/skillionaires/` — main website artifact
- `artifacts/skillionaires/src/pages/` — all 10 pages (Home, About, Programs, Achievements, Strategy, Work, Coverage, Gallery, Contact, WayForward)
- `artifacts/skillionaires/src/components/layout/` — Navbar, Footer, AppLayout
- `artifacts/skillionaires/src/index.css` — global theme (Bharat Futurism palette)
- `artifacts/skillionaires/public/indianeers-logo.png` — Indianeers brand logo
- `lib/api-spec/openapi.yaml` — API spec source of truth

## Architecture decisions

- Presentation-first site: no backend required; all content is static/hardcoded in pages
- Wouter for client-side routing with BASE_URL prefix support (Vite env)
- Framer Motion for all page animations (scroll-triggered, stagger, entrance effects)
- CSS variables with HSL values mapped to Bharat Futurism palette (saffron #FF6B00, navy #0A1628, green #00C48C, gold #F5A623)
- Indianeers logo served from /public directory (not @assets import) for correct URL resolution

## Product

Skillionaires website with 10 fully designed pages:
- **Home** — Full landing page with animated hero (Ashoka Chakra, typewriter, particles), impact counter strip, about snapshot, 3D flip program cards, India coverage map, achievements ticker, testimonials carousel, Vision 2047 banner, partners grid
- **About** — 8-tab sidebar layout (Summary, Vision, Mission, Objectives, Principles, Area of Concern, Strategy, Beneficiaries)
- **Programs** — 4-category tabbed layout (Government/CSR/Industry/Institutional) with rich scheme details
- **Achievements** — Impact stats, masonry awards grid, affiliations, sector bar charts
- **Strategy** — 6-phase implementation timeline (Mobilization → Enrollment → Training → Assessment → Placement → Post-Placement)
- **Work** — 6 real case study cards with outcomes data
- **Coverage** — Schematic India SVG map + state cards with district/center/trainee data
- **Gallery** — Masonry grid with category filter + lightbox
- **Contact** — Split form + contact info with working form submission
- **Way Forward** — Vision 2047 editorial layout with 6 pillars, timeline to 2047, UN SDG alignment

## User preferences

- "Bharat Futurism" brand aesthetic: saffron energy + deep navy authority
- Indianeers Media Private Limited logo must appear in both navbar and footer
- Syne (display), DM Sans (body), Space Mono (mono) typography
- No emojis in UI

## Gotchas

- Google Fonts @import must be the VERY FIRST LINE of index.css
- Logo at /indianeers-logo.png (public directory) — NOT @assets path
- Wouter Router base uses import.meta.env.BASE_URL — do not change this
- CSS custom properties use HSL values without hsl() wrapper

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
