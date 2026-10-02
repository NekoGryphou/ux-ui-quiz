# UI Quiz Lab

A self-training quiz on UX/UI design: each question shows a realistic interface mock and asks what is wrong with it, which of two versions works better, or where the problem is. Built for internal use at Kanoma, with the Kanoma brand applied to the app shell (not to the mocks).

## Stack and commands

Svelte 5 (runes) + TypeScript (strict) + SCSS, built with Vite, managed with pnpm.

| Command                 | What it does                                                                     |
| ----------------------- | -------------------------------------------------------------------------------- |
| `pnpm dev`              | Dev server on port 4201                                                          |
| `pnpm build`            | `svelte-check` → `eslint` → quiz validation → `vite build`                       |
| `pnpm validate:quizzes` | Checks every quiz’s data and renders each mock to verify hotspot ids             |
| `pnpm format`           | Prettier (with `prettier-plugin-svelte`); never format by hand                   |
| `pnpm lint`             | ESLint (typescript-eslint strict + stylistic type-checked, eslint-plugin-svelte) |

Deployment: `.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages on push to `main`.

Code conventions (typing, folder split, no comments, no types in `.svelte` files) are in `CLAUDE.md`.

## How the quiz works

- **Pool and runs:** 105 questions in `src/quizzes/`. A full run deals **30 random questions** (`FULL_RUN_SIZE` in `src/engine/const/session.const.ts`) with shuffled answers. Practice runs: _Retry the ones I missed_ and _Quick 10_.
- **Question kinds:** `single`, `multiple` (2+ correct answers, enforced at build), `hotspot` (click areas of the mock) and `compare` (pick the better of two variants; `layout: "stacked"` stacks them vertically).
- **Persistence:** session, practice run and score history live in `localStorage` (keys `ui-quiz-lab:*`), synced across tabs.
- **Routing:** hash routes, `#/quiz/N`, `#/results`, `#/review/N`, `#/practice/N`, `#/kit` (dev only).
- **Keyboard:** 1–9 pick, Space select, Enter check/next, ← → move.

### Debug panel (dev only)

Bottom-right **Debug** button: lists the whole pool and jumps to any question, even outside the current run. **Question order** toggles between _random (30)_ and _fixed_ (all questions in file order, constant seed), so reloads keep the same order while checking content.

## Writing a question

One file per question: `src/quizzes/NN-slug.svelte`, sorted numerically.

- `<script module>` exports `meta: QuizMeta` (id, title, principle, scenario, prompt, kind, choices/regions, correct, explanation, optional `links`).
- The default export is the mock. Compare mocks switch on the `variant` prop (`"a"` / `"b"`); hotspot mocks wrap each area in `<Hotspot id>`.
- Writing rules (enforced by review, partly by the validator): right and wrong answers share wording and length, distractors are real but secondary practices, the scenario states the user’s goal without naming the flaw, the mock shows the flaw visually.
- WCAG links: `wcag(criterion, name, slug)` from `src/quizzes/utils/wcag.utils.ts`.

### Mock kit (`src/mock/`)

Reusable pieces, all themable through `--mock-*` tokens (`src/styles/_tokens.scss`):

- Shells: `BrowserShell`, `PhoneShell`, `FoldableShell`, `TabletShell`, `RetroBrowser`, `RetroWindow`, `TerminalScreen` (CRT), `ViewportBadge`.
- Components: buttons, fields, cards, modals, tables, nav bars, alerts, `KeyboardSandbox` (real Tab focus), `CodeEditor`, `Photo`, `BrandMark` (generated logos).
- `BrandTheme brand="…"`: seven company styles (fintech, playful, editorial, brutalist, luxury, eco, corporate) so mocks don’t all look alike.
- The kit preview is at `#/kit` in dev.

### Images

- Product and scene photos come from **Wikimedia Commons** (`src/quizzes/const/photo.const.ts`); each question credits them in its explanation via `photoCredits()`.
- Avatars in Q54: DiceBear pixel-art API (CC0), hotlinked.

### Hotspot rings

Selection outlines live in `src/components/HotspotRing.svelte`; every state (hover, selected, correct, wrong, missed) is one row of the `RING_STYLES` table in `src/components/const/hotspot-ring.const.ts`. Geometry comes from `measureRing()` (follows each element’s corner radii).

## Notes for the reviewer

**State**

- Nothing has been committed since the initial import: the whole refactor and all questions are uncommitted work.
- `pnpm build` passes (types, lint, quiz validation). A headless smoke test of the first 103 questions in fixed order (desktop light, 390px dark) found no runtime errors, broken images or horizontal overflow; Q104–Q105 were added afterwards and only checked visually.
- The GitHub Pages workflow has **never run**; it now uses Node 24 (the build runs `scripts/validate-quizzes.ts` with Node’s built-in TypeScript support).

**Not covered**

- No automated tests in the repo. Earlier Playwright/axe checks (no control movement after answering, no answer carry-over, contrast) were ad-hoc scripts outside the repo and have not been re-run on Q41–Q105.
- Many newer mocks were checked on desktop light mode only.
- Intentional accessibility flaws in mocks will show up in axe (they are the point of the question); app chrome itself passed axe.

**Content and assets to double-check**

- `src/quizzes/assets/wall-sculpture.jpg` (Q103) is a photo of an artwork supplied by the team; its licence is unknown. Fine for internal use, replace before any public release.
- Q41 hotlinks a GIF from Steam user content (`src/quizzes/const/media.const.ts`); it may disappear.
- Wikimedia images are hotlinked thumbnails, not copied into the repo.

**Areas worth a look**

- `src/quizzes/types/quiz-mocks.types.ts` grows with one interface per quiz; could be split by domain.
- Animated mocks (Q77, Q79, Q80, Q87, Q104) use hand-written percentage keyframe timelines; a small storyboard helper would make them easier to edit.
- Many quiz mocks use literal colours and fonts on purpose (each imitates a brand or an era); the shared kit is fully tokenised.
