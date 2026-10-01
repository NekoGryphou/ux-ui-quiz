import { escapeHtml } from "./shared";

type Tone = "info" | "success" | "warning" | "danger";

export const renderBanner = (title: string, body?: string, tone: Tone = "info"): string =>
  `<div class="kit-banner kit-banner--${tone}">
    <strong>${escapeHtml(title)}</strong>
    ${body ? `<span>${escapeHtml(body)}</span>` : ""}
  </div>`;

export const renderToast = (title: string, body?: string, tone: Tone = "info"): string =>
  `<div class="kit-toast kit-toast--${tone}">
    <strong>${escapeHtml(title)}</strong>
    ${body ? `<span>${escapeHtml(body)}</span>` : ""}
  </div>`;

export const renderEmptyState = (title: string, body?: string, action?: string): string =>
  `<div class="kit-empty-state">
    <strong>${escapeHtml(title)}</strong>
    ${body ? `<span>${escapeHtml(body)}</span>` : ""}
    ${action ? `<span class="mock-btn mock-btn--secondary">${escapeHtml(action)}</span>` : ""}
  </div>`;

export const renderStepper = (
  items: Array<{ label: string; state?: "complete" | "current" | "upcoming" }>
): string =>
  items.length
    ? `<div class="kit-stepper">${items
        .map(
          (item, index) => `<div class="kit-step ${item.state ? `kit-step--${item.state}` : ""}">
            <span class="kit-step__index">${index + 1}</span>
            <span class="kit-step__label">${escapeHtml(item.label)}</span>
          </div>`
        )
        .join("")}</div>`
    : "";

export const renderSkeleton = (lines = 3): string =>
  `<div class="kit-skeleton">${new Array(lines)
    .fill(null)
    .map((_, index) => `<span class="kit-skeleton__line kit-skeleton__line--${index % 3}"></span>`)
    .join("")}</div>`;

export const renderNotificationStack = (
  items: Array<{ title: string; body?: string; tone?: Tone }>
): string =>
  items.length
    ? `<div class="kit-notification-stack">${items
        .map(
          (item) => `<div class="kit-notification kit-notification--${item.tone ?? "info"}">
            <strong>${escapeHtml(item.title)}</strong>
            ${item.body ? `<span>${escapeHtml(item.body)}</span>` : ""}
          </div>`
        )
        .join("")}</div>`
    : "";

export const renderInlineHint = (text: string, tone: Tone = "info"): string =>
  `<span class="kit-inline-hint kit-inline-hint--${tone}">${escapeHtml(text)}</span>`;

export const renderCallout = (title: string, body: string, tone: Tone = "info"): string =>
  `<div class="kit-callout kit-callout--${tone}">
    <strong>${escapeHtml(title)}</strong>
    <span>${escapeHtml(body)}</span>
  </div>`;
