import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "german-overflow",
  kind: "hotspot",
  title: "Kontoeinstellungen, cut in half",
  principle: "Leave room for longer translations",
  scenario: "A customer in Munich opens the German version of a banking app’s account screen.",
  prompt: "Click every place where the translation breaks the layout.",
  correct: ["tabs", "buttons"],
  regions: [
    { id: "title", text: "Screen title" },
    { id: "tabs", text: "Tabs" },
    { id: "balance", text: "Balance" },
    { id: "buttons", text: "Action buttons" },
    { id: "list", text: "Transactions" }
  ],
  explanation: [
    "The layout was sized for English labels like “Transfer” and “Settings”. German words are often 30–50% longer: tab labels overlap and the fixed-width buttons cut “Überweisung” and “Kontoeinstellungen” mid-word.",
    "Design for expansion: let buttons and tabs grow, allow wrapping or a scrollable tab row, avoid fixed widths around text, and test every screen with the longest supported language (or a pseudo-localised build).",
    "The title, balance and transaction list adapt correctly to the longer text."
  ]
};
