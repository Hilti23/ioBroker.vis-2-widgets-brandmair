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
      const t = await r(() => import("./TrvzbThermostat-VqvuxiYe.js").then(async (m) => {
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
      const t = await r(() => import("./HeizstabWidget-BvZHPEMb.js").then(async (m) => {
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
      const t = await r(() => import("./PvSpeicherWidget-BdD3aMYu.js").then(async (m) => {
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
      const t = await r(() => import("./MuelltonnenWidget-L-O1NaEC.js").then(async (m) => {
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
      const t = await r(() => import("./VerbrauchWidget-BT2JMfgP.js").then(async (m) => {
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
      const t = await r(() => import("./EnergiemanagerWidget-DSCjNQwJ.js").then(async (m) => {
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
      const t = await r(() => import("./translations-BtDETJrv.js"), [], import.meta.url), e = {};
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
