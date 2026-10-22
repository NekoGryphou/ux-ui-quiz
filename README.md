# Kanom’UI

A self-training quiz on UX/UI design: each question shows a realistic interface mock and asks what is wrong with it, which of two versions works better, or where the problem is. Built for internal use at Kanoma, with the Kanoma brand applied to the app shell (not to the mocks).

## Stack and commands

Svelte 5 (runes) + TypeScript (strict) + SCSS, built with Vite, managed with pnpm.

| Command                 | What it does                                                                                                               |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `pnpm dev`              | Dev server on `DEV_PORT` from `.env`                                                                                       |
| `pnpm build`            | `svelte-check` → `eslint` → `stylelint` → `knip` → `prettier --check` → `vitest` → quiz validation → `vite build`          |
| `pnpm test`             | Vitest unit tests (engine, routing, screen and ring utils)                                                                 |
| `pnpm test:coverage`    | Unit tests with a coverage report in `coverage/`                                                                           |
| `pnpm e2e`              | Playwright browser tests (hotspot rings, focus, keyboard sandbox, cross-tab sync, preloading, answering) on `E2E_PORT`     |
| `pnpm validate:quizzes` | Checks every quiz’s data, renders each mock to verify hotspot ids, and requires animated quizzes to declare `motion: true` |
| `pnpm format`           | Prettier (with `prettier-plugin-svelte`); never format by hand                                                             |
| `pnpm lint`             | ESLint (typescript-eslint strict + stylistic type-checked, eslint-plugin-svelte)                                           |
| `pnpm lint:styles`      | Stylelint (recommended SCSS rules, Svelte `<style>` blocks included)                                                       |
| `pnpm knip`             | Unused files, exports and dependencies                                                                                     |

Before the first `pnpm e2e`, install Chromium and its system libraries: `pnpm exec playwright install chromium` and `sudo env "PATH=$PATH" pnpm exec playwright install-deps chromium`.

Deployment: `.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages on push to `main`.

Code conventions (typing, folder split, no comments, no types in `.svelte` files) are in `CLAUDE.md`.

## How the quiz works

- **Pool and runs:** 111 questions in `src/quizzes/`. A full run deals **30 random questions** (`FULL_RUN_SIZE` in `src/engine/const/session.const.ts`) with shuffled answers. Practice runs: _Retry the ones I missed_ and _Quick 10_. Only one run is in progress at a time: starting another asks to abandon the current one.
- **Question kinds:** `single`, `multiple` (2+ correct answers, enforced at build), `hotspot` (click areas of the mock) and `compare` (pick the better of two variants; `layout: "stacked"` stacks them vertically).
- **Persistence:** session, practice run and score history live in `localStorage` (keys `kanom-ui:*`), synced across tabs.
- **Routing:** hash routes, `#/quiz/N`, `#/results`, `#/review/N`, `#/practice/N`, `#/kit` (dev only).
- **Keyboard:** 1–9 pick, Space select, Enter check/next, ← → move.

### Debug panel (dev only)

Bottom-right **Debug** button: lists the whole pool and jumps to any question, even outside the current run. **Question order** toggles between _random (30)_ and _fixed_ (all questions in file order, constant seed), so reloads keep the same order while checking content.

## Writing a question

Two files per question, sorted numerically:

- `src/quizzes/meta/NN-slug.meta.ts` exports `meta: QuizMeta` (id, title, principle, scenario, prompt, kind, choices/regions, correct, explanation, optional `links`, `motion: true` when the mock animates). All metadata is bundled up front.
- `src/quizzes/NN-slug.svelte` is the mock. It is code-split and loaded on demand; the next questions of the run are preloaded when the browser is idle. Compare mocks switch on the `variant` prop (`"a"` / `"b"`); hotspot mocks wrap each area in `<Hotspot id>`.
- Mocks never render `<h1>`–`<h6>` (the validator rejects them): use a styled `<p>` or `<div>`, so the fake page doesn't pollute the quiz's heading outline.
- With the OS "reduce motion" setting on, animations in mocks are frozen until the user presses **Play animation** under the preview.
- Writing rules (enforced by review, partly by the validator): right and wrong answers share wording and length, distractors are real but secondary practices, the scenario states the user’s goal without naming the flaw, the mock shows the flaw visually.
- WCAG links: `wcag(criterion, name, slug)` from `src/quizzes/utils/wcag.utils.ts`.

