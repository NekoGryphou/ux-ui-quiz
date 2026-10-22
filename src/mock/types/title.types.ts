import type { Snippet } from "svelte";

/**
 * @export
 * @desc Props of the mock Title text.
 *
 * @property size - Type size.
 * @property children - Title content.
 */
export interface TitleProps {
  /** Type size, "md" by default. */
  size?: "sm" | "md" | "lg";

  /** Title content. */
  children: Snippet;
}
