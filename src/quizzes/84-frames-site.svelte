<script lang="ts">
  import { RetroBrowser } from "../mock";
</script>

<!--suppress HttpUrlsUsage -->
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
