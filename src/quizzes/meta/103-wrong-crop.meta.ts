import type { QuizSource } from "../types/quiz-source.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizSource = {
  id: "wrong-crop",
  kind: "compare",
  title: { en: "Cropped from the wrong end", fr: "Recadré du mauvais côté" },
  principle: {
    en: "Art-direct image crops for each screen size",
    fr: "Adapter le recadrage des images à chaque taille d’écran"
  },
  scenario: {
    en: "A museum promotes its new sculpture show on phones, cropping the wide exhibition photo into a short banner.",
    fr: "Un musée promeut sa nouvelle exposition de sculptures sur mobile, en recadrant la large photo de l’exposition en un bandeau peu haut."
  },
  prompt: { en: "Which version crops the image better?", fr: "Quelle version recadre le mieux l’image ?" },
  correct: ["b"],
  explanation: {
    en: [
      "The banner zooms into the middle of the photo to fill the mobile frame, keeping only one slice of it. Here that’s the sculpture’s… lower half: the face, the point of the work, is cut off, and the hero becomes an unintended joke.",
      "Choose the focal point per breakpoint: set object-position (or a focal point in your image CDN), or serve a different crop with <picture> and media queries so the subject stays in frame on every screen.",
      "Both versions use the same photo, frame and text; only the crop differs."
    ],
    fr: [
      "Le bandeau zoome au centre de la photo pour remplir le cadre mobile et n’en garde qu’une tranche. Ici, c’est la… moitié inférieure de la sculpture : le visage, le cœur de l’œuvre, est coupé, et le visuel principal devient une blague involontaire.",
      "Choisissez le point focal pour chaque breakpoint : réglez object-position (ou un point focal dans votre CDN d’images), ou servez un autre recadrage avec <picture> et des media queries pour que le sujet reste dans le cadre sur chaque écran.",
      "Les deux versions utilisent la même photo, le même cadre et le même texte ; seul le recadrage change."
    ]
  }
};
