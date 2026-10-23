<script lang="ts">
  import { Alert, BrandTheme, BrowserShell, Card, MockButton, TopBar } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="eco">
  <BrowserShell url="www.flyliberty.com/trips/confirmation">
    <TopBar brand="Liberty Air" />
    <div class="page">
      <Alert
        tone="success"
        title={t("Your trip is booked", "Votre voyage est réservé")}
        body={t(
          "A confirmation has been sent to camille@mail.fr.",
          "Une confirmation a été envoyée à camille@mail.fr."
        )}
      />
      <Card title="Paris → New York" subtitle={t("Booking reference K7XQ2P", "Référence de réservation K7XQ2P")}>
        <div class="flight">
          <div><small>{t("Departure", "Départ")}</small><strong>03/04/2026</strong><span>CDG 14:35</span></div>
          <span class="line" aria-hidden="true"></span>
          <div><small>{t("Arrival", "Arrivée")}</small><strong>03/04/2026</strong><span>JFK 17:05</span></div>
        </div>
        <div class="footer">
          <span>{t("Total paid", "Total payé")} <strong>{t("$842.60", "842,60 $")}</strong></span>
          <MockButton size="sm" icon="download">{t("Receipt", "Reçu")}</MockButton>
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
