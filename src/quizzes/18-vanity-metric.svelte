<script lang="ts">
    import {BrandTheme, BrowserShell, Metric, SideNav, Tabs, Title} from "../mock";
</script>

<BrandTheme brand="fintech">
  <BrowserShell url="app.pulseboard.io/overview">
    <div class="layout">
      <aside class="side">
        <span class="brand">Pulseboard</span>
        <SideNav
          items={[
            { label: "Overview", icon: "home", active: true },
            { label: "Revenue", icon: "chart" },
            { label: "Customers", icon: "user" },
            { label: "Settings", icon: "settings" }
          ]}
        />
      </aside>
      <div class="content">
        <div class="head">
          <Title>Overview</Title>
          <Tabs items={["This month", "Quarter", "Year"]} />
        </div>
        <Metric label="Page views" value="1.24M" delta="+18% vs last month" trend="up" featured />
        <div class="grid">
          <Metric label="Revenue" value="€82.4k" delta="−12%" trend="down" />
          <Metric label="Active customers" value="1,840" delta="−6%" trend="down" />
          <Metric label="Churn" value="4.1%" delta="+1.3 pt" trend="down" />
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
