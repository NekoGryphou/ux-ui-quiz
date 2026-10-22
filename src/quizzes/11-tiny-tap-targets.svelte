<script lang="ts">
  import { AppBar, BrandTheme, Icon, MockButton, PhoneShell, Photo } from "../mock";
  import { PHOTO_COLD_BREW, PHOTO_GRANOLA, PHOTO_HONEY } from "./const/photo.const";
  import type { CartItem } from "./types/quiz-mocks.types";

  const items: CartItem[] = [
    { name: "Wildflower honey", detail: "250 g jar", price: "€6.90", qty: 1 },
    { name: "Oat granola", detail: "500 g bag", price: "€4.50", qty: 2 },
    { name: "Cold brew coffee", detail: "1 L bottle", price: "€7.20", qty: 1 }
  ];
</script>

<BrandTheme brand="eco">
  <PhoneShell>
    <AppBar title="Cart" back />
    <div class="list">
      {#each items as item, i (item.name)}
        <div class="row">
          <span class="thumb"><Photo src={[PHOTO_HONEY, PHOTO_GRANOLA, PHOTO_COLD_BREW][i]?.url ?? ""} /></span>
          <span class="copy">
            <strong>{item.name}</strong>
            <small>{item.detail} · {item.price}</small>
          </span>
          <span class="controls">
            <span class="step">−</span>
            <span class="qty">{item.qty}</span>
            <span class="step">+</span>
            <span class="trash"><Icon name="trash" size={11} /></span>
          </span>
        </div>
      {/each}
    </div>
    <div class="footer">
      <div class="total"><span>Total</span><strong>€23.10</strong></div>
      <MockButton variant="primary" size="lg" block>Checkout</MockButton>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .list {
    display: grid;
    gap: 2px;
    padding: 8px 0;
  }

  .row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    background: var(--mock-surface);
  }

  .thumb {
    overflow: hidden;
    flex: none;
    width: 38px;
    height: 38px;
    border-radius: 8px;
    opacity: 0.85;
  }

  .copy {
    display: grid;
    flex: 1;
    min-width: 0;

    strong {
      font-weight: 500;
    }

    small {
      color: var(--mock-muted);
      font-size: 11px;
    }
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .step,
  .trash {
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    border: 1px solid var(--mock-border);
    border-radius: 4px;
    font-size: 11px;
    line-height: 1;
  }

  .trash {
    border: 0;
    color: var(--mock-danger);
  }

  .qty {
    min-width: 12px;
    font-size: 11px;
    text-align: center;
  }

  .footer {
    display: grid;
    gap: 10px;
    margin-top: auto;
    padding: 14px 16px 28px;
    border-top: 1px solid var(--mock-border);
    background: var(--mock-surface);
  }

  .total {
    display: flex;
    justify-content: space-between;
    color: var(--mock-muted);

    strong {
      color: var(--mock-text);
      font-size: 15px;
    }
  }
</style>
