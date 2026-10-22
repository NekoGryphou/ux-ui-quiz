<script lang="ts">
    import {Alert, BrandTheme, BrowserShell, Card, MockButton, TopBar} from "../mock";
</script>

<BrandTheme brand="eco">
  <BrowserShell url="www.flyliberty.com/trips/confirmation">
    <TopBar brand="Liberty Air" />
    <div class="page">
      <Alert tone="success" title="Your trip is booked" body="A confirmation has been sent to camille@mail.fr." />
      <Card title="Paris → New York" subtitle="Booking reference K7XQ2P">
        <div class="flight">
          <div><small>Departure</small><strong>03/04/2026</strong><span>CDG 14:35</span></div>
          <span class="line" aria-hidden="true"></span>
          <div><small>Arrival</small><strong>03/04/2026</strong><span>JFK 17:05</span></div>
        </div>
        <div class="footer">
          <span>Total paid <strong>$842.60</strong></span>
          <MockButton size="sm" icon="download">Receipt</MockButton>
        </div>
      </Card>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    gap: 16px;
    padding: 22px 24px 26px;
  }

  .flight {
    display: flex;
    align-items: center;
    gap: 16px;

    div {
      display: grid;
      gap: 2px;
    }

    small,
    span {
      color: var(--mock-muted);
    }

    strong {
      font-size: 18px;
    }
  }

  .line {
    flex: 1;
    height: 1px;
    background: var(--mock-border);
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
    border-top: 1px solid var(--mock-border);
    color: var(--mock-muted);

    strong {
      color: var(--mock-text);
    }
  }
</style>
