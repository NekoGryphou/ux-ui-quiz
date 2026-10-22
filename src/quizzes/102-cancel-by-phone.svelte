<script lang="ts">
  import { BrandTheme, BrowserShell, MockButton } from "../mock";
</script>

<BrandTheme brand="eco">
  <BrowserShell url="pulsegym.com/account/membership">
    <div class="page">
      <p class="page__title">Your membership</p>
      <div class="plan">
        <strong>Premium · €39.90/month</strong>
        <span>Member since March 2024 · next payment 1 Dec</span>
      </div>
      <div class="pause">
        <strong>Need a break?</strong>
        <span>Pause your membership for up to 3 months.</span>
        <MockButton variant="primary">Pause membership</MockButton>
      </div>
      <div class="cancel">
        <strong>Want to cancel?</strong>
        <span>
          To cancel, please call our member services on <b>0 800 123 456</b>, Monday to Friday, 10:00–16:00. Please have
          your member number ready.
        </span>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    gap: 14px;
    padding: 24px 28px;

    &__title {
      font-size: 20px;
      font-weight: 700;
    }
  }

  .plan,
  .pause,
  .cancel {
    display: grid;
    gap: 6px;
    padding: 14px 16px;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);

    span {
      color: var(--mock-muted);
    }
  }

  // noinspection CssUnusedSymbol
  .pause :global(.btn) {
    justify-self: start;
    margin-top: 4px;
  }
</style>
