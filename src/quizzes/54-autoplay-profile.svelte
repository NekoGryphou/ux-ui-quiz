<script lang="ts">
  import { Hotspot, Photo } from "../mock";
  import { t } from "../shared/locale.svelte";
  import { pixelAvatar } from "./utils/avatar.utils";

  const friends: string[] = ["Tom", "Kiki", "Max", "Jade", "Leo", "Nina", "Sam", "Zoé"];
</script>

<div class="space">
  <Hotspot id="name"><p class="space__name">✧ ~*~ xX_StarLite_Xx ~*~ ✧</p></Hotspot>
  <div class="space__grid">
    <div class="space__left">
      <Hotspot id="photo"><div class="photo"><Photo src={pixelAvatar("StarLite")} /></div></Hotspot>
      <Hotspot id="player">
        <div class="player">
          <span class="player__eq" aria-hidden="true">
            {#each [0, 1, 2, 3, 4] as bar (bar)}<i style:animation-delay="{bar * 120}ms"></i>{/each}
          </span>
          <span class="player__copy">
            <strong>{t("♫ Now playing", "♫ En écoute")}</strong>
            <span>{t("Starlight Riot — “Bring the Night”", "Starlight Riot — « Bring the Night »")}</span>
          </span>
          <span class="player__time">0:07</span>
        </div>
      </Hotspot>
      <Hotspot id="about">
        <div class="about">
          <p class="about__title">{t("About me", "À propos de moi")}</p>
          <p>
            {t(
              "Pixel art, dial-up nostalgia and way too much eyeliner. PARTY AT MINE SATURDAY 9PM!!! bring snacks ♥",
              "Pixel art, nostalgie du modem 56k et beaucoup trop d’eye-liner. SOIRÉE CHEZ MOI SAMEDI 21H!!! ramenez des chips ♥"
            )}
          </p>
        </div>
      </Hotspot>
    </div>
    <div class="space__right">
      <Hotspot id="friends">
        <div class="friends">
          <p class="friends__title">{t("StarLite’s Top 8", "Top 8 de StarLite")}</p>
          <div class="friends__grid">
            {#each friends as friend (friend)}
              <span class="friend"><i><Photo src={pixelAvatar(friend)} /></i>{friend}</span>
            {/each}
          </div>
        </div>
      </Hotspot>
      <Hotspot id="comments">
        <div class="comments">
          <p class="friends__title">{t("Comments (128)", "Commentaires (128)")}</p>
          <p class="comment">
            <i><Photo src={pixelAvatar("Kiki")} /></i><span
              ><strong>{t("Kiki:", "Kiki :")}</strong>
              {t("omg ur layout is so cute!!!", "omg ton profil é tro mimi!!!")}</span
            >
          </p>
          <p class="comment">
            <i><Photo src={pixelAvatar("Max")} /></i><span
              ><strong>{t("Max:", "Max :")}</strong> {t("thx 4 the add ;)", "merci pr l’ajout ;)")}</span
            >
          </p>
        </div>
      </Hotspot>
    </div>
  </div>
</div>

<style lang="scss">
  .space {
    width: 600px;
    padding: 14px;
    border: 3px solid #ff4fd8;
    background:
      radial-gradient(circle at 20% 30%, rgb(255 79 216 / 0.35) 0 2px, transparent 3px) 0 0 / 22px 22px,
      radial-gradient(circle at 70% 60%, rgb(120 220 255 / 0.4) 0 1px, transparent 2px) 0 0 / 17px 17px,
      #12001a;
    color: #ffd6f6;
    font:
      12px/1.45 "Comic Sans MS",
      "Comic Neue",
      cursive;
    box-shadow: 0 0 24px rgb(255 79 216 / 0.5);

    &__name {
      margin: 0 0 12px;
      background: linear-gradient(90deg, #ff4fd8, #ffe14f, #4fe3ff, #ff4fd8);
      background-clip: text;
      color: transparent;
      font:
        700 24px/1.2 "Comic Sans MS",
        cursive;
      letter-spacing: -0.01em;
      text-align: center;
    }

    &__grid {
      display: grid;
      grid-template-columns: 220px 1fr;
      gap: 12px;
    }

    &__left,
    &__right {
      display: grid;
      align-content: start;
      gap: 10px;
    }
  }

  .photo {
    display: grid;
    place-items: center;
    height: 150px;
    overflow: hidden;
    image-rendering: pixelated;
    border: 3px ridge #ff8be6;
    background: linear-gradient(135deg, #7a00ff, #ff4fd8 60%, #ffe14f);
    color: #ffffff;
    font-size: 48px;
  }

  .player {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border: 2px solid #4fe3ff;
    background: #000000;
    color: #4fe3ff;

    &__eq {
      display: flex;
      align-items: flex-end;
      gap: 2px;
      height: 22px;

      i {
        width: 4px;
        height: 100%;
        background: #4fe3ff;
        animation: eq 0.6s ease-in-out infinite alternate;
        transform-origin: bottom;
      }
    }

    &__copy {
      display: grid;
      flex: 1;
      font-size: 11px;
    }

    &__time {
      // noinspection CssNoGenericFontName
      font-family: var(--mock-terminal-font);
    }
  }

  .about,
  .friends,
  .comments {
    padding: 8px;
    border: 2px dashed #ff8be6;
    background: rgb(40 0 50 / 0.85);
  }

  .about__title,
  .friends__title {
    margin-bottom: 4px;
    color: #ffe14f;
    font-weight: 700;
  }

  .friends__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }

  .comment {
    display: flex;
    align-items: center;
    gap: 8px;

    i {
      flex: none;
      width: 28px;
      height: 28px;
      border: 2px solid #ffffff;
      image-rendering: pixelated;
    }
  }

  .friend {
    display: grid;
    justify-items: center;
    gap: 3px;
    font-size: 11px;

    i {
      width: 44px;
      height: 44px;
      border: 2px solid #ffffff;
      background: #ffe9fb;
      image-rendering: pixelated;
    }
  }

  .comments {
    display: grid;
    gap: 4px;
  }

  @keyframes eq {
    from {
      transform: scaleY(0.25);
    }
  }
</style>
