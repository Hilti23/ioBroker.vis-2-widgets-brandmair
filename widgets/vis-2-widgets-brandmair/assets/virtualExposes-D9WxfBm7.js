import { _ as r } from "./preload-helper-PPVm8Dsz.js";
let c;
let __tla = (async () => {
  const d = {}, s = /* @__PURE__ */ new Set();
  async function o(t) {
    if (typeof document > "u") return;
    const e = d[t] || [];
    await Promise.all(e.map((n) => {
      const a = new URL(n, import.meta.url).href;
      return s.has(a) || (s.add(a), document.querySelector(`link[rel="stylesheet"][data-mf-href="${a}"]`)) ? Promise.resolve() : new Promise((u, l) => {
        const i = document.createElement("link");
        i.rel = "stylesheet", i.href = a, i.setAttribute("data-mf-href", a), i.onload = () => u(), i.onerror = () => l(new Error(`[Module Federation] Failed to load CSS asset: ${a}`)), document.head.appendChild(i);
      });
    }));
  }
  c = {
    "./TrvzbThermostat": async () => {
      await o("./TrvzbThermostat");
      const t = await r(() => import("./TrvzbThermostat-Ca2H6vg6.js").then(async (m) => {
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
      const t = await r(() => import("./HeizstabWidget-Bzx89hQn.js").then(async (m) => {
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
      const t = await r(() => import("./PvSpeicherWidget-BAfn2Bb7.js").then(async (m) => {
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
      const t = await r(() => import("./WarmwasserWidget-BZoA6wKw.js").then(async (m) => {
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
      const t = await r(() => import("./TimerWidget-ht7V0MjI.js").then(async (m) => {
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
      const t = await r(() => import("./MuelltonnenWidget-Civ2dfnK.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./VerbrauchWidget": async () => {
      await o("./VerbrauchWidget");
      const t = await r(() => import("./VerbrauchWidget-BEphnxVU.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./EnergiemanagerWidget": async () => {
      await o("./EnergiemanagerWidget");
      const t = await r(() => import("./EnergiemanagerWidget-BG4P04jB.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./UrlaubWidget": async () => {
      await o("./UrlaubWidget");
      const t = await r(() => import("./UrlaubWidget-DtAZvVpZ.js").then(async (m) => {
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
      const t = await r(() => import("./translations-CJdv3lxY.js"), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    }
  };
})();
export {
  __tla,
  c as default
};
