import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "system-codes",
  kind: "multiple",
  title: "Status 3, flag Y",
  principle: "Speak the user’s language, not the system’s",
  scenario: "A new support agent looks up an order to tell a customer on the phone where their parcel is.",
  prompt: "Which issues make this screen hard for the agent to use?",
  correct: ["a", "b"],
  choices: [
    { id: "a", text: "The status column shows a bare number, so the agent can’t say where the parcel actually is." },
    { id: "b", text: "Column headers are internal names like SHP_DT, so each one needs a lookup sheet to decode." },
    {
      id: "c",
      text: "The grid lists eight orders at once, where showing only the searched one would cut the noise."
    },
    {
      id: "d",
      text: "The window uses a grey system theme, where a white background would make the data feel lighter."
    }
  ],
  explanation: [
    "Status “3” and headers like CUST_REF, SHP_DT or FLG make sense to the database, not to a new agent: every lookup means checking a code sheet, and misread codes reach the customer.",
    "Use the words people use: “In transit”, “Shipped on 12 May”, “Priority”. Keep raw codes as secondary detail if other systems need them.",
    "The dense grid and grey theme look dated, but agents who scan many orders benefit from compact rows, and the searched order is highlighted."
  ]
};
