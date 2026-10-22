<script lang="ts">
  import type { SwitchProps } from "./types/switch.types";

  let { label, checked = false, hint, subtle = false }: SwitchProps = $props();
</script>

<div class="switch-row">
  <span class="switch-row__copy">
    <span>{label}</span>
    {#if hint}<small>{hint}</small>{/if}
  </span>
  <span class="switch" class:switch--on={checked} class:switch--subtle={subtle}><i></i></span>
</div>

<style lang="scss">
  .switch-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    &__copy {
      display: grid;

      small {
        font-size: 12px;
        color: var(--mock-muted);
      }
    }
  }

  .switch {
    position: relative;
    flex: none;
    width: 36px;
    height: 20px;
    border-radius: var(--mock-radius-pill);
    background: var(--mock-control-track);

    i {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--mock-surface);
      box-shadow: 0 1px 2px rgb(0 0 0 / 0.2);
    }

    &--on {
      background: var(--mock-primary);

      i {
        left: 18px;
      }
    }

    &--subtle,
    &--subtle.switch--on {
      background: #cfd3da;
    }
  }
</style>
