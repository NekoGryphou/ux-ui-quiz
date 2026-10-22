<script lang="ts">
    import {Breadcrumbs, BrowserShell, Card, MockButton, Modal, Skeleton, TopBar} from "../mock";
</script>

<BrowserShell url="app.orbit.io/projects/atlas/settings">
  <TopBar brand="Orbit">
    <Breadcrumbs items={["Projects", "Atlas", "Settings"]} />
  </TopBar>
  <div class="page">
    <Card title="General"><Skeleton lines={2} /></Card>
    <Card title="Danger zone" subtitle="Irreversible actions"><Skeleton lines={1} /></Card>

    <Modal title="Delete project Atlas?" floating>
      <span
        >All 214 files, 12 boards and the full activity history will be permanently removed. This can’t be undone.</span
      >
      {#snippet actions()}
        <MockButton>Cancel</MockButton>
        <MockButton variant="success" icon="trash">Delete project</MockButton>
      {/snippet}
    </Modal>
  </div>
</BrowserShell>

<style lang="scss">
  .page {
    position: relative;
    display: grid;
    gap: 14px;
    min-height: 360px;
    padding: 20px;
  }
</style>
