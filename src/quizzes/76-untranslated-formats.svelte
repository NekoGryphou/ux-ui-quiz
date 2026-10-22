<script lang="ts">
  import { BrandTheme, BrowserShell, MockButton } from "../mock";
  import type { TrainOption } from "./types/quiz-mocks.types";

  const trains: TrainOption[] = [
    { depart: "7:45 AM", arrive: "9:41 AM", price: "$89.50", tag: "Direct" },
    { depart: "1:12 PM", arrive: "3:20 PM", price: "$64.00", tag: "Direct" },
    { depart: "7:45 PM", arrive: "10:02 PM", price: "$42.90", tag: "1 correspondance" }
  ];
</script>

<BrandTheme brand="corporate">
  <BrowserShell url="eurorail.com/fr/recherche">
    <div class="search">
      <div class="search__head">
        <span class="search__logo">EuroRail</span>
        <span class="search__lang">FR ▾</span>
      </div>
      <div class="search__trip">
        <p class="search__route">Lyon Part-Dieu → Paris Gare de Lyon</p>
        <p class="search__date">Aller · 04/05/2025 · 1 adulte</p>
      </div>
      <div class="search__list">
        {#each trains as train (train.depart)}
          <div class="train">
            <span class="train__times"><strong>{train.depart}</strong> → {train.arrive}</span>
            <span class="train__tag">{train.tag}</span>
            <strong class="train__price">{train.price}</strong>
            <MockButton variant="primary" size="sm">Choisir</MockButton>
          </div>
        {/each}
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .search {
    display: grid;
    gap: 14px;
    padding: 18px 22px 22px;

    &__head {
      display: flex;
      justify-content: space-between;
    }

    &__logo {
      color: var(--mock-primary);
      font-size: 16px;
      font-weight: 700;
    }

    &__lang {
      padding: 2px 8px;
      border: 1px solid var(--mock-border);
      border-radius: var(--mock-radius);
      font-weight: 600;
    }

    &__route {
      font-size: 17px;
      font-weight: 600;
    }

    &__date {
      color: var(--mock-muted);
    }

    &__list {
      display: grid;
      gap: 8px;
    }
  }

  .train {
    display: grid;
    grid-template-columns: 1fr auto 80px auto;
    align-items: center;
    gap: 14px;
    padding: 12px 14px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);

    &__tag {
      color: var(--mock-muted);
      font-size: 12px;
    }

    &__price {
      font-size: 15px;
      text-align: right;
    }
  }
</style>
