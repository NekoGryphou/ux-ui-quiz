import type { Snippet } from "svelte";

export interface RetroBrowserProps {
  title: string;
  url: string;
  width?: number;
  children: Snippet;
}
