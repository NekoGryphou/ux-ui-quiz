import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "year-dropdown",
  kind: "single",
  title: { en: "Scroll back to 1987", fr: "Remonter jusqu’en 1987" },
  principle: {
    en: "Pick input controls that fit the data",
    fr: "Choisir des champs adaptés aux données"
  },
  scenario: {
    en: "A new customer fills in their date of birth on a car insurance quote form, on their laptop.",
    fr: "Sur son ordinateur portable, une personne saisit sa date de naissance dans un formulaire de devis d’assurance auto."
  },
  prompt: { en: "What is the main issue with this form?", fr: "Quel est le principal problème de ce formulaire ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The birth year is a dropdown starting at 1900, so most people scroll past ninety years first.",
        fr: "L’année de naissance est une liste déroulante qui commence en 1900 : il faut d’abord faire défiler quatre-vingt-dix ans."
      }
    },
    {
      id: "b",
      text: {
        en: "Day, month and year are three separate fields, where a single text field would look tidier.",
        fr: "Le jour, le mois et l’année sont trois champs séparés, alors qu’un seul champ texte serait plus net."
      }
    },
    {
      id: "c",
      text: {
        en: "The months are listed as names, where numbers from 1 to 12 would make the list shorter.",
        fr: "Les mois sont affichés en toutes lettres, alors que des chiffres de 1 à 12 raccourciraient la liste."
      }
    },
    {
      id: "d",
      text: {
        en: "The form asks for the date of birth first, where the car details would be a gentler start.",
        fr: "Le formulaire demande d’abord la date de naissance, alors que le véhicule serait une entrée en matière plus douce."
      }
    }
  ],
  explanation: {
    en: [
      "A known date of birth is typed in a second, but here the year hides in a 125-item list that opens at 1900: everyone scrolls through decades, overshoots and scrolls back. Dropdowns are slow for long, familiar values.",
      "Use plain text fields for dates people know by heart (day, month, year with the right keyboard), and keep dropdowns or pickers for short lists or dates people need to look up.",
      "Separate day, month and year fields are a recommended pattern, month names avoid confusion, and insurers need the birth date to price a quote."
    ],
    fr: [
      "Une date de naissance connue se tape en une seconde, mais ici l’année se cache dans une liste de 125 éléments qui s’ouvre sur 1900 : chacun fait défiler des décennies, dépasse et revient en arrière. Les listes déroulantes sont lentes pour les valeurs longues et familières.",
      "Utilisez de simples champs texte pour les dates que l’on connaît par cœur (jour, mois, année, avec le bon clavier), et réservez les listes déroulantes ou les sélecteurs aux listes courtes ou aux dates qu’il faut chercher.",
      "Des champs séparés pour le jour, le mois et l’année sont un modèle recommandé, les noms de mois évitent les confusions, et l’assureur a besoin de la date de naissance pour établir le devis."
    ]
  }
};
