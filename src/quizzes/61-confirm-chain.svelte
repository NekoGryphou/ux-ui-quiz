<script lang="ts">
    import {RetroButton, RetroWindow} from "../mock";
</script>

<div class="desk">
  <div class="desk__app">
    <RetroWindow title="StockMaster 97 - INVENTORY.XLS" menu={["File", "Edit", "View", "Data", "Help"]} width={520}>
      <div class="sheet">
        {#each Array.from({ length: 8 }, (_, i) => i) as row (row)}
          <div class="sheet__row">
            {#each Array.from({ length: 6 }, (_, i) => i) as cell (cell)}
              <span>{row === 0 ? "ABCDEF"[cell] : cell === 0 ? String(row) : ""}</span>
            {/each}
          </div>
        {/each}
      </div>
    </RetroWindow>
  </div>
  <div class="dialog dialog--1">
    <RetroWindow title="StockMaster 97" width={300}>
      <div class="dialog__body">
        <span class="dialog__icon">!</span>
        <p>Are you sure you want to exit StockMaster?</p>
      </div>
      <div class="dialog__actions"><RetroButton primary>Yes</RetroButton><RetroButton>No</RetroButton></div>
    </RetroWindow>
  </div>
  <div class="dialog dialog--2">
    <RetroWindow title="StockMaster 97" width={300}>
      <div class="dialog__body">
        <span class="dialog__icon">!</span>
        <p>All windows will be closed. Continue?</p>
      </div>
      <div class="dialog__actions"><RetroButton primary>Yes</RetroButton><RetroButton>No</RetroButton></div>
    </RetroWindow>
  </div>
  <div class="dialog dialog--3">
    <RetroWindow title="StockMaster 97" width={300}>
      <div class="dialog__body">
        <span class="dialog__icon">!</span>
        <p>Really exit? Your work has been saved.</p>
      </div>
      <div class="dialog__actions"><RetroButton primary>Yes</RetroButton><RetroButton>No</RetroButton></div>
    </RetroWindow>
  </div>
</div>

<style lang="scss">
  @use "$styles/mock-mixins" as *;

  .desk {
    position: relative;
    width: 600px;
    height: 400px;
    padding: 16px;
    background: #008080;
  }

  .sheet {
    display: grid;
    @include retro-sunken;

    &__row {
      display: grid;
      grid-template-columns: 30px repeat(5, 1fr);

      span {
        height: 20px;
        border-right: 1px solid var(--mock-retro-soft);
        border-bottom: 1px solid var(--mock-retro-soft);
        font-size: 10px;
        text-align: center;
      }

      &:first-child span,
      span:first-child {
        background: var(--mock-retro-face);
      }
    }
  }

  .dialog {
    position: absolute;

    &--1 {
      top: 100px;
      left: 120px;
    }

    &--2 {
      top: 150px;
      left: 170px;
    }

    &--3 {
      top: 200px;
      left: 220px;
    }

    &__body {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 8px;
    }

    &__icon {
      display: grid;
      flex: none;
      place-items: center;
      width: 32px;
      height: 32px;
      clip-path: polygon(50% 0, 100% 100%, 0 100%);
      background: #ffd400;
      color: #000000;
      font-weight: 700;
      padding-top: 8px;
    }

    &__actions {
      display: flex;
      justify-content: center;
      gap: 8px;
      padding-bottom: 6px;
    }
  }
</style>
