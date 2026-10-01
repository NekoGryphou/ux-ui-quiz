import type { OptionVisual } from "../../../types";
import { renderBreadcrumbs, renderDataTable, renderToolbar, renderTopbar } from "../kit";
import { renderEyebrow, renderHelper, renderList, renderMetrics, renderSubtitle, renderTitle } from "../common";

export const renderDashboardVisual = (visual: OptionVisual): string => `
  <div class="visual-surface visual-surface--dashboard">
    ${visual.breadcrumbs?.length ? renderBreadcrumbs(visual.breadcrumbs) : ""}
    ${visual.topbarTitle ? renderTopbar(visual.topbarTitle, visual.topbarActions ?? []) : ""}
    ${visual.toolbar?.length ? renderToolbar(visual.toolbar) : ""}
    <div class="visual-dashboard__header">
      ${renderEyebrow(visual.eyebrow)}
      ${renderTitle(visual.title)}
      ${renderSubtitle(visual.subtitle)}
    </div>
    ${renderMetrics(visual.metrics, visual.featuredMetricIndex)}
    ${visual.table ? renderDataTable(visual.table.headers, visual.table.rows) : ""}
    <div class="visual-dashboard__panel">
      ${renderList(visual.items)}
    </div>
    ${renderHelper(visual.helper)}
  </div>
`;
