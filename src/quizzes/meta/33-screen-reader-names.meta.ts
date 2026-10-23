import type { QuizSource } from "../types/quiz-source.types";
import { wcag } from "../utils/wcag.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "screen-reader-names",
  kind: "multiple",
  title: { en: "What the screen reader hears", fr: "Ce qu’entend le lecteur d’écran" },
  principle: {
    en: "Give every control a name that makes sense on its own",
    fr: "Donner à chaque contrôle un nom qui a du sens à lui seul"
  },
  scenario: {
    en: "A blind user tabs through their inbox. The panel on the right shows what their screen reader announces at each stop.",
    fr: "Une personne aveugle parcourt sa boîte de réception avec la touche Tab. Le panneau de droite montre ce que son lecteur d’écran annonce à chaque arrêt."
  },
  prompt: {
    en: "Which issues does this transcript reveal?",
    fr: "Quels problèmes cette transcription révèle-t-elle ?"
  },
  correct: ["a", "b"],
  choices: [
    {
      id: "a",
      text: {
        en: "The toolbar icons are announced only as “button”, with no name saying what they do.",
        fr: "Les icônes de la barre d’outils sont annoncées seulement comme « bouton », sans nom qui dise ce qu’elles font."
      }
    },
    {
      id: "b",
      text: {
        en: "Two links are announced as “click here”, which says nothing about where they lead.",
        fr: "Deux liens sont annoncés comme « cliquez ici », ce qui ne dit rien de leur destination."
      }
    },
    {
      id: "c",
      text: {
        en: "The heading is announced with its level, which adds noise before the actual content.",
        fr: "Le titre est annoncé avec son niveau, ce qui ajoute du bruit avant le contenu réel."
      }
    },
    {
      id: "d",
      text: {
        en: "Archive is announced as a button, where a link would better describe what it does.",
        fr: "Archiver est annoncé comme un bouton, alors qu’un lien décrirait mieux ce qu’il fait."
      }
    }
  ],
  explanation: {
    en: [
      'Icon-only buttons need an accessible name (aria-label="Search" or visually hidden text); otherwise users hear “button, button” and must guess (WCAG 4.1.2 Name, Role, Value).',
      "Screen reader users often list all links out of context. “Click here” twice is useless there: use the destination as link text, like “Read the weekly report” (WCAG 2.4.4 Link Purpose).",
      "Announcing heading levels is how screen readers help people navigate, and Archive performs an action on the page, so a button is the right element."
    ],
    fr: [
      'Un bouton composé d’une seule icône a besoin d’un nom accessible (aria-label="Rechercher" ou un texte visuellement masqué) ; sinon, on entend « bouton, bouton » et il faut deviner (WCAG 4.1.2 Nom, rôle et valeur).',
      "Les personnes utilisant un lecteur d’écran affichent souvent la liste de tous les liens, hors contexte. Deux « cliquez ici » n’y servent à rien : utilisez la destination comme texte du lien, par exemple « Lire le rapport hebdomadaire » (WCAG 2.4.4 Fonction du lien).",
      "Annoncer le niveau des titres est ce qui permet de naviguer avec un lecteur d’écran, et Archiver déclenche une action sur la page : un bouton est donc le bon élément."
    ]
  },
  links: [
    wcag("4.1.2", { en: "Name, Role, Value", fr: "Nom, rôle et valeur" }, "name-role-value"),
    wcag(
      "2.4.4",
      { en: "Link Purpose (In Context)", fr: "Fonction du lien (selon le contexte)" },
      "link-purpose-in-context"
    )
  ]
};
