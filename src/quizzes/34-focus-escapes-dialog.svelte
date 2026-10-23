<script lang="ts">
  import {
    BrandTheme,
    BrowserShell,
    Field,
    KeyboardSandbox,
    KeyTarget,
    MockButton,
    Modal,
    Skeleton,
    TopBar
  } from "../mock";
  import type { KeyStop } from "../mock/types/keyboard.types";
  import { t } from "../shared/locale.svelte";

  const stops: KeyStop[] = $derived([
    { id: "name", label: t("File name field, in the dialog", "Champ Nom du fichier, dans la boîte de dialogue") },
    { id: "cancel", label: t("Cancel button, in the dialog", "Bouton Annuler, dans la boîte de dialogue") },
    { id: "rename", label: t("Rename button, in the dialog", "Bouton Renommer, dans la boîte de dialogue") },
    {
      id: "share",
      label: t("Share link, on the page behind the dialog", "Lien Partager, sur la page derrière la boîte de dialogue")
    },
    {
      id: "file",
      label: t(
        "Q3 roadmap.pdf link, on the page behind the dialog",
        "Lien Q3 roadmap.pdf, sur la page derrière la boîte de dialogue"
      )
    }
  ]);
</script>

<BrandTheme brand="fintech">
  <KeyboardSandbox {stops}>
    <BrowserShell url="drive.northwind.io/files/q3-roadmap">
      <TopBar brand="Northwind Drive">
        <span class="spacer"></span>
        <KeyTarget id="share" inline><span class="share">{t("Share", "Partager")}</span></KeyTarget>
      </TopBar>
      <div class="page">
        <KeyTarget id="file" inline><p class="file">Q3 roadmap.pdf</p></KeyTarget>
        <Skeleton lines={4} />
        <Modal title={t("Rename file", "Renommer le fichier")} floating>
          <KeyTarget id="name"><Field label={t("File name", "Nom du fichier")} value="Q3 roadmap.pdf" /></KeyTarget>
          {#snippet actions()}
            <KeyTarget id="cancel" inline><MockButton>{t("Cancel", "Annuler")}</MockButton></KeyTarget>
            <KeyTarget id="rename" inline
              ><MockButton variant="primary">{t("Rename", "Renommer")}</MockButton></KeyTarget
            >
          {/snippet}
        </Modal>
      </div>
    </BrowserShell>
  </KeyboardSandbox>
</BrandTheme>

<style lang="scss">
  .spacer {
    flex: 1;
  }

  .share {
    padding: 4px 10px;
    color: var(--mock-primary-strong);
    font-weight: 600;
  }

  .page {
    position: relative;
    display: grid;
    align-content: start;
    gap: 14px;
    min-height: 300px;
    padding: 20px 24px;
  }

  .file {
    font-size: 18px;
    font-weight: 600;
  }
</style>
