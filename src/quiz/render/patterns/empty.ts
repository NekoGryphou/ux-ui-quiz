import type { OptionVisual } from "../../../types";
import { renderActions, renderEyebrow, renderHelper, renderSubtitle, renderTitle } from "../common";

export const renderEmptyVisual = (visual: OptionVisual): string => `
  <div class="visual-empty">
    ${renderEyebrow(visual.eyebrow)}
    ${renderTitle(visual.title)}
    ${renderSubtitle(visual.subtitle)}
    ${renderActions(visual)}
    ${renderHelper(visual.helper)}
  </div>
`;

