import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "rtl-arrows",
  kind: "single",
  title: "Next is that way… or that way?",
  principle: "Mirror directional icons in right-to-left layouts",
  scenario: "A traveller in Cairo uses the Arabic version of a hotel booking app to move to the next step.",
  prompt: "What is the main issue with this screen?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Text runs right to left, but the arrows still point as in English, so next looks like back." },
    { id: "b", text: "The step counter uses Arabic-Indic digits, where Latin digits would be read more widely." },
    { id: "c", text: "The text is right-aligned, where centered text would make the layout feel more balanced." },
    { id: "d", text: "The primary button spans the full width, where a smaller one would leave room for back." }
  ],
  explanation: [
    "The layout is mirrored for Arabic, so “next” now sits on the left, but its arrow still points right, towards “back”. The progress bar also fills from the wrong side, so the traveller can’t tell which way the flow goes.",
    'In RTL, mirror everything directional: arrows, chevrons, progress, sliders and swipe directions (CSS logical properties and dir="rtl" help). Don’t mirror icons that aren’t directional, such as a clock, a checkmark or a play button.',
    "Arabic-Indic digits, right-aligned text and a full-width primary button are all appropriate in an Arabic interface."
  ]
};
