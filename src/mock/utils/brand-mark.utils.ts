import { MARK_SHAPES } from "../const/brand-mark.const";
import type { MarkShape, MarkStyle } from "../types/brand-mark.types";

/**
 * @private
 * @desc Returns a stable unsigned 32-bit hash of a string.
 *
 * @param text - Text to hash.
 *
 * @returns Hash value.
 */
const hashOf = (text: string): number => {
  let hash: number = 7;
  for (let i: number = 0; i < text.length; i++) hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  return hash;
};

/**
 * @export
 * @desc Returns the generated logo look for a brand name.
 * The same name always gives the same result.
 *
 * @param name - Brand name.
 *
 * @returns Logo shape, hue and initial.
 */
export const markStyle = (name: string): MarkStyle => {
  const hash: number = hashOf(name);
  const shape: MarkShape = MARK_SHAPES[hash % MARK_SHAPES.length] ?? "circle";
  return { shape, hue: (hash >> 3) % 360, initial: name.trim().charAt(0).toUpperCase() };
};
