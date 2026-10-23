import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "flash-html-splash",
  kind: "single",
  title: { en: "Choose your technology", fr: "Choisissez votre technologie" },
  principle: {
    en: "Don’t ask people to solve technical questions to enter a site",
    fr: "Ne pas imposer de questions techniques pour entrer sur un site"
  },
  scenario: {
    en: "A customer types the address of a local bakery to check its opening hours.",
    fr: "Une personne saisit l’adresse d’une boulangerie du quartier pour vérifier ses horaires d’ouverture."
  },
  prompt: {
    en: "What is the main issue with this homepage?",
    fr: "Quel est le principal problème de cette page d’accueil ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Visitors must pick Flash or HTML and a bandwidth before seeing any content at all.",
        fr: "Il faut choisir entre Flash et HTML et indiquer son débit avant de voir le moindre contenu."
      }
    },
    {
      id: "b",
      text: {
        en: "The logo sits in the middle, where the top left corner would follow the convention.",
        fr: "Le logo est au centre, alors que le coin supérieur gauche respecterait la convention."
      }
    },
    {
      id: "c",
      text: {
        en: "The page uses a dark background, where a light one would suit a bakery much better.",
        fr: "La page utilise un fond sombre, alors qu’un fond clair irait bien mieux à une boulangerie."
      }
    },
    {
      id: "d",
      text: {
        en: "The two choices are images, where text links would download faster on slow modems.",
        fr: "Les deux choix sont des images, alors que des liens texte chargeraient plus vite sur un modem lent."
      }
    }
  ],
  explanation: {
    en: [
      "A splash page asks people to choose between Flash and HTML and declare their connection speed, questions most visitors can’t answer, before showing a single opening hour.",
      "Detect capabilities yourself and serve one site that works for everyone (progressive enhancement). Put the content, here the hours and address, on the first page people land on.",
      "Logo placement, a dark background and image buttons are stylistic choices; the splash gate is what blocks the visit."
    ],
    fr: [
      "Une page d’accueil intermédiaire demande de choisir entre Flash et HTML et d’indiquer son débit, des questions auxquelles la plupart des visiteurs ne savent pas répondre, avant d’afficher le moindre horaire.",
      "Détectez vous-même les capacités du navigateur et proposez un seul site qui fonctionne pour tout le monde (amélioration progressive). Placez le contenu, ici les horaires et l’adresse, sur la toute première page.",
      "L’emplacement du logo, le fond sombre et les boutons en image sont des choix de style ; c’est la page d’entrée qui bloque la visite."
    ]
  }
};
