import type { ButtonTone, FieldSpec, Metric, OptionVisual, StatusTone } from "../../types";
import { escapeHtml, renderButtonRow, renderChipRow, renderFieldStack, renderMetricGrid } from "./kit";

export { escapeHtml };

export const renderEyebrow = (eyebrow?: string): string =>
  eyebrow ? `<p class="visual-eyebrow">${escapeHtml(eyebrow)}</p>` : "";

export const renderTitle = (title?: string): string => (title ? `<h4 class="visual-title">${escapeHtml(title)}</h4>` : "");

export const renderSubtitle = (subtitle?: string): string =>
  subtitle ? `<p class="visual-subtitle">${escapeHtml(subtitle)}</p>` : "";

export const renderSectionHeader = (options: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  actions?: string[];
}): string => {
  const hasCopy = options.eyebrow || options.title || options.subtitle;
  const hasActions = options.actions?.length;

  if (!hasCopy && !hasActions) {
    return "";
  }

  return `<div class="visual-section-header">
    <div class="visual-section-header__copy">
      ${renderEyebrow(options.eyebrow)}
      ${renderTitle(options.title)}
      ${renderSubtitle(options.subtitle)}
    </div>
    ${
      hasActions
        ? `<div class="visual-section-header__actions">${options.actions
            ?.map((action) => `<span class="kit-topbar__action">${escapeHtml(action)}</span>`)
            .join("")}</div>`
        : ""
    }
  </div>`;
};

export const renderBadgeRow = (tags?: string[]): string =>
  tags && tags.length ? `<div class="visual-tags">${renderChipRow(tags)}</div>` : "";

export const renderList = (items?: string[]): string =>
  items && items.length
    ? `<ul class="visual-list">${items
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("")}</ul>`
    : "";

export const renderFields = (fields?: Array<string | FieldSpec>): string =>
  fields && fields.length ? `<div class="visual-fields">${renderFieldStack(fields)}</div>` : "";

export const renderMetrics = (metrics?: Metric[], featuredMetricIndex?: number): string =>
  metrics && metrics.length ? `<div class="visual-metrics">${renderMetricGrid(metrics, featuredMetricIndex)}</div>` : "";

export const renderActions = (visual: OptionVisual): string => {
  const buttons = [
    visual.primaryLabel ? { label: visual.primaryLabel, tone: visual.primaryTone ?? ("primary" as const) } : null,
    visual.secondaryLabel
      ? { label: visual.secondaryLabel, tone: visual.secondaryTone ?? ("secondary" as const) }
      : null
  ].filter(Boolean) as Array<{
    label: string;
    tone?: ButtonTone;
  }>;

  if (!buttons.length) {
    return "";
  }

  return `<div class="visual-actions">${renderButtonRow(buttons)}</div>`;
};

export const renderLoading = (visual: OptionVisual): string =>
  visual.loading
    ? `<div class="visual-loading">
        <span class="visual-loading__spinner" aria-hidden="true"></span>
        ${visual.loadingLabel ? `<span class="visual-loading__label">${escapeHtml(visual.loadingLabel)}</span>` : ""}
      </div>`
    : "";

export const renderProgressBar = (progressPercent?: number): string =>
  typeof progressPercent === "number"
    ? `<div class="visual-progress" aria-hidden="true">
        <span class="visual-progress__bar" style="width:${Math.max(0, Math.min(100, progressPercent))}%"></span>
      </div>`
    : "";

export const renderStatus = (status?: string, tone: StatusTone = "neutral"): string =>
  status ? `<p class="visual-status visual-status--${tone}">${escapeHtml(status)}</p>` : "";

export const renderLiveStatus = (
  status?: string,
  tone: StatusTone = "neutral",
  live = false
): string =>
  status ? `<p class="visual-status visual-status--${tone} ${live ? "visual-status--live" : ""}">${escapeHtml(status)}</p>` : "";

export const renderHelper = (_helper?: string): string => "";
