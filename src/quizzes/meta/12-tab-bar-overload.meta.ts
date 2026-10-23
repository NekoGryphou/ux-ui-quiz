import { PHOTO_PASTA, PHOTO_SALMON, PHOTO_SHAKSHUKA } from "../const/photo.const";
import type { QuizSource } from "../types/quiz-source.types";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "tab-bar-overload",
  kind: "multiple",
  title: { en: "A tab bar of mystery icons", fr: "Une barre d’onglets aux icônes mystères" },
  principle: {
    en: "Keep primary navigation short and labelled",
    fr: "Garder la navigation principale courte et légendée"
  },
  scenario: {
    en: "A new user of a recipe-sharing app wants to find the recipes they saved last week.",
    fr: "Nouvelle venue sur une appli de partage de recettes, une personne veut retrouver les recettes enregistrées la semaine dernière."
  },
  prompt: {
    en: "Which issues make this navigation hard to use?",
    fr: "Quels problèmes rendent cette navigation difficile à utiliser ?"
  },
  correct: ["a", "b"],
  choices: [
    {
      id: "a",
      text: {
        en: "Seven tabs are squeezed into the bar, so each target is narrow and hard to tell apart.",
        fr: "Sept onglets sont entassés dans la barre, si bien que chaque cible est étroite et difficile à distinguer."
      }
    },
    {
      id: "b",
      text: {
        en: "The tabs show icons without labels, so users must guess which one holds saved recipes.",
        fr: "Les onglets affichent des icônes sans libellé, si bien qu’il faut deviner où sont les recettes enregistrées."
      }
    },
    {
      id: "c",
      text: {
        en: "The tab bar sits at the bottom, far from the screen title that users read first.",
        fr: "La barre d’onglets est en bas, loin du titre de l’écran que l’on lit en premier."
      }
    },
    {
      id: "d",
      text: {
        en: "The active tab is shown in color, where a filled icon would match the platform style.",
        fr: "L’onglet actif est signalé par la couleur, alors qu’une icône pleine suivrait le style de la plateforme."
      }
    }
  ],
  explanation: {
    en: [
      "Bottom navigation works for 3 to 5 top-level destinations (Material Design). Beyond that, targets shrink and the bar becomes a puzzle.",
      "Icons alone are ambiguous: is “saved” the heart, the bookmark, or the profile? Short text labels make every destination recognisable.",
      "The bottom position is right on phones: it’s where thumbs reach. Color is a fine way to mark the active tab.",
      photoCredits([PHOTO_PASTA, PHOTO_SALMON, PHOTO_SHAKSHUKA], "en")
    ],
    fr: [
      "Une navigation en bas d’écran convient pour 3 à 5 destinations principales (Material Design). Au-delà, les cibles rétrécissent et la barre devient un casse-tête.",
      "Les icônes seules sont ambiguës : les recettes enregistrées sont-elles sous le cœur, le signet ou le profil ? De courts libellés rendent chaque destination reconnaissable.",
      "La position en bas est la bonne sur téléphone : c’est là que le pouce arrive. La couleur est un bon moyen de signaler l’onglet actif.",
      photoCredits([PHOTO_PASTA, PHOTO_SALMON, PHOTO_SHAKSHUKA], "fr")
    ]
  }
};
