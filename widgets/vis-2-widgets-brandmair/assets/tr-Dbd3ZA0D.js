import { t as f, e as c, d as w } from "./translations-fwaKGiDk.js";
(function() {
  if (typeof window > "u" || typeof window.addWords != "function") return;
  const { prefix: t, ...e } = f, s = Object.keys(e);
  if (!s.length) return;
  const o = {};
  for (const i of Object.keys(e[s[0]])) {
    const r = t + i;
    o[r] = {};
    for (const a of s) o[r][a] = e[a][i];
  }
  window.addWords(o);
})();
class u extends window.visRxWidget {
  getPropertyValue = (t) => this.state.values[`${this.state.rxData[t]}.val`];
  static getI18nPrefix() {
    return "vis_2_widgets_brandmair_";
  }
}
const d = { de: w, en: c };
function g(n) {
  const t = typeof window < "u" && window.systemLang || "de";
  return (d[t] || d.de)[n] ?? n;
}
export {
  u as G,
  g as t
};
