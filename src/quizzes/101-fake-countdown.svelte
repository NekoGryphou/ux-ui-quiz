<script lang="ts">
    import {BrandTheme, MockButton} from "../mock";

    const visits: string[] = ["Monday · 09:14", "Tuesday · 19:42"];
</script>

<BrandTheme brand="brutalist">
  <div class="visits">
    {#each visits as visit (visit)}
      <div class="visit">
        <span class="visit__day">{visit}</span>
        <div class="product">
          <p class="product__name">Storm Shell jacket</p>
          <p class="product__price"><strong>€89</strong> <s>€149</s> <span class="badge">−40%</span></p>
          <div class="timer"><span>⚡ Offer ends in</span><strong>09:59</strong></div>
          <MockButton variant="primary" block>Buy now</MockButton>
        </div>
      </div>
    {/each}
  </div>
</BrandTheme>

<style lang="scss">
  .visits {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 22px;
    width: 600px;
  }

  .visit {
    display: grid;
    gap: 8px;

    &__day {
      justify-self: start;
      padding: 3px 10px;
      border-radius: 999px;
      background: var(--pill-bg);
      color: var(--pill-text);
      font: 600 12px/1.4 var(--font-mock);
    }
  }

  .product {
    display: grid;
    gap: 10px;
    padding: 16px;
    border: var(--mock-border-width) solid var(--mock-border);
    background: var(--mock-surface);
    color: var(--mock-text);
    box-shadow: var(--mock-shadow-md);

    &__name {
      font-size: 16px;
      font-weight: 700;
    }

    &__price {
      display: flex;
      align-items: center;
      gap: 8px;

      strong {
        font-size: 20px;
      }

      s {
        color: var(--mock-muted);
      }
    }
  }

  .badge {
    padding: 2px 6px;
    background: #c62828;
    color: #ffffff;
    font-weight: 700;
  }

  .timer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 10px;
    border: 2px solid #000000;
    background: #ffd60a;
    font-weight: 700;

    strong {
      font: 700 18px/1 var(--mock-terminal-font);
    }
  }
</style>
