import type { Metric } from "../../../types";
import { escapeHtml } from "./shared";

export const renderMetricGrid = (metrics?: Metric[], featuredIndex?: number): string =>
  metrics?.length
    ? `<div class="kit-metric-grid">${metrics
        .map(
          (metric, index) => `<div class="kit-metric-card kit-metric-card--${metric.tone ?? "muted"} ${
            index === featuredIndex ? "kit-metric-card--featured" : ""
          }">
            <span>${escapeHtml(metric.label)}</span>
            <strong>${escapeHtml(metric.value)}</strong>
          </div>`
        )
        .join("")}</div>`
    : "";

export const renderStatStrip = (stats: Array<{ label: string; value: string }>): string =>
  stats.length
    ? `<div class="kit-stat-strip">${stats
        .map(
          (stat) => `<div class="kit-stat-strip__item">
            <span>${escapeHtml(stat.label)}</span>
            <strong>${escapeHtml(stat.value)}</strong>
          </div>`
        )
        .join("")}</div>`
    : "";

export const renderDataTable = (headers: string[], rows: string[][]): string =>
  headers.length && rows.length
    ? `<div class="kit-table">
        <div class="kit-table__row kit-table__row--head">
          ${headers.map((header) => `<span>${escapeHtml(header)}</span>`).join("")}
        </div>
        ${rows
          .map(
            (row) => `<div class="kit-table__row">
              ${row.map((cell) => `<span>${escapeHtml(cell)}</span>`).join("")}
            </div>`
          )
          .join("")}
      </div>`
    : "";

export const renderProgressList = (
  items: Array<{ label: string; value: number; tone?: "positive" | "warning" | "danger" | "neutral" }>
): string =>
  items.length
    ? `<div class="kit-progress-list">${items
        .map(
          (item) => `<div class="kit-progress">
            <div class="kit-progress__meta">
              <span>${escapeHtml(item.label)}</span>
              <strong>${item.value}%</strong>
            </div>
            <div class="kit-progress__track">
              <div class="kit-progress__bar kit-progress__bar--${item.tone ?? "neutral"}" style="width: ${Math.max(
                0,
                Math.min(100, item.value)
              )}%"></div>
            </div>
          </div>`
        )
        .join("")}</div>`
    : "";

export const renderActivityList = (
  items: Array<{ title: string; meta?: string; tone?: "positive" | "warning" | "danger" | "neutral" }>
): string =>
  items.length
    ? `<div class="kit-activity-list">${items
        .map(
          (item) => `<div class="kit-activity">
            <span class="kit-activity__dot kit-activity__dot--${item.tone ?? "neutral"}"></span>
            <div class="kit-activity__copy">
              <strong>${escapeHtml(item.title)}</strong>
              ${item.meta ? `<span>${escapeHtml(item.meta)}</span>` : ""}
            </div>
          </div>`
        )
        .join("")}</div>`
    : "";

export const renderAvatarStack = (names: string[]): string =>
  names.length
    ? `<div class="kit-avatar-stack">${names
        .map((name) => `<span class="kit-avatar" aria-hidden="true">${escapeHtml(name.slice(0, 1).toUpperCase())}</span>`)
        .join("")}</div>`
    : "";

export const renderCalendarGrid = (
  days: Array<{ label: string; muted?: boolean; selected?: boolean; marker?: boolean }>
): string =>
  days.length
    ? `<div class="kit-calendar">
      ${days
        .map(
          (day) => `<span class="kit-calendar__day ${day.muted ? "is-muted" : ""} ${day.selected ? "is-selected" : ""} ${
            day.marker ? "has-marker" : ""
          }">${escapeHtml(day.label)}</span>`
        )
        .join("")}
    </div>`
    : "";

export const renderKanban = (
  columns: Array<{ title: string; cards: string[] }>
): string =>
  columns.length
    ? `<div class="kit-kanban">${columns
        .map(
          (column) => `<section class="kit-kanban__column">
            <strong>${escapeHtml(column.title)}</strong>
            <div class="kit-kanban__cards">
              ${column.cards.map((card) => `<span class="kit-kanban__card">${escapeHtml(card)}</span>`).join("")}
            </div>
          </section>`
        )
        .join("")}</div>`
    : "";

export const renderComparisonRows = (
  rows: Array<{ label: string; left: string; right: string }>
): string =>
  rows.length
    ? `<div class="kit-comparison">${rows
        .map(
          (row) => `<div class="kit-comparison__row">
            <strong>${escapeHtml(row.label)}</strong>
            <span>${escapeHtml(row.left)}</span>
            <span>${escapeHtml(row.right)}</span>
          </div>`
        )
        .join("")}</div>`
    : "";
