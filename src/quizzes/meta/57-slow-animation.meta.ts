import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "slow-animation",
  kind: "compare",
  motion: true,
  title: "The menu that takes a bow",
  principle: "Keep interface animation short and purposeful",
  scenario: "A commuter opens this app’s menu many times a day to jump between sections. Watch the menu open.",
  prompt: "Which version’s animation works better?",
  correct: ["b"],
  explanation: [
    "A 1.4-second elastic drop with bounces is fun once, then it becomes a wait: every visit to the menu costs over a second, and the overshoot makes items jump around while you try to tap them.",
    "Keep interface transitions around 150–300 ms with a gentle ease-out, and use motion to explain what happened (the menu comes from the button), not to entertain. Respect the reduced-motion setting.",
    "Both versions open the same menu from the same place; only the duration and easing differ."
  ]
};
