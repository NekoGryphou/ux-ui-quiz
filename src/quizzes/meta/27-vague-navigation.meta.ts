import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "vague-navigation",
  kind: "multiple",
  title: { en: "Where would pricing be?", fr: "Où trouver les tarifs ?" },
  principle: {
    en: "Name sections by what people look for",
    fr: "Nommer les rubriques selon ce que l’on y cherche"
  },
  scenario: {
    en: "A team lead comparing project tools wants to know what the Team plan costs.",
    fr: "Une personne qui encadre une équipe compare des outils de gestion de projet et veut connaître le prix de l’offre Team."
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
        en: "Platform, Solutions and Products overlap, so it’s unclear where any feature lives.",
        fr: "Plateforme, Solutions et Produits se recoupent : on ne sait pas où se trouve chaque fonctionnalité."
      }
    },
    {
      id: "b",
      text: {
        en: "Pricing sits under Company, a section people associate with careers and press.",
        fr: "Tarifs est rangé sous Entreprise, une rubrique associée aux recrutements et à la presse."
      }
    },
    {
      id: "c",
      text: {
        en: "The navigation uses text labels without icons, which makes it slower to scan.",
        fr: "La navigation utilise des libellés texte sans icônes, ce qui la rend plus lente à parcourir."
      }
    },
    {
      id: "d",
      text: {
        en: "The Company menu lists four links, where a single About page would be simpler.",
        fr: "Le menu Entreprise contient quatre liens, alors qu’une seule page À propos serait plus simple."
      }
    }
  ],
  explanation: {
    en: [
      "Platform, Solutions and Products are three vague, overlapping words: visitors can’t predict which one contains what they need.",
      "Pricing is one of the most-visited pages on a product site; hidden under Company it’s nearly impossible to find. Give it a top-level link.",
      "Text labels are the clearest option for top navigation, and a short Company menu is fine."
    ],
    fr: [
      "Plateforme, Solutions et Produits sont trois mots vagues qui se recoupent : impossible de deviner lequel contient ce que l’on cherche.",
      "Les tarifs font partie des pages les plus consultées d’un site produit ; cachés sous Entreprise, ils sont presque introuvables. Donnez-leur un lien au premier niveau.",
      "Les libellés texte sont l’option la plus claire pour une navigation principale, et un menu Entreprise court ne pose pas de problème."
    ]
  }
};
