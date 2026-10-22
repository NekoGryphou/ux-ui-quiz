import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "mixed-icons",
  kind: "single",
  title: "Six icons, five icon sets",
  principle: "Use one consistent icon style",
  scenario: "A designer opens a new whiteboard app and scans the toolbar to find the drawing tools.",
  prompt: "What is the main issue with this toolbar?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The icons mix outline, filled, 3D and emoji styles, so the toolbar looks pieced together." },
    { id: "b", text: "The tools sit in a vertical rail, where a top toolbar would leave more room for the board." },
    { id: "c", text: "Each icon has a text label under it, which takes room that a hover tooltip could save." },
    { id: "d", text: "The active tool gets a tinted background, where an underline would be more discreet." }
  ],
  explanation: [
    "Thin outlines, a solid black glyph, a glossy 3D blob, a full-color illustration and an emoji sit side by side. The eye reads style changes as meaning changes, so scanning the rail takes longer and the product looks assembled from spare parts.",
    "Pick one icon family and stick to it: same grid size, stroke weight, corner style and fill rule. If a needed icon is missing, draw it in the family’s style rather than borrowing one.",
    "A vertical rail is common in canvas tools, labels under icons help newcomers, and a tinted background is a clear active state."
  ]
};
