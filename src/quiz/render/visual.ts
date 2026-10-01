import type { AccentTone, OptionVisual, QuizOption } from "../../types";
import { renderEyebrow, renderHelper, renderList, renderMetrics, renderSubtitle, renderTitle } from "./common";
import { renderBrowserShell, renderPhoneShell } from "./kit";
import { renderCheckoutVisual } from "./patterns/checkout";
import { renderDashboardVisual } from "./patterns/dashboard";
import { renderEmptyVisual } from "./patterns/empty";
import { renderFormVisual } from "./patterns/form";
import { renderListVisual } from "./patterns/list";
import { renderMobileVisual } from "./patterns/mobile";
import { renderModalVisual } from "./patterns/modal";
import { renderNotificationVisual } from "./patterns/notification";
import { renderOnboardingVisual } from "./patterns/onboarding";
import { renderSearchVisual } from "./patterns/search";
import { renderSettingsVisual } from "./patterns/settings";

const accentCycle = ["coral", "cyan", "gold", "ink", "lime"] as const;

const wrapFrame = (visual: OptionVisual, accent: AccentTone, inner: string): string => `
  <div class="visual-frame visual-frame--${visual.pattern} visual-frame--${visual.fidelity} visual-frame--${accent}">
    ${inner}
  </div>
`;

const renderFallbackVisual = (visual: OptionVisual): string => `
  <div class="visual-surface">
    ${renderEyebrow(visual.eyebrow)}
    ${renderTitle(visual.title)}
    ${renderSubtitle(visual.subtitle)}
    ${renderMetrics(visual.metrics)}
    ${renderList(visual.items)}
    ${renderHelper(visual.helper)}
  </div>
`;

const wrapShell = (visual: OptionVisual, content: string): string => {
  const shell = visual.shell ?? (visual.pattern === "mobile" ? "phone" : "browser");

  if (shell === "browser") {
    return renderBrowserShell(visual.shellTitle ?? visual.title, content);
  }

  if (shell === "phone") {
    return renderPhoneShell(content);
  }

  return content;
};

export const resolveAccent = (quizId: number, optionId: QuizOption["id"]): AccentTone => {
  const optionOffset = optionId.charCodeAt(0) - 65;
  return accentCycle[(quizId + optionOffset) % accentCycle.length];
};

export const renderVisual = (visual: OptionVisual, accent: AccentTone): string => {
  const inner = (() => {
    switch (visual.pattern) {
      case "form":
        return renderFormVisual(visual);
      case "checkout":
        return renderCheckoutVisual(visual);
      case "dashboard":
        return renderDashboardVisual(visual);
      case "mobile":
        return renderMobileVisual(visual);
      case "onboarding":
        return renderOnboardingVisual(visual);
      case "settings":
        return renderSettingsVisual(visual);
      case "list":
        return renderListVisual(visual);
      case "modal":
        return renderModalVisual(visual);
      case "search":
        return renderSearchVisual(visual);
      case "empty":
        return renderEmptyVisual(visual);
      case "notification":
        return renderNotificationVisual(visual);
      default:
        return renderFallbackVisual(visual);
    }
  })();

  return wrapFrame(visual, accent, wrapShell(visual, inner));
};
