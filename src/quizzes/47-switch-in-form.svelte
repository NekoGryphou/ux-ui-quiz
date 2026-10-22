<script lang="ts">
    import type {VisualProps} from "../engine/types/quiz.types";
    import {BrandTheme, Checkbox, MockButton, Switch} from "../mock";
    import type {NotificationOption} from "./types/quiz-mocks.types";

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
