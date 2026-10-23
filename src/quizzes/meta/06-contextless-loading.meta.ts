import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "contextless-loading",
  kind: "single",
  title: { en: "A long wait with no context", fr: "Une longue attente sans contexte" },
  principle: {
    en: "Make long-running work visible and escapable",
    fr: "Rendre les traitements longs visibles et faciles à quitter"
  },
  scenario: {
    en: "A finance analyst exports a year of transactions to CSV. Exports this size usually take around two minutes.",
    fr: "Une personne du service financier exporte une année de transactions en CSV. Un export de cette taille prend en général environ deux minutes."
  },
  prompt: {
    en: "What is the main issue with this loading state?",
    fr: "Quel est le principal problème de cet état de chargement ?"
  },
  correct: ["b"],
  choices: [
    {
      id: "a",
      text: {
        en: "The spinner replaces the whole report area, where a skeleton of the table would fit.",
        fr: "Le spinner remplace toute la zone du rapport, là où un squelette du tableau serait adapté."
      }
    },
    {
      id: "b",
      text: {
        en: "For a two-minute export, a lone spinner gives no sense of progress or time left.",
        fr: "Pour un export de deux minutes, un spinner seul n’indique ni la progression ni le temps restant."
      }
    },
    {
      id: "c",
      text: {
        en: "The loader is a spinner, where a looping progress bar would make the wait feel shorter.",
        fr: "Le chargement est un spinner, là où une barre de progression en boucle raccourcirait l’attente ressentie."
      }
    },
    {
      id: "d",
      text: {
        en: "The sidebar stays clickable during the export, so users may leave the page by accident.",
        fr: "La barre latérale reste cliquable pendant l’export, on risque donc de quitter la page par erreur."
      }
    }
  ],
  explanation: {
    en: [
      "Spinners suit waits of a few seconds. Beyond that, users can’t tell whether the system is working or stuck.",
      "Show determinate progress or an estimate, and let users keep working: “We’ll email you when your export is ready.” Leaving the page should be safe, not prevented.",
      "Skeletons suit content about to appear in place, and a looping bar is still indeterminate: neither tells users how long is left."
    ],
    fr: [
      "Un spinner convient aux attentes de quelques secondes. Au-delà, impossible de savoir si le système travaille ou s’il est bloqué.",
      "Affichez une progression déterminée ou une estimation, et laissez la personne continuer à travailler : « Nous vous enverrons un e-mail dès que votre export sera prêt. » Quitter la page doit être sans risque, pas empêché.",
      "Un squelette convient à un contenu sur le point d’apparaître à sa place, et une barre en boucle reste indéterminée : ni l’un ni l’autre n’indique le temps restant."
    ]
  }
};
