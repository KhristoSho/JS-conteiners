export class Settings {

  static defaultSettings = new Map([
    ["theme", "dark"],
    ["music", "trance"],
    ["difficulty", "easy"]
  ]);

  static _validValues = {
    "theme": ["dark", "light", "gray"],
    "music": ["trance", "pop", "rock", "chillout", "off"],
    "difficulty": ["easy", "normal", "hard", "nightmare"],
  };

  constructor() {
    this.settings = new Map(Settings.defaultSettings);
  }

  set(setting, value) {
    if (!Settings._validValues[setting].includes(value)) {
      throw new Error("Invalid setting");
    }
    this.settings.set(setting, value);
  }
}