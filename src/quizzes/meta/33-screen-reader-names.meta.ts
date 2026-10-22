import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "screen-reader-names",
  kind: "multiple",
  title: "What the screen reader hears",
  principle: "Give every control a name that makes sense on its own",
  scenario:
    "A blind user tabs through their inbox. The panel on the right shows what their screen reader announces at each stop.",
  prompt: "Which issues does this transcript reveal?",
  correct: ["a", "b"],
  choices: [
    { id: "a", text: "The toolbar icons are announced only as “button”, with no name saying what they do." },
    { id: "b", text: "Two links are announced as “click here”, which says nothing about where they lead." },
    { id: "c", text: "The heading is announced with its level, which adds noise before the actual content." },
    { id: "d", text: "Archive is announced as a button, where a link would better describe what it does." }
  ],
  explanation: [
    'Icon-only buttons need an accessible name (aria-label="Search" or visually hidden text); otherwise users hear “button, button” and must guess (WCAG 4.1.2 Name, Role, Value).',
    "Screen reader users often list all links out of context. “Click here” twice is useless there: use the destination as link text, like “Read the weekly report” (WCAG 2.4.4 Link Purpose).",
    "Announcing heading levels is how screen readers help people navigate, and Archive performs an action on the page, so a button is the right element."
  ],
  links: [
    wcag("4.1.2", "Name, Role, Value", "name-role-value"),
    wcag("2.4.4", "Link Purpose (In Context)", "link-purpose-in-context")
  ]
};
