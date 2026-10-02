<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "step-without-total",
    title: "Step 2 of who knows",
    principle: "Show where users are in a multi-step task",
    scenario: "A shopper on their phone moves on to the next step of checkout.",
    prompt: "What is the main issue with this checkout step?",
    kind: "single",
    choices: [
      {
        id: "a",
        text: "The header says “Step 2” with no total, so the shopper can’t tell how much of checkout is left."
      },
      {
        id: "b",
        text: "The back arrow sits in the top corner, where a button at the bottom would be easier to reach."
      },
      { id: "c", text: "Delivery options are radio buttons, where a dropdown would take less room on a small screen." },
      { id: "d", text: "The Continue button spans the full width, where a smaller button would feel less insistent." }
    ],
    correct: ["a"],
    explanation: [
      "“Step 2” alone doesn’t answer the question shoppers ask at every step: how much is left? Without a total, one step to go and five steps to go look the same, and unsure shoppers give up.",
      "Show the position and the total (“Step 2 of 3”), or a stepper that names the remaining steps, so the effort ahead is visible.",
      "A top-left back arrow is the platform convention, radio buttons suit two or three visible options, and a full-width primary button is standard on mobile."
    ]
  };
</script>

<script lang="ts">
  import { AppBar, BrandTheme, Checkbox, Field, MockButton, PhoneShell } from "../mock";
</script>

<BrandTheme brand="playful">
  <PhoneShell>
    <AppBar title="Delivery" back />
    <div class="screen">
      <p class="step">Step 2</p>
      <Field label="Street address" value="12 rue des Lilas" />
      <div class="pair">
        <Field label="Postcode" value="75011" />
        <Field label="City" value="Paris" />
      </div>
      <div class="options">
        <p class="options__title">Delivery method</p>
        <Checkbox radio label="Standard · 3–5 days · Free" checked />
        <Checkbox radio label="Express · next day · €6.90" />
      </div>
      <div class="footer">
        <MockButton variant="primary" block>Continue</MockButton>
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
    padding: 4px 18px 20px;
  }

  .step {
    color: var(--mock-muted);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .pair {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 10px;
  }

  .options {
    display: grid;
    gap: 10px;

    &__title {
      font-weight: 600;
    }
  }

  .footer {
    margin-top: auto;
    padding-top: 40px;
  }
</style>
