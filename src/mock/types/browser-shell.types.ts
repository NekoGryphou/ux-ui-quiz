import type { Snippet } from "svelte";

/**
 * @export
 * @desc Props of the mock modern BrowserShell frame.
 *
 * @property url - Address bar text.
 * @property children - Page content.
 */
export interface BrowserShellProps {
  /** Address bar text. */
  url: string;

  /** Page content. */
  children: Snippet;
}
