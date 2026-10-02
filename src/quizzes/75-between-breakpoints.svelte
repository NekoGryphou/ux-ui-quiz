<script module lang="ts">
  import { PHOTO_ARMCHAIR, PHOTO_LAMP, PHOTO_LIVING_ROOM, PHOTO_SIDE_TABLE } from "./const/photo.const";
  import { photoCredits } from "./utils/photo.utils";
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "between-breakpoints",
    title: "820 pixels of chaos",
    principle: "Check layouts between breakpoints, not only at them",
    scenario: "A customer opens a furniture shop on their tablet, held upright, to browse new arrivals.",
    prompt: "Click the part of the page the designers didn’t check at this width.",
    kind: "hotspot",
    regions: [
      { id: "logo", text: "Logo" },
      { id: "nav", text: "Main navigation" },
      { id: "hero", text: "Hero banner" },
      { id: "cards", text: "Product cards" },
      { id: "footer-link", text: "See all link" }
    ],
    correct: ["nav"],
    explanation: [
      "The desktop navigation is still shown at 820px, but there isn’t room for it: the links wrap onto a second line that spills over the hero, and the cart icon ends up stranded at the end of that second line.",
      "Layouts are usually designed at a few breakpoints (375, 1024, 1440…) but used at every width in between. Switch the navigation to its compact form before it runs out of room, and test by resizing continuously, not only at the named sizes.",
      "The hero, cards and “See all” link adapt correctly to this width.",
      photoCredits([PHOTO_LIVING_ROOM, PHOTO_ARMCHAIR, PHOTO_LAMP, PHOTO_SIDE_TABLE])
    ]
  };
</script>

<script lang="ts">
  import { BrandMark, BrandTheme, Hotspot, Icon, Photo, TabletShell, ViewportBadge } from "../mock";
</script>

<BrandTheme brand="luxury">
  <div class="wrap">
    <ViewportBadge label="820 px" />
    <TabletShell width={540} height={500}>
      <div class="page">
        <div class="head">
          <Hotspot id="logo" inline
            ><span class="head__logo"><BrandMark name="Maison Oak" size={20} />MAISON&nbsp;OAK</span></Hotspot
          >
          <Hotspot id="nav">
            <nav class="nav">
              {#each ["New arrivals", "Living room", "Bedroom", "Lighting", "Outdoor", "Sale"] as item (item)}
                <span>{item}</span>
              {/each}
              <span class="nav__cart"><Icon name="cart" size={16} /></span>
            </nav>
          </Hotspot>
        </div>
        <Hotspot id="hero">
          <div
            class="hero"
            style:background-image="linear-gradient(0deg, rgb(30 22 12 / 0.75), rgb(30 22 12 / 0.05) 70%), url('{PHOTO_LIVING_ROOM.url}')"
          >
            <p class="hero__title">New arrivals</p>
            <p>Oak, linen and warm light for the season.</p>
          </div>
        </Hotspot>
        <Hotspot id="cards">
          <div class="cards">
            {#each ["Lune armchair", "Bruma lamp", "Sol side table"] as item, i (item)}
              <div class="card">
                <span class="card__img"
                  ><Photo src={[PHOTO_ARMCHAIR, PHOTO_LAMP, PHOTO_SIDE_TABLE][i]?.url ?? ""} /></span
                >
                <span>{item}</span>
              </div>
            {/each}
          </div>
        </Hotspot>
        <Hotspot id="footer-link" inline><span class="more">See all new arrivals →</span></Hotspot>
      </div>
    </TabletShell>
  </div>
</BrandTheme>

<style lang="scss">
  .wrap {
    display: grid;
    justify-items: start;
    gap: 10px;
  }

  .page {
    position: relative;
    display: grid;
    gap: 14px;
    padding: 0 0 18px;
  }

  .head {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    height: 26px;
    padding: 14px 18px 0;

    &__logo {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font: 500 18px/1 var(--mock-heading-font);
      letter-spacing: 0.08em;
    }
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 16px;
    width: 340px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;

    &__cart {
      display: grid;
      place-items: center;
    }
  }

  .hero {
    display: grid;
    align-content: end;
    gap: 6px;
    height: 200px;
    margin: 0 18px;
    padding: 22px;
    border-radius: var(--mock-radius-card);
    background-position: center;
    background-size: cover;
    color: #fffaf0;

    &__title {
      font: 500 28px/1 var(--mock-heading-font);
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    padding: 0 18px;
  }

  .card {
    display: grid;
    gap: 6px;
    font-size: 12px;

    &__img {
      overflow: hidden;
      height: 110px;
      border-radius: var(--mock-radius);
    }
  }

  .more {
    margin-left: 18px;
    color: var(--mock-primary);
    font-weight: 600;
  }
</style>
