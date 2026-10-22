import type { Snippet } from "svelte";

/**
 * @export
 * @desc Name of a fictional brand theme for the mock kit.
 */
export type BrandName = "fintech" | "playful" | "editorial" | "brutalist" | "luxury" | "eco" | "corporate";

/**
 * @export
 * @desc CSS custom properties of one brand theme, keyed by property name.
 */
export type BrandTokens = Record<string, string>;

/**
 * @export
 * @desc Props of the mock BrandTheme wrapper.
 *
 * @property brand - Theme to apply.
 * @property children - Themed content.
 */
export interface BrandThemeProps {
  /** Theme to apply. */
  brand: BrandName;

  /** Themed content. */
  children: Snippet;
}
