## Testing and Temporary Files

When testing scripts, configurations, or code that requires creating
temporary artifacts:

**ALWAYS use `/tmp/` for test files and folders**

- Create isolated test environments in `/tmp/` (e.g., `/tmp/test-$$` or `/tmp/test-$(date +%s)`)
- Never create test artifacts in the project directory
- Clean up `/tmp/` directories after testing completes

**Examples:**

- ❌ Creating test folders like `.lefthook/` or `test-data/` in the project
- ❌ Creating temporary config files for testing in the project root
- ✅ Using `/tmp/test-myfeature/` for all test artifacts
- ✅ Copying files to `/tmp/` before running tests on them

**Exception:** Only write to the project directory for actual deliverables
or when explicitly requested by the user.

**Testing frequency:**

- Testing is NOT required after every change
- Only test when:

  - Making significant or complex changes
  - Explicitly requested by the user
  - The change could break existing functionality

- Trust simple refactoring and straightforward changes without always testing

## Build Frequency

- Do NOT run `pnpm build` after every small visual tweak
- Run a build only when:

  - A significant layout or rendering change is complete
  - A structural refactor could have broken the app
  - The user explicitly asks for verification

## Refactoring Standard

- Never do a quick patch when a refactor is needed
- If the current structure is causing repeated UI or layout regressions, refactor it instead of layering another workaround
- Prefer fixing spacing, alignment, and component structure at the system level rather than patching one screenshot-specific symptom

## Formatting

- Never format code by hand; Prettier (with `prettier-plugin-svelte`) owns all formatting
- After any change, run `pnpm format` (or `pnpm exec prettier --write <files>` for the touched files)
- Config lives in `.prettierrc.json`; change it there instead of working around it

## Code Structure and Linting

- `pnpm lint` (ESLint, typescript-eslint strict + stylistic type-checked, eslint-plugin-svelte) must pass; it runs as part of `pnpm build`
- Strong typing is mandatory: explicit return types, an explicit type on every variable, constant and class field (`const RING_LENGTH: number = 2`), no `any`, no non-null assertions, no truthy checks on non-booleans
- Split code by kind into per-layer folders: `<layer>/types/<domain>.types.ts`, `<layer>/const/<domain>.const.ts`, `<layer>/utils/<domain>.utils.ts`
- No `interface` or `type` declarations inside `.svelte` files: component props live in `<layer>/types/<component>.types.ts` as `<Component>Props`
- No free-form explanatory comments; allowed are functional directives (`svelte-ignore`, `/// <reference>`, JetBrains `// noinspection X` / `<!--suppress X -->`) and TSDoc blocks
- TSDoc is required on classes, their members, functions, module-level constants, interfaces (plus a `/** */` line per property) and type aliases in `.ts` files, and on every function in `.svelte` scripts (tagged `@private`; props are documented in their `*Props` interface). Use the project format: `@public` / `@private` / `@export`, then `@desc`, `@template`, `@param`, `@returns`, `@example` (only when useful), `@property` for interfaces, separated by blank `*` lines; reference code with `{@link Name}`, never backticks
- TSDoc stays clear but small: `@desc` is one short sentence saying what something is or returns, never how it works; no narrative or filler; tag descriptions are a few words
- Use `noinspection` only for confirmed IDE false positives, placed directly above the flagged statement (in JS/TS it covers one statement, not the file); when the IDE cannot see a usage (string paths, `import.meta.glob`), add one `// used by <file>` line above the directive
- New words flagged by the spellchecker (brand names, foreign text, intentional typos in mocks) go in `project.dic`
- Classes: explicit `public`/`private`/`protected` on every member, never `#private` (both lint-enforced)

## Layers

- `engine/` is pure quiz logic and must not import UI or content; `components/` holds shared UI with no app state; previews (`mock/`, `quizzes/`) must not import session or routing state. ESLint enforces these boundaries
- `src/app/session.ts` is the composition root that wires the catalog and storage into the engine `Session`

## Code Ordering

- Svelte `<script>`: imports, `$props()` / `$props.id()`, constants and context reads, `$state`, `$derived`, context provides, functions and handlers, then `$effect` / lifecycle last
- Within a group, single-line declarations before multi-line ones, unless a dependency forces otherwise
- Classes: reactive state read by `$derived` fields first (TypeScript requires it), then public fields, private fields, constructor, getters, public methods, private methods
- Modules: constants, private helpers, exports, singletons last
- Quiz metas use one key order: `id, kind, layout, motion, title, principle, scenario, prompt, correct, choices | regions, explanation, links`
- Import order and class member order are enforced by ESLint (`simple-import-sort`, `member-ordering`); the rest is a review habit

## Tests

- `pnpm test`: Vitest unit tests in `<layer>/tests/`, part of `pnpm build`; `pnpm test:coverage` adds a coverage report
- `pnpm build` also runs `stylelint` (recommended SCSS rules) and `knip` (unused files, exports, dependencies); keep both clean instead of adding ignores
- TSDoc presence and tag order are enforced by `eslint-plugin-jsdoc`
- The axe accessibility tests (`e2e/a11y.e2e.ts`) scan the app UI in light and dark mode; quiz previews (`.frame`) are excluded because their flaws are intentional
- `pnpm e2e`: Playwright browser tests in `e2e/*.e2e.ts`, on their own dev server (`E2E_PORT` in `.env`; dev server uses `DEV_PORT`, personal overrides go in the gitignored `.env.local`); not part of `pnpm build`, but the deploy workflow runs them before publishing
- First run on a machine: `pnpm exec playwright install chromium` and `sudo env "PATH=$PATH" pnpm exec playwright install-deps chromium`
