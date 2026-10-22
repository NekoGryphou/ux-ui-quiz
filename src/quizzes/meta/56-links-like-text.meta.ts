import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "links-like-text",
  kind: "compare",
  title: "Hidden in plain text",
  principle: "Make links look like links",
  scenario: "A reader wants to open the guides this travel article mentions to plan their own trip.",
  prompt: "Which version works better?",
  correct: ["a"],
  explanation: [
    "Links styled exactly like the surrounding text (same color, no underline) are invisible until you happen to hover them, and touch screens have no hover at all. The reader can’t tell which phrases lead somewhere.",
    "Give links a cue beyond color that works at a glance: an underline is the clearest. If links differ from text only by color, they need 3:1 contrast with the text plus another cue on focus and hover (WCAG 1.4.1 Use of Color).",
    "Both versions use the same typeface, colors and links; only the link styling differs."
  ],
  links: [wcag("1.4.1", "Use of Color", "use-of-color")]
};
