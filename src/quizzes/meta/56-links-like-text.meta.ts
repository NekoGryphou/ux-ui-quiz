import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "links-like-text",
  kind: "compare",
  title: { en: "Hidden in plain text", fr: "Cachés dans le texte" },
  principle: { en: "Make links look like links", fr: "Donner aux liens l’apparence de liens" },
  scenario: {
    en: "A reader wants to open the guides this travel article mentions to plan their own trip.",
    fr: "Une personne veut ouvrir les guides cités dans cet article de voyage pour préparer son propre périple."
  },
  prompt: { en: "Which version works better?", fr: "Quelle version fonctionne le mieux ?" },
  correct: ["a"],
  explanation: {
    en: [
      "Links styled exactly like the surrounding text (same color, no underline) are invisible until you happen to hover them, and touch screens have no hover at all. The reader can’t tell which phrases lead somewhere.",
      "Give links a cue beyond color that works at a glance: an underline is the clearest. If links differ from text only by color, they need 3:1 contrast with the text plus another cue on focus and hover (WCAG 1.4.1 Use of Color).",
      "Both versions use the same typeface, colors and links; only the link styling differs."
    ],
    fr: [
      "Des liens stylés exactement comme le texte qui les entoure (même couleur, sans soulignement) restent invisibles tant qu’on ne les survole pas par hasard, et les écrans tactiles n’ont pas de survol du tout. Impossible de savoir quelles expressions mènent quelque part.",
      "Donnez aux liens un indice autre que la couleur, lisible d’un coup d’œil : le soulignement est le plus clair. Si les liens ne se distinguent du texte que par la couleur, il leur faut un contraste de 3:1 avec le texte et un autre indice au focus et au survol (WCAG 1.4.1 Utilisation de la couleur).",
      "Les deux versions utilisent la même police, les mêmes couleurs et les mêmes liens ; seul le style des liens change."
    ]
  },
  links: [wcag("1.4.1", { en: "Use of Color", fr: "Utilisation de la couleur" }, "use-of-color")]
};
