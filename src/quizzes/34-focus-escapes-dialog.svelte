<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";
  import { wcag } from "./utils/wcag.utils";

  export const meta: QuizMeta = {
    id: "focus-escapes-dialog",
    title: "Lost behind the dialog",
    principle: "Keep keyboard focus inside an open modal",
    scenario:
      "A keyboard user opens the Rename dialog to rename a file. Try it: click the preview and press Tab a few times.",
    prompt: "What is the main issue here?",
    kind: "single",
    choices: [
      { id: "a", text: "After the dialog’s buttons, keyboard focus moves on to links on the page behind it." },
      { id: "b", text: "The dialog doesn’t preselect the file name, so users must clear it before typing." },
      { id: "c", text: "The Cancel button comes first, which slows down the most common action in the dialog." },
      { id: "d", text: "The page behind the dialog is dimmed, which makes the surrounding context hard to see." }
    ],
    correct: ["a"],
    links: [
      wcag("2.4.3", "Focus Order", "focus-order"),
      { label: "ARIA pattern: modal dialog", url: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/" }
    ],
    explanation: [
      "While a modal dialog is open, Tab must cycle through the dialog’s own controls only. Here the fourth Tab slips onto “Share” behind the overlay: the user is now acting on a page they can’t see.",
      "Trap focus inside the dialog, close it with Escape, and return focus to the button that opened it. A native <dialog> opened with showModal(), or inert on the background, does this for you.",
      "Dimming the background is the expected modal pattern, and Cancel-then-confirm is a common button order."
    ]
  };
</script>

<script lang="ts">
  import type { KeyStop } from "../mock/types/keyboard.types";
  import {
    BrandTheme,
    BrowserShell,
    Field,
    KeyTarget,
    KeyboardSandbox,
    MockButton,
    Modal,
    Skeleton,
    TopBar
  } from "../mock";

  const stops: KeyStop[] = [
    { id: "name", label: "File name field, in the dialog" },
    { id: "cancel", label: "Cancel button, in the dialog" },
    { id: "rename", label: "Rename button, in the dialog" },
    { id: "share", label: "Share link, on the page behind the dialog" },
    { id: "file", label: "Q3 roadmap.pdf link, on the page behind the dialog" }
  ];
</script>

<BrandTheme brand="fintech">
  <KeyboardSandbox {stops}>
    <BrowserShell url="drive.northwind.io/files/q3-roadmap">
      <TopBar brand="Northwind Drive">
        <span class="spacer"></span>
        <KeyTarget id="share" inline><span class="share">Share</span></KeyTarget>
      </TopBar>
      <div class="page">
        <KeyTarget id="file" inline><p class="file">Q3 roadmap.pdf</p></KeyTarget>
        <Skeleton lines={4} />
        <Modal title="Rename file" floating>
          <KeyTarget id="name"><Field label="File name" value="Q3 roadmap.pdf" /></KeyTarget>
          {#snippet actions()}
            <KeyTarget id="cancel" inline><MockButton>Cancel</MockButton></KeyTarget>
            <KeyTarget id="rename" inline><MockButton variant="primary">Rename</MockButton></KeyTarget>
          {/snippet}
        </Modal>
      </div>
    </BrowserShell>
  </KeyboardSandbox>
</BrandTheme>

<style lang="scss">
  .spacer {
    flex: 1;
  }

  .share {
    padding: 4px 10px;
    color: var(--mock-primary-strong);
    font-weight: 600;
  }

  .page {
    position: relative;
    display: grid;
    align-content: start;
    gap: 14px;
    min-height: 300px;
    padding: 20px 24px;
  }

  .file {
    font-size: 18px;
    font-weight: 600;
  }
</style>
