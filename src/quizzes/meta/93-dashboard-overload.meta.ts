import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "dashboard-overload",
  kind: "multiple",
  title: "Everything, everywhere, all at once",
  principle: "Show the few numbers that answer the question",
  scenario:
    "The CEO opens the company dashboard five minutes before a meeting to answer one question: are sales up this month?",
  prompt: "Which issues make this dashboard hard to read?",
  correct: ["a", "b", "c"],
  choices: [
    { id: "a", text: "Sixteen widgets compete for attention, so the one sales figure the CEO needs is buried." },
    { id: "b", text: "The pie chart splits into twelve similar slices, so no share can be compared at a glance." },
    { id: "c", text: "Several charts use 3D and gauges, so values are hard to read and compare accurately." },
    { id: "d", text: "Numbers use thousands separators, where raw digits would fit more data in each card." }
  ],
  explanation: [
    "Every metric the company tracks sits on one screen with equal weight: sixteen widgets, three gauges, a 3D bar chart and a twelve-slice pie. The month-on-month sales change exists, but it is a small number in the corner.",
    "Start from the questions people bring to a dashboard and lead with those answers (“Sales: €1.2M, +8% vs last month”). Use few, flat charts: bars or lines over pies, no 3D, and move detail into drill-downs.",
    "Thousands separators make large numbers readable; keep them."
  ]
};
