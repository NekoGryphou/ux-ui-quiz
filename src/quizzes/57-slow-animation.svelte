<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "slow-animation",
    title: "The menu that takes a bow",
    principle: "Keep interface animation short and purposeful",
    scenario: "A commuter opens this app’s menu many times a day to jump between sections. Watch the menu open.",
    prompt: "Which version’s animation works better?",
    kind: "compare",
    correct: ["b"],
    explanation: [
      "A 1.4-second elastic drop with bounces is fun once, then it becomes a wait: every visit to the menu costs over a second, and the overshoot makes items jump around while you try to tap them.",
      "Keep interface transitions around 150–300 ms with a gentle ease-out, and use motion to explain what happened (the menu comes from the button), not to entertain. Respect the reduced-motion setting.",
      "Both versions open the same menu from the same place; only the duration and easing differ."
    ]
  };
</script>

<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { Icon, PhoneShell } from "../mock";

  let { variant = "a" }: VisualProps = $props();

  const items: string[] = ["Home", "Timetables", "My tickets", "Saved trips", "Settings"];
</script>

<PhoneShell>
  <div class="app">
    <div class="app__bar">
      <span class="app__menu"><Icon name="menu" size={20} /> Menu</span>
      <span class="app__logo">rail·go</span>
    </div>
    <div class="sheet" class:sheet--slow={variant === "a"}>
      {#each items as item (item)}
        <span class="sheet__item">{item}</span>
      {/each}
    </div>
    <div class="app__content">
      <p class="app__title">Next departures</p>
      {#each ["08:12 · Lyon Part-Dieu", "08:26 · Grenoble", "08:41 · Annecy"] as row (row)}
        <span class="app__row">{row}</span>
      {/each}
    </div>
  </div>
</PhoneShell>

<style lang="scss">
  .app {
    position: relative;
    min-height: 520px;
    overflow: hidden;

    &__bar {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background: var(--mock-surface);
      border-bottom: 1px solid var(--mock-border);
    }

    &__menu {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-weight: 600;
    }

    &__logo {
      color: var(--mock-primary);
      font-weight: 800;
    }

    &__content {
      display: grid;
      gap: 10px;
      padding: 18px 16px;
    }

    &__title {
      font-size: 16px;
      font-weight: 600;
    }

    &__row {
      padding: 12px;
      border: 1px solid var(--mock-border);
      border-radius: 10px;
      background: var(--mock-surface);
    }
  }

  .sheet {
    position: absolute;
    top: 45px;
    right: 0;
    left: 0;
    z-index: 1;
    display: grid;
    padding: 8px 0;
    background: var(--mock-surface);
    box-shadow: var(--mock-shadow-md);
    transform-origin: top;
    animation: quick 4s ease-out infinite;

    &--slow {
      animation-name: slow;
      animation-timing-function: linear;
    }

    &__item {
      padding: 12px 18px;
      font-weight: 500;
    }
  }

  @keyframes quick {
    0%,
    20% {
      transform: translateY(-110%);
    }
    25%,
    85% {
      transform: translateY(0);
    }
    90%,
    100% {
      transform: translateY(-110%);
    }
  }

  @keyframes slow {
    0%,
    20% {
      transform: translateY(-110%);
    }
    35% {
      transform: translateY(14%);
    }
    42% {
      transform: translateY(-8%);
    }
    49% {
      transform: translateY(5%);
    }
    55% {
      transform: translateY(0);
    }
    85% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-110%);
    }
  }
</style>
