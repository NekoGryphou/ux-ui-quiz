import type { Quiz, QuizOption } from "../types";

const option = (id: QuizOption["id"], decision: string): QuizOption => ({
  id,
  decision
});

export const extraQuizzes: Quiz[] = [
  {
    id: 31,
    title: "Invisible Table Sorting",
    theme: "Dashboard",
    scenario:
      "A reporting table opens in a pre-ordered state, with rows already arranged by one of the columns.",
    prompt: "What is the strongest UX/UI issue in this table view?",
    visual: {
      pattern: "dashboard",
      fidelity: "mock",
      accent: "ink",
      shell: "browser",
      shellTitle: "reports.example.com/subscriptions",
      breadcrumbs: ["Reports", "Renewals"],
      topbarTitle: "Renewals report",
      topbarActions: ["Share", "Export"],
      table: {
        headers: ["Customer", "Renewal date", "MRR"],
        rows: [
          ["North Peak", "May 02", "$125"],
          ["Acme Dental", "May 18", "$480"],
          ["River Labs", "May 27", "$940"]
        ]
      },
      title: "Subscription renewals"
    },
    correctAnswer: "A",
    explanation: [
      "Sortable tables should expose which column is active and which headers can be interacted with.",
      "Hidden sorting rules make data interpretation and exploration harder."
    ],
    uxPrinciple: "Make data controls discoverable",
    options: [
      option("A", "The table hides its active sort state and weakens sort affordance."),
      option("B", "All data tables should avoid sorting to preserve row stability."),
      option("C", "Reports should never include filter controls above a table.")
    ]
  },
  {
    id: 32,
    title: "No Way Out of Filtered Search",
    theme: "Search",
    scenario:
      "A customer search screen shows a query, several active filters, and an empty result.",
    prompt: "What is the strongest UX/UI issue in this screen?",
    visual: {
      pattern: "search",
      fidelity: "mock",
      accent: "gold",
      shell: "browser",
      shellTitle: "app.example.com/search",
      topbarTitle: "Search customers",
      topbarActions: ["Save search"],
      tags: ["Plan: Trial", "Region: EU", "Owner: Mia"],
      fields: [{ label: "Search customers", kind: "search", value: "acme", readonly: true }],
      emptyState: {
        title: "0 results"
      },
      title: "Search results"
    },
    correctAnswer: "C",
    explanation: [
      "Zero results are normal. The UX problem is that the interface does not provide an obvious way to broaden the search.",
      "Without removable filters, a clear-all action, or a suggested next step, the user is left stuck."
    ],
    uxPrinciple: "Design empty results for recovery",
    options: [
      option("A", "Search pages should never show empty states because they feel negative."),
      option("B", "The interface needs more decorative illustration around the no-results text."),
      option("C", "There is no obvious way to remove filters or broaden the search.")
    ]
  },
  {
    id: 33,
    title: "Competing Feedback Layers",
    theme: "Feedback",
    scenario:
      "After saving notification settings, the interface presents multiple success signals at once.",
    prompt: "What is the main UX/UI problem?",
    visual: {
      pattern: "settings",
      fidelity: "mock",
      accent: "lime",
      shell: "browser",
      shellTitle: "app.example.com/settings/notifications",
      topbarTitle: "Notification settings",
      topbarActions: ["Save"],
      banner: {
        title: "Changes saved",
        tone: "success"
      },
      toast: {
        title: "Changes saved",
        tone: "success"
      },
      switches: [
        { label: "Email digests", checked: true },
        { label: "Mentions", checked: true }
      ],
      title: "Delivery preferences"
    },
    correctAnswer: "B",
    explanation: [
      "Feedback should be proportional and not overwhelm the user with duplicate confirmation layers.",
      "Redundant success messaging creates noise and makes the UI feel less trustworthy."
    ],
    uxPrinciple: "Use feedback with the right intensity",
    options: [
      option("A", "Success feedback should never use green because it blends into settings pages."),
      option("B", "The interface uses redundant feedback patterns for the same outcome."),
      option("C", "Settings pages should not allow inline confirmation at all.")
    ]
  },
  {
    id: 34,
    title: "Progress Claims the Wrong Step",
    theme: "Onboarding",
    scenario:
      "An onboarding flow shows a stepper, a progress bar, and a content panel for the current setup task.",
    prompt: "What is the strongest UX/UI issue in this onboarding screen?",
    visual: {
      pattern: "onboarding",
      fidelity: "mini",
      accent: "coral",
      shell: "browser",
      shellTitle: "setup.example.com/workspace",
      stepper: [
        { label: "Workspace name", state: "complete" },
        { label: "Invite team", state: "current" },
        { label: "Connect tools", state: "upcoming" },
        { label: "Launch", state: "upcoming" }
      ],
      eyebrow: "Setup progress",
      title: "Invite your team",
      subtitle: "Add teammates before continuing.",
      progressPercent: 90,
      primaryLabel: "Continue"
    },
    correctAnswer: "A",
    explanation: [
      "Progress indicators must agree with the actual step the user is on.",
      "If the bar says nearly done while the content shows an early task, users lose trust in the flow."
    ],
    uxPrinciple: "Represent progress honestly",
    options: [
      option("A", "The progress indicators contradict the actual task shown on screen."),
      option("B", "Setups should never use steppers because they make tasks feel longer."),
      option("C", "Onboarding flows should not let users skip any steps.")
    ]
  },
  {
    id: 35,
    title: "Toolbar Without Priority",
    theme: "Navigation",
    scenario:
      "A customer list toolbar includes routine tools, a creation action, and a destructive action in the same row.",
    prompt: "What is the main UX/UI issue?",
    visual: {
      pattern: "list",
      fidelity: "mock",
      accent: "cyan",
      shell: "browser",
      shellTitle: "crm.example.com/customers",
      topbarTitle: "Customers",
      topbarActions: ["Share"],
      toolbar: ["Filter", "Export", "Add Customer", "Delete Selected"],
      table: {
        headers: ["Customer", "Owner", "Status"],
        rows: [
          ["Atlas Health", "Nora", "Active"],
          ["North Peak", "Leo", "Trial"],
          ["River Labs", "Mia", "Paused"]
        ]
      },
      title: "Customer list"
    },
    correctAnswer: "C",
    explanation: [
      "Toolbars should still communicate priority, especially when destructive and primary actions coexist.",
      "Equal styling flattens important differences in intent and consequence."
    ],
    uxPrinciple: "Differentiate utilities from key actions",
    options: [
      option("A", "Toolbars should include only three actions at most."),
      option("B", "Data tables should never place actions above the rows."),
      option("C", "The toolbar flattens hierarchy between primary, utility, and destructive actions.")
    ]
  },
  {
    id: 36,
    title: "Mobile Success Without Next Step",
    theme: "Mobile",
    scenario:
      "A mobile upload flow ends on a success screen after the file is saved.",
    prompt: "What is the most important UX/UI issue?",
    visual: {
      pattern: "notification",
      fidelity: "mock",
      accent: "lime",
      shell: "phone",
      topbarTitle: "Expense receipt",
      topbarActions: ["Close"],
      title: "Receipt uploaded",
      items: ["IMG_2841.jpg"],
      toast: {
        title: "Saved",
        tone: "success"
      },
      primaryLabel: "Done"
    },
    correctAnswer: "B",
    explanation: [
      "Completion screens should help users decide what happens next, especially on mobile where context is tighter.",
      "Success without onward guidance can feel abrupt and incomplete."
    ],
    uxPrinciple: "Use completion states to guide onward flow",
    options: [
      option("A", "Mobile success screens should never include actions after upload."),
      option("B", "The success state confirms completion but fails to support the next likely action."),
      option("C", "The upload flow should always auto-close instead of showing a success state.")
    ]
  }
];
