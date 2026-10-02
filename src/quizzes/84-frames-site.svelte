<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "frames-site",
    title: "Every page is the homepage",
    principle: "Give every page its own address",
    scenario: "A hiker finds the perfect trail page on a 2001 hiking club site and wants to send the link to a friend.",
    prompt: "What is the main issue with this site?",
    kind: "single",
    choices: [
      { id: "a", text: "The site uses frames, so the address bar shows the homepage for every page you visit." },
      { id: "b", text: "The left menu is a separate column, where a top bar would leave more width for text." },
      { id: "c", text: "Trail names are underlined links, where buttons would make each one easier to click." },
      { id: "d", text: "The page uses a serif font, where a sans serif would be easier to read on old screens." }
    ],
    correct: ["a"],
    explanation: [
      "The trail page loads inside a frame, so the address bar still reads index.html. Copying the link, bookmarking it or using Back all lead to the homepage, and search engines can’t point to the trail either.",
      "Every distinct piece of content needs its own URL that reloads exactly that view. That rule still applies to modern single-page apps: update the address as people navigate.",
      "A side menu, underlined links and a serif font are fine, even if dated."
    ]
  };
</script>

<script lang="ts">
  import { RetroBrowser } from "../mock";
</script>

<RetroBrowser title="Highland Hikers Club" url="http://www.highlandhikers.org/index.html">
  <div class="frameset">
    <div class="frameset__menu">
      <p class="frameset__title">Menu</p>
      <span>Home</span><span class="frameset__active">Trails</span><span>Events</span><span>Photos</span>
      <span>Join us</span>
    </div>
    <div class="frameset__main">
      <p class="frameset__h">Ben Lomond via the Ptarmigan Ridge</p>
      <p>11 km · 6 hours · moderate. Start at Rowardennan car park and follow the ridge north for the best views.</p>
      <p><u>Download the map (GIF, 84 KB)</u></p>
      <p class="frameset__note">To link to this trail, please link to our homepage.</p>
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
