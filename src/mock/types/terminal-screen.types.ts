/**
 * @export
 * @desc One text line of a mock terminal.
 *
 * @property text - Line text.
 * @property bright - Highlighted line.
 */
export interface TerminalLine {
  /** Line text. */
  text: string;

  /** Highlighted line. */
  bright?: boolean;
}

/**
 * @export
 * @desc Props of the mock TerminalScreen, an old CRT terminal.
 *
 * @property lines - Screen lines.
 * @property prompt - Input line with cursor.
 * @property model - Model name on the case.
 * @property width - Monitor width in pixels.
 */
export interface TerminalScreenProps {
  /** Screen lines. */
  lines: TerminalLine[];

  /** Input line shown last with a cursor. */
  prompt?: string;

  /** Model name on the case, "DISPLAY STATION 3180" by default. */
  model?: string;

  /** Monitor width in pixels, 640 by default. */
  width?: number;
}
