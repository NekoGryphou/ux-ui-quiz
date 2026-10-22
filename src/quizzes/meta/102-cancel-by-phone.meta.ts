import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "cancel-by-phone",
  kind: "single",
  title: "Join online, leave by phone",
  principle: "Make leaving as easy as joining",
  scenario: "A member who signed up to a gym online in two minutes wants to cancel their membership.",
  prompt: "What is the main issue with this page?",
  correct: ["a"],
  choices: [
    { id: "a", text: "Cancelling needs a weekday phone call, while joining took two minutes online." },
    { id: "b", text: "The page lists the plan details, where a short summary would fit on one screen." },
    { id: "c", text: "The pause option comes first, where cancel alone would make the page simpler." },
    { id: "d", text: "The phone number is in bold, where a normal weight would look more professional." }
  ],
  explanation: [
    "Joining was an online form; leaving means calling during office hours and waiting on hold. This “roach motel” pattern keeps people paying simply because cancelling is a chore.",
    "Offer cancellation in the same channel and with the same effort as sign-up: a clear “Cancel membership” button, one confirmation and an email receipt. Several countries now require exactly this by law.",
    "Showing plan details, offering a pause and highlighting a phone number are all fine on their own."
  ]
};
