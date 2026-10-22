<script lang="ts">
  import { CodeEditor, CodeLines } from "../mock";
  import { PHOTO_ARMCHAIR } from "./const/photo.const";

  const frameTimes: string[] = ["0.5 s", "1.2 s", "3.1 s"];
  const photo: string = `url('${PHOTO_ARMCHAIR.url}')`;
  const markup: string = [
    '<link rel="preconnect" href="https://cdn.maisonoak.com" crossorigin>',
    "<style>",
    "  @font-face {",
    '    font-family: "Oak Serif";',
    '    src: url("https://cdn.maisonoak.com/oak-serif.woff2");',
    "  }",
    '  .title { font-family: "Oak Serif", Georgia, serif; }',
    "</style>",
    '<img src="/img/canopy.jpg" alt="Canopy armchair in red paisley"',
    '     width="1200" height="800" loading="lazy">',
    '<p class="title">Canopy armchair</p>',
    '<p class="price">€890</p>',
    '<img src="/img/fabric.jpg" alt="Close-up of the paisley fabric"',
    '     decoding="async">',
    '<img src="/img/legs-800.jpg" alt="Detail of the carved legs"',
    '     srcset="/img/legs-400.jpg 400w, /img/legs-800.jpg 800w"',
    '     sizes="50vw">',
    '<button type="button">Add to cart</button>'
  ].join("\n");
</script>

<div class="review">
  <CodeEditor filename="product.html">
    <CodeLines code={markup} start={1} />
  </CodeEditor>
  <div class="filmstrip">
    {#each frameTimes as time, index (time)}
      <div class="frame">
        <span class="frame__time">{time}</span>
        <div class="page">
          <div class="hero" style:background-image={index === 2 ? photo : undefined}></div>
          <p class="title" class:title--hidden={index < 2}>Canopy armchair</p>
          <p class="price">€890</p>
          {#if index > 0}
            <div class="details">
              <span class="detail detail--fabric" style:background-image={photo}></span>
              <span class="detail detail--legs" style:background-image={photo}></span>
            </div>
          {/if}
          <span class="cart">Add to cart</span>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .review {
    display: grid;
    gap: 14px;
    width: 600px;
  }

  .filmstrip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .frame {
    display: grid;
    gap: 6px;

    &__time {
      color: var(--mock-muted);
      font-size: 11px;
      font-weight: 600;
    }
  }

  .page {
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 340px;
    padding: 8px;
    overflow: hidden;
    border: 1px solid var(--mock-border);
    border-radius: 10px;
    background: var(--mock-surface);
    box-shadow: var(--mock-shadow-md);
    color: var(--mock-text);
    font-size: 11px;
  }

  .hero {
    flex-shrink: 0;
    aspect-ratio: 3 / 2;
    border-radius: 6px;
    background-color: var(--mock-fill);
    background-position: center 30%;
    background-size: cover;
  }

  .title {
    font-family: Georgia, serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.25;

    &--hidden {
      color: transparent;
    }
  }

  .price {
    color: var(--mock-muted);
  }

  .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }

  .detail {
    aspect-ratio: 1;
    border-radius: 6px;

    &--fabric {
      background-position: 50% 48%;
      background-size: 320%;
    }

    &--legs {
      background-position: 40% 96%;
      background-size: 240%;
    }
  }

  .cart {
    padding: 7px;
    border-radius: 6px;
    background: var(--mock-primary);
    color: var(--mock-primary-text);
    font-weight: 600;
    text-align: center;
  }
</style>
