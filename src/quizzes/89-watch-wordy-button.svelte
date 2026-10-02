<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "watch-wordy-button",
    title: "A paragraph on your wrist",
    principle: "Write for the smallest screen it will appear on",
    scenario: "A cyclist glances at their watch at a red light when a delivery notification arrives.",
    prompt: "What is the main issue with this notification?",
    kind: "single",
    choices: [
      { id: "a", text: "The message and buttons are full sentences, cut off on a screen read in a glance." },
      { id: "b", text: "The card is white, where a dark card would save battery on the watch screen." },
      { id: "c", text: "The app icon sits at the top, where a smaller icon would leave more room for text." },
      { id: "d", text: "The action is a round button, where a text link would take less room on the face." }
    ],
    correct: ["a"],
    explanation: [
      "The text was written for a phone: on a watch, the message and the buttons are truncated mid-word, and the cyclist has two seconds at a red light to guess what the action button will do.",
      "Write watch notifications as a headline people can read in a glance (“Parcel at the door”), with one or two very short actions (“Leave”, “Reschedule”). Put the details in the phone app.",
      "A light card, an app icon and a single action button are the normal watch patterns."
    ]
  };
</script>

<div class="watch">
  <span class="watch__strap watch__strap--top"></span>
  <div class="watch__case">
    <span class="watch__crown"></span>
    <div class="watch__face">
      <div class="watch__header">
        <span class="watch__courier">🚚</span>
        <span class="watch__badge">📦</span>
      </div>
      <div class="watch__card">
        <p class="watch__app">ParcelGo</p>
        <p class="watch__msg">Your courier is approaching your delivery address and will attempt deliv…</p>
      </div>
      <div class="watch__action">
        <span class="watch__btn">Leave the parcel with a neighbo…</span>
      </div>
      <span class="watch__dots"><i class="on"></i><i></i><i></i></span>
    </div>
  </div>
  <span class="watch__strap watch__strap--bottom"></span>
</div>

<style lang="scss">
  .watch {
    display: grid;
    justify-items: center;

    &__strap {
      width: 132px;
      height: 130px;
      border-right: 8px solid #6e6e6e;
      border-left: 8px solid #6e6e6e;
      background: #232323;
      box-shadow: 0 2px 6px rgb(0 0 0 / 0.35);
    }

    &__case {
      position: relative;
      z-index: 1;
      margin: -44px 0;
      padding: 10px;
      border-radius: 50%;
      background: #949494;
      box-shadow:
        0 4px 10px rgb(0 0 0 / 0.35),
        inset 0 0 0 2px #a8a8a8;
    }

    &__crown {
      position: absolute;
      top: calc(50% - 8px);
      right: -10px;
      width: 12px;
      height: 16px;
      border-radius: 3px;
      background: #7a7a7a;
    }

    &__face {
      position: relative;
      display: grid;
      grid-template-rows: 76px auto 1fr;
      width: 236px;
      height: 236px;
      overflow: hidden;
      border: 6px solid #4a4a4a;
      border-radius: 50%;
      background: #f2f2f2;
      color: #212121;
      font-family: "Roboto", var(--font-mock);
    }

    &__header {
      position: relative;
      display: grid;
      place-items: center;
      background: linear-gradient(160deg, #ffcc80, #fb8c00);
    }

    &__courier {
      font-size: 34px;
    }

    &__badge {
      position: absolute;
      right: 34px;
      bottom: -16px;
      display: grid;
      place-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #ff9800;
      box-shadow: 0 2px 4px rgb(0 0 0 / 0.3);
      font-size: 15px;
    }

    &__card {
      padding: 10px 30px 0;
      background: #ffffff;
    }

    &__app {
      color: #6b6b6b;
      font-size: 12px;
    }

    &__msg {
      display: -webkit-box;
      overflow: hidden;
      font-size: 15px;
      line-height: 1.25;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    &__action {
      display: grid;
      place-items: start center;
      padding: 8px 34px 0;
      background: #ffffff;
    }

    &__btn {
      width: 100%;
      overflow: hidden;
      padding: 7px 12px;
      border-radius: 999px;
      background: #1f62d6;
      color: #ffffff;
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &__dots {
      position: absolute;
      bottom: 12px;
      left: 50%;
      display: flex;
      gap: 4px;
      translate: -50% 0;

      i {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #cfcfcf;

        &.on {
          background: #2979ff;
        }
      }
    }
  }
</style>
