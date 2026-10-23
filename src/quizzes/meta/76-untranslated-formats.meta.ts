import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "untranslated-formats",
  kind: "multiple",
  title: { en: "Translated, not localized", fr: "Traduit, mais pas localisé" },
  principle: {
    en: "Localize dates, numbers and times, not just words",
    fr: "Localiser les dates, les nombres et les heures, pas seulement les mots"
  },
  scenario: {
    en: "A traveller in Lyon books a train on the French version of an international rail site.",
    fr: "À Lyon, une personne réserve un train sur la version française d’un site ferroviaire international."
  },
  prompt: {
    en: "Which issues will confuse this French customer?",
    fr: "Quels problèmes vont dérouter cette personne francophone ?"
  },
  correct: ["a", "b", "c"],
  choices: [
    {
      id: "a",
      text: {
        en: "The date reads 04/05/2025 in US order, so a French reader takes it for 4 May, not 5 April.",
        fr: "La date 04/05/2025 suit l’ordre américain : un lecteur français comprend 4 mai, et non 5 avril."
      }
    },
    {
      id: "b",
      text: {
        en: "Prices use a decimal point and a leading $, where French readers expect “89,50 €”.",
        fr: "Les prix utilisent un point décimal et un $ devant, alors qu’en France on attend « 89,50 € »."
      }
    },
    {
      id: "c",
      text: {
        en: "Times use AM and PM, where French users read the 24-hour clock with “h” as a separator.",
        fr: "Les heures utilisent AM et PM, alors qu’en France on lit l’heure sur 24 h avec « h » comme séparateur."
      }
    },
    {
      id: "d",
      text: {
        en: "The page is written in French, where English would be safer for an international site.",
        fr: "La page est rédigée en français, alors que l’anglais serait plus sûr pour un site international."
      }
    }
  ],
  explanation: {
    en: [
      "Every word is translated, but the formats still come from the US template: 04/05/2025 means 4 May to a French reader (it’s 5 April), “$89.50” looks like dollars, and “7:45 PM” isn’t how departures are written in France.",
      "Localize formats with the locale, not by hand: Intl.DateTimeFormat and Intl.NumberFormat with fr-FR give “5 avril 2025”, “89,50 €” and “19 h 45”. Writing the month as a word removes date ambiguity for everyone.",
      "Translating the page into the customer’s language is exactly right; the problem is only what was left behind."
    ],
    fr: [
      "Chaque mot est traduit, mais les formats viennent encore du modèle américain : 04/05/2025 se lit 4 mai en France (il s’agit du 5 avril), « $89.50 » ressemble à des dollars, et « 7:45 PM » n’est pas la façon d’écrire un horaire de départ en France.",
      "Localisez les formats avec la locale, pas à la main : Intl.DateTimeFormat et Intl.NumberFormat avec fr-FR donnent « 5 avril 2025 », « 89,50 € » et « 19 h 45 ». Écrire le mois en toutes lettres supprime toute ambiguïté de date, pour tout le monde.",
      "Traduire la page dans la langue de la personne est exactement ce qu’il faut faire ; le problème vient seulement de ce qui a été oublié."
    ]
  }
};
