import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "watch-wordy-button",
  kind: "single",
  title: "A paragraph on your wrist",
  principle: "Write for the smallest screen it will appear on",
  scenario: "A cyclist glances at their watch at a red light when a delivery notification arrives.",
  prompt: "What is the main issue with this notification?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The message and buttons are full sentences, cut off on a screen read in a glance." },
    { id: "b", text: "The card is white, where a dark card would save battery on the watch screen." },
    { id: "c", text: "The app icon sits at the top, where a smaller icon would leave more room for text." },
    { id: "d", text: "The action is a round button, where a text link would take less room on the face." }
  ],
  explanation: [
    "The text was written for a phone: on a watch, the message and the buttons are truncated mid-word, and the cyclist has two seconds at a red light to guess what the action button will do.",
    "Write watch notifications as a headline people can read in a glance (“Parcel at the door”), with one or two very short actions (“Leave”, “Reschedule”). Put the details in the phone app.",
    "A light card, an app icon and a single action button are the normal watch patterns."
  ]
};
