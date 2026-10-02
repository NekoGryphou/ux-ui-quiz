<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "command-recall",
    title: "COMMAND ===>",
    principle: "Show the available actions instead of making users recall them",
    scenario: "A warehouse clerk who joined last week needs to put a customer’s order on hold.",
    prompt: "What is the main issue with this screen?",
    kind: "single",
    choices: [
      { id: "a", text: "Nothing on screen lists the available commands, so the clerk must remember the right code." },
      {
        id: "b",
        text: "The screen uses green text on black, where dark text on a light background would read better."
      },
      {
        id: "c",
        text: "Every label is in capitals, which reads a little slower than sentence case in long descriptions."
      },
      { id: "d", text: "The order list pages by six lines, where a scrolling list would avoid jumping between pages." }
    ],
    correct: ["a"],
    explanation: [
      "The screen shows orders and a “COMMAND ===>” prompt, but no hint of what can be typed there: holding an order means already knowing it’s “HLD” followed by the order number.",
      "Recognition beats recall: list the commands on screen, such as a function-key legend (“F3=Exit F6=Hold F10=Release”), so newcomers can act and experts can still type fast.",
      "Green on black has strong contrast, and capitals and paging are conventions of these terminals rather than blockers."
    ]
  };
</script>

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
