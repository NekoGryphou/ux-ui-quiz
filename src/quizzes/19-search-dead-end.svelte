<script lang="ts">
  import { Badge, BrandTheme, BrowserShell, EmptyState, Field, TopBar } from "../mock";
</script>

<BrandTheme brand="editorial">
  <BrowserShell url="crm.northpeak.io/customers?q=acme">
    <TopBar brand="Northpeak CRM" />
    <div class="page">
      <Field value="acme" icon="search" state="focus" />
      <div class="filters">
        <span class="filters__label">Filters</span>
        <Badge tone="info">Plan: Trial</Badge>
        <Badge tone="info">Region: EU</Badge>
        <Badge tone="info">Owner: Mia</Badge>
      </div>
      <div class="results">
        <EmptyState icon="search" title="0 results" />
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
