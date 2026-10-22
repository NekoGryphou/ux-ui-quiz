import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "year-dropdown",
  kind: "single",
  title: "Scroll back to 1987",
  principle: "Pick input controls that fit the data",
  scenario: "A new customer fills in their date of birth on a car insurance quote form, on their laptop.",
  prompt: "What is the main issue with this form?",
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: "The birth year is a dropdown starting at 1900, so most people scroll past ninety years first."
    },
    { id: "b", text: "Day, month and year are three separate fields, where a single text field would look tidier." },
    { id: "c", text: "The months are listed as names, where numbers from 1 to 12 would make the list shorter." },
    { id: "d", text: "The form asks for the date of birth first, where the car details would be a gentler start." }
  ],
  explanation: [
    "A known date of birth is typed in a second, but here the year hides in a 125-item list that opens at 1900: everyone scrolls through decades, overshoots and scrolls back. Dropdowns are slow for long, familiar values.",
    "Use plain text fields for dates people know by heart (day, month, year with the right keyboard), and keep dropdowns or pickers for short lists or dates people need to look up.",
    "Separate day, month and year fields are a recommended pattern, month names avoid confusion, and insurers need the birth date to price a quote."
  ]
};
