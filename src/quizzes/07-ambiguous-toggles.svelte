<script lang="ts">
  import { BrowserShell, Card, Switch, Tabs, Title } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrowserShell url="app.relay.chat/settings/notifications">
  <div class="page">
    <Title>{t("Settings", "Paramètres")}</Title>
    <Tabs items={[t("Profile", "Profil"), "Notifications", t("Security", "Sécurité")]} active={1} />
    <Card
      title={t("Email", "E-mail")}
      subtitle={t("Changes apply immediately", "Les modifications s’appliquent immédiatement")}
    >
      <div class="list">
        <Switch label={t("Disable product announcements", "Désactiver les annonces produit")} checked subtle />
        <Switch label={t("Disable marketing emails", "Désactiver les e-mails marketing")} subtle />
        <Switch label={t("Disable security alerts", "Désactiver les alertes de sécurité")} checked subtle />
        <Switch label={t("Disable weekly digest", "Désactiver le résumé hebdomadaire")} subtle />
        <Switch label={t("Disable all emails", "Désactiver tous les e-mails")} subtle />
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
