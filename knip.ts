import type { KnipConfig } from "knip";

/**
 * @private
 * @desc Turns CSS `@import` rules into module imports so knip sees font packages.
 *
 * @param text - CSS source.
 *
 * @returns Import statements.
 */
const cssImports = (text: string): string =>
  [...text.matchAll(/@import\s+["']([^"']+)["']/g)]
    .map((match: RegExpExecArray): string => `import "${match[1] ?? ""}";`)
    .join("\n");

/**
 * @export
 * @desc Knip configuration: entry points reached through globs or dynamic imports, and accepted exceptions.
 */
const config: KnipConfig = {
  entry: ["src/quizzes/[0-9]*.svelte", "src/quizzes/meta/*.meta.ts", "src/screens/Kit.svelte"],
  project: ["src/**/*.{ts,svelte,css}", "scripts/**/*.ts", "e2e/**/*.ts"],
  compilers: { css: cssImports },
  ignoreExportsUsedInFile: { interface: true, type: true },
  ignoreIssues: { "src/quizzes/index.ts": ["exports"] }
};

export default config;
