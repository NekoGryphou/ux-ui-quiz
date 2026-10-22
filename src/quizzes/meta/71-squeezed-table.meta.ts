import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "squeezed-table",
  kind: "single",
  title: "Five columns in a phone",
  principle: "Restructure dense tables for narrow screens",
  scenario: "A customer checks on their phone whether their last order has shipped yet.",
  prompt: "What is the main issue with this screen?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The desktop table is squeezed into five thin columns, so values break across lines." },
    { id: "b", text: "The header row uses grey text, where black headers would be quicker to pick out." },
    { id: "c", text: "Orders are sorted newest first, where oldest first would show the full history." },
    { id: "d", text: "Each row shows a total price, where the item count alone would keep rows lighter." }
  ],
  explanation: [
    "The desktop table keeps all five columns on a 360px screen: “Delivered” breaks into two lines, dates wrap, and the eye zigzags to find which status belongs to which order.",
    "On narrow screens, turn rows into cards (order number and status first, details below), or keep only the columns that matter and move the rest into the detail view.",
    "Grey headers, newest-first sorting and showing the total are all reasonable choices for an order history."
  ]
};
