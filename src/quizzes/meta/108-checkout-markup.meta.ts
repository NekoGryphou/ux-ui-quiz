import type { QuizMeta } from "../../engine/types/quiz.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "checkout-markup",
  kind: "multiple",
  title: "A checkout form that looks fine",
  principle: "Give every field its label, input type and autocomplete token",
  scenario: "A developer reviews the pull request for the delivery address step of a checkout before it ships.",
  prompt: "Which issues does this form have?",
  correct: ["a", "b", "c"],
  choices: [
    { id: "a", text: "The fields have no autocomplete tokens, so browsers can’t fill in a saved address." },
    { id: "b", text: 'The email input uses type="text", so phones show no @ key and nothing checks the format.' },
    { id: "c", text: "The street label points to “street”, so it isn’t tied to the address input at all." },
    { id: "d", text: 'The postcode input uses type="text", so letters can be typed where digits belong.' },
    { id: "e", text: "The email hint is a separate paragraph, so screen readers skip it when the field gets focus." }
  ],
  explanation: [
    "No field carries an autocomplete token (name, email, street-address, postal-code, address-level2, country), so browsers and password managers can’t offer the saved address: every customer retypes it, and people with motor or memory difficulties pay the most (WCAG 1.3.5 Identify Input Purpose).",
    'The email field is type="text": phones show a keyboard without @ and the browser can’t flag “camille.example.com”. Use type="email".',
    'The street label has for="street" but the input’s id is "address": clicking the label doesn’t focus the field and screen readers announce an unlabelled edit box (WCAG 1.3.1 Info and Relationships). Make for and id match.',
    'The rest is right: postcodes in the UK, Canada or the Netherlands contain letters, so type="text" fits, and the email hint is linked with aria-describedby, so it is read when the field gets focus.'
  ],
  links: [
    wcag("1.3.5", "Identify Input Purpose", "identify-input-purpose"),
    wcag("1.3.1", "Info and Relationships", "info-and-relationships"),
    {
      label: "MDN: the autocomplete attribute",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"
    }
  ]
};
