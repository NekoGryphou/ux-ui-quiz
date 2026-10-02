<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "focus-indicator",
    title: "Where is the keyboard?",
    principle: "Make keyboard focus clearly visible",
    scenario:
      "A keyboard user tabs through a settings dialog. In both versions, keyboard focus is currently on the Save button.",
    prompt: "Which version shows keyboard focus better?",
    kind: "compare",
    correct: ["b"],
    links: [wcag("2.4.7", "Focus Visible", "focus-visible"), wcag("2.4.13", "Focus Appearance", "focus-appearance")],
    explanation: [
      "A slightly darker button is almost impossible to spot, so keyboard users lose track of where they are (WCAG 2.4.7 Focus Visible).",
      "A solid ring with a gap around the control stands out on any background. Aim for at least 3:1 contrast against its surroundings, as WCAG 2.4.13 Focus Appearance recommends.",
      "Never remove the browser outline without putting a stronger indicator in its place."
    ]
  };
</script>

<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { Switch } from "../mock";

  let { variant = "a" }: VisualProps = $props();
</script>

<div class="card">
  <p class="title">Notifications</p>
  <div class="list">
    <Switch label="Email digest" checked />
    <Switch label="Push alerts" />
  </div>
  <div class="actions">
    <span class="button">Cancel</span>
    <span class="button button--primary button--focus-{variant}">Save</span>
  </div>
</div>

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

  .list {
    display: grid;
    gap: 14px;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .button {
    padding: 8px 16px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius);
    font-weight: 500;

    &--primary {
      border-color: transparent;
      background: var(--mock-primary);
      color: var(--mock-on-accent);
    }

    &--focus-a {
      background: #1f57d1;
    }

    &--focus-b {
      outline: 3px solid #1b1d23;
      outline-offset: 3px;
    }
  }
</style>
