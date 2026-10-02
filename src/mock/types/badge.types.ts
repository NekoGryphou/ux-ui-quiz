import type { Snippet } from "svelte";

export interface BadgeProps {
  tone?: "neutral" | "info" | "success" | "warning" | "danger";
  removable?: boolean;
  children: Snippet;
}
