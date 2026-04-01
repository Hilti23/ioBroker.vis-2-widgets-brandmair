import { _ as n } from "./preload-helper-PPVm8Dsz.js";
let _;
let __tla = (async () => {
  const d = {}, a = /* @__PURE__ */ new Set();
  async function i(s) {
    if (typeof document > "u") return;
    const e = d[s] || [];
    await Promise.all(e.map((o) => {
      const t = new URL(o, import.meta.url).href;
      return a.has(t) || (a.add(t), document.querySelector(`link[rel="stylesheet"][data-mf-href="${t}"]`)) ? Promise.resolve() : new Promise((l, u) => {
        const r = document.createElement("link");
        r.rel = "stylesheet", r.href = t, r.setAttribute("data-mf-href", t), r.onload = () => l(), r.onerror = () => u(new Error(`[Module Federation] Failed to load CSS asset: ${t}`)), document.head.appendChild(r);
      });
    }));
  }
  _ = {
    "./TrvzbThermostat": async () => {
      await i("./TrvzbThermostat");
      const s = await n(() => import("./TrvzbThermostat-B1VkMpF-.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url), e = {};
      return Object.assign(e, s), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./translations": async () => {
      await i("./translations");
      const s = await n(() => import("./translations-nN7bT7_E.js").then((o) => o.a), [], import.meta.url), e = {};
      return Object.assign(e, s), Object.defineProperty(e, "__esModule", {
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
