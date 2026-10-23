import { PHOTO_ARMCHAIR, PHOTO_LAMP, PHOTO_LIVING_ROOM, PHOTO_SIDE_TABLE } from "../const/photo.const";
import type { QuizSource } from "../types/quiz-source.types";
import { photoCredits } from "../utils/photo.utils";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "between-breakpoints",
  kind: "hotspot",
  title: { en: "820 pixels of chaos", fr: "820 pixels de chaos" },
  principle: {
    en: "Check layouts between breakpoints, not only at them",
    fr: "Vérifier la mise en page entre les points de rupture, pas seulement sur eux"
  },
  scenario: {
    en: "A customer opens a furniture shop on their tablet, held upright, to browse new arrivals.",
    fr: "Une personne ouvre une boutique de meubles sur sa tablette, tenue à la verticale, pour parcourir les nouveautés."
  },
  prompt: {
    en: "Click the part of the page the designers didn’t check at this width.",
    fr: "Cliquez sur la partie de la page que l’équipe design n’a pas vérifiée à cette largeur."
  },
  correct: ["nav"],
  regions: [
    { id: "logo", text: { en: "Logo", fr: "Logo" } },
    { id: "nav", text: { en: "Main navigation", fr: "Navigation principale" } },
    { id: "hero", text: { en: "Hero banner", fr: "Bannière principale" } },
    { id: "cards", text: { en: "Product cards", fr: "Cartes produits" } },
    { id: "footer-link", text: { en: "See all link", fr: "Lien « Voir tout »" } }
  ],
  explanation: {
    en: [
      "The desktop navigation is still shown at 820px, but there isn’t room for it: the links wrap onto a second line that spills over the hero, and the cart icon ends up stranded at the end of that second line.",
      "Layouts are usually designed at a few breakpoints (375, 1024, 1440…) but used at every width in between. Switch the navigation to its compact form before it runs out of room, and test by resizing continuously, not only at the named sizes.",
      "The hero, cards and “See all” link adapt correctly to this width.",
      photoCredits([PHOTO_LIVING_ROOM, PHOTO_ARMCHAIR, PHOTO_LAMP, PHOTO_SIDE_TABLE], "en")
    ],
    fr: [
      "La navigation de bureau est toujours affichée à 820 px, mais elle n’a pas la place : les liens passent sur une seconde ligne qui déborde sur la bannière, et l’icône du panier se retrouve isolée au bout de cette seconde ligne.",
      "Les mises en page sont souvent conçues pour quelques points de rupture (375, 1024, 1440…) mais utilisées à toutes les largeurs intermédiaires. Passez la navigation en version compacte avant qu’elle manque de place, et testez en redimensionnant en continu, pas seulement aux tailles de référence.",
      "La bannière, les cartes et le lien « Voir tout » s’adaptent correctement à cette largeur.",
      photoCredits([PHOTO_LIVING_ROOM, PHOTO_ARMCHAIR, PHOTO_LAMP, PHOTO_SIDE_TABLE], "fr")
    ]
  }
};
