import type { Tab } from "./mock.types";

/**
 * @export
 * @desc Props of the mock mobile TabBar.
 *
 * @property tabs - Tabs in order.
 * @property iconsOnly - Hides the labels.
 */
export interface TabBarProps {
  /** Tabs in order; labels must be unique. */
  tabs: Tab[];

  /** Hides the labels, false by default. */
  iconsOnly?: boolean;
}
