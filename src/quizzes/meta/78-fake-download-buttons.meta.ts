import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "fake-download-buttons",
  kind: "hotspot",
  motion: true,
  title: { en: "Which download is the download?", fr: "Quel est le vrai téléchargement ?" },
  principle: {
    en: "Never let ads imitate your own controls",
    fr: "Ne jamais laisser la publicité imiter vos propres contrôles"
  },
  scenario: {
    en: "A student wants to download a free image editor from a popular shareware site.",
    fr: "Une personne en études veut télécharger un éditeur d’images gratuit sur un site de logiciels populaire."
  },
  prompt: {
    en: "Click every element that could trick the student.",
    fr: "Cliquez sur chaque élément qui pourrait la tromper."
  },
  correct: ["ad-top", "ad-side", "ad-scan"],
  regions: [
    { id: "logo", text: { en: "Site logo", fr: "Logo du site" } },
    { id: "ad-top", text: { en: "Top banner", fr: "Bannière du haut" } },
    { id: "ad-side", text: { en: "Side box", fr: "Encadré latéral" } },
    { id: "ad-scan", text: { en: "Warning box", fr: "Encadré d’alerte" } },
    { id: "details", text: { en: "Program details", fr: "Fiche du logiciel" } },
    { id: "real", text: { en: "Download link", fr: "Lien de téléchargement" } },
    { id: "nav", text: { en: "Category menu", fr: "Menu des catégories" } }
  ],
  explanation: {
    en: [
      "Three ads dress up as the thing the student came for: a giant green DOWNLOAD NOW banner, a “Start download” button in the sidebar and a fake system warning. The real link is a small blue text link under the details, the least prominent download on the page.",
      "Ads must never mimic your controls, wording or system dialogs. Make the real primary action the most visible element on the page, and label ads clearly as ads.",
      "The logo, menu and program details are ordinary page furniture, and the real link at least says exactly what it downloads."
    ],
    fr: [
      "Trois publicités se font passer pour ce que la personne est venue chercher : une énorme bannière verte TÉLÉCHARGER, un bouton « Lancer le téléchargement » dans la colonne de droite et une fausse alerte système. Le vrai lien est un petit lien texte bleu sous la fiche, le téléchargement le moins visible de la page.",
      "Une publicité ne doit jamais imiter vos contrôles, vos libellés ou les boîtes de dialogue du système. Faites de la véritable action principale l’élément le plus visible de la page et signalez clairement les publicités comme telles.",
      "Le logo, le menu et la fiche du logiciel sont des éléments de page ordinaires, et le vrai lien indique au moins précisément ce qu’il télécharge."
    ]
  }
};
