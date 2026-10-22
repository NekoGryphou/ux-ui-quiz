<script lang="ts">
  import { BrowserShell, MockButton, Photo, TopBar } from "../mock";
  import { PHOTO_SHOE_TRAIL } from "./const/photo.const";

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
