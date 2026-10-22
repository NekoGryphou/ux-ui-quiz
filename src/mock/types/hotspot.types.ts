import type { Snippet } from "svelte";

/**
 * @export
 * @desc Props of the mock Hotspot, a selectable answer region of a preview.
 *
 * @property id - Answer option id.
 * @property inline - Renders as an inline span.
 * @property children - Wrapped content.
 */
export interface HotspotProps {
  /** ID of the quiz answer option this region stands for. */
  id: string;

  /** Renders as a span instead of a div, false by default. */
  inline?: boolean;

  /** Wrapped content. */
  children: Snippet;
}
