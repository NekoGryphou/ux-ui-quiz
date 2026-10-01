import {
  renderActivityList,
  renderAvatarStack,
  renderBanner,
  renderBreadcrumbs,
  renderBrowserShell,
  renderButtonRow,
  renderCalendarGrid,
  renderCallout,
  renderCheckboxList,
  renderChipRow,
  renderComparisonRows,
  renderDataTable,
  renderDateField,
  renderEmptyState,
  renderFieldStack,
  renderInlineFieldRow,
  renderInlineHint,
  renderInspectorPanel,
  renderKanban,
  renderMetricGrid,
  renderModalCard,
  renderNavList,
  renderNotificationStack,
  renderPagerDots,
  renderPagination,
  renderPhoneShell,
  renderProgressList,
  renderRadioList,
  renderRatingScale,
  renderSegmentedControl,
  renderSideSheet,
  renderSidebarSections,
  renderSkeleton,
  renderSlider,
  renderSplitSurface,
  renderStackedCards,
  renderStatStrip,
  renderStepper,
  renderSwitchRow,
  renderTabs,
  renderToast,
  renderToolbar,
  renderTopbar,
  renderUploadZone
} from "./quiz/render/kit";

const showcaseCard = (title: string, body: string, note?: string): string => `
  <article class="showcase-card">
    <header class="showcase-card__head">
      <h3>${title}</h3>
      ${note ? `<p>${note}</p>` : ""}
    </header>
    <div class="showcase-card__body">
      ${body}
    </div>
  </article>
`;

const showcaseSection = (title: string, intro: string, cards: string[]): string => `
  <section class="showcase-section">
    <div class="showcase-section__intro">
      <p class="kicker">Component Group</p>
      <h2>${title}</h2>
      <p>${intro}</p>
    </div>
    <div class="showcase-grid">
      ${cards.join("")}
    </div>
  </section>
`;

