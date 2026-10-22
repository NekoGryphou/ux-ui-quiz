<script lang="ts">
  import { BrandTheme } from "../mock";
</script>

<BrandTheme brand="playful">
  <div class="page">
    <div class="mascot" aria-hidden="true"><span>🥺</span></div>
    <p class="page__title">Wait… are you sure you want to leave us?</p>
    <p class="page__copy">You’ll miss exclusive deals, early access and up to 40% off your favourite brands.</p>
    <span class="page__keep">Keep me in the loop!</span>
    <span class="page__alt">Send me fewer emails instead</span>
    <span class="page__leave">No thanks, I don’t like saving money</span>
  </div>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    justify-items: center;
    gap: 12px;
    width: 340px;
    padding: 30px 26px;
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);
    color: var(--mock-text);
    text-align: center;
    box-shadow: var(--mock-shadow-md);

    &__title {
      font-size: 20px;
      font-weight: 800;
      line-height: 1.2;
    }

    &__copy {
      color: var(--mock-muted);
    }

    &__keep {
      width: 100%;
      margin-top: 8px;
      padding: 14px;
      border-radius: 999px;
      background: var(--mock-primary);
      color: var(--mock-primary-text);
      font-weight: 800;
    }

    &__alt {
      color: var(--mock-primary);
      font-weight: 700;
    }

    &__leave {
      color: #9b8f95;
      font-size: 11px;
      text-decoration: underline;
    }
  }

  .mascot {
    display: grid;
    place-items: center;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background: var(--mock-primary-soft);
    font-size: 40px;
  }
</style>
