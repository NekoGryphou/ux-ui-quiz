import type { NavItem } from "./mock.types";

export interface SideNavProps {
  items: NavItem[];
  activeStyle?: "default" | "faint";
}
