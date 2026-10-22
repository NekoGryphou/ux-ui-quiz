<script lang="ts">
  import ConfirmDialog from "../components/ConfirmDialog.svelte";
  import type { RunKind } from "../engine/types/run.types";
  import { session } from "./session";
  import type { RunGuardDialogProps } from "./types/run-guard-dialog.types";
  import { abandonBody, abandonTitle } from "./utils/run-label.utils";

  let { guard }: RunGuardDialogProps = $props();

  const kind: RunKind = $derived(session.activeRun?.kind ?? "full");
  const answered: number = $derived(session.activeRun?.answeredCount ?? 0);

  /**
   * @private
   * @desc Abandons the active run and starts the pending one.
   */
  const confirm = (): void => {
    guard.confirm();
  };
</script>

<ConfirmDialog
  bind:open={guard.confirming}
  title={abandonTitle(kind)}
  body={abandonBody(kind, answered)}
  confirmLabel="Abandon and start"
  onconfirm={confirm}
/>
