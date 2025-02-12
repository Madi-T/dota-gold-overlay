
//@see https://overwolf.github.io/docs/api/overwolf-games-events-hearthstone
export const REQUIRED_FEATURES = [
  "gpm",
  "gold",
  "xpm",
  "hero_ability_used",
  // "me",
  // "match_info",
];
export const RETRY_TIMES = 10;

// register gep events
export const REGISTER_RETRY_TIMEOUT = 10000;

//same name in the public/app/manifest.json  "windows"
export const WINDOW_NAMES = {
  BACKGROUND: "background",
  SETTINGS: "settings",
  INGAME: "in_game",
  DESKTOP: "desktop",
  NOTIFICATION: "notification",
};

export const DISPLAY_OVERWOLF_HOOKS_LOGS = true;
