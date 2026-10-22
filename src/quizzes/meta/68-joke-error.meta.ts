import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "joke-error",
  kind: "single",
  title: "Oopsie, your rent",
  principle: "Match the tone of voice to the moment",
  scenario: "A tenant pays this month’s rent from their banking app, the evening before it’s due.",
  prompt: "What is the main issue with this screen?",
  correct: ["a"],
  choices: [
    { id: "a", text: "A jokey message announces a failed €1,250 rent payment, so the problem feels belittled." },
    { id: "b", text: "The message has an illustration, where plain text would load a little faster on mobile." },
    { id: "c", text: "The retry button spans the full width, where a smaller one would feel less insistent." },
    { id: "d", text: "The screen repeats the payee and amount, where a reference number would be enough." }
  ],
  explanation: [
    "Rent that may arrive late is stressful. Hamster jokes and “lol” make the bank sound like it doesn’t care, and they push the useful part (what happened, was money taken, what to do now) out of view.",
    "Playful copy works for success and empty states; when money, health or deadlines are involved, switch to calm, plain words: what failed, whether the account was charged, and the next step.",
    "An illustration, a full-width retry button and repeating the payee and amount are all helpful on a failed payment screen."
  ]
};
