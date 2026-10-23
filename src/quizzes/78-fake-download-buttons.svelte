<script lang="ts">
  import { Hotspot, RetroBrowser } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<!--suppress HttpUrlsUsage -->
<RetroBrowser title="FreeSoftZone - PixelPaint 3.2" url="http://www.freesoftzone.net/graphics/pixelpaint.html">
  <div class="site">
    <div class="head">
      <Hotspot id="logo" inline><span class="logo">FreeSoft<b>Zone</b>.net</span></Hotspot>
      <Hotspot id="nav" inline>
        <span class="nav"
          >{t(
            "Audio · Graphics · Games · Utilities · Drivers",
            "Audio · Graphisme · Jeux · Utilitaires · Pilotes"
          )}</span
        >
      </Hotspot>
    </div>
    <Hotspot id="ad-top">
      <div class="banner">
        <span class="banner__arrow">⬇</span>
        <span class="banner__text">{t("DOWNLOAD NOW", "TÉLÉCHARGER")}</span>
        <span class="banner__sub">{t("Fast & Free · Click Here!", "Rapide et gratuit · Cliquez ici !")}</span>
      </div>
    </Hotspot>
    <div class="main">
      <div class="content">
        <Hotspot id="details">
          <div class="details">
            <p class="details__title">PixelPaint 3.2</p>
            <p>
              {t(
                "Free image editor with layers, brushes and filters.",
                "Éditeur d’images gratuit avec calques, pinceaux et filtres."
              )}
            </p>
            <p class="details__meta">
              {t(
                "Size: 8.4 MB · Windows 98/ME/XP · License: Freeware",
                "Taille : 8,4 Mo · Windows 98/ME/XP · Licence : Freeware"
              )}
            </p>
          </div>
        </Hotspot>
        <Hotspot id="real" inline
          ><span class="real">{t("pixelpaint32_setup.exe (8.4 MB)", "pixelpaint32_setup.exe (8,4 Mo)")}</span></Hotspot
        >
      </div>
      <div class="side">
        <Hotspot id="ad-side">
          <div class="side__btn">
            <span>{t("▶ Start Download", "▶ Lancer le téléchargement")}</span>
            <small>{t("Your file is ready", "Votre fichier est prêt")}</small>
          </div>
        </Hotspot>
        <Hotspot id="ad-scan">
          <div class="scan">
            <p class="scan__title">{t("⚠ WARNING", "⚠ ATTENTION")}</p>
            <p>
              {t("Your PC may be infected! 3 errors found.", "Votre PC est peut-être infecté ! 3 erreurs détectées.")}
            </p>
            <span class="scan__btn">{t("Scan now", "Analyser")}</span>
          </div>
        </Hotspot>
      </div>
    </div>
  </div>
</RetroBrowser>

<style lang="scss">
  .site {
    display: grid;
    gap: 10px;
    padding: 10px;
    background: #ffffff;
    color: #000000;
    font:
      12px/1.4 Verdana,
      Tahoma,
      sans-serif;
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 6px;
    border-bottom: 2px solid #ff6600;
  }

  .logo {
    color: #003399;
    font:
      700 18px/1 Arial,
      sans-serif;

    b {
      color: #ff6600;
    }
  }

  .nav {
    color: #003399;
    font-size: 11px;
    text-decoration: underline;
  }

  .banner {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    border: 3px outset #3cbf3c;
    background: linear-gradient(180deg, #6ee36e, #1f9a1f);
    color: #ffffff;
    text-shadow: 1px 1px 0 #0b4d0b;

    &__arrow {
      font-size: 26px;
      animation: bob 0.8s ease-in-out infinite alternate;
    }

    &__text {
      font:
        900 24px/1 "Arial Black",
        Arial,
        sans-serif;
    }

    &__sub {
      margin-left: auto;
      font-weight: 700;
    }
  }

  .main {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 170px;
    gap: 12px;
  }

  .content {
    display: grid;
    align-content: start;
    gap: 8px;
  }

  .details {
    display: grid;
    gap: 4px;
    padding: 8px;
    border: 1px solid #c0c0c0;
    background: #f4f4f4;

    &__title {
      color: #003399;
      font-size: 15px;
      font-weight: 700;
    }

    &__meta {
      color: #555555;
      font-size: 10px;
    }
  }

  .real {
    color: #0000ee;
    font-size: 11px;
    text-decoration: underline;
  }

  .side {
    display: grid;
    align-content: start;
    gap: 10px;

    &__btn {
      display: grid;
      justify-items: center;
      padding: 10px 6px;
      border-radius: 4px;
      background: linear-gradient(180deg, #4d9bff, #0b4fc2);
      color: #ffffff;
      font-weight: 700;
      box-shadow: 0 2px 0 #062c6e;

      small {
        font-weight: 400;
        font-size: 10px;
      }
    }
  }

  .scan {
    display: grid;
    gap: 4px;
    padding: 8px;
    border: 2px solid #cc0000;
    background: #fff4c2;
    font-size: 11px;

    &__title {
      color: #cc0000;
      font-weight: 700;
      animation: blink 1s steps(1) infinite;
    }

    &__btn {
      justify-self: start;
      padding: 2px 10px;
      border: 2px outset #d4d0c8;
      background: #d4d0c8;
    }
  }

  @keyframes bob {
    to {
      transform: translateY(4px);
    }
  }

  @keyframes blink {
    50% {
      opacity: 0.3;
    }
  }
</style>
