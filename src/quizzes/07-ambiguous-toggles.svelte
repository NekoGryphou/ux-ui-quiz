<script lang="ts">
    import {BrowserShell, Card, Switch, Tabs, Title} from "../mock";
</script>

<BrowserShell url="app.relay.chat/settings/notifications">
  <div class="page">
    <Title>Settings</Title>
    <Tabs items={["Profile", "Notifications", "Security"]} active={1} />
    <Card title="Email" subtitle="Changes apply immediately">
      <div class="list">
        <Switch label="Disable product announcements" checked subtle />
        <Switch label="Disable marketing emails" subtle />
        <Switch label="Disable security alerts" checked subtle />
        <Switch label="Disable weekly digest" subtle />
        <Switch label="Disable all emails" subtle />
      </div>
    </Card>
  </div>
</BrowserShell>

<style lang="scss">
  .page {
    display: grid;
    gap: 16px;
    padding: 24px;
  }

  .list {
    display: grid;
    gap: 16px;
  }
</style>
