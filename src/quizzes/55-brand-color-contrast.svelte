<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";

  let { variant = "a" }: VisualProps = $props();
</script>

<div class="card">
  <span class="card__logo">zest!</span>
  <p class="card__title">Fresh news, freshly squeezed</p>
  <p class="card__copy">New flavours and summer pop-ups, once a month. No pulp, no spam.</p>
  <span class="card__field">sam@example.com</span>
  <span class="card__button" class:card__button--dark={variant === "b"}>Squeeze me in</span>
</div>

<style lang="scss">
  .card {
    display: grid;
    gap: 12px;
    width: 300px;
    padding: 24px 22px;
    border-radius: 24px;
    background: #fffaf0;
    color: #3b2400;
    font-family: "Nunito", sans-serif;
    box-shadow: 0 12px 30px rgb(255 180 0 / 0.25);

    &__logo {
      color: #b35800;
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.03em;
    }

    &__title {
      font-size: 18px;
      font-weight: 800;
      line-height: 1.2;
    }

    &__copy {
      color: #6b4a14;
      font-size: 13px;
    }

    &__field {
      padding: 11px 14px;
      border: 2px solid #f5dfae;
      border-radius: 14px;
      background: #ffffff;
      color: #3b2400;
      font-size: 13px;
    }

    &__button {
      padding: 12px;
      border-radius: 999px;
      background: #ffc93c;
      color: #ffffff;
      font-size: 15px;
      font-weight: 800;
      text-align: center;

      &--dark {
        color: #3b2400;
      }
    }
  }
</style>
