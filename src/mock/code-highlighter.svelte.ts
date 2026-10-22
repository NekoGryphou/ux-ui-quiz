import type { HighlighterCore } from "shiki/core";
import { CODE_THEME } from "./const/code.const";
import type { CodeLanguage, CodeToken } from "./types/code.types";
import { loadHighlighter, plainLines, toCodeToken } from "./utils/code.utils";

/**
 * @private
 * @desc Shared syntax highlighter, loaded on first use.
 */
class CodeHighlighter {
  /**
   * @private
   * @desc Loaded Shiki highlighter, null until ready.
   */
  private highlighter: HighlighterCore | null = $state.raw(null);
  /**
   * @private
   * @desc Pending load, so Shiki is imported once.
   */
  private loading: Promise<void> | null = null;

  /**
   * @public
   * @desc Starts loading Shiki if it is not loaded yet.
   */
  public load(): void {
    this.loading ??= loadHighlighter().then((highlighter: HighlighterCore): void => {
      this.highlighter = highlighter;
    });
  }

  /**
   * @public
   * @desc Tokens of each code line, plain until Shiki is loaded.
   *
   * @param code - Source code.
   * @param language - Highlighting language.
   *
   * @returns Tokens of each line.
   */
  public lines(code: string, language: CodeLanguage): CodeToken[][] {
    if (this.highlighter === null) return plainLines(code);
    return this.highlighter
      .codeToTokens(code, { lang: language, theme: CODE_THEME })
      .tokens.map((line) => line.map(toCodeToken));
  }
}

/**
 * @export
 * @desc Highlighter shared by every code mock.
 */
export const codeHighlighter: CodeHighlighter = new CodeHighlighter();
