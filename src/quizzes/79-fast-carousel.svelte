<script module lang="ts">
  import { PHOTO_CINEMA_SCREEN, PHOTO_CINEMA_SEATS, PHOTO_POPCORN } from "./const/photo.const";
  import { photoCredits } from "./utils/photo.utils";
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "fast-carousel",
    title: "Gone before you finish reading",
    principle: "Let people control carousels, and give slides time to be read",
    scenario:
      "A visitor on a cinema chain’s homepage tries to read the student offer shown in the hero. Watch the hero.",
    prompt: "What is the main issue with this hero?",
    kind: "single",
    choices: [
      { id: "a", text: "Slides change every two seconds with no pause, so offers vanish before they can be read." },
      {
        id: "b",
        text: "Each slide uses a full-width photo, where a plain color would load faster on mobile data."
      },
      { id: "c", text: "The hero shows three offers, where showing only the most popular one would be clearer." },
      { id: "d", text: "The slide text is left-aligned, where centered text would balance the photos better." }
    ],
    correct: ["a"],
    explanation: [
      "Each slide stays about two seconds: barely enough to read a headline, never the conditions. The only controls are three tiny dots, and nothing pauses on hover or focus, so slow readers, screen magnifier users and anyone distracted miss the offer.",
      "If you use a carousel, keep slides up at least 5–7 seconds, pause on hover and focus, and offer visible previous, next and pause controls (WCAG 2.2.2 Pause, Stop, Hide). Often, a static hero with the single most important offer works better.",
      "Photo backgrounds with a dark scrim, several offers and left-aligned text are all normal hero choices.",
      photoCredits([PHOTO_CINEMA_SEATS, PHOTO_CINEMA_SCREEN, PHOTO_POPCORN])
    ],
    links: [wcag("2.2.2", "Pause, Stop, Hide", "pause-stop-hide")]
  };
</script>

<script lang="ts">
  import { BrandTheme, BrowserShell } from "../mock";
  import type { HeroSlide } from "./types/quiz-mocks.types";

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
