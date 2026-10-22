import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "stacked-interruptions",
  kind: "hotspot",
  title: "Three interruptions before the first sentence",
  principle: "Don’t stack interruptions on top of the content",
  scenario: "A reader follows a link from a newsletter to read one article on a design blog.",
  prompt: "Click every element that gets between the reader and the article.",
  correct: ["newsletter", "chat", "cookies"],
  regions: [
    { id: "site-header", text: "Site header" },
    { id: "breadcrumbs", text: "Breadcrumbs" },
    { id: "article", text: "Article" },
    { id: "newsletter", text: "Newsletter sign-up" },
    { id: "chat", text: "Chat message" },
    { id: "cookies", text: "Cookie notice" }
  ],
  explanation: [
    "Before reading a single line, the visitor must close a newsletter modal, a chat bubble that opened on its own, and a cookie notice covering the bottom of the page.",
    "Each one may be justified alone; stacked on arrival they turn reading into an obstacle course. Space them out: consent first and compact, offers after engagement (e.g. at the end of the article), chat only on request.",
    "The header and breadcrumbs are navigation, not interruptions."
  ]
};
