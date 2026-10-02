<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "brand-color-contrast",
    title: "On brand, off contrast",
    principle: "Check brand colors against the text they carry",
    scenario: "A lemonade brand adds a newsletter sign-up to its homepage, using its signature yellow.",
    prompt: "Which version works better?",
    kind: "compare",
    correct: ["b"],
    links: [wcag("1.4.3", "Contrast (Minimum)", "contrast-minimum")],
    explanation: [
      "White on this sunny yellow reaches about 1.6:1: the button label nearly vanishes in daylight, on cheap screens and for anyone with low vision. A brand color isn’t automatically a good background for text.",
      "Keep the brand color and pick the text color for contrast: deep brown on yellow passes 9:1. Check every brand color against the text it carries (WCAG 1.4.3 asks for 4.5:1 for normal text).",
      "Both versions use the same layout, font and yellow; only the label color differs."
    ]
  };
</script>

<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";

  let { variant = "a" }: VisualProps = $props();
</script>

<div class="card">
  <span class="card__logo">zest!</span>
  <p class="card__title">Fresh news, freshly squeezed</p>
  <p class="card__copy">New flavours and summer pop-ups, once a month. No pulp, no spam.</p>
  <span class="card__field">sam@example.com</span>
  <span class="card__button" class:card__button--dark={variant === "b"}>Squeeze me in</span>
</div>

<style lang="scss">
  .card {
    display: grid;
    gap: 12px;
    width: 300px;
    padding: 24px 22px;
    border-radius: 24px;
    background: #fffaf0;
    color: #3b2400;
    font-family: "Nunito", sans-serif;
    box-shadow: 0 12px 30px rgb(255 180 0 / 0.25);

    &__logo {
      color: #b35800;
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.03em;
    }

    &__title {
      font-size: 18px;
      font-weight: 800;
      line-height: 1.2;
    }

    &__copy {
      color: #6b4a14;
      font-size: 13px;
    }

    &__field {
      padding: 11px 14px;
      border: 2px solid #f5dfae;
      border-radius: 14px;
      background: #ffffff;
      color: #3b2400;
      font-size: 13px;
    }

    &__button {
      padding: 12px;
      border-radius: 999px;
      background: #ffc93c;
      color: #ffffff;
      font-size: 15px;
      font-weight: 800;
      text-align: center;

      &--dark {
        color: #3b2400;
      }
    }
  }
</style>
