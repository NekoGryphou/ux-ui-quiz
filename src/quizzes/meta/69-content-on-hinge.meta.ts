import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "content-on-hinge",
  kind: "hotspot",
  title: { en: "Hang up on the hinge", fr: "Raccrocher sur la charnière" },
  principle: {
    en: "Keep key content and controls off the fold",
    fr: "Garder le contenu et les commandes clés hors du pli"
  },
  scenario: {
    en: "A designer joins a video call on their unfolded phone and needs to mute their microphone quickly.",
    fr: "Une designer rejoint un appel vidéo sur son téléphone déplié et doit couper son micro rapidement."
  },
  prompt: {
    en: "Click the part of the screen placed in the wrong spot for this device.",
    fr: "Cliquez sur la partie de l’écran mal placée pour cet appareil."
  },
  correct: ["controls"],
  regions: [
    { id: "bar", text: { en: "Call info bar", fr: "Barre d’infos de l’appel" } },
    { id: "remote", text: { en: "Remote video", fr: "Vidéo de l’interlocutrice" } },
    { id: "self", text: { en: "Self view", fr: "Votre vidéo" } },
    { id: "controls", text: { en: "Call buttons", fr: "Boutons d’appel" } },
    { id: "chat", text: { en: "Chat panel", fr: "Panneau de discussion" } }
  ],
  explanation: {
    en: [
      "The call buttons are centred on the screen, which on an unfolded phone means right on the crease: mute and hang up sit in a dip that distorts touch and reflections, and on dual-screen devices they would fall into the physical gap between the two panels.",
      "Treat the fold as a boundary: detect it (CSS viewport segments, the window segments API or platform fold events) and lay out content on either side, for example video on one panel and controls with chat on the other.",
      "The video, self view and chat each sit inside one half of the screen, which works well on a foldable."
    ],
    fr: [
      "Les boutons d’appel sont centrés à l’écran, ce qui, sur un téléphone déplié, les place pile sur le pli : couper le micro et raccrocher se trouvent dans un creux qui fausse le toucher et les reflets, et sur un appareil à double écran ils tomberaient dans l’espace physique entre les deux panneaux.",
      "Traitez le pli comme une frontière : détectez-le (segments de viewport CSS, API des segments de fenêtre ou événements de pliage de la plateforme) et répartissez le contenu de part et d’autre, par exemple la vidéo sur un panneau et les commandes avec la discussion sur l’autre.",
      "La vidéo, votre propre vidéo et la discussion tiennent chacune dans une moitié de l’écran, ce qui fonctionne bien sur un pliable."
    ]
  }
};
