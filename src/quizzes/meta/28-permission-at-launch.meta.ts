import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "permission-at-launch",
  kind: "single",
  title: "Asking before giving",
  principle: "Ask for permissions in context, once the value is clear",
  scenario: "Someone installs a grocery delivery app and opens it for the very first time.",
  prompt: "What is the main issue with this screen?",
  correct: ["b"],
  choices: [
    { id: "a", text: "The prompt uses the system dialog instead of a branded screen that matches the app." },
    { id: "b", text: "The app asks to send notifications at first launch, before showing any value." },
    { id: "c", text: "The dialog offers only Allow and Don’t Allow, with no option to decide later." },
    { id: "d", text: "The splash screen behind the dialog shows only the logo, with no loading progress." }
  ],
  explanation: [
    "At first launch the user has no reason to say yes: they don’t know yet what the notifications would be for. Many tap “Don’t Allow”, and on iOS that choice is hard to reverse.",
    "Ask in context, when the benefit is obvious: right after placing an order, “Get notified when your groceries are on their way?”",
    "The system dialog itself can’t be restyled or given extra buttons; what the app controls is when it appears."
  ]
};
