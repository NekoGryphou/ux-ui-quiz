<script lang="ts">
  import { Hotspot, RetroBrowser, RetroButton } from "../mock";
  import { t } from "../shared/locale.svelte";
  import { CLUB_MASCOT_GIF_URL } from "./const/media.const";
</script>

<!--suppress HttpUrlsUsage -->
<RetroBrowser
  title={t("~*~ Riverside Chess Club ~*~", "~*~ Club d’échecs de Riverside ~*~")}
  url="http://www.geocities.com/riverside_chess/"
>
  <div class="site">
    <Hotspot id="banner">
      <p class="banner">
        {t("♞ Welcome to the Riverside Chess Club!!! ♞", "♞ Bienvenue au Club d’échecs de Riverside !!! ♞")}
      </p>
    </Hotspot>
    <Hotspot id="menu">
      <div class="menu">
        <RetroButton>{t("Home", "Accueil")}</RetroButton>
        <RetroButton>{t("Members", "Membres")}</RetroButton>
        <RetroButton>{t("Results", "Résultats")}</RetroButton>
        <RetroButton>{t("Links", "Liens")}</RetroButton>
      </div>
    </Hotspot>
    <Hotspot id="ticker">
      <div class="ticker">
        <span class="ticker__track">
          {#each [0, 1] as copy (copy)}
            <span class="ticker__text"
              >{t(
                "*** NEW *** This week’s tournament moves to SATURDAY 2 PM in the library hall · bring your own clock!",
                "*** NOUVEAU *** Le tournoi de la semaine est déplacé au SAMEDI 14 H dans la salle de la bibliothèque · apportez votre pendule !"
              )}</span
            >
          {/each}
        </span>
      </div>
    </Hotspot>
    <div class="columns">
      <Hotspot id="welcome">
        <div class="panel">
          <p class="panel__title">{t("About the club", "À propos du club")}</p>
          <p>
            {t(
              "We meet every Thursday evening in the back room of the library. Beginners are always welcome, and boards are provided!",
              "Nous nous retrouvons chaque jeudi soir dans l’arrière-salle de la bibliothèque. Tous les niveaux sont les bienvenus, et les échiquiers sont fournis !"
            )}
          </p>
          <p class="construction">
            <i></i>
            {t("Results page under construction", "Page Résultats en construction")} <i></i>
          </p>
        </div>
      </Hotspot>
      <div class="side">
        <Hotspot id="mascot">
          <img class="mascot" src={CLUB_MASCOT_GIF_URL} alt={t("Animated cartoon", "Personnage animé")} width="170" />
        </Hotspot>
        <Hotspot id="counter">
          <div class="counter">
            <span>{t("You are visitor", "Nombre de visites")}</span>
            <span class="counter__digits">004217</span>
          </div>
        </Hotspot>
        <Hotspot id="guestbook">
          <span class="guestbook">{t("✍ Sign our Guestbook!", "✍ Signez notre Livre d’or !")}</span>
        </Hotspot>
      </div>
    </div>
  </div>
</RetroBrowser>

<style lang="scss">
  .site {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
    padding: 14px;
    background: repeating-conic-gradient(#1b2a5c 0% 25%, #22346e 0% 50%) 0 0 / 24px 24px;
    color: #ffffff;
    // noinspection CssNoGenericFontName
    font-family: var(--mock-retro-serif);
  }

  .banner {
    margin: 0;
    color: #ffef5a;
    // noinspection CssNoGenericFontName
    font-family: var(--font-heading);
    line-height: 1.15;
    letter-spacing: -0.01em;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    text-shadow: 2px 2px 0 #b8003a;
  }

  .menu {
    display: flex;
    justify-content: center;
    gap: 6px;
  }

  .ticker {
    overflow: hidden;
    padding: 5px 0;
    border: 2px ridge #c0c0c0;
    background: #000000;
    color: #ffef5a;
    font: 700 14px/1.3 var(--mock-retro-font);
    white-space: nowrap;

    &__track {
      display: inline-flex;
      animation: scroll 14s linear infinite;
    }

    &__text {
      padding-right: 48px;
    }
  }

  .columns {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 170px;
    gap: 12px;
  }

  .panel {
    display: grid;
    gap: 8px;
    padding: 12px;
    border: 3px double #c0c0c0;
    background: #ffffff;
    color: #000000;
    font-size: 15px;
    line-height: 1.4;

    &__title {
      color: #800000;
      font-size: 17px;
      font-weight: 700;
    }
  }

  .construction {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #5a3d00;
    // noinspection CssNoGenericFontName
    font-family: var(--mock-retro-font);
    font-size: 12px;
    font-weight: 700;

    i {
      width: 34px;
      height: 12px;
      background: repeating-linear-gradient(-45deg, #ffcc00 0 6px, #000000 6px 12px);
    }
  }

  .mascot {
    display: block;
    width: 100%;
    height: 170px;
    object-fit: contain;
    border: 3px ridge #c0c0c0;
    background: #000000;
  }

  .side {
    display: grid;
    align-content: start;
    gap: 12px;
  }

  .counter {
    display: grid;
    justify-items: center;
    gap: 4px;
    padding: 10px 6px;
    border: 2px ridge #c0c0c0;
    background: #000000;
    font: 12px var(--mock-retro-font);

    &__digits {
      padding: 2px 6px;
      background: #1a1a1a;
      color: #ff4040;
      font: 700 18px/1 var(--mock-terminal-font);
      letter-spacing: 3px;
    }
  }

  .guestbook {
    display: block;
    color: #8cf0ff;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    text-decoration: underline;
  }

  @keyframes scroll {
    to {
      transform: translateX(-50%);
    }
  }
</style>
