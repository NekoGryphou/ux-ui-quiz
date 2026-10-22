/**
 * @export
 * @desc Props of the mock Tabs strip.
 *
 * @property items - Tab labels.
 * @property active - Active tab index.
 */
export interface TabsProps {
  /** Tab labels. */
  items: string[];

  /** Active tab index, 0 by default. */
  active?: number;
}
