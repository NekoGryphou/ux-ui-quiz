<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "kiosk-no-reset",
    title: "The previous customer’s order",
    principle: "Reset shared screens after each person",
    scenario: "A traveller walks up to a self-service kiosk at a station café that someone else just used.",
    prompt: "What is the main issue with this kiosk?",
    kind: "single",
    choices: [
      { id: "a", text: "The last customer’s receipt and loyalty details are still shown to the next person." },
      { id: "b", text: "The screen uses large buttons, where smaller ones would fit more items on the page." },
      { id: "c", text: "The receipt lists every item, where showing only the total would be more discreet." },
      { id: "d", text: "The kiosk is in portrait, where a landscape screen would feel more like a laptop." }
    ],
    correct: ["a"],
    explanation: [
      "The kiosk never returned to its start screen: the next traveller sees the previous customer’s order, name, loyalty points and the last digits of their card, and could even reuse the open session.",
      "Shared screens should reset on their own: after a completed payment, and after a short inactivity timeout with a visible countdown (“Still there? Resetting in 10 s”), clearing all personal data.",
      "Large buttons suit kiosks, an itemised receipt is expected, and portrait screens are common for ordering."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme } from "../mock";
</script>

<BrandTheme brand="playful">
  <div class="kiosk">
    <div class="kiosk__screen">
      <p class="kiosk__brand">Station Café</p>
      <div class="kiosk__done">✓ Payment accepted — enjoy!</div>
      <div class="receipt">
        <p class="receipt__who">Thanks, <strong>Hélène M.</strong></p>
        <p>Loyalty card •••• 4821 · 340 points</p>
        <div class="receipt__row"><span>Flat white (L)</span><span>€4.20</span></div>
        <div class="receipt__row"><span>Almond croissant</span><span>€2.80</span></div>
        <div class="receipt__row receipt__row--total"><span>Total · Visa •••• 0093</span><span>€7.00</span></div>
      </div>
      <span class="kiosk__btn">Order again</span>
      <span class="kiosk__btn kiosk__btn--alt">Add to my favourites</span>
    </div>
    <span class="kiosk__stand"></span>
  </div>
</BrandTheme>

<style lang="scss">
  .kiosk {
    display: grid;
    justify-items: center;

    &__screen {
      display: grid;
      align-content: start;
      gap: 12px;
      width: 290px;
      min-height: 470px;
      padding: 22px;
      border: 12px solid #26262e;
      border-radius: 18px;
      background: var(--mock-bg);
      color: var(--mock-text);
      box-shadow: var(--mock-shadow-lg);
    }

    &__brand {
      color: var(--mock-primary);
      font-size: 20px;
      font-weight: 800;
    }

    &__done {
      padding: 10px;
      border-radius: var(--mock-radius);
      background: #e5f6ea;
      color: #1b6b37;
      font-weight: 700;
    }

    &__btn {
      padding: 14px;
      border-radius: var(--mock-radius);
      background: var(--mock-primary);
      color: var(--mock-primary-text);
      font-weight: 800;
      text-align: center;

      &--alt {
        background: var(--mock-fill);
        color: var(--mock-text);
      }
    }

    &__stand {
      width: 60px;
      height: 70px;
      background: linear-gradient(90deg, #1c1c22, #3a3a44, #1c1c22);
    }
  }

  .receipt {
    display: grid;
    gap: 6px;
    padding: 12px;
    border-radius: var(--mock-radius);
    background: var(--mock-surface);
    font-size: 13px;

    &__row {
      display: flex;
      justify-content: space-between;

      &--total {
        padding-top: 6px;
        border-top: 1px dashed var(--mock-border);
        font-weight: 700;
      }
    }
  }
</style>
