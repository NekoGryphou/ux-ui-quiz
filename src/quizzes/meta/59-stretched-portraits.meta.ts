import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "stretched-portraits",
  kind: "single",
  title: { en: "The funhouse team page", fr: "La page équipe façon palais des glaces" },
  principle: { en: "Keep images in proportion", fr: "Respecter les proportions des images" },
  scenario: {
    en: "A candidate visits a design studio’s team page before a job interview, to put faces to names.",
    fr: "Avant un entretien d’embauche, une personne candidate consulte la page équipe d’un studio de design pour mettre des visages sur des noms."
  },
  prompt: { en: "What is the main issue with this page?", fr: "Quel est le principal problème de cette page ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Two portraits are stretched to fill their frames, so those faces look squashed and odd.",
        fr: "Deux portraits sont étirés pour remplir leur cadre, si bien que ces visages paraissent écrasés et bizarres."
      }
    },
    {
      id: "b",
      text: {
        en: "The portraits are round, where square photos would show a little more of each person.",
        fr: "Les portraits sont ronds, alors que des photos carrées montreraient un peu plus de chaque personne."
      }
    },
    {
      id: "c",
      text: {
        en: "Job titles sit under the names in grey, where matching colors would make them pop more.",
        fr: "Les postes sont en gris sous les noms, alors qu’une couleur assortie les ferait mieux ressortir."
      }
    },
    {
      id: "d",
      text: {
        en: "The grid shows four people per row, where three per row would give each photo more room.",
        fr: "La grille affiche quatre personnes par ligne, alors que trois laisseraient plus de place à chaque photo."
      }
    }
  ],
  explanation: {
    en: [
      "Two photos were forced into the square frame by stretching instead of cropping: one face is squashed flat, the other pulled tall. Distorted images look careless and, on a team page, a little disrespectful.",
      "Keep the original aspect ratio and crop to fit (object-fit: cover, with a sensible focal point), or prepare images at the right ratio before upload.",
      "Round crops are a common portrait style, grey job titles create a useful hierarchy, and four per row is a normal grid at this width."
    ],
    fr: [
      "Deux photos ont été forcées dans le cadre carré en les étirant au lieu de les recadrer : un visage est aplati, l’autre allongé. Des images déformées donnent une impression de négligence et, sur une page équipe, d’un certain manque de respect.",
      "Conservez le ratio d’origine et recadrez pour remplir le cadre (object-fit: cover, avec un point focal bien choisi), ou préparez les images au bon ratio avant de les mettre en ligne.",
      "Le recadrage rond est un style de portrait courant, les postes en gris créent une hiérarchie utile, et quatre par ligne est une grille normale à cette largeur."
    ]
  }
};
