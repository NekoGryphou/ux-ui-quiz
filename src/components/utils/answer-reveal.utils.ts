import type { HotspotResults } from "../../engine/types/quiz.types";
import type { RevealSegment } from "../types/answer-reveal.types";

/**
 * @private
 * @desc Joins items as an English list ending with "and".
 *
 * @param items - Items to join.
 *
 * @returns The joined list.
 */
const formatList = (items: string[]): string => {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1] ?? ""}`;
};

/**
 * @private
 * @desc Plain {@link RevealSegment} for the given text.
 *
 * @param text - Segment text.
 *
 * @returns A plain segment.
 */
const plain = (text: string): RevealSegment => ({ text, strong: false });
/**
 * @private
 * @desc Emphasized {@link RevealSegment} listing the given items.
 *
 * @param items - Items to list.
 *
 * @returns An emphasized segment.
 */
const strong = (items: string[]): RevealSegment => ({ text: formatList(items), strong: true });

/**
 * @export
 * @desc Sentence telling which hotspots were found, missed or wrongly picked.
 *
 * @param results - Hotspot outcome.
 * @param several - Whether several hotspots were expected.
 *
 * @returns The sentence segments.
 */
export const outcomeSentence = (results: HotspotResults, several: boolean): RevealSegment[] => {
  const { correct, wrong, missed }: HotspotResults = results;
  if (!several) {
    if (correct.length > 0) return [plain("You found it: "), strong(correct), plain(".")];
    return [plain("You picked "), strong(wrong), plain(". The problem is "), strong(missed), plain(".")];
  }
  const segments: RevealSegment[] = [];
  if (correct.length > 0) segments.push(plain("You found "), strong(correct), plain(". "));
  if (missed.length > 0) segments.push(plain("You missed "), strong(missed), plain(". "));
  if (wrong.length > 0)
    segments.push(strong(wrong), plain(wrong.length === 1 ? " is fine as it is." : " are fine as they are."));
  return segments;
};
