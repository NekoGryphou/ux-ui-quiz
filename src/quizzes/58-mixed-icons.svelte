<script lang="ts">
  import { BrandTheme } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="playful">
  <div class="board">
    <nav class="rail">
      <span class="tool tool--active">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
          ><path d="M5 3l14 8-6 2-2 6z" stroke-linejoin="round" /></svg
        >{t("Select", "Sélection")}
      </span>
      <span class="tool">
        <svg viewBox="0 0 24 24"><path d="M3 21l3-9L17 1l6 6-11 11z" fill="#111111" /></svg>{t("Pen", "Stylo")}
      </span>
      <span class="tool">
        <svg viewBox="0 0 24 24"
          ><defs
            ><radialGradient id="blob" cx="35%" cy="30%"
              ><stop offset="0%" stop-color="#ffffff" /><stop offset="45%" stop-color="#5fb4ff" /><stop
                offset="100%"
                stop-color="#0b4f9e"
              /></radialGradient
            ></defs
          ><rect x="3" y="3" width="18" height="18" rx="6" fill="url(#blob)" /></svg
        >{t("Shape", "Forme")}
      </span>
      <span class="tool">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="square"
          ><path d="M4 5h16M12 5v15" /></svg
        >{t("Text", "Texte")}
      </span>
      <span class="tool">
        <svg viewBox="0 0 24 24"
          ><rect x="2" y="4" width="20" height="16" rx="2" fill="#7bd389" /><circle
            cx="8"
            cy="9"
            r="2.5"
            fill="#ffe066"
          /><path d="M2 18l7-7 5 5 3-3 5 5v2H2z" fill="#2d8a4e" /></svg
        >Image
      </span>
      <span class="tool">
        <svg viewBox="0 0 24 24"
          ><path d="M3 5a3 3 0 013-3h12a3 3 0 013 3v9a3 3 0 01-3 3H10l-5 4v-4a3 3 0 01-2-3z" fill="#ffcc33" /><circle
            cx="9"
            cy="9"
            r="1.4"
            fill="#4a3000"
          /><circle cx="15" cy="9" r="1.4" fill="#4a3000" /><path
            d="M8.5 12.5q3.5 2.5 7 0"
            stroke="#4a3000"
            stroke-width="1.3"
            fill="none"
          /></svg
        >{t("Comment", "Note")}
      </span>
    </nav>
    <div class="canvas">
      <div class="sticky">{t("Q3 ideas", "Idées T3")}</div>
      <div class="sticky sticky--pink">{t("Workshop agenda", "Programme de l’atelier")}</div>
      <div class="frame-box">{t("Frame 1", "Cadre 1")}</div>
    </div>
  </div>
</BrandTheme>

<style lang="scss">
  .board {
    display: grid;
    grid-template-columns: 76px 1fr;
    width: 600px;
    height: 400px;
    overflow: hidden;
    border: 1px solid var(--mock-border);
    border-radius: var(--mock-radius-card);
    background: var(--mock-surface);
    box-shadow: var(--mock-shadow-md);
    color: var(--mock-text);
  }

  .rail {
    display: grid;
    align-content: start;
    gap: 6px;
    padding: 12px 8px;
    border-right: 1px solid var(--mock-border);
  }

  .tool {
    display: grid;
    justify-items: center;
    gap: 3px;
    padding: 7px 4px;
    border-radius: var(--mock-radius);
    font-size: 10px;
    font-weight: 700;

    svg {
      width: 24px;
      height: 24px;
    }

    &--active {
      background: var(--mock-primary-soft);
      color: var(--mock-primary-strong);
    }
  }

  .canvas {
    position: relative;
    background: radial-gradient(var(--mock-border) 1px, transparent 1px) 0 0 / 18px 18px;
  }

  .sticky {
    position: absolute;
    top: 60px;
    left: 70px;
    width: 130px;
    height: 110px;
    padding: 12px;
    background: #fff3a6;
    box-shadow: 0 6px 14px rgb(0 0 0 / 0.12);
    font-weight: 700;
    rotate: -3deg;

    &--pink {
      top: 150px;
      left: 260px;
      background: #ffd3e2;
      rotate: 4deg;
    }
  }

  .frame-box {
    position: absolute;
    top: 40px;
    right: 40px;
    width: 140px;
    height: 90px;
    padding: 8px;
    border: 2px dashed var(--mock-control-border);
    color: var(--mock-muted);
    font-size: 11px;
  }
</style>
