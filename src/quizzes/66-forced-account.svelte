<script module lang="ts">
  import { PHOTO_CANDLES } from "./const/photo.const";
  import { photoCredits } from "./utils/photo.utils";
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "forced-account",
    title: "Join us, or no candle",
    principle: "Let people buy without creating an account",
    scenario: "A visitor buys a single scented candle as a last-minute gift and heads to checkout.",
    prompt: "What is the main issue with this checkout step?",
    kind: "single",
    choices: [
      { id: "a", text: "Paying requires creating an account first, so a one-off gift buyer must sign up to pay." },
      { id: "b", text: "The order summary sits on the right, where above the form it would be seen sooner." },
      { id: "c", text: "The password needs eight characters, where four would make the form quicker to fill." },
      { id: "d", text: "The sign-up asks for a first name, where an email alone would be enough to continue." }
    ],
    correct: ["a"],
    explanation: [
      "Forcing an account before payment is one of the most common reasons people abandon checkout: a one-off buyer has to invent a password and accept marketing terms just to send a €24 candle.",
      "Offer guest checkout as the default path, and suggest creating an account after the order, when the benefit (tracking, faster reorders) is clear and the email is already known.",
      "A summary on the side, an eight-character minimum and a first name for the delivery are all reasonable on their own.",
      photoCredits([PHOTO_CANDLES])
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, Checkbox, Field, MockButton, Photo } from "../mock";
</script>

<BrandTheme brand="luxury">
  <div class="checkout">
    <div class="form">
      <p class="form__step">Checkout</p>
      <p class="form__title">Create your Maison Lune account to continue</p>
      <Field label="First name" value="Camille" />
      <Field label="Email" value="camille@example.com" />
      <Field label="Choose a password" type="password" hint="At least 8 characters" />
      <Checkbox label="I accept the terms and the Maison Lune newsletter" />
      <MockButton variant="primary" block>Create account & continue</MockButton>
      <span class="form__link">Already a member? Sign in</span>
    </div>
    <aside class="summary">
      <p class="summary__title">Your order</p>
      <div class="summary__item">
        <i><Photo src={PHOTO_CANDLES.url} /></i><span>Figue noire candle<br /><small>220 g</small></span><strong
          >€24</strong
        >
      </div>
      <div class="summary__row"><span>Gift wrap</span><span>€0</span></div>
      <div class="summary__row summary__row--total"><span>Total</span><span>€24</span></div>
    </aside>
  </div>
</BrandTheme>

<style lang="scss">
  .checkout {
    display: grid;
    grid-template-columns: 1fr 220px;
    gap: 22px;
    width: 620px;
    padding: 26px;
    border-radius: var(--mock-radius-card);
    background: var(--mock-bg);
    color: var(--mock-text);
    box-shadow: var(--mock-shadow-md);
  }

  .form {
    display: grid;
    gap: 14px;

    &__step {
      color: var(--mock-muted);
      font-size: 11px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    &__title {
      font: 500 20px/1.25 var(--mock-heading-font);
    }

    &__link {
      color: var(--mock-muted);
      font-size: 12px;
      text-align: center;
    }
  }

  .summary {
    display: grid;
    align-content: start;
    gap: 12px;
    padding: 16px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);

    &__title {
      font: 500 15px/1 var(--mock-heading-font);
    }

    &__item {
      display: grid;
      grid-template-columns: 40px 1fr auto;
      align-items: center;
      gap: 10px;

      i {
        overflow: hidden;
        width: 40px;
        height: 48px;
        border-radius: var(--mock-radius);
        background: linear-gradient(180deg, #2b2b2b, #5a4a3a);
      }

      small {
        color: var(--mock-muted);
      }
    }

    &__row {
      display: flex;
      justify-content: space-between;
      color: var(--mock-muted);

      &--total {
        padding-top: 10px;
        border-top: 1px solid var(--mock-border);
        color: var(--mock-text);
        font-weight: 600;
      }
    }
  }
</style>
