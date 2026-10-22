import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "untranslated-formats",
  kind: "multiple",
  title: "Translated, not localized",
  principle: "Localize dates, numbers and times, not just words",
  scenario: "A traveller in Lyon books a train on the French version of an international rail site.",
  prompt: "Which issues will confuse this French customer?",
  correct: ["a", "b", "c"],
  choices: [
    { id: "a", text: "The date reads 04/05/2025 in US order, so a French reader takes it for 4 May, not 5 April." },
    { id: "b", text: "Prices use a decimal point and a leading $, where French readers expect “89,50 €”." },
    { id: "c", text: "Times use AM and PM, where French users read the 24-hour clock with “h” as a separator." },
    { id: "d", text: "The page is written in French, where English would be safer for an international site." }
  ],
  explanation: [
    "Every word is translated, but the formats still come from the US template: 04/05/2025 means 4 May to a French reader (it’s 5 April), “$89.50” looks like dollars, and “7:45 PM” isn’t how departures are written in France.",
    "Localize formats with the locale, not by hand: Intl.DateTimeFormat and Intl.NumberFormat with fr-FR give “5 avril 2025”, “89,50 €” and “19 h 45”. Writing the month as a word removes date ambiguity for everyone.",
    "Translating the page into the customer’s language is exactly right; the problem is only what was left behind."
  ]
};
