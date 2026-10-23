import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "ambiguous-icons",
  kind: "single",
  title: { en: "Save, sync or upload?", fr: "Enregistrer, synchroniser ou envoyer ?" },
  principle: {
    en: "Label icons whose meaning isn’t universal",
    fr: "Ajouter un libellé aux icônes dont le sens n’est pas universel"
  },
  scenario: {
    en: "A new user finishes editing a document in a notes app and wants to make sure it is saved.",
    fr: "Une personne qui découvre une appli de notes termine de modifier un document et veut s’assurer qu’il est bien enregistré."
  },
  prompt: {
    en: "What is the main issue with this toolbar?",
    fr: "Quel est le principal problème de cette barre d’outils ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The icons have no labels, and three of them could each mean save, sync or upload.",
        fr: "Les icônes n’ont pas de libellé, et trois d’entre elles pourraient vouloir dire enregistrer, synchroniser ou envoyer."
      }
    },
    {
      id: "b",
      text: {
        en: "The toolbar sits at the top, where a floating bar near the text would feel closer.",
        fr: "La barre d’outils est placée en haut, alors qu’une barre flottante près du texte semblerait plus proche."
      }
    },
    {
      id: "c",
      text: {
        en: "The icons are monochrome, where a colour per action would make them recognisable.",
        fr: "Les icônes sont monochromes, alors qu’une couleur par action les rendrait plus faciles à reconnaître."
      }
    },
    {
      id: "d",
      text: {
        en: "The toolbar has six buttons, where four would leave more room for the title above.",
        fr: "La barre d’outils compte six boutons, alors que quatre laisseraient plus de place au titre à côté."
      }
    }
  ],
  explanation: {
    en: [
      "A cloud with an arrow, a pair of circular arrows and a tray with an arrow: each could reasonably mean “save”, “sync” or “upload”. Without labels, the new user can only guess, or hover each one and wait for a tooltip.",
      "Only a handful of icons are universally understood (search, close, home…). Pair the rest with a short text label, at least for primary actions, and keep tooltips as a bonus, not the only explanation.",
      "A top toolbar, monochrome icons and six actions are all common and fine on their own."
    ],
    fr: [
      "Un nuage avec une flèche, deux flèches circulaires et un bac avec une flèche : chacune pourrait raisonnablement signifier « enregistrer », « synchroniser » ou « envoyer ». Sans libellé, la personne ne peut que deviner, ou survoler chaque icône et attendre une infobulle.",
      "Seule une poignée d’icônes est comprise de tous (rechercher, fermer, accueil…). Associez les autres à un court libellé, au moins pour les actions principales, et gardez les infobulles comme un bonus, pas comme la seule explication.",
      "Une barre d’outils en haut, des icônes monochromes et six actions sont courantes et acceptables en soi."
    ]
  }
};
