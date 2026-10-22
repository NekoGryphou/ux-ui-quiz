import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "confirmshaming",
  kind: "single",
  title: "No thanks, I hate saving money",
  principle: "Let people decline without guilt-tripping them",
  scenario: "A reader who has had enough of a store’s emails clicks “Unsubscribe” at the bottom of a newsletter.",
  prompt: "What is the main issue with this page?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The way out is worded to shame the reader, while staying gets the big friendly button." },
    { id: "b", text: "The page offers a smaller frequency, where a single unsubscribe option would be quicker." },
    { id: "c", text: "The page shows a sad mascot, where a plain icon would keep the tone more professional." },
    { id: "d", text: "The confirmation sits on a new page, where unsubscribing from the email would be faster." }
  ],
  explanation: [
    "The reader came to unsubscribe, but the only way to do it is a small grey link that makes them say “I don’t like saving money”. This is confirmshaming: it uses guilt to push people towards the option the company wants.",
    "Label both choices neutrally and give them comparable weight (“Unsubscribe” and “Keep my emails”). Respect the decision in one click; you can mention a lower frequency as a secondary option.",
    "Offering fewer emails can be genuinely helpful, a mascot is a style choice, and a confirmation page is common."
  ]
};
