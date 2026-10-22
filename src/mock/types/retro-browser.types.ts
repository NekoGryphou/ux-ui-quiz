import type { Snippet } from "svelte";

/**
 * @export
 * @desc Props of the mock RetroBrowser, an old Internet Explorer window.
 *
 * @property title - Page title.
 * @property url - Address bar text.
 * @property width - Window width in pixels.
 * @property children - Page content.
 */
export interface RetroBrowserProps {
  /** Page title shown in the title bar. */
  title: string;

  /** Address bar text. */
  url: string;

  /** Window width in pixels, 640 by default. */
  width?: number;

  /** Page content. */
  children: Snippet;
}