export const renderShowcase = (): string => `
  <main class="shell shell--showcase">
    <section class="showcase-hero">
      <div>
        <p class="kicker">Mock UI Kit</p>
        <h1>All reusable components in one place.</h1>
        <p>
          A separate inspection page for future question building. Controls, navigation, data displays, feedback states, and surfaces are grouped here so new quiz scenarios can be composed instead of improvised.
        </p>
      </div>
      <div class="showcase-hero__actions">
        <a class="hero-btn hero-btn--primary" href="#/">Back home</a>
        <a class="hero-btn hero-btn--secondary" href="#/quiz/1">Open quiz</a>
      </div>
    </section>

    ${showcaseSection(
      "Controls",
      "Form elements and decision inputs for settings, onboarding, checkout, and admin patterns.",
      [
        showcaseCard(
          "Buttons, Chips, Toolbar",
          `
            ${renderButtonRow([
              { label: "Save changes", tone: "primary" },
              { label: "Preview", tone: "secondary" },
              { label: "Dismiss", tone: "ghost" },
              { label: "Delete", tone: "danger" }
            ])}
            ${renderChipRow([
              { label: "Beta", tone: "default" },
              { label: "Healthy", tone: "positive" },
              { label: "Needs review", tone: "warning" },
              { label: "Blocked", tone: "danger" }
            ])}
            ${renderToolbar(["Filter", "Sort", "Columns", "Export"])}
          `
        ),
        showcaseCard(
          "Fields",
          `
            ${renderFieldStack(["Work email", "Password", "Company"])}
            ${renderInlineFieldRow([
              { label: "Start date", kind: "input" },
              { label: "Team size", kind: "select" }
            ])}
            ${renderFieldStack(["Search customers"], "search")}
            ${renderFieldStack(["Notes"], "textarea")}
          `
        ),
        showcaseCard(
          "Selection Controls",
          `
            ${renderSegmentedControl(["Weekly", "Monthly", "Quarterly"], 1)}
            ${renderSwitchRow("Email digests", true, "Summaries every Monday")}
            ${renderCheckboxList([
              { label: "Product updates", checked: true, hint: "Major releases only" },
              { label: "Marketing tips", checked: false, hint: "Weekly newsletter" }
            ])}
            ${renderRadioList([
              { label: "Required for all", selected: true, hint: "Default in onboarding" },
              { label: "Optional later", hint: "Asked after setup" }
            ])}
          `
        ),
        showcaseCard(
          "Special Inputs",
          `
            ${renderSlider("Notification volume", 68)}
            ${renderDateField("Renewal date", "May 24, 2026")}
            ${renderUploadZone("Drop invoice PDF", "PDF or PNG up to 8 MB")}
            ${renderRatingScale("Priority confidence", 4, 5)}
          `
        )
      ]
    )}

    ${showcaseSection(
      "Navigation",
      "Patterns for wayfinding, IA, pagination, and tabbed or sectioned products.",
      [
        showcaseCard(
          "Tabs and Breadcrumbs",
          `
            ${renderBreadcrumbs(["Workspace", "Reports", "Scheduled"])}
            ${renderTabs(["Overview", "Scheduled reports", "Exports", "Alerts"], 1)}
            ${renderPagination(2, 7)}
            ${renderPagerDots(5, 2)}
          `
        ),
        showcaseCard(
          "Topbars and Nav Lists",
          `
            ${renderTopbar("Customer profile", ["Share", "Archive"])}
            ${renderNavList([
              { label: "Dashboard", meta: "12" },
              { label: "Scheduled reports", active: true, meta: "3" },
              { label: "Alerts", meta: "1" },
              { label: "Settings" }
            ])}
          `
        ),
        showcaseCard(
          "Sidebar Sections",
          `
            ${renderSidebarSections([
              {
                title: "Workspace",
                items: [
                  { label: "Dashboard" },
                  { label: "Reports" },
                  { label: "Scheduled reports", active: true }
                ]
              },
              {
                title: "Admin",
                items: [{ label: "Billing" }, { label: "Members" }, { label: "Permissions" }]
              }
            ])}
          `
        )
      ]
    )}

    ${showcaseSection(
      "Data",
      "Dense but readable components for dashboards, reporting, analytics, calendars, and work tracking.",
      [
        showcaseCard(
          "Metrics and Stats",
          `
            ${renderMetricGrid([
              { label: "Trial conversion", value: "18.4%", tone: "good" },
              { label: "Time to first value", value: "2.3 days", tone: "muted" },
              { label: "Drop-off", value: "41%", tone: "warn" }
            ])}
            ${renderStatStrip([
              { label: "MRR", value: "$48k" },
              { label: "NPS", value: "34" },
              { label: "Churn", value: "2.8%" }
            ])}
          `
        ),
        showcaseCard(
          "Tables and Comparison",
          `
            ${renderDataTable(
              ["Plan", "Users", "Price"],
              [
                ["Starter", "5", "$24"],
                ["Growth", "15", "$79"],
                ["Scale", "Unlimited", "Contact sales"]
              ]
            )}
            ${renderComparisonRows([
              { label: "CTA weight", left: "Equal emphasis", right: "Primary + quiet secondary" },
              { label: "Form length", left: "7 fields upfront", right: "2 fields upfront" }
            ])}
          `
        ),
        showcaseCard(
          "Progress and Activity",
          `
            ${renderProgressList([
              { label: "Profile completion", value: 84, tone: "positive" },
              { label: "Setup friction", value: 36, tone: "warning" },
              { label: "Support load", value: 18, tone: "neutral" }
            ])}
            ${renderActivityList([
              { title: "Invoice failed", meta: "2 minutes ago", tone: "danger" },
              { title: "Workspace activated", meta: "14 minutes ago", tone: "positive" },
              { title: "New export requested", meta: "1 hour ago", tone: "neutral" }
            ])}
            ${renderAvatarStack(["Mia", "Noah", "Ava", "Leo"])}
          `
        ),
        showcaseCard(
          "Calendar and Kanban",
          `
            ${renderCalendarGrid([
              { label: "27", muted: true },
              { label: "28", muted: true },
              { label: "29" },
              { label: "30", marker: true },
              { label: "1", selected: true },
              { label: "2" },
              { label: "3" },
              { label: "4" },
              { label: "5" },
              { label: "6", marker: true },
              { label: "7" },
              { label: "8" },
              { label: "9" },
              { label: "10" }
            ])}
            ${renderKanban([
              { title: "Backlog", cards: ["Clarify CTA hierarchy", "Shorten signup form"] },
              { title: "Doing", cards: ["Rework onboarding entry"] },
              { title: "Done", cards: ["Fix loading skeleton"] }
            ])}
          `
        )
      ]
    )}

    ${showcaseSection(
      "Feedback",
      "System status, guidance, loading, onboarding, interruption, and empty-state patterns.",
      [
        showcaseCard(
          "Banners and Toasts",
          `
            ${renderBanner("Verification required", "We noticed a login from a new device.", "warning")}
            ${renderToast("Changes saved", "Notification settings updated.", "success")}
            ${renderInlineHint("Auto-saved 8 seconds ago", "success")}
            ${renderCallout("Why this matters", "Users need context before a destructive action.", "info")}
          `
        ),
        showcaseCard(
          "Notifications and Empty States",
          `
            ${renderNotificationStack([
              { title: "Build failed", body: "Your deployment did not pass checks.", tone: "danger" },
              { title: "Export ready", body: "Download the CSV report.", tone: "success" }
            ])}
            ${renderEmptyState("No saved filters", "Create one so your team can reuse it.", "Create filter")}
          `
        ),
        showcaseCard(
          "Steps and Loading",
          `
            ${renderStepper([
              { label: "Create workspace", state: "complete" },
              { label: "Invite team", state: "current" },
              { label: "Set preferences", state: "upcoming" }
            ])}
            ${renderSkeleton(4)}
          `
        )
      ]
    )}

    ${showcaseSection(
      "Surfaces",
      "Shells and containers for embedded product scenes, comparison screens, and guided interfaces.",
      [
        showcaseCard(
          "Browser and Modal",
          `
            ${renderBrowserShell(
              "Checkout flow",
              `${renderTopbar("Order summary", ["Help"])}${renderButtonRow([
                { label: "Place order", tone: "primary" },
                { label: "Explore financing", tone: "secondary" }
              ])}`
            )}
            ${renderModalCard({
              title: "Delete this dashboard?",
              body: "This action cannot be undone.",
              secondaryLabel: "Cancel",
              primaryLabel: "Delete"
            })}
          `
        ),
        showcaseCard(
          "Phone and Side Sheet",
          `
            ${renderPhoneShell(
              `${renderTopbar("Visit #2148", ["More"])}<div class="showcase-phone-body">${renderFieldStack([
                "Arrival 10:02",
                "Notes pending",
                "Next stop 14 min away"
              ])}${renderButtonRow([
                { label: "Confirm visit", tone: "primary" },
                { label: "More actions", tone: "secondary" }
              ])}</div>`
            )}
            ${renderSideSheet("Filter results", [
              renderCheckboxList([
                { label: "In stock", checked: true },
                { label: "Free shipping" },
                { label: "New arrivals", checked: true }
              ]),
              renderButtonRow([
                { label: "Apply", tone: "primary" },
                { label: "Reset", tone: "secondary" }
              ])
            ])}
          `
        ),
        showcaseCard(
          "Split and Inspection",
          `
            ${renderSplitSurface(
              renderStackedCards([
                renderBanner("Primary CTA", "One dominant action above the fold.", "success"),
                renderBanner("Secondary action", "Visible, but quieter.", "info")
              ]),
              renderInspectorPanel("Audit notes", [
                { label: "Hierarchy", value: "Clear" },
                { label: "Cognitive load", value: "Low" },
                { label: "Risk", value: "Minor" }
              ])
            )}
          `
        )
      ]
    )}
  </main>
`;

