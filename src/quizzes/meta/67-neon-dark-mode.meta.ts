import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "neon-dark-mode",
  kind: "single",
  title: "Dark mode, bright headache",
  principle: "Soften colors in dark themes instead of using pure black and full saturation",
  scenario: "An on-call engineer checks the monitoring dashboard several times a night, in a dark room.",
  prompt: "What is the main issue with this dashboard?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Saturated red, blue and green text on pure black vibrates, so the numbers tire the eyes." },
    { id: "b", text: "The dashboard uses a dark theme, where a light theme would suit a monitoring screen better." },
    { id: "c", text: "Each card shows a small sparkline, where the numbers alone would keep the cards cleaner." },
    { id: "d", text: "The cards are separated by thin borders, where soft shadows would set them apart better." }
  ],
  explanation: [
    "Fully saturated red, blue and green on pure black seem to shimmer and float at different depths (chromostereopsis), and pure blue barely contrasts with black at all. Glanced at in a dark room at 3 a.m., the numbers smear and tire the eyes.",
    "In dark themes, use dark grey surfaces rather than #000, off-white text rather than pure white, and desaturated, lighter tints for colors, checking each one for contrast.",
    "A dark theme suits a night-time monitoring screen, sparklines add useful trend context, and thin borders are a fine way to separate cards on dark backgrounds."
  ]
};
