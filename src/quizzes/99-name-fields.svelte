<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "name-fields",
    title: "First name, last name, and other assumptions",
    principle: "Don’t force names into one cultural pattern",
    scenario:
      "A new employee from Indonesia, whose legal name is the single word Sukarni, fills in the HR onboarding form.",
    prompt: "What is the main issue with this form?",
    kind: "single",
    choices: [
      { id: "a", text: "Both first and last name are required, so someone with a single name can’t submit." },
      { id: "b", text: "The name fields sit side by side, where stacked fields would read more easily on mobile." },
      { id: "c", text: "The form asks for a preferred name, where the legal name alone would keep it shorter." },
      { id: "d", text: "The labels sit above the fields, where labels to the left would align the form better." }
    ],
    correct: ["a"],
    explanation: [
      "Many people have a single name, put the family name first, have several family names or use characters the form rejects. Requiring both a “first” and a “last” name forces Sukarni to invent one, which then ends up on contracts and payslips.",
      "Use one “Full name” field, plus an optional “What should we call you?” if you need a greeting. Accept any characters and lengths, and only split names when a legal system truly requires it.",
      "Side-by-side fields, a preferred-name field and top-aligned labels are all fine choices."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, Field, MockButton } from "../mock";
</script>

<BrandTheme brand="luxury">
  <div class="card">
    <p class="card__step">Step 1 of 4 · Personal details</p>
    <p class="card__title">Welcome to Northwind!</p>
    <div class="pair">
      <Field label="First name" value="Sukarni" required />
      <Field label="Last name" state="error" required message="Last name is required." />
    </div>
    <Field label="Preferred name" placeholder="Optional" />
    <MockButton variant="primary" block>Next</MockButton>
  </div>
</BrandTheme>

<style lang="scss">
  .card {
    display: grid;
    gap: 14px;
    width: 420px;
    padding: 24px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);
    color: var(--mock-text);
    box-shadow: var(--mock-shadow-md);

    &__step {
      color: var(--mock-muted);
      font-size: 12px;
    }

    &__title {
      font: 500 20px/1.2 var(--mock-heading-font);
    }
  }

  .pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
</style>
