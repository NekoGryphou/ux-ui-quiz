<script lang="ts">
  import { href, navigate } from "../app/utils/router.utils";
  import { session } from "../engine/session.svelte";
  import { quizzes } from "../quizzes";

  let open: boolean = $state(false);

  const toggleOpen = (): void => {
    open = !open;
  };

  const go = (quizId: string): void => {
    const index: number = session.main.orderIds.indexOf(quizId);
    if (index >= 0) {
      navigate(href.quiz("main", index));
      return;
    }
    session.startFocus(quizId);
    navigate(href.quiz("practice", 0));
  };
</script>

<div class="debug">
  <button type="button" onclick={toggleOpen}>{open ? "Close debug" : "Debug"}</button>
  {#if open}
    <button
      type="button"
      onclick={(): void => {
        session.setFixedOrder(!session.fixedOrder);
      }}
    >
      Question order: {session.fixedOrder ? "fixed (all, file order)" : "random (30)"}
    </button>
    <ol>
      {#each quizzes as quiz, index (quiz.id)}
        <li>
          <button
            type="button"
            onclick={(): void => {
              go(quiz.id);
            }}
          >
            {index + 1}. [{quiz.kind}] {quiz.id}{session.main.orderIds.includes(quiz.id)
              ? ` · run #${String(session.main.orderIds.indexOf(quiz.id) + 1)}`
              : ""}{session.main.answers[quiz.id]?.submitted === true ? " ✓" : ""}
          </button>
        </li>
      {/each}
    </ol>
  {/if}
</div>

<style lang="scss">
  .debug {
    position: fixed;
    right: 8px;
    bottom: 8px;
    z-index: 100;
    max-height: 70vh;
    overflow: auto;
    padding: 6px;
    border: 1px solid #888;
    background: #fff;
    color: #000;
    font: 12px/1.4 monospace;

    ol {
      margin: 6px 0 0;
      padding-left: 22px;
    }

    button {
      font: inherit;
      text-align: left;
      cursor: pointer;
    }
  }
</style>
