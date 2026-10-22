<script lang="ts">
    import Icon from "../components/Icon.svelte";
    import type {ModalProps} from "./types/modal.types";

    let { title, closable = true, floating = false, children, actions }: ModalProps = $props();
</script>

<div class="overlay" class:overlay--floating={floating}>
  <div class="modal">
    <div class="modal__head">
      <strong>{title}</strong>
      {#if closable}<Icon name="x" size={16} />{/if}
    </div>
    {#if children}<div class="modal__body">{@render children()}</div>{/if}
    {#if actions}<div class="modal__actions">{@render actions()}</div>{/if}
  </div>
</div>

<style lang="scss">
  .overlay {
    display: grid;
    place-items: center;
    min-height: 320px;
    padding: 32px 20px;
    background: var(--mock-overlay);

    &--floating {
      position: absolute;
      inset: 0;
      min-height: 0;
      backdrop-filter: blur(1.5px);
    }
  }

  .modal {
    display: grid;
    gap: 14px;
    width: min(100%, 400px);
    padding: 20px;
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);
    box-shadow: var(--mock-shadow-lg);

    &__head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      color: var(--mock-muted);

      strong {
        color: var(--mock-text);
        // noinspection CssNoGenericFontName
        font-family: var(--mock-heading-font);
        font-size: 16px;
        font-weight: var(--mock-heading-weight);
      }
    }

    &__body {
      display: grid;
      gap: 10px;
      color: var(--mock-muted);
    }

    &__actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding-top: 4px;
    }
  }
</style>
