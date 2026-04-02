import { _ as a } from "./preload-helper-PPVm8Dsz.js";
let _;
let __tla = (async () => {
  const d = {}, i = /* @__PURE__ */ new Set();
  async function n(t) {
    if (typeof document > "u") return;
    const e = d[t] || [];
    await Promise.all(e.map((o) => {
      const r = new URL(o, import.meta.url).href;
      return i.has(r) || (i.add(r), document.querySelector(`link[rel="stylesheet"][data-mf-href="${r}"]`)) ? Promise.resolve() : new Promise((l, u) => {
        const s = document.createElement("link");
        s.rel = "stylesheet", s.href = r, s.setAttribute("data-mf-href", r), s.onload = () => l(), s.onerror = () => u(new Error(`[Module Federation] Failed to load CSS asset: ${r}`)), document.head.appendChild(s);
      });
    }));
  }
  _ = {
    "./TrvzbThermostat": async () => {
      await n("./TrvzbThermostat");
      const t = await a(() => import("./TrvzbThermostat-Hu6c1Ghe.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./HeizstabWidget": async () => {
      await n("./HeizstabWidget");
      const t = await a(() => import("./HeizstabWidget-CkXNi_wF.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./translations": async () => {
      await n("./translations");
      const t = await a(() => import("./translations-fwaKGiDk.js").then((o) => o.a), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    }
  };
})();
export {
  __tla,
  _ as default
};
