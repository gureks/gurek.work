### Development - Urgent Important
[x] Rename project folder ASAP
[x] Dark Mode Switching using Tokens (data-theme + ThemeToggle) - Stuck somewhere
[x] Verify Variables (Duplication)
[-] Verify Images (export, audit, and renaming)
[ ] All Sections responsive render
    - (✅) Hero 
    - (✅) Sticky AI Projects (✅ base + entrance reveal)
    - (✅) Bento Design Projects (✅ data-driven + reveal)
    - (✅) Play / Not Work Section (✅ 3-row infinite carousel + mask; needs real assets)
    - (✅) Reads (✅ data-driven + carousel + mark; needs real assets)
    - (✅) Footer (baseline)
[x] Clean extra unnecessary sections
[ ] Asset imports final pass (some assets still unused)
[x] Data-driven cards config file (moved to src/data/projects.ts)
[x] Github + Codex integration
[x] Go live dockerization

### Development - Copilot Recommendations
[x] Accessibility polish: Decorative media now aria-hidden; single H1 introduced; hidden semantic heading text in Hero.
[x] Animation refinement (phase 1): Intersection Observer reveal with reduced motion safeguard.
[ ] Animation refinement (phase 2): Consider subtle parallax on scroll (respect reduced motion).
[ ] Fix the Button any type. (Type the icon prop + children appropriately)
[ ] Remove unused imports/presets or prefix them with _ to silence warnings.
[x] Add lazy-loading and optimization hints for large images. (Next: convert PNGs to WebP/AVIF)
[x] Implement dark mode theming toggle.

### Development - Future Must-Haves
[x] Add ESLint + Prettier for consistency
[ ] Mouse hover / subtle parallax effects
[x] Add accessibility labels (aria-hidden or aria-label) for decorative images (covered by aria-hidden updates)
[ ] prefers-reduced-motion alternate for ticker (partially handled – document behavior & maybe reduce duplicates)


Potential Refactors:


### Design
[ ] Create Cursor Variants
[ ] Add images in 'not-work' section


### ✅ What’s in place
1. First Scaffold
    [x] Full React + TS + Vite scaffold (package.json, tsconfig.json, vite.config.ts)
    [x] Design tokens in _tokens.scss with CSS custom properties
    [x] Global utilities and responsive mixins (global.scss)
    [x] Reusable components: Hero, AiProjectCard, PortfolioBento, Button, Tag, Footer, Layout
    [x] Asset manifest (imageManifest.ts)
    [x] Responsive grid & fluid typography
    [x] Sass deprecation fixes (migrated slash division to math.div)
    [x] Build passes and TypeScript type check clean
    [x] Documentation (README.md)

2. Created & Refactored `AiProjectsSection` + infrastructure:
	- Sticky left column (headlines + description + dual directional tag tickers).
    - Right column of three sticky-offset AI project cards (accent color borders) now data-driven.
    - Reused existing `AiProjectCard` component; presets extracted to `aiProjects.ts`.
    - SCSS partial `_ai-projects.scss` added; removed inline styles.
    - Responsive Behavior:
        - <768px: layout stacks, sticky disabled, mask removed, longer animation duration.
        - Ticker duplicates content for seamless loop.
    - Extracted `TagTicker` component with prefers-reduced-motion handling.
    - Replaced inline styles in `AiProjectCard` with BEM classes & accent modifiers.
    - Added static asset module declarations `images.d.ts`.
    - Added ESLint + Prettier configs & scripts.
    - Began asset path modernization (remaining: unify unused asset cleanup, optional public/ copy script).

3. Implemented `BentoDesignProjects` section:
4. Implemented `PlaySection` ("Not work, but still me"):
    - Carousel: 3 rows, alternating direction (left/right), infinite via duplication, pause-on-hover.
    - Random distribution & configurable N placeholders via `generateNotWorkData`.
    - Mask applied (ticker-style) with gradient fallback.
    - Reveal animation integrated (row container), reduced-motion disables animation.
    - Needs: real imagery assets + potential hover micro-interactions + semantic roles if becomes interactive.
    - Added accessible `BeforeAfterSlider` component (drag + keyboard + labels).
    - Data arrays for columns (next: extract to separate config file).
    - SCSS partial `_bento.scss` with responsive tweaks and variants (slider, stacked, image-right, image-top).
    - Integrated into main layout replacing placeholder `PortfolioBento`.
    - Addressed lint issues; removed inline style duplication.

 - Integrate new image positional fields into AiProjectCard
 - Implement AI Project Card hover states (elevation, accent glow, image gentle scale) with reduced-motion fallbacks

