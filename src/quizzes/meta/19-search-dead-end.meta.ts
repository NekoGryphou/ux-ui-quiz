import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "search-dead-end",
  kind: "single",
  title: { en: "No results, no way out", fr: "Aucun résultat, aucune issue" },
  principle: {
    en: "Design empty results for recovery",
    fr: "Concevoir les résultats vides pour aider à rebondir"
  },
  scenario: {
    en: "A sales rep searches the CRM for a customer they spoke to on the phone last week.",
    fr: "Une personne de l’équipe commerciale cherche dans le CRM un compte client contacté par téléphone la semaine dernière."
  },
  prompt: {
    en: "What is the main issue on this search screen?",
    fr: "Quel est le principal problème de cet écran de recherche ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Filters from earlier stay active, with no way to remove them or widen the search.",
        fr: "Des filtres précédents restent actifs, sans moyen de les retirer ni d’élargir la recherche."
      }
    },
    {
      id: "b",
      text: {
        en: "The search field keeps the query “acme” after searching, instead of clearing it.",
        fr: "Le champ de recherche garde la requête « acme » après la recherche, au lieu de se vider."
      }
    },
    {
      id: "c",
      text: {
        en: "The empty result shows a plain “0 results” where an illustration would feel friendlier.",
        fr: "Le résultat vide affiche un simple « 0 résultat » là où une illustration serait plus engageante."
      }
    },
    {
      id: "d",
      text: {
        en: "The active filters appear as chips, where a dropdown would save horizontal space.",
        fr: "Les filtres actifs s’affichent en pastilles, alors qu’une liste déroulante économiserait de la place."
      }
    }
  ],
  explanation: {
    en: [
      "Zero results is normal. The problem is the dead end: three leftover filters narrow the search, and none of them can be removed from here.",
      "Make each chip removable, add “Clear all filters”, and suggest a way out: “No results in Trial · EU · Mia. Search all customers?”",
      "Keeping the query visible is correct (users can refine it), and chips are the clearest way to show active filters. An illustration wouldn’t help anyone recover."
    ],
    fr: [
      "Ne rien trouver est normal. Le problème, c’est l’impasse : trois filtres oubliés restreignent la recherche, et aucun ne peut être retiré depuis cet écran.",
      "Rendez chaque pastille supprimable, ajoutez « Effacer tous les filtres » et proposez une issue : « Aucun résultat dans Essai · UE · Mia. Rechercher dans tous les clients ? »",
      "Garder la requête visible est correct (on peut l’affiner), et les pastilles sont le moyen le plus clair d’afficher les filtres actifs. Une illustration n’aiderait personne à s’en sortir."
    ]
  }
};
