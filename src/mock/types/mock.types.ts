import type { IconName } from "../../components/types/icons.types";

/**
 * @export
 * @desc One entry of a mock side navigation.
 *
 * @property label - Entry text.
 * @property icon - Leading icon.
 * @property active - Current entry.
 * @property badge - Trailing count.
 */
export interface NavItem {
  /** Entry text. */
  label: string;

  /** Leading icon. */
  icon?: IconName;

  /** Marks the current entry. */
  active?: boolean;

  /** Trailing count or tag. */
  badge?: string;
}

/**
 * @export
 * @desc One step of a mock stepper.
 *
 * @property label - Step name.
 * @property state - Progress state.
 */
export interface Step {
  /** Step name. */
  label: string;

  /** Progress state. */
  state: "complete" | "current" | "upcoming";
}

/**
 * @export
 * @desc One column header of a mock table.
 *
 * @property label - Header text.
 * @property align - Cell alignment.
 * @property sort - Active sort direction.
 */
export interface Column {
  /** Header text. */
  label: string;

  /** Cell alignment for the whole column. */
  align?: "start" | "end";

  /** Active sort direction. */
  sort?: "asc" | "desc";
}

/**
 * @export
 * @desc One tab of a mock bottom tab bar.
 *
 * @property icon - Tab icon.
 * @property label - Tab text.
 * @property active - Current tab.
 * @property badge - Notification count.
 */
export interface Tab {
  /** Tab icon. */
  icon: IconName;

  /** Tab text; also the list key. */
  label: string;

  /** Marks the current tab. */
  active?: boolean;

  /** Notification count on the icon. */
  badge?: string;
}
