import { _ as r } from "./preload-helper-PPVm8Dsz.js";
let _;
let __tla = (async () => {
  const d = {}, i = /* @__PURE__ */ new Set();
  async function o(t) {
    if (typeof document > "u") return;
    const e = d[t] || [];
    await Promise.all(e.map((n) => {
      const a = new URL(n, import.meta.url).href;
      return i.has(a) || (i.add(a), document.querySelector(`link[rel="stylesheet"][data-mf-href="${a}"]`)) ? Promise.resolve() : new Promise((u, l) => {
        const s = document.createElement("link");
        s.rel = "stylesheet", s.href = a, s.setAttribute("data-mf-href", a), s.onload = () => u(), s.onerror = () => l(new Error(`[Module Federation] Failed to load CSS asset: ${a}`)), document.head.appendChild(s);
      });
    }));
  }
  _ = {
    "./TrvzbThermostat": async () => {
      await o("./TrvzbThermostat");
      const t = await r(() => import("./TrvzbThermostat-bybt1-GH.js").then(async (m) => {
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
      const t = await r(() => import("./HeizstabWidget-7ZBvUwhb.js").then(async (m) => {
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
      const t = await r(() => import("./PvSpeicherWidget-B6t53_PT.js").then(async (m) => {
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
      const t = await r(() => import("./MuelltonnenWidget-B_yNWO2J.js").then(async (m) => {
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
      const t = await r(() => import("./VerbrauchWidget-Cnwoo6lO.js").then(async (m) => {
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
      const t = await r(() => import("./translations-CgbTZYxG.js"), [], import.meta.url), e = {};
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
