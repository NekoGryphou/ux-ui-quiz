<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "paste-blocked",
    title: "Type it, don’t paste it",
    principle: "Let people paste into login fields",
    scenario: "A customer signs in to their bank, pasting the long password stored in their password manager.",
    prompt: "What is the main issue with this sign-in?",
    kind: "single",
    choices: [
      { id: "a", text: "The password field refuses pasting, so a long generated password has to be typed by hand." },
      { id: "b", text: "The username is the customer number, where an email address would be easier to remember." },
      { id: "c", text: "The sign-in card sits on the left, where a centered card would draw the eye more directly." },
      { id: "d", text: "The “Forgot password?” link sits under the button, where beside the field it’s found faster." }
    ],
    correct: ["a"],
    links: [wcag("3.3.8", "Accessible Authentication (Minimum)", "accessible-authentication-minimum")],
    explanation: [
      "Blocking paste doesn’t stop attackers; it stops people using password managers. The customer must now retype a 24-character random password, or switch to a short one they can remember, which is exactly what security teams don’t want.",
      "Let people paste and let password managers fill the field. Don’t make sign-in depend on memorising or transcribing a password (WCAG 3.3.8 Accessible Authentication).",
      "A customer number as username, a left-aligned card and the link placement are ordinary choices for a banking app."
    ]
  };
</script>

<script lang="ts">
  import { Alert, BrandTheme, Field, MockButton } from "../mock";
</script>

<BrandTheme brand="fintech">
  <div class="bank">
    <div class="card">
      <p class="card__logo">◆ Northbank</p>
      <p class="card__title">Sign in</p>
      <Field label="Customer number" value="0048 2291 7735" />
      <Field label="Password" type="password" value="" state="focus" />
      <Alert tone="warning" title="Pasting is not allowed" body="For your security, please type your password." />
      <MockButton variant="primary" block>Sign in</MockButton>
      <span class="card__link">Forgot password?</span>
    </div>
    <div class="side">
      <p class="side__title">Banking that keeps up with you</p>
      <p>Instant transfers, card controls and savings goals in one place.</p>
    </div>
  </div>
</BrandTheme>

<style lang="scss">
  .bank {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 28px;
    align-items: center;
    width: 620px;
    padding: 28px;
    border-radius: var(--mock-radius-card);
    background: var(--mock-bg);
    color: var(--mock-text);
    box-shadow: var(--mock-shadow-md);
  }

  .card {
    display: grid;
    gap: 14px;
    padding: 22px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);

    &__logo {
      color: var(--mock-primary);
      font-weight: 600;
    }

    &__title {
      font-size: 20px;
      font-weight: 600;
    }

    &__link {
      color: var(--mock-primary);
      font-size: 12px;
      text-align: center;
    }
  }

  .side {
    display: grid;
    gap: 8px;
    color: var(--mock-muted);

    &__title {
      color: var(--mock-text);
      font-size: 20px;
      font-weight: 600;
      line-height: 1.2;
    }
  }
</style>
