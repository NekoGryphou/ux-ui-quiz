<script lang="ts">
    import type {VisualProps} from "../engine/types/quiz.types";
    import {BrandTheme, MockButton, Spinner} from "../mock";

    let { variant = "a" }: VisualProps = $props();
</script>

<BrandTheme brand="fintech">
  <div class="dialog">
    <p class="dialog__title">Exporting “Summer trip.mp4”</p>
    <p class="dialog__meta">1080p · H.264 · 12:04</p>
    {#if variant === "a"}
      <div class="dialog__spin"><Spinner size={32} /><span>Exporting…</span></div>
    {:else}
      <div class="progress">
        <div class="progress__row"><span>Encoding video</span><strong>63%</strong></div>
        <span class="progress__track"><i></i></span>
        <span class="progress__left">About 45 seconds left</span>
      </div>
    {/if}
    <MockButton variant="secondary">Cancel</MockButton>
  </div>
</BrandTheme>

<style lang="scss">
  .dialog {
    display: grid;
    gap: 12px;
    width: 300px;
    padding: 22px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);
    color: var(--mock-text);
    box-shadow: var(--mock-shadow-md);

    &__title {
      font-size: 15px;
      font-weight: 600;
    }

    &__meta {
      color: var(--mock-muted);
      font-size: 12px;
    }

    &__spin {
      display: flex;
      align-items: center;
      gap: 12px;
      height: 56px;
      color: var(--mock-muted);
    }

    :global(.btn) {
      justify-self: end;
    }
  }

  .progress {
    display: grid;
    gap: 6px;
    height: 56px;

    &__row {
      display: flex;
      justify-content: space-between;
    }

    &__track {
      height: 8px;
      border-radius: 999px;
      background: var(--mock-fill);

      i {
        display: block;
        width: 63%;
        height: 100%;
        border-radius: inherit;
        background: var(--mock-primary);
      }
    }

    &__left {
      color: var(--mock-muted);
      font-size: 12px;
    }
  }
</style>
