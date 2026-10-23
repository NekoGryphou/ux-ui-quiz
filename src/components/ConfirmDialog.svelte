<script lang="ts">
  import { t } from "../shared/locale.svelte";
  import Button from "./Button.svelte";
  import type { ConfirmDialogProps } from "./types/confirm-dialog.types";

  let { title, body, confirmLabel, open = $bindable(false), onconfirm }: ConfirmDialogProps = $props();

  const uid: string = $props.id();

  let dialog: HTMLDialogElement | undefined = $state();

  /**
   * @private
   * @desc Hides the dialog without confirming, also after Escape.
   */
  const close = (): void => {
    open = false;
  };

  /**
   * @private
   * @desc Hides the dialog and runs the confirmed action.
   */
  const confirm = (): void => {
    open = false;
    onconfirm();
  };

  $effect(() => {
    if (dialog === undefined) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  });
</script>

<dialog class="confirm" bind:this={dialog} aria-labelledby="{uid}-title" aria-describedby="{uid}-body" onclose={close}>
  <h2 id="{uid}-title">{title}</h2>
  <p id="{uid}-body">{body}</p>
  <div class="confirm__actions">
    <Button onclick={close}>{t("Cancel", "Annuler")}</Button>
    <Button variant="danger" onclick={confirm}>{confirmLabel}</Button>
  </div>
</dialog>

<style lang="scss">
  .confirm {
    width: min(100% - 2 * var(--space-4), 400px);
    padding: var(--space-5);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--surface);
    box-shadow: var(--shadow-lg);
    color: var(--text);
    text-align: left;

    &::backdrop {
      background: rgb(0 0 0 / 0.45);
    }

    h2 {
      font-size: var(--text-lg);
    }

    p {
      margin-top: var(--space-2);
      color: var(--text-muted);
      font-size: var(--text-sm);
    }

    &__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: var(--space-3);
      margin-top: var(--space-5);
    }
  }
</style>
