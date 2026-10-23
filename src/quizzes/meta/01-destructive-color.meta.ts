import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "destructive-color",
  kind: "single",
  title: { en: "Destructive action dressed as success", fr: "Une action destructrice déguisée en succès" },
  principle: {
    en: "Match visual semantics to consequence",
    fr: "Accorder le sens visuel à la conséquence"
  },
  scenario: {
    en: "A project owner wants to permanently remove an old project. They open its settings and click “Delete project”.",
    fr: "La personne responsable d’un ancien projet veut le supprimer définitivement. Elle ouvre ses paramètres et clique sur « Supprimer le projet »."
  },
  prompt: {
    en: "What is the main issue with this dialog?",
    fr: "Quel est le principal problème de cette boîte de dialogue ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "The delete button is green, a color users read as safe, so the risk is understated.",
        fr: "Le bouton de suppression est vert, une couleur perçue comme sûre, ce qui minimise le risque."
      }
    },
    {
      id: "b",
      text: {
        en: "The dialog doesn’t ask users to type the project name, so deleting is too easy.",
        fr: "La boîte de dialogue ne demande pas de saisir le nom du projet, ce qui rend la suppression trop facile."
      }
    },
    {
      id: "c",
      text: {
        en: "Cancel and Delete sit side by side, so a slip of the pointer can hit the wrong one.",
        fr: "Annuler et Supprimer sont côte à côte, si bien qu’un écart de souris peut viser le mauvais bouton."
      }
    },
    {
      id: "d",
      text: {
        en: "The title is phrased as a question, so it’s unclear whether deletion already happened.",
        fr: "Le titre est formulé comme une question, si bien qu’on ne sait pas si la suppression a déjà eu lieu."
      }
    }
  ],
  explanation: {
    en: [
      "Green is learned as “success, go ahead”. On an irreversible delete it sends the opposite signal to the one users need.",
      "Destructive actions should look risky: a red or danger style, explicit wording, and Cancel as the safe default.",
      "Typing the project name is a useful extra safeguard for very high-stakes deletes, but here the color is what misleads."
    ],
    fr: [
      "Le vert est associé à « réussite, allez-y ». Sur une suppression irréversible, il envoie le signal inverse de celui dont l’utilisateur a besoin.",
      "Une action destructrice doit avoir l’air risquée : un style rouge ou « danger », un libellé explicite et Annuler comme choix sûr par défaut.",
      "Saisir le nom du projet est une protection utile pour les suppressions à très fort enjeu, mais ici, c’est la couleur qui induit en erreur."
    ]
  }
};
