<script lang="ts">
  import type { VisualProps } from "../engine/types/quiz.types";
  import { BrandTheme, BrowserShell, ViewportBadge } from "../mock";
  import { t } from "../shared/locale.svelte";

  let { variant = "a" }: VisualProps = $props();
</script>

<BrandTheme brand="corporate">
  <div class="wrap">
    <ViewportBadge label="1920 px" />
    <BrowserShell url="help.cloudbox.io/setup-sync">
      <div class="doc" class:doc--narrow={variant === "b"}>
        <p class="doc__title">
          {t("Set up file sync on a new computer", "Configurer la synchronisation sur un nouvel ordinateur")}
        </p>
        <p>
          {t(
            "Install the desktop app and sign in with the account you use on your other devices. Sync starts once you choose a folder; keep the computer online until the menu bar shows that everything is up to date.",
            "Installez l’application de bureau et connectez-vous avec le compte que vous utilisez sur vos autres appareils. La synchronisation démarre dès que vous choisissez un dossier ; gardez l’ordinateur connecté jusqu’à ce que la barre des menus indique que tout est à jour."
          )}
        </p>
      </div>
    </BrowserShell>
  </div>
</BrandTheme>

<style lang="scss">
  .wrap {
    display: grid;
    justify-items: start;
    gap: 10px;
  }

  .doc {
    display: grid;
    gap: 12px;
    padding: 18px 22px;
    font-size: 12px;
    line-height: 1.6;

    &--narrow {
      max-width: 62ch;
      margin-inline: auto;
    }

    &__title {
      font-size: 17px;
      font-weight: 600;
      line-height: 1.2;
    }
  }
</style>
