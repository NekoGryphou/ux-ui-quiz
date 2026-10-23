import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "label-spacing",
  kind: "compare",
  title: { en: "Which label goes with which field?", fr: "Quel libellé pour quel champ ?" },
  principle: {
    en: "Use proximity to show what belongs together",
    fr: "Utiliser la proximité pour montrer ce qui va ensemble"
  },
  scenario: {
    en: "A shopper fills in a delivery address on a small checkout form.",
    fr: "Une personne saisit son adresse de livraison dans un petit formulaire de commande."
  },
  prompt: {
    en: "Which version of the form works better?",
    fr: "Quelle version du formulaire fonctionne le mieux ?"
  },
  correct: ["b"],
  explanation: {
    en: [
      "When a label sits exactly halfway between two fields, the eye can’t tell whether it describes the field above or below.",
      "Keep each label close to its own field and put more space between field groups than inside them (the law of proximity). Grouping related fields, like postcode with city, makes the structure readable at a glance.",
      "Both versions use the same fields and styles; only the spacing changes."
    ],
    fr: [
      "Quand un libellé se trouve exactement à mi-chemin entre deux champs, l’œil ne sait pas s’il décrit le champ du dessus ou celui du dessous.",
      "Placez chaque libellé près de son champ et laissez plus d’espace entre les groupes de champs qu’à l’intérieur d’un groupe (loi de proximité). Regrouper les champs liés, comme le code postal et la ville, rend la structure lisible d’un coup d’œil.",
      "Les deux versions utilisent les mêmes champs et les mêmes styles ; seul l’espacement change."
    ]
  }
};
