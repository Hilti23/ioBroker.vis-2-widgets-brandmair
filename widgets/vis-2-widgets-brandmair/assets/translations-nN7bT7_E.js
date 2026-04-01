const t = "Thermostat Sonoff TRVZB", e = "Name", o = "Actual temperature", n = "Set temperature", a = "Mode", s = "Running state", r = "Battery", c = "Availability", i = "Child lock", l = "Window detection", d = "Weekly schedule", _ = "heating", u = "ready", m = "Offline";
const p = "Manual", f = "Schedule", g = "Data points", h = "Display", $ = { thermostat_trvzb: t, widget_title: e, temperature_actual: o, temperature_set: n, mode: a, running_state: s, battery: r, available: c, child_lock: i, open_window: l, weekly_schedule: d, heating: _, ready: u, offline: m, mode_off: "Off", mode_heat: p, mode_auto: f, group_oids: g, group_display: h }, y = "Thermostat Sonoff TRVZB", b = "Name", w = "Ist-Temperatur", k = "Soll-Temperatur", v = "Modus", S = "Zustand", T = "Batterie", z = "Verf\xFCgbarkeit", M = "Kindersicherung", O = "Fenstererkennung", A = "Wochenplan", B = "heizt", Z = "bereit", D = "Offline", R = "Aus", V = "Manuell", W = "Zeitplan", j = "Datenpunkte", x = "Anzeige", N = { thermostat_trvzb: y, widget_title: b, temperature_actual: w, temperature_set: k, mode: v, running_state: S, battery: T, available: z, child_lock: M, open_window: O, weekly_schedule: A, heating: B, ready: Z, offline: D, mode_off: R, mode_heat: V, mode_auto: W, group_oids: j, group_display: x }, C = { en: $, de: N, prefix: "vis_2_widgets_brandmair_" }, F = Object.freeze(Object.defineProperty({ __proto__: null, default: C }, Symbol.toStringTag, { value: "Module" }));
export {
  F as a,
  N as d,
  $ as e,
  C as t
};
