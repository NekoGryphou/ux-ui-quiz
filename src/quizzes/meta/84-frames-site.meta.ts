import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "frames-site",
  kind: "single",
  title: "Every page is the homepage",
  principle: "Give every page its own address",
  scenario: "A hiker finds the perfect trail page on a 2001 hiking club site and wants to send the link to a friend.",
  prompt: "What is the main issue with this site?",
  correct: ["a"],
  choices: [
    { id: "a", text: "The site uses frames, so the address bar shows the homepage for every page you visit." },
    { id: "b", text: "The left menu is a separate column, where a top bar would leave more width for text." },
    { id: "c", text: "Trail names are underlined links, where buttons would make each one easier to click." },
    { id: "d", text: "The page uses a serif font, where a sans serif would be easier to read on old screens." }
  ],
  explanation: [
    "The trail page loads inside a frame, so the address bar still reads index.html. Copying the link, bookmarking it or using Back all lead to the homepage, and search engines can’t point to the trail either.",
    "Every distinct piece of content needs its own URL that reloads exactly that view. That rule still applies to modern single-page apps: update the address as people navigate.",
    "A side menu, underlined links and a serif font are fine, even if dated."
  ]
};
