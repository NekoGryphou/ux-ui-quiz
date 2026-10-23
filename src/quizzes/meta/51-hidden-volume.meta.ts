import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "hidden-volume",
  kind: "single",
  motion: true,
  title: { en: "Volume, disguised as an air vent", fr: "Un volume déguisé en grille d’aération" },
  principle: {
    en: "Give interactive elements visible signifiers",
    fr: "Donner aux éléments interactifs des signes visibles"
  },
  scenario: {
    en: "A listener wants to turn the music down quickly before taking a phone call.",
    fr: "Une personne veut baisser rapidement la musique avant de répondre au téléphone."
  },
  prompt: { en: "What is the main issue with this player?", fr: "Quel est le principal problème de ce lecteur ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The volume slider looks like a row of air vents, so nothing says it can be dragged.",
        fr: "Le curseur de volume ressemble à une grille d’aération, donc rien n’indique qu’on peut le faire glisser."
      }
    },
    {
      id: "b",
      text: {
        en: "The track title scrolls across the display, where a static title would read at once.",
        fr: "Le titre du morceau défile sur l’écran, alors qu’un titre fixe se lirait d’un seul coup d’œil."
      }
    },
    {
      id: "c",
      text: {
        en: "Play and pause are separate buttons, where one toggle would save room on the skin.",
        fr: "Lecture et pause sont deux boutons distincts, alors qu’un seul bouton gagnerait de la place sur le skin."
      }
    },
    {
      id: "d",
      text: {
        en: "The timer counts up from zero, where a countdown to the end would be more useful.",
        fr: "Le compteur part de zéro, alors qu’un compte à rebours jusqu’à la fin serait plus utile."
      }
    }
  ],
  explanation: {
    en: [
      "The volume control is drawn as ribbed grooves with no handle, no track and no speaker icon: it reads as decoration, so the listener hunts for volume while the phone rings.",
      "Controls need signifiers: a visible thumb on a track, an icon or a value. A hover cursor helps, but it can’t be the only cue, and it doesn’t exist on touch screens.",
      "The scrolling title, separate play and pause buttons and count-up timer were conventions that players of the time used consistently."
    ],
    fr: [
      "Le réglage du volume est dessiné comme des rainures, sans poignée, sans piste et sans icône de haut-parleur : on le prend pour de la décoration, et la personne cherche le volume pendant que le téléphone sonne.",
      "Une commande a besoin de signes visibles : une poignée sur une piste, une icône ou une valeur. Un curseur au survol aide, mais ne peut pas être le seul indice, et il n’existe pas sur écran tactile.",
      "Le titre défilant, les boutons lecture et pause séparés et le compteur croissant étaient des conventions que les lecteurs de l’époque appliquaient de façon cohérente."
    ]
  }
};
