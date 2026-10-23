import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "export-progress",
  kind: "compare",
  title: { en: "Still exporting… probably", fr: "Toujours en cours d’export… sans doute" },
  principle: { en: "Show progress for long tasks", fr: "Montrer la progression des tâches longues" },
  scenario: {
    en: "An editor exports a 12-minute video, a task that takes about two minutes, and wonders whether to grab a coffee.",
    fr: "Une personne exporte une vidéo de 12 minutes, une tâche d’environ deux minutes, et se demande si elle a le temps d’aller prendre un café."
  },
  prompt: {
    en: "Which version handles the wait better?",
    fr: "Quelle version gère le mieux l’attente ?"
  },
  correct: ["b"],
  explanation: {
    en: [
      "A spinner says “something is happening”, nothing more. After a minute, the editor can’t tell if the export is nearly done, stuck, or hasn’t started, so they wait, cancel, or start it again.",
      "For tasks longer than a few seconds, show determinate progress: a bar, a percentage and ideally the time left, plus what is happening (“Encoding audio”). It lets people plan, and proves the app hasn’t frozen.",
      "Both versions show the same dialog, file and Cancel button; only the progress feedback differs."
    ],
    fr: [
      "Un indicateur de chargement dit « il se passe quelque chose », rien de plus. Au bout d’une minute, impossible de savoir si l’export est presque terminé, bloqué ou pas encore commencé : on attend, on annule ou on relance.",
      "Pour une tâche de plus de quelques secondes, affichez une progression déterminée : une barre, un pourcentage et idéalement le temps restant, ainsi que l’étape en cours (« Encodage audio »). Cela permet de s’organiser et prouve que l’application n’est pas figée.",
      "Les deux versions montrent la même boîte de dialogue, le même fichier et le même bouton Annuler ; seul le retour sur la progression diffère."
    ]
  }
};
