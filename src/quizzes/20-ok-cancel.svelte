<script lang="ts">
  import { BrandTheme, BrowserShell, Card, MockButton, Modal, Skeleton, Tabs, Title } from "../mock";
</script>

<BrandTheme brand="brutalist">
  <BrowserShell url="app.sketchpad.io/settings/billing">
    <div class="page">
      <Title>Settings</Title>
      <Tabs items={["Profile", "Team", "Billing"]} active={2} />
      <Card title="Pro plan" subtitle="€12/month · renews Nov 1"><Skeleton lines={2} /></Card>

      <Modal title="Cancel your subscription?" floating>
        <span>You’ll lose access to Pro features at the end of your billing period on Nov 1.</span>
        {#snippet actions()}
          <MockButton>Cancel</MockButton>
          <MockButton variant="primary">OK</MockButton>
        {/snippet}
      </Modal>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    position: relative;
    display: grid;
    gap: 16px;
    min-height: 340px;
    padding: 22px 24px;
  }
</style>
