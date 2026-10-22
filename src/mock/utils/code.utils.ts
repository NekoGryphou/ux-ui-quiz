import type { HighlighterCore, ThemedToken } from "shiki/core";
import { getContext, hasContext, setContext } from "svelte";
import { CODE_CONTEXT_KEY, ITALIC_FONT_STYLE, LANGUAGE_BY_EXTENSION } from "../const/code.const";
import type { CodeContext, CodeLanguage, CodeToken } from "../types/code.types";

/**
 * @export
 * @desc Loads Shiki with the HTML, CSS and JavaScript grammars, as a separate chunk.
 *
 * @returns The highlighter.
 */
export const loadHighlighter = async (): Promise<HighlighterCore> => {
  const [{ createHighlighterCoreSync }, { createJavaScriptRegexEngine }, css, html, javascript, theme] =
    await Promise.all([
      import("shiki/core"),
      import("shiki/engine/javascript"),
      import("shiki/langs/css.mjs"),
      import("shiki/langs/html.mjs"),
      import("shiki/langs/javascript.mjs"),
      import("shiki/themes/one-dark-pro.mjs")
    ]);
  return createHighlighterCoreSync({
    themes: [theme.default],
    langs: [css.default, html.default, javascript.default],
    engine: createJavaScriptRegexEngine()
  });
};

/**
 * @export
 * @desc Converts a Shiki token to a code token.
 *
 * @param token - Shiki token.
 *
 * @returns Colored code token.
 */
export const toCodeToken = (token: ThemedToken): CodeToken => ({
  content: token.content,
  color: token.color,
  italic: ((token.fontStyle ?? 0) & ITALIC_FONT_STYLE) !== 0
});

/**
 * @export
 * @desc Splits code into uncolored tokens, one per line.
 *
 * @param code - Source code.
 *
 * @returns Plain tokens of each line.
 */
export const plainLines = (code: string): CodeToken[][] =>
  code.split("\n").map((line: string): CodeToken[] => [{ content: line, color: undefined, italic: false }]);

/**
 * @export
 * @desc Highlighting language of a file, HTML when the extension is unknown.
 *
 * @param filename - File name shown in the editor tab.
 *
 * @returns Language of the file.
 */
export const languageOf = (filename: string): CodeLanguage =>
  LANGUAGE_BY_EXTENSION[filename.split(".").pop()?.toLowerCase() ?? ""] ?? "html";

/**
 * @export
 * @desc Shares an editor's code settings with its CodeLines; call during component initialization.
 *
 * @param context - Code settings.
 */
export const provideCodeContext = (context: CodeContext): void => {
  setContext(CODE_CONTEXT_KEY, context);
};

/**
 * @export
 * @desc Reads the enclosing editor's code settings; call during component initialization.
 *
 * @returns The settings, or undefined outside an editor.
 */
export const readCodeContext = (): CodeContext | undefined =>
  hasContext(CODE_CONTEXT_KEY) ? getContext<CodeContext>(CODE_CONTEXT_KEY) : undefined;
