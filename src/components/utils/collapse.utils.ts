import { cubicOut } from "svelte/easing";
import { slide, type TransitionConfig } from "svelte/transition";
import type { CollapseParams } from "../types/collapse.types";

/**
 * @export
 * @desc Svelte transition that slides an element closed while fading it out.
 *
 * @param node - Transitioned element.
 * @param duration - Duration in milliseconds.
 *
 * @returns The transition config.
 */
export const collapse = (node: Element, { duration }: CollapseParams): TransitionConfig => {
  const base: TransitionConfig = slide(node, { duration, easing: cubicOut });
  return {
    ...base,
    css: (t: number, u: number): string => `${base.css?.(t, u) ?? ""}; opacity: ${String(Math.min(1, t * 2))}`
  };
};
