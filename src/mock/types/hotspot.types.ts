import type { Snippet } from "svelte";

export interface HotspotProps {
  id: string;
  inline?: boolean;
  children: Snippet;
}
