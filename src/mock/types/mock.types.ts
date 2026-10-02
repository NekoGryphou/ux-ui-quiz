import type { IconName } from "../../components/types/icons.types";

export interface NavItem {
  label: string;
  icon?: IconName;
  active?: boolean;
  badge?: string;
}

export interface Step {
  label: string;
  state: "complete" | "current" | "upcoming";
}

export interface Column {
  label: string;
  align?: "start" | "end";
  sort?: "asc" | "desc";
}

export interface Tab {
  icon: IconName;
  label: string;
  active?: boolean;
  badge?: string;
}
