import { escapeHtml } from "./shared";

export const renderTabs = (items: string[], activeIndex = 0): string =>
  items.length
    ? `<div class="kit-tabs">${items
        .map(
          (item, index) =>
            `<span class="kit-tabs__item ${index === activeIndex ? "is-active" : ""}">${escapeHtml(item)}</span>`
        )
        .join("")}</div>`
    : "";

export const renderBreadcrumbs = (items: string[]): string =>
  items.length
    ? `<div class="kit-breadcrumbs">${items
        .map((item, index) => `<span class="kit-breadcrumbs__item">${escapeHtml(item)}${index < items.length - 1 ? " /" : ""}</span>`)
        .join("")}</div>`
    : "";

export const renderNavList = (
  items: Array<{ label: string; active?: boolean; meta?: string }>
): string =>
  items.length
    ? `<div class="kit-nav-list">${items
        .map(
          (item) => `<div class="kit-nav-list__item ${item.active ? "is-active" : ""}">
            <span>${escapeHtml(item.label)}</span>
            ${item.meta ? `<small>${escapeHtml(item.meta)}</small>` : ""}
          </div>`
        )
        .join("")}</div>`
    : "";

export const renderTopbar = (title: string, actions: string[] = []): string =>
  `<div class="kit-topbar">
    <strong>${escapeHtml(title)}</strong>
    <div class="kit-topbar__actions">
      ${actions.map((action) => `<span class="kit-topbar__action">${escapeHtml(action)}</span>`).join("")}
    </div>
  </div>`;

export const renderPagination = (current: number, total: number): string =>
  `<div class="kit-pagination">
    <span class="kit-pagination__dot"></span>
    <strong>${current}</strong>
    <span>/ ${total}</span>
  </div>`;

export const renderSidebarSections = (
  sections: Array<{ title: string; items: Array<{ label: string; active?: boolean }> }>
): string =>
  sections.length
    ? `<div class="kit-sidebar-sections">${sections
        .map(
          (section) => `<section class="kit-sidebar-section">
            <strong>${escapeHtml(section.title)}</strong>
            <div class="kit-sidebar-section__items">
              ${section.items
                .map(
                  (item) =>
                    `<span class="kit-sidebar-section__item ${item.active ? "is-active" : ""}">${escapeHtml(item.label)}</span>`
                )
                .join("")}
            </div>
          </section>`
        )
        .join("")}</div>`
    : "";

export const renderPagerDots = (count: number, activeIndex = 0): string =>
  `<div class="kit-pager-dots">${new Array(Math.max(0, count))
    .fill(null)
    .map((_, index) => `<span class="kit-pager-dots__dot ${index === activeIndex ? "is-active" : ""}"></span>`)
    .join("")}</div>`;
