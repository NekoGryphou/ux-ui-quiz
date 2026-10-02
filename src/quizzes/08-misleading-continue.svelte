<script module lang="ts">
  import { PHOTO_SHOE_TRAIL } from "./const/photo.const";
  import { photoCredits } from "./utils/photo.utils";
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "misleading-continue",
    title: "“Continue” that places the order",
    principle: "Label actions by their real outcome",
    scenario: "A shopper reaches the payment step of checkout and wants to double-check the order before paying.",
    prompt: "What is the main issue on this step?",
    kind: "single",
    choices: [
      { id: "a", text: "The saved Visa card is preselected, which nudges users to pay without checking it." },
      { id: "b", text: "The button reads “Continue”, yet clicking it places the order and charges the card." },
      { id: "c", text: "The order summary sits on the right, away from the payment details it relates to." },
      { id: "d", text: "The way back to Shipping is a plain text link, so it’s easy to overlook." }
    ],
    correct: ["b"],
    explanation: [
      "Button labels set expectations. “Continue”, with a stepper that still shows a Review step, promises another step, not a payment.",
      "Commitments involving money need an explicit label such as “Pay €84.90” or “Place order”.",
      "Fine print under the button doesn’t fix a misleading label: most users never read it.",
      photoCredits([PHOTO_SHOE_TRAIL])
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, BrowserShell, Checkbox, Field, Icon, MockButton, Photo, Stepper } from "../mock";
</script>

<BrandTheme brand="luxury">
  <BrowserShell url="shop.trailgear.eu/checkout/payment">
    <div class="page">
      <Stepper
        steps={[
          { label: "Shipping", state: "complete" },
          { label: "Payment", state: "current" },
          { label: "Review", state: "upcoming" }
        ]}
      />
      <div class="columns">
        <div class="form">
          <div class="methods">
            <Checkbox radio checked label="Credit card" hint="Visa ending in 4242" />
            <Checkbox radio label="PayPal" />
          </div>
          <Field label="Billing address" type="select" value="Same as shipping" />
          <div class="footer">
            <span class="back"><Icon name="chevron-left" size={14} /> Shipping</span>
            <MockButton variant="primary" size="lg">Continue</MockButton>
          </div>
          <p class="fine">By clicking Continue, your order is placed and your card is charged.</p>
        </div>

        <aside class="summary">
          <strong>Order summary</strong>
          <div class="item">
            <span class="thumb"><Photo src={PHOTO_SHOE_TRAIL.url} /></span>
            <span class="item__name">Trail runner 2 <small>Size 42 · Slate</small></span>
            <span>€79.90</span>
          </div>
          <div class="line"><span>Shipping</span><span>€5.00</span></div>
          <div class="line total"><span>Total</span><span>€84.90</span></div>
        </aside>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    gap: 22px;
    padding: 24px;
  }

  .columns {
    display: grid;
    grid-template-columns: 1.35fr 1fr;
    gap: 20px;
    align-items: start;
  }

  .form {
    display: grid;
    gap: 16px;
  }

  .methods {
    display: grid;
    gap: 12px;
    padding: 14px;
    border: 1px solid var(--mock-border);
    border-radius: 10px;
    background: var(--mock-surface);
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .back {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--mock-muted);
  }

  .fine {
    margin: -8px 0 0;
    color: #a3a8b3;
    font-size: 10px;
    text-align: right;
  }

  .summary {
    display: grid;
    gap: 12px;
    padding: 16px;
    border: 1px solid var(--mock-border);
    border-radius: 12px;
    background: var(--mock-surface);
  }

  .item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .thumb {
    overflow: hidden;
    flex: none;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: linear-gradient(135deg, #cbd5e1, #94a3b8);
  }

  .item__name {
    display: grid;
    flex: 1;
    font-weight: 500;

    small {
      color: var(--mock-muted);
      font-size: 11px;
      font-weight: 400;
    }
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
</style>
