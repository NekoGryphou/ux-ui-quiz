<script lang="ts">
  import { Hotspot, RetroField, RetroWindow } from "../mock";
  import { t } from "../shared/locale.svelte";

  const toolbars: string[] = ["AskBar", "SearchMaster Pro", "FunTunes Toolbar", "ShopSaver"];
</script>

<div class="frame">
  <Hotspot id="title"><div class="frame__title">Riverside Gazette - Microsoft Internet Explorer</div></Hotspot>
  <RetroWindow title="" width={600}>
    <Hotspot id="menu">
      <div class="menu">
        <u>F</u>{t("ile", "ichier")} <u>E</u>{t("dit", "dition")} <u>{t("V", "A")}</u>{t("iew", "ffichage")} <u>F</u>{t(
          "avorites",
          "avoris"
        )} <u>{t("T", "O")}</u>{t("ools", "utils")} <u>{t("H", "?")}</u>{t("elp", "")}
      </div>
    </Hotspot>
    <Hotspot id="address">
      <div class="bar">
        {t("Address", "Adresse")}
        <!--suppress HttpUrlsUsage --><RetroField value="http://www.riversidegazette.com/" grow />
      </div>
    </Hotspot>
    <Hotspot id="toolbars">
      <div class="toolbars">
        {#each toolbars as name, i (name)}
          <div class="bar bar--addon" style:--tint="hsl({[200, 30, 300, 120][i]} 70% 45%)">
            <span class="bar__logo">{name}</span>
            <RetroField value={t("Search the web...", "Rechercher sur le Web...")} width={170} />
            <span class="bar__btn">{t("Search", "Rechercher")}</span>
            <span class="bar__extra"
              >{[
                t("★ Smileys", "★ Smileys"),
                t("♪ Free ringtones", "♪ Sonneries gratuites"),
                t("☺ Screensavers", "☺ Écrans de veille"),
                t("$ Coupons", "€ Bons de réduction")
              ][i]}</span
            >
          </div>
        {/each}
      </div>
    </Hotspot>
    <Hotspot id="weather">
      <div class="weather">
        {t(
          "☀ 21°C Riverside · Tomorrow 18°C rain · WIN A FREE iPod! Click here ·",
          "☀ 21 °C Riverside · Demain 18 °C pluie · GAGNEZ UN iPod ! Cliquez ici ·"
        )}
      </div>
    </Hotspot>
    <Hotspot id="page">
      <div class="page">
        <p class="page__title">Riverside Gazette</p>
        <p>
          {t(
            "Town hall approves new footbridge over the river…",
            "La mairie approuve une nouvelle passerelle sur la rivière…"
          )}
        </p>
      </div>
    </Hotspot>
    <Hotspot id="status"><div class="status">{t("Done", "Terminé")}</div></Hotspot>
  </RetroWindow>
</div>

<style lang="scss">
  @use "$styles/mock-mixins" as *;

  .frame {
    display: grid;
    width: 600px;
    font: 11px/1.4 var(--mock-retro-font);

    &__title {
      padding: 3px 6px;
      background: var(--mock-retro-title);
      color: var(--mock-retro-title-text);
      font-weight: 700;
    }

    :global(.window__title) {
      display: none;
    }
  }

  .menu {
    padding: 2px 6px;
    word-spacing: 8px;
  }

  .bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 3px 6px;
    border-top: 1px solid var(--mock-retro-light);
    border-bottom: 1px solid var(--mock-retro-shade);

    &--addon {
      background: linear-gradient(180deg, color-mix(in srgb, var(--tint) 25%, #ffffff), var(--mock-retro-face));
    }

    &__logo {
      width: 110px;
      color: var(--tint);
      font-weight: 700;
    }

    &__btn {
      padding: 1px 8px;
      @include retro-raised;
    }

    &__extra {
      margin-left: auto;
      color: #00007a;
    }
  }

  .toolbars {
    display: grid;
  }

  .weather {
    overflow: hidden;
    padding: 3px 6px;
    background: #ffffcc;
    color: #663300;
    white-space: nowrap;
  }

  .page {
    height: 40px;
    overflow: hidden;
    padding: 4px 10px;
    background: #ffffff;
    font: 13px/1.4 var(--mock-retro-serif);

    &__title {
      font-size: 16px;
      font-weight: 700;
      line-height: 1.2;
    }
  }

  .status {
    padding: 2px 6px;
    box-shadow: inset 1px 1px var(--mock-retro-shade);
  }
</style>
