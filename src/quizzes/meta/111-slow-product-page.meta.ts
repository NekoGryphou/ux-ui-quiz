import { PHOTO_ARMCHAIR } from "../const/photo.const";
import type { QuizSource } from "../types/quiz-source.types";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "slow-product-page",
  kind: "multiple",
  title: {
    en: "A product page that loads in fits and starts",
    fr: "Une fiche produit qui se charge par à-coups"
  },
  principle: {
    en: "Load what’s on screen first and keep the page stable while it loads",
    fr: "Charger d’abord ce qui est à l’écran et garder la page stable pendant le chargement"
  },
  scenario: {
    en: "A front-end developer reviews the markup of a product page, next to a filmstrip of its first load on a mid-range phone.",
    fr: "Une personne de l’équipe front relit le code HTML d’une fiche produit, à côté d’une pellicule de son premier chargement sur un téléphone milieu de gamme."
  },
  prompt: {
    en: "Which issues in this markup hurt the loading experience?",
    fr: "Quels problèmes de ce code HTML dégradent le chargement ?"
  },
  correct: ["a", "c", "d"],
  choices: [
    {
      id: "a",
      text: {
        en: "The main photo is lazy-loaded, so the largest image waits for layout before it downloads.",
        fr: "La photo principale est en lazy loading, donc la plus grande image attend la mise en page pour se télécharger."
      }
    },
    {
      id: "b",
      text: {
        en: "The legs photo lists two files in srcset, so the browser downloads both of them each time.",
        fr: "La photo des pieds liste deux fichiers dans srcset, donc le navigateur télécharge les deux à chaque fois."
      }
    },
    {
      id: "c",
      text: {
        en: "The two detail photos have no dimensions, so the content below jumps as each one arrives.",
        fr: "Les deux photos de détail n’ont pas de dimensions, donc le contenu en dessous saute à l’arrivée de chacune."
      }
    },
    {
      id: "d",
      text: {
        en: "The title font has no font-display, so the product name stays invisible while it loads.",
        fr: "La police du titre n’a pas de font-display, donc le nom du produit reste invisible pendant son chargement."
      }
    },
    {
      id: "e",
      text: {
        en: "The page preconnects to the font CDN, so the browser opens a connection it never uses.",
        fr: "La page fait un preconnect vers le CDN des polices, donc le navigateur ouvre une connexion inutile."
      }
    }
  ],
  explanation: {
    en: [
      'loading="lazy" on an image that is visible straight away makes the browser wait for layout before fetching it, which delays the largest paint of the page. Load the hero eagerly, ideally with fetchpriority="high".',
      "Without width and height, the browser can’t reserve space for the detail photos: the row has no height until they arrive, then pushes the Add to cart button down just as the shopper reaches for it. Set both attributes, or an aspect-ratio in CSS.",
      "With no font-display, most browsers hide text set in a web font for up to three seconds while it downloads. font-display: swap shows the fallback serif straight away.",
      'srcset lets the browser pick one file for the screen, decoding="async" keeps image decoding off the critical path, and preconnecting to the font host saves a round trip: all three help.',
      photoCredits([PHOTO_ARMCHAIR], "en")
    ],
    fr: [
      'loading="lazy" sur une image visible d’emblée oblige le navigateur à attendre la mise en page avant de la récupérer, ce qui retarde le plus grand affichage de la page. Chargez l’image principale immédiatement, idéalement avec fetchpriority="high".',
      "Sans width ni height, le navigateur ne peut pas réserver la place des photos de détail : la rangée n’a aucune hauteur jusqu’à leur arrivée, puis repousse le bouton Ajouter au panier vers le bas au moment précis où l’on s’apprête à appuyer dessus. Définissez les deux attributs, ou un aspect-ratio en CSS.",
      "Sans font-display, la plupart des navigateurs masquent le texte en police web jusqu’à trois secondes pendant son téléchargement. font-display: swap affiche tout de suite la police serif de secours.",
      'srcset permet au navigateur de choisir un seul fichier adapté à l’écran, decoding="async" sort le décodage des images du chemin critique, et le preconnect vers l’hôte des polices économise un aller-retour : les trois sont utiles.',
      photoCredits([PHOTO_ARMCHAIR], "fr")
    ]
  }
};
