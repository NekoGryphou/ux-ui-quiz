import type { IconName } from "./icons.types";
import type { Snippet } from "svelte";

export interface ButtonProps {
  variant?: "primary" | "accent" | "secondary" | "ghost" | "danger";
  size?: "md" | "lg";
  href?: string;
  iconStart?: IconName;
  iconEnd?: IconName;
  disabled?: boolean;
  onclick?: () => void;
  children: Snippet;
}
