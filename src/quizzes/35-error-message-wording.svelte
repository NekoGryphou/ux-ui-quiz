<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "error-message-wording",
    title: "An error that explains itself",
    principle: "Say what went wrong and how to fix it",
    scenario: "A customer schedules a grocery delivery and picks a date that isn’t available.",
    prompt: "Which error message works better?",
    kind: "compare",
    correct: ["b"],
    links: [wcag("3.3.3", "Error Suggestion", "error-suggestion")],
    explanation: [
      "A status code and “invalid input” tell the customer something failed, but not what or what to do next.",
      "A good error names the problem in the user’s words and gives the way out: which dates work, with an example (WCAG 3.3.3 Error Suggestion).",
      "Both versions place the message under the field and mark it with color and an icon; only the wording differs."
    ]
  };
</script>

<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { BrandTheme, Field, MockButton } from "../mock";

  let { variant = "a" }: VisualProps = $props();
</script>

<BrandTheme brand="brutalist">
  <div class="card">
    <p class="title">Schedule delivery</p>
    <Field
      label="Delivery date"
      value="Today, 14 May"
      state="error"
      message={variant === "a"
        ? "Error 422: invalid input."
        : "Same-day delivery isn’t available. Pick a date from 15 May onwards."}
    />
    <Field label="Time slot" type="select" value="18:00 – 20:00" />
    <MockButton variant="primary" block>Confirm delivery</MockButton>
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
