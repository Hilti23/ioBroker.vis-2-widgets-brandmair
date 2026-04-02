import { _ as o } from "./preload-helper-PPVm8Dsz.js";
let _;
let __tla = (async () => {
  const d = {}, n = /* @__PURE__ */ new Set();
  async function a(t) {
    if (typeof document > "u") return;
    const e = d[t] || [];
    await Promise.all(e.map((i) => {
      const r = new URL(i, import.meta.url).href;
      return n.has(r) || (n.add(r), document.querySelector(`link[rel="stylesheet"][data-mf-href="${r}"]`)) ? Promise.resolve() : new Promise((l, u) => {
        const s = document.createElement("link");
        s.rel = "stylesheet", s.href = r, s.setAttribute("data-mf-href", r), s.onload = () => l(), s.onerror = () => u(new Error(`[Module Federation] Failed to load CSS asset: ${r}`)), document.head.appendChild(s);
      });
    }));
  }
  _ = {
    "./TrvzbThermostat": async () => {
      await a("./TrvzbThermostat");
      const t = await o(() => import("./TrvzbThermostat-B4r9pqWs.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./HeizstabWidget": async () => {
      await a("./HeizstabWidget");
      const t = await o(() => import("./HeizstabWidget-CUN--prC.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./translations": async () => {
      await a("./translations");
      const t = await o(() => import("./translations-BXr09hvz.js"), [], import.meta.url), e = {};
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
