import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "fake-download-buttons",
  kind: "hotspot",
  motion: true,
  title: "Which download is the download?",
  principle: "Never let ads imitate your own controls",
  scenario: "A student wants to download a free image editor from a popular shareware site.",
  prompt: "Click every element that could trick the student.",
  correct: ["ad-top", "ad-side", "ad-scan"],
  regions: [
    { id: "logo", text: "Site logo" },
    { id: "ad-top", text: "Top banner" },
    { id: "ad-side", text: "Side box" },
    { id: "ad-scan", text: "Warning box" },
    { id: "details", text: "Program details" },
    { id: "real", text: "Download link" },
    { id: "nav", text: "Category menu" }
  ],
  explanation: [
    "Three ads dress up as the thing the student came for: a giant green DOWNLOAD NOW banner, a “Start download” button in the sidebar and a fake system warning. The real link is a small blue text link under the details, the least prominent download on the page.",
    "Ads must never mimic your controls, wording or system dialogs. Make the real primary action the most visible element on the page, and label ads clearly as ads.",
    "The logo, menu and program details are ordinary page furniture, and the real link at least says exactly what it downloads."
  ]
};
