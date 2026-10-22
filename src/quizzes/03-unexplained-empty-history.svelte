<script lang="ts">
  import { Avatar, Badge, BrandTheme, BrowserShell, Card, MockButton, Table, Tabs, Title, TopBar } from "../mock";
</script>

<BrandTheme brand="fintech">
  <BrowserShell url="app.sketchpad.io/settings/billing">
    <TopBar brand="Sketchpad">
      <span class="spacer"></span>
      <Avatar name="Lena Fischer" />
    </TopBar>
    <div class="page">
      <Title>Settings</Title>
      <Tabs items={["Profile", "Team", "Billing"]} active={2} />

      <Card>
        <div class="plan">
          <div class="plan__copy">
            <span class="plan__name">Pro plan <Badge tone="info">Trial</Badge></span>
            <small>Trial ends Nov 1, then €12/month</small>
          </div>
          <MockButton size="sm">Change plan</MockButton>
        </div>
      </Card>

      <div class="history">
        <Title size="sm">Billing history</Title>
        <Table
          columns={[{ label: "Invoice" }, { label: "Date" }, { label: "Status" }, { label: "Amount", align: "end" }]}
          rows={[]}
        />
        <p class="empty">No data</p>
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
