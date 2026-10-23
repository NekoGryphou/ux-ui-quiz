import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "car-dashboard-targets",
  kind: "hotspot",
  title: { en: "Tap precisely, at 110 km/h", fr: "Visez juste, à 110 km/h" },
  principle: {
    en: "Design in-car screens for glances and big targets",
    fr: "Concevoir les écrans de voiture pour le coup d’œil et les grandes cibles"
  },
  scenario: {
    en: "A driver on the motorway wants to turn down the music and warm up the cabin a little.",
    fr: "Une personne au volant sur l’autoroute veut baisser la musique et réchauffer un peu l’habitacle."
  },
  prompt: {
    en: "Click every control that is unsafe to use while driving.",
    fr: "Cliquez sur chaque commande dangereuse à utiliser en conduisant."
  },
  correct: ["media", "climate"],
  regions: [
    { id: "map", text: { en: "Navigation map", fr: "Carte de navigation" } },
    { id: "media", text: { en: "Media controls", fr: "Commandes multimédia" } },
    { id: "climate", text: { en: "Climate controls", fr: "Commandes de climatisation" } },
    { id: "clock", text: { en: "Clock and outside temperature", fr: "Heure et température extérieure" } },
    { id: "drive", text: { en: "Speed display", fr: "Affichage de la vitesse" } }
  ],
  explanation: {
    en: [
      "Volume and temperature are frequent, safety-relevant adjustments, yet they are tiny touch targets packed close together, with no physical feedback: the driver has to look away from the road for several seconds to hit the right one.",
      "In cars, keep frequent controls large, spaced and in fixed places (or physical knobs), favour glanceable status over dense UI, and limit interactions while moving.",
      "The map, clock and speed display are glanceable information, not controls that need precise touches."
    ],
    fr: [
      "Le volume et la température sont des réglages fréquents qui touchent à la sécurité, pourtant ce sont de minuscules cibles tactiles serrées les unes contre les autres, sans retour physique : il faut quitter la route des yeux plusieurs secondes pour toucher la bonne.",
      "En voiture, gardez les commandes fréquentes grandes, espacées et à des emplacements fixes (ou en boutons physiques), privilégiez des informations lisibles d’un coup d’œil plutôt qu’une interface dense, et limitez les interactions en roulant.",
      "La carte, l’heure et la vitesse sont des informations lisibles d’un coup d’œil, pas des commandes qui exigent un toucher précis."
    ]
  }
};
