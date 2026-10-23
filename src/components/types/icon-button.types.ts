import type { IconName } from "./icons.types";

/**
 * @export
 * @desc Props of the round IconButton, showing an icon or a short text.
 *
 * @property icon - Icon to show.
 * @property text - Short text shown instead of an icon.
 * @property label - Accessible name and tooltip.
 * @property variant - Visual style.
 * @property onclick - Click handler.
 */
export interface IconButtonProps {
  /** Icon to show. */
  icon?: IconName;

  /** Short text shown instead of an icon. */
  text?: string;

  /** Accessible name and tooltip. */
  label: string;

  /** Visual style. */
  variant?: "outline" | "ghost";

  /** Click handler. */
  onclick: (event: MouseEvent & { currentTarget: HTMLButtonElement }) => void;
}
