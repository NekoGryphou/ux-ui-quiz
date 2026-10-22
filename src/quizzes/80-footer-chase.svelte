<script lang="ts">
    import {BrandTheme, BrowserShell, Photo} from "../mock";
    import {
        PHOTO_AMARYLLIS,
        PHOTO_ARMCHAIR,
        PHOTO_CANDLES,
        PHOTO_LAMP,
        PHOTO_MUG,
        PHOTO_SIDE_TABLE,
        PHOTO_VASE,
        PHOTO_VASE_FLORAL
    } from "./const/photo.const";

    const items: string[] = [
    PHOTO_ARMCHAIR.url,
    PHOTO_LAMP.url,
    PHOTO_VASE.url,
    PHOTO_CANDLES.url,
    PHOTO_SIDE_TABLE.url,
    PHOTO_MUG.url,
    PHOTO_AMARYLLIS.url,
    PHOTO_VASE_FLORAL.url,
    PHOTO_LAMP.url
  ];
</script>

<BrandTheme brand="luxury">
  <BrowserShell url="hearth-home.com/new">
    <div class="viewport">
      <div class="scroller">
        <div class="grid">
          {#each items as item, i (i)}
            <span class="tile"><Photo src={item} /></span>
          {/each}
        </div>
        {#each [1, 2] as batch (batch)}
          <div class="grid grid--new grid--batch{batch}">
            {#each items.slice(batch, batch + 6) as item, i (i)}
              <span class="tile"><Photo src={item} /></span>
            {/each}
          </div>
        {/each}
        <footer class="footer">
          <span>Returns policy</span><span>Contact us</span><span>Delivery</span><span>Terms</span>
        </footer>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  $loop: 10s;

  .viewport {
    position: relative;
    height: 330px;
    overflow: hidden;
  }

  .scroller {
    display: grid;
    gap: 14px;
    padding: 18px;
    animation: scroll $loop ease-in-out infinite;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;

    &--new {
      overflow: hidden;
    }

    &--batch1 {
      animation: batch1 $loop ease-out infinite;
    }

    &--batch2 {
      animation: batch2 $loop ease-out infinite;
    }
  }

  .tile {
    overflow: hidden;
    height: 90px;
    border-radius: var(--mock-radius);
  }

  .footer {
    display: flex;
    justify-content: space-between;
    padding: 16px 18px;
    border-radius: var(--mock-radius);
    background: var(--mock-primary);
    color: var(--mock-primary-text);
    font-size: 12px;
  }

  @keyframes scroll {
    0%,
    5% {
      transform: translateY(0);
    }
    18%,
    40% {
      transform: translateY(-90px);
    }
    53%,
    75% {
      transform: translateY(-298px);
    }
    96%,
    100% {
      transform: translateY(0);
    }
  }

  @keyframes batch1 {
    0%,
    26% {
      max-height: 0;
      opacity: 0;
      margin-top: -14px;
    }
    32%,
    92% {
      max-height: 194px;
      opacity: 1;
      margin-top: 0;
    }
    98%,
    100% {
      max-height: 0;
      opacity: 0;
      margin-top: -14px;
    }
  }

  @keyframes batch2 {
    0%,
    61% {
      max-height: 0;
      opacity: 0;
      margin-top: -14px;
    }
    67%,
    92% {
      max-height: 194px;
      opacity: 1;
      margin-top: 0;
    }
    98%,
    100% {
      max-height: 0;
      opacity: 0;
      margin-top: -14px;
    }
  }
</style>
