<script lang="ts">
  import { quizzes } from "../quizzes";
  import { DEBUG_CODE } from "./const/debug.const";
  import { router } from "./router.svelte";
  import { debugRun } from "./session";

  let visible: boolean = $state(false);
  let sequence: string[] = [];
  let selected: string = $state(quizzes[0]?.id ?? "");
  let menu: HTMLDetailsElement | undefined = $state();

  /**
   * @private
   * @desc Reveals the menu after the debug key sequence.
   *
   * @param event - Window key press.
   */
  const onKeydown = (event: KeyboardEvent): void => {
    if (visible || event.repeat) return;
    if (
      event.ctrlKey ||
      event.metaKey ||
      event.altKey ||
      (event.target instanceof Element &&
        event.target.closest("input, textarea, select, [contenteditable]:not([contenteditable='false'])") !== null)
    ) {
      sequence = [];
      return;
    }
    sequence.push(event.key.toLowerCase());
    while (sequence.length > 0 && !sequence.every((key, index) => key === DEBUG_CODE[index])) sequence.shift();
    if (sequence.length === 0) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (sequence.length === DEBUG_CODE.length) {
      sequence = [];
      visible = true;
    }
  };

  /**
   * @private
   * @desc Hides the menu until the code is entered again.
   */
  const hide = (): void => {
    visible = false;
    sequence = [];
  };

  /**
   * @private
   * @desc Opens the selected question in the temporary debug run.
   *
   * @param event - Picker submission.
   */
  const go = (event: SubmitEvent): void => {
    event.preventDefault();
    const index: number = debugRun?.order.findIndex((quiz) => quiz.id === selected) ?? -1;
    if (index < 0) return;
    if (menu !== undefined) menu.open = false;
    router.navigate(`#/debug/${String(index + 1)}`);
  };
</script>

<svelte:window onkeydowncapture={onKeydown} />

{#if visible}
  <details class="debug-menu" bind:this={menu} open>
    <summary>Debug</summary>
    <form onsubmit={go}>
      <label for="debug-question">Jump to question</label>
      <select id="debug-question" bind:value={selected}>
        {#each quizzes as quiz, index (quiz.id)}
          <option value={quiz.id}>{index + 1}. {quiz.title}</option>
        {/each}
      </select>
      <button type="submit">Go</button>
      <button type="button" onclick={hide}>Hide debug</button>
    </form>
  </details>
{/if}

<style lang="scss">
  .debug-menu {
    position: fixed;
    right: var(--space-4);
    bottom: var(--space-4);
    z-index: var(--z-header);
    max-width: calc(100vw - 2 * var(--space-4));
    padding: var(--space-3);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-md);
    background: var(--surface);
    color: var(--text);

    summary {
      cursor: pointer;
    }

    form {
      display: grid;
      gap: var(--space-2);
      margin-top: var(--space-3);
    }

    select {
      width: 100%;
      min-width: 0;
      max-width: 24rem;
    }

    select,
    button {
      padding: var(--space-2);
      border: 1px solid var(--control-border);
      border-radius: var(--radius-md);
      background: var(--surface);
      color: inherit;
      font: inherit;
    }
  }
</style>
