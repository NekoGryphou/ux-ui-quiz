<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "placeholder-labels",
    title: "Placeholders used as labels",
    principle: "Keep field context persistent and legible",
    scenario: "A returning user is signing in to a B2B tool. They have started typing their email address.",
    prompt: "Which issues does this form have?",
    kind: "multiple",
    choices: [
      { id: "a", text: "Field names exist only as placeholders, so they disappear once the user types." },
      { id: "b", text: "The placeholder text is so pale that it’s hard to read against the white field." },
      { id: "c", text: "The form asks for an email address, where a username would be quicker to type." },
      { id: "d", text: "The “Forgot your password?” link sits under the button instead of beside the field." },
      { id: "e", text: "The Sign in button spans the full width, so it reads more like a banner than a button." }
    ],
    correct: ["a", "b"],
    links: [
      wcag("3.3.2", "Labels or Instructions", "labels-or-instructions"),
      wcag("1.4.3", "Contrast (Minimum)", "contrast-minimum")
    ],
    explanation: [
      "Placeholders vanish on input: the half-typed email field already has no name, and users who get interrupted or use a screen reader lose the field’s purpose (WCAG 3.3.2 Labels or Instructions).",
      "The very light placeholder gray is about 1.6:1 against white, far below the 4.5:1 minimum for text (WCAG 1.4.3).",
      "Use a visible label above each field, and keep placeholders for optional examples only."
    ]
  };
</script>

<script lang="ts">
  import { BrandMark, BrowserShell, MockButton, Title } from "../mock";
</script>

<BrowserShell url="app.ledgerly.com/sign-in">
  <div class="page">
    <div class="panel">
      <BrandMark name="Ledgerly" size={36} />
      <Title>Welcome back</Title>
      <p class="muted">Sign in to your workspace</p>
      <div class="input input--typing">camille.durand@</div>
      <div class="input input--placeholder">Password</div>
      <MockButton variant="primary" block>Sign in</MockButton>
      <span class="forgot">Forgot your password?</span>
    </div>
  </div>
</BrowserShell>

<style lang="scss">
  .page {
    display: grid;
    place-items: center;
    padding: 40px 20px;
    background: linear-gradient(180deg, #f2f5ff, var(--mock-bg));
  }

  .panel {
    display: grid;
    gap: 12px;
    width: min(100%, 320px);
    padding: 28px;
    border: 1px solid var(--mock-border);
    border-radius: 14px;
    background: var(--mock-surface);
    box-shadow: 0 8px 24px rgb(15 18 32 / 0.06);
  }

  .muted {
    margin: -8px 0 6px;
    color: var(--mock-muted);
  }

  .input {
    display: flex;
    align-items: center;
    height: 38px;
    padding: 0 12px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius);

    &--typing {
      border-color: var(--mock-primary);
      box-shadow: 0 0 0 3px rgb(37 99 235 / 0.15);

      &::after {
        content: "";
        width: 1px;
        height: 16px;
        margin-left: 1px;
        background: var(--mock-text);
      }
    }

    &--placeholder {
      color: #c9ccd3;
    }
  }

  .forgot {
    color: var(--mock-primary);
    font-size: 12px;
    text-align: center;
  }
</style>
