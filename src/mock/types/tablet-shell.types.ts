import type { Snippet } from "svelte";

/**
 * @export
 * @desc Props of the mock TabletShell device frame.
 *
 * @property width - Frame width in pixels.
 * @property height - Screen height in pixels.
 * @property children - Screen content.
 */
export interface TabletShellProps {
  /** Frame width in pixels, 600 by default. */
  width?: number;

  /** Screen height in pixels, 440 by default. */
  height?: number;

  /** Screen content. */
  children: Snippet;
}
