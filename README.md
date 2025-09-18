# Gurek Singh Portfolio

Modern, performant, accessible personal portfolio built with React + TypeScript + Vite and a token-driven SCSS design system derived from Figma.

## Stack
- React 18 + TypeScript (ESM)
- Vite (fast dev + optimized production output)
- SCSS with design tokens (`_tokens.scss` → also exported as CSS vars)
- Sharp (one-off image optimization pipeline for Reads covers)
- ESLint + Prettier (consistency & cleanliness)

## Key Features
- Data-driven sections (Hero, AI Projects, Bento Design Projects, Play, Reads, Footer, Nudge Alert)
- Accessible typography pairing (serif/sans tokens) with hidden semantic headings
- Reduced-motion aware animations (reveal + disabled marquee when user prefers reduced motion)
- Image optimization pipeline (WebP 1x/2x variants, `<picture>` usage for Reads)
- Dark mode toggle via tokens (`ThemeToggle` component)
- Modular SCSS partials per section (`_ai-projects.scss`, `_reads.scss`, `_footer.scss`, `hero.scss`, `_nudge.scss`)
- Config files under `src/data/*` for content & layout logic
- Build-time token → CSS variable mapping for future theming

## File / Section Overview
```
src/
  components/
    Hero.tsx                # Data-driven heading lines + intro segments + CTAs
    NudgeAlert.tsx          # Top announcement banner (dismissible)
    AiProjectsSection.tsx   # Sticky left narrative + right card column
    BentoDesignProjects.tsx # Bento style design showcase
    PlaySection.tsx         # “Not work” multi-row infinite carousel
    ReadsSection.tsx        # Masked marquee of reading covers (WebP-aware)
    Footer.tsx              # Data-driven, serif/sans emphasis layout
    Button.tsx, Tag.tsx     # Atomic UI primitives
    Layout.tsx              # Width constraint & horizontal padding
  data/
    hero.ts                 # Hero config (lines, intro segments, CTAs, (future) icons)
    nudge.ts                # Top nudge alert content schema
    aiProjects.ts           # AI projects card data + per-image transforms
    reads.ts                # Reads cover list with png/webp1x/webp2x
    footer.ts               # Footer heading, CTAs, copyright
  styles/
    _tokens.scss            # Design tokens (spacing, color, type, shadow, radii)
    hero.scss               # Hero layout + spacing
    _ai-projects.scss
    _reads.scss
    _footer.scss
    _nudge.scss
    global.scss             # Imports partials + global resets/utilities
scripts/
  optimize-reads.mjs        # Sharp-based WebP generation for Reads covers
Dockerfile                  # Multi-stage build (Node → Nginx)
.dockerignore               # Prunes build context
```

## Design Tokens
Declared in `_tokens.scss` and exported to CSS custom properties. They include:
- Spacing: `--space-xs` … `--space-mega`
- Colors: background, surface, primary, secondary, accent variants, text, tag borders
- Typography scale (hero, title, card, subtext, label, button, mega serif)
- Radii: card, pill, large sections
- Shadows: glass depth layers, accent focus
- Breakpoints: `$bp-sm`, `$bp-md`, `$bp-lg`, `$bp-xl`

## Recent Highlights
### Hero Refactor
- Migrated from static JSX to data schema (`heroConfig`) with arrays of line parts & intro segments.
- Hidden semantic `<h1>` + aria-hidden visual lines for assistive tech clarity.
- CTAs now mapped from config with proper hrefs.
- Dedicated `hero.scss` partial; spacing responsive down to small screens.

### Nudge Alert (Top Banner)
- Config in `src/data/nudge.ts` (typed message parts: text | link | emoji).
- Accessible `role="status"` (polite announcement) + dismiss button.
- Token-aligned styling in `_nudge.scss` (rounded bottom corners, glass shadow).
- Easily extendable for variants (info / announcement / experimental).

### Reads Section Optimization
- WebP 1x/2x generation via `npm run optimize:reads` (Sharp) → `public/figma-assets/optimized/`.
- `<picture>` element with explicit intrinsic sizes prevents layout shift.
- Reduced-motion disables marquee animation.

### Footer Redesign
- Data-driven serif/sans heading blend; semantic `<footer>` landmark.
- Responsive scaling of large logomark text.

## Commands
```bash
# Dev
npm run dev
# Production build
npm run build
# Preview locally
npm run preview
# Lint & format
npm run lint
npm run format
# Generate WebP covers for Reads
npm run optimize:reads
```

## Docker
Multi-stage build produces a tiny nginx-based image serving static `dist/` output.

Build image:
```bash
docker build -t gurek-portfolio .
```
Run container:
```bash
docker run --rm -p 8080:80 gurek-portfolio
```
Visit: http://localhost:8080

### Customization
- Adjust caching or add Brotli in `nginx.conf`.
- Provide environment-based base path by setting `VITE_BASE` at build and updating nginx root if deploying under a subpath.

## Accessibility Practices
- Single canonical H1 (Hero) with visually-hidden text.
- Decorative imagery marked `aria-hidden="true"`.
- Reduced motion respected: disables or simplifies animations.
- Focus-visible styles provided for interactive elements (buttons, close control, links).
- Landmarks: `<header>` (Hero), `<footer>` (Footer), plus top `role="status"` for announcement.

## Performance Considerations
- Static asset hashing via Vite.
- WebP conversion for Reads; future AVIF optional.
- Intentional avoidance of heavy runtime libraries.
- Nginx config sets immutable cache headers for hashed assets.

## Roadmap (Short Term)
- Decorative icons integration in Hero (subtle, aria-hidden).
- LocalStorage persistence for dismissed nudge.
- Button prop typing improvements (remove any).
- Parallax / micro-interactions (opt-in, reduced-motion safe).
- WebP/AVIF pipeline generalization beyond Reads.

## Contributing / Development Workflow
1. Add or update data in `src/data/*`.
2. Style via a new SCSS partial (import inside `global.scss`).
3. Run `npm run dev` for live reload.
4. Optimize new reading covers with `npm run optimize:reads` before commit.
5. Ensure `npm run lint` passes.

## License
TBD – ensure rights for any non-original assets before public deployment.

---
Feel free to adapt the structure or request a targeted enhancement (performance, accessibility, animations, etc.).
