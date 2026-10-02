<script lang="ts">
  import type { EmptyStateProps } from "./types/empty-state.types";
  import Icon from "../components/Icon.svelte";

  let { icon = "inbox", title, body, children }: EmptyStateProps = $props();
</script>

<div class="empty">
  <span class="empty__icon"><Icon name={icon} size={22} /></span>
  <strong>{title}</strong>
  {#if body}<span class="empty__body">{body}</span>{/if}
  {#if children}<div class="empty__actions">{@render children()}</div>{/if}
</div>

<style lang="scss">
  .empty {
    display: grid;
    justify-items: center;
    gap: 6px;
    padding: 32px 20px;
    text-align: center;

    &__icon {
      display: grid;
      place-items: center;
      width: 44px;
      height: 44px;
      margin-bottom: 6px;
      border-radius: 12px;
      background: var(--mock-fill);
      color: var(--mock-muted);
    }

    strong {
      font-size: 14px;
      font-weight: 600;
    }

    &__body {
      max-width: 34ch;
      color: var(--mock-muted);
    }

    &__actions {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }
  }
</style>
