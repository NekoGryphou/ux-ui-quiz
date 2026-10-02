import type { Snippet } from "svelte";

export interface AppBarProps {
  title: string;
  back?: boolean;
  large?: boolean;
  actions?: Snippet;
}
