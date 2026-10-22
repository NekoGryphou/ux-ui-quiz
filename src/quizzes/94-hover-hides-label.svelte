<script lang="ts">
    import type {VisualProps} from "../engine/types/quiz.types";
    import {BrandTheme} from "../mock";

    let { variant = "a" }: VisualProps = $props();
</script>

<BrandTheme brand="playful">
  <div class="card">
    <span class="card__kicker">LIVE · 14 JUNE</span>
    <p class="card__title">Neon Harbour — Summer tour</p>
    <p class="card__meta">Arena du Port · doors 19:00 · from €39</p>
    <span class="cta" class:cta--good={variant === "b"}>
      Get tickets
      <svg class="cta__cursor" viewBox="0 0 20 24" aria-hidden="true">
        <path
          d="M3 2.5 L16.5 14 L10.4 14.6 L13.6 21 L10.8 22.3 L7.7 15.9 L3 20 Z"
          fill="#6f52ff"
          stroke="#ffffff"
          stroke-width="1.6"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  </div>
</BrandTheme>

<style lang="scss">
  .card {
    display: grid;
    gap: 8px;
    width: 300px;
    padding: 22px;
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);
    color: var(--mock-text);
    box-shadow: var(--mock-shadow-md);

    &__kicker {
      color: var(--mock-primary);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.1em;
    }

    &__title {
      font-size: 18px;
      font-weight: 800;
    }

    &__meta {
      color: var(--mock-muted);
      font-size: 13px;
    }
  }

  .cta {
    position: relative;
    margin-top: 8px;
    padding: 14px;
    border-radius: 999px;
    background: linear-gradient(90deg, #ffe9f0, #fff7fa);
    color: #ffffff;
    font-size: 15px;
    font-weight: 800;
    text-align: center;
    box-shadow: 0 0 0 3px rgb(201 36 82 / 0.15);

    &--good {
      background: linear-gradient(90deg, #8f1238, #b01e47);
    }

    &__cursor {
      position: absolute;
      right: 70px;
      bottom: -10px;
      width: 20px;
      height: 24px;
      filter: drop-shadow(0 2px 3px rgb(17 17 63 / 0.35));
    }
  }
</style>
