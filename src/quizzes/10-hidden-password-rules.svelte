<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "hidden-password-rules",
    title: "Secret password rules",
    principle: "Show constraints before input",
    scenario:
      "A user creating an account types a password they like, confirms it and submits. The page updates as shown.",
    prompt: "Which issues does this form have?",
    kind: "multiple",
    choices: [
      { id: "a", text: "The password rules aren’t shown until after the user has submitted the form." },
      { id: "b", text: "The error says the password fails “requirements” without naming which one." },
      { id: "c", text: "The error appears under the field, where a banner at the top would be noticed." },
      { id: "d", text: "The email is shown as plain text, so users can’t correct a typo in it here." }
    ],
    correct: ["a", "b"],
    links: [wcag("3.3.2", "Labels or Instructions", "labels-or-instructions")],
    explanation: [
      "Hidden rules turn the form into a guessing game. List the requirements upfront, ideally as a checklist that updates while typing (WCAG 3.3.2 Labels or Instructions).",
      "“Doesn’t meet requirements” gives no next step. Say what’s missing: “Add at least one number.”",
      "An error next to its field is the recommended placement, and confirming the email from a previous step is fine."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, BrowserShell, Field, MockButton, Title } from "../mock";
</script>

<BrandTheme brand="playful">
  <BrowserShell url="accounts.fitnest.app/create">
    <div class="page">
      <div class="form">
        <Title>Create your password</Title>
        <p class="account">Signing up as <strong>sam.ortiz@mail.com</strong></p>
        <Field
          label="Password"
          type="password"
          value="sunsetrun"
          state="error"
          message="Password doesn’t meet requirements."
        />
        <Field label="Confirm password" type="password" value="sunsetrun" />
        <MockButton variant="primary" block>Create account</MockButton>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .account {
    margin: -6px 0 2px;
    color: var(--mock-muted);

    strong {
      color: var(--mock-text);
      font-weight: 500;
    }
  }

  .page {
    display: grid;
    place-items: center;
    padding: 32px 20px;
  }

  .form {
    display: grid;
    gap: 14px;
    width: min(100%, 340px);
  }
</style>
