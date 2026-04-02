import { _ as o } from "./preload-helper-PPVm8Dsz.js";
let _;
let __tla = (async () => {
  const d = {}, i = /* @__PURE__ */ new Set();
  async function a(t) {
    if (typeof document > "u") return;
    const e = d[t] || [];
    await Promise.all(e.map((n) => {
      const r = new URL(n, import.meta.url).href;
      return i.has(r) || (i.add(r), document.querySelector(`link[rel="stylesheet"][data-mf-href="${r}"]`)) ? Promise.resolve() : new Promise((u, l) => {
        const s = document.createElement("link");
        s.rel = "stylesheet", s.href = r, s.setAttribute("data-mf-href", r), s.onload = () => u(), s.onerror = () => l(new Error(`[Module Federation] Failed to load CSS asset: ${r}`)), document.head.appendChild(s);
      });
    }));
  }
  _ = {
    "./TrvzbThermostat": async () => {
      await a("./TrvzbThermostat");
      const t = await o(() => import("./TrvzbThermostat-DL74Q3fB.js").then(async (m) => {
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
      const t = await o(() => import("./HeizstabWidget-yRQUd1IL.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./PvSpeicherWidget": async () => {
      await a("./PvSpeicherWidget");
      const t = await o(() => import("./PvSpeicherWidget-oQKB00Oc.js").then(async (m) => {
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
      const t = await o(() => import("./translations-BiADXKSR.js"), [], import.meta.url), e = {};
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
