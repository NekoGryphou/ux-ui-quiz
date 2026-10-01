import type { OptionVisual } from "../../../types";
import { renderBreadcrumbs, renderCallout, renderDataTable, renderNavList, renderToolbar, renderTopbar } from "../kit";
import { escapeHtml, renderEyebrow, renderHelper, renderSubtitle, renderTitle } from "../common";

const renderRows = (items: string[] | undefined, linkRows: number[] | undefined): string => {
  const linkRowIndexes = new Set(linkRows ?? []);

  return items && items.length
    ? `<div class="visual-listpane__rows">${items
        .map(
          (item, index) =>
            `<div class="visual-listpane__row ${linkRowIndexes.has(index) ? "is-link" : ""}">${escapeHtml(item)}</div>`
        )
        .join("")}</div>`
    : "";
};

export const renderListVisual = (visual: OptionVisual): string => `
  <div class="visual-listpane">
    ${visual.breadcrumbs?.length ? renderBreadcrumbs(visual.breadcrumbs) : ""}
    ${visual.topbarTitle ? renderTopbar(visual.topbarTitle, visual.topbarActions ?? []) : ""}
    ${visual.toolbar?.length ? renderToolbar(visual.toolbar) : ""}
    ${visual.navItems?.length ? renderNavList(visual.navItems) : ""}
    <div class="visual-listpane__header">
      ${renderEyebrow(visual.eyebrow)}
      ${renderTitle(visual.title)}
      ${renderSubtitle(visual.subtitle)}
    </div>
    ${
      visual.callouts?.length
        ? `<div class="visual-composite">${visual.callouts
            .map((item) => renderCallout(item.title, item.body, item.tone))
            .join("")}</div>`
        : ""
    }
    ${visual.table ? renderDataTable(visual.table.headers, visual.table.rows) : ""}
    ${renderRows(visual.items, visual.linkRows)}
    ${renderHelper(visual.helper)}
  </div>
`;
