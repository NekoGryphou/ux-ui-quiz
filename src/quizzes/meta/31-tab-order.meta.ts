import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "tab-order",
  kind: "multiple",
  title: { en: "A tour of the page before the form", fr: "Le tour de la page avant le formulaire" },
  principle: {
    en: "Keep keyboard order logical and let users skip repeated blocks",
    fr: "Garder un ordre clavier logique et permettre de passer les blocs répétés"
  },
  scenario: {
    en: "A keyboard user opens a contact page to send a message. Try it: click the preview and press Tab to move through the page as they would.",
    fr: "Une personne qui navigue au clavier ouvre une page de contact pour envoyer un message. Essayez : cliquez sur l’aperçu et appuyez sur Tab pour parcourir la page comme elle."
  },
  prompt: {
    en: "Which issues will this keyboard user run into?",
    fr: "Quels problèmes cette personne va-t-elle rencontrer au clavier ?"
  },
  correct: ["a", "b"],
  choices: [
    {
      id: "a",
      text: {
        en: "Inside the form, focus jumps to Send before the Name and Company fields.",
        fr: "Dans le formulaire, le focus saute sur Envoyer avant les champs Nom et Entreprise."
      }
    },
    {
      id: "b",
      text: {
        en: "Fourteen header links come before the form, with no way to skip past them.",
        fr: "Quatorze liens d’en-tête précèdent le formulaire, sans aucun moyen de les passer."
      }
    },
    {
      id: "c",
      text: {
        en: "The header links are plain text, where icons would make them faster to scan.",
        fr: "Les liens d’en-tête sont en texte simple, alors que des icônes les rendraient plus rapides à parcourir."
      }
    },
    {
      id: "d",
      text: {
        en: "The form has no placeholder text showing the expected format of each field.",
        fr: "Le formulaire n’a pas de texte indicatif montrant le format attendu de chaque champ."
      }
    }
  ],
  explanation: {
    en: [
      "Focus order must follow the visual order (WCAG 2.4.3 Focus Order). Positive tabindex values usually cause jumps like this one; keep the DOM in reading order instead.",
      "Before reaching the form, the user presses Tab 14 times through the header. A “Skip to content” link as the first stop solves it (WCAG 2.4.1 Bypass Blocks).",
      "Text links are the clearest navigation, and visible labels already explain each field."
    ],
    fr: [
      "L’ordre du focus doit suivre l’ordre visuel (WCAG 2.4.3 Parcours du focus). Des valeurs de tabindex positives provoquent généralement ce genre de saut ; gardez plutôt le DOM dans l’ordre de lecture.",
      "Avant d’atteindre le formulaire, il faut appuyer 14 fois sur Tab pour traverser l’en-tête. Un lien « Aller au contenu » en premier arrêt règle le problème (WCAG 2.4.1 Contourner des blocs).",
      "Les liens texte sont la navigation la plus claire, et les libellés visibles expliquent déjà chaque champ."
    ]
  },
  links: [
    wcag("2.4.3", { en: "Focus Order", fr: "Parcours du focus" }, "focus-order"),
    wcag("2.4.1", { en: "Bypass Blocks", fr: "Contourner des blocs" }, "bypass-blocks")
  ]
};
