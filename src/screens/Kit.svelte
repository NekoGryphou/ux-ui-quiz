<script lang="ts">
    import {
        Alert,
        AppBar,
        Avatar,
        Badge,
        Breadcrumbs,
        BrowserShell,
        Card,
        Checkbox,
        CodeEditor,
        CodeLines,
        EmptyState,
        Field,
        Hotspot,
        KeyboardSandbox,
        KeyTarget,
        Metric,
        MockButton,
        Modal,
        PhoneShell,
        Progress,
        SideNav,
        Skeleton,
        Spinner,
        Stepper,
        Switch,
        TabBar,
        Table,
        Tabs,
        Title,
        TopBar
    } from "../mock";
    import {KIT_CODE_SAMPLE, KIT_KEY_STOPS} from "./const/kit.const";
</script>

<div class="kit">
  <header>
    <h1 tabindex="-1">Mock kit</h1>
    <p>Building blocks for quiz visuals. Dev only.</p>
  </header>

  <section>
    <h2>Buttons & badges</h2>
    <div class="kit__panel">
      <div class="kit__row">
        <MockButton variant="primary">Primary</MockButton>
        <MockButton>Secondary</MockButton>
        <MockButton variant="ghost">Ghost</MockButton>
        <MockButton variant="danger" icon="trash">Delete</MockButton>
        <MockButton variant="success">Success</MockButton>
        <MockButton variant="link">Link</MockButton>
        <MockButton variant="primary" disabled>Disabled</MockButton>
        <MockButton icon="more" />
      </div>
      <div class="kit__row">
        <Badge>Neutral</Badge>
        <Badge tone="info">Info</Badge>
        <Badge tone="success">Paid</Badge>
        <Badge tone="warning">Pending</Badge>
        <Badge tone="danger" removable>Overdue</Badge>
        <Avatar name="Mia Chen" />
        <Avatar name="Sam Ortiz" />
        <Spinner size={20} />
      </div>
    </div>
  </section>

  <section>
    <h2>Form controls</h2>
    <div class="kit__panel kit__grid">
      <Field label="Email" placeholder="you@company.com" required />
      <Field label="Password" type="password" value="hunter22" state="focus" />
      <Field label="Country" type="select" value="France" />
      <Field label="Phone" value="06 12" state="error" message="Enter a valid phone number" />
      <Field label="Company" value="Acme" state="disabled" />
      <Field placeholder="Search" icon="search" />
      <Checkbox label="Remember me" checked />
      <Checkbox label="Monthly" radio checked hint="Billed every month" />
      <Switch label="Email alerts" checked hint="Sent daily" />
      <Switch label="Ambiguous" subtle checked />
      <Progress value={64} label="Uploading" showValue />
      <Skeleton />
    </div>
  </section>

  <section>
    <h2>Feedback</h2>
    <div class="kit__panel kit__grid">
      <Alert title="Heads up" body="Your trial ends in 3 days." />
      <Alert tone="success" title="Saved" body="Changes are live." />
      <Alert tone="warning" title="Unsaved changes" />
      <Alert tone="danger" title="Payment failed" body="Update your card." toast />
    </div>
  </section>

  <section>
    <h2>Navigation & data</h2>
    <div class="kit__panel kit__grid">
      <Breadcrumbs items={["Workspace", "Projects", "Atlas"]} />
      <Tabs items={["Overview", "Activity", "Settings"]} active={1} />
      <Stepper
        steps={[
          { label: "Account", state: "complete" },
          { label: "Team", state: "current" },
          { label: "Billing", state: "upcoming" }
        ]}
      />
      <SideNav
        items={[
          { label: "Home", icon: "home", active: true },
          { label: "Inbox", icon: "inbox", badge: "4" },
          { label: "Settings", icon: "settings" }
        ]}
      />
      <Metric label="Revenue" value="$48.2k" delta="+12%" trend="up" />
      <Metric label="Active users" value="12,940" delta="+3.1%" trend="up" featured />
    </div>
    <div class="kit__panel">
      <Table
        columns={[{ label: "Customer" }, { label: "Plan", sort: "asc" }, { label: "MRR", align: "end" }]}
        rows={[
          ["North Peak", "Pro", "$125"],
          ["Acme Dental", "Team", "$480"]
        ]}
      />
    </div>
  </section>

  <section>
    <h2>Surfaces</h2>
    <div class="kit__panel kit__grid">
      <Card title="Card" subtitle="With actions">
        {#snippet actions()}<MockButton size="sm">Edit</MockButton>{/snippet}
        <span>Body content</span>
      </Card>
      <EmptyState title="No invoices yet" body="Invoices appear here once a customer pays.">
        <MockButton variant="primary">Create invoice</MockButton>
      </EmptyState>
    </div>
    <div class="kit__shells">
      <BrowserShell url="app.example.com/projects">
        <TopBar brand="Acme" />
        <Modal title="Delete project?">
          <span>This cannot be undone.</span>
          {#snippet actions()}
            <MockButton>Cancel</MockButton>
            <MockButton variant="danger">Delete</MockButton>
          {/snippet}
        </Modal>
      </BrowserShell>
      <PhoneShell>
        <div style="padding: 16px; display: grid; gap: 12px">
          <strong>Phone shell</strong>
          <Field label="Name" placeholder="Jane" />
          <MockButton variant="primary" block>Continue</MockButton>
        </div>
      </PhoneShell>
    </div>
  </section>
  <section>
    <h2>Titles</h2>
    <div class="kit__panel">
      <Title size="lg">Large title</Title>
      <Title>Medium title</Title>
      <Title size="sm">Small title</Title>
    </div>
  </section>

  <section>
    <h2>Mobile</h2>
    <div class="kit__shells">
      <PhoneShell>
        <AppBar title="Inbox" back />
        <div class="kit__phone-body"><Skeleton lines={3} /></div>
        <TabBar
          tabs={[
            { icon: "home", label: "Home", active: true },
            { icon: "search", label: "Search" },
            { icon: "bell", label: "Alerts", badge: "2" },
            { icon: "user", label: "Profile" }
          ]}
        />
      </PhoneShell>
      <PhoneShell>
        <AppBar title="Discover" large />
        <div class="kit__phone-body"><Skeleton lines={3} /></div>
        <TabBar
          iconsOnly
          tabs={[
            { icon: "home", label: "Home", active: true },
            { icon: "search", label: "Search" },
            { icon: "user", label: "Profile" }
          ]}
        />
      </PhoneShell>
    </div>
  </section>

  <section>
    <h2>Code</h2>
    <div class="kit__shells">
      <CodeEditor filename="Example.html">
        <CodeLines code={KIT_CODE_SAMPLE} start={1} />
      </CodeEditor>
      <CodeEditor filename="Compact.html" compact>
        <CodeLines code={KIT_CODE_SAMPLE} start={1} />
      </CodeEditor>
    </div>
  </section>

  <section>
    <h2>Interactive</h2>
    <p>
      KeyboardSandbox: click it, then press Tab. Hotspot areas only become clickable inside a "spot it" question, so
      here they render as plain wrappers.
    </p>
    <div class="kit__shells">
      <KeyboardSandbox stops={[...KIT_KEY_STOPS]}>
        <div class="kit__sandbox">
          <KeyTarget id="kit-email"><Field label="Email" placeholder="you@company.com" /></KeyTarget>
          <KeyTarget id="kit-remember"><Checkbox label="Remember me" /></KeyTarget>
          <KeyTarget id="kit-submit" inline><MockButton variant="primary">Sign in</MockButton></KeyTarget>
        </div>
      </KeyboardSandbox>
      <div class="kit__sandbox">
        <Hotspot id="kit-area"><Alert tone="warning" title="A Hotspot-wrapped area" /></Hotspot>
      </div>
    </div>
  </section>
</div>

<style lang="scss">
  @use "$styles/mixins" as *;

  .kit {
    display: grid;
    gap: var(--space-6);

    h1 {
      font-size: var(--text-2xl);
    }

    h2 {
      margin-bottom: var(--space-3);
      @include eyebrow;
    }

    p {
      color: var(--text-muted);
    }

    &__panel {
      --font-heading: var(--font-mock);
      display: grid;
      // noinspection CssNoGenericFontName
      font-family: var(--font-mock);
      gap: var(--space-4);
      padding: var(--space-5);
      margin-bottom: var(--space-3);
      border-radius: var(--radius-lg);
      background: var(--mock-bg);
      color: var(--mock-text);
      font-size: 13px;
    }

    &__row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--space-3);
    }

    &__grid {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      align-items: start;
    }

    &__phone-body {
      padding: 12px 16px;
    }

    &__sandbox {
      display: grid;
      gap: 12px;
      width: 320px;
      padding: 18px;
      border-radius: 12px;
      background: var(--mock-surface);
      color: var(--mock-text);
      font-size: 13px;
    }

    &__shells {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: var(--space-5);
    }
  }
</style>
