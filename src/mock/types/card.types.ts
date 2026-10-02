import type { Snippet } from "svelte";

export interface CardProps {
  title?: string;
  subtitle?: string;
  children?: Snippet;
  actions?: Snippet;
}
