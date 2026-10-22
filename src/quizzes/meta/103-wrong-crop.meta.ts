import type { QuizMeta } from "../../engine/types/quiz.types";

// used by src/quizzes/index.ts (glob)
// noinspection JSUnusedGlobalSymbols
export const meta: QuizMeta = {
  id: "wrong-crop",
  kind: "compare",
  title: "Cropped from the wrong end",
  principle: "Art-direct image crops for each screen size",
  scenario:
    "A museum promotes its new sculpture show on phones, cropping the wide exhibition photo into a short banner.",
  prompt: "Which version crops the image better?",
  correct: ["b"],
  explanation: [
    "The banner zooms into the middle of the photo to fill the mobile frame, keeping only one slice of it. Here that’s the sculpture’s… lower half: the face, the point of the work, is cut off, and the hero becomes an unintended joke.",
    "Choose the focal point per breakpoint: set object-position (or a focal point in your image CDN), or serve a different crop with <picture> and media queries so the subject stays in frame on every screen.",
    "Both versions use the same photo, frame and text; only the crop differs."
  ]
};
