import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "vanity-metric",
  kind: "single",
  title: { en: "The spotlight on the wrong number", fr: "Les projecteurs sur le mauvais chiffre" },
  principle: {
    en: "Give emphasis to what drives the decision",
    fr: "Mettre en avant ce qui guide la décision"
  },
  scenario: {
    en: "A founder opens the Monday dashboard to decide whether the business is on track this month.",
    fr: "Le lundi, la personne qui a fondé l’entreprise ouvre le tableau de bord pour savoir si l’activité est sur la bonne voie ce mois-ci."
  },
  prompt: {
    en: "What is the main issue with this dashboard?",
    fr: "Quel est le principal problème de ce tableau de bord ?"
  },
  correct: ["c"],
  choices: [
    {
      id: "a",
      text: {
        en: "The dashboard shows four metrics at once, which is more than a founder can take in.",
        fr: "Le tableau de bord affiche quatre indicateurs à la fois, plus qu’on ne peut en assimiler d’un coup."
      }
    },
    {
      id: "b",
      text: {
        en: "Each change compares with last month, where a year-on-year view would be steadier.",
        fr: "Chaque variation est comparée au mois précédent, alors qu’une vue sur un an serait plus stable."
      }
    },
    {
      id: "c",
      text: {
        en: "Page views get the big highlighted card, while falling revenue gets a small tile.",
        fr: "Les pages vues ont la grande carte mise en avant, alors que le chiffre d’affaires en baisse a une petite tuile."
      }
    },
    {
      id: "d",
      text: {
        en: "Churn is shown as a percentage, where a count of lost customers would be clearer.",
        fr: "L’attrition est affichée en pourcentage, alors qu’un nombre de clients perdus serait plus parlant."
      }
    }
  ],
  explanation: {
    en: [
      "Visual weight tells users what matters. Here the largest, most colorful card is a vanity metric that is up, while revenue and customers are down.",
      "A glance gives the founder the wrong answer: “we’re growing”. Lead with the metrics the decision depends on, and let warning signs stand out.",
      "Four metrics is a manageable amount, and month-over-month deltas are a reasonable default for a weekly check."
    ],
    fr: [
      "Le poids visuel indique ce qui compte. Ici, la carte la plus grande et la plus colorée est un indicateur de vanité en hausse, alors que le chiffre d’affaires et les clients sont en baisse.",
      "Un coup d’œil donne la mauvaise réponse : « on grandit ». Commencez par les indicateurs dont dépend la décision et faites ressortir les signaux d’alerte.",
      "Quatre indicateurs restent une quantité raisonnable, et les variations d’un mois sur l’autre sont un choix par défaut sensé pour un point hebdomadaire."
    ]
  }
};
