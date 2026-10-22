import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "toolbar-bloat",
  kind: "hotspot",
  title: "Five search bars and a sliver of web",
  principle: "Protect the content area from chrome and add-ons",
  scenario: "A retiree opens their browser to read the local news, on the family computer in 2007.",
  prompt: "Click every part of the window that eats into the page.",
  correct: ["toolbars", "weather"],
  regions: [
    { id: "title", text: "Window title bar" },
    { id: "menu", text: "Menu bar" },
    { id: "address", text: "Address bar" },
    { id: "toolbars", text: "Add-on toolbars" },
    { id: "weather", text: "Weather ticker" },
    { id: "page", text: "News page" },
    { id: "status", text: "Status bar" }
  ],
  explanation: [
    "Four bundled search toolbars and a scrolling weather ticker, installed alongside free downloads, stack on top of the page. The news itself is left with a thin strip at the bottom, and every search box does the same thing.",
    "Chrome should take as little room as possible: one address bar that also searches, add-ons that ask before installing and stay small, and a content area that gets most of the screen.",
    "The title, menu, address and status bars are standard browser chrome of the time."
  ]
};
