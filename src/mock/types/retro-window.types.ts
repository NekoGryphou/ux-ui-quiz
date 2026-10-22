import type { Snippet } from "svelte";

/**
 * @export
 * @desc Props of the mock RetroWindow, an old desktop OS window.
 *
 * @property title - Title bar text.
 * @property menu - Menu bar entries.
 * @property status - Status bar cells.
 * @property width - Window width in pixels.
 * @property toolbar - Toolbar content.
 * @property children - Window content.
 */
export interface RetroWindowProps {
  /** Title bar text. */
  title: string;

  /** Menu bar entries; hidden when empty. */
  menu?: string[];

  /** Status bar cells; hidden when empty. */
  status?: string[];

  /** Window width in pixels, 560 by default. */
  width?: number;

  /** Toolbar content under the menu bar. */
  toolbar?: Snippet;

  /** Window content. */
  children: Snippet;
}
