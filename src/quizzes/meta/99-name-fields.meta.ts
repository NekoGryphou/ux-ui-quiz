import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "name-fields",
  kind: "single",
  title: { en: "First name, last name, and other assumptions", fr: "Prénom, nom et autres idées reçues" },
  principle: {
    en: "Don’t force names into one cultural pattern",
    fr: "Ne pas imposer un seul modèle culturel aux noms"
  },
  scenario: {
    en: "A new employee from Indonesia, whose legal name is the single word Sukarni, fills in the HR onboarding form.",
    fr: "Une nouvelle recrue venue d’Indonésie, dont le nom légal est le seul mot Sukarni, remplit le formulaire d’accueil RH."
  },
  prompt: { en: "What is the main issue with this form?", fr: "Quel est le principal problème de ce formulaire ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Both first and last name are required, so someone with a single name can’t submit.",
        fr: "Le prénom et le nom sont tous deux obligatoires, si bien qu’une personne au nom unique ne peut pas valider."
      }
    },
    {
      id: "b",
      text: {
        en: "The name fields sit side by side, where stacked fields would read more easily on mobile.",
        fr: "Les champs de nom sont côte à côte, alors que des champs empilés se liraient plus facilement sur mobile."
      }
    },
    {
      id: "c",
      text: {
        en: "The form asks for a preferred name, where the legal name alone would keep it shorter.",
        fr: "Le formulaire demande un prénom d’usage, alors que le seul nom légal le rendrait plus court."
      }
    },
    {
      id: "d",
      text: {
        en: "The labels sit above the fields, where labels to the left would align the form better.",
        fr: "Les libellés sont au-dessus des champs, alors que des libellés à gauche aligneraient mieux le formulaire."
      }
    }
  ],
  explanation: {
    en: [
      "Many people have a single name, put the family name first, have several family names or use characters the form rejects. Requiring both a “first” and a “last” name forces Sukarni to invent one, which then ends up on contracts and payslips.",
      "Use one “Full name” field, plus an optional “What should we call you?” if you need a greeting. Accept any characters and lengths, and only split names when a legal system truly requires it.",
      "Side-by-side fields, a preferred-name field and top-aligned labels are all fine choices."
    ],
    fr: [
      "Beaucoup de personnes ont un nom unique, placent le nom de famille en premier, ont plusieurs noms de famille ou utilisent des caractères que le formulaire refuse. Exiger à la fois un « prénom » et un « nom » oblige Sukarni à en inventer un, qui se retrouve ensuite sur les contrats et les fiches de paie.",
      "Utilisez un seul champ « Nom complet », plus un champ facultatif « Comment souhaitez-vous qu’on vous appelle ? » si vous avez besoin d’une formule d’accueil. Acceptez tous les caractères et toutes les longueurs, et ne séparez les noms que lorsqu’un système juridique l’exige vraiment.",
      "Des champs côte à côte, un champ de prénom d’usage et des libellés au-dessus des champs sont tous de bons choix."
    ]
  }
};
