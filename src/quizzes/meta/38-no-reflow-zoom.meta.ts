import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "no-reflow-zoom",
  kind: "hotspot",
  title: { en: "Zoomed in, cut off", fr: "Zoom avant, texte coupé" },
  principle: { en: "Let content reflow at high zoom", fr: "Laisser le contenu se redistribuer en zoom fort" },
  scenario: {
    en: "A user with low vision browses a garden shop at 400% zoom: the page now behaves like a 320px-wide window.",
    fr: "Une personne malvoyante consulte une jardinerie en ligne avec un zoom à 400 % : la page se comporte comme une fenêtre de 320 px de large."
  },
  prompt: {
    en: "Click the part of the page that fails this user.",
    fr: "Cliquez sur la partie de la page qui pose problème à cette personne."
  },
  correct: ["promo"],
  regions: [
    { id: "header", text: { en: "Header", fr: "En-tête" } },
    { id: "promo", text: { en: "Promotion banner", fr: "Bannière promotionnelle" } },
    { id: "headline", text: { en: "Headline", fr: "Titre" } },
    { id: "body", text: { en: "Body text", fr: "Texte principal" } },
    { id: "table", text: { en: "Delivery prices table", fr: "Tableau des frais de livraison" } },
    { id: "footer", text: { en: "Footer links", fr: "Liens du pied de page" } }
  ],
  explanation: {
    en: [
      "The promotion banner has a fixed width, stays on one line and hides its overflow: at 400% zoom its text is simply cut off, so the offer and its conditions are lost (WCAG 1.4.10 Reflow).",
      "Use flexible widths and let text wrap. Content should fit in 320 CSS pixels without loss and without scrolling sideways.",
      "The delivery table scrolling sideways is acceptable: data tables are one of the allowed exceptions, because their meaning depends on the two-dimensional layout."
    ],
    fr: [
      "La bannière promotionnelle a une largeur fixe, tient sur une seule ligne et masque ce qui dépasse : à 400 % de zoom, son texte est tout simplement coupé, et l’offre comme ses conditions sont perdues (WCAG 1.4.10 Redistribution).",
      "Utilisez des largeurs flexibles et laissez le texte passer à la ligne. Le contenu doit tenir dans 320 pixels CSS, sans perte et sans défilement horizontal.",
      "Le défilement horizontal du tableau de livraison est acceptable : les tableaux de données font partie des exceptions admises, car leur sens dépend de la disposition en deux dimensions."
    ]
  },
  links: [wcag("1.4.10", { en: "Reflow", fr: "Redistribution" }, "reflow")]
};
