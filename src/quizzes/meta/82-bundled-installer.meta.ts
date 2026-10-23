import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "bundled-installer",
  kind: "single",
  title: {
    en: "Next, Next, Next… and a toolbar",
    fr: "Suivant, Suivant, Suivant… et une barre d’outils"
  },
  principle: {
    en: "Never pre-select extras the user didn’t ask for",
    fr: "Ne jamais présélectionner des extras que personne n’a demandés"
  },
  scenario: {
    en: "A parent installs a free PDF reader and clicks through the setup steps to open a school form.",
    fr: "Un parent installe un lecteur PDF gratuit et enchaîne les étapes d’installation pour ouvrir un formulaire de l’école."
  },
  prompt: {
    en: "What is the main issue with this setup step?",
    fr: "Quel est le principal problème de cette étape d’installation ?"
  },
  correct: ["a"],
  choices: [
    {
      id: "a",
      text: {
        en: "Unrelated extras are ticked by default, so clicking Next installs them without asking.",
        fr: "Des extras sans rapport sont cochés par défaut : cliquer sur Suivant les installe sans demander."
      }
    },
    {
      id: "b",
      text: {
        en: "The wizard uses a grey system style, where a branded look would feel more trustworthy.",
        fr: "L’assistant a un style système gris, alors qu’une identité de marque inspirerait plus confiance."
      }
    },
    {
      id: "c",
      text: {
        en: "Setup shows a step counter, where hiding it would make the install feel shorter.",
        fr: "L’installation affiche un compteur d’étapes, alors que le masquer la ferait paraître plus courte."
      }
    },
    {
      id: "d",
      text: {
        en: "The Back button sits left of Next, where only one button would keep the step simpler.",
        fr: "Le bouton Précédent est à gauche de Suivant, alors qu’un seul bouton simplifierait l’étape."
      }
    }
  ],
  explanation: {
    en: [
      "People click Next to get through setup. Here “Next” also installs a toolbar, changes the homepage and sets a new search engine, because those boxes come ticked and are labelled as “recommended”.",
      "Extras must be opt-in: unticked by default, clearly separate from the product and declinable in one click. Better still, don’t bundle them at all.",
      "The system style, step counter and Back/Next pair are the standard installer pattern."
    ],
    fr: [
      "On clique sur Suivant pour avancer dans l’installation. Ici, « Suivant » installe aussi une barre d’outils, change la page d’accueil et impose un nouveau moteur de recherche, car ces cases sont cochées d’avance et présentées comme « recommandé ».",
      "Les extras doivent être facultatifs : décochés par défaut, clairement séparés du produit et refusables en un clic. Mieux encore, ne les intégrez pas du tout.",
      "Le style système, le compteur d’étapes et la paire Précédent/Suivant sont le modèle standard d’un programme d’installation."
    ]
  }
};
