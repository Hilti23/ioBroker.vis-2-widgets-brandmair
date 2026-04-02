let J, Y, w, c, k, E, x, p, h, U, R, q, H, B, v, P, M, I, T, W, d, $, L;
let __tla = (async () => {
  function i(e, n) {
    for (var r = 0; r < n.length; r++) {
      const _ = n[r];
      if (typeof _ != "string" && !Array.isArray(_)) {
        for (const t in _) if (t !== "default" && !(t in e)) {
          const a = Object.getOwnPropertyDescriptor(_, t);
          a && Object.defineProperty(e, t, a.get ? a : {
            enumerable: true,
            get: () => _[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  const f = "__mf_init____mf__virtual/vis2brandmairWidgets__mf_v__runtimeInit__mf_v__.js__";
  let o = globalThis[f];
  if (!o) {
    let e, n;
    const r = new Promise((_, t) => {
      e = _, n = t;
    });
    o = globalThis[f] = {
      initPromise: r,
      initResolve: e,
      initReject: n
    }, typeof window > "u" && e({
      loadRemote: function() {
        return Promise.resolve(void 0);
      },
      loadShare: function() {
        return Promise.resolve(void 0);
      }
    });
  }
  let m, u, s, l, S, g, b, y, C, O, D, V, j, N, F, A, z, G, K;
  m = o.initPromise;
  u = m.then((e) => e.loadShare("react", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  }));
  s = await u.then((e) => typeof e == "function" ? e() : e);
  l = s;
  c = s.__esModule ? s.default : s.default ?? s;
  ({ Children: d, Component: E, Fragment: R, Profiler: S, PureComponent: p, StrictMode: g, Suspense: b, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: y, act: C, cloneElement: P, createContext: I, createElement: v, createFactory: O, createRef: T, forwardRef: h, isValidElement: x, lazy: D, memo: L, startTransition: V, unstable_act: j, useCallback: w, useContext: M, useDebugValue: N, useDeferredValue: F, useEffect: k, useId: A, useImperativeHandle: U, useInsertionEffect: z, useLayoutEffect: W, useMemo: q, useReducer: B, useRef: H, useState: Y, useSyncExternalStore: G, useTransition: K, version: $ } = s);
  J = i({
    __proto__: null,
    Children: d,
    Component: E,
    Fragment: R,
    Profiler: S,
    PureComponent: p,
    StrictMode: g,
    Suspense: b,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: y,
    act: C,
    cloneElement: P,
    createContext: I,
    createElement: v,
    createFactory: O,
    createRef: T,
    default: c,
    forwardRef: h,
    isValidElement: x,
    lazy: D,
    memo: L,
    startTransition: V,
    unstable_act: j,
    useCallback: w,
    useContext: M,
    useDebugValue: N,
    useDeferredValue: F,
    useEffect: k,
    useId: A,
    useImperativeHandle: U,
    useInsertionEffect: z,
    useLayoutEffect: W,
    useMemo: q,
    useReducer: B,
    useRef: H,
    useState: Y,
    useSyncExternalStore: G,
    useTransition: K,
    version: $
  }, [
    l
  ]);
})();
export {
  J as R,
  Y as _,
  __tla,
  w as a,
  c as b,
  k as c,
  E as d,
  x as e,
  p as f,
  h as g,
  U as h,
  R as i,
  q as j,
  H as k,
  B as l,
  v as m,
  P as n,
  M as o,
  I as p,
  T as q,
  W as r,
  d as s,
  $ as t,
  L as u
};
