import { escapeHtml } from "./shared";
import { renderButtonRow } from "./controls";

export const renderBrowserShell = (title: string, body: string): string =>
  `<div class="kit-browser-shell">
    <div class="kit-browser-shell__chrome">
      <span></span><span></span><span></span>
      <strong>${escapeHtml(title)}</strong>
    </div>
    <div class="kit-browser-shell__body">${body}</div>
  </div>`;

export const renderPhoneShell = (body: string): string =>
  `<div class="kit-phone-shell">
    <div class="kit-phone-shell__notch"></div>
    <div class="kit-phone-shell__body">${body}</div>
  </div>`;

export const renderModalCard = (options: {
  title: string;
  body?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}): string =>
  `<div class="kit-modal-card">
    <strong>${escapeHtml(options.title)}</strong>
    ${options.body ? `<span>${escapeHtml(options.body)}</span>` : ""}
    ${renderButtonRow(
      [
        options.secondaryLabel ? { label: options.secondaryLabel, tone: "secondary" as const } : null,
        options.primaryLabel ? { label: options.primaryLabel, tone: "primary" as const } : null
      ].filter(Boolean) as Array<{ label: string; tone?: "primary" | "secondary" }>
    )}
  </div>`;

export const renderSideSheet = (title: string, sections: string[]): string =>
  `<div class="kit-side-sheet">
    <strong>${escapeHtml(title)}</strong>
    <div class="kit-side-sheet__sections">${sections.join("")}</div>
  </div>`;

export const renderSplitSurface = (left: string, right: string): string =>
  `<div class="kit-split-surface">
    <div class="kit-split-surface__pane">${left}</div>
    <div class="kit-split-surface__pane">${right}</div>
  </div>`;

export const renderStackedCards = (cards: string[]): string =>
  `<div class="kit-stacked-cards">${cards.map((card) => `<div class="kit-stacked-cards__card">${card}</div>`).join("")}</div>`;

export const renderInspectorPanel = (title: string, rows: Array<{ label: string; value: string }>): string =>
  `<div class="kit-inspector">
    <strong>${escapeHtml(title)}</strong>
    <div class="kit-inspector__rows">
      ${rows
        .map(
          (row) => `<div class="kit-inspector__row">
            <span>${escapeHtml(row.label)}</span>
            <strong>${escapeHtml(row.value)}</strong>
          </div>`
        )
        .join("")}
    </div>
  </div>`;