4. AI Project Card Hover & Image Positioning (Docs) Contract:
 - Each image entry in `aiProjects.ts` may specify: `rotation`, `top`, `left`, `scale`, `translateX`, `translateY`.
 - `top`/`left` default to `50%` (center). Values can be percentages or any CSS length.
 - CSS custom properties emitted per image: `--img-rotation`, `--img-scale`, `--img-translate-x`, `--img-translate-y` used in SCSS for transform composition.
 - Base transform formula (SCSS): `translate(calc(-50% + var(--img-translate-x)), calc(-50% + var(--img-translate-y))) rotate(var(--img-rotation)) scale(var(--img-scale))`.
 - Hover state scales images uniformly +2.5%; foremost image (DOM order first) gets +5% for subtle depth emphasis.
 - Card hover: `translateY(-8px)` + accent-colored border brightening & glow (shadow) — disabled under `prefers-reduced-motion: reduce`.
 - Reduced motion: no elevation or scaling; only color/border changes persist.
 - Per-image hover schema (hoverScale, hoverTranslateX/Y, hoverRotate, zIndex) integrated into `aiProjects.ts` and consumed by `AiProjectCard` via CSS custom properties.

 Future Enhancements:
 - Optional stagger animation on initial reveal using existing Intersection Observer hook.
 - Data field for z-index layering explicitness if needed.

5. Reads Section (Redesigned per Figma)
- Now single masked marquee (1152x340 mask, 32px vertical padding) with 8 cover tiles duplicated for infinite scroll.
- Tile spec: 180x276, radius 16, subtle 1px background border, hover lift -6px + shadow.
- Title structure: Serif (italic 44px) for “Frameworks I Read” inline icon, then Sans (40px) for “Not Just Build”.
- Data schema simplified: single `items` array with `cover`, `title`, `alt` (decorative alt empty) and duplication handled in component.
- Reduced-motion: disables marquee animation & hover translation.
- Accessibility: Visually rich heading; underlying semantic h2 hidden text retained; covers aria-hidden (decorative).
- Mask asset reused from existing ticker; fallback could be added later (TODO).

### Next High-Value Enhancements
1. Focus styles: Add visible custom focus rings for interactive components (buttons, slider handle, toggle).
2. Performance: Convert heavy PNGs to WebP/AVIF + <picture> sources; add offline optimization script.
3. Parallax polish: Optional subtle parallax on hero / AI images (respect reduced motion).
4. Build pipeline: add ESLint to CI + precommit hook; add image optimization step (svgo/imagemin) offline.
5. Slider refinement: optional blur/transition on drag end, mobile drag tolerance improvements.
6. Mask fallback: gradient fallback for ticker mask.
7. Button typing refactor.

### Lint / Format
Run `npm run lint` for static analysis; `npm run format` to apply Prettier.

### Reads Section Image Optimization (Implemented)
Pipeline summary:
- Raw Figma PNG exports in `public/figma-assets/` (hash filenames)
- `npm run optimize:reads` executes `scripts/optimize-reads.mjs` (Sharp) producing WebP variants:
    - 1x: 180x276 (`*-180w.webp` quality ~82)
    - 2x: 360x552 (`*-360w.webp` quality ~78)
- Variants emitted to `public/figma-assets/optimized/` (idempotent – skips existing)
- `ReadItem` schema now: `png`, optional `webp1x`, `webp2x`
- `ReadsSection` uses `<picture>` with WebP `source` + PNG fallback `img` (explicit width/height to prevent CLS)

Rationale:
- WebP reduces bytes vs PNG with visually lossless output at this size
- Separate DPR sources reduce over-downloading on standard displays
- Explicit dimensions & lazy loading improve LCP & interaction readiness

Potential next steps:
- Add AVIF generation pass (feature detect or provide <source type="image/avif">)
- Generate tiny base64 LQIP placeholders to fade in high-res
- CI guard that warns if any base read item lacks WebP variants
- Add mask-image support fallback (gradient) for browsers lacking CSS masks

### Footer Redesign (Implemented)
- Data-driven config (`footer.ts`) defines heading parts, subheading tokens, CTAs, copyright, logomark.
- Component uses semantic `<footer>` landmark with hidden h2 for accessibility.
- Serif vs Sans spans mapped to token typography (sizes 44 / 40 / 26 / 24) with responsive downscaling.
- CTA buttons reuse existing `.button` styles; grouped with role="group".
- Large logomark words (160px -> responsive 96/56) with central headshot container (accessible as decorative).
- Focus styles provided for license link; color contrast meets WCAG (primary vs background > 4.5:1).
- Future: add motion subtle fade-in for logomark (respect reduced motion), include social links list if required.
