import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "px-font-size",
  kind: "compare",
  title: { en: "Text that ignores the reader’s setting", fr: "Un texte qui ignore le réglage du lecteur" },
  principle: {
    en: "Size text in relative units so it follows the browser’s font setting",
    fr: "Dimensionner le texte en unités relatives pour qu’il suive le réglage de police du navigateur"
  },
  scenario: {
    en: "A reader with low vision has raised their browser’s default font size to 24px and opens a recipe page. Each version shows the stylesheet and the page as this reader sees it.",
    fr: "Une personne malvoyante a réglé la taille de police par défaut de son navigateur sur 24px et ouvre une page de recette. Chaque version montre la feuille de style et la page telle que cette personne la voit."
  },
  prompt: {
    en: "Which stylesheet works better for this reader?",
    fr: "Quelle feuille de style fonctionne le mieux pour cette personne ?"
  },
  correct: ["a"],
  explanation: {
    en: [
      "Sizes in px are fixed: the recipe text stays at 16px even though the reader asked the browser for 24px, so they have to zoom every page or strain to read (WCAG 1.4.4 Resize Text).",
      "rem is relative to the root font size, which follows the browser setting: 1rem becomes 24px for this reader and stays 16px for everyone on the default.",
      "Page zoom would scale px text too, but many people set a larger default font size once rather than zooming each site. Both stylesheets use the same sizes and line height; only the units differ."
    ],
    fr: [
      "Les tailles en px sont fixes : le texte de la recette reste à 16px alors que la personne a demandé 24px au navigateur. Elle doit zoomer sur chaque page ou plisser les yeux pour lire (WCAG 1.4.4 Redimensionnement du texte).",
      "rem est relatif à la taille de police de la racine, qui suit le réglage du navigateur : 1rem vaut 24px pour cette personne et reste à 16px pour toutes celles qui gardent le réglage par défaut.",
      "Le zoom de la page agrandirait aussi le texte en px, mais beaucoup de gens règlent une fois pour toutes une police par défaut plus grande plutôt que de zoomer sur chaque site. Les deux feuilles de style utilisent les mêmes tailles et le même interlignage ; seules les unités diffèrent."
    ]
  },
  links: [wcag("1.4.4", { en: "Resize Text", fr: "Redimensionnement du texte" }, "resize-text")]
};
