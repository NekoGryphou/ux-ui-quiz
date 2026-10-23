import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "brand-color-contrast",
  kind: "compare",
  title: { en: "On brand, off contrast", fr: "Fidèle à la marque, pas au contraste" },
  principle: {
    en: "Check brand colors against the text they carry",
    fr: "Vérifier les couleurs de marque avec le texte qu’elles portent"
  },
  scenario: {
    en: "A lemonade brand adds a newsletter sign-up to its homepage, using its signature yellow.",
    fr: "Une marque de limonade ajoute une inscription à sa newsletter sur sa page d’accueil, dans son jaune emblématique."
  },
  prompt: { en: "Which version works better?", fr: "Quelle version fonctionne le mieux ?" },
  correct: ["b"],
  explanation: {
    en: [
      "White on this sunny yellow reaches about 1.6:1: the button label nearly vanishes in daylight, on cheap screens and for anyone with low vision. A brand color isn’t automatically a good background for text.",
      "Keep the brand color and pick the text color for contrast: deep brown on yellow passes 9:1. Check every brand color against the text it carries (WCAG 1.4.3 asks for 4.5:1 for normal text).",
      "Both versions use the same layout, font and yellow; only the label color differs."
    ],
    fr: [
      "Le blanc sur ce jaune soleil atteint à peine 1,6:1 : le libellé du bouton disparaît presque en plein jour, sur un écran bas de gamme et pour toute personne malvoyante. Une couleur de marque n’est pas forcément un bon fond pour du texte.",
      "Gardez la couleur de marque et choisissez la couleur du texte pour le contraste : un brun foncé sur ce jaune dépasse 9:1. Vérifiez chaque couleur de marque avec le texte qu’elle porte (le critère WCAG 1.4.3 exige 4,5:1 pour un texte normal).",
      "Les deux versions ont la même mise en page, la même police et le même jaune ; seule la couleur du libellé change."
    ]
  },
  links: [wcag("1.4.3", { en: "Contrast (Minimum)", fr: "Contraste (minimum)" }, "contrast-minimum")]
};
