<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "wrong-crop",
    title: "Cropped from the wrong end",
    principle: "Art-direct image crops for each screen size",
    scenario:
      "A museum promotes its new sculpture show on phones, cropping the wide exhibition photo into a short banner.",
    prompt: "Which version crops the image better?",
    kind: "compare",
    correct: ["b"],
    explanation: [
      "The banner zooms into the middle of the photo to fill the mobile frame, keeping only one slice of it. Here that’s the sculpture’s… lower half: the face, the point of the work, is cut off, and the hero becomes an unintended joke.",
      "Choose the focal point per breakpoint: set object-position (or a focal point in your image CDN), or serve a different crop with <picture> and media queries so the subject stays in frame on every screen.",
      "Both versions use the same photo, frame and text; only the crop differs."
    ]
  };
</script>

<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { BrandTheme, PhoneShell, Photo } from "../mock";
  import sculpture from "./assets/wall-sculpture.jpg";

  let { variant = "a" }: VisualProps = $props();
</script>

<BrandTheme brand="editorial">
  <PhoneShell>
    <div class="museum">
      <div class="museum__bar"><span>MUSÉE CONTEMPORAIN</span><span>☰</span></div>
      <div class="museum__hero" class:museum__hero--zoom={variant === "a"}>
        <Photo src={sculpture} position="50% 40%" />
      </div>
      <div class="museum__copy">
        <p class="museum__kicker">NEW EXHIBITION</p>
        <p class="museum__title">Bodies &amp; Walls</p>
        <p>Monumental sculptures that break through the gallery itself. Until 14 June.</p>
        <span class="museum__cta">Book tickets</span>
      </div>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .museum {
    display: grid;

    &__bar {
      display: flex;
      justify-content: space-between;
      padding: 10px 16px;
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 0.14em;
    }

    &__hero {
      height: 170px;
      overflow: hidden;
      background: var(--mock-fill);

      &--zoom :global(img) {
        transform: scale(1.9);
        transform-origin: 50% 82%;
      }
    }

    &__copy {
      display: grid;
      gap: 6px;
      padding: 16px;
    }

    &__kicker {
      color: var(--mock-muted);
      font-size: 11px;
      letter-spacing: 0.16em;
    }

    &__title {
      font: 700 24px/1.1 var(--mock-heading-font);
    }

    &__cta {
      justify-self: start;
      margin-top: 6px;
      padding: 10px 16px;
      background: var(--mock-primary);
      color: var(--mock-primary-text);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
  }
</style>
