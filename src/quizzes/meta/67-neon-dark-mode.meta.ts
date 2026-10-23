import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "neon-dark-mode",
  kind: "single",
  title: { en: "Dark mode, bright headache", fr: "Mode sombre, migraine éclatante" },
  principle: {
    en: "Soften colors in dark themes instead of using pure black and full saturation",
    fr: "Adoucir les couleurs des thèmes sombres plutôt qu’utiliser le noir pur et la saturation maximale"
  },
  scenario: {
    en: "An on-call engineer checks the monitoring dashboard several times a night, in a dark room.",
    fr: "Une personne d’astreinte consulte le tableau de bord de supervision plusieurs fois par nuit, dans une pièce sombre."
  },
  prompt: {
    en: "What is the main issue with this dashboard?",
    fr: "Quel est le principal problème de ce tableau de bord ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Saturated red, blue and green text on pure black vibrates, so the numbers tire the eyes.",
        fr: "Le texte rouge, bleu et vert saturé vibre sur le noir pur, si bien que les chiffres fatiguent les yeux."
      }
    },
    {
      id: "b",
      text: {
        en: "The dashboard uses a dark theme, where a light theme would suit a monitoring screen better.",
        fr: "Le tableau de bord utilise un thème sombre, alors qu’un thème clair conviendrait mieux à la supervision."
      }
    },
    {
      id: "c",
      text: {
        en: "Each card shows a small sparkline, where the numbers alone would keep the cards cleaner.",
        fr: "Chaque carte affiche une petite courbe, alors que les chiffres seuls rendraient les cartes plus épurées."
      }
    },
    {
      id: "d",
      text: {
        en: "The cards are separated by thin borders, where soft shadows would set them apart better.",
        fr: "Les cartes sont séparées par de fines bordures, alors que des ombres douces les distingueraient mieux."
      }
    }
  ],
  explanation: {
    en: [
      "Fully saturated red, blue and green on pure black seem to shimmer and float at different depths (chromostereopsis), and pure blue barely contrasts with black at all. Glanced at in a dark room at 3 a.m., the numbers smear and tire the eyes.",
      "In dark themes, use dark grey surfaces rather than #000, off-white text rather than pure white, and desaturated, lighter tints for colors, checking each one for contrast.",
      "A dark theme suits a night-time monitoring screen, sparklines add useful trend context, and thin borders are a fine way to separate cards on dark backgrounds."
    ],
    fr: [
      "Du rouge, du bleu et du vert pleinement saturés sur du noir pur semblent scintiller et flotter à des profondeurs différentes (chromostéréopsie), et le bleu pur contraste à peine avec le noir. D’un coup d’œil, dans une pièce sombre à 3 h du matin, les chiffres bavent et fatiguent les yeux.",
      "Dans un thème sombre, utilisez des surfaces gris foncé plutôt que #000, un texte blanc cassé plutôt que blanc pur, et des teintes plus claires et désaturées pour les couleurs, en vérifiant le contraste de chacune.",
      "Un thème sombre convient à un écran de supervision nocturne, les courbes apportent une tendance utile, et de fines bordures séparent très bien les cartes sur fond sombre."
    ]
  }
};
