<script lang="ts">
  import { BrandTheme, BrowserShell, Spinner } from "../mock";
  import type { FilterGroup } from "./types/quiz-mocks.types";

  const hues: number[] = [200, 140, 20, 260, 45, 330];
  const groups: FilterGroup[] = [
    {
      title: "Size",
      items: [
        { label: "42 (31)", step: 0 },
        { label: "43 (28)", step: 1 },
        { label: "44 (25)", step: 0 }
      ]
    },
    {
      title: "Brand",
      items: [
        { label: "Altra (12)", step: 0 },
        { label: "Hoka (19)", step: 0 },
        { label: "Salix (9)", step: 2 }
      ]
    },
    {
      title: "Colour",
      items: [
        { label: "Blue (14)", step: 3 },
        { label: "Black (22)", step: 0 }
      ]
    }
  ];
</script>

<BrandTheme brand="eco">
  <BrowserShell url="trailstore.com/shoes">
    <div class="shop">
      <aside class="filters">
        {#each groups as group (group.title)}
          <p class="filters__title">{group.title}</p>
          {#each group.items as item (item.label)}
            <span class="filter">
              <span class="filter__box filter__box--step{item.step}"></span>
              {item.label}
              {#if item.step > 0}
                <span class="cursor cursor--step{item.step}" aria-hidden="true">
                  <span class="cursor__ripple"></span>
                  <svg viewBox="0 0 20 24" class="cursor__arrow">
                    <path
                      d="M3 2.5 L16.5 14 L10.4 14.6 L13.6 21 L10.8 22.3 L7.7 15.9 L3 20 Z"
                      fill="#6f52ff"
                      stroke="#ffffff"
                      stroke-width="1.6"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              {/if}
            </span>
          {/each}
        {/each}
      </aside>
      <div class="results">
        <p class="results__title">Trail shoes</p>
        <div class="results__grid">
          {#each hues as hue (hue)}
            <span class="card" style:background="hsl({hue} 45% 80%)"><i style:background="hsl({hue} 50% 42%)"></i></span
            >
          {/each}
        </div>
      </div>
      <div class="reload" aria-hidden="true"><Spinner /></div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  $loop: 12s;

  .shop {
    position: relative;
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 18px;
    padding: 18px;
  }

  .filters {
    display: grid;
    align-content: start;
    gap: 6px;
    font-size: 12px;

    &__title {
      margin-top: 6px;
      font-weight: 700;
    }
  }

  .filter {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;

    &__box {
      position: relative;
      width: 15px;
      height: 15px;
      border: 1.5px solid var(--mock-control-border);
      border-radius: var(--mock-radius-check);
      background: var(--mock-surface);

      &::after {
        content: "✓";
        position: absolute;
        inset: -1.5px;
        display: grid;
        place-items: center;
        border-radius: inherit;
        background: var(--mock-primary);
        color: var(--mock-on-accent);
        font-size: 11px;
        font-weight: 700;
        opacity: 0;
      }

      &--step1::after {
        animation: tick1 $loop steps(1) infinite;
      }

      &--step2::after {
        animation: tick2 $loop steps(1) infinite;
      }

      &--step3::after {
        animation: tick3 $loop steps(1) infinite;
      }
    }
  }

  .cursor {
    position: absolute;
    top: calc(50% - 2.5px);
    left: 4.5px;
    z-index: 2;
    width: 20px;
    height: 24px;
    opacity: 0;
    pointer-events: none;

    &__arrow {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      filter: drop-shadow(0 2px 3px rgb(17 17 63 / 0.35));
    }

    &__ripple {
      position: absolute;
      top: -6px;
      left: -6px;
      width: 18px;
      height: 18px;
      border: 2px solid #6f52ff;
      border-radius: 50%;
      opacity: 0;
    }

    &--step1 {
      animation: point1 $loop ease-out infinite;
    }

    &--step2 {
      animation: point2 $loop ease-out infinite;
    }

    &--step3 {
      animation: point3 $loop ease-out infinite;
    }

    &--step1 &__ripple {
      animation: ripple1 $loop ease-out infinite;
    }

    &--step2 &__ripple {
      animation: ripple2 $loop ease-out infinite;
    }

    &--step3 &__ripple {
      animation: ripple3 $loop ease-out infinite;
    }
  }

  .results {
    display: grid;
    align-content: start;
    gap: 12px;

    &__title {
      font-weight: 700;
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
  }

  .card {
    display: grid;
    place-items: center;
    height: 110px;
    border-radius: var(--mock-radius);

    i {
      width: 60%;
      height: 26px;
      border-radius: 40% 60% 20% 20% / 70% 70% 30% 30%;
    }
  }

  .reload {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    background: var(--mock-surface);
    opacity: 0;
    animation: reload $loop steps(1) infinite;
  }

  @keyframes tick1 {
    0% {
      opacity: 0;
    }
    16%,
    100% {
      opacity: 1;
    }
  }

  @keyframes ripple1 {
    0%,
    15.5% {
      opacity: 0;
      transform: scale(0.4);
    }
    16% {
      opacity: 1;
      transform: scale(0.6);
    }
    19%,
    100% {
      opacity: 0;
      transform: scale(1.8);
    }
  }

  @keyframes point1 {
    0%,
    6% {
      opacity: 0;
      translate: 60px 30px;
    }
    8% {
      opacity: 1;
    }
    14%,
    21% {
      opacity: 1;
      translate: 0 0;
    }
    22%,
    100% {
      opacity: 0;
      translate: 0 0;
    }
  }

  @keyframes tick2 {
    0% {
      opacity: 0;
    }
    43%,
    100% {
      opacity: 1;
    }
  }

  @keyframes ripple2 {
    0%,
    42.5% {
      opacity: 0;
      transform: scale(0.4);
    }
    43% {
      opacity: 1;
      transform: scale(0.6);
    }
    46%,
    100% {
      opacity: 0;
      transform: scale(1.8);
    }
  }

  @keyframes point2 {
    0%,
    33% {
      opacity: 0;
      translate: 60px 30px;
    }
    35% {
      opacity: 1;
    }
    41%,
    48% {
      opacity: 1;
      translate: 0 0;
    }
    49%,
    100% {
      opacity: 0;
      translate: 0 0;
    }
  }

  @keyframes tick3 {
    0% {
      opacity: 0;
    }
    70%,
    100% {
      opacity: 1;
    }
  }

  @keyframes ripple3 {
    0%,
    69.5% {
      opacity: 0;
      transform: scale(0.4);
    }
    70% {
      opacity: 1;
      transform: scale(0.6);
    }
    73%,
    100% {
      opacity: 0;
      transform: scale(1.8);
    }
  }

  @keyframes point3 {
    0%,
    60% {
      opacity: 0;
      translate: 60px 30px;
    }
    62% {
      opacity: 1;
    }
    68%,
    75% {
      opacity: 1;
      translate: 0 0;
    }
    76%,
    100% {
      opacity: 0;
      translate: 0 0;
    }
  }

  @keyframes reload {
    0%,
    21% {
      opacity: 0;
    }
    22%,
    34% {
      opacity: 1;
    }
    35%,
    48% {
      opacity: 0;
    }
    49%,
    61% {
      opacity: 1;
    }
    62%,
    75% {
      opacity: 0;
    }
    76%,
    88% {
      opacity: 1;
    }
    89%,
    100% {
      opacity: 0;
    }
  }
</style>
