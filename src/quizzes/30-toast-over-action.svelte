<script lang="ts">
    import {AppBar, BrandTheme, Icon, MockButton, PhoneShell, Photo} from "../mock";
    import {PHOTO_SHOE_MIZUNO} from "./const/photo.const";
</script>

<BrandTheme brand="luxury">
  <PhoneShell>
    <AppBar title="Trail Runner 2" back />
    <div class="product">
      <span class="photo"><Photo src={PHOTO_SHOE_MIZUNO.url} fit="contain" /></span>
      <p class="name">Trail Runner 2</p>
      <p class="price">€79.90</p>
      <p class="desc">Light, grippy and made for wet trails. Recycled mesh upper.</p>
      <div class="sizes">
        {#each ["40", "41", "42", "43"] as size (size)}
          <span class="size" class:size--on={size === "42"}>{size}</span>
        {/each}
      </div>
    </div>
    <div class="bar">
      <MockButton>Add to cart</MockButton>
      <MockButton variant="primary">Checkout</MockButton>
    </div>
    <div class="toast">
      <Icon name="check" size={14} strokeWidth={3} />
      <span>Added to cart</span>
      <span class="toast__link">View cart</span>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .product {
    display: grid;
    gap: 6px;
    padding: 12px 16px;
  }

  .photo {
    overflow: hidden;
    height: 190px;
    margin-bottom: 6px;
    border-radius: 14px;
    background: #262626;
  }

  .name {
    font-size: 18px;
    font-weight: 700;
  }

  .price {
    font-weight: 600;
  }

  .desc {
    color: var(--mock-muted);
  }

  .sizes {
    display: flex;
    gap: 8px;
    margin-top: 6px;
  }

  .size {
    padding: 6px 12px;
    border: 1px solid var(--mock-border);
    border-radius: 8px;
    background: var(--mock-surface);

    &--on {
      border-color: var(--mock-primary);
      color: var(--mock-primary-strong);
      font-weight: 600;
    }
  }

  .bar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: auto;
    padding: 12px 16px 30px;
    border-top: 1px solid var(--mock-border);
    background: var(--mock-surface);
  }

  .toast {
    position: absolute;
    right: 12px;
    bottom: 26px;
    left: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 16px;
    border-radius: 12px;
    background: #1b1d23;
    color: #ffffff;
    box-shadow: var(--mock-shadow-lg);

    span:first-of-type {
      flex: 1;
    }

    &__link {
      color: #93c5fd;
      font-weight: 600;
    }
  }
</style>
