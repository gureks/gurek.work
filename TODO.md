### Development - Urgent Important
[ ] Rename project folder ASAP
[x] Dark Mode Switching using Tokens (data-theme + ThemeToggle)
[ ] Verify Variables (token usage audit after recent additions)
[ ] Verify Images (export, audit, and renaming)
[ ] All Sections responsive render (baseline pass > polish pass)
    - Hero (✅ refactored data-driven + spacing partial)
    - Nudge Alert (✅ added, dismissible, role=status)
    - Sticky AI Projects (✅ base + entrance reveal)
    - Bento Design Projects (✅ data-driven + reveal)
    - Play / Not Work Section (✅ 3-row infinite carousel + mask; needs real assets)
    - Reads (✅ data-driven + marquee + WebP pipeline)
    - Footer (✅ redesigned + data-driven)
[ ] Decorative Hero icons (heroConfig.decorativeIcons) integration
[ ] Clean extra unused assets
[ ] Asset imports final pass (prune orphaned hashed exports)
[x] Data-driven cards config file (moved to src/data/projects.ts)
[ ] Github + Codex integration
[x] Go live dockerization (Dockerfile + nginx)

### Development - Copilot Recommendations
[x] Accessibility polish (single H1, aria-hidden decoration, hidden semantic heading)
[x] Animation refinement (phase 1): Intersection Observer reveal w/ reduced motion safeguard
[ ] Animation refinement (phase 2): Optional subtle parallax (respect reduced motion)
[ ] Button typing (remove any, strict children & icon prop types)
[x] Remove major unused inline styles (moved to partials)
[x] Lazy-loading & optimization hints for large images (Reads pipeline)
[x] Implement dark mode toggle
[ ] Persistence for dismissed nudge (localStorage)

### Development - Future Must-Haves
[x] Add ESLint + Prettier
[ ] Mouse hover / subtle parallax effects (Hero / cards)
[x] Accessibility labels for decorative images
[ ] prefers-reduced-motion alternate for ticker (currently disables animation; maybe provide static scroll offset)

### Docker & Deployment
- Multi-stage Dockerfile (node:20-alpine build → nginx serve)
- `.dockerignore` trimming context
- `nginx.conf` with immutable caching for hashed assets + SPA fallback
- Next: add healthcheck route OR lightweight /status static JSON

### Image Optimization
- Reads covers converted to WebP 1x/2x via `npm run optimize:reads`
- Future: generalize script for other sections (AI / Play), add AVIF, add LQIP placeholders

### Hero Refactor (DONE)
- Data schema (`heroConfig`): lines[], intro[], ctas[], decorativeIcons[] (pending use)
- Hidden semantic H1; visual lines aria-hidden
- CTAs mapped; new anchor wrappers for proper href navigation

### Nudge Alert (DONE)
- `nudgeConfig` typed messageParts (emoji/text/link)
- Dismissible component with role=status & aria-label
- Token-styled `_nudge.scss` partial; future variants possible
- To Do: Persistence & variant system

### AI Projects Updates (Earlier)
- Hover transform schema (rotation/translate/scale) via CSS custom properties
- Reduced-motion safe (no scale/elevation)

### Reads Section (Earlier)
- Single masked marquee per Figma
- `<picture>` w/ WebP sources + lazy loading
- Reduced-motion disables marquee animation

### Footer Redesign (Earlier)
- Data-driven heading parts / CTAs / logomark
- Responsive typography scaling

### Next High-Value Enhancements
1. LocalStorage persistence for nudge dismissal
2. Hero decorative icon layering (lightweight, aria-hidden)
3. Type safety pass (Button, Tag, AiProjectCard props)
4. Parallax micro-interactions (guarded by reduced motion)
5. Expand image optimization to Play assets
6. Add unit tests (smoke + accessibility roles) using RTL

### Lint / Format
`npm run lint` / `npm run format`

### Scripts
- `optimize:reads`: Sharp WebP generation
- Future: `optimize:all` (aggregate pipeline)

### Backlog (Icebox)
[ ] Social meta tags & OpenGraph images
[ ] RSS or changelog feed for build-in-public updates
[ ] Analytics (privacy-centric)
[ ] Contact form / mail link enhancements

---
(Updated: Hero & Nudge integrated, Docker ready. This file tracks both shipped and planned enhancements.)
