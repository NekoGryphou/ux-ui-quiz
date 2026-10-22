import type { Snippet } from "svelte";

/**
 * @export
 * @desc Language a code mock is highlighted as.
 */
export type CodeLanguage = "html" | "css" | "javascript";

/**
 * @export
 * @desc One colored piece of a highlighted code line.
 *
 * @property content - Token text.
 * @property color - Text color, none before highlighting.
 * @property italic - Whether the token is italic.
 */
export interface CodeToken {
  /** Token text. */
  content: string;

  /** Text color, undefined before highlighting. */
  color: string | undefined;

  /** Whether the token is italic. */
  italic: boolean;
}

/**
 * @export
 * @desc Code settings shared by a CodeEditor with its CodeLines.
 *
 * @property language - Highlighting language.
 */
export interface CodeContext {
  /** Highlighting language, from the editor's file name. */
  readonly language: CodeLanguage;
}

/**
 * @export
 * @desc Props of the mock CodeEditor frame.
 *
 * @property filename - Tab label.
 * @property compact - Tighter layout.
 * @property children - Editor content.
 */
export interface CodeEditorProps {
  /** Tab label. */
  filename: string;

  /** Tighter layout, false by default. */
  compact?: boolean;

  /** Editor content, usually CodeLines. */
  children: Snippet;
}

/**
 * @export
 * @desc Props of the mock CodeLines highlighted HTML listing.
 *
 * @property code - HTML source.
 * @property start - First line number.
 */
export interface CodeLinesProps {
  /** HTML source, split on newlines. */
  code: string;

  /** Number shown on the first line. */
  start: number;
}
