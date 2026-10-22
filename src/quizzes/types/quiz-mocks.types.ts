/**
 * @export
 * @desc Product line of the cart mock.
 *
 * @property name - Product name.
 * @property detail - Pack size.
 * @property price - Unit price.
 * @property qty - Quantity.
 */
export interface CartItem {
  /** Product name. */
  name: string;

  /** Pack size. */
  detail: string;

  /** Unit price. */
  price: string;

  /** Quantity. */
  qty: number;
}

/**
 * @export
 * @desc Recipe card of the tab bar mock.
 *
 * @property name - Recipe name.
 * @property meta - Duration and rating.
 */
export interface Recipe {
  /** Recipe name. */
  name: string;

  /** Duration and rating. */
  meta: string;
}

/**
 * @export
 * @desc File row of the bulk delete mock.
 *
 * @property name - File name.
 * @property owner - Owner name.
 * @property edited - Last edit.
 */
export interface DriveFile {
  /** File name. */
  name: string;

  /** Owner name. */
  owner: string;

  /** Last edit. */
  edited: string;
}

/**
 * @export
 * @desc Notification setting of the form switch mock.
 *
 * @property label - Setting label.
 * @property checked - Whether it is on.
 */
export interface NotificationOption {
  /** Setting label. */
  label: string;

  /** Whether it is on. */
  checked: boolean;
}

/**
 * @export
 * @desc Plan card of the pricing mock.
 *
 * @property name - Plan name.
 * @property price - Displayed price.
 * @property features - Feature list.
 * @property primary - Whether it is highlighted.
 */
export interface PricingPlan {
  /** Plan name. */
  name: string;

  /** Displayed price. */
  price: string;

  /** Feature list. */
  features: string[];

  /** Whether it is highlighted. */
  primary: boolean;
}

/**
 * @export
 * @desc Bar of the truncated axis chart mock.
 *
 * @property label - Quarter label.
 * @property value - Plotted value.
 * @property display - Displayed value.
 */
export interface QuarterBar {
  /** Quarter label. */
  label: string;

  /** Plotted value. */
  value: number;

  /** Displayed value. */
  display: string;
}

/**
 * @export
 * @desc Link section of the tax portal mock.
 *
 * @property title - Section title.
 * @property links - Link labels.
 */
export interface PortalSection {
  /** Section title. */
  title: string;

  /** Link labels. */
  links: string[];
}

/**
 * @export
 * @desc Distorted character of the captcha mock.
 *
 * @property char - Character.
 * @property rotate - Rotation in degrees.
 * @property dy - Vertical offset.
 */
export interface CaptchaGlyph {
  /** Character. */
  char: string;

  /** Rotation in degrees. */
  rotate: number;

  /** Vertical offset. */
  dy: number;
}

/**
 * @export
 * @desc Portrait card of the stretched portraits mock.
 *
 * @property name - Member name.
 * @property role - Job title.
 * @property skin - Skin color.
 * @property hair - Hair color.
 * @property stretch - Portrait distortion.
 */
export interface TeamMember {
  /** Member name. */
  name: string;

  /** Job title. */
  role: string;

  /** Skin color. */
  skin: string;

  /** Hair color. */
  hair: string;

  /** Portrait distortion. */
  stretch: "none" | "wide" | "tall";
}

/**
 * @export
 * @desc Metric card of the neon dark mode mock.
 *
 * @property label - Metric label.
 * @property value - Displayed value.
 * @property tone - Neon color.
 * @property points - Sparkline polyline points.
 */
export interface NeonMetric {
  /** Metric label. */
  label: string;

  /** Displayed value. */
  value: string;

  /** Neon color. */
  tone: string;

  /** Sparkline polyline points. */
  points: string;
}

/**
 * @export
 * @desc Inbox row of the mail mocks.
 *
 * @property from - Sender.
 * @property subject - Subject line.
 * @property preview - Body preview.
 */
export interface MailItem {
  /** Sender. */
  from: string;

  /** Subject line. */
  subject: string;

  /** Body preview. */
  preview: string;
}

/**
 * @export
 * @desc Product card of the hover-only actions mock.
 *
 * @property name - Product name.
 * @property price - Displayed price.
 * @property photo - Photo URL.
 */
export interface ShoeCard {
  /** Product name. */
  name: string;

  /** Displayed price. */
  price: string;

  /** Photo URL. */
  photo: string;
}

/**
 * @export
 * @desc Journey row of the untranslated formats mock.
 *
 * @property depart - Departure time.
 * @property arrive - Arrival time.
 * @property price - Displayed price.
 * @property tag - Connection tag.
 */
export interface TrainOption {
  /** Departure time. */
  depart: string;

  /** Arrival time. */
  arrive: string;

  /** Displayed price. */
  price: string;

  /** Connection tag. */
  tag: string;
}

/**
 * @export
 * @desc Checkbox of a {@link FilterGroup}.
 *
 * @property label - Label with count.
 * @property step - Animation step that clicks it, 0 for none.
 */
export interface FilterItem {
  /** Label with count. */
  label: string;

  /** Animation step that clicks it, 0 for none. */
  step: number;
}

/**
 * @export
 * @desc Filter section of the reload-on-filter mock.
 *
 * @property title - Section title.
 * @property items - Filter checkboxes.
 */
export interface FilterGroup {
  /** Section title. */
  title: string;

  /** Filter checkboxes. */
  items: FilterItem[];
}

/**
 * @export
 * @desc Slide of the fast carousel mock.
 *
 * @property title - Slide title.
 * @property body - Slide text.
 * @property photo - Photo URL.
 */
export interface HeroSlide {
  /** Slide title. */
  title: string;

  /** Slide text. */
  body: string;

  /** Photo URL. */
  photo: string;
}

/**
 * @export
 * @desc Server row of the color-only status mock.
 *
 * @property name - Server name.
 * @property ok - Whether it is healthy.
 */
export interface ServerRow {
  /** Server name. */
  name: string;

  /** Whether it is healthy. */
  ok: boolean;
}

/**
 * @export
 * @desc Tile of the dashboard overload mock.
 *
 * @property label - Tile label.
 * @property value - Displayed value.
 */
export interface DashboardTile {
  /** Tile label. */
  label: string;

  /** Displayed value. */
  value: string;
}

/**
 * @export
 * @desc Credited Wikimedia Commons photo used in mocks.
 *
 * @property url - Bundled image URL.
 * @property title - Photo title.
 * @property license - License name.
 */
export interface StockPhoto {
  /** Bundled image URL. */
  url: string;

  /** Photo title. */
  title: string;

  /** License name. */
  license: string;
}

/**
 * @export
 * @desc Message of the jump-to-latest chat mock.
 *
 * @property author - Sender name.
 * @property text - Message text.
 * @property mine - Whether the viewer sent it.
 */
export interface ChatMessage {
  /** Sender name. */
  author: string;

  /** Message text. */
  text: string;

  /** Whether the viewer sent it. */
  mine: boolean;
}
