<script lang="ts">
  import { t } from "../shared/locale.svelte";
  import type { PortalSection } from "./types/quiz-mocks.types";

  const services: PortalSection[] = $derived([
    {
      title: t("Consult", "Consulter"),
      links: [t("Tax account [+]", "Compte fiscal [+]"), t("Property notices", "Avis fonciers")]
    },
    {
      title: t("Declare", "Déclarer"),
      links: [
        t("VAT", "TVA"),
        t("Corporate tax", "Impôt sur les sociétés"),
        t("Payroll tax", "Taxe sur les salaires"),
        t("Business rates", "CFE"),
        t("Property duty", "Droits immobiliers"),
        t("Cross-border payments [+]", "Paiements transfrontaliers [+]"),
        t("Result [+]", "Résultat [+]")
      ]
    },
    {
      title: t("Pay", "Payer"),
      links: [
        t("VAT", "TVA"),
        t("Corporate tax", "Impôt sur les sociétés"),
        t("Payroll tax", "Taxe sur les salaires"),
        t("Business rates", "CFE"),
        t("Property duty", "Droits immobiliers"),
        t("Withholding tax", "Retenue à la source"),
        t("Fines [+]", "Amendes [+]")
      ]
    },
    {
      title: t("Requests", "Demandes"),
      links: [
        t("VAT refund", "Remboursement de TVA"),
        t("Payment plan", "Plan de règlement"),
        t("Change of address [+]", "Changement d’adresse [+]")
      ]
    }
  ]);
  const boxes: PortalSection[] = $derived([
    {
      title: t("MY FILES", "MES DOSSIERS"),
      links: [t("Choose a file", "Choisir un dossier"), t("See all my files", "Voir tous mes dossiers")]
    },
    {
      title: t("MY SPACE", "MON ESPACE"),
      links: [
        t("Manage services", "Gérer les services"),
        t("Manage bank accounts [+]", "Gérer les comptes bancaires [+]"),
        t("Manage direct debit mandates", "Gérer les mandats de prélèvement")
      ]
    },
    {
      title: t("OTHER SERVICES", "AUTRES SERVICES"),
      links: [
        t("Tax calendar", "Calendrier fiscal"),
        t("Declarant tests", "Tests déclarants"),
        t("Contact details of your office", "Coordonnées de votre service")
      ]
    }
  ]);
  const nav: string[] = $derived([
    t("FILE", "DOSSIER"),
    t("MANAGE", "GÉRER"),
    t("CONSULT", "CONSULTER"),
    t("DECLARE", "DÉCLARER"),
    t("PAY", "PAYER"),
    t("REQUESTS", "DEMANDES"),
    t("MESSAGES", "MESSAGERIE")
  ]);
</script>

<div class="portal">
  <div class="portal__head">
    <span class="portal__logo">RTS<small>republic tax service</small></span>
    <span class="portal__space">{t("PROFESSIONALS", "PROFESSIONNELS")}</span>
    <nav class="portal__nav">
      {#each nav as item (item)}
        <span>{item}</span>
      {/each}
    </nav>
  </div>
  <div class="portal__body">
    <aside class="side">
      <p><strong>{t("Mrs ROSEMONT Lea", "Mme ROSEMONT Lea")}</strong></p>
      <p>{t("Subscriber", "Identifiant")}<br />26101570101919</p>
      <p>{t("Password expires:", "Expiration du mot de passe :")}<br /><strong>10/11/2026</strong></p>
      <p class="side__links">
        › {t("Pro space", "Espace pro")}<br />› {t("taxes portal", "portail des impôts")}<br />› {t(
          "Log out",
          "Se déconnecter"
        )}
      </p>
    </aside>
    <div class="middle">
      {#each boxes as box (box.title)}
        <section class="box">
          <p class="box__title">{box.title}</p>
          {#each box.links as link (link)}
            <span class="link">{link}</span>
          {/each}
        </section>
      {/each}
    </div>
    <section class="services">
      <p class="box__title">{t("MY SERVICES", "MES SERVICES")}</p>
      {#each services as section (section.title)}
        <p class="services__group">{section.title}</p>
        {#each section.links as link, i (`${section.title}-${String(i)}`)}
          <span class="link">{link}</span>
        {/each}
      {/each}
    </section>
  </div>
</div>

<style lang="scss">
  .portal {
    width: 640px;
    border: 1px solid #b9c4d6;
    background: #ffffff;
    color: #1c2b4a;
    font:
      11px/1.45 Verdana,
      Tahoma,
      sans-serif;
    box-shadow: var(--mock-shadow-md);

    &__head {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 0 14px;
      padding: 8px 12px 0;
      background: linear-gradient(180deg, #14397a, #0b2758);
      color: #ffffff;
    }

    &__logo {
      display: grid;
      font:
        700 18px/1 Georgia,
        serif;

      small {
        font:
          9px/1.2 Verdana,
          sans-serif;
        letter-spacing: 0.04em;
      }
    }

    &__space {
      font-weight: 700;
      letter-spacing: 0.08em;
    }

    &__nav {
      display: flex;
      grid-column: 1 / -1;
      gap: 2px;
      margin-top: 8px;

      span {
        padding: 4px 8px;
        border-radius: 6px 6px 0 0;
        background: #b85400;
        font-size: 9px;
        font-weight: 700;
      }
    }

    &__body {
      display: grid;
      grid-template-columns: 120px 1fr 190px;
      gap: 12px;
      padding: 12px;
      background: #f2f5fa;
    }
  }

  .side {
    display: grid;
    align-content: start;
    gap: 8px;
    padding: 8px;
    border-radius: 0 0 10px 0;
    background: linear-gradient(180deg, #1d4b93, #133a78);
    color: #ffffff;
    font-size: 10px;

    &__links {
      color: #ffcf7a;
    }
  }

  .middle {
    display: grid;
    align-content: start;
    gap: 10px;
  }

  .box {
    display: grid;
    gap: 3px;
    padding: 8px 10px;
    border: 1px solid #f0b072;
    background: #ffffff;

    &__title {
      margin-bottom: 4px;
      padding-bottom: 3px;
      border-bottom: 1px solid #f0b072;
      color: #b5530a;
      font-weight: 700;
    }
  }

  .services {
    display: grid;
    align-content: start;
    gap: 2px;
    padding: 8px 10px;
    border: 1px solid #b9c4d6;
    background: #ffffff;

    &__group {
      margin-top: 6px;
      color: #b5530a;
      font-weight: 700;
    }
  }

  .link {
    color: #14397a;

    &::before {
      content: "› ";
      color: #e8780a;
      font-weight: 700;
    }
  }
</style>
