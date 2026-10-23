<script lang="ts">
  import { BrandTheme, Icon, MockButton, PhoneShell } from "../mock";
  import { t } from "../shared/locale.svelte";
</script>

<BrandTheme brand="eco">
  <PhoneShell>
    <div class="done">
      <span class="done__icon"><Icon name="check" size={34} strokeWidth={3} /></span>
      <strong>{t("Done!", "C’est fait !")}</strong>
    </div>
    <div class="footer">
      <MockButton variant="primary" size="lg" block>OK</MockButton>
    </div>
  </PhoneShell>
</BrandTheme>

<style lang="scss">
  .done {
    display: grid;
    flex: 1;
    place-content: center;
    justify-items: center;
    gap: 16px;

    strong {
      font-size: 24px;
      font-weight: 700;
    }

    &__icon {
      display: grid;
      place-items: center;
      width: 76px;
      height: 76px;
      border-radius: 50%;
      background: var(--mock-success);
      color: var(--mock-on-accent);
    }
  }

  .footer {
    padding: 16px 18px 30px;
  }
</style>
