import type { Localized } from "../../shared/types/locale.types";

/**
 * @export
 * @desc Menu bar labels of the retro browser window.
 */
export const RETRO_BROWSER_MENU: Localized<string[]> = {
  en: ["File", "Edit", "View", "Favorites", "Tools", "Help"],
  fr: ["Fichier", "Edition", "Affichage", "Favoris", "Outils", "?"]
};

/**
 * @export
 * @desc Toolbar button labels of the retro browser window.
 */
export const RETRO_BROWSER_BUTTONS: Localized<string[]> = {
  en: ["Back", "Forward", "Stop", "Refresh", "Home"],
  fr: ["Précédente", "Suivante", "Arrêter", "Actualiser", "Démarrage"]
};

/**
 * @export
 * @desc Status bar segments of the retro browser window.
 */
export const RETRO_BROWSER_STATUS: Localized<string[]> = {
  en: ["Done", "Internet"],
  fr: ["Terminé", "Internet"]
};
