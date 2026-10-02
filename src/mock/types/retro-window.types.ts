import type { Snippet } from "svelte";

export interface RetroWindowProps {
  title: string;
  menu?: string[];
  status?: string[];
  width?: number;
  toolbar?: Snippet;
  children: Snippet;
}
