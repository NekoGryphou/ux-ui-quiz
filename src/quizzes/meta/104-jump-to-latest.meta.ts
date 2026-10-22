import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "jump-to-latest",
  kind: "compare",
  motion: true,
  title: "The scenic route to the latest message",
  principle: "Jump straight to the destination; don’t animate long distances",
  scenario:
    "A team member scrolled far back in a busy chat to find a link, then taps “4 new messages” to catch up. Watch both versions.",
  prompt: "Which version handles the jump better?",
  correct: ["b"],
  explanation: [
    "Smooth-scrolling through hundreds of messages turns a one-tap shortcut into a long wait: the history streams past for seconds, nothing can be read on the way, and some people tap again or start scrolling, which stops it halfway.",
    "For long distances, jump directly to the destination and use a brief fade or a short slide of the last few items to show where you landed. Keep smooth scrolling for short moves, and respect the reduce-motion setting.",
    "Both versions use the same chat, the same button and the same final position; only the transition differs."
  ]
};
