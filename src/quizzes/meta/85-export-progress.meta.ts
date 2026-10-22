import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "export-progress",
  kind: "compare",
  title: "Still exporting… probably",
  principle: "Show progress for long tasks",
  scenario:
    "An editor exports a 12-minute video, a task that takes about two minutes, and wonders whether to grab a coffee.",
  prompt: "Which version handles the wait better?",
  correct: ["b"],
  explanation: [
    "A spinner says “something is happening”, nothing more. After a minute, the editor can’t tell if the export is nearly done, stuck, or hasn’t started, so they wait, cancel, or start it again.",
    "For tasks longer than a few seconds, show determinate progress: a bar, a percentage and ideally the time left, plus what is happening (“Encoding audio”). It lets people plan, and proves the app hasn’t frozen.",
    "Both versions show the same dialog, file and Cancel button; only the progress feedback differs."
  ]
};
