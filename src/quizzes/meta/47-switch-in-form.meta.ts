import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "switch-in-form",
  kind: "compare",
  title: "Applied now, or on Save?",
  principle: "Use switches for instant changes and checkboxes in forms you save",
  scenario: "An admin reviews the team’s email notifications and plans to save every change at once.",
  prompt: "Which version fits this form better?",
  correct: ["b"],
  explanation: [
    "A switch reads like a light switch: flip it and the change is done. Next to a Save button, users can’t tell whether a flipped switch already applied, and some leave without saving.",
    "Use checkboxes when changes wait for a Save or Submit button. Keep switches for settings that take effect immediately, with no button to press.",
    "Both versions offer the same options, states and buttons; only the control type differs."
  ]
};
