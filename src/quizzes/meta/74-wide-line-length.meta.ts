import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "wide-line-length",
  kind: "compare",
  layout: "stacked",
  title: "One line, one head turn",
  principle: "Keep line length readable on wide screens",
  scenario: "A reader opens a long help article on a 27-inch monitor to follow a setup guide.",
  prompt: "Which version reads better on this screen?",
  correct: ["b"],
  explanation: [
    "When text fills the whole width of a large monitor, each line runs over 200 characters: the eye loses its place jumping back to the start of the next line, and long guides become tiring.",
    "Cap the reading column at around 60–80 characters (max-width in ch or rem) and use the extra space for margins, a table of contents or a side panel.",
    "Both versions show the same article, font and size; only the width of the text column differs."
  ]
};
