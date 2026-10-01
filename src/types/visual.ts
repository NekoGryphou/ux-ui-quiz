export type AccentTone = "lime" | "coral" | "cyan" | "gold" | "ink";
export type VisualFidelity = "mock" | "mini";
export type VisualShell = "browser" | "phone";
export type MetricTone = "good" | "warn" | "muted";
export type NoticeTone = "info" | "success" | "warning" | "danger";
export type FieldKind = "input" | "select" | "search" | "textarea" | "password";
export type FieldState = "default" | "error" | "disabled";
export type FieldAnimation = "typing-email";
export type StepState = "complete" | "current" | "upcoming";
export type ButtonTone = "primary" | "secondary" | "ghost" | "danger" | "quiet" | "success";
export type StatusTone = "success" | "warning" | "danger" | "neutral";
export type StringList = string[];

export type Theme =
  | "Forms"
  | "CTA"
  | "Navigation"
  | "Mobile"
  | "Accessibility"
  | "Feedback"
  | "Loading"
  | "Empty States"
  | "Onboarding"
  | "Ethics"
  | "Dashboard"
  | "Microcopy"
  | "Errors"
  | "Search"
  | "Progressive Disclosure"
  | "Notifications"
  | "Settings"
  | "Commerce";

export type Pattern =
  | "form"
  | "checkout"
  | "dashboard"
  | "mobile"
  | "onboarding"
  | "settings"
  | "list"
  | "modal"
  | "search"
  | "empty"
  | "notification";

export interface Metric {
  label: string;
  value: string;
  tone?: MetricTone;
}

export interface Notice {
  title: string;
  body?: string;
  tone?: NoticeTone;
}

export interface Callout {
  title: string;
  body: string;
  tone?: NoticeTone;
}

export interface FieldSpec {
  label: string;
  kind?: FieldKind;
  state?: FieldState;
  pulse?: boolean;
  value?: string;
  placeholder?: string;
  animation?: FieldAnimation;
  readonly?: boolean;
}

export type FieldList = Array<string | FieldSpec>;

export interface NavItem {
  label: string;
  active?: boolean;
  meta?: string;
}

export interface StepItem {
  label: string;
  state?: StepState;
}

export interface TableData {
  headers: StringList;
  rows: StringList[];
}

export interface EmptyStateSpec {
  title: string;
  body?: string;
  action?: string;
}

export interface SwitchItem {
  label: string;
  checked?: boolean;
  hint?: string;
  subtle?: boolean;
}

export interface CheckboxItem {
  label: string;
  checked?: boolean;
  hint?: string;
}

export interface OptionVisual {
  pattern: Pattern;
  fidelity: VisualFidelity;
  accent: AccentTone;
  shell?: VisualShell;
  shellTitle?: string;
  dark?: boolean;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  fields?: FieldList;
  metrics?: Metric[];
  featuredMetricIndex?: number;
  items?: StringList;
  linkRows?: number[];
  navItems?: NavItem[];
  tags?: StringList;
  iconAction?: string;
  breadcrumbs?: StringList;
  tabs?: StringList;
  activeTab?: number;
  toolbar?: StringList;
  headerActions?: StringList;
  topbarTitle?: string;
  topbarActions?: StringList;
  banner?: Notice;
  toast?: Notice;
  callouts?: Callout[];
  promoOverlay?: Notice;
  stepper?: StepItem[];
  table?: TableData;
  emptyState?: EmptyStateSpec;
  switches?: SwitchItem[];
  checkboxes?: CheckboxItem[];
  progressPercent?: number;
  loading?: boolean;
  loadingLabel?: string;
  primaryLabel?: string;
  primaryTone?: ButtonTone;
  secondaryLabel?: string;
  secondaryTone?: ButtonTone;
  helper?: string;
  status?: string;
  statusTone?: StatusTone;
  statusLive?: boolean;
}
