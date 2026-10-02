<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "color-only-error",
    title: "Error signalled by color alone",
    principle: "Explain errors in words, not only with color",
    scenario: "A customer enters their card details and clicks Pay. The page updates as shown.",
    prompt: "What is the main issue on this payment step?",
    kind: "single",
    choices: [
      { id: "a", text: "The Pay button stays enabled while a field is invalid, which invites repeated clicks." },
      { id: "b", text: "The card number is a single input instead of four separate groups of four digits." },
      { id: "c", text: "The card number field turns red, but no message says what is wrong or how to fix it." },
      { id: "d", text: "The card number field shows no network logo, so users can’t confirm the card type." }
    ],
    correct: ["c"],
    links: [
      wcag("3.3.1", "Error Identification", "error-identification"),
      wcag("1.4.1", "Use of Color", "use-of-color")
    ],
    explanation: [
      "A red border tells users something failed but not what: a typo, an expired card, an unsupported network?",
      "Errors must be identified and described in text (WCAG 3.3.1 Error Identification), and color can’t be the only signal (WCAG 1.4.1 Use of Color).",
      "Pair the visual state with a specific message next to the field, plus an icon, e.g. “This card number is incomplete.”"
    ]
  };
</script>

<script lang="ts">
  import { BrowserShell, Field, Icon, MockButton, Title } from "../mock";
</script>

<BrowserShell url="checkout.plantly.shop/payment">
  <div class="page">
    <div class="form">
      <Title>Payment</Title>
      <Field label="Name on card" value="Camille Durand" />
      <Field label="Card number" value="4970 1012 3456 789" state="error" />
      <div class="row">
        <Field label="Expiry" value="09 / 28" />
        <Field label="CVC" value="•••" />
      </div>
      <MockButton variant="primary" block size="lg" icon="lock">Pay €49.00</MockButton>
    </div>
    <aside class="summary">
      <strong>Order summary</strong>
      <div class="line"><span>Monstera Deliciosa</span><span>€39.00</span></div>
      <div class="line"><span>Shipping</span><span>€10.00</span></div>
      <div class="line total"><span>Total</span><span>€49.00</span></div>
      <span class="secure"><Icon name="lock" size={12} /> Secure payment</span>
    </aside>
  </div>
</BrowserShell>

<style lang="scss">
  .page {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 20px;
    padding: 24px 20px;
  }

  .form {
    display: grid;
    gap: 14px;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .summary {
    display: grid;
    gap: 10px;
    align-content: start;
    padding: 16px;
    border-radius: 12px;
    background: var(--mock-surface);
    border: 1px solid var(--mock-border);
  }

  .line {
    display: flex;
    justify-content: space-between;
    color: var(--mock-muted);
  }

  .total {
    padding-top: 10px;
    border-top: 1px solid var(--mock-border);
    color: var(--mock-text);
    font-weight: 600;
  }

  .secure {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--mock-muted);
    font-size: 11px;
  }
</style>
