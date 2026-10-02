<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "us-phone-only",
    title: "Please enter a valid phone number",
    principle: "Accept international formats for phone numbers and addresses",
    scenario: "A customer in Lyon enters their mobile number at checkout so the courier can reach them.",
    prompt: "What is the main issue with this field?",
    kind: "single",
    choices: [
      { id: "a", text: "The field only accepts the US (XXX) XXX-XXXX pattern, so a valid French number is refused." },
      { id: "b", text: "The field shows an example under it, where a placeholder inside would keep the form shorter." },
      { id: "c", text: "The error appears in red under the field, where a toast would make the problem more visible." },
      { id: "d", text: "The form asks for a phone number at all, where an email address would be enough for delivery." }
    ],
    correct: ["a"],
    explanation: [
      "“06 12 34 56 78” is a perfectly valid French mobile number, but the validation expects ten digits in the US pattern and refuses it. The customer can’t complete checkout without inventing a number.",
      "Accept numbers as people write them: allow spaces, dots, dashes and a leading “+”, offer a country code selector, and validate with a library that knows international rules (libphonenumber), not a single regex.",
      "An example under the field, an inline error and asking for a phone number for delivery are all reasonable."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, Field, MockButton } from "../mock";
</script>

<BrandTheme brand="corporate">
  <div class="card">
    <p class="card__title">Delivery contact</p>
    <Field label="Full name" value="Léa Martin" />
    <Field
      label="Mobile phone"
      value="06 12 34 56 78"
      state="error"
      message="Please enter a valid phone number, e.g. (555) 123-4567."
    />
    <MockButton variant="primary" block>Continue to payment</MockButton>
  </div>
</BrandTheme>

<style lang="scss">
  .card {
    display: grid;
    gap: 14px;
    width: 320px;
    padding: 22px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);
    color: var(--mock-text);
    box-shadow: var(--mock-shadow-md);

    &__title {
      font-size: 16px;
      font-weight: 600;
    }
  }
</style>
