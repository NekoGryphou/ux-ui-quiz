import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "strict-date-format",
  kind: "single",
  title: { en: "Invalid date, apparently", fr: "Date invalide, paraît-il" },
  principle: {
    en: "Accept input in the formats people naturally use",
    fr: "Accepter les saisies dans les formats que chacun utilise naturellement"
  },
  scenario: {
    en: "A consultant fills in their weekly timesheet in the company’s time-tracking tool.",
    fr: "Une personne en mission de conseil remplit sa feuille de temps hebdomadaire dans l’outil de suivi des temps de l’entreprise."
  },
  prompt: {
    en: "What is the main issue with this form?",
    fr: "Quel est le principal problème de ce formulaire ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The field rejects a valid date over its slashes, where it could accept and convert common formats.",
        fr: "Le champ refuse une date valide à cause de ses barres obliques, au lieu d’accepter et convertir les formats courants."
      }
    },
    {
      id: "b",
      text: {
        en: "The format hint sits inside the label, where help text under the field would be easier to notice.",
        fr: "L’indication de format est dans le libellé, alors qu’une aide placée sous le champ serait plus visible."
      }
    },
    {
      id: "c",
      text: {
        en: "The error appears as text next to the field, where a pop-up message would make sure it gets read.",
        fr: "L’erreur s’affiche en texte à côté du champ, alors qu’une fenêtre pop-up garantirait qu’elle soit lue."
      }
    },
    {
      id: "d",
      text: {
        en: "The hours grid uses one column per day, where a single weekly total would be quicker to fill in.",
        fr: "La grille des heures a une colonne par jour, alors qu’un seul total hebdomadaire serait plus rapide à saisir."
      }
    }
  ],
  explanation: {
    en: [
      "“14/05/2025” is a perfectly clear date; the tool refuses it only because it expects 14052025 without separators. The consultant is blocked for typing a date the way everyone writes it.",
      "Be liberal in what you accept: ignore spaces and separators, accept common orders and month names, then show the date back in one clear format so people can check it.",
      "The label does state the format, an inline message next to the field is the right place for an error, and per-day columns match how timesheets are reviewed."
    ],
    fr: [
      "« 14/05/2025 » est une date parfaitement claire ; l’outil la refuse uniquement parce qu’il attend 14052025, sans séparateurs. La personne est bloquée pour avoir écrit la date comme tout le monde.",
      "Faites preuve de tolérance dans ce que vous acceptez : ignorez les espaces et les séparateurs, acceptez les ordres courants et les noms de mois, puis réaffichez la date dans un format clair unique pour qu’elle puisse être vérifiée.",
      "Le libellé indique bien le format, un message à côté du champ est le bon endroit pour une erreur, et une colonne par jour correspond à la façon dont les feuilles de temps sont relues."
    ]
  }
};
