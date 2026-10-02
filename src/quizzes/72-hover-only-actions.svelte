<script module lang="ts">
  import { PHOTO_SHOE_CRYSTA, PHOTO_SHOE_ECCO, PHOTO_SHOE_MIZUNO, PHOTO_SHOE_TRAIL } from "./const/photo.const";
  import { photoCredits } from "./utils/photo.utils";
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "hover-only-actions",
    title: "Hover to buy (on a phone)",
    principle: "Don’t hide essential actions behind hover",
    scenario: "A shopper browses sneakers on their phone and wants to add a pair in their size to the bag.",
    prompt: "What is the main issue with this product grid?",
    kind: "single",
    choices: [
      { id: "a", text: "Sizes and “Add to bag” only appear on hover, so touch users can’t see how to buy." },
      { id: "b", text: "The grid shows two products per row, where one per row would show bigger photos." },
      { id: "c", text: "Prices sit under the product names, where above them they would be seen sooner." },
      { id: "d", text: "The filter button sits at the top, where a bottom bar would be closer to thumbs." }
    ],
    correct: ["a"],
    explanation: [
      "On desktop, hovering a card reveals the sizes and an “Add to bag” button. Touch screens have no hover: the cards show only a photo, a name and a price, and nothing hints that buying is possible from here.",
      "Show essential actions all the time, or make the whole card open a page where they are visible. Hover can add shortcuts for mouse users, never the only path.",
      "Two products per row, price under the name and a filter button at the top are standard mobile shop patterns.",
      photoCredits([PHOTO_SHOE_TRAIL, PHOTO_SHOE_CRYSTA, PHOTO_SHOE_ECCO, PHOTO_SHOE_MIZUNO])
    ]
  };
</script>

<script lang="ts">
  import { AppBar, BrandTheme, Icon, PhoneShell, Photo } from "../mock";
  import type { ShoeCard } from "./types/quiz-mocks.types";

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
