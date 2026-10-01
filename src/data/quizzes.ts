import type { Quiz, QuizOption } from "../types";
import { extraQuizzes } from "./quizzesExtra";

const option = (id: QuizOption["id"], decision: string): QuizOption => ({
  id,
  decision
});

const baseQuizzes: Quiz[] = [
  {
    id: 1,
    title: "Destructive Color Mismatch",
    theme: "CTA",
    scenario:
      "A confirmation modal for permanently removing a project shows a gray Cancel button on the left and a bright green Delete Project button on the right.",
    prompt: "What is the main UX/UI issue in this interface?",
    visual: {
      pattern: "modal",
      fidelity: "mock",
      accent: "coral",
      eyebrow: "Permanent action",
      title: "Delete Project Atlas?",
      subtitle: "This action cannot be undone.",
      primaryLabel: "Delete Project",
      primaryTone: "success",
      secondaryLabel: "Cancel",
      helper: "The destructive action is visually reassuring."
    },
    correctAnswer: "A",
    explanation: [
      "Green usually signals success or safety, which undermines the perceived risk of a destructive action.",
      "Dangerous actions should look clearly risky through color, tone, and wording."
    ],
    uxPrinciple: "Match visual semantics to consequence",
    options: [
      option("A", "The destructive action uses a reassuring color that reduces perceived risk."),
      option("B", "The buttons should be stacked vertically instead of horizontally."),
      option("C", "The cancel button should be blue instead of gray.")
    ]
  },
  {
    id: 2,
    title: "Placeholder-Only Form",
    theme: "Forms",
    scenario:
      "A login form has fields for email and password, but both inputs rely only on placeholder text and no visible labels are shown above the fields.",
    prompt: "What is the key UX/UI problem here?",
    visual: {
      pattern: "form",
      fidelity: "mock",
      accent: "cyan",
      shell: "browser",
      shellTitle: "app.example.com/login",
      topbarTitle: "Sign in",
      topbarActions: ["Help"],
      title: "",
      fields: ["Email", "Password"],
      primaryLabel: "Continue",
      helper: "Field names disappear once the user starts typing."
    },
    correctAnswer: "B",
    explanation: [
      "Placeholders are not a substitute for persistent labels because they vanish during input.",
      "Missing labels hurt accessibility, scanning, and error recovery."
    ],
    uxPrinciple: "Keep field context persistent",
    options: [
      option("A", "The placeholders should use more descriptive sample text."),
      option("B", "Missing persistent labels harms clarity and accessibility."),
      option("C", "Password fields should always be wider than email fields.")
    ]
  },
  {
    id: 3,
    title: "Hidden Required Fields",
    theme: "Forms",
    scenario:
      "A signup form asks for several details and only responds after the user clicks Create account.",
    prompt: "What is the main issue users would encounter?",
    visual: {
      pattern: "form",
      fidelity: "mock",
      accent: "gold",
      eyebrow: "Create account",
      title: "Tell us about yourself",
      fields: ["Name", "Company", "Role", "Phone"],
      primaryLabel: "Create account",
      status: "Please complete all required fields.",
      statusTone: "danger",
      helper: "No required markers appear before submission."
    },
    correctAnswer: "A",
    explanation: [
      "Users should know the rules before they act, not learn them through failure.",
      "Required markers reduce avoidable friction and make forms easier to complete."
    ],
    uxPrinciple: "Set expectations before interaction",
    options: [
      option("A", "Required fields are not communicated before the user acts."),
      option("B", "The form contains too many fields in total."),
      option("C", "Required fields should never be used in signup flows.")
    ]
  },
  {
    id: 4,
    title: "Reversed Action Hierarchy",
    theme: "CTA",
    scenario:
      "A publishing page offers both Save Draft and Publish from the main editor view.",
    prompt: "What is the most important UX/UI issue?",
    visual: {
      pattern: "checkout",
      fidelity: "mock",
      accent: "ink",
      shell: "browser",
      shellTitle: "editor.example.com/post/451",
      breadcrumbs: ["Content", "Articles", "Draft"],
      topbarTitle: "Post editor",
      topbarActions: ["Preview", "Share"],
      toolbar: ["Outline", "Comments", "SEO", "History"],
      eyebrow: "Post editor",
      title: "Finish article",
      primaryLabel: "Save Draft",
      secondaryLabel: "Publish",
      secondaryTone: "ghost",
      helper: "The primary outcome is visually weaker than the secondary one."
    },
    correctAnswer: "B",
    explanation: [
      "Visual hierarchy should help users find the main task quickly.",
      "When secondary actions dominate, users hesitate or choose the wrong action."
    ],
    uxPrinciple: "Align emphasis with task priority",
    options: [
      option("A", "Draft actions should always be hidden until the user starts editing."),
      option("B", "The primary action lacks prominence compared with the secondary action."),
      option("C", "Blue should never be used for any button in publishing flows.")
    ]
  },
  {
    id: 5,
    title: "Silent Validation Failure",
    theme: "Errors",
    scenario:
      "A password reset form rejects the entered password and updates the field state after submission.",
    prompt: "What is the main UX/UI problem?",
    visual: {
      pattern: "form",
      fidelity: "mini",
      accent: "coral",
      eyebrow: "Reset password",
      title: "Choose a new password",
      subtitle: "Create a password for your account.",
      fields: [
        { label: "New password", kind: "password", state: "error", value: "short1" },
        { label: "Confirm password", kind: "password", value: "short1" }
      ],
      primaryLabel: "Update password",
      status: "Password is invalid.",
      statusTone: "danger"
    },
    correctAnswer: "C",
    explanation: [
      "Users need actionable error messages, not just a generic invalid state.",
      "Good validation explains both what failed and what the user should do next."
    ],
    uxPrinciple: "Make recovery obvious",
    options: [
      option("A", "The red border is too subtle to use as an error state."),
      option("B", "The form needs an animation to make the error more visible."),
      option("C", "Error feedback is not specific enough to help the user recover.")
    ]
  },
  {
    id: 6,
    title: "Contextless Loading",
    theme: "Loading",
    scenario:
      "A loading screen replaces an entire page for several seconds before any content appears.",
    prompt: "What is the core UX/UI issue?",
    visual: {
      pattern: "notification",
      fidelity: "mini",
      accent: "cyan",
      shell: "browser",
      shellTitle: "app.example.com/loading",
      eyebrow: "Loading",
      title: "Please wait",
      loading: true,
      loadingLabel: "Loading",
      helper: "A spinner appears with no context about what is loading or how long it may take."
    },
    correctAnswer: "B",
    explanation: [
      "People need system status and context during waiting states.",
      "Even a brief message can reduce uncertainty and make the wait feel intentional."
    ],
    uxPrinciple: "Expose system status",
    options: [
      option("A", "The spinner should rotate faster so the page feels more responsive."),
      option("B", "The interface gives no progress or context, which increases uncertainty."),
      option("C", "Loading states should always be avoided in favor of blank pages.")
    ]
  },
  {
    id: 7,
    title: "Ambiguous Toggle State",
    theme: "Settings",
    scenario:
      "A settings page lists several notification toggles for different channels.",
    prompt: "What is the main usability issue?",
    visual: {
      pattern: "settings",
      fidelity: "mock",
      accent: "lime",
      shell: "browser",
      shellTitle: "app.example.com/settings/notifications",
      eyebrow: "Preferences",
      title: "Notifications",
      headerActions: ["Save"],
      switches: [
        { label: "Email alerts", checked: true, subtle: true },
        { label: "Push alerts", checked: false, subtle: true },
        { label: "Weekly summary", checked: true, subtle: true }
      ]
    },
    correctAnswer: "B",
    explanation: [
      "Stateful controls need obvious current-state feedback.",
      "Subtle visual differences alone are unreliable, especially for accessibility and quick scanning."
    ],
    uxPrinciple: "Make state explicit",
    options: [
      option("A", "Toggle controls should always be replaced by checkboxes."),
      option("B", "The current state is not sufficiently clear."),
      option("C", "Notification settings should be moved into a different section.")
    ]
  },
  {
    id: 8,
    title: "Misleading Checkout Label",
    theme: "Commerce",
    scenario: "A checkout flow uses a generic CTA label on a purchase screen.",
    prompt: "What is the main UX/UI problem here?",
    visual: {
      pattern: "checkout",
      fidelity: "mock",
      accent: "gold",
      shell: "browser",
      shellTitle: "shop.example.com/checkout/review",
      eyebrow: "Final step",
      title: "Total due today: $184",
      subtitle: "Payment method and shipping details are already confirmed.",
      headerActions: ["Edit"],
      items: ["Visa •••• 4242", "Express shipping", "Place order to complete purchase"],
      primaryLabel: "Continue",
      secondaryLabel: "Back to cart"
    },
    correctAnswer: "B",
    explanation: [
      "Labels must reflect the actual consequence of the action.",
      "A vague CTA is especially risky when the outcome is irreversible or financial."
    ],
    uxPrinciple: "Use outcome-based labels",
    options: [
      option("A", "The button should be wider because checkout actions are important."),
      option("B", "The label is misleading about the consequence of the action."),
      option("C", "Checkout buttons should always use green backgrounds.")
    ]
  },
  {
    id: 9,
    title: "Low-Contrast Active Navigation",
    theme: "Accessibility",
    scenario:
      "A sidebar menu highlights the current page with a very light visual treatment.",
    prompt: "What is the most likely UX/UI issue?",
    visual: {
      pattern: "list",
      fidelity: "mock",
      accent: "gold",
      shell: "browser",
      shellTitle: "workspace.example.com/customers",
      breadcrumbs: ["Workspace", "Customers"],
      topbarTitle: "Customers",
      topbarActions: ["Export"],
      title: "Sections",
      navItems: [
        { label: "Dashboard" },
        { label: "Customers", active: true },
        { label: "Billing" },
        { label: "Settings" }
      ]
    },
    correctAnswer: "A",
    explanation: [
      "Selected navigation states must be easy to perceive and read.",
      "Low contrast weakens orientation and creates accessibility failures."
    ],
    uxPrinciple: "Keep orientation states legible",
    options: [
      option("A", "The selected item has poor contrast and may be hard to perceive."),
      option("B", "Yellow should never be used anywhere in navigation."),
      option("C", "Sidebars should not have active states at all.")
    ]
  },
  {
    id: 10,
    title: "Unclear Input Expectations",
    theme: "Forms",
    scenario:
      "A registration form asks for a phone number and shows an error after submission.",
    prompt: "What issue should users identify?",
    visual: {
      pattern: "form",
      fidelity: "mock",
      accent: "cyan",
      eyebrow: "Registration",
      title: "Contact details",
      fields: ["Name", { label: "06 12 34 56 78", state: "error" }, "Company"],
      status: "Phone number is invalid.",
      statusTone: "danger",
      primaryLabel: "Register"
    },
    correctAnswer: "B",
    explanation: [
      "Forms work better when expectations are shown before validation fails.",
      "Examples and helper text prevent avoidable errors."
    ],
    uxPrinciple: "Prevent errors before they happen",
    options: [
      option("A", "Forms should never validate phone numbers."),
      option("B", "Input expectations are unclear before the error occurs."),
      option("C", "Company should appear before phone in the field order.")
    ]
  },
  {
    id: 11,
    title: "Vague Success Feedback",
    theme: "Feedback",
    scenario:
      "A toast notification appears in the corner saying only Success, without stating what action succeeded.",
    prompt: "What is the main UX/UI issue?",
    visual: {
      pattern: "notification",
      fidelity: "mini",
      accent: "lime",
      eyebrow: "Toast",
      title: "Success",
      helper: "No object or action is named."
    },
    correctAnswer: "B",
    explanation: [
      "Feedback should confirm the result in plain language, not just report a status word.",
      "Users need to know what changed and whether further action is needed."
    ],
    uxPrinciple: "Make outcomes explicit",
    options: [
      option("A", "Toast notifications should always appear at the bottom of the screen."),
      option("B", "The feedback lacks meaningful context."),
      option("C", "Success states should be silent to avoid distracting users.")
    ]
  },
  {
    id: 12,
    title: "Unlabeled Icon Control",
    theme: "Accessibility",
    scenario:
      "A search bar uses a separate icon-only button beside the field, but the button has no visible label, tooltip, or accessible name.",
    prompt: "What is the primary accessibility issue?",
    visual: {
      pattern: "search",
      fidelity: "mini",
      accent: "ink",
      shell: "browser",
      shellTitle: "app.example.com/search",
      eyebrow: "Search",
      title: "Find customers",
      fields: ["Search..."],
      iconAction: "Search"
    },
    correctAnswer: "B",
    explanation: [
      "Icon-only controls must have accessible names so their purpose is announced and understood.",
      "Without that, the control becomes ambiguous for assistive technology and many sighted users."
    ],
    uxPrinciple: "Label non-text controls",
    options: [
      option("A", "Search actions should never use icons."),
      option("B", "The icon-only control may lack an accessible name."),
      option("C", "The placeholder should include more words.")
    ]
  },
  {
    id: 13,
    title: "Misleading KPI Emphasis",
    theme: "Dashboard",
    scenario:
      "A dashboard emphasizes one KPI far more strongly than the others in the same summary row.",
    prompt: "Which UX/UI principle is being violated?",
    visual: {
      pattern: "dashboard",
      fidelity: "mock",
      accent: "coral",
      eyebrow: "Executive overview",
      title: "Weekly performance",
      metrics: [
        { label: "Referral clicks", value: "18k", tone: "good" },
        { label: "Revenue", value: "$412k", tone: "muted" },
        { label: "Churn", value: "1.8%", tone: "warn" }
      ],
      featuredMetricIndex: 0
    },
    correctAnswer: "A",
    explanation: [
      "Visual hierarchy should reinforce information priority.",
      "When minor data dominates, users are steered toward the wrong interpretation."
    ],
    uxPrinciple: "Weight information by importance",
    options: [
      option("A", "Visual hierarchy does not match business importance."),
      option("B", "All dashboard cards should always be exactly the same size."),
      option("C", "Revenue should never share a row with other metrics.")
    ]
  },
  {
    id: 14,
    title: "Navigation Convention Break",
    theme: "Mobile",
    scenario:
      "In a mobile view, the back arrow sits on the far right while the screen title appears on the far left.",
    prompt: "What is the likely UX/UI issue?",
    visual: {
      pattern: "list",
      fidelity: "mock",
      accent: "cyan",
      shell: "phone",
      topbarTitle: "Customer profile",
      topbarActions: ["←"],
      title: "Account overview",
      items: ["Orders", "Payment methods", "Addresses"],
      subtitle: ""
    },
    correctAnswer: "A",
    explanation: [
      "Navigation benefits from strong learned conventions, especially on mobile.",
      "Breaking those conventions increases cognitive load and slows basic tasks."
    ],
    uxPrinciple: "Respect common wayfinding patterns",
    options: [
      option("A", "The layout conflicts with common navigation expectations."),
      option("B", "Mobile screens should never display a title."),
      option("C", "Back controls should always be centered.")
    ]
  },
  {
    id: 15,
    title: "Invisible Processing State",
    theme: "Feedback",
    scenario:
      "After a form is submitted, the main action becomes unavailable and the page takes several seconds to respond.",
    prompt: "What is the main UX/UI problem?",
    visual: {
      pattern: "form",
      fidelity: "mini",
      accent: "ink",
      eyebrow: "Submit application",
      title: "Review complete",
      fields: ["Applicant name", "Portfolio link"],
      primaryLabel: "Submitting...",
      primaryTone: "quiet"
    },
    correctAnswer: "B",
    explanation: [
      "Disabling a control without feedback makes the interface feel broken.",
      "Long waits need explicit processing states so users know the action is still in progress."
    ],
    uxPrinciple: "Show in-progress feedback",
    options: [
      option("A", "Disabled buttons should never be used for submit actions."),
      option("B", "The system provides insufficient feedback during processing."),
      option("C", "Eight seconds is acceptable without any message or progress cue.")
    ]
  },
  {
    id: 16,
    title: "Hidden Billing Frequency",
    theme: "Ethics",
    scenario:
      "A pricing card strongly emphasizes the headline price while other pricing details receive much less visual emphasis.",
    prompt: "What is the strongest UX/UI concern?",
    visual: {
      pattern: "checkout",
      fidelity: "mock",
      accent: "gold",
      eyebrow: "Starter plan",
      title: "Only $9.99",
      subtitle: "per week",
      items: ["Unlimited tasks", "Priority support"],
      primaryLabel: "Start free trial",
      helper: "The billing interval is visually minimized."
    },
    correctAnswer: "B",
    explanation: [
      "Pricing details are critical information and should not be visually hidden or softened.",
      "De-emphasizing the billing interval is misleading and drifts into dark-pattern territory."
    ],
    uxPrinciple: "Keep critical pricing transparent",
    options: [
      option("A", "The price looks too low and could reduce trust."),
      option("B", "Important cost information is visually de-emphasized in a misleading way."),
      option("C", "Weekly billing plans should never be offered in software products.")
    ]
  },
  {
    id: 17,
    title: "Terminology Drift",
    theme: "Microcopy",
    scenario:
      "A form field is labeled Address, but when validation fails the message says Location invalid.",
    prompt: "What is the primary UX/UI problem?",
    visual: {
      pattern: "form",
      fidelity: "mini",
      accent: "coral",
      eyebrow: "Shipping details",
      title: "Address",
      fields: ["Address"],
      status: "Location invalid",
      statusTone: "danger",
      primaryLabel: "Save address",
      helper: "The field label and error message use different terms."
    },
    correctAnswer: "A",
    explanation: [
      "Consistent terminology helps users connect fields, actions, and feedback quickly.",
      "When labels and errors use different words, recovery becomes harder."
    ],
    uxPrinciple: "Keep language consistent",
    options: [
      option("A", "Inconsistent terminology increases confusion."),
      option("B", "Address fields should always be split into three separate inputs."),
      option("C", "Error messages should never use adjectives.")
    ]
  },
  {
    id: 18,
    title: "Weak Click Affordance",
    theme: "Navigation",
    scenario:
      "A table row opens details when clicked, but it looks identical to non-interactive rows until the user hovers over it.",
    prompt: "What issue should users identify?",
    visual: {
      pattern: "list",
      fidelity: "mock",
      accent: "ink",
      shell: "browser",
      shellTitle: "ops.example.com/orders",
      topbarTitle: "Orders",
      topbarActions: ["Export"],
      toolbar: ["Filter", "Sort", "Columns"],
      eyebrow: "Orders",
      title: "Recent orders",
      table: {
        headers: ["Order", "Status", "Updated"],
        rows: [
          ["#4518", "Pending", "2m ago"],
          ["#4517", "Shipped", "18m ago"],
          ["#4516", "Refunded", "1h ago"]
        ]
      },
      helper: "Rows appear static until hover reveals clickability."
    },
    correctAnswer: "B",
    explanation: [
      "Interactive elements should signal interactivity before hover, especially on touch devices where hover does not exist.",
      "Weak affordance leads to missed actions and slower exploration."
    ],
    uxPrinciple: "Make interactivity visible",
    options: [
      option("A", "Rows in tables should never be clickable."),
      option("B", "The affordance is weak before hover interaction."),
      option("C", "Every interactive table row should be replaced by a modal.")
    ]
  },
  {
    id: 19,
    title: "Ambiguous Confirmation Buttons",
    theme: "Microcopy",
    scenario:
      "A leave-without-saving modal offers two buttons labeled No and Yes, without clarifying what each choice actually does.",
    prompt: "What is the UX/UI problem?",
    visual: {
      pattern: "modal",
      fidelity: "mini",
      accent: "cyan",
      eyebrow: "Unsaved changes",
      title: "Leave this page?",
      subtitle: "You have edits that have not been saved.",
      primaryLabel: "Yes",
      secondaryLabel: "No",
      helper: "The action labels depend on rereading the question."
    },
    correctAnswer: "B",
    explanation: [
      "Generic yes/no labels force users to reparse the sentence every time.",
      "Specific actions like Stay on page and Leave without saving reduce decision errors."
    ],
    uxPrinciple: "Label actions, not just answers",
    options: [
      option("A", "Binary choices should never appear in confirmation modals."),
      option("B", "The actions are ambiguous and force users to parse the question each time."),
      option("C", "Confirmation dialogs should always contain three buttons instead of two.")
    ]
  },
  {
    id: 20,
    title: "Indistinct Disabled State",
    theme: "Accessibility",
    scenario:
      "A dark-themed billing form contains a mix of available and unavailable fields.",
    prompt: "What is the main problem with this state design?",
    visual: {
      pattern: "form",
      fidelity: "mock",
      accent: "cyan",
      shell: "browser",
      shellTitle: "app.example.com/billing",
      dark: true,
      eyebrow: "Billing",
      title: "Payment details",
      fields: [
        "Card number",
        { label: "Expiry date", state: "disabled" },
        { label: "CVC", state: "disabled" }
      ]
    },
    correctAnswer: "A",
    explanation: [
      "Users should be able to distinguish available controls from unavailable ones at a glance.",
      "Weak disabled states waste effort and create uncertainty."
    ],
    uxPrinciple: "Differentiate control states clearly",
    options: [
      option("A", "Disabled states are not clearly distinguishable."),
      option("B", "Dark themes should not contain form inputs."),
      option("C", "Borders should be removed entirely from disabled fields.")
    ]
  },
  {
    id: 21,
    title: "Conflicting Navigation Context",
    theme: "Navigation",
    scenario: "A profile creation screen gives conflicting location cues between the navigation path and the page content.",
    prompt: "What is the main UX/UI issue?",
    visual: {
      pattern: "list",
      fidelity: "mini",
      accent: "gold",
      shell: "browser",
      shellTitle: "app.example.com/settings/profile/new",
      breadcrumbs: ["Home", "Settings", "Edit"],
      topbarTitle: "Profile",
      topbarActions: ["Save draft"],
      title: "Create Profile",
      items: ["Name", "Email", "Role"]
    },
    correctAnswer: "B",
    explanation: [
      "Breadcrumbs and page titles should reinforce the same mental model.",
      "Contradictory context weakens trust and makes orientation harder."
    ],
    uxPrinciple: "Keep wayfinding coherent",
    options: [
      option("A", "Breadcrumbs should never include the Home level."),
      option("B", "Navigation context conflicts with the page purpose."),
      option("C", "Titles should always match URL path segments exactly.")
    ]
  },
  {
    id: 22,
    title: "Default Marketing Opt-In",
    theme: "Ethics",
    scenario:
      "A newsletter signup includes a pre-checked checkbox that says I agree to receive partner offers and updates.",
    prompt: "What is the strongest UX/UI concern?",
    visual: {
      pattern: "form",
      fidelity: "mini",
      accent: "coral",
      eyebrow: "Create account",
      title: "Stay informed",
      fields: ["Email address"],
      checkboxes: [{ label: "Partner offers and updates", checked: true }],
      primaryLabel: "Create account",
      helper: "Users are opted in unless they actively notice and uncheck it."
    },
    correctAnswer: "B",
    explanation: [
      "Preselected marketing consent manipulates inaction into agreement.",
      "Consent should be informed and explicit, not hidden inside defaults."
    ],
    uxPrinciple: "Avoid manipulative defaults",
    options: [
      option("A", "Consent requests should always use radio buttons instead of checkboxes."),
      option("B", "The default opt-in is manipulative and weakens informed consent."),
      option("C", "Partner offers should be mandatory for free accounts.")
    ]
  },
  {
    id: 23,
    title: "Mixed Editing Modes",
    theme: "Settings",
    scenario:
      "A profile page shows Edit, Save, and Cancel actions all at once even before the user has made any change.",
    prompt: "What is the main UX/UI issue?",
    visual: {
      pattern: "settings",
      fidelity: "mock",
      accent: "lime",
      eyebrow: "Profile",
      title: "Account details",
      items: ["Edit", "Save", "Cancel"],
      helper: "The available actions do not reflect a clear current mode."
    },
    correctAnswer: "A",
    explanation: [
      "Available actions should reflect whether the user is viewing or editing.",
      "Showing conflicting mode-specific actions creates noise and uncertainty."
    ],
    uxPrinciple: "Reflect current mode in available actions",
    options: [
      option("A", "Too many available actions reduce clarity about the current state."),
      option("B", "Pages should display only one button at a time."),
      option("C", "Cancel should always be styled as a danger action.")
    ]
  },
  {
    id: 24,
    title: "Contradictory Progress Signals",
    theme: "Onboarding",
    scenario: "A setup flow shows both a numbered step indicator and a progress bar on the same screen.",
    prompt: "What is the main UX/UI issue?",
    visual: {
      pattern: "onboarding",
      fidelity: "mini",
      accent: "cyan",
      shell: "browser",
      shellTitle: "app.example.com/onboarding",
      stepper: [
        { label: "Workspace", state: "complete" },
        { label: "Team", state: "current" },
        { label: "Integrations", state: "upcoming" },
        { label: "Billing", state: "upcoming" },
        { label: "Launch", state: "upcoming" }
      ],
      eyebrow: "Step 2 of 5",
      title: "Tell us about your team",
      progressPercent: 80,
      primaryLabel: "Continue"
    },
    correctAnswer: "B",
    explanation: [
      "Progress indicators should tell one consistent story.",
      "Conflicting progress cues damage trust and create frustration."
    ],
    uxPrinciple: "Keep progress indicators consistent",
    options: [
      option("A", "Progress indicators are unnecessary when steps are numbered."),
      option("B", "The progress visuals are inconsistent with the actual step count."),
      option("C", "Step numbers should always be hidden from users.")
    ]
  },
  {
    id: 25,
    title: "Softened Destructive Language",
    theme: "Microcopy",
    scenario:
      "Two account settings areas use different labels for actions that lead to the same final account outcome.",
    prompt: "What is the main UX/UI problem?",
    visual: {
      pattern: "list",
      fidelity: "mock",
      accent: "coral",
      shell: "browser",
      shellTitle: "app.example.com/settings/account",
      topbarTitle: "Account settings",
      topbarActions: ["Save"],
      eyebrow: "Account controls",
      title: "Account actions",
      callouts: [
        {
          title: "Archive account",
          body: "Moves this account to the deleted state in 30 days.",
          tone: "danger"
        },
        {
          title: "Deactivate account",
          body: "Moves this account to the deleted state in 30 days.",
          tone: "danger"
        }
      ]
    },
    correctAnswer: "B",
    explanation: [
      "Labels must match the true consequence of the action.",
      "Softened or inconsistent wording around deletion is misleading and risky."
    ],
    uxPrinciple: "Name actions honestly",
    options: [
      option("A", "Permanent deletion is too advanced to appear in menus."),
      option("B", "The terminology is inconsistent and misrepresents system behavior."),
      option("C", "Menus should never contain any destructive actions.")
    ]
  },
  {
    id: 26,
    title: "Ambiguous International Date",
    theme: "Forms",
    scenario:
      "A date field shows a numeric date in a product used internationally, but the interface provides no locale hint.",
    prompt: "What is the core UX/UI issue?",
    visual: {
      pattern: "form",
      fidelity: "mini",
      accent: "gold",
      eyebrow: "Booking",
      title: "Travel date",
      fields: ["03/04/2026"],
      primaryLabel: "Continue"
    },
    correctAnswer: "B",
    explanation: [
      "Dates are easy to misread when locale assumptions are hidden.",
      "Explicit formatting or locale-aware inputs reduce costly mistakes."
    ],
    uxPrinciple: "Design for global interpretation",
    options: [
      option("A", "Dates should always be typed manually instead of selected."),
      option("B", "The date format is ambiguous for many users."),
      option("C", "Date pickers should display only month names, not full dates.")
    ]
  },
  {
    id: 27,
    title: "Premature Inline Validation",
    theme: "Errors",
    scenario:
      "An email field starts showing validation feedback during text entry.",
    prompt: "What is the UX/UI problem with this validation behavior?",
    visual: {
      pattern: "form",
      fidelity: "mini",
      accent: "coral",
      eyebrow: "Contact",
      title: "Email address",
      fields: [{ label: "alex@gmail.com", state: "error", animation: "typing-email" }],
      status: "Invalid email",
      statusTone: "danger",
      statusLive: true,
      helper: ""
    },
    correctAnswer: "A",
    explanation: [
      "Real-time validation helps only when timed to the user’s actual progress.",
      "Showing errors too early interrupts flow and makes the form feel hostile."
    ],
    uxPrinciple: "Time feedback to user intent",
    options: [
      option("A", "Validation feedback is too aggressive and premature."),
      option("B", "Email inputs should be validated only after server submission."),
      option("C", "Inline validation should always use red text regardless of context.")
    ]
  },
  {
    id: 28,
    title: "Promotional Obstruction",
    theme: "Commerce",
    scenario:
      "A promotional panel appears over the checkout screen while the user is trying to finish the purchase.",
    prompt: "What is the best UX/UI assessment?",
    visual: {
      pattern: "checkout",
      fidelity: "mock",
      accent: "cyan",
      shell: "browser",
      shellTitle: "shop.example.com/checkout",
      topbarTitle: "Checkout",
      topbarActions: ["Help"],
      promoOverlay: {
        title: "Add protection for $9/month",
        body: "Protect your order before checkout",
        tone: "warning"
      },
      eyebrow: "Order summary",
      title: "$248 due today",
      items: ["Wireless headset", "Express shipping", "Taxes included"],
      primaryLabel: "Checkout",
      helper: "Marketing content interrupts a task-critical action."
    },
    correctAnswer: "B",
    explanation: [
      "Promotional content should not block primary task completion.",
      "Obstructing key actions creates friction and can feel manipulative."
    ],
    uxPrinciple: "Do not block the main task",
    options: [
      option("A", "Bottom overlays are always bad regardless of content."),
      option("B", "A marketing element blocks a primary task and creates friction."),
      option("C", "Checkout buttons should never appear near the bottom of a page.")
    ]
  },
  {
    id: 29,
    title: "False Link Affordance",
    theme: "Navigation",
    scenario:
      "A page uses blue styling for interactive text links, but one static section header is styled in exactly the same way.",
    prompt: "What issue does this create?",
    visual: {
      pattern: "list",
      fidelity: "mini",
      accent: "ink",
      shell: "browser",
      shellTitle: "help.example.com/account",
      eyebrow: "Help center",
      title: "Resources",
      items: ["Account limits", "Change billing plan", "Compare plans"],
      linkRows: [0, 1, 2]
    },
    correctAnswer: "A",
    explanation: [
      "Users rely on visual conventions to infer what can be clicked.",
      "When static text looks interactive, affordance becomes unreliable."
    ],
    uxPrinciple: "Reserve interaction styles for interactive elements",
    options: [
      option("A", "It weakens affordance by making static text appear interactive."),
      option("B", "Blue should be removed from the design system entirely."),
      option("C", "Headers should always be black regardless of context.")
    ]
  },
  {
    id: 30,
    title: "Under-Specified Confirmation",
    theme: "Feedback",
    scenario:
      "After a payment completes, the success screen gives only a very generic confirmation.",
    prompt: "What is the advanced UX/UI issue?",
    visual: {
      pattern: "notification",
      fidelity: "mock",
      accent: "lime",
      shell: "browser",
      shellTitle: "billing.example.com/payments/receipt",
      topbarTitle: "Payment receipt",
      topbarActions: ["Download PDF"],
      toast: {
        title: "Receipt emailed",
        tone: "success"
      },
      eyebrow: "Payment complete",
      title: "Processed",
      primaryLabel: "Done"
    },
    correctAnswer: "A",
    explanation: [
      "High-stakes actions need reassuring, detailed confirmation.",
      "Critical success states should summarize what happened and what the user can expect next."
    ],
    uxPrinciple: "Confirm critical outcomes fully",
    options: [
      option("A", "The success state lacks reassurance and key confirmation details."),
      option("B", "Payment confirmations should be minimal to keep users moving quickly."),
      option("C", "Success screens should redirect immediately without any details.")
    ]
  }
];

export const quizzes: Quiz[] = [...baseQuizzes, ...extraQuizzes];
