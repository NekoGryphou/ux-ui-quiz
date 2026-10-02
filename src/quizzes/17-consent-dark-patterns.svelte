<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "consent-dark-patterns",
    title: "Consent by default",
    principle: "Ask for consent explicitly and specifically",
    scenario: "A freelancer is signing up for an invoicing tool they want to try for a client project.",
    prompt: "Which issues does this signup form have?",
    kind: "multiple",
    choices: [
      { id: "a", text: "Both consent boxes are already checked, so users opt in without making a choice." },
      { id: "b", text: "Product tips and partner offers share one checkbox, so users can’t accept just one." },
      { id: "c", text: "The password field has no strength meter, so weak passwords can go unnoticed." },
      { id: "d", text: "The form asks for a full name, where a first name would be enough for an account." }
    ],
    correct: ["a", "b"],
    explanation: [
      "Pre-ticked boxes don’t count as consent under the GDPR: consent must be an active, unambiguous choice.",
      "Consent must also be specific. Bundling useful product tips with partner marketing forces an all-or-nothing decision.",
      "Leave consent boxes unchecked and split each purpose into its own option. A strength meter is a nice extra, not a consent issue."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, BrowserShell, Checkbox, Field, MockButton, Title } from "../mock";
</script>

<BrandTheme brand="playful">
  <BrowserShell url="app.billfold.io/signup">
    <div class="page">
      <div class="form">
        <Title>Create your account</Title>
        <Field label="Full name" value="Priya Nair" />
        <Field label="Work email" value="priya@nairstudio.com" />
        <Field label="Password" type="password" value="correcthorse" />
        <div class="consents">
          <Checkbox checked label="Send me product tips and offers from partners" />
          <Checkbox checked label="Share my usage data to improve recommendations" />
        </div>
        <MockButton variant="primary" block>Create account</MockButton>
        <p class="terms">By creating an account you agree to our Terms and Privacy Policy.</p>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    place-items: center;
    padding: 26px 20px;
  }

  .form {
    display: grid;
    gap: 12px;
    width: min(100%, 360px);
  }

  .consents {
    display: grid;
    gap: 10px;
    padding: 4px 0;
  }

  .terms {
    color: var(--mock-muted);
    font-size: 11px;
    text-align: center;
  }
</style>
