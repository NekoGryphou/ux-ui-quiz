import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "bulk-delete-no-undo",
  kind: "single",
  title: { en: "Gone in one click", fr: "Disparu en un clic" },
  principle: {
    en: "Make destructive bulk actions recoverable",
    fr: "Rendre les actions destructrices groupées réversibles"
  },
  scenario: {
    en: "A designer tidies a shared project folder: they select what they think are old drafts and press Delete. The page updates as shown.",
    fr: "Une personne de l’équipe design range un dossier de projet partagé : elle sélectionne ce qu’elle croit être d’anciens brouillons et clique sur Supprimer. La page se met à jour comme ci-dessous."
  },
  prompt: {
    en: "What is the main issue with how this delete is handled?",
    fr: "Quel est le principal problème dans la gestion de cette suppression ?"
  },
  correct: ["b"],
  choices: [
    {
      id: "a",
      text: {
        en: "The toast appears in the bottom corner, far from the list where the files were.",
        fr: "Le toast apparaît dans le coin inférieur, loin de la liste où se trouvaient les fichiers."
      }
    },
    {
      id: "b",
      text: {
        en: "24 files vanished at once with no undo, so a wrong selection is permanent.",
        fr: "24 fichiers ont disparu d’un coup sans annulation possible : une mauvaise sélection est définitive."
      }
    },
    {
      id: "c",
      text: {
        en: "The toast gives a count instead of listing the names of the deleted files.",
        fr: "Le toast donne un nombre au lieu de lister les noms des fichiers supprimés."
      }
    },
    {
      id: "d",
      text: {
        en: "The file list re-sorts after deleting, so the user loses their place in it.",
        fr: "La liste se trie à nouveau après la suppression, si bien qu’on y perd sa position."
      }
    }
  ],
  explanation: {
    en: [
      "Bulk actions multiply the cost of a slip: one wrong “select all” removed 24 files from a folder the whole team uses.",
      "Prefer undo over an “Are you sure?” dialog: an Undo button in the toast (kept long enough to use), or a trash that can be restored, lets people recover without slowing them down.",
      "A count is the right summary for a bulk action, and the bottom corner is the conventional place for a toast."
    ],
    fr: [
      "Les actions groupées multiplient le coût d’une erreur : un seul « tout sélectionner » malheureux a supprimé 24 fichiers d’un dossier utilisé par toute l’équipe.",
      "Préférez l’annulation à une boîte « Voulez-vous vraiment supprimer ? » : un bouton Annuler dans le toast (affiché assez longtemps pour s’en servir) ou une corbeille restaurable permet de se rattraper sans ralentir personne.",
      "Un nombre est le bon résumé pour une action groupée, et le coin inférieur est l’emplacement habituel d’un toast."
    ]
  }
};
