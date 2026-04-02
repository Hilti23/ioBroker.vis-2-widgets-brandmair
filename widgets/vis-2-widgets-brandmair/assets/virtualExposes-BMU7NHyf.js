import { _ as r } from "./preload-helper-PPVm8Dsz.js";
let _;
let __tla = (async () => {
  const d = {}, i = /* @__PURE__ */ new Set();
  async function o(t) {
    if (typeof document > "u") return;
    const e = d[t] || [];
    await Promise.all(e.map((n) => {
      const s = new URL(n, import.meta.url).href;
      return i.has(s) || (i.add(s), document.querySelector(`link[rel="stylesheet"][data-mf-href="${s}"]`)) ? Promise.resolve() : new Promise((u, l) => {
        const a = document.createElement("link");
        a.rel = "stylesheet", a.href = s, a.setAttribute("data-mf-href", s), a.onload = () => u(), a.onerror = () => l(new Error(`[Module Federation] Failed to load CSS asset: ${s}`)), document.head.appendChild(a);
      });
    }));
  }
  _ = {
    "./TrvzbThermostat": async () => {
      await o("./TrvzbThermostat");
      const t = await r(() => import("./TrvzbThermostat-CQ0wTQNy.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./HeizstabWidget": async () => {
      await o("./HeizstabWidget");
      const t = await r(() => import("./HeizstabWidget-Bf9v1WA2.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./PvSpeicherWidget": async () => {
      await o("./PvSpeicherWidget");
      const t = await r(() => import("./PvSpeicherWidget-C2oZMM2t.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./WarmwasserWidget": async () => {
      await o("./WarmwasserWidget");
      const t = await r(() => import("./WarmwasserWidget-ZBwia_3q.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./TimerWidget": async () => {
      await o("./TimerWidget");
      const t = await r(() => import("./TimerWidget-aJj49I_T.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./MuelltonnenWidget": async () => {
      await o("./MuelltonnenWidget");
      const t = await r(() => import("./MuelltonnenWidget-BboEwNGS.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./translations": async () => {
      await o("./translations");
      const t = await r(() => import("./translations-BOeK0AVD.js"), [], import.meta.url), e = {};
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
