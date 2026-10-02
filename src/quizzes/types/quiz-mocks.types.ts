export interface CartItem {
  name: string;
  detail: string;
  price: string;
  qty: number;
}

export interface Recipe {
  name: string;
  meta: string;
}

export interface DriveFile {
  name: string;
  owner: string;
  edited: string;
}

export interface NotificationOption {
  label: string;
  checked: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  primary: boolean;
}

export interface QuarterBar {
  label: string;
  value: number;
  display: string;
}

export interface PortalSection {
  title: string;
  links: string[];
}

export interface CaptchaGlyph {
  char: string;
  rotate: number;
  dy: number;
}

export interface TeamMember {
  name: string;
  role: string;
  skin: string;
  hair: string;
  stretch: "none" | "wide" | "tall";
}

export interface NeonMetric {
  label: string;
  value: string;
  tone: string;
  points: string;
}

export interface MailItem {
  from: string;
  subject: string;
  preview: string;
}

export interface ShoeCard {
  name: string;
  price: string;
  photo: string;
}

export interface TrainOption {
  depart: string;
  arrive: string;
  price: string;
  tag: string;
}

export interface FilterItem {
  label: string;
  step: number;
}

export interface FilterGroup {
  title: string;
  items: FilterItem[];
}

export interface HeroSlide {
  title: string;
  body: string;
  photo: string;
}

export interface ServerRow {
  name: string;
  ok: boolean;
}

export interface DashboardTile {
  label: string;
  value: string;
}

export interface StockPhoto {
  url: string;
  title: string;
  license: string;
}

export interface ChatMessage {
  author: string;
  text: string;
  mine: boolean;
}
