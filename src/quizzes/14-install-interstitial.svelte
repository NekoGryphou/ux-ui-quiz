<script lang="ts">
  import { BrandMark, BrandTheme, Icon, MockButton, PhoneShell, Skeleton } from "../mock";
</script>

<BrandTheme brand="editorial">
  <PhoneShell>
    <div class="browser" aria-hidden="true">
      <span class="browser__url"><Icon name="lock" size={10} /> sketchpad.io/f/onboarding-v3</span>
    </div>
    <div class="behind">
      <Skeleton lines={4} />
      <div class="canvas"></div>
    </div>
    <div class="sheet">
      <span class="app-icon"><BrandMark name="Sketchpad" size={64} /></span>
      <strong class="sheet__title">Sketchpad is better in the app</strong>
      <span class="sheet__body">Faster, smoother, and your files sync everywhere.</span>
      <span class="rating"><Icon name="star" size={12} /> 4.8 · 120k ratings</span>
      <MockButton variant="primary" size="lg" block>Get the app</MockButton>
      <span class="decline">No thanks, I prefer a worse experience</span>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .browser {
    padding: 0 12px 8px;

    &__url {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 6px;
      border-radius: 10px;
      background: var(--mock-fill);
      color: var(--mock-text);
      font-size: 11px;
    }
  }

  .behind {
    display: grid;
    gap: 14px;
    padding: 16px;
  }

  .canvas {
    height: 180px;
    border-radius: 12px;
    background: linear-gradient(135deg, #e0e7ff, #fce7f3);
  }

  .sheet {
    position: absolute;
    inset: 72px 0 0;
    display: grid;
    align-content: center;
    justify-items: center;
    gap: 10px;
    padding: 24px 22px 40px;
    border-radius: 24px 24px 0 0;
    background: var(--mock-surface);
    box-shadow: var(--mock-shadow-lg);
    text-align: center;

    &__title {
      font-size: 19px;
      font-weight: 700;
      line-height: 1.25;
    }

    &__body {
      color: var(--mock-muted);
    }
  }

  .app-icon {
    display: grid;
    margin-bottom: 4px;
  }

  .rating {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 8px;
    color: #b45309;
    font-size: 12px;
    font-weight: 600;
  }

  .decline {
    margin-top: 2px;
    color: #c2c6cf;
    font-size: 10px;
  }
</style>
