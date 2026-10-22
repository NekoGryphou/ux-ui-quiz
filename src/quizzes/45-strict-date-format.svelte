<script lang="ts">
  import { RetroButton, RetroField, RetroWindow } from "../mock";

  const days: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const hours: string[] = ["7.5", "8", "7.5", "8", "6"];
</script>

<RetroWindow
  title="TimeTrack 4.1 - Weekly Timesheet"
  menu={["File", "Edit", "Entry", "Reports", "Help"]}
  status={["Entry mode", "User: MDUPONT"]}
  width={540}
>
  <div class="form">
    <div class="row">
      <span class="label">Employee:</span>
      <RetroField value="DUPONT, Marie" width={180} />
    </div>
    <div class="row">
      <span class="label">Project code:</span>
      <RetroField value="PRJ-0457 Harbour Bank" width={180} />
    </div>
    <div class="row">
      <span class="label">Week start (DDMMYYYY):</span>
      <RetroField value="14/05/2025" width={110} />
      <span class="error">⊗ Invalid date. Use the format DDMMYYYY.</span>
    </div>
    <fieldset class="hours">
      <legend>Hours</legend>
      {#each days as day, i (day)}
        <span class="day">{day}<RetroField value={hours[i] ?? ""} width={58} /></span>
      {/each}
    </fieldset>
    <div class="actions">
      <RetroButton primary>Save</RetroButton>
      <RetroButton>Close</RetroButton>
    </div>
  </div>
</RetroWindow>

<style lang="scss">
  .form {
    display: grid;
    gap: 10px;
    padding: 8px 6px;
  }

  .row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .label {
    flex: 0 0 150px;
  }

  .error {
    color: #8a0000;
  }

  .hours {
    display: flex;
    gap: 12px;
    margin: 4px 0 0;
    padding: 8px 10px 10px;
    border: 1px solid var(--mock-retro-shade);
    box-shadow: 1px 1px 0 var(--mock-retro-light);

    legend {
      padding: 0 4px;
    }
  }

  .day {
    display: grid;
    gap: 3px;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 6px;
  }
</style>
