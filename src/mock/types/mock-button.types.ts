import type { IconName } from "../../components/types/icons.types";
import type { Snippet } from "svelte";

export interface MockButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "success" | "link";
  size?: "sm" | "md" | "lg";
  icon?: IconName;
  disabled?: boolean;
  block?: boolean;
  children?: Snippet;
}
