<script module lang="ts">
  import { PHOTO_COLD_BREW, PHOTO_GRANOLA, PHOTO_HONEY } from "./const/photo.const";
  import { photoCredits } from "./utils/photo.utils";
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "tiny-tap-targets",
    title: "Controls too small to tap",
    principle: "Size and space touch targets for fingers",
    scenario: "A shopper on their phone wants to add a second jar of honey to their cart before checking out.",
    prompt: "What is the main issue on this screen?",
    kind: "single",
    choices: [
      { id: "a", text: "The quantity and delete controls are tiny and packed together, so taps easily miss." },
      { id: "b", text: "Each row shows the unit price next to the quantity, which makes totals harder to scan." },
      { id: "c", text: "The checkout button sits at the bottom, where it could cover the last item in the cart." },
      { id: "d", text: "Product photos are small thumbnails, so shoppers can’t check exactly what they ordered." }
    ],
    correct: ["a"],
    links: [wcag("2.5.8", "Target Size (Minimum)", "target-size-minimum")],
    explanation: [
      "Fingers need room: aim for 44×44 pt (Apple) or 48×48 dp (Material), and never below 24×24 px with spacing (WCAG 2.5.8 Target Size).",
      "Here “+” sits a few pixels from the delete icon, so trying to add a jar can remove the item instead.",
      "Give each control a large hit area and keep destructive actions away from frequent ones, e.g. delete via swipe or a separate “Remove” link.",
      photoCredits([PHOTO_HONEY, PHOTO_GRANOLA, PHOTO_COLD_BREW])
    ]
  };
</script>

<script lang="ts">
  import { AppBar, BrandTheme, Icon, MockButton, PhoneShell, Photo } from "../mock";
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
