<script lang="ts">
  import { Photo, ViewportBadge } from "../mock";
  import { t } from "../shared/locale.svelte";
  import { PHOTO_RISOTTO } from "./const/photo.const";
</script>

<div class="room">
  <ViewportBadge label={t("3840 px · seen from 3 m", "3 840 px · vu à 3 m")} />
  <div class="tv">
    <div class="tv__screen">
      <div class="site">
        <p class="site__logo">CookAlong</p>
        <span class="site__photo"><Photo src={PHOTO_RISOTTO.url} /></span>
        <p class="site__title">{t("Creamy mushroom risotto", "Risotto crémeux aux champignons")}</p>
        <ul>
          <li>{t("300 g arborio rice", "300 g de riz arborio")}</li>
          <li>{t("250 g mushrooms", "250 g de champignons")}</li>
          <li>{t("1 l vegetable stock", "1 l de bouillon de légumes")}</li>
        </ul>
        <p>
          {t(
            "1. Fry the onion in butter until soft, then add the rice and stir for 2 minutes.",
            "1. Faites revenir l’oignon dans le beurre jusqu’à ce qu’il soit tendre, puis ajoutez le riz et remuez 2 minutes."
          )}
        </p>
      </div>
    </div>
    <span class="tv__stand"></span>
  </div>
</div>

<style lang="scss">
  .room {
    display: grid;
    justify-items: center;
    gap: 12px;
  }

  .tv {
    display: grid;
    justify-items: center;

    &__screen {
      display: grid;
      justify-items: center;
      width: 600px;
      height: 338px;
      padding: 12px 0;
      border: 10px solid #111111;
      border-radius: 6px;
      background: #2b2b30;
      box-shadow: var(--mock-shadow-lg);
    }

    &__stand {
      width: 140px;
      height: 14px;
      border-radius: 0 0 6px 6px;
      background: #2a2a2a;
    }
  }

  .site {
    display: grid;
    align-content: start;
    gap: 3px;
    width: 160px;
    height: 100%;
    padding: 6px;
    background: #ffffff;
    color: #1a1a1a;
    font:
      4px/1.4 Arial,
      sans-serif;

    &__logo {
      color: #c0392b;
      font-size: 6px;
      font-weight: 700;
    }

    &__photo {
      height: 50px;
      overflow: hidden;
    }

    &__title {
      font-size: 7px;
      font-weight: 700;
    }

    ul {
      margin: 0;
      padding-left: 8px;
    }
  }
</style>
