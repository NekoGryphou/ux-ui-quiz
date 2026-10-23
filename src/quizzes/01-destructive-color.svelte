<script lang="ts">
  import { Breadcrumbs, BrowserShell, Card, MockButton, Modal, Skeleton, TopBar } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrowserShell url="app.orbit.io/projects/atlas/settings">
  <TopBar brand="Orbit">
    <Breadcrumbs items={[t("Projects", "Projets"), "Atlas", t("Settings", "Paramètres")]} />
  </TopBar>
  <div class="page">
    <Card title={t("General", "Général")}><Skeleton lines={2} /></Card>
    <Card title={t("Danger zone", "Zone de danger")} subtitle={t("Irreversible actions", "Actions irréversibles")}
      ><Skeleton lines={1} /></Card
    >

    <Modal title={t("Delete project Atlas?", "Supprimer le projet Atlas ?")} floating>
      <span
        >{t(
          "All 214 files, 12 boards and the full activity history will be permanently removed. This can’t be undone.",
          "Les 214 fichiers, les 12 tableaux et tout l’historique d’activité seront définitivement supprimés. Cette action est irréversible."
        )}</span
      >
      {#snippet actions()}
        <MockButton>{t("Cancel", "Annuler")}</MockButton>
        <MockButton variant="success" icon="trash">{t("Delete project", "Supprimer le projet")}</MockButton>
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