### Mock kit (`src/mock/`)

Reusable pieces, all themable through `--mock-*` tokens (`src/styles/_mock-tokens.scss`):

- Shells: `BrowserShell`, `PhoneShell`, `FoldableShell`, `TabletShell`, `RetroBrowser`, `RetroWindow`, `TerminalScreen` (CRT), `ViewportBadge`.
- Components: buttons, fields, cards, modals, tables, nav bars, alerts, `KeyboardSandbox` (real Tab focus), `CodeEditor`, `Photo`, `BrandMark` (generated logos).
- `BrandTheme brand="…"`: seven company styles (fintech, playful, editorial, brutalist, luxury, eco, corporate) so mocks don’t all look alike.
- The kit preview is at `#/kit` in dev.

### Images

- Product and scene photos come from **Wikimedia Commons**, copied into `src/quizzes/assets/photos/` and listed in `src/quizzes/const/photo.const.ts`; each question credits them in its explanation via `photoCredits()`.
- Avatars in Q54: “Pixel Art” by DiceBear (CC0 1.0, https://www.figma.com/community/file/1198754108850888330), copied into `src/quizzes/assets/avatars/` without their embedded metadata.
- Fonts are self-hosted through `@fontsource/*` (`src/styles/fonts.css`); nothing loads from an external host.

### Hotspot rings

Preview infrastructure (stage, scaling, enlarge viewer, hotspot layer and rings, lazy visual cache) lives in `src/stage/`. Selection outlines live in `src/stage/HotspotRing.svelte`; every state (hover, selected, correct, wrong, missed) is one row of the `RING_STYLES` table in `src/stage/const/hotspot-ring.const.ts`. Geometry comes from `measureRing()` (follows each element’s corner radii).

## Notes for the reviewer

**State**

- Nothing has been committed since the initial import: the whole refactor and all questions are uncommitted work.
- `pnpm build` passes (types, lint, quiz validation). A headless smoke test of the first 103 questions in fixed order (desktop light, 390px dark) found no runtime errors, broken images or horizontal overflow; Q104–Q111 were added afterward and checked visually (Q106–Q111 are code-review questions).
- The GitHub Pages workflow has **never run**; it now uses Node 24 (the build runs `scripts/validate-quizzes.ts` with Node’s built-in TypeScript support).

**Not covered**

- Unit tests (`pnpm test`) cover the engine, routing and ring geometry; browser tests (`pnpm e2e`) cover hotspots, focus, the keyboard sandbox, cross-tab sync, preloading and answering. The browser tests also run axe on the app UI in light and dark mode; quiz previews are excluded because their flaws are intentional.
- Many newer mocks were checked on desktop light mode only.
- Intentional accessibility flaws in mocks will show up in axe (they are the point of the question); app chrome itself passed axe.

**Content and assets to double-check**

- `src/quizzes/assets/wall-sculpture.jpg` (Q103) is a photo of an artwork supplied by the team; its license is unknown. Fine for internal use, replace before any public release.
- Q41's GIF (`src/quizzes/assets/club-mascot.gif`) comes from Steam user content; its license is unknown. Fine for internal use, replace before any public release.

**Areas worth a look**

- `src/quizzes/types/quiz-mocks.types.ts` grows with one interface per quiz; could be split by domain.
- Animated mocks (Q77, Q79, Q80, Q87, Q104) use handwritten percentage keyframe timelines; a small storyboard helper would make them easier to edit.
- Many quiz mocks use literal colors and fonts on purpose (each imitates a brand or an era); the shared kit is fully tokenized.
