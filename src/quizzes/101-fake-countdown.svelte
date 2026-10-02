<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "fake-countdown",
    title: "Only 09:59 left, again",
    principle: "Never invent urgency",
    scenario: "A shopper looks at the same jacket on Monday morning and again on Tuesday evening.",
    prompt: "What is the main issue with this offer?",
    kind: "single",
    choices: [
      {
        id: "a",
        text: "The countdown restarts at 10:00 on each visit, so the deadline is fake and only adds pressure."
      },
      { id: "b", text: "The discount badge is red, where a calmer colour would make the price look more trustworthy." },
      { id: "c", text: "The old price is struck through, where hiding it would keep the price block easier to read." },
      { id: "d", text: "The Buy button spans the card, where a smaller button would feel less pushy for a sale item." }
    ],
    correct: ["a"],
    explanation: [
      "Monday morning and Tuesday evening, the “offer ends in” timer shows the same 09:59: it simply restarts on every visit. The deadline doesn’t exist: it only rushes shoppers into buying before they compare or think.",
      "Show real deadlines only, with the actual end date (“Sale ends Sunday 23:59”). Fake countdowns, fake low-stock alerts and fake “12 people are looking” banners are dark patterns, and illegal in many regions.",
      "A red discount badge, a struck-through old price and a full-width Buy button are standard product page patterns."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, MockButton } from "../mock";

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
