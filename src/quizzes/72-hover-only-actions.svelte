<script lang="ts">
    import {AppBar, BrandTheme, Icon, PhoneShell, Photo} from "../mock";
    import {PHOTO_SHOE_CRYSTA, PHOTO_SHOE_ECCO, PHOTO_SHOE_MIZUNO, PHOTO_SHOE_TRAIL} from "./const/photo.const";
    import type {ShoeCard} from "./types/quiz-mocks.types";

    const shoes: ShoeCard[] = [
    { name: "Trail Runner 2", price: "€89", photo: PHOTO_SHOE_TRAIL.url },
    { name: "City Knit", price: "€74", photo: PHOTO_SHOE_CRYSTA.url },
    { name: "Court Classic", price: "€65", photo: PHOTO_SHOE_ECCO.url },
    { name: "Peak Hiker", price: "€119", photo: PHOTO_SHOE_MIZUNO.url }
  ];
</script>

<BrandTheme brand="brutalist">
  <PhoneShell>
    <AppBar title="Sneakers" back />
    <div class="shop">
      <div class="shop__tools">
        <span>124 products</span>
        <span class="shop__filter"><Icon name="filter" size={14} /> Filter</span>
      </div>
      <div class="shop__grid">
        {#each shoes as shoe (shoe.name)}
          <div class="card">
            <div class="card__photo"><Photo src={shoe.photo} /></div>
            <strong>{shoe.name}</strong>
            <span>{shoe.price}</span>
          </div>
        {/each}
      </div>
      <p class="shop__hint">Tip: hover a product to pick your size and add it to your bag.</p>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .shop {
    display: grid;
    gap: 10px;
    padding: 10px 14px;

    &__tools {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
    }

    &__filter {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      border: var(--mock-border-width) solid var(--mock-border);
      font-weight: 700;
    }

    &__grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    &__hint {
      padding: 8px;
      border: 2px dashed var(--mock-border);
      font-size: 11px;
    }
  }

  .card {
    display: grid;
    gap: 2px;
    font-size: 12px;

    &__photo {
      overflow: hidden;
      display: grid;
      place-items: center;
      height: 110px;
      margin-bottom: 4px;
      border: var(--mock-border-width) solid var(--mock-border);
    }
  }
</style>
