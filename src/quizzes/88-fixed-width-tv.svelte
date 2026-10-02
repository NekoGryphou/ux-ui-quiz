<script module lang="ts">
  import { PHOTO_RISOTTO } from "./const/photo.const";
  import { photoCredits } from "./utils/photo.utils";
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "fixed-width-tv",
    title: "A postage stamp on a 65-inch TV",
    principle: "Let layouts scale to the screen they’re on",
    scenario: "A family opens a recipe site on their living-room smart TV to cook along from the sofa.",
    prompt: "What is the main issue with this page on the TV?",
    kind: "single",
    choices: [
      { id: "a", text: "The page is fixed at 1024 pixels, so on the TV it is a small strip with tiny text." },
      { id: "b", text: "The recipe photo sits above the steps, where beside them it would use the width." },
      { id: "c", text: "The ingredients are a bulleted list, where a table would align quantities better." },
      { id: "d", text: "The page has a white background, where a dark theme would suit a living room more." }
    ],
    correct: ["a"],
    explanation: [
      "The site was built at a fixed 1024px width with 13px text. On a 4K TV seen from three metres away, it sits in a narrow strip in the middle of the screen, and the steps are unreadable from the sofa.",
      "Use fluid layouts and relative units, scale type with the viewport, and consider the viewing distance for TV-like screens: larger text, focusable large targets and fewer, bigger columns.",
      "Photo above the steps, a bulleted ingredient list and a white background are all reasonable recipe layouts.",
      photoCredits([PHOTO_RISOTTO])
    ]
  };
</script>

<script lang="ts">
  import { Photo, ViewportBadge } from "../mock";
</script>

<div class="room">
  <ViewportBadge label="3840 px · seen from 3 m" />
  <div class="tv">
    <div class="tv__screen">
      <div class="site">
        <p class="site__logo">CookAlong</p>
        <span class="site__photo"><Photo src={PHOTO_RISOTTO.url} /></span>
        <p class="site__title">Creamy mushroom risotto</p>
        <ul>
          <li>300 g arborio rice</li>
          <li>250 g mushrooms</li>
          <li>1 l vegetable stock</li>
        </ul>
        <p>1. Fry the onion in butter until soft, then add the rice and stir for 2 minutes.</p>
      </div>
    </div>
    <span class="tv__stand"></span>
  </div>
</div>

<style lang="scss">
  .room {
    display: grid;
    justify-items: center;
    gap: 12px;
  }

  .tv {
    display: grid;
    justify-items: center;

    &__screen {
      display: grid;
      justify-items: center;
      width: 600px;
      height: 338px;
      padding: 12px 0;
      border: 10px solid #111111;
      border-radius: 6px;
      background: #2b2b30;
      box-shadow: var(--mock-shadow-lg);
    }

    &__stand {
      width: 140px;
      height: 14px;
      border-radius: 0 0 6px 6px;
      background: #2a2a2a;
    }
  }

  .site {
    display: grid;
    align-content: start;
    gap: 3px;
    width: 160px;
    height: 100%;
    padding: 6px;
    background: #ffffff;
    color: #1a1a1a;
    font:
      4px/1.4 Arial,
      sans-serif;

    &__logo {
      color: #c0392b;
      font-size: 6px;
      font-weight: 700;
    }

    &__photo {
      height: 50px;
      overflow: hidden;
    }

    &__title {
      font-size: 7px;
      font-weight: 700;
    }

    ul {
      margin: 0;
      padding-left: 8px;
    }
  }
</style>
