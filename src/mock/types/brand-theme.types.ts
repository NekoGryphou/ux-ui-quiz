import type { Snippet } from "svelte";

export type BrandName = "fintech" | "playful" | "editorial" | "brutalist" | "luxury" | "eco" | "corporate";

export type BrandTokens = Record<string, string>;

export interface BrandThemeProps {
  brand: BrandName;
  children: Snippet;
}
