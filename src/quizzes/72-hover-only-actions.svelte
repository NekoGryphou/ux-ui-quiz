<script lang="ts">
  import { AppBar, BrandTheme, Icon, PhoneShell, Photo } from "../mock";
  import { t } from "../shared/locale.svelte";
  import { PHOTO_SHOE_CRYSTA, PHOTO_SHOE_ECCO, PHOTO_SHOE_MIZUNO, PHOTO_SHOE_TRAIL } from "./const/photo.const";
  import type { ShoeCard } from "./types/quiz-mocks.types";

  const shoes: ShoeCard[] = $derived([
    { name: "Trail Runner 2", price: t("€89", "89 €"), photo: PHOTO_SHOE_TRAIL.url },
    { name: "City Knit", price: t("€74", "74 €"), photo: PHOTO_SHOE_CRYSTA.url },
    { name: "Court Classic", price: t("€65", "65 €"), photo: PHOTO_SHOE_ECCO.url },
    { name: "Peak Hiker", price: t("€119", "119 €"), photo: PHOTO_SHOE_MIZUNO.url }
  ]);
</script>

<BrandTheme brand="brutalist">
  <PhoneShell>
    <AppBar title={t("Sneakers", "Baskets")} back />
    <div class="shop">
      <div class="shop__tools">
        <span>{t("124 products", "124 produits")}</span>
        <span class="shop__filter"><Icon name="filter" size={14} /> {t("Filter", "Filtrer")}</span>
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
      <p class="shop__hint">
        {t(
          "Tip: hover a product to pick your size and add it to your bag.",
          "Astuce : survolez un produit pour choisir votre pointure et l’ajouter à votre panier."
        )}
      </p>
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
