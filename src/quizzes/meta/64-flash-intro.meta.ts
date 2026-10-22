import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "flash-intro",
  kind: "hotspot",
  motion: true,
  title: "Loading the experience… 47%",
  principle: "Don’t make people sit through an intro to reach content",
  scenario: "A visitor clicks a search result to find this architecture studio’s phone number.",
  prompt: "Click the part of the page that wastes this visitor’s time.",
  correct: ["loader"],
  regions: [
    { id: "logo", text: "Studio logo" },
    { id: "loader", text: "Intro loading bar" },
    { id: "sound", text: "Sound toggle" },
    { id: "skip", text: "Skip link" },
    { id: "tagline", text: "Tagline" }
  ],
  explanation: [
    "Before any content, the site makes everyone wait for a full-screen animated intro to load, then play, and only then shows the real homepage. The phone number is a minute and two screens away.",
    "Let people reach content immediately. If a brand animation matters, keep it short, play it inside the page rather than in front of it, and never gate navigation behind it.",
    "The tiny “skip intro” link at least offers a way out; the problem is the intro itself, which every visitor meets first."
  ]
};
