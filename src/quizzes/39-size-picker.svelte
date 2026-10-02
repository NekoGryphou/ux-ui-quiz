<script module lang="ts">
  import { PHOTO_SHOE_TRAIL } from "./const/photo.const";
  import { photoCredits } from "./utils/photo.utils";
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "size-picker",
    title: "Sold out, but you can’t tell",
    principle: "Show availability and explain disabled actions",
    scenario: "A shopper needs size 44, which is sold out. They select it and try to add the shoes to their cart.",
    prompt: "Which issues make this product page frustrating?",
    kind: "multiple",
    choices: [
      { id: "a", text: "Sold-out sizes look exactly like available ones, so shoppers can select them." },
      { id: "b", text: "Add to cart is disabled without any message explaining why it can’t be used." },
      { id: "c", text: "Sizes are shown in EU format only, with no conversion to UK or US sizes." },
      { id: "d", text: "The price sits above the size picker, where it’s read before the size is chosen." }
    ],
    correct: ["a", "b"],
    explanation: [
      "Nothing marks 41 and 44 as unavailable, so the shopper picks one and hits a wall. Strike through or dim sold-out sizes, and say so in text for screen reader users.",
      "A disabled button with no reason is a dead end. Explain it next to the button (“Size 44 is sold out”) and offer a way forward: “Notify me when it’s back”.",
      "EU sizing with a size guide link is standard for this market, and showing the price before the options is the usual product page order.",
      photoCredits([PHOTO_SHOE_TRAIL])
    ]
  };
</script>

<script lang="ts">
  import { BrowserShell, MockButton, Photo, TopBar } from "../mock";

  const sizes: string[] = ["40", "41", "42", "43", "44", "45"];
</script>

<BrowserShell url="shop.trailgear.eu/trail-runner-2">
  <TopBar brand="Trailgear" />
  <div class="page">
    <span class="photo"><Photo src={PHOTO_SHOE_TRAIL.url} fit="contain" /></span>
    <div class="info">
      <p class="name">Trail Runner 2</p>
      <p class="price">€79.90</p>
      <div class="label"><span>Size (EU)</span><span class="guide">Size guide</span></div>
      <div class="sizes">
        {#each sizes as size (size)}
          <span class="size" class:size--on={size === "44"}>{size}</span>
        {/each}
      </div>
      <MockButton variant="primary" size="lg" block disabled>Add to cart</MockButton>
    </div>
  </div>
</BrowserShell>

<style lang="scss">
  .page {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    padding: 24px;
  }

  .photo {
    overflow: hidden;
    height: 260px;
    border-radius: 14px;
    background: #262626;
  }

  .info {
    display: grid;
    align-content: start;
    gap: 10px;
  }

  .name {
    font-size: 20px;
    font-weight: 700;
  }

  .price {
    font-size: 16px;
    font-weight: 600;
  }

  .label {
    display: flex;
    justify-content: space-between;
    margin-top: 6px;
    font-weight: 500;
  }

  .guide {
    color: var(--mock-primary-strong);
  }

  .sizes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-bottom: 6px;
  }

  .size {
    padding: 9px 0;
    border: 1px solid var(--mock-border);
    border-radius: 8px;
    background: var(--mock-surface);
    text-align: center;

    &--on {
      border: 2px solid var(--mock-primary);
      color: var(--mock-primary-strong);
      font-weight: 600;
    }
  }
</style>
