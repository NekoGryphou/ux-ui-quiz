import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "action-hierarchy",
  kind: "single",
  title: { en: "Reversed action hierarchy", fr: "Une hiérarchie des actions inversée" },
  principle: {
    en: "Align visual emphasis with task priority",
    fr: "Aligner la mise en avant visuelle sur la priorité de la tâche"
  },
  scenario: {
    en: "An editor has finished writing an article and reviewed it. Their goal now is to make it live on the blog.",
    fr: "Une personne de la rédaction a terminé et relu son article. Son objectif est maintenant de le mettre en ligne sur le blog."
  },
  prompt: { en: "What is the main issue in this editor?", fr: "Quel est le principal problème de cet éditeur ?" },
  correct: ["b"],
  choices: [
    {
      id: "a",
      text: {
        en: "The “Saved 2 min ago” status sits far from the article, so autosave is easy to miss.",
        fr: "Le statut « Enregistré il y a 2 min » est loin de l’article, si bien que l’enregistrement auto passe inaperçu."
      }
    },
    {
      id: "b",
      text: {
        en: "Publish is styled as a plain text link, weaker than Save draft, the secondary action.",
        fr: "Publier a le style d’un simple lien texte, plus discret qu’Enregistrer le brouillon, l’action secondaire."
      }
    },
    {
      id: "c",
      text: {
        en: "Preview is a ghost button, although editors are expected to check before publishing.",
        fr: "Aperçu est un bouton fantôme, alors qu’on attend de la rédaction qu’elle vérifie avant de publier."
      }
    },
    {
      id: "d",
      text: {
        en: "The Draft badge stays visible after saving, which suggests the work isn’t stored yet.",
        fr: "Le badge Brouillon reste visible après l’enregistrement, ce qui laisse croire que rien n’est encore sauvegardé."
      }
    }
  ],
  explanation: {
    en: [
      "Visual hierarchy should point to the main task. Here the filled button is the secondary action, while Publish is a plain text link.",
      "When emphasis is reversed, users hesitate, or click the prominent button and believe the article is live.",
      "One clear primary action per view works best; the others can stay visible as secondary or ghost buttons."
    ],
    fr: [
      "La hiérarchie visuelle doit désigner la tâche principale. Ici, le bouton plein correspond à l’action secondaire, tandis que Publier est un simple lien texte.",
      "Quand la mise en avant est inversée, on hésite, ou on clique sur le bouton le plus visible en croyant l’article en ligne.",
      "Une seule action principale claire par écran fonctionne le mieux ; les autres peuvent rester visibles sous forme de boutons secondaires ou fantômes."
    ]
  }
};
