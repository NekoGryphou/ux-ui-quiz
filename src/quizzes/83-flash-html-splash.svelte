<script lang="ts">
    import {RetroBrowser} from "../mock";
</script>

<!--suppress HttpUrlsUsage -->
<RetroBrowser title="Le Petit Four - Welcome" url="http://www.lepetitfour.fr/">
  <div class="splash">
    <p class="splash__logo">Le Petit Four</p>
    <p class="splash__tag">~ artisan boulangerie since 1974 ~</p>
    <p class="splash__ask">Please choose your version:</p>
    <div class="splash__choices">
      <span class="choice"><b>FLASH</b><small>Broadband (512k+)<br />Flash Player 6 required</small></span>
      <span class="choice"><b>HTML</b><small>56k modem<br />Lite version</small></span>
    </div>
    <p class="splash__small">Best viewed in 1024×768 with Internet Explorer 6</p>
  </div>
</RetroBrowser>

<style lang="scss">
  .splash {
    display: grid;
    justify-items: center;
    gap: 10px;
    padding: 30px 20px;
    background: radial-gradient(circle at 50% 30%, #4a2a12, #1a0d05);
    color: #f6dfb3;
    // noinspection CssNoGenericFontName
    font-family: var(--mock-retro-serif);
    text-align: center;

    &__logo {
      font:
        italic 700 34px/1 Georgia,
        serif;
      text-shadow: 0 0 10px rgb(255 190 90 / 0.5);
    }

    &__tag {
      color: #d9b27a;
    }

    &__ask {
      margin-top: 12px;
      font: 12px var(--mock-retro-font);
    }

    &__choices {
      display: flex;
      gap: 18px;
    }

    &__small {
      color: #a8865a;
      font: 9px var(--mock-retro-font);
    }
  }

  .choice {
    display: grid;
    gap: 4px;
    width: 150px;
    padding: 12px;
    border: 2px solid #d9b27a;
    background: linear-gradient(180deg, #7a4a1e, #4a2a12);
    font: 11px var(--mock-retro-font);

    b {
      font:
        900 20px/1 Arial,
        sans-serif;
      color: #ffcf7a;
    }
  }
</style>
