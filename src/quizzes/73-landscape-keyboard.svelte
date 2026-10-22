<script lang="ts">
    import {BrandTheme} from "../mock";

    const rows: string[] = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
</script>

<BrandTheme brand="playful">
  <div class="landscape">
    <div class="landscape__screen">
      <div class="header"><span class="header__logo">parcelpal</span><span>Step 3 of 4</span></div>
      <div class="promo">Free delivery on your next order with code HELLO</div>
      <div class="content">
        <p class="content__label">Delivery note for the driver</p>
        <div class="content__field">Leave it with the neighbour at number 14 if</div>
      </div>
      <div class="chat"><span>💬 Questions? Chat with us</span></div>
      <div class="keyboard" aria-hidden="true">
        {#each rows as row (row)}
          <div class="keyboard__row">
            {#each row.split("") as key (key)}<span>{key}</span>{/each}
          </div>
        {/each}
      </div>
    </div>
  </div>
</BrandTheme>

<style lang="scss">
  .landscape {
    width: 640px;
    padding: 10px;
    border-radius: 36px;
    background: var(--mock-device);
    box-shadow: var(--mock-shadow-lg);

    &__screen {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 290px;
      overflow: hidden;
      border-radius: 28px;
      background: var(--mock-bg);
      color: var(--mock-text);
      font-size: 13px;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 36px;
    background: var(--mock-surface);
    border-bottom: 1px solid var(--mock-border);

    &__logo {
      color: var(--mock-primary);
      font-weight: 800;
    }
  }

  .promo {
    padding: 6px 36px;
    background: var(--mock-primary);
    color: var(--mock-primary-text);
    font-weight: 700;
    font-size: 12px;
  }

  .content {
    padding: 6px 36px 0;

    &__label {
      font-weight: 700;
      font-size: 12px;
    }

    &__field {
      margin-top: 4px;
      padding: 8px 10px;
      border: 2px solid var(--mock-primary);
      border-radius: var(--mock-radius);
      background: var(--mock-surface);
    }
  }

  .chat {
    position: absolute;
    right: 30px;
    bottom: 150px;
    left: 30px;
    display: flex;
    justify-content: flex-end;

    span {
      padding: 8px 14px;
      border-radius: 999px;
      background: var(--mock-text);
      color: var(--mock-surface);
      font-size: 12px;
      font-weight: 700;
      box-shadow: var(--mock-shadow-md);
    }
  }

  .keyboard {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    gap: 5px;
    height: 140px;
    padding: 10px 40px;
    background: #d1d4db;

    &__row {
      display: flex;
      justify-content: center;
      gap: 5px;

      span {
        display: grid;
        place-items: center;
        width: 46px;
        height: 34px;
        border-radius: 6px;
        background: #ffffff;
        color: #111111;
        box-shadow: 0 1px 0 rgb(0 0 0 / 0.25);
      }
    }
  }
</style>
