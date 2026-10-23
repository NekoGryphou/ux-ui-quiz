import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "focus-escapes-dialog",
  kind: "single",
  title: { en: "Lost behind the dialog", fr: "Un focus perdu derrière la boîte de dialogue" },
  principle: {
    en: "Keep keyboard focus inside an open modal",
    fr: "Garder le focus clavier dans une fenêtre modale ouverte"
  },
  scenario: {
    en: "A keyboard user opens the Rename dialog to rename a file. Try it: click the preview and press Tab a few times.",
    fr: "Une personne qui navigue au clavier ouvre la boîte de dialogue Renommer pour renommer un fichier. Essayez : cliquez sur l’aperçu et appuyez plusieurs fois sur Tab."
  },
  prompt: { en: "What is the main issue here?", fr: "Quel est le principal problème ici ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "After the dialog’s buttons, keyboard focus moves on to links on the page behind it.",
        fr: "Après les boutons de la boîte de dialogue, le focus clavier passe aux liens de la page située derrière."
      }
    },
    {
      id: "b",
      text: {
        en: "The dialog doesn’t preselect the file name, so users must clear it before typing.",
        fr: "La boîte de dialogue ne présélectionne pas le nom du fichier, qu’il faut donc effacer avant de taper."
      }
    },
    {
      id: "c",
      text: {
        en: "The Cancel button comes first, which slows down the most common action in the dialog.",
        fr: "Le bouton Annuler vient en premier, ce qui ralentit l’action la plus courante de la boîte de dialogue."
      }
    },
    {
      id: "d",
      text: {
        en: "The page behind the dialog is dimmed, which makes the surrounding context hard to see.",
        fr: "La page derrière la boîte de dialogue est assombrie, ce qui rend le contexte difficile à voir."
      }
    }
  ],
  explanation: {
    en: [
      "While a modal dialog is open, Tab must cycle through the dialog’s own controls only. Here the fourth Tab slips onto “Share” behind the overlay: the user is now acting on a page they can’t see.",
      "Trap focus inside the dialog, close it with Escape, and return focus to the button that opened it. A native <dialog> opened with showModal(), or inert on the background, does this for you.",
      "Dimming the background is the expected modal pattern, and Cancel-then-confirm is a common button order."
    ],
    fr: [
      "Tant qu’une boîte de dialogue modale est ouverte, Tab ne doit parcourir que ses propres contrôles. Ici, le quatrième Tab glisse sur « Partager », derrière le voile : on agit désormais sur une page qu’on ne voit pas.",
      "Piégez le focus dans la boîte de dialogue, fermez-la avec Échap et rendez le focus au bouton qui l’a ouverte. Un <dialog> natif ouvert avec showModal(), ou l’attribut inert sur l’arrière-plan, s’en charge pour vous.",
      "Assombrir l’arrière-plan est le comportement attendu d’une modale, et l’ordre Annuler puis Valider est courant."
    ]
  },
  links: [
    wcag("2.4.3", { en: "Focus Order", fr: "Parcours du focus" }, "focus-order"),
    {
      label: { en: "ARIA pattern: modal dialog", fr: "Motif ARIA : boîte de dialogue modale" },
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"
    }
  ]
};
