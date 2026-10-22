import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "hidden-volume",
  kind: "single",
  motion: true,
  title: "Volume, disguised as an air vent",
  principle: "Give interactive elements visible signifiers",
  scenario: "A listener wants to turn the music down quickly before taking a phone call.",
  prompt: "What is the main issue with this player?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The volume slider looks like a row of air vents, so nothing says it can be dragged." },
    { id: "b", text: "The track title scrolls across the display, where a static title would read at once." },
    { id: "c", text: "Play and pause are separate buttons, where one toggle would save room on the skin." },
    { id: "d", text: "The timer counts up from zero, where a countdown to the end would be more useful." }
  ],
  explanation: [
    "The volume control is drawn as ribbed grooves with no handle, no track and no speaker icon: it reads as decoration, so the listener hunts for volume while the phone rings.",
    "Controls need signifiers: a visible thumb on a track, an icon or a value. A hover cursor helps, but it can’t be the only cue, and it doesn’t exist on touch screens.",
    "The scrolling title, separate play and pause buttons and count-up timer were conventions that players of the time used consistently."
  ]
};
