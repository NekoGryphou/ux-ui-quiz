import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "stretched-portraits",
  kind: "single",
  title: "The funhouse team page",
  principle: "Keep images in proportion",
  scenario: "A candidate visits a design studio’s team page before a job interview, to put faces to names.",
  prompt: "What is the main issue with this page?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Two portraits are stretched to fill their frames, so those faces look squashed and odd." },
    { id: "b", text: "The portraits are round, where square photos would show a little more of each person." },
    { id: "c", text: "Job titles sit under the names in grey, where matching colors would make them pop more." },
    { id: "d", text: "The grid shows four people per row, where three per row would give each photo more room." }
  ],
  explanation: [
    "Two photos were forced into the square frame by stretching instead of cropping: one face is squashed flat, the other pulled tall. Distorted images look careless and, on a team page, a little disrespectful.",
    "Keep the original aspect ratio and crop to fit (object-fit: cover, with a sensible focal point), or prepare images at the right ratio before upload.",
    "Round crops are a common portrait style, grey job titles create a useful hierarchy, and four per row is a normal grid at this width."
  ]
};
