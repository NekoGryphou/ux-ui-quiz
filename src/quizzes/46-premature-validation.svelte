<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "premature-validation",
    title: "Wrong before you’ve finished",
    principle: "Validate when the user is done, not on the first keystroke",
    scenario: "A visitor creates an account and is halfway through typing their email address.",
    prompt: "Which version handles validation better?",
    kind: "compare",
    correct: ["b"],
    explanation: [
      "Flagging “camille.du” as invalid while the visitor is still typing is like correcting someone mid-sentence: the field turns red for an address that is simply unfinished.",
      "Validate when the user leaves the field or submits the form. Once an error is shown, re-check as they type so it clears as soon as the value is fixed.",
      "Both versions use the same field, message style and wording; only the moment of validation differs."
    ]
  };
</script>

<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { BrandTheme, Field, MockButton } from "../mock";

  let { variant = "a" }: VisualProps = $props();
</script>

<BrandTheme brand="editorial">
  <div class="card">
    <p class="title">Create your account</p>
    <Field label="Full name" value="Camille Durand" />
    {#if variant === "a"}
      <Field label="Email" value="camille.du" state="error" message="Enter a valid email address." />
    {:else}
      <Field label="Email" value="camille.du" state="focus" />
    {/if}
    <Field label="Password" type="password" placeholder="At least 8 characters" />
    <MockButton variant="primary" block>Create account</MockButton>
  </div>
</BrandTheme>

<style lang="scss">
  .card {
    display: grid;
    gap: 14px;
    width: 300px;
    padding: 20px;
    border: 1px solid var(--mock-border);
    border-radius: 12px;
    background: var(--mock-surface);
    color: var(--mock-text);
    font-size: 13px;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
  }
</style>
