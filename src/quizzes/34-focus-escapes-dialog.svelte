<script lang="ts">
    import {
        BrandTheme,
        BrowserShell,
        Field,
        KeyboardSandbox,
        KeyTarget,
        MockButton,
        Modal,
        Skeleton,
        TopBar
    } from "../mock";
    import type {KeyStop} from "../mock/types/keyboard.types";

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
