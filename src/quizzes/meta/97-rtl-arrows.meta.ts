import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "rtl-arrows",
  kind: "single",
  title: { en: "Next is that way… or that way?", fr: "Suivant, c’est par là… ou par là ?" },
  principle: {
    en: "Mirror directional icons in right-to-left layouts",
    fr: "Inverser les icônes directionnelles dans les interfaces de droite à gauche"
  },
  scenario: {
    en: "A traveller in Cairo uses the Arabic version of a hotel booking app to move to the next step.",
    fr: "Au Caire, une personne utilise la version arabe d’une appli de réservation d’hôtel pour passer à l’étape suivante."
  },
  prompt: { en: "What is the main issue with this screen?", fr: "Quel est le principal problème de cet écran ?" },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Text runs right to left, but the arrows still point as in English, so next looks like back.",
        fr: "Le texte va de droite à gauche, mais les flèches pointent comme en français : « suivant » ressemble à « retour »."
      }
    },
    {
      id: "b",
      text: {
        en: "The step counter uses Arabic-Indic digits, where Latin digits would be read more widely.",
        fr: "Le compteur d’étapes utilise des chiffres indo-arabes, alors que des chiffres latins seraient plus largement lus."
      }
    },
    {
      id: "c",
      text: {
        en: "The text is right-aligned, where centered text would make the layout feel more balanced.",
        fr: "Le texte est aligné à droite, alors qu’un texte centré donnerait une mise en page plus équilibrée."
      }
    },
    {
      id: "d",
      text: {
        en: "The primary button spans the full width, where a smaller one would leave room for back.",
        fr: "Le bouton principal occupe toute la largeur, alors qu’un bouton plus petit laisserait de la place à « retour »."
      }
    }
  ],
  explanation: {
    en: [
      "The layout is mirrored for Arabic, so “next” now sits on the left, but its arrow still points right, towards “back”. The progress bar also fills from the wrong side, so the traveller can’t tell which way the flow goes.",
      'In RTL, mirror everything directional: arrows, chevrons, progress, sliders and swipe directions (CSS logical properties and dir="rtl" help). Don’t mirror icons that aren’t directional, such as a clock, a checkmark or a play button.',
      "Arabic-Indic digits, right-aligned text and a full-width primary button are all appropriate in an Arabic interface."
    ],
    fr: [
      "La mise en page est inversée pour l’arabe, donc « suivant » se trouve désormais à gauche, mais sa flèche pointe toujours vers la droite, vers « retour ». La barre de progression se remplit aussi du mauvais côté : impossible de savoir dans quel sens avance le parcours.",
      'En RTL, inversez tout ce qui est directionnel : flèches, chevrons, barres de progression, curseurs et sens de balayage (les propriétés logiques CSS et dir="rtl" y aident). N’inversez pas les icônes qui ne sont pas directionnelles, comme une horloge, une coche ou un bouton de lecture.',
      "Les chiffres indo-arabes, le texte aligné à droite et un bouton principal pleine largeur conviennent tous à une interface en arabe."
    ]
  }
};
