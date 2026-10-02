<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "switch-in-form",
    title: "Applied now, or on Save?",
    principle: "Use switches for instant changes and checkboxes in forms you save",
    scenario: "An admin reviews the team’s email notifications and plans to save every change at once.",
    prompt: "Which version fits this form better?",
    kind: "compare",
    correct: ["b"],
    explanation: [
      "A switch reads like a light switch: flip it and the change is done. Next to a Save button, users can’t tell whether a flipped switch already applied, and some leave without saving.",
      "Use checkboxes when changes wait for a Save or Submit button. Keep switches for settings that take effect immediately, with no button to press.",
      "Both versions offer the same options, states and buttons; only the control type differs."
    ]
  };
</script>

<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { BrandTheme, Checkbox, MockButton, Switch } from "../mock";
  import type { NotificationOption } from "./types/quiz-mocks.types";

  let { variant = "a" }: VisualProps = $props();

  const options: NotificationOption[] = [
    { label: "New sign-ups", checked: true },
    { label: "Failed payments", checked: true },
    { label: "Weekly summary", checked: false },
    { label: "Product updates", checked: false }
  ];
</script>

<BrandTheme brand="fintech">
  <div class="card">
    <div>
      <p class="title">Team notifications</p>
      <p class="subtitle">Choose which emails your team receives.</p>
    </div>
    <div class="options">
      {#each options as option (option.label)}
        {#if variant === "a"}
          <Switch label={option.label} checked={option.checked} />
        {:else}
          <Checkbox label={option.label} checked={option.checked} />
        {/if}
      {/each}
    </div>
    <div class="actions">
      <MockButton variant="secondary">Cancel</MockButton>
      <MockButton variant="primary">Save preferences</MockButton>
    </div>
  </div>
</BrandTheme>

<style lang="scss">
  .card {
    display: grid;
    gap: 16px;
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

  .subtitle {
    color: var(--mock-muted);
  }

  .options {
    display: grid;
    gap: 12px;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
</style>
