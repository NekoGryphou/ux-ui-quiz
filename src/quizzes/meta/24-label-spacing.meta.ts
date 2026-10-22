import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "label-spacing",
  kind: "compare",
  title: "Which label goes with which field?",
  principle: "Use proximity to show what belongs together",
  scenario: "A shopper fills in a delivery address on a small checkout form.",
  prompt: "Which version of the form works better?",
  correct: ["b"],
  explanation: [
    "When a label sits exactly halfway between two fields, the eye can’t tell whether it describes the field above or below.",
    "Keep each label close to its own field and put more space between field groups than inside them (the law of proximity). Grouping related fields, like postcode with city, makes the structure readable at a glance.",
    "Both versions use the same fields and styles; only the spacing changes."
  ]
};
