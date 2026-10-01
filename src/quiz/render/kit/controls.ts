import { escapeHtml, joinDefined } from "./shared";
import type { ButtonTone, FieldKind, FieldSpec } from "../../../types";

export const renderMockButton = (label: string, tone: ButtonTone = "secondary"): string =>
  `<span class="mock-btn mock-btn--${tone}" aria-hidden="true">${escapeHtml(label)}</span>`;

export const renderButtonRow = (
  buttons: Array<{ label: string; tone?: ButtonTone }>
): string =>
  buttons.length
    ? `<div class="kit-button-row">${buttons
        .map((button) => renderMockButton(button.label, button.tone))
        .join("")}</div>`
    : "";

export const renderChip = (label: string, tone: "default" | "positive" | "warning" | "danger" = "default"): string =>
  `<span class="kit-chip kit-chip--${tone}">${escapeHtml(label)}</span>`;

export const renderChipRow = (
  chips?: Array<string | { label: string; tone?: "default" | "positive" | "warning" | "danger" }>
): string => {
  if (!chips?.length) {
    return "";
  }

  return `<div class="kit-chip-row">${chips
    .map((chip) =>
      typeof chip === "string" ? renderChip(chip) : renderChip(chip.label, chip.tone ?? "default")
    )
    .join("")}</div>`;
};

export const renderField = (field: string | FieldSpec, fallbackKind: FieldKind = "input"): string => {
  const resolved = typeof field === "string" ? { label: field, kind: fallbackKind } : field;
  const kind = resolved.kind ?? fallbackKind;
  const stateClass = resolved.state === "error" ? "is-error" : resolved.state === "disabled" ? "is-disabled" : "";
  const pulseClass = resolved.pulse ? "is-pulse" : "";
  const disabledAttr = resolved.state === "disabled" ? " disabled" : "";
  const label = escapeHtml(resolved.label);
  const placeholder = escapeHtml(resolved.placeholder ?? resolved.label);
  const value = resolved.value ?? "";
  const escapedValue = escapeHtml(value);
  const animationClass = resolved.animation ? `has-animation has-animation--${resolved.animation}` : "";
  const readonlyClass = resolved.readonly ? "is-readonly" : "";

  const control = (() => {
    if (resolved.animation === "typing-email") {
      return `<span class="kit-field__typing" style="--typing-chars:${resolved.label.length}" aria-hidden="true"><span class="kit-field__typing-copy">${label}</span></span>
        <input class="kit-field__control" type="text"${disabledAttr} aria-label="${label}" placeholder="${placeholder}" value="" />`;
    }

    if (resolved.readonly) {
      return `<span class="kit-field__static" aria-hidden="true">${escapedValue || placeholder}</span>`;
    }

    switch (kind) {
      case "textarea":
        return `<textarea class="kit-field__control"${disabledAttr} aria-label="${label}" placeholder="${placeholder}" rows="3">${escapedValue}</textarea>`;
      case "select":
        return `<select class="kit-field__control"${disabledAttr} aria-label="${label}">
          <option>${placeholder}</option>
        </select>`;
      default:
        return `<input class="kit-field__control" type="${kind === "search" ? "search" : kind === "password" ? "password" : "text"}"${disabledAttr} aria-label="${label}" placeholder="${placeholder}" value="${escapedValue}" />${kind === "password" ? `<span class="kit-field__eye" aria-hidden="true"><span></span></span>` : ""}`;
    }
  })();

  return `<label class="kit-field kit-field--${kind} ${stateClass} ${pulseClass} ${animationClass} ${readonlyClass}">${control}</label>`;
};

export const renderFieldStack = (fields?: Array<string | FieldSpec>, kind: FieldKind = "input"): string =>
  fields?.length ? `<div class="kit-field-stack">${fields.map((field) => renderField(field, kind)).join("")}</div>` : "";

export const renderSegmentedControl = (items: string[], activeIndex = 0): string =>
  items.length
    ? `<div class="kit-segmented">${items
        .map(
          (item, index) =>
            `<span class="kit-segmented__item ${index === activeIndex ? "is-active" : ""}">${escapeHtml(item)}</span>`
        )
        .join("")}</div>`
    : "";

export const renderSwitchRow = (label: string, checked = false, hint?: string, subtle = false): string =>
  `<div class="kit-switch-row">
    <div class="kit-switch-row__copy">
      <strong>${escapeHtml(label)}</strong>
      ${hint ? `<span>${escapeHtml(hint)}</span>` : ""}
    </div>
    <span class="kit-switch ${checked ? "is-on" : ""} ${subtle ? "is-subtle" : ""}" aria-hidden="true"><span></span></span>
  </div>`;

