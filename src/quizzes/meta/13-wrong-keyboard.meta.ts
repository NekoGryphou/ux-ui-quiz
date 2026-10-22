import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "wrong-keyboard",
  kind: "single",
  title: "Letters for a number",
  principle: "Match the keyboard to the expected input",
  scenario: "A customer is paying for concert tickets on their phone and taps the card number field.",
  prompt: "What is the main issue on this screen?",
  correct: ["b"],
  choices: [
    { id: "a", text: "The card number field shows no card network logo to confirm the type of card." },
    { id: "b", text: "Tapping the card number opens a full letter keyboard instead of a number pad." },
    { id: "c", text: "The keyboard covers the lower half of the screen, hiding the Pay button below." },
    { id: "d", text: "The field label sits above the input, where a floating label would save space." }
  ],
  explanation: [
    "A card number is digits only, yet the user gets a letter keyboard and has to switch layouts for every group of digits.",
    'On the web, set inputmode="numeric" and autocomplete="cc-number": phones then show a number pad and can offer saved cards.',
    "A keyboard covering part of the screen is normal: the page should scroll so the Pay button stays reachable."
  ]
};
