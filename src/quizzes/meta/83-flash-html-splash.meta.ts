import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "flash-html-splash",
  kind: "single",
  title: "Choose your technology",
  principle: "Don’t ask people to solve technical questions to enter a site",
  scenario: "A customer types the address of a local bakery to check its opening hours.",
  prompt: "What is the main issue with this homepage?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Visitors must pick Flash or HTML and a bandwidth before seeing any content at all." },
    { id: "b", text: "The logo sits in the middle, where the top left corner would follow the convention." },
    { id: "c", text: "The page uses a dark background, where a light one would suit a bakery much better." },
    { id: "d", text: "The two choices are images, where text links would download faster on slow modems." }
  ],
  explanation: [
    "A splash page asks people to choose between Flash and HTML and declare their connection speed, questions most visitors can’t answer, before showing a single opening hour.",
    "Detect capabilities yourself and serve one site that works for everyone (progressive enhancement). Put the content, here the hours and address, on the first page people land on.",
    "Logo placement, a dark background and image buttons are stylistic choices; the splash gate is what blocks the visit."
  ]
};
