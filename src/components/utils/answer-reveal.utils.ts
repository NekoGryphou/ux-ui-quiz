import type { HotspotResults } from "../../engine/types/quiz.types";
import type { RevealSegment } from "../types/answer-reveal.types";

const formatList = (items: string[]): string => {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1] ?? ""}`;
};

const plain = (text: string): RevealSegment => ({ text, strong: false });
const strong = (items: string[]): RevealSegment => ({ text: formatList(items), strong: true });

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
