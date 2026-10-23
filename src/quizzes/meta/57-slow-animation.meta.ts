import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "slow-animation",
  kind: "compare",
  motion: true,
  title: { en: "The menu that takes a bow", fr: "Le menu qui fait sa révérence" },
  principle: {
    en: "Keep interface animation short and purposeful",
    fr: "Garder les animations d’interface courtes et utiles"
  },
  scenario: {
    en: "A commuter opens this app’s menu many times a day to jump between sections. Watch the menu open.",
    fr: "Une personne qui fait la navette ouvre le menu de cette appli plusieurs fois par jour pour passer d’une section à l’autre. Regardez le menu s’ouvrir."
  },
  prompt: {
    en: "Which version’s animation works better?",
    fr: "Dans quelle version l’animation fonctionne-t-elle le mieux ?"
  },
  correct: ["b"],
  explanation: {
    en: [
      "A 1.4-second elastic drop with bounces is fun once, then it becomes a wait: every visit to the menu costs over a second, and the overshoot makes items jump around while you try to tap them.",
      "Keep interface transitions around 150–300 ms with a gentle ease-out, and use motion to explain what happened (the menu comes from the button), not to entertain. Respect the reduced-motion setting.",
      "Both versions open the same menu from the same place; only the duration and easing differ."
    ],
    fr: [
      "Une chute élastique de 1,4 seconde avec rebonds amuse une fois, puis devient une attente : chaque ouverture du menu coûte plus d’une seconde, et le dépassement fait bouger les éléments pendant qu’on essaie de toucher l’un d’eux.",
      "Gardez les transitions d’interface autour de 150 à 300 ms avec une décélération douce (ease-out), et servez-vous du mouvement pour expliquer ce qui se passe (le menu sort du bouton), pas pour divertir. Respectez le réglage de réduction des animations.",
      "Les deux versions ouvrent le même menu depuis le même endroit ; seules la durée et la courbe d’accélération changent."
    ]
  }
};
