<script lang="ts">
  import type { CardProps } from "./types/card.types";

  let { title, subtitle, children, actions }: CardProps = $props();
</script>

<section class="card">
  {#if title !== undefined || actions !== undefined}
    <div class="card__head">
      <div>
        {#if title !== undefined}<strong>{title}</strong>{/if}
        {#if subtitle !== undefined}<span>{subtitle}</span>{/if}
      </div>
      {#if actions}<div class="card__actions">{@render actions()}</div>{/if}
    </div>
  {/if}
  {#if children}{@render children()}{/if}
</section>

<style lang="scss">
  .card {
    display: grid;
    gap: 14px;
    padding: 18px;
    border: var(--mock-border-width) solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);

    &__head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;

      div:first-child {
        display: grid;
        gap: 2px;
      }

      strong {
        font-family: var(--mock-heading-font);
        font-size: 15px;
        font-weight: var(--mock-heading-weight);
      }

      span {
        color: var(--mock-muted);
      }
    }

    &__actions {
      display: flex;
      gap: 8px;
    }
  }
</style>
