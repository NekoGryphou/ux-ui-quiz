<script lang="ts">
  import { BrandTheme, BrowserShell, Card, MockButton, Modal, Skeleton, Tabs, Title } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="brutalist">
  <BrowserShell url="app.sketchpad.io/settings/billing">
    <div class="page">
      <Title>{t("Settings", "Paramètres")}</Title>
      <Tabs items={[t("Profile", "Profil"), t("Team", "Équipe"), t("Billing", "Facturation")]} active={2} />
      <Card
        title={t("Pro plan", "Offre Pro")}
        subtitle={t("€12/month · renews Nov 1", "12 €/mois · renouvelée le 1er nov.")}><Skeleton lines={2} /></Card
      >

      <Modal title={t("Cancel your subscription?", "Annuler votre abonnement ?")} floating>
        <span
          >{t(
            "You’ll lose access to Pro features at the end of your billing period on Nov 1.",
            "Vous perdrez l’accès aux fonctionnalités Pro à la fin de votre période de facturation, le 1er novembre."
          )}</span
        >
        {#snippet actions()}
          <MockButton>{t("Cancel", "Annuler")}</MockButton>
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
