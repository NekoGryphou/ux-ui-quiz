import type { CodeLanguage } from "../types/code.types";

/**
 * @export
 * @desc Shiki theme used by code mocks.
 */
export const CODE_THEME: string = "one-dark-pro";

/**
 * @export
 * @desc Bit set in a Shiki token's font style when it is italic.
 */
export const ITALIC_FONT_STYLE: number = 1;

/**
 * @export
 * @desc Svelte context key for the code settings of an editor.
 */
export const CODE_CONTEXT_KEY: symbol = Symbol("code-editor");

/**
 * @export
 * @desc Highlighting language for each file extension.
 */
export const LANGUAGE_BY_EXTENSION: Readonly<Record<string, CodeLanguage>> = {
  css: "css",
  js: "javascript",
  mjs: "javascript",
  scss: "css",
  ts: "javascript"
};
