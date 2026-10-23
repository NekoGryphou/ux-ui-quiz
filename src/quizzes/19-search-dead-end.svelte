<script lang="ts">
  import { Badge, BrandTheme, BrowserShell, EmptyState, Field, TopBar } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="editorial">
  <BrowserShell url="crm.northpeak.io/customers?q=acme">
    <TopBar brand="Northpeak CRM" />
    <div class="page">
      <Field value="acme" icon="search" state="focus" />
      <div class="filters">
        <span class="filters__label">{t("Filters", "Filtres")}</span>
        <Badge tone="info">{t("Plan: Trial", "Offre : Essai")}</Badge>
        <Badge tone="info">{t("Region: EU", "Région : UE")}</Badge>
        <Badge tone="info">{t("Owner: Mia", "Responsable : Mia")}</Badge>
      </div>
      <div class="results">
        <EmptyState icon="search" title={t("0 results", "0 résultat")} />
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    gap: 14px;
    padding: 20px 24px 28px;
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;

    &__label {
      color: var(--mock-muted);
      font-size: 12px;
    }
  }

  .results {
    border: 1px solid var(--mock-border);
    border-radius: 12px;
    background: var(--mock-surface);
  }
</style>
