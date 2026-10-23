<script lang="ts">
  import { RetroBrowser } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<!--suppress HttpUrlsUsage -->
<RetroBrowser title="Highland Hikers Club" url="http://www.highlandhikers.org/index.html">
  <div class="frameset">
    <div class="frameset__menu">
      <p class="frameset__title">Menu</p>
      <span>{t("Home", "Accueil")}</span><span class="frameset__active">{t("Trails", "Randonnées")}</span><span
        >{t("Events", "Événements")}</span
      ><span>Photos</span>
      <span>{t("Join us", "Adhérer")}</span>
    </div>
    <div class="frameset__main">
      <p class="frameset__h">{t("Ben Lomond via the Ptarmigan Ridge", "Le Ben Lomond par la crête du Ptarmigan")}</p>
      <p>
        {t(
          "11 km · 6 hours · moderate. Start at Rowardennan car park and follow the ridge north for the best views.",
          "11 km · 6 heures · difficulté moyenne. Partez du parking de Rowardennan et suivez la crête vers le nord pour les plus belles vues."
        )}
      </p>
      <p><u>{t("Download the map (GIF, 84 KB)", "Télécharger la carte (GIF, 84 Ko)")}</u></p>
      <p class="frameset__note">
        {t(
          "To link to this trail, please link to our homepage.",
          "Pour faire un lien vers cette randonnée, merci de pointer vers notre page d’accueil."
        )}
      </p>
    </div>
  </div>
</RetroBrowser>

<style lang="scss">
  .frameset {
    display: grid;
    grid-template-columns: 130px 1fr;
    min-height: 240px;
    font: 13px/1.45 var(--mock-retro-serif);

    &__menu {
      display: grid;
      align-content: start;
      gap: 6px;
      padding: 10px;
      border-right: 6px ridge #c0c0c0;
      background: #2f4f2f;
      color: #e0f0d0;

      span {
        text-decoration: underline;
      }
    }

    &__title {
      font-weight: 700;
    }

    &__active {
      color: #ffff66;
    }

    &__main {
      display: grid;
      align-content: start;
      gap: 8px;
      padding: 12px;
      background: #f5f0e0;
      color: #1a1a1a;
    }

    &__h {
      color: #2f4f2f;
      font-size: 18px;
      font-weight: 700;
    }

    &__note {
      color: #555555;
      font-size: 11px;
    }
  }
</style>
