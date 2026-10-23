import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "error-message-wording",
  kind: "compare",
  title: { en: "An error that explains itself", fr: "Une erreur qui s’explique d’elle-même" },
  principle: {
    en: "Say what went wrong and how to fix it",
    fr: "Dire ce qui ne va pas et comment le corriger"
  },
  scenario: {
    en: "A customer schedules a grocery delivery and picks a date that isn’t available.",
    fr: "Une personne planifie la livraison de ses courses et choisit une date qui n’est pas disponible."
  },
  prompt: {
    en: "Which error message works better?",
    fr: "Quel message d’erreur fonctionne le mieux ?"
  },
  correct: ["b"],
  explanation: {
    en: [
      "A status code and “invalid input” tell the customer something failed, but not what or what to do next.",
      "A good error names the problem in the user’s words and gives the way out: which dates work, with an example (WCAG 3.3.3 Error Suggestion).",
      "Both versions place the message under the field and mark it with color and an icon; only the wording differs."
    ],
    fr: [
      "Un code d’état et « saisie invalide » signalent un échec, mais ni ce qui a échoué ni quoi faire ensuite.",
      "Un bon message d’erreur nomme le problème avec les mots de la personne et indique la marche à suivre : quelles dates sont possibles, avec un exemple (WCAG 3.3.3 Suggestion après une erreur).",
      "Les deux versions placent le message sous le champ et le signalent par une couleur et une icône ; seule la formulation change."
    ]
  },
  links: [wcag("3.3.3", { en: "Error Suggestion", fr: "Suggestion après une erreur" }, "error-suggestion")]
};
