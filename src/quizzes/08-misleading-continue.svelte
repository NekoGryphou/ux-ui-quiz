<script lang="ts">
  import { BrandTheme, BrowserShell, Checkbox, Field, Icon, MockButton, Photo, Stepper } from "../mock";
  import { t } from "../shared/locale.svelte";
  import { PHOTO_SHOE_TRAIL } from "./const/photo.const";
</script>

<BrandTheme brand="luxury">
  <BrowserShell url="shop.trailgear.eu/checkout/payment">
    <div class="page">
      <Stepper
        steps={[
          { label: t("Shipping", "Livraison"), state: "complete" },
          { label: t("Payment", "Paiement"), state: "current" },
          { label: t("Review", "Vérification"), state: "upcoming" }
        ]}
      />
      <div class="columns">
        <div class="form">
          <div class="methods">
            <Checkbox
              radio
              checked
              label={t("Credit card", "Carte bancaire")}
              hint={t("Visa ending in 4242", "Visa se terminant par 4242")}
            />
            <Checkbox radio label="PayPal" />
          </div>
          <Field
            label={t("Billing address", "Adresse de facturation")}
            type="select"
            value={t("Same as shipping", "Identique à la livraison")}
          />
          <div class="footer">
            <span class="back"><Icon name="chevron-left" size={14} /> {t("Shipping", "Livraison")}</span>
            <MockButton variant="primary" size="lg">{t("Continue", "Continuer")}</MockButton>
          </div>
          <p class="fine">
            {t(
              "By clicking Continue, your order is placed and your card is charged.",
              "En cliquant sur Continuer, votre commande est passée et votre carte est débitée."
            )}
          </p>
        </div>

        <aside class="summary">
          <strong>{t("Order summary", "Récapitulatif")}</strong>
          <div class="item">
            <span class="thumb"><Photo src={PHOTO_SHOE_TRAIL.url} /></span>
            <span class="item__name">Trail runner 2 <small>{t("Size 42 · Slate", "Pointure 42 · Ardoise")}</small></span
            >
            <span>{t("€79.90", "79,90 €")}</span>
          </div>
          <div class="line"><span>{t("Shipping", "Livraison")}</span><span>{t("€5.00", "5,00 €")}</span></div>
          <div class="line total"><span>Total</span><span>{t("€84.90", "84,90 €")}</span></div>
        </aside>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .page {
    display: grid;
    gap: 22px;
    padding: 24px;
  }

  .columns {
    display: grid;
    grid-template-columns: 1.35fr 1fr;
    gap: 20px;
    align-items: start;
  }

  .form {
    display: grid;
    gap: 16px;
  }

  .methods {
    display: grid;
    gap: 12px;
    padding: 14px;
    border: 1px solid var(--mock-border);
    border-radius: 10px;
    background: var(--mock-surface);
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .back {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--mock-muted);
  }

  .fine {
    margin: -8px 0 0;
    color: #a3a8b3;
    font-size: 10px;
    text-align: right;
  }

  .summary {
    display: grid;
    gap: 12px;
    padding: 16px;
    border: 1px solid var(--mock-border);
    border-radius: 12px;
    background: var(--mock-surface);
  }

  .item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .thumb {
    overflow: hidden;
    flex: none;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: linear-gradient(135deg, #cbd5e1, #94a3b8);
  }

  .item__name {
    display: grid;
    flex: 1;
    font-weight: 500;

    small {
      color: var(--mock-muted);
      font-size: 11px;
      font-weight: 400;
    }
  }

  .line {
    display: flex;
    justify-content: space-between;
    color: var(--mock-muted);
  }

  .total {
    padding-top: 10px;
    border-top: 1px solid var(--mock-border);
    color: var(--mock-text);
    font-weight: 600;
  }
</style>
