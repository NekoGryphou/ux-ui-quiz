<script lang="ts">
  import { TerminalScreen } from "../mock";
  import type { TerminalLine } from "../mock/types/terminal-screen.types";
  import { t } from "../shared/locale.svelte";

  const lines: TerminalLine[] = $derived([
    {
      text: t(
        "ORDR100            ACME DISTRIBUTION          MON 12 MAY  09:41",
        "ORDR100            ACME DISTRIBUTION          LUN 12 MAI  09:41"
      ),
      bright: true
    },
    {
      text: t("                      OPEN ORDERS - WAREHOUSE 02", "                  COMMANDES OUVERTES - ENTREPÔT 02")
    },
    { text: "" },
    {
      text: t("ORDER    CUSTOMER                 LINES   STATUS", "CDE      CLIENT                  LIGNES   STATUT"),
      bright: true
    },
    { text: t("104821   BAKER & SONS                 3   OPEN", "104821   BAKER & SONS                 3   OUVERTE") },
    { text: t("104822   NORTHSIDE CAFE               7   OPEN", "104822   NORTHSIDE CAFE               7   OUVERTE") },
    {
      text: t(
        "104825   HILL FARM SUPPLIES           2   PICKING",
        "104825   HILL FARM SUPPLIES           2   PRÉPARATION"
      )
    },
    { text: t("104826   GREENWAY GARDENS            12   OPEN", "104826   GREENWAY GARDENS            12   OUVERTE") },
    { text: t("104830   ROSE BAKERY                  4   OPEN", "104830   ROSE BAKERY                  4   OUVERTE") },
    {
      text: t(
        "104831   TOWNHALL CATERING            9   PICKING",
        "104831   TOWNHALL CATERING            9   PRÉPARATION"
      )
    },
    { text: "" },
    {
      text: t(
        "                                                   MORE...",
        "                                                   SUITE..."
      )
    },
    { text: "" }
  ]);
</script>

<TerminalScreen {lines} prompt={t("COMMAND ===> ", "COMMANDE ===> ")} />
