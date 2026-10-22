import type { IconName, IconShape } from "../types/icons.types";

/**
 * @export
 * @desc SVG shapes of each icon, keyed by icon name.
 */
export const ICONS: Readonly<Record<IconName, readonly IconShape[]>> = {
  "alert-triangle": [
    { tag: "path", attrs: { d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" } },
    { tag: "path", attrs: { d: "M12 9v4" } },
    { tag: "path", attrs: { d: "M12 17h.01" } }
  ],
  "arrow-left": [
    { tag: "path", attrs: { d: "M19 12H5" } },
    { tag: "path", attrs: { d: "m12 19-7-7 7-7" } }
  ],
  "arrow-right": [
    { tag: "path", attrs: { d: "M5 12h14" } },
    { tag: "path", attrs: { d: "m12 5 7 7-7 7" } }
  ],
  "arrow-up-down": [
    { tag: "path", attrs: { d: "m21 16-4 4-4-4" } },
    { tag: "path", attrs: { d: "M17 20V4" } },
    { tag: "path", attrs: { d: "m3 8 4-4 4 4" } },
    { tag: "path", attrs: { d: "M7 4v16" } }
  ],
  bell: [
    { tag: "path", attrs: { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" } },
    { tag: "path", attrs: { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" } }
  ],
  calendar: [
    { tag: "rect", attrs: { x: "3", y: "4", width: "18", height: "18", rx: "2" } },
    { tag: "path", attrs: { d: "M16 2v4" } },
    { tag: "path", attrs: { d: "M8 2v4" } },
    { tag: "path", attrs: { d: "M3 10h18" } }
  ],
  cart: [
    { tag: "circle", attrs: { cx: "8", cy: "21", r: "1" } },
    { tag: "circle", attrs: { cx: "19", cy: "21", r: "1" } },
    { tag: "path", attrs: { d: "M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L22 7H6" } }
  ],
  chart: [
    { tag: "path", attrs: { d: "M3 3v18h18" } },
    { tag: "path", attrs: { d: "M18 17V9" } },
    { tag: "path", attrs: { d: "M13 17V5" } },
    { tag: "path", attrs: { d: "M8 17v-3" } }
  ],
  check: [{ tag: "path", attrs: { d: "M5 12.25l4.5 4.5L19 7.25" } }],
  "circle-dot": [
    { tag: "circle", attrs: { cx: "12", cy: "12", r: "9" } },
    { tag: "circle", attrs: { cx: "12", cy: "12", r: "3", fill: "currentColor" } }
  ],
  "chevron-down": [{ tag: "path", attrs: { d: "m6 9 6 6 6-6" } }],
  "chevron-up": [{ tag: "path", attrs: { d: "m18 15-6-6-6 6" } }],
  "chevron-left": [{ tag: "path", attrs: { d: "m15 18-6-6 6-6" } }],
  "chevron-right": [{ tag: "path", attrs: { d: "m9 18 6-6-6-6" } }],
  download: [
    { tag: "path", attrs: { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" } },
    { tag: "path", attrs: { d: "m7 10 5 5 5-5" } },
    { tag: "path", attrs: { d: "M12 15V3" } }
  ],
  edit: [{ tag: "path", attrs: { d: "M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" } }],
  external: [
    { tag: "path", attrs: { d: "M15 3h6v6" } },
    { tag: "path", attrs: { d: "M10 14 21 3" } },
    { tag: "path", attrs: { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" } }
  ],
  eye: [
    { tag: "path", attrs: { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" } },
    { tag: "circle", attrs: { cx: "12", cy: "12", r: "3" } }
  ],
  file: [
    { tag: "path", attrs: { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" } },
    { tag: "path", attrs: { d: "M14 2v4a2 2 0 0 0 2 2h4" } }
  ],
  filter: [{ tag: "path", attrs: { d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z" } }],
  heart: [
    {
      tag: "path",
      attrs: {
        d: "M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"
      }
    }
  ],
  home: [{ tag: "path", attrs: { d: "M3 10 12 3l9 7v10a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z" } }],
  inbox: [
    { tag: "path", attrs: { d: "M22 12h-6l-2 3h-4l-2-3H2" } },
    {
      tag: "path",
      attrs: {
        d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
      }
    }
  ],
  info: [
    { tag: "circle", attrs: { cx: "12", cy: "12", r: "10" } },
    { tag: "path", attrs: { d: "M12 16v-4" } },
    { tag: "path", attrs: { d: "M12 8h.01" } }
  ],
  "list-checks": [
    { tag: "path", attrs: { d: "m3 17 2 2 4-4" } },
    { tag: "path", attrs: { d: "m3 7 2 2 4-4" } },
    { tag: "path", attrs: { d: "M13 6h8" } },
    { tag: "path", attrs: { d: "M13 12h8" } },
    { tag: "path", attrs: { d: "M13 18h8" } }
  ],
  lock: [
    { tag: "rect", attrs: { x: "3", y: "11", width: "18", height: "11", rx: "2" } },
    { tag: "path", attrs: { d: "M7 11V7a5 5 0 0 1 10 0v4" } }
  ],
  mail: [
    { tag: "rect", attrs: { x: "2", y: "4", width: "20", height: "16", rx: "2" } },
    { tag: "path", attrs: { d: "m22 7-10 5L2 7" } }
  ],
  maximize: [
    { tag: "path", attrs: { d: "M8 3H5a2 2 0 0 0-2 2v3" } },
    { tag: "path", attrs: { d: "M21 8V5a2 2 0 0 0-2-2h-3" } },
    { tag: "path", attrs: { d: "M3 16v3a2 2 0 0 0 2 2h3" } },
    { tag: "path", attrs: { d: "M16 21h3a2 2 0 0 0 2-2v-3" } }
  ],
  menu: [
    { tag: "path", attrs: { d: "M4 6h16" } },
    { tag: "path", attrs: { d: "M4 12h16" } },
    { tag: "path", attrs: { d: "M4 18h16" } }
  ],
  message: [{ tag: "path", attrs: { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" } }],
  moon: [{ tag: "path", attrs: { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" } }],
  crosshair: [
    { tag: "circle", attrs: { cx: "12", cy: "12", r: "10" } },
    { tag: "path", attrs: { d: "M22 12h-4" } },
    { tag: "path", attrs: { d: "M6 12H2" } },
    { tag: "path", attrs: { d: "M12 6V2" } },
    { tag: "path", attrs: { d: "M12 22v-4" } }
  ],
  columns: [
    { tag: "rect", attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2" } },
    { tag: "path", attrs: { d: "M12 3v18" } }
  ],
  more: [
    { tag: "circle", attrs: { cx: "5", cy: "12", r: "1" } },
    { tag: "circle", attrs: { cx: "12", cy: "12", r: "1" } },
    { tag: "circle", attrs: { cx: "19", cy: "12", r: "1" } }
  ],
  plus: [
    { tag: "path", attrs: { d: "M12 5v14" } },
    { tag: "path", attrs: { d: "M5 12h14" } }
  ],
  refresh: [
    { tag: "path", attrs: { d: "M21 12a9 9 0 1 1-3-6.7L21 8" } },
    { tag: "path", attrs: { d: "M21 3v5h-5" } }
  ],
  search: [
    { tag: "circle", attrs: { cx: "11", cy: "11", r: "8" } },
    { tag: "path", attrs: { d: "m21 21-4.3-4.3" } }
  ],
  settings: [
    {
      tag: "path",
      attrs: {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      }
    },
    { tag: "circle", attrs: { cx: "12", cy: "12", r: "3" } }
  ],
  mic: [
    { tag: "rect", attrs: { x: "9", y: "2", width: "6", height: "12", rx: "3" } },
    { tag: "path", attrs: { d: "M5 10a7 7 0 0 0 14 0" } },
    { tag: "path", attrs: { d: "M12 17v4" } }
  ],
  pause: [
    { tag: "rect", attrs: { x: "6", y: "5", width: "4", height: "14", rx: "1" } },
    { tag: "rect", attrs: { x: "14", y: "5", width: "4", height: "14", rx: "1" } }
  ],
  play: [{ tag: "path", attrs: { d: "M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z" } }],
  phone: [
    {
      tag: "path",
      attrs: {
        d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"
      }
    }
  ],
  share: [
    { tag: "path", attrs: { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" } },
    { tag: "path", attrs: { d: "m16 6-4-4-4 4" } },
    { tag: "path", attrs: { d: "M12 2v13" } }
  ],
  video: [
    { tag: "path", attrs: { d: "m16 13 5.2 3.1a.5.5 0 0 0 .8-.4V8.3a.5.5 0 0 0-.8-.4L16 11" } },
    { tag: "rect", attrs: { x: "2", y: "6", width: "14", height: "12", rx: "2" } }
  ],
  star: [
    {
      tag: "path",
      attrs: { d: "m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" }
    }
  ],
  sun: [
    { tag: "circle", attrs: { cx: "12", cy: "12", r: "4" } },
    { tag: "path", attrs: { d: "M12 2v2" } },
    { tag: "path", attrs: { d: "M12 20v2" } },
    { tag: "path", attrs: { d: "m4.93 4.93 1.41 1.41" } },
    { tag: "path", attrs: { d: "m17.66 17.66 1.41 1.41" } },
    { tag: "path", attrs: { d: "M2 12h2" } },
    { tag: "path", attrs: { d: "M20 12h2" } },
    { tag: "path", attrs: { d: "m6.34 17.66-1.41 1.41" } },
    { tag: "path", attrs: { d: "m19.07 4.93-1.41 1.41" } }
  ],
  trash: [
    { tag: "path", attrs: { d: "M3 6h18" } },
    { tag: "path", attrs: { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" } },
    { tag: "path", attrs: { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" } }
  ],
  upload: [
    { tag: "path", attrs: { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" } },
    { tag: "path", attrs: { d: "m17 8-5-5-5 5" } },
    { tag: "path", attrs: { d: "M12 3v12" } }
  ],
  user: [
    { tag: "circle", attrs: { cx: "12", cy: "8", r: "4" } },
    { tag: "path", attrs: { d: "M4 21a8 8 0 0 1 16 0" } }
  ],
  x: [
    { tag: "path", attrs: { d: "M18 6 6 18" } },
    { tag: "path", attrs: { d: "m6 6 12 12" } }
  ],
  zap: [{ tag: "path", attrs: { d: "M13 2 3 14h9l-1 8 10-12h-9l1-8z" } }]
};
