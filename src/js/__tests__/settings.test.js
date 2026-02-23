import { Settings } from "../settings";

test("set valid settings", () => {

  const setting = new Settings();

  setting.set("theme", "light");
  setting.set("music", "off");
  setting.set("difficulty", "nightmare");

  const received = [
    setting.settings.get("theme"),
    setting.settings.get("music"),
    setting.settings.get("difficulty")
  ];
  const expected = ["light", "off", "nightmare"];

  expect(received).toEqual(expected);

});

test("set invalid settings", () => {

  const setting = new Settings();

  expect(() => {
    setting.set("theme", "black");
  }).toThrow("Invalid setting");
  
});