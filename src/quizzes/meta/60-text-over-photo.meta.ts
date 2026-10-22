import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "text-over-photo",
  kind: "single",
  title: "White on snow",
  principle: "Keep text readable over images",
  scenario: "A skier lands on a travel site’s homepage and looks for what it offers before searching.",
  prompt: "What is the main issue with this hero?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The white headline sits on a bright snowy photo with no overlay, so parts of it disappear." },
    { id: "b", text: "The search bar sits on top of the photo, where a bar below would leave the image clear." },
    { id: "c", text: "The hero spans the full width, where a smaller image would bring the offers further up." },
    { id: "d", text: "The headline is left-aligned, where a centered headline would balance the photo better." }
  ],
  explanation: [
    "White text on white snow and pale sky has almost no contrast: the headline and tagline fade in and out depending on what’s behind each word, and the photo can change at any time.",
    "Put text where the image is calm and dark, or add a scrim: a gradient or semi-transparent overlay behind the text, strong enough to keep 4.5:1 contrast over the brightest part of any photo.",
    "Search over a hero, full-width imagery and left-aligned headlines are all common, sound layout choices."
  ]
};
