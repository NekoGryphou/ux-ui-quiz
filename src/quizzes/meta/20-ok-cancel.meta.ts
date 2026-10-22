import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "ok-cancel",
  kind: "single",
  title: "Cancel, or cancel?",
  principle: "Label buttons with what they do",
  scenario:
    "A user clicked “Cancel subscription” to see what would happen, but in the end they want to keep their Pro plan.",
  prompt: "What is the main issue with this dialog?",
  correct: ["b"],
  choices: [
    { id: "a", text: "The title is a question, where a statement would tell users more directly what happens." },
    { id: "b", text: "“Cancel” and “OK” don’t say what they do, and “Cancel” could mean either choice here." },
    { id: "c", text: "The two buttons sit side by side, where stacking them would better fit small screens." },
    { id: "d", text: "The dialog has both a close icon and a Cancel button, which duplicates the way out." }
  ],
  explanation: [
    "When the action itself is “cancel”, a Cancel button is ambiguous: does it cancel the dialog or the subscription?",
    "Use labels that state the outcome: “Keep my plan” and “Cancel subscription”. Users should be able to decide from the buttons alone.",
    "A close icon alongside a dismiss button is a common, harmless pattern."
  ]
};
