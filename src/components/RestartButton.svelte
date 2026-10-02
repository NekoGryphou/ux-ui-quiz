<script lang="ts">
  import type { RestartButtonProps } from "./types/restart-button.types";
  import { href, navigate } from "../app/utils/router.utils";
  import { session } from "../engine/session.svelte";
  import Button from "./Button.svelte";

  let { variant = "secondary", size = "md" }: RestartButtonProps = $props();

  let dialog: HTMLDialogElement | undefined = $state();

  const open = (): void => {
    dialog?.showModal();
  };

  const close = (): void => {
    dialog?.close();
  };

  const confirm = (): void => {
    close();
    session.restart();
    navigate(href.quiz("main", 0));
  };
</script>

<Button {variant} {size} iconStart="refresh" onclick={open}>Start over</Button>

<dialog class="confirm" bind:this={dialog} aria-labelledby="restart-title" aria-describedby="restart-body">
  <h2 id="restart-title">Start over?</h2>
  <p id="restart-body">
    Your {session.main.answeredCount}
    {session.main.answeredCount === 1 ? "answer" : "answers"} and score will be cleared, and the options reshuffled.
  </p>
  <div class="confirm__actions">
    <Button onclick={close}>Cancel</Button>
    <Button variant="danger" onclick={confirm}>Clear progress</Button>
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
