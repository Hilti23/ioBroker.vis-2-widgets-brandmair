import { _ as s } from "./preload-helper-PPVm8Dsz.js";
let _;
let __tla = (async () => {
  const d = {}, i = /* @__PURE__ */ new Set();
  async function a(t) {
    if (typeof document > "u") return;
    const e = d[t] || [];
    await Promise.all(e.map((n) => {
      const r = new URL(n, import.meta.url).href;
      return i.has(r) || (i.add(r), document.querySelector(`link[rel="stylesheet"][data-mf-href="${r}"]`)) ? Promise.resolve() : new Promise((u, l) => {
        const o = document.createElement("link");
        o.rel = "stylesheet", o.href = r, o.setAttribute("data-mf-href", r), o.onload = () => u(), o.onerror = () => l(new Error(`[Module Federation] Failed to load CSS asset: ${r}`)), document.head.appendChild(o);
      });
    }));
  }
  _ = {
    "./TrvzbThermostat": async () => {
      await a("./TrvzbThermostat");
      const t = await s(() => import("./TrvzbThermostat-BwsNVc1F.js").then(async (m) => {
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
      const t = await s(() => import("./HeizstabWidget-CFGc9qwy.js").then(async (m) => {
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
      const t = await s(() => import("./PvSpeicherWidget-2CVHK1so.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./WarmwasserWidget": async () => {
      await a("./WarmwasserWidget");
      const t = await s(() => import("./WarmwasserWidget-BZoA6wKw.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./TimerWidget": async () => {
      await a("./TimerWidget");
      const t = await s(() => import("./TimerWidget-0ALq0fjS.js").then(async (m) => {
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
      const t = await s(() => import("./translations-DX89Ab5c.js"), [], import.meta.url), e = {};
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
