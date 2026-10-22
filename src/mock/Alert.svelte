<script lang="ts">
    import Icon from "../components/Icon.svelte";
    import {ALERT_ICONS} from "./const/alert.const";
    import type {AlertProps} from "./types/alert.types";

    let { tone = "info", title, body, toast = false, action }: AlertProps = $props();
</script>

<div class="alert alert--{tone}" class:alert--toast={toast}>
  <span class="alert__icon"><Icon name={ALERT_ICONS[tone]} size={15} /></span>
  <span class="alert__copy">
    <strong>{title}</strong>
    {#if body}<span>{body}</span>{/if}
  </span>
  {#if action}<span class="alert__action">{@render action()}</span>{/if}
</div>

<style lang="scss">
  .alert {
    --tone: var(--mock-info);
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 12px;
    border: 1px solid color-mix(in srgb, var(--tone) 30%, transparent);
    border-radius: var(--mock-radius);
    background: color-mix(in srgb, var(--tone) 8%, var(--mock-surface));

    &--success {
      --tone: var(--mock-success);
    }
    &--warning {
      --tone: var(--mock-warning);
    }
    &--danger {
      --tone: var(--mock-danger);
    }

    &--toast {
      border-color: var(--mock-border);
      background: var(--mock-surface);
      box-shadow: var(--mock-shadow-md);
    }

    &__icon {
      display: grid;
      place-items: center;
      margin-top: 1px;
      color: var(--tone);
    }

    &__copy {
      display: grid;
      flex: 1;
      gap: 2px;

      strong {
        font-weight: 600;
      }

      span {
        color: var(--mock-text);
      }
    }

    &__action {
      align-self: center;
    }
  }
</style>
