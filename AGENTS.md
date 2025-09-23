# Repository Guidelines

## Project Structure & Module Organization
- `src/`: React + TypeScript source.
  - `components/` (PascalCase `.tsx`), `hooks/`, `data/`, `styles/` (SCSS partials like `_tokens.scss`, `_theme.scss`).
  - `imageManifest.ts` centralizes image imports.
- `public/figma-assets/`: raw assets; optimized outputs in `public/figma-assets/optimized/`.
- `assets/`: additional static assets bundled by Vite.
- `scripts/`: maintenance scripts (e.g., `optimize-reads.mjs`).
- `dist/`: production build output.
- Root configs: `vite.config.ts`, `tsconfig.json`, `.eslintrc.cjs`, `.prettierrc`, `Dockerfile`, `nginx.conf`.

## Build, Test, and Development Commands
- `npm run dev`: Start Vite dev server (default http://localhost:5173).
- `npm run build`: Build to `dist/`.
- `npm run preview`: Serve the production build locally.
- `npm run lint`: ESLint for `src/**/*.{ts,tsx}`.
- `npm run format`: Prettier write across the repo.
- `npm run optimize:reads`: Generate optimized cover images from `public/figma-assets/`.
- Docker: `docker build -t portfolio .` then `docker run -p 8080:80 portfolio`.

## Coding Style & Naming Conventions
- Language: TypeScript, React function components, hooks-first.
- Formatting (Prettier): single quotes, semicolons, trailing commas, width 100.
- Linting (ESLint): TS + React Hooks; prefix unused vars/args with `_`.
- Naming: components `PascalCase` (e.g., `Hero.tsx`), hooks `useCamelCase` (e.g., `useReveal.ts`), variables/functions `camelCase`, SCSS partials `_kebab-case.scss`.

## Testing Guidelines
- No test runner is configured yet. If adding tests, prefer Vitest + React Testing Library.
- Place tests alongside components as `ComponentName.test.tsx`; keep them fast and DOM-focused.

## Commit & Pull Request Guidelines
- Commit style: Conventional Commits (e.g., `feat(hero): add headline animation`, `fix(reads): correct image sizes`).
- PRs: concise title/description, link any issues, include screenshots/GIFs for UI changes, list notable trade-offs.
- Quality gates: run `npm run lint`, `npm run build`, and update `README.md`/`TODO.md` if behavior or tasks change. If assets change, run `npm run optimize:reads` and commit outputs.

## Security & Configuration Tips
- Do not commit secrets; this is a static site served via Nginx.
- Only adjust `nginx.conf` when changing routes or asset paths; keep cache headers for `dist/` intact.