export const renderCheckboxList = (
  items: Array<{ label: string; checked?: boolean; hint?: string }>
): string =>
  items.length
    ? `<div class="kit-choice-list">${items
        .map(
          (item) => `<div class="kit-choice-row">
            <span class="kit-choice-box ${item.checked ? "is-checked" : ""}" aria-hidden="true"></span>
            <div class="kit-choice-row__copy">
              <strong>${escapeHtml(item.label)}</strong>
              ${item.hint ? `<span>${escapeHtml(item.hint)}</span>` : ""}
            </div>
          </div>`
        )
        .join("")}</div>`
    : "";

export const renderRadioList = (
  items: Array<{ label: string; selected?: boolean; hint?: string }>
): string =>
  items.length
    ? `<div class="kit-choice-list">${items
        .map(
          (item) => `<div class="kit-choice-row">
            <span class="kit-radio ${item.selected ? "is-selected" : ""}" aria-hidden="true"><span></span></span>
            <div class="kit-choice-row__copy">
              <strong>${escapeHtml(item.label)}</strong>
              ${item.hint ? `<span>${escapeHtml(item.hint)}</span>` : ""}
            </div>
          </div>`
        )
        .join("")}</div>`
    : "";

export const renderToolbar = (items: string[]): string =>
  items.length
    ? `<div class="kit-toolbar">${items.map((item) => `<span class="kit-toolbar__item">${escapeHtml(item)}</span>`).join("")}</div>`
    : "";

export const renderInlineFieldRow = (
  fields: Array<{ label: string; kind?: FieldKind }>
): string =>
  fields.length
    ? `<div class="kit-inline-field-row">${fields
        .map((field) => renderField(field.label, field.kind ?? "input"))
        .join("")}</div>`
    : "";

export const renderSlider = (label: string, value = 50): string =>
  `<div class="kit-slider">
    <div class="kit-slider__meta">
      <span>${escapeHtml(label)}</span>
      <strong>${Math.max(0, Math.min(100, value))}%</strong>
    </div>
    <div class="kit-slider__track">
      <span class="kit-slider__fill" style="width:${Math.max(0, Math.min(100, value))}%"></span>
      <span class="kit-slider__thumb" style="left:${Math.max(0, Math.min(100, value))}%"></span>
    </div>
  </div>`;

export const renderDateField = (label: string, value: string): string =>
  `<div class="kit-date-field">
    <span>${escapeHtml(label)}</span>
    <strong>${escapeHtml(value)}</strong>
  </div>`;

export const renderUploadZone = (title: string, hint?: string): string =>
  `<div class="kit-upload-zone">
    <strong>${escapeHtml(title)}</strong>
    ${hint ? `<span>${escapeHtml(hint)}</span>` : ""}
  </div>`;

export const renderRatingScale = (label: string, active = 4, max = 5): string =>
  `<div class="kit-rating">
    <span>${escapeHtml(label)}</span>
    <div class="kit-rating__stars">
      ${new Array(max)
        .fill(null)
        .map((_, index) => `<span class="kit-rating__star ${index < active ? "is-active" : ""}">★</span>`)
        .join("")}
    </div>
  </div>`;

export const renderFormSection = (options: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  fields?: string[];
  primaryLabel?: string;
  secondaryLabel?: string;
  helper?: string;
}): string =>
  `<section class="kit-form-section">
    ${joinDefined([
      options.eyebrow ? `<p class="visual-eyebrow">${escapeHtml(options.eyebrow)}</p>` : "",
      options.title ? `<h4 class="visual-title">${escapeHtml(options.title)}</h4>` : "",
      options.subtitle ? `<p class="visual-subtitle">${escapeHtml(options.subtitle)}</p>` : "",
      renderFieldStack(options.fields),
      renderButtonRow(
        [
          options.primaryLabel ? { label: options.primaryLabel, tone: "primary" as const } : null,
          options.secondaryLabel ? { label: options.secondaryLabel, tone: "secondary" as const } : null
        ].filter(Boolean) as Array<{ label: string; tone?: ButtonTone }>
      ),
      options.helper ? `<p class="visual-helper">${escapeHtml(options.helper)}</p>` : ""
    ])}
  </section>`;
