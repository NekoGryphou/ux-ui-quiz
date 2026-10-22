import type { NavItem } from "./mock.types";

/**
 * @export
 * @desc Props of the mock SideNav.
 *
 * @property items - Navigation entries.
 * @property activeStyle - Active entry emphasis.
 */
export interface SideNavProps {
  /** Navigation entries. */
  items: NavItem[];

  /** Active entry emphasis, "default" by default; "faint" is barely visible. */
  activeStyle?: "default" | "faint";
}
