class be extends window.visRxWidget {
  getPropertyValue = (t) => this.state.values[`${this.state.rxData[t]}.val`];
  static getI18nPrefix() {
    return "vis_2_widgets_brandmair_";
  }
}
const a = "Thermostat Sonoff TRVZB", n = "Name", o = "Ist-Temperatur", d = "Soll-Temperatur", c = "Modus", i = "Zustand", l = "Batterie", r = "Verf\xFCgbarkeit", u = "Kindersicherung", _ = "Fenstererkennung", h = "Wochenplan", g = "heizt", b = "bereit", y = "Offline", f = "Aus", m = "Manuell", w = "Zeitplan", p = "Datenpunkte", $ = "Anzeige", z = "Zigbee Ger\xE4t (Basispfad)", v = "z.B. zigbee.0.449fdafffe7d9fc6 \u2013 bef\xFCllt alle Felder automatisch", k = "Montag", T = "Dienstag", S = "Mittwoch", Z = "Donnerstag", F = "Freitag", M = "Samstag", A = "Sonntag", B = "ATON Heizstab", D = "Leistung", x = "Freigabe/Zwang", O = "Zwangsbetrieb", W = { thermostat_trvzb: a, widget_title: n, temperature_actual: o, temperature_set: d, mode: c, running_state: i, battery: l, available: r, child_lock: u, open_window: _, weekly_schedule: h, heating: g, ready: b, offline: y, mode_off: f, mode_heat: m, mode_auto: w, group_oids: p, group_display: $, base_oid: z, base_oid_tooltip: v, schedule_monday: k, schedule_tuesday: T, schedule_wednesday: S, schedule_thursday: Z, schedule_friday: F, schedule_saturday: M, schedule_sunday: A, heizstab_widget: B, heizstab_leistung: D, heizstab_zwang: x, heizstab_zwangsbetrieb: O }, N = "Thermostat Sonoff TRVZB", R = "Name", V = "Actual temperature", G = "Set temperature", P = "Mode", H = "Running state", I = "Battery", L = "Availability", C = "Child lock", E = "Window detection", K = "Weekly schedule", j = "heating", q = "ready", J = "Offline", Q = "Off", U = "Manual", X = "Schedule", Y = "Data points", ee = "Display", te = "Zigbee device (base path)", se = "e.g. zigbee.0.449fdafffe7d9fc6 \u2013 auto-fills all fields", ae = "Monday", ne = "Tuesday", oe = "Wednesday", de = "Thursday", ce = "Friday", ie = "Saturday", le = "Sunday", re = "ATON Heating Element", ue = "Power", _e = "Force mode", he = "Force mode", ge = { thermostat_trvzb: N, widget_title: R, temperature_actual: V, temperature_set: G, mode: P, running_state: H, battery: I, available: L, child_lock: C, open_window: E, weekly_schedule: K, heating: j, ready: q, offline: J, mode_off: Q, mode_heat: U, mode_auto: X, group_oids: Y, group_display: ee, base_oid: te, base_oid_tooltip: se, schedule_monday: ae, schedule_tuesday: ne, schedule_wednesday: oe, schedule_thursday: de, schedule_friday: ce, schedule_saturday: ie, schedule_sunday: le, heizstab_widget: re, heizstab_leistung: ue, heizstab_zwang: _e, heizstab_zwangsbetrieb: he }, s = { de: W, en: ge };
function ye(e) {
  const t = typeof window < "u" && window.systemLang || "de";
  return (s[t] || s.de)[e] ?? e;
}
export {
  be as G,
  ye as t
};
