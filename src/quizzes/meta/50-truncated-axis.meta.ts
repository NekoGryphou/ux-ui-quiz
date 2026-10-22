import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "truncated-axis",
  kind: "hotspot",
  title: "A 4% rise that looks like a rocket",
  principle: "Start bar charts at zero",
  scenario:
    "A sales director glances at the dashboard before a board meeting to see how this quarter compares with the first one.",
  prompt: "Click the part of the chart that misleads the director.",
  correct: ["axis"],
  regions: [
    { id: "title", text: "Chart title" },
    { id: "period", text: "Year selector" },
    { id: "export", text: "Export button" },
    { id: "axis", text: "Vertical axis" },
    { id: "bars", text: "Bars" },
    { id: "legend", text: "Legend" }
  ],
  explanation: [
    "The vertical axis starts at €96k, so Q4’s bar looks about five times taller than Q1’s for a rise of roughly 4%. People read bar length as quantity; cutting the baseline turns a small change into a dramatic one.",
    "Start bar charts at zero. If small differences matter, use a line chart with a clearly labelled range, or show the change itself (“+4.1% since Q1”).",
    "The title, legend and controls are clear; the distortion comes entirely from where the axis begins."
  ]
};
