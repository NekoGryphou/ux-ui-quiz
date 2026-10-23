<script lang="ts">
  import { BrandTheme, BrowserShell, Metric, SideNav, Tabs, Title } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="fintech">
  <BrowserShell url="app.pulseboard.io/overview">
    <div class="layout">
      <aside class="side">
        <span class="brand">Pulseboard</span>
        <SideNav
          items={[
            { label: t("Overview", "Vue d’ensemble"), icon: "home", active: true },
            { label: t("Revenue", "Chiffre d’affaires"), icon: "chart" },
            { label: t("Customers", "Clients"), icon: "user" },
            { label: t("Settings", "Paramètres"), icon: "settings" }
          ]}
        />
      </aside>
      <div class="content">
        <div class="head">
          <Title>{t("Overview", "Vue d’ensemble")}</Title>
          <Tabs items={[t("This month", "Ce mois-ci"), t("Quarter", "Trimestre"), t("Year", "Année")]} />
        </div>
        <Metric
          label={t("Page views", "Pages vues")}
          value={t("1.24M", "1,24 M")}
          delta={t("+18% vs last month", "+18 % vs mois dernier")}
          trend="up"
          featured
        />
        <div class="grid">
          <Metric
            label={t("Revenue", "Chiffre d’affaires")}
            value={t("€82.4k", "82,4 k€")}
            delta={t("−12%", "−12 %")}
            trend="down"
          />
          <Metric
            label={t("Active customers", "Clients actifs")}
            value={t("1,840", "1 840")}
            delta={t("−6%", "−6 %")}
            trend="down"
          />
          <Metric
            label={t("Churn", "Attrition")}
            value={t("4.1%", "4,1 %")}
            delta={t("+1.3 pt", "+1,3 pt")}
            trend="down"
          />
        </div>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .layout {
    display: grid;
    grid-template-columns: 160px 1fr;
    min-height: 340px;
  }

  .side {
    display: grid;
    align-content: start;
    gap: 14px;
    padding: 16px 10px;
    border-right: 1px solid var(--mock-border);
    background: var(--mock-surface);
  }

  .brand {
    padding: 0 10px;
    font-weight: 600;
  }

  .content {
    display: grid;
    align-content: start;
    gap: 14px;
    padding: 18px;
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
</style>
