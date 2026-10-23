import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "confirm-chain",
  kind: "single",
  title: { en: "Are you sure you’re sure?", fr: "Vraiment ? Vraiment vraiment ?" },
  principle: {
    en: "Save confirmations for actions that need them",
    fr: "Réserver les confirmations aux actions qui en ont besoin"
  },
  scenario: {
    en: "An office assistant closes the stock spreadsheet tool at the end of the day, after saving their work.",
    fr: "En fin de journée, une personne chargée de l’administratif ferme le tableur de gestion des stocks, après avoir enregistré son travail."
  },
  prompt: { en: "What is the main issue with this exit?", fr: "Quel est le principal problème de cette sortie ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Closing a saved file triggers three confirmations in a row, so people click Yes without reading.",
        fr: "Fermer un fichier enregistré déclenche trois confirmations d’affilée, si bien qu’on clique sur Oui sans lire."
      }
    },
    {
      id: "b",
      text: {
        en: "Each dialog has a warning icon, where a question mark icon would match the questions better.",
        fr: "Chaque boîte affiche une icône d’alerte, alors qu’un point d’interrogation collerait mieux aux questions."
      }
    },
    {
      id: "c",
      text: {
        en: "The dialogs use Yes and No, where buttons naming each action would be clearer to scan quickly.",
        fr: "Les boîtes utilisent Oui et Non, alors que des boutons nommant chaque action se liraient plus vite."
      }
    },
    {
      id: "d",
      text: {
        en: "The dialogs stack on top of each other, where replacing each one would keep the screen tidier.",
        fr: "Les boîtes s’empilent les unes sur les autres, alors que les remplacer garderait l’écran plus net."
      }
    }
  ],
  explanation: {
    en: [
      "The work is saved and closing loses nothing, yet the tool asks three times. Users learn that these dialogs never matter, click through them by reflex, and will do the same on the day a warning is real.",
      "Confirm only actions that are destructive and can’t be undone, and say what will be lost. For everything else, just do it, or offer undo.",
      "The icons, the Yes/No wording and the stacking would each be worth polishing, but none of them is the core problem: the questions shouldn’t be asked at all."
    ],
    fr: [
      "Le travail est enregistré et fermer ne fait rien perdre, pourtant l’outil pose la question trois fois. On apprend que ces boîtes de dialogue ne servent à rien, on les valide par réflexe, et on fera pareil le jour où l’alerte sera sérieuse.",
      "Ne demandez confirmation que pour les actions destructrices et irréversibles, en précisant ce qui sera perdu. Pour tout le reste, agissez directement, ou proposez d’annuler.",
      "Les icônes, les libellés Oui/Non et l’empilement mériteraient chacun d’être peaufinés, mais aucun n’est le cœur du problème : ces questions ne devraient pas être posées du tout."
    ]
  }
};
