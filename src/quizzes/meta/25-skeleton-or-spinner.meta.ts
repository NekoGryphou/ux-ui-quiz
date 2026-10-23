import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "skeleton-or-spinner",
  kind: "compare",
  title: { en: "Waiting for the feed", fr: "En attendant le fil d’actualité" },
  principle: {
    en: "Preview the layout while content loads",
    fr: "Annoncer la mise en page pendant le chargement"
  },
  scenario: {
    en: "A commuter opens a news app on a slow train connection. The feed takes about two seconds to load.",
    fr: "Dans le train, avec une connexion lente, une personne ouvre une app d’actualités. Le fil met environ deux secondes à charger."
  },
  prompt: {
    en: "Which loading state works better here?",
    fr: "Quel état de chargement fonctionne le mieux ici ?"
  },
  correct: ["a"],
  explanation: {
    en: [
      "For content with a known layout, a skeleton shows where things will appear: the wait feels shorter and nothing jumps when the content arrives.",
      "A centered spinner on an empty screen gives no sense of what is coming or how long it takes, and the whole layout shifts once the feed loads.",
      "Spinners still suit short, unpredictable actions such as submitting a form."
    ],
    fr: [
      "Pour un contenu dont la mise en page est connue, un squelette montre où les éléments vont apparaître : l’attente paraît plus courte et rien ne saute à l’arrivée du contenu.",
      "Un indicateur de chargement centré sur un écran vide ne dit ni ce qui arrive ni combien de temps cela prendra, et toute la mise en page bouge quand le fil se charge.",
      "Les indicateurs de chargement restent adaptés aux actions courtes et imprévisibles, comme l’envoi d’un formulaire."
    ]
  }
};
