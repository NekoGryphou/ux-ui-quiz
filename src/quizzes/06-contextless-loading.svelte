<script lang="ts">
  import { BrandTheme, BrowserShell, SideNav, Spinner, TopBar } from "../mock";
</script>

<BrandTheme brand="eco">
  <BrowserShell url="app.tallybooks.com/reports/export">
    <TopBar brand="Tallybooks" />
    <div class="layout">
      <aside class="side">
        <SideNav
          items={[
            { label: "Dashboard", icon: "home" },
            { label: "Transactions", icon: "inbox" },
            { label: "Reports", icon: "chart", active: true },
            { label: "Settings", icon: "settings" }
          ]}
        />
      </aside>
      <div class="loading">
        <Spinner size={36} />
        <span>Loading…</span>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .layout {
    display: grid;
    grid-template-columns: 170px 1fr;
    min-height: 340px;
  }

  .side {
    padding: 14px 10px;
    border-right: 1px solid var(--mock-border);
    background: var(--mock-surface);
  }

  .loading {
    display: grid;
    place-content: center;
    justify-items: center;
    gap: 12px;
    color: var(--mock-muted);
  }
</style>
