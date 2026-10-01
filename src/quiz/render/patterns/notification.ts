import type { OptionVisual } from "../../../types";
import { renderToast, renderTopbar } from "../kit";
import {
  renderActions,
  renderEyebrow,
  renderHelper,
  renderList,
  renderLoading,
  renderStatus,
  renderSubtitle,
  renderTitle
} from "../common";

export const renderNotificationVisual = (visual: OptionVisual): string => `
  <div class="visual-notification">
    ${visual.topbarTitle ? renderTopbar(visual.topbarTitle, visual.topbarActions ?? []) : ""}
    ${visual.toast ? renderToast(visual.toast.title, visual.toast.body, visual.toast.tone) : ""}
    <div class="visual-banner">
      <div class="visual-banner__content">
      ${renderEyebrow(visual.eyebrow)}
      ${renderTitle(visual.title)}
      ${renderSubtitle(visual.subtitle)}
      ${renderLoading(visual)}
      ${renderList(visual.items)}
      ${renderActions(visual)}
      ${renderStatus(visual.status, visual.statusTone)}
      ${renderHelper(visual.helper)}
      </div>
    </div>
  </div>
`;
