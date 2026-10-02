import type { Snippet } from "svelte";

export interface TitleProps {
  size?: "sm" | "md" | "lg";
  children: Snippet;
}
