import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "bare-success",
  kind: "single",
  title: "Success that confirms nothing",
  principle: "Confirm critical outcomes with the details",
  scenario: "A user sends €1,200 for this month’s rent to their landlord in a banking app and taps Confirm.",
  prompt: "What is the main issue with this confirmation?",
  correct: ["b"],
  choices: [
    { id: "a", text: "The success state relies on a green check, which color-blind users may not perceive." },
    { id: "b", text: "The screen says “Done!” but not the amount, the recipient, or when the money arrives." },
    { id: "c", text: "The OK button spans the full width, so it’s hard to tell apart from a banner." },
    { id: "d", text: "The screen offers no shortcut to send another transfer to the same recipient." }
  ],
  explanation: [
    "After a high-stakes action, users need proof: the amount, the recipient, the reference, and when it will arrive.",
    "A summary plus a way to keep a record (receipt, share, download) prevents anxious double payments and support calls.",
    "The check icon comes with the word “Done!”, so meaning doesn’t rely on color alone."
  ]
};
