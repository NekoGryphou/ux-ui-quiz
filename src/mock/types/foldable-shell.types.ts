import type { Snippet } from "svelte";

export interface FoldableShellProps {
  width?: number;
  height?: number;
  time?: string;
  label?: string;
  children: Snippet;
}
