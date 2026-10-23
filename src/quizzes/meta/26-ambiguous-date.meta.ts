import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "ambiguous-date",
  kind: "single",
  title: { en: "March 4 or April 3?", fr: "4 mars ou 3 avril ?" },
  principle: { en: "Write dates in an unambiguous format", fr: "Écrire les dates dans un format sans ambiguïté" },
  scenario: {
    en: "A traveler from Paris books a flight to New York on a US airline’s website and checks the confirmation.",
    fr: "Une personne qui part de Paris réserve un vol pour New York sur le site d’une compagnie américaine, puis vérifie la confirmation."
  },
  prompt: {
    en: "What is the main issue with this confirmation?",
    fr: "Quel est le principal problème de cette confirmation ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The departure date 03/04/2026 reads as March 4 or April 3 depending on the reader.",
        fr: "La date de départ 03/04/2026 se lit 4 mars ou 3 avril selon les habitudes de chacun."
      }
    },
    {
      id: "b",
      text: {
        en: "The booking reference is set in capitals, which makes it harder to read aloud.",
        fr: "La référence de réservation est en majuscules, ce qui la rend plus difficile à épeler."
      }
    },
    {
      id: "c",
      text: {
        en: "Times use the 24-hour clock, which some travelers find less familiar to read.",
        fr: "Les heures sont au format 24 h, que certaines personnes trouvent moins familier."
      }
    },
    {
      id: "d",
      text: {
        en: "The total price has no breakdown of taxes and fees next to the amount paid.",
        fr: "Le prix total ne détaille pas les taxes et les frais à côté du montant payé."
      }
    }
  ],
  explanation: {
    en: [
      "Numeric dates mean different things in different countries: 03/04 is March 4 in the US and April 3 in most of Europe. A traveler can show up a month early or late.",
      "For an international audience, spell the month out (“Wed, 4 Mar 2026”) or follow the reader’s locale.",
      "Booking references are conventionally uppercase, and the 24-hour clock is the norm in aviation."
    ],
    fr: [
      "Une date en chiffres n’a pas le même sens partout : 03/04 désigne le 4 mars aux États-Unis, mais le 3 avril en France et dans la plupart de l’Europe. On peut se présenter à l’aéroport un mois trop tôt ou trop tard.",
      "Pour un public international, écrivez le mois en toutes lettres (« mer. 4 mars 2026 ») ou suivez les conventions de la langue de la personne.",
      "Les références de réservation sont par convention en majuscules, et le format 24 h est la norme dans l’aviation."
    ]
  }
};
