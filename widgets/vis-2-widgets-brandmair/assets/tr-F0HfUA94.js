import { e as n, d as a } from "./en-B9sIZq9s.js";
class r extends window.visRxWidget {
  getPropertyValue = (e) => this.state.values[`${this.state.rxData[e]}.val`];
  static getI18nPrefix() {
    return "vis_2_widgets_brandmair_";
  }
}
const s = { de: a, en: n };
function d(t) {
  const e = typeof window < "u" && window.systemLang || "de";
  return (s[e] || s.de)[t] ?? t;
}
export {
  r as G,
  d as t
};
