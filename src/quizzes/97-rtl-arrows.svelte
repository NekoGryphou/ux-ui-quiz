<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "rtl-arrows",
    title: "Next is that way… or that way?",
    principle: "Mirror directional icons in right-to-left layouts",
    scenario: "A traveller in Cairo uses the Arabic version of a hotel booking app to move to the next step.",
    prompt: "What is the main issue with this screen?",
    kind: "single",
    choices: [
      { id: "a", text: "Text runs right to left, but the arrows still point as in English, so next looks like back." },
      { id: "b", text: "The step counter uses Arabic-Indic digits, where Latin digits would be read more widely." },
      { id: "c", text: "The text is right-aligned, where centered text would make the layout feel more balanced." },
      { id: "d", text: "The primary button spans the full width, where a smaller one would leave room for back." }
    ],
    correct: ["a"],
    explanation: [
      "The layout is mirrored for Arabic, so “next” now sits on the left, but its arrow still points right, towards “back”. The progress bar also fills from the wrong side, so the traveller can’t tell which way the flow goes.",
      'In RTL, mirror everything directional: arrows, chevrons, progress, sliders and swipe directions (CSS logical properties and dir="rtl" help). Don’t mirror icons that aren’t directional, such as a clock, a checkmark or a play button.',
      "Arabic-Indic digits, right-aligned text and a full-width primary button are all appropriate in an Arabic interface."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, PhoneShell } from "../mock";
</script>

<BrandTheme brand="eco">
  <PhoneShell>
    <div class="screen" dir="rtl">
      <div class="top">
        <span class="top__back">←</span>
        <span class="top__title">تفاصيل الحجز</span>
      </div>
      <div class="progress"><i></i></div>
      <p class="step">الخطوة ٢ من ٣</p>
      <div class="card">
        <p class="card__title">فندق النيل</p>
        <p>غرفة مزدوجة · ٣ ليالٍ</p>
        <p>١٢ – ١٥ مارس</p>
        <strong>٣٬٦٠٠ ج.م</strong>
      </div>
      <div class="nav">
        <span class="nav__next">التالي →</span>
        <span class="nav__back">← رجوع</span>
      </div>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .screen {
    display: grid;
    align-content: start;
    gap: 14px;
    min-height: 520px;
    padding: 10px 18px;
    font-family: "Noto Sans Arabic", "Segoe UI", Tahoma, sans-serif;
    font-size: 15px;
  }

  .top {
    display: flex;
    align-items: center;
    gap: 12px;

    &__back {
      font-size: 20px;
      color: var(--mock-primary);
    }

    &__title {
      font-size: 18px;
      font-weight: 700;
    }
  }

  .progress {
    height: 6px;
    border-radius: 999px;
    background: var(--mock-fill);
    direction: ltr;

    i {
      display: block;
      width: 66%;
      height: 100%;
      border-radius: inherit;
      background: var(--mock-primary);
    }
  }

  .step {
    color: var(--mock-muted);
  }

  .card {
    display: grid;
    gap: 6px;
    padding: 16px;
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);

    &__title {
      font-size: 17px;
      font-weight: 700;
    }
  }

  .nav {
    display: grid;
    gap: 8px;
    margin-top: 40px;
    text-align: center;

    &__next {
      padding: 12px;
      border-radius: var(--mock-radius);
      background: var(--mock-primary);
      color: var(--mock-primary-text);
      font-weight: 700;
    }

    &__back {
      padding: 10px;
      color: var(--mock-primary);
      font-weight: 600;
    }
  }
</style>
