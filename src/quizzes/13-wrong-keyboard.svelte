<script lang="ts">
  import { AppBar, BrandTheme, Field, PhoneShell } from "../mock";
  import { t } from "../shared/locale.svelte";

  const rows: string[] = $derived([
    t("qwertyuiop", "azertyuiop"),
    t("asdfghjkl", "qsdfghjklm"),
    t("zxcvbnm", "wxcvbn")
  ]);
</script>

<BrandTheme brand="fintech">
  <PhoneShell>
    <AppBar title={t("Payment", "Paiement")} back />
    <div class="form">
      <div class="summary">
        <span>{t("2 × Standing tickets", "2 × Billets fosse")}</span><strong>{t("€96.00", "96,00 €")}</strong>
      </div>
      <Field label={t("Name on card", "Titulaire de la carte")} value="Jonas Weber" />
      <Field label={t("Card number", "Numéro de carte")} value="4970 1012" state="focus" />
    </div>
    <div class="keyboard" aria-hidden="true">
      {#each rows as row, r (row)}
        <div class="keyboard__row">
          {#if r === 2}<span class="key key--wide">⇧</span>{/if}
          {#each row.split("") as key (key)}
            <span class="key">{key}</span>
          {/each}
          {#if r === 2}<span class="key key--wide">⌫</span>{/if}
        </div>
      {/each}
      <div class="keyboard__row">
        <span class="key key--wide">123</span>
        <span class="key key--space">{t("space", "espace")}</span>
        <span class="key key--wide">{t("return", "retour")}</span>
      </div>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .form {
    display: grid;
    gap: 12px;
    padding: 14px 16px;
  }

  .summary {
    display: flex;
    justify-content: space-between;
    padding: 10px 12px;
    border-radius: 10px;
    background: var(--mock-surface);
    color: var(--mock-muted);

    strong {
      color: var(--mock-text);
    }
  }

  .keyboard {
    display: grid;
    gap: 8px;
    margin-top: auto;
    padding: 8px 3px 26px;
    background: var(--mock-chrome);

    &__row {
      display: flex;
      justify-content: center;
      gap: 4px;
    }
  }

  .key {
    display: grid;
    flex: 0 0 24px;
    place-items: center;
    height: 36px;
    border-radius: 5px;
    background: var(--mock-surface);
    box-shadow: 0 1px 0 var(--mock-control-track);
    font-size: 14px;

    &--wide {
      flex-basis: 38px;
      background: var(--mock-control-track);
      font-size: 11px;
    }

    &--space {
      flex: 1 1 auto;
      max-width: 150px;
      color: var(--mock-muted);
      font-size: 11px;
    }
  }
</style>
