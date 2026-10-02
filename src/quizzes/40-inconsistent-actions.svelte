<script module lang="ts">
  import type { QuizMeta } from "../engine/types/quiz.types";

  export const meta: QuizMeta = {
    id: "inconsistent-actions",
    title: "Four cards, three ways to save",
    principle: "Keep patterns consistent across a product",
    scenario: "An admin updates several sections of their workspace settings, one card after the other.",
    prompt: "Click every place where the interface breaks its own pattern.",
    kind: "hotspot",
    regions: [
      { id: "nav", text: "Settings navigation" },
      { id: "profile-actions", text: "Profile card actions" },
      { id: "billing-actions", text: "Billing card actions" },
      { id: "security-actions", text: "Security card actions" },
      { id: "team-actions", text: "Team card actions" },
      { id: "page-title", text: "Page title" }
    ],
    correct: ["security-actions", "team-actions"],
    explanation: [
      "Profile and Billing set the pattern: a filled “Save” button on the right. Security switches to a green outline “Update” on the left, and Team hides the same action in a text link.",
      "Each variation makes users stop and re-read: is “Update” different from “Save”? Is the link even an action? Consistent placement, style and wording let people work on autopilot.",
      "Define the save action once in the design system and reuse it everywhere."
    ]
  };
</script>

<script lang="ts">
  import { BrandTheme, BrowserShell, Field, Hotspot, MockButton, SideNav, Switch, Title } from "../mock";
</script>

<BrandTheme brand="luxury">
  <BrowserShell url="app.northpeak.io/settings">
    <div class="layout">
      <Hotspot id="nav">
        <div class="side">
          <SideNav
            items={[
              { label: "General", icon: "settings", active: true },
              { label: "Members", icon: "user" },
              { label: "Billing", icon: "cart" }
            ]}
          />
        </div>
      </Hotspot>
      <div class="content">
        <Hotspot id="page-title" inline><Title>Workspace settings</Title></Hotspot>
        <div class="grid">
          <section class="card">
            <strong>Profile</strong>
            <Field value="Northpeak Studio" />
            <Hotspot id="profile-actions"
              ><div class="actions actions--end">
                <MockButton variant="primary" size="sm">Save</MockButton>
              </div></Hotspot
            >
          </section>
          <section class="card">
            <strong>Billing</strong>
            <Field value="finance@northpeak.io" />
            <Hotspot id="billing-actions"
              ><div class="actions actions--end">
                <MockButton variant="primary" size="sm">Save</MockButton>
              </div></Hotspot
            >
          </section>
          <section class="card">
            <strong>Security</strong>
            <Switch label="Require 2FA" checked />
            <Hotspot id="security-actions"><div class="actions"><span class="outline">Update</span></div></Hotspot>
          </section>
          <section class="card">
            <strong>Team</strong>
            <Switch label="Allow guests" />
            <Hotspot id="team-actions"
              ><div class="actions actions--end"><span class="link">Save changes</span></div></Hotspot
            >
          </section>
        </div>
      </div>
    </div>
  </BrowserShell>
</BrandTheme>

<style lang="scss">
  .layout {
    display: grid;
    grid-template-columns: 150px 1fr;
    min-height: 330px;
  }

  .side {
    height: 100%;
    padding: 14px 8px;
    border-right: 1px solid var(--mock-border);
    background: var(--mock-surface);
  }

  .content {
    display: grid;
    align-content: start;
    gap: 14px;
    padding: 18px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .card {
    display: grid;
    gap: 10px;
    padding: 14px;
    border: 1px solid var(--mock-border);
    border-radius: 10px;
    background: var(--mock-surface);
  }

  .actions {
    display: flex;

    &--end {
      justify-content: flex-end;
    }
  }

  .outline {
    padding: 4px 10px;
    border: 1px solid var(--mock-success);
    border-radius: var(--mock-radius);
    color: var(--mock-success);
    font-size: 12px;
    font-weight: 500;
  }

  .link {
    color: var(--mock-primary-strong);
    font-size: 12px;
    text-decoration: underline;
  }
</style>
