import type { Snippet } from "svelte";

/**
 * @export
 * @desc Props of the mock unfolded FoldableShell device frame.
 *
 * @property width - Frame width in pixels.
 * @property height - Screen height in pixels.
 * @property time - Status bar clock.
 * @property label - Caption above the device.
 * @property children - Screen content.
 */
export interface FoldableShellProps {
  /** Frame width in pixels, 560 by default. */
  width?: number;

  /** Screen height in pixels, 500 by default. */
  height?: number;

  /** Status bar clock, "9:41" by default. */
  time?: string;

  /** Caption above the device. */
  label?: string;

  /** Screen content. */
  children: Snippet;
}
