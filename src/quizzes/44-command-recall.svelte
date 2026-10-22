<script lang="ts">
  import { TerminalScreen } from "../mock";
  import type { TerminalLine } from "../mock/types/terminal-screen.types";

  const lines: TerminalLine[] = [
    { text: "ORDR100            ACME DISTRIBUTION          MON 12 MAY  09:41", bright: true },
    { text: "                      OPEN ORDERS - WAREHOUSE 02" },
    { text: "" },
    { text: "ORDER    CUSTOMER                 LINES   STATUS", bright: true },
    { text: "104821   BAKER & SONS                 3   OPEN" },
    { text: "104822   NORTHSIDE CAFE               7   OPEN" },
    { text: "104825   HILL FARM SUPPLIES           2   PICKING" },
    { text: "104826   GREENWAY GARDENS            12   OPEN" },
    { text: "104830   ROSE BAKERY                  4   OPEN" },
    { text: "104831   TOWNHALL CATERING            9   PICKING" },
    { text: "" },
    { text: "                                                   MORE..." },
    { text: "" }
  ];
</script>

<TerminalScreen {lines} prompt="COMMAND ===> " />
