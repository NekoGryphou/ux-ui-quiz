import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "misaligned-amounts",
  kind: "hotspot",
  title: "Numbers you can’t compare",
  principle: "Right-align numbers and format them consistently",
  scenario: "A finance manager scans this month’s invoices to spot the largest payments.",
  prompt: "Click the part of the table that makes this task hard.",
  correct: ["amount-column"],
  regions: [
    { id: "page-header", text: "Page title and export" },
    { id: "filters", text: "Date filters" },
    { id: "customer-column", text: "Customer column" },
    { id: "date-column", text: "Date column" },
    { id: "amount-column", text: "Amount column" },
    { id: "pagination", text: "Pagination" }
  ],
  explanation: [
    "Amounts are left-aligned and use different decimal formats, so digits of the same magnitude never line up: €12,000.00 looks shorter than €1,240.5.",
    "Right-align numeric columns, use the same number of decimals, and use tabular (fixed-width) figures so values can be compared at a glance.",
    "Text columns such as customer names are correctly left-aligned."
  ]
};
