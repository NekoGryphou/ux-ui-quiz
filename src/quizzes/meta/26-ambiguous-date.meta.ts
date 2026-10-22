import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "ambiguous-date",
  kind: "single",
  title: "March 4 or April 3?",
  principle: "Write dates in an unambiguous format",
  scenario: "A traveler from Paris books a flight to New York on a US airline’s website and checks the confirmation.",
  prompt: "What is the main issue with this confirmation?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The departure date 03/04/2026 reads as March 4 or April 3 depending on the reader." },
    { id: "b", text: "The booking reference is set in capitals, which makes it harder to read aloud." },
    { id: "c", text: "Times use the 24-hour clock, which some travelers find less familiar to read." },
    { id: "d", text: "The total price has no breakdown of taxes and fees next to the amount paid." }
  ],
  explanation: [
    "Numeric dates mean different things in different countries: 03/04 is March 4 in the US and April 3 in most of Europe. A traveler can show up a month early or late.",
    "For an international audience, spell the month out (“Wed, 4 Mar 2026”) or follow the reader’s locale.",
    "Booking references are conventionally uppercase, and the 24-hour clock is the norm in aviation."
  ]
};
