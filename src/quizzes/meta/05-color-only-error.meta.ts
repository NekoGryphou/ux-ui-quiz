import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "color-only-error",
  kind: "single",
  title: { en: "Error signalled by color alone", fr: "Une erreur signalée par la seule couleur" },
  principle: {
    en: "Explain errors in words, not only with color",
    fr: "Expliquer les erreurs avec des mots, pas seulement avec la couleur"
  },
  scenario: {
    en: "A customer enters their card details and clicks Pay. The page updates as shown.",
    fr: "Une personne saisit les informations de sa carte et clique sur Payer. La page se met à jour comme ci-dessous."
  },
  prompt: {
    en: "What is the main issue on this payment step?",
    fr: "Quel est le principal problème de cette étape de paiement ?"
  },
  correct: ["c"],
  choices: [
    {
      id: "a",
      text: {
        en: "The Pay button stays enabled while a field is invalid, which invites repeated clicks.",
        fr: "Le bouton Payer reste actif alors qu’un champ est invalide, ce qui invite à cliquer plusieurs fois."
      }
    },
    {
      id: "b",
      text: {
        en: "The card number is a single input instead of four separate groups of four digits.",
        fr: "Le numéro de carte tient dans un seul champ au lieu de quatre groupes séparés de quatre chiffres."
      }
    },
    {
      id: "c",
      text: {
        en: "The card number field turns red, but no message says what is wrong or how to fix it.",
        fr: "Le champ du numéro de carte devient rouge, mais aucun message ne dit ce qui ne va pas ni comment corriger."
      }
    },
    {
      id: "d",
      text: {
        en: "The card number field shows no network logo, so users can’t confirm the card type.",
        fr: "Le champ du numéro de carte n’affiche aucun logo de réseau, impossible donc de confirmer le type de carte."
      }
    }
  ],
  explanation: {
    en: [
      "A red border tells users something failed but not what: a typo, an expired card, an unsupported network?",
      "Errors must be identified and described in text (WCAG 3.3.1 Error Identification), and color can’t be the only signal (WCAG 1.4.1 Use of Color).",
      "Pair the visual state with a specific message next to the field, plus an icon, e.g. “This card number is incomplete.”"
    ],
    fr: [
      "Une bordure rouge indique qu’un problème est survenu, mais pas lequel : une faute de frappe, une carte expirée, un réseau non accepté ?",
      "Les erreurs doivent être identifiées et décrites par un texte (WCAG 3.3.1 Identification des erreurs), et la couleur ne peut pas être le seul signal (WCAG 1.4.1 Utilisation de la couleur).",
      "Associez l’état visuel à un message précis à côté du champ, accompagné d’une icône, par exemple « Ce numéro de carte est incomplet. »"
    ]
  },
  links: [
    wcag("3.3.1", { en: "Error Identification", fr: "Identification des erreurs" }, "error-identification"),
    wcag("1.4.1", { en: "Use of Color", fr: "Utilisation de la couleur" }, "use-of-color")
  ]
};
