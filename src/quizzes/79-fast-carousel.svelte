<script lang="ts">
    import {BrandTheme, BrowserShell} from "../mock";
    import {PHOTO_CINEMA_SCREEN, PHOTO_CINEMA_SEATS, PHOTO_POPCORN} from "./const/photo.const";
    import type {HeroSlide} from "./types/quiz-mocks.types";

    const slides: HeroSlide[] = [
    {
      title: "Students: €6 every Tuesday",
      body: "Show your student card at the box office. Not valid on 3D or premieres.",
      photo: PHOTO_CINEMA_SEATS.url
    },
    {
      title: "Summer blockbusters",
      body: "Book now for the biggest releases of the season.",
      photo: PHOTO_CINEMA_SCREEN.url
    },
    { title: "Popcorn menu −30%", body: "With any ticket bought online before 6 pm.", photo: PHOTO_POPCORN.url }
  ];
</script>

<BrandTheme brand="playful">
  <BrowserShell url="cineplus.com">
    <div class="page">
      <div class="nav"><span class="nav__logo">ciné+</span><span>Films · Cinemas · Offers</span></div>
      <div class="hero">
        {#each slides as slide, i (slide.title)}
          <div
            class="slide slide--{i}"
            style:background-image="linear-gradient(0deg, rgb(10 6 20 / 0.85) 0%, rgb(10 6 20 / 0.35) 55%, transparent
            100%), url('{slide.photo}')"
          >
            <p class="slide__title">{slide.title}</p>
            <p class="slide__body">{slide.body}</p>
          </div>
        {/each}
        <div class="dots">
          {#each slides as slide, i (slide.title)}<i class="dot dot--{i}"></i>{/each}
        </div>
      </div>
      <div class="row">
        {#each ["Now showing", "Coming soon", "Kids"] as item (item)}<span class="row__card">{item}</span>{/each}
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  $loop: 6s;

  .page {
    display: grid;
    gap: 14px;
    padding: 0 0 18px;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    padding: 12px 20px 0;

    &__logo {
      color: var(--mock-primary);
      font-size: 18px;
      font-weight: 800;
    }
  }

  .hero {
    position: relative;
    height: 210px;
    margin: 0 20px;
    overflow: hidden;
    border-radius: var(--mock-radius-card);
  }

  .slide {
    position: absolute;
    inset: 0;
    display: grid;
    align-content: end;
    gap: 6px;
    padding: 24px;
    color: #ffffff;
    background-position: center;
    background-size: cover;
    opacity: 0;
    animation: show $loop infinite;

    &--1 {
      animation-delay: 2s;
    }

    &--2 {
      animation-delay: 4s;
    }

    &__title {
      font-size: 24px;
      font-weight: 800;
    }

    &__body {
      max-width: 360px;
      font-size: 13px;
    }
  }

  .dots {
    position: absolute;
    right: 16px;
    bottom: 12px;
    display: flex;
    gap: 5px;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgb(255 255 255 / 0.5);
    animation: dot $loop infinite;

    &--1 {
      animation-delay: 2s;
    }

    &--2 {
      animation-delay: 4s;
    }
  }

  .row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    padding: 0 20px;

    &__card {
      padding: 22px 12px;
      border-radius: var(--mock-radius);
      background: var(--mock-fill);
      font-weight: 700;
    }
  }

  @keyframes show {
    0%,
    30% {
      opacity: 1;
      transform: translateX(0);
    }
    33.33% {
      opacity: 0;
      transform: translateX(-30px);
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes dot {
    0%,
    33% {
      background: #ffffff;
    }
    33.34%,
    100% {
      background: rgb(255 255 255 / 0.5);
    }
  }
</style>
