import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "install-interstitial",
  kind: "multiple",
  title: "The app wall",
  principle: "Don’t block content to push an install",
  scenario: "Someone taps a link to a design file a colleague shared and it opens in their phone browser.",
  prompt: "Which issues does this screen have?",
  correct: ["a", "b", "c"],
  choices: [
    { id: "a", text: "A full-screen app prompt covers the shared file the user actually came to see." },
    { id: "b", text: "The way to keep using the browser is a tiny, pale link that’s easy to overlook." },
    { id: "c", text: "The decline link guilt-trips users by calling the browser a “worse experience”." },
    { id: "d", text: "The prompt shows the app’s star rating, which can come across as a sales pitch." },
    { id: "e", text: "The “Get the app” button uses the brand color rather than the app store blue." }
  ],
  explanation: [
    "The user came for one file. A full-screen interstitial puts a detour in front of it, and search engines penalise intrusive interstitials on mobile.",
    "The escape route is styled to be missed, and its wording shames the user for declining: a dark pattern known as confirmshaming.",
    "Offer a small, dismissible banner (“Open in app”) and show the file right away. A rating and a brand-colored button are ordinary marketing, not the problem."
  ]
};
