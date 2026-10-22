import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "hover-hides-label",
  kind: "compare",
  title: "Hover to make it disappear",
  principle: "Check every interactive state, not just the default one",
  scenario: "A visitor moves the mouse onto the main button of a concert ticket page to buy tickets.",
  prompt: "Which version of the hovered button works better?",
  correct: ["b"],
  explanation: [
    "On hover, the gradient slides to its light end, exactly the colour of the white label: the text vanishes at the very moment the visitor is about to click, and they hesitate.",
    "Design and check every state of a control (default, hover, focus, active, disabled) for contrast, not just the resting one. A hover state should reinforce the button, for example by darkening it.",
    "Both versions show the same button, gradient and label while hovered; only the hover colours differ."
  ]
};
