<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "confirm-chain",
    title: "Are you sure you’re sure?",
    principle: "Save confirmations for actions that need them",
    scenario: "An office assistant closes the stock spreadsheet tool at the end of the day, after saving their work.",
    prompt: "What is the main issue with this exit?",
    kind: "single",
    choices: [
      {
        id: "a",
        text: "Closing a saved file triggers three confirmations in a row, so people click Yes without reading."
      },
      { id: "b", text: "Each dialog has a warning icon, where a question mark icon would match the questions better." },
      {
        id: "c",
        text: "The dialogs use Yes and No, where buttons naming each action would be clearer to scan quickly."
      },
      {
        id: "d",
        text: "The dialogs stack on top of each other, where replacing each one would keep the screen tidier."
      }
    ],
    correct: ["a"],
    explanation: [
      "The work is saved and closing loses nothing, yet the tool asks three times. Users learn that these dialogs never matter, click through them by reflex, and will do the same on the day a warning is real.",
      "Confirm only actions that are destructive and can’t be undone, and say what will be lost. For everything else, just do it, or offer undo.",
      "The icons, the Yes/No wording and the stacking would each be worth polishing, but none of them is the core problem: the questions shouldn’t be asked at all."
    ]
  };
</script>

<script lang="ts">
  import { RetroButton, RetroWindow } from "../mock";
</script>

<div class="desk">
  <div class="desk__app">
    <RetroWindow title="StockMaster 97 - INVENTORY.XLS" menu={["File", "Edit", "View", "Data", "Help"]} width={520}>
      <div class="sheet">
        {#each Array.from({ length: 8 }, (_, i) => i) as row (row)}
          <div class="sheet__row">
            {#each Array.from({ length: 6 }, (_, i) => i) as cell (cell)}
              <span>{row === 0 ? "ABCDEF"[cell] : cell === 0 ? String(row) : ""}</span>
            {/each}
          </div>
        {/each}
      </div>
    </RetroWindow>
  </div>
  <div class="dialog dialog--1">
    <RetroWindow title="StockMaster 97" width={300}>
      <div class="dialog__body">
        <span class="dialog__icon">!</span>
        <p>Are you sure you want to exit StockMaster?</p>
      </div>
      <div class="dialog__actions"><RetroButton primary>Yes</RetroButton><RetroButton>No</RetroButton></div>
    </RetroWindow>
  </div>
  <div class="dialog dialog--2">
    <RetroWindow title="StockMaster 97" width={300}>
      <div class="dialog__body">
        <span class="dialog__icon">!</span>
        <p>All windows will be closed. Continue?</p>
      </div>
      <div class="dialog__actions"><RetroButton primary>Yes</RetroButton><RetroButton>No</RetroButton></div>
    </RetroWindow>
  </div>
  <div class="dialog dialog--3">
    <RetroWindow title="StockMaster 97" width={300}>
      <div class="dialog__body">
        <span class="dialog__icon">!</span>
        <p>Really exit? Your work has been saved.</p>
      </div>
      <div class="dialog__actions"><RetroButton primary>Yes</RetroButton><RetroButton>No</RetroButton></div>
    </RetroWindow>
  </div>
</div>

<style lang="scss">
  @use "$styles/mixins" as *;

  .desk {
    position: relative;
    width: 600px;
    height: 400px;
    padding: 16px;
    background: #008080;
  }

  .sheet {
    display: grid;
    @include retro-sunken;

    &__row {
      display: grid;
      grid-template-columns: 30px repeat(5, 1fr);

      span {
        height: 20px;
        border-right: 1px solid var(--mock-retro-soft);
        border-bottom: 1px solid var(--mock-retro-soft);
        font-size: 10px;
        text-align: center;
      }

      &:first-child span,
      span:first-child {
        background: var(--mock-retro-face);
      }
    }
  }

  .dialog {
    position: absolute;

    &--1 {
      top: 100px;
      left: 120px;
    }

    &--2 {
      top: 150px;
      left: 170px;
    }

    &--3 {
      top: 200px;
      left: 220px;
    }

    &__body {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 8px;
    }

    &__icon {
      display: grid;
      flex: none;
      place-items: center;
      width: 32px;
      height: 32px;
      clip-path: polygon(50% 0, 100% 100%, 0 100%);
      background: #ffd400;
      color: #000000;
      font-weight: 700;
      padding-top: 8px;
    }

    &__actions {
      display: flex;
      justify-content: center;
      gap: 8px;
      padding-bottom: 6px;
    }
  }
</style>
