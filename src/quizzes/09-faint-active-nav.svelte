<script lang="ts">
    import {Avatar, BrowserShell, Field, SideNav} from "../mock";
</script>

<BrowserShell url="desk.supportly.io/tickets/open">
  <div class="layout">
    <aside class="side">
      <span class="brand">Supportly</span>
      <SideNav
        activeStyle="faint"
        items={[
          { label: "Inbox", icon: "inbox", badge: "12" },
          { label: "Open tickets", icon: "message", active: true, badge: "38" },
          { label: "Assigned to me", icon: "user", badge: "5" },
          { label: "Reports", icon: "chart" },
          { label: "Settings", icon: "settings" }
        ]}
      />
    </aside>
    <div class="content">
      <Field placeholder="Search tickets" icon="search" />
      {#each [{ subject: "Refund not received", from: "Léa Moreau", age: "4 min" }, { subject: "Can’t reset password", from: "Tom Becker", age: "12 min" }, { subject: "Invoice shows wrong VAT", from: "Ana Silva", age: "26 min" }, { subject: "App crashes on login", from: "Yuki Sato", age: "41 min" }] as ticket (ticket.subject)}
        <div class="ticket">
          <Avatar name={ticket.from} />
          <span class="subject">{ticket.subject}</span>
          <span class="time">{ticket.age}</span>
        </div>
      {/each}
    </div>
  </div>
</BrowserShell>

<style lang="scss">
  .layout {
    display: grid;
    grid-template-columns: 190px 1fr;
    min-height: 340px;
  }

  .side {
    display: grid;
    align-content: start;
    gap: 14px;
    padding: 16px 10px;
    border-right: 1px solid var(--mock-border);
    background: var(--mock-surface);
  }

  .brand {
    padding: 0 10px;
    font-weight: 600;
  }

  .content {
    display: grid;
    align-content: start;
    gap: 8px;
    padding: 16px;
  }

  .ticket {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border: 1px solid var(--mock-border);
    border-radius: 10px;
    background: var(--mock-surface);
  }

  .subject {
    flex: 1;
    font-weight: 500;
  }

  .time {
    color: var(--mock-muted);
    font-size: 12px;
  }
</style>
