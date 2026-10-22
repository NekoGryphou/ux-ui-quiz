import type { Snippet } from "svelte";

/**
 * @export
 * @desc Props of the mock desktop TopBar.
 *
 * @property brand - Brand name.
 * @property children - Bar content.
 */
export interface TopBarProps {
  /** Brand name shown with a generated logo. */
  brand?: string;

  /** Bar content after the brand. */
  children?: Snippet;
}
