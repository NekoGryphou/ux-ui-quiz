<script lang="ts">
  import { Avatar, Badge, BrandTheme, BrowserShell, Card, MockButton, Table, Tabs, Title, TopBar } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="fintech">
  <BrowserShell url="app.sketchpad.io/settings/billing">
    <TopBar brand="Sketchpad">
      <span class="spacer"></span>
      <Avatar name="Lena Fischer" />
    </TopBar>
    <div class="page">
      <Title>{t("Settings", "Paramètres")}</Title>
      <Tabs items={[t("Profile", "Profil"), t("Team", "Équipe"), t("Billing", "Facturation")]} active={2} />

      <Card>
        <div class="plan">
          <div class="plan__copy">
            <span class="plan__name"
              >{t("Pro plan", "Forfait Pro")} <Badge tone="info">{t("Trial", "Essai")}</Badge></span
            >
            <small>{t("Trial ends Nov 1, then €12/month", "Fin de l’essai le 1er nov., puis 12 €/mois")}</small>
          </div>
          <MockButton size="sm">{t("Change plan", "Changer de forfait")}</MockButton>
        </div>
      </Card>

      <div class="history">
        <Title size="sm">{t("Billing history", "Historique de facturation")}</Title>
        <Table
          columns={[
            { label: t("Invoice", "Facture") },
            { label: "Date" },
            { label: t("Status", "Statut") },
            { label: t("Amount", "Montant"), align: "end" }
          ]}
          rows={[]}
        />
        <p class="empty">{t("No data", "Aucune donnée")}</p>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .spacer {
    flex: 1;
  }

  .page {
    display: grid;
    gap: 16px;
    padding: 22px 24px 28px;
  }

  .plan {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    &__copy {
      display: grid;
      gap: 2px;

      small {
        color: var(--mock-muted);
        font-size: 11px;
      }
    }

    &__name {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-weight: 600;
    }
  }

  .history {
    display: grid;
    gap: 10px;
  }

  .empty {
    padding: 24px 0;
    color: var(--mock-muted);
    text-align: center;
  }
</style>
