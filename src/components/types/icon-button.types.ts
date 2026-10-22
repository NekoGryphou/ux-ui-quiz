import type { IconName } from "./icons.types";

/**
 * @export
 * @desc Props of the icon-only IconButton.
 *
 * @property icon - Icon to show.
 * @property label - Accessible name and tooltip.
 * @property variant - Visual style.
 * @property onclick - Click handler.
 */
export interface IconButtonProps {
  /** Icon to show. */
  icon: IconName;

  /** Accessible name and tooltip. */
  label: string;

  /** Visual style. */
  variant?: "outline" | "ghost";

  /** Click handler. */
  onclick: (event: MouseEvent & { currentTarget: HTMLButtonElement }) => void;
}
