import { e as zt, R as vt, r as Sr, g as Cr, o as Gt, p as Ht, m as at, i as wr, __tla as __tla_0 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-36-XpKNE.js";
let da, ae, Ia, oi, ei, ci, se, xe, fe, ce, ie, oe, Na, Ha, At, $t, ya, Ye, $r, bn, aa, Ua, li, Ka, re, Da, ma, dt, pa, ur, Ra, Qa, nt, fi, Va, Mn, Un, ir, ra, Vn, ti, Ze, si, Hn, Aa, fr, ne, Je, Qt, ua, te, yt, me, K, ni, ai, ea, $e, ii, di, na, ui, lr, ca;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var Yt = {
    exports: {}
  }, E = {};
  var gt = Symbol.for("react.transitional.element"), ht = Symbol.for("react.portal"), Le = Symbol.for("react.fragment"), Fe = Symbol.for("react.strict_mode"), Me = Symbol.for("react.profiler"), We = Symbol.for("react.consumer"), De = Symbol.for("react.context"), Ne = Symbol.for("react.forward_ref"), je = Symbol.for("react.suspense"), Ke = Symbol.for("react.suspense_list"), ze = Symbol.for("react.memo"), Ge = Symbol.for("react.lazy"), xr = Symbol.for("react.view_transition"), Ar = Symbol.for("react.client.reference");
  function U(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case gt:
          switch (e = e.type, e) {
            case Le:
            case Me:
            case Fe:
            case je:
            case Ke:
            case xr:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case De:
                case Ne:
                case Ge:
                case ze:
                  return e;
                case We:
                  return e;
                default:
                  return t;
              }
          }
        case ht:
          return t;
      }
    }
  }
  E.ContextConsumer = We;
  E.ContextProvider = De;
  E.Element = gt;
  E.ForwardRef = Ne;
  E.Fragment = Le;
  E.Lazy = Ge;
  E.Memo = ze;
  E.Portal = ht;
  E.Profiler = Me;
  E.StrictMode = Fe;
  E.Suspense = je;
  E.SuspenseList = Ke;
  E.isContextConsumer = function(e) {
    return U(e) === We;
  };
  E.isContextProvider = function(e) {
    return U(e) === De;
  };
  E.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === gt;
  };
  E.isForwardRef = function(e) {
    return U(e) === Ne;
  };
  E.isFragment = function(e) {
    return U(e) === Le;
  };
  E.isLazy = function(e) {
    return U(e) === Ge;
  };
  E.isMemo = function(e) {
    return U(e) === ze;
  };
  E.isPortal = function(e) {
    return U(e) === ht;
  };
  E.isProfiler = function(e) {
    return U(e) === Me;
  };
  E.isStrictMode = function(e) {
    return U(e) === Fe;
  };
  E.isSuspense = function(e) {
    return U(e) === je;
  };
  E.isSuspenseList = function(e) {
    return U(e) === Ke;
  };
  E.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Le || e === Me || e === Fe || e === je || e === Ke || typeof e == "object" && e !== null && (e.$$typeof === Ge || e.$$typeof === ze || e.$$typeof === De || e.$$typeof === We || e.$$typeof === Ne || e.$$typeof === Ar || e.getModuleId !== void 0);
  };
  E.typeOf = U;
  Yt.exports = E;
  var Ut = Yt.exports;
  ne = function(e) {
    if (typeof e != "object" || e === null) return false;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  };
  function Vt(e) {
    if (zt(e) || Ut.isValidElementType(e) || !ne(e)) return e;
    const t = {};
    return Object.keys(e).forEach((r) => {
      t[r] = Vt(e[r]);
    }), t;
  }
  K = function(e, t, r = {
    clone: true
  }) {
    const n = r.clone ? {
      ...e
    } : e;
    return ne(e) && ne(t) && Object.keys(t).forEach((a) => {
      zt(t[a]) || Ut.isValidElementType(t[a]) ? n[a] = t[a] : ne(t[a]) && Object.prototype.hasOwnProperty.call(e, a) && ne(e[a]) ? n[a] = K(e[a], t[a], r) : r.clone ? n[a] = ne(t[a]) ? Vt(t[a]) : t[a] : n[a] = t[a];
    }), n;
  };
  ae = function(e, ...t) {
    const r = new URL(`https://mui.com/production-error/?code=${e}`);
    return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
  };
  Qt = function(e) {
    if (typeof e != "string") throw new Error(ae(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
  };
  $r = function(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
    return Math.max(t, Math.min(e, r));
  };
  function be(e, t) {
    return t ? K(e, t, {
      clone: false
    }) : e;
  }
  function Tt(e, t) {
    if (!e.containerQueries) return t;
    const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, a) => {
      var _a2, _b;
      const o = /min-width:\s*([0-9.]+)/;
      return +(((_a2 = n.match(o)) == null ? void 0 : _a2[1]) || 0) - +(((_b = a.match(o)) == null ? void 0 : _b[1]) || 0);
    });
    return r.length ? r.reduce((n, a) => {
      const o = t[a];
      return delete n[a], n[a] = o, n;
    }, {
      ...t
    }) : t;
  }
  function kr(e, t) {
    return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
  }
  function vr(e, t) {
    const r = t.match(/^@([^/]+)?\/?(.+)?$/);
    if (!r) return null;
    const [, n, a] = r, o = Number.isNaN(+n) ? n || 0 : +n;
    return e.containerQueries(a).up(o);
  }
  function Tr(e) {
    const t = (o, s) => o.replace("@media", s ? `@container ${s}` : "@container");
    function r(o, s) {
      o.up = (...c) => t(e.breakpoints.up(...c), s), o.down = (...c) => t(e.breakpoints.down(...c), s), o.between = (...c) => t(e.breakpoints.between(...c), s), o.only = (...c) => t(e.breakpoints.only(...c), s), o.not = (...c) => {
        const l = t(e.breakpoints.not(...c), s);
        return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
      };
    }
    const n = {}, a = (o) => (r(n, o), n);
    return r(a), {
      ...e,
      containerQueries: a
    };
  }
  const He = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, Et = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (e) => `@media (min-width:${He[e]}px)`
  }, Er = {
    containerQueries: (e) => ({
      up: (t) => {
        let r = typeof t == "number" ? t : He[t] || t;
        return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
      }
    })
  };
  te = function(e, t, r) {
    const n = e.theme || {};
    if (Array.isArray(t)) {
      const o = n.breakpoints || Et;
      return t.reduce((s, c, l) => (s[o.up(o.keys[l])] = r(t[l]), s), {});
    }
    if (typeof t == "object") {
      const o = n.breakpoints || Et;
      return Object.keys(t).reduce((s, c) => {
        if (kr(o.keys, c)) {
          const l = vr(n.containerQueries ? n : Er, c);
          l && (s[l] = r(t[c], c));
        } else if (Object.keys(o.values || He).includes(c)) {
          const l = o.up(c);
          s[l] = r(t[c], c);
        } else {
          const l = c;
          s[l] = t[l];
        }
        return s;
      }, {});
    }
    return r(t);
  };
  function Xt(e = {}) {
    var _a2;
    return ((_a2 = e.keys) == null ? void 0 : _a2.reduce((r, n) => {
      const a = e.up(n);
      return r[a] = {}, r;
    }, {})) || {};
  }
  function ct(e, t) {
    return e.reduce((r, n) => {
      const a = r[n];
      return (!a || Object.keys(a).length === 0) && delete r[n], r;
    }, t);
  }
  ni = function(e, ...t) {
    const r = Xt(e), n = [
      r,
      ...t
    ].reduce((a, o) => K(a, o), {});
    return ct(Object.keys(r), n);
  };
  function Or(e, t) {
    if (typeof e != "object") return {};
    const r = {}, n = Object.keys(t);
    return Array.isArray(e) ? n.forEach((a, o) => {
      o < e.length && (r[a] = true);
    }) : n.forEach((a) => {
      e[a] != null && (r[a] = true);
    }), r;
  }
  ai = function({ values: e, breakpoints: t, base: r }) {
    const n = r || Or(e, t), a = Object.keys(n);
    if (a.length === 0) return e;
    let o;
    return a.reduce((s, c, l) => (Array.isArray(e) ? (s[c] = e[l] != null ? e[l] : e[o], o = l) : typeof e == "object" ? (s[c] = e[c] != null ? e[c] : e[o], o = c) : s[c] = e, s), {});
  };
  Ye = function(e, t, r = true) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && r) {
      const n = `vars.${t}`.split(".").reduce((a, o) => a && a[o] ? a[o] : null, e);
      if (n != null) return n;
    }
    return t.split(".").reduce((n, a) => n && n[a] != null ? n[a] : null, e);
  };
  function Re(e, t, r, n = r) {
    let a;
    return typeof e == "function" ? a = e(r) : Array.isArray(e) ? a = e[r] || n : a = Ye(e, r) || n, t && (a = t(a, n, e)), a;
  }
  function L(e) {
    const { prop: t, cssProperty: r = e.prop, themeKey: n, transform: a } = e, o = (s) => {
      if (s[t] == null) return null;
      const c = s[t], l = s.theme, u = Ye(l, n) || {};
      return te(s, c, (g) => {
        let d = Re(u, a, g);
        return g === d && typeof g == "string" && (d = Re(u, a, `${t}${g === "default" ? "" : Qt(g)}`, g)), r === false ? d : {
          [r]: d
        };
      });
    };
    return o.propTypes = {}, o.filterProps = [
      t
    ], o;
  }
  function Br(e) {
    const t = {};
    return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
  }
  const Pr = {
    m: "margin",
    p: "padding"
  }, Rr = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: [
      "Left",
      "Right"
    ],
    y: [
      "Top",
      "Bottom"
    ]
  }, Ot = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  }, _r = Br((e) => {
    if (e.length > 2) if (Ot[e]) e = Ot[e];
    else return [
      e
    ];
    const [t, r] = e.split(""), n = Pr[t], a = Rr[r] || "";
    return Array.isArray(a) ? a.map((o) => n + o) : [
      n + a
    ];
  }), mt = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd"
  ], pt = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd"
  ];
  [
    ...mt,
    ...pt
  ];
  function Ae(e, t, r, n) {
    const a = Ye(e, t, true) ?? r;
    return typeof a == "number" || typeof a == "string" ? (o) => typeof o == "string" ? o : typeof a == "string" ? `calc(${o} * ${a})` : a * o : Array.isArray(a) ? (o) => {
      if (typeof o == "string") return o;
      const s = Math.abs(o), c = a[s];
      return o >= 0 ? c : typeof c == "number" ? -c : `-${c}`;
    } : typeof a == "function" ? a : () => {
    };
  }
  yt = function(e) {
    return Ae(e, "spacing", 8);
  };
  $e = function(e, t) {
    return typeof t == "string" || t == null ? t : e(t);
  };
  function Ir(e, t) {
    return (r) => e.reduce((n, a) => (n[a] = $e(t, r), n), {});
  }
  function Lr(e, t, r, n) {
    if (!t.includes(r)) return null;
    const a = _r(r), o = Ir(a, n), s = e[r];
    return te(e, s, o);
  }
  function qt(e, t) {
    const r = yt(e.theme);
    return Object.keys(e).map((n) => Lr(e, t, n, r)).reduce(be, {});
  }
  function R(e) {
    return qt(e, mt);
  }
  R.propTypes = {};
  R.filterProps = mt;
  function _(e) {
    return qt(e, pt);
  }
  _.propTypes = {};
  _.filterProps = pt;
  function Ue(...e) {
    const t = e.reduce((n, a) => (a.filterProps.forEach((o) => {
      n[o] = a;
    }), n), {}), r = (n) => Object.keys(n).reduce((a, o) => t[o] ? be(a, t[o](n)) : a, {});
    return r.propTypes = {}, r.filterProps = e.reduce((n, a) => n.concat(a.filterProps), []), r;
  }
  function Y(e) {
    return typeof e != "number" ? e : `${e}px solid`;
  }
  function V(e, t) {
    return L({
      prop: e,
      themeKey: "borders",
      transform: t
    });
  }
  const Fr = V("border", Y), Mr = V("borderTop", Y), Wr = V("borderRight", Y), Dr = V("borderBottom", Y), Nr = V("borderLeft", Y), jr = V("borderColor"), Kr = V("borderTopColor"), zr = V("borderRightColor"), Gr = V("borderBottomColor"), Hr = V("borderLeftColor"), Yr = V("outline", Y), Ur = V("outlineColor"), Ve = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Ae(e.theme, "shape.borderRadius", 4), r = (n) => ({
        borderRadius: $e(t, n)
      });
      return te(e, e.borderRadius, r);
    }
    return null;
  };
  Ve.propTypes = {};
  Ve.filterProps = [
    "borderRadius"
  ];
  Ue(Fr, Mr, Wr, Dr, Nr, jr, Kr, zr, Gr, Hr, Ve, Yr, Ur);
  const Qe = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
      const t = Ae(e.theme, "spacing", 8), r = (n) => ({
        gap: $e(t, n)
      });
      return te(e, e.gap, r);
    }
    return null;
  };
  Qe.propTypes = {};
  Qe.filterProps = [
    "gap"
  ];
  const Xe = (e) => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
      const t = Ae(e.theme, "spacing", 8), r = (n) => ({
        columnGap: $e(t, n)
      });
      return te(e, e.columnGap, r);
    }
    return null;
  };
  Xe.propTypes = {};
  Xe.filterProps = [
    "columnGap"
  ];
  const qe = (e) => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
      const t = Ae(e.theme, "spacing", 8), r = (n) => ({
        rowGap: $e(t, n)
      });
      return te(e, e.rowGap, r);
    }
    return null;
  };
  qe.propTypes = {};
  qe.filterProps = [
    "rowGap"
  ];
  const Vr = L({
    prop: "gridColumn"
  }), Qr = L({
    prop: "gridRow"
  }), Xr = L({
    prop: "gridAutoFlow"
  }), qr = L({
    prop: "gridAutoColumns"
  }), Zr = L({
    prop: "gridAutoRows"
  }), Jr = L({
    prop: "gridTemplateColumns"
  }), en = L({
    prop: "gridTemplateRows"
  }), tn = L({
    prop: "gridTemplateAreas"
  }), rn = L({
    prop: "gridArea"
  });
  Ue(Qe, Xe, qe, Vr, Qr, Xr, qr, Zr, Jr, en, tn, rn);
  function le(e, t) {
    return t === "grey" ? t : e;
  }
  const nn = L({
    prop: "color",
    themeKey: "palette",
    transform: le
  }), an = L({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: le
  }), on = L({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: le
  });
  Ue(nn, an, on);
  function G(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e;
  }
  const sn = L({
    prop: "width",
    transform: G
  }), bt = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (r) => {
        var _a2, _b, _c, _d, _e2;
        const n = ((_c = (_b = (_a2 = e.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b.values) == null ? void 0 : _c[r]) || He[r];
        return n ? ((_e2 = (_d = e.theme) == null ? void 0 : _d.breakpoints) == null ? void 0 : _e2.unit) !== "px" ? {
          maxWidth: `${n}${e.theme.breakpoints.unit}`
        } : {
          maxWidth: n
        } : {
          maxWidth: G(r)
        };
      };
      return te(e, e.maxWidth, t);
    }
    return null;
  };
  bt.filterProps = [
    "maxWidth"
  ];
  const cn = L({
    prop: "minWidth",
    transform: G
  }), fn = L({
    prop: "height",
    transform: G
  }), ln = L({
    prop: "maxHeight",
    transform: G
  }), un = L({
    prop: "minHeight",
    transform: G
  });
  L({
    prop: "size",
    cssProperty: "width",
    transform: G
  });
  L({
    prop: "size",
    cssProperty: "height",
    transform: G
  });
  const dn = L({
    prop: "boxSizing"
  });
  Ue(sn, bt, cn, fn, ln, un, dn);
  Ze = {
    border: {
      themeKey: "borders",
      transform: Y
    },
    borderTop: {
      themeKey: "borders",
      transform: Y
    },
    borderRight: {
      themeKey: "borders",
      transform: Y
    },
    borderBottom: {
      themeKey: "borders",
      transform: Y
    },
    borderLeft: {
      themeKey: "borders",
      transform: Y
    },
    borderColor: {
      themeKey: "palette"
    },
    borderTopColor: {
      themeKey: "palette"
    },
    borderRightColor: {
      themeKey: "palette"
    },
    borderBottomColor: {
      themeKey: "palette"
    },
    borderLeftColor: {
      themeKey: "palette"
    },
    outline: {
      themeKey: "borders",
      transform: Y
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: Ve
    },
    color: {
      themeKey: "palette",
      transform: le
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: le
    },
    backgroundColor: {
      themeKey: "palette",
      transform: le
    },
    p: {
      style: _
    },
    pt: {
      style: _
    },
    pr: {
      style: _
    },
    pb: {
      style: _
    },
    pl: {
      style: _
    },
    px: {
      style: _
    },
    py: {
      style: _
    },
    padding: {
      style: _
    },
    paddingTop: {
      style: _
    },
    paddingRight: {
      style: _
    },
    paddingBottom: {
      style: _
    },
    paddingLeft: {
      style: _
    },
    paddingX: {
      style: _
    },
    paddingY: {
      style: _
    },
    paddingInline: {
      style: _
    },
    paddingInlineStart: {
      style: _
    },
    paddingInlineEnd: {
      style: _
    },
    paddingBlock: {
      style: _
    },
    paddingBlockStart: {
      style: _
    },
    paddingBlockEnd: {
      style: _
    },
    m: {
      style: R
    },
    mt: {
      style: R
    },
    mr: {
      style: R
    },
    mb: {
      style: R
    },
    ml: {
      style: R
    },
    mx: {
      style: R
    },
    my: {
      style: R
    },
    margin: {
      style: R
    },
    marginTop: {
      style: R
    },
    marginRight: {
      style: R
    },
    marginBottom: {
      style: R
    },
    marginLeft: {
      style: R
    },
    marginX: {
      style: R
    },
    marginY: {
      style: R
    },
    marginInline: {
      style: R
    },
    marginInlineStart: {
      style: R
    },
    marginInlineEnd: {
      style: R
    },
    marginBlock: {
      style: R
    },
    marginBlockStart: {
      style: R
    },
    marginBlockEnd: {
      style: R
    },
    displayPrint: {
      cssProperty: false,
      transform: (e) => ({
        "@media print": {
          display: e
        }
      })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: {
      style: Qe
    },
    rowGap: {
      style: qe
    },
    columnGap: {
      style: Xe
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: {
      themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: {
      themeKey: "shadows"
    },
    width: {
      transform: G
    },
    maxWidth: {
      style: bt
    },
    minWidth: {
      transform: G
    },
    height: {
      transform: G
    },
    maxHeight: {
      transform: G
    },
    minHeight: {
      transform: G
    },
    boxSizing: {},
    font: {
      themeKey: "font"
    },
    fontFamily: {
      themeKey: "typography"
    },
    fontSize: {
      themeKey: "typography"
    },
    fontStyle: {
      themeKey: "typography"
    },
    fontWeight: {
      themeKey: "typography"
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
      cssProperty: false,
      themeKey: "typography"
    }
  };
  function gn(...e) {
    const t = e.reduce((n, a) => n.concat(Object.keys(a)), []), r = new Set(t);
    return e.every((n) => r.size === Object.keys(n).length);
  }
  function hn(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function mn() {
    function e(r, n, a, o) {
      const s = {
        [r]: n,
        theme: a
      }, c = o[r];
      if (!c) return {
        [r]: n
      };
      const { cssProperty: l = r, themeKey: u, transform: h, style: g } = c;
      if (n == null) return null;
      if (u === "typography" && n === "inherit") return {
        [r]: n
      };
      const d = Ye(a, u) || {};
      return g ? g(s) : te(s, n, (m) => {
        let p = Re(d, h, m);
        return m === p && typeof m == "string" && (p = Re(d, h, `${r}${m === "default" ? "" : Qt(m)}`, m)), l === false ? p : {
          [l]: p
        };
      });
    }
    function t(r) {
      const { sx: n, theme: a = {}, nested: o } = r || {};
      if (!n) return null;
      const s = a.unstable_sxConfig ?? Ze;
      function c(l) {
        let u = l;
        if (typeof l == "function") u = l(a);
        else if (typeof l != "object") return l;
        if (!u) return null;
        const h = Xt(a.breakpoints), g = Object.keys(h);
        let d = h;
        return Object.keys(u).forEach((b) => {
          const m = hn(u[b], a);
          if (m != null) if (typeof m == "object") if (s[b]) d = be(d, e(b, m, a, s));
          else {
            const p = te({
              theme: a
            }, m, (k) => ({
              [b]: k
            }));
            gn(p, m) ? d[b] = t({
              sx: m,
              theme: a,
              nested: true
            }) : d = be(d, p);
          }
          else d = be(d, e(b, m, a, s));
        }), !o && a.modularCssLayers ? {
          "@layer sx": Tt(a, ct(g, d))
        } : Tt(a, ct(g, d));
      }
      return Array.isArray(n) ? n.map(c) : c(n);
    }
    return t;
  }
  Je = mn();
  Je.filterProps = [
    "sx"
  ];
  function pn(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
  }
  function yn(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
  }
  let N, _e, A, Zt, St, Ct, Sn, Jt, Cn, wn, et, xn;
  bn = (function() {
    function e(r) {
      var n = this;
      this._insertTag = function(a) {
        var o;
        n.tags.length === 0 ? n.insertionPoint ? o = n.insertionPoint.nextSibling : n.prepend ? o = n.container.firstChild : o = n.before : o = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, o), n.tags.push(a);
      }, this.isSpeedy = r.speedy === void 0 ? true : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
    }
    var t = e.prototype;
    return t.hydrate = function(n) {
      n.forEach(this._insertTag);
    }, t.insert = function(n) {
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(yn(this));
      var a = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var o = pn(a);
        try {
          o.insertRule(n, o.cssRules.length);
        } catch {
        }
      } else a.appendChild(document.createTextNode(n));
      this.ctr++;
    }, t.flush = function() {
      this.tags.forEach(function(n) {
        var a;
        return (a = n.parentNode) == null ? void 0 : a.removeChild(n);
      }), this.tags = [], this.ctr = 0;
    }, e;
  })();
  N = "-ms-";
  _e = "-moz-";
  A = "-webkit-";
  Zt = "comm";
  St = "rule";
  Ct = "decl";
  Sn = "@import";
  Jt = "@keyframes";
  Cn = "@layer";
  wn = Math.abs;
  et = String.fromCharCode;
  xn = Object.assign;
  function An(e, t) {
    return W(e, 0) ^ 45 ? (((t << 2 ^ W(e, 0)) << 2 ^ W(e, 1)) << 2 ^ W(e, 2)) << 2 ^ W(e, 3) : 0;
  }
  function er(e) {
    return e.trim();
  }
  function $n(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function $(e, t, r) {
    return e.replace(t, r);
  }
  function ft(e, t) {
    return e.indexOf(t);
  }
  function W(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function Se(e, t, r) {
    return e.slice(t, r);
  }
  function q(e) {
    return e.length;
  }
  function wt(e) {
    return e.length;
  }
  function ve(e, t) {
    return t.push(e), e;
  }
  function kn(e, t) {
    return e.map(t).join("");
  }
  var tt = 1, de = 1, tr = 0, z = 0, F = 0, ge = "";
  function rt(e, t, r, n, a, o, s) {
    return {
      value: e,
      root: t,
      parent: r,
      type: n,
      props: a,
      children: o,
      line: tt,
      column: de,
      length: s,
      return: ""
    };
  }
  function he(e, t) {
    return xn(rt("", null, null, "", null, null, 0), e, {
      length: -e.length
    }, t);
  }
  function vn() {
    return F;
  }
  function Tn() {
    return F = z > 0 ? W(ge, --z) : 0, de--, F === 10 && (de = 1, tt--), F;
  }
  function H() {
    return F = z < tr ? W(ge, z++) : 0, de++, F === 10 && (de = 1, tt++), F;
  }
  function J() {
    return W(ge, z);
  }
  function Oe() {
    return z;
  }
  function ke(e, t) {
    return Se(ge, e, t);
  }
  function Ce(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function rr(e) {
    return tt = de = 1, tr = q(ge = e), z = 0, [];
  }
  function nr(e) {
    return ge = "", e;
  }
  function Be(e) {
    return er(ke(z - 1, lt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function En(e) {
    for (; (F = J()) && F < 33; ) H();
    return Ce(e) > 2 || Ce(F) > 3 ? "" : " ";
  }
  function On(e, t) {
    for (; --t && H() && !(F < 48 || F > 102 || F > 57 && F < 65 || F > 70 && F < 97); ) ;
    return ke(e, Oe() + (t < 6 && J() == 32 && H() == 32));
  }
  function lt(e) {
    for (; H(); ) switch (F) {
      case e:
        return z;
      case 34:
      case 39:
        e !== 34 && e !== 39 && lt(F);
        break;
      case 40:
        e === 41 && lt(e);
        break;
      case 92:
        H();
        break;
    }
    return z;
  }
  function Bn(e, t) {
    for (; H() && e + F !== 57; ) if (e + F === 84 && J() === 47) break;
    return "/*" + ke(t, z - 1) + "*" + et(e === 47 ? e : H());
  }
  function Pn(e) {
    for (; !Ce(J()); ) H();
    return ke(e, z);
  }
  function Rn(e) {
    return nr(Pe("", null, null, null, [
      ""
    ], e = rr(e), 0, [
      0
    ], e));
  }
  function Pe(e, t, r, n, a, o, s, c, l) {
    for (var u = 0, h = 0, g = s, d = 0, b = 0, m = 0, p = 1, k = 1, w = 1, O = 0, C = "", S = a, B = o, M = n, x = C; k; ) switch (m = O, O = H()) {
      case 40:
        if (m != 108 && W(x, g - 1) == 58) {
          ft(x += $(Be(O), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Be(O);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += En(m);
        break;
      case 92:
        x += On(Oe() - 1, 7);
        continue;
      case 47:
        switch (J()) {
          case 42:
          case 47:
            ve(_n(Bn(H(), Oe()), t, r), l);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * p:
        c[u++] = q(x) * w;
      case 125 * p:
      case 59:
      case 0:
        switch (O) {
          case 0:
          case 125:
            k = 0;
          case 59 + h:
            w == -1 && (x = $(x, /\f/g, "")), b > 0 && q(x) - g && ve(b > 32 ? Pt(x + ";", n, r, g - 1) : Pt($(x, " ", "") + ";", n, r, g - 2), l);
            break;
          case 59:
            x += ";";
          default:
            if (ve(M = Bt(x, t, r, u, h, a, c, C, S = [], B = [], g), o), O === 123) if (h === 0) Pe(x, t, M, M, S, o, g, c, B);
            else switch (d === 99 && W(x, 3) === 110 ? 100 : d) {
              case 100:
              case 108:
              case 109:
              case 115:
                Pe(e, M, M, n && ve(Bt(e, M, M, 0, 0, a, c, C, a, S = [], g), B), a, B, g, c, n ? S : B);
                break;
              default:
                Pe(x, M, M, M, [
                  ""
                ], B, 0, c, B);
            }
        }
        u = h = b = 0, p = w = 1, C = x = "", g = s;
        break;
      case 58:
        g = 1 + q(x), b = m;
      default:
        if (p < 1) {
          if (O == 123) --p;
          else if (O == 125 && p++ == 0 && Tn() == 125) continue;
        }
        switch (x += et(O), O * p) {
          case 38:
            w = h > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            c[u++] = (q(x) - 1) * w, w = 1;
            break;
          case 64:
            J() === 45 && (x += Be(H())), d = J(), h = g = q(C = x += Pn(Oe())), O++;
            break;
          case 45:
            m === 45 && q(x) == 2 && (p = 0);
        }
    }
    return o;
  }
  function Bt(e, t, r, n, a, o, s, c, l, u, h) {
    for (var g = a - 1, d = a === 0 ? o : [
      ""
    ], b = wt(d), m = 0, p = 0, k = 0; m < n; ++m) for (var w = 0, O = Se(e, g + 1, g = wn(p = s[m])), C = e; w < b; ++w) (C = er(p > 0 ? d[w] + " " + O : $(O, /&\f/g, d[w]))) && (l[k++] = C);
    return rt(e, t, r, a === 0 ? St : c, l, u, h);
  }
  function _n(e, t, r) {
    return rt(e, t, r, Zt, et(vn()), Se(e, 2, -2), 0);
  }
  function Pt(e, t, r, n) {
    return rt(e, t, r, Ct, Se(e, 0, n), Se(e, n + 1, -1), n);
  }
  function ue(e, t) {
    for (var r = "", n = wt(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
    return r;
  }
  function In(e, t, r, n) {
    switch (e.type) {
      case Cn:
        if (e.children.length) break;
      case Sn:
      case Ct:
        return e.return = e.return || e.value;
      case Zt:
        return "";
      case Jt:
        return e.return = e.value + "{" + ue(e.children, n) + "}";
      case St:
        e.value = e.props.join(",");
    }
    return q(r = ue(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
  }
  function Ln(e) {
    var t = wt(e);
    return function(r, n, a, o) {
      for (var s = "", c = 0; c < t; c++) s += e[c](r, n, a, o) || "";
      return s;
    };
  }
  function Fn(e) {
    return function(t) {
      t.root || (t = t.return) && e(t);
    };
  }
  Mn = function(e) {
    var t = /* @__PURE__ */ Object.create(null);
    return function(r) {
      return t[r] === void 0 && (t[r] = e(r)), t[r];
    };
  };
  var Wn = function(t, r, n) {
    for (var a = 0, o = 0; a = o, o = J(), a === 38 && o === 12 && (r[n] = 1), !Ce(o); ) H();
    return ke(t, z);
  }, Dn = function(t, r) {
    var n = -1, a = 44;
    do
      switch (Ce(a)) {
        case 0:
          a === 38 && J() === 12 && (r[n] = 1), t[n] += Wn(z - 1, r, n);
          break;
        case 2:
          t[n] += Be(a);
          break;
        case 4:
          if (a === 44) {
            t[++n] = J() === 58 ? "&\f" : "", r[n] = t[n].length;
            break;
          }
        default:
          t[n] += et(a);
      }
    while (a = H());
    return t;
  }, Nn = function(t, r) {
    return nr(Dn(rr(t), r));
  }, Rt = /* @__PURE__ */ new WeakMap(), jn = function(t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line; n.type !== "rule"; ) if (n = n.parent, !n) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Rt.get(n)) && !a) {
        Rt.set(t, true);
        for (var o = [], s = Nn(r, o), c = n.props, l = 0, u = 0; l < s.length; l++) for (var h = 0; h < c.length; h++, u++) t.props[u] = o[l] ? s[l].replace(/&\f/g, c[h]) : c[h] + " " + s[l];
      }
    }
  }, Kn = function(t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
    }
  };
  function ar(e, t) {
    switch (An(e, t)) {
      case 5103:
        return A + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return A + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return A + e + _e + e + N + e + e;
      case 6828:
      case 4268:
        return A + e + N + e + e;
      case 6165:
        return A + e + N + "flex-" + e + e;
      case 5187:
        return A + e + $(e, /(\w+).+(:[^]+)/, A + "box-$1$2" + N + "flex-$1$2") + e;
      case 5443:
        return A + e + N + "flex-item-" + $(e, /flex-|-self/, "") + e;
      case 4675:
        return A + e + N + "flex-line-pack" + $(e, /align-content|flex-|-self/, "") + e;
      case 5548:
        return A + e + N + $(e, "shrink", "negative") + e;
      case 5292:
        return A + e + N + $(e, "basis", "preferred-size") + e;
      case 6060:
        return A + "box-" + $(e, "-grow", "") + A + e + N + $(e, "grow", "positive") + e;
      case 4554:
        return A + $(e, /([^-])(transform)/g, "$1" + A + "$2") + e;
      case 6187:
        return $($($(e, /(zoom-|grab)/, A + "$1"), /(image-set)/, A + "$1"), e, "") + e;
      case 5495:
      case 3959:
        return $(e, /(image-set\([^]*)/, A + "$1$`$1");
      case 4968:
        return $($(e, /(.+:)(flex-)?(.*)/, A + "box-pack:$3" + N + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + A + e + e;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return $(e, /(.+)-inline(.+)/, A + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (q(e) - 1 - t > 6) switch (W(e, t + 1)) {
          case 109:
            if (W(e, t + 4) !== 45) break;
          case 102:
            return $(e, /(.+:)(.+)-([^]+)/, "$1" + A + "$2-$3$1" + _e + (W(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ft(e, "stretch") ? ar($(e, "stretch", "fill-available"), t) + e : e;
        }
        break;
      case 4949:
        if (W(e, t + 1) !== 115) break;
      case 6444:
        switch (W(e, q(e) - 3 - (~ft(e, "!important") && 10))) {
          case 107:
            return $(e, ":", ":" + A) + e;
          case 101:
            return $(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + A + (W(e, 14) === 45 ? "inline-" : "") + "box$3$1" + A + "$2$3$1" + N + "$2box$3") + e;
        }
        break;
      case 5936:
        switch (W(e, t + 11)) {
          case 114:
            return A + e + N + $(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return A + e + N + $(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return A + e + N + $(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return A + e + N + e + e;
    }
    return e;
  }
  let zn, Gn, Yn;
  zn = function(t, r, n, a) {
    if (t.length > -1 && !t.return) switch (t.type) {
      case Ct:
        t.return = ar(t.value, t.length);
        break;
      case Jt:
        return ue([
          he(t, {
            value: $(t.value, "@", "@" + A)
          })
        ], a);
      case St:
        if (t.length) return kn(t.props, function(o) {
          switch ($n(o, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return ue([
                he(t, {
                  props: [
                    $(o, /:(read-\w+)/, ":" + _e + "$1")
                  ]
                })
              ], a);
            case "::placeholder":
              return ue([
                he(t, {
                  props: [
                    $(o, /:(plac\w+)/, ":" + A + "input-$1")
                  ]
                }),
                he(t, {
                  props: [
                    $(o, /:(plac\w+)/, ":" + _e + "$1")
                  ]
                }),
                he(t, {
                  props: [
                    $(o, /:(plac\w+)/, N + "input-$1")
                  ]
                })
              ], a);
          }
          return "";
        });
    }
  };
  Gn = [
    zn
  ];
  Hn = function(t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function(p) {
        var k = p.getAttribute("data-emotion");
        k.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || Gn, o = {}, s, c = [];
    s = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function(p) {
      for (var k = p.getAttribute("data-emotion").split(" "), w = 1; w < k.length; w++) o[k[w]] = true;
      c.push(p);
    });
    var l, u = [
      jn,
      Kn
    ];
    {
      var h, g = [
        In,
        Fn(function(p) {
          h.insert(p);
        })
      ], d = Ln(u.concat(a, g)), b = function(k) {
        return ue(Rn(k), d);
      };
      l = function(k, w, O, C) {
        h = O, b(k ? k + "{" + w.styles + "}" : w.styles), C && (m.inserted[w.name] = true);
      };
    }
    var m = {
      key: r,
      sheet: new bn({
        key: r,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: l
    };
    return m.sheet.hydrate(c), m;
  };
  Yn = true;
  Un = function(e, t, r) {
    var n = "";
    return r.split(" ").forEach(function(a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }), n;
  };
  ir = function(t, r, n) {
    var a = t.key + "-" + r.name;
    (n === false || Yn === false) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  };
  Vn = function(t, r, n) {
    ir(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do
        t.insert(r === o ? "." + a : "", o, t.sheet, true), o = o.next;
      while (o !== void 0);
    }
  };
  function Qn(e) {
    for (var t = 0, r, n = 0, a = e.length; a >= 4; ++n, a -= 4) r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= r >>> 24, t = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (a) {
      case 3:
        t ^= (e.charCodeAt(n + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(n + 1) & 255) << 8;
      case 1:
        t ^= e.charCodeAt(n) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    }
    return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
  }
  var Xn = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  }, qn = /[A-Z]|^ms/g, Zn = /_EMO_([^_]+?)_([^]*?)_EMO_/g, or = function(t) {
    return t.charCodeAt(1) === 45;
  }, _t = function(t) {
    return t != null && typeof t != "boolean";
  }, it = Mn(function(e) {
    return or(e) ? e : e.replace(qn, "-$&").toLowerCase();
  }), It = function(t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string") return r.replace(Zn, function(n, a, o) {
          return Z = {
            name: a,
            styles: o,
            next: Z
          }, a;
        });
    }
    return Xn[t] !== 1 && !or(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
  function we(e, t, r) {
    if (r == null) return "";
    var n = r;
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof r) {
      case "boolean":
        return "";
      case "object": {
        var a = r;
        if (a.anim === 1) return Z = {
          name: a.name,
          styles: a.styles,
          next: Z
        }, a.name;
        var o = r;
        if (o.styles !== void 0) {
          var s = o.next;
          if (s !== void 0) for (; s !== void 0; ) Z = {
            name: s.name,
            styles: s.styles,
            next: Z
          }, s = s.next;
          var c = o.styles + ";";
          return c;
        }
        return Jn(e, t, r);
      }
      case "function": {
        if (e !== void 0) {
          var l = Z, u = r(e);
          return Z = l, we(e, t, u);
        }
        break;
      }
    }
    var h = r;
    if (t == null) return h;
    var g = t[h];
    return g !== void 0 ? g : h;
  }
  function Jn(e, t, r) {
    var n = "";
    if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += we(e, t, r[a]) + ";";
    else for (var o in r) {
      var s = r[o];
      if (typeof s != "object") {
        var c = s;
        t != null && t[c] !== void 0 ? n += o + "{" + t[c] + "}" : _t(c) && (n += it(o) + ":" + It(o, c) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0)) for (var l = 0; l < s.length; l++) _t(s[l]) && (n += it(o) + ":" + It(o, s[l]) + ";");
      else {
        var u = we(e, t, s);
        switch (o) {
          case "animation":
          case "animationName": {
            n += it(o) + ":" + u + ";";
            break;
          }
          default:
            n += o + "{" + u + "}";
        }
      }
    }
    return n;
  }
  var Lt = /label:\s*([^\s;{]+)\s*(;|$)/g, Z;
  ea = function(e, t, r) {
    if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
    var n = true, a = "";
    Z = void 0;
    var o = e[0];
    if (o == null || o.raw === void 0) n = false, a += we(r, t, o);
    else {
      var s = o;
      a += s[0];
    }
    for (var c = 1; c < e.length; c++) if (a += we(r, t, e[c]), n) {
      var l = o;
      a += l[c];
    }
    Lt.lastIndex = 0;
    for (var u = "", h; (h = Lt.exec(a)) !== null; ) u += "-" + h[1];
    var g = Qn(a) + u;
    return {
      name: g,
      styles: a,
      next: Z
    };
  };
  let ta, sr, cr, ut, ia, oa;
  ta = function(t) {
    return t();
  };
  sr = vt.useInsertionEffect ? vt.useInsertionEffect : false;
  ra = sr || ta;
  ii = sr || Sr;
  cr = Ht(typeof HTMLElement < "u" ? Hn({
    key: "css"
  }) : null);
  oi = cr.Provider;
  na = function(t) {
    return Cr(function(r, n) {
      var a = Gt(cr);
      return t(r, a, n);
    });
  };
  aa = Ht({});
  fr = {}.hasOwnProperty;
  ut = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
  si = function(t, r) {
    var n = {};
    for (var a in r) fr.call(r, a) && (n[a] = r[a]);
    return n[ut] = t, n;
  };
  ia = function(t) {
    var r = t.cache, n = t.serialized, a = t.isStringTag;
    return ir(r, n, a), ra(function() {
      return Vn(r, n, a);
    }), null;
  };
  oa = na(function(e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[ut], o = [
      n
    ], s = "";
    typeof e.className == "string" ? s = Un(t.registered, o, e.className) : e.className != null && (s = e.className + " ");
    var c = ea(o, void 0, Gt(aa));
    s += t.key + "-" + c.name;
    var l = {};
    for (var u in e) fr.call(e, u) && u !== "css" && u !== ut && (l[u] = e[u]);
    return l.className = s, r && (l.ref = r), at(wr, null, at(ia, {
      cache: t,
      serialized: c,
      isStringTag: typeof a == "string"
    }), at(a, l));
  });
  ci = oa;
  const sa = (e) => {
    const t = Object.keys(e).map((r) => ({
      key: r,
      val: e[r]
    })) || [];
    return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
      ...r,
      [n.key]: n.val
    }), {});
  };
  ca = function(e) {
    const { values: t = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: r = "px", step: n = 5, ...a } = e, o = sa(t), s = Object.keys(o);
    function c(d) {
      return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r})`;
    }
    function l(d) {
      return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - n / 100}${r})`;
    }
    function u(d, b) {
      const m = s.indexOf(b);
      return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r}) and (max-width:${(m !== -1 && typeof t[s[m]] == "number" ? t[s[m]] : b) - n / 100}${r})`;
    }
    function h(d) {
      return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : c(d);
    }
    function g(d) {
      const b = s.indexOf(d);
      return b === 0 ? c(s[1]) : b === s.length - 1 ? l(s[b]) : u(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
    }
    return {
      keys: s,
      values: o,
      up: c,
      down: l,
      between: u,
      only: h,
      not: g,
      unit: r,
      ...a
    };
  };
  const fa = {
    borderRadius: 4
  };
  lr = function(e = 8, t = yt({
    spacing: e
  })) {
    if (e.mui) return e;
    const r = (...n) => (n.length === 0 ? [
      1
    ] : n).map((o) => {
      const s = t(o);
      return typeof s == "number" ? `${s}px` : s;
    }).join(" ");
    return r.mui = true, r;
  };
  function la(e, t) {
    var _a2;
    const r = this;
    if (r.vars) {
      if (!((_a2 = r.colorSchemes) == null ? void 0 : _a2[e]) || typeof r.getColorSchemeSelector != "function") return {};
      let n = r.getColorSchemeSelector(e);
      return n === "&" ? t : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/, "")}) &`), {
        [n]: t
      });
    }
    return r.palette.mode === e ? t : {};
  }
  ua = function(e = {}, ...t) {
    const { breakpoints: r = {}, palette: n = {}, spacing: a, shape: o = {}, ...s } = e, c = ca(r), l = lr(a);
    let u = K({
      breakpoints: c,
      direction: "ltr",
      components: {},
      palette: {
        mode: "light",
        ...n
      },
      spacing: l,
      shape: {
        ...fa,
        ...o
      }
    }, s);
    return u = Tr(u), u.applyStyles = la, u = t.reduce((h, g) => K(h, g), u), u.unstable_sxConfig = {
      ...Ze,
      ...s == null ? void 0 : s.unstable_sxConfig
    }, u.unstable_sx = function(g) {
      return Je({
        sx: g,
        theme: this
      });
    }, u;
  };
  function xt(e, t = 0, r = 1) {
    return $r(e, t, r);
  }
  da = function(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
    let r = e.match(t);
    return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, a) => a < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  };
  function ga(e) {
    const t = e.toString(16);
    return t.length === 1 ? `0${t}` : t;
  }
  re = function(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return re(da(e));
    const t = e.indexOf("("), r = e.substring(0, t);
    if (![
      "rgb",
      "rgba",
      "hsl",
      "hsla",
      "color"
    ].includes(r)) throw new Error(ae(9, e));
    let n = e.substring(t + 1, e.length - 1), a;
    if (r === "color") {
      if (n = n.split(" "), a = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ![
        "srgb",
        "display-p3",
        "a98-rgb",
        "prophoto-rgb",
        "rec-2020"
      ].includes(a)) throw new Error(ae(10, a));
    } else n = n.split(",");
    return n = n.map((o) => parseFloat(o)), {
      type: r,
      values: n,
      colorSpace: a
    };
  };
  const ha = (e) => {
    const t = re(e);
    return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
  }, pe = (e, t) => {
    try {
      return ha(e);
    } catch {
      return e;
    }
  };
  nt = function(e) {
    const { type: t, colorSpace: r } = e;
    let { values: n } = e;
    return t.includes("rgb") ? n = n.map((a, o) => o < 3 ? parseInt(a, 10) : a) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
  };
  fi = function(e) {
    if (e.startsWith("#")) return e;
    const { values: t } = re(e);
    return `#${t.map((r, n) => ga(n === 3 ? Math.round(255 * r) : r)).join("")}`;
  };
  ur = function(e) {
    e = re(e);
    const { values: t } = e, r = t[0], n = t[1] / 100, a = t[2] / 100, o = n * Math.min(a, 1 - a), s = (u, h = (u + r / 30) % 12) => a - o * Math.max(Math.min(h - 3, 9 - h, 1), -1);
    let c = "rgb";
    const l = [
      Math.round(s(0) * 255),
      Math.round(s(8) * 255),
      Math.round(s(4) * 255)
    ];
    return e.type === "hsla" && (c += "a", l.push(t[3])), nt({
      type: c,
      values: l
    });
  };
  dt = function(e) {
    e = re(e);
    let t = e.type === "hsl" || e.type === "hsla" ? re(ur(e)).values : e.values;
    return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
  };
  ma = function(e, t) {
    const r = dt(e), n = dt(t);
    return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
  };
  pa = function(e, t) {
    return e = re(e), t = xt(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, nt(e);
  };
  function Te(e, t, r) {
    try {
      return pa(e, t);
    } catch {
      return e;
    }
  }
  At = function(e, t) {
    if (e = re(e), t = xt(t), e.type.includes("hsl")) e.values[2] *= 1 - t;
    else if (e.type.includes("rgb") || e.type.includes("color")) for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
    return nt(e);
  };
  function v(e, t, r) {
    try {
      return At(e, t);
    } catch {
      return e;
    }
  }
  $t = function(e, t) {
    if (e = re(e), t = xt(t), e.type.includes("hsl")) e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.includes("rgb")) for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
    else if (e.type.includes("color")) for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
    return nt(e);
  };
  function T(e, t, r) {
    try {
      return $t(e, t);
    } catch {
      return e;
    }
  }
  ya = function(e, t = 0.15) {
    return dt(e) > 0.5 ? At(e, t) : $t(e, t);
  };
  function Ee(e, t, r) {
    try {
      return ya(e, t);
    } catch {
      return e;
    }
  }
  function ba(e = "") {
    function t(...n) {
      if (!n.length) return "";
      const a = n[0];
      return typeof a == "string" && !a.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${a}${t(...n.slice(1))})` : `, ${a}`;
    }
    return (n, ...a) => `var(--${e ? `${e}-` : ""}${n}${t(...a)})`;
  }
  const Ft = (e, t, r, n = []) => {
    let a = e;
    t.forEach((o, s) => {
      s === t.length - 1 ? Array.isArray(a) ? a[Number(o)] = r : a && typeof a == "object" && (a[o] = r) : a && typeof a == "object" && (a[o] || (a[o] = n.includes(o) ? [] : {}), a = a[o]);
    });
  }, Sa = (e, t, r) => {
    function n(a, o = [], s = []) {
      Object.entries(a).forEach(([c, l]) => {
        (!r || r && !r([
          ...o,
          c
        ])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [
          ...o,
          c
        ], Array.isArray(l) ? [
          ...s,
          c
        ] : s) : t([
          ...o,
          c
        ], l, s));
      });
    }
    n(e);
  }, Ca = (e, t) => typeof t == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
  function ot(e, t) {
    const { prefix: r, shouldSkipGeneratingVar: n } = t || {}, a = {}, o = {}, s = {};
    return Sa(e, (c, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(c, l))) {
        const h = `--${r ? `${r}-` : ""}${c.join("-")}`, g = Ca(c, l);
        Object.assign(a, {
          [h]: g
        }), Ft(o, c, `var(${h})`, u), Ft(s, c, `var(${h}, ${g})`, u);
      }
    }, (c) => c[0] === "vars"), {
      css: a,
      vars: o,
      varsWithDefaults: s
    };
  }
  function wa(e, t = {}) {
    const { getSelector: r = k, disableCssColorScheme: n, colorSchemeSelector: a } = t, { colorSchemes: o = {}, components: s, defaultColorScheme: c = "light", ...l } = e, { vars: u, css: h, varsWithDefaults: g } = ot(l, t);
    let d = g;
    const b = {}, { [c]: m, ...p } = o;
    if (Object.entries(p || {}).forEach(([C, S]) => {
      const { vars: B, css: M, varsWithDefaults: x } = ot(S, t);
      d = K(d, x), b[C] = {
        css: M,
        vars: B
      };
    }), m) {
      const { css: C, vars: S, varsWithDefaults: B } = ot(m, t);
      d = K(d, B), b[c] = {
        css: C,
        vars: S
      };
    }
    function k(C, S) {
      var _a2, _b;
      let B = a;
      if (a === "class" && (B = ".%s"), a === "data" && (B = "[data-%s]"), (a == null ? void 0 : a.startsWith("data-")) && !a.includes("%s") && (B = `[${a}="%s"]`), C) {
        if (B === "media") return e.defaultColorScheme === C ? ":root" : {
          [`@media (prefers-color-scheme: ${((_b = (_a2 = o[C]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode) || C})`]: {
            ":root": S
          }
        };
        if (B) return e.defaultColorScheme === C ? `:root, ${B.replace("%s", String(C))}` : B.replace("%s", String(C));
      }
      return ":root";
    }
    return {
      vars: d,
      generateThemeVars: () => {
        let C = {
          ...u
        };
        return Object.entries(b).forEach(([, { vars: S }]) => {
          C = K(C, S);
        }), C;
      },
      generateStyleSheets: () => {
        var _a2, _b;
        const C = [], S = e.defaultColorScheme || "light";
        function B(Q, D) {
          Object.keys(D).length && C.push(typeof Q == "string" ? {
            [Q]: {
              ...D
            }
          } : Q);
        }
        B(r(void 0, {
          ...h
        }), h);
        const { [S]: M, ...x } = b;
        if (M) {
          const { css: Q } = M, D = (_b = (_a2 = o[S]) == null ? void 0 : _a2.palette) == null ? void 0 : _b.mode, i = !n && D ? {
            colorScheme: D,
            ...Q
          } : {
            ...Q
          };
          B(r(S, {
            ...i
          }), i);
        }
        return Object.entries(x).forEach(([Q, { css: D }]) => {
          var _a3, _b2;
          const i = (_b2 = (_a3 = o[Q]) == null ? void 0 : _a3.palette) == null ? void 0 : _b2.mode, y = !n && i ? {
            colorScheme: i,
            ...D
          } : {
            ...D
          };
          B(r(Q, {
            ...y
          }), y);
        }), C;
      }
    };
  }
  function xa(e) {
    return function(r) {
      return e === "media" ? `@media (prefers-color-scheme: ${r})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
    };
  }
  xe = {
    black: "#000",
    white: "#fff"
  };
  Aa = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
  };
  ie = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff"
  };
  oe = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000"
  };
  me = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00"
  };
  se = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff"
  };
  ce = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea"
  };
  fe = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853"
  };
  function dr() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        paper: xe.white,
        default: xe.white
      },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12
      }
    };
  }
  const $a = dr();
  function gr() {
    return {
      text: {
        primary: xe.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)"
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: {
        paper: "#121212",
        default: "#121212"
      },
      action: {
        active: xe.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24
      }
    };
  }
  const Mt = gr();
  function Wt(e, t, r, n) {
    const a = n.light || n, o = n.dark || n * 1.5;
    e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = $t(e.main, a) : t === "dark" && (e.dark = At(e.main, o)));
  }
  function ka(e = "light") {
    return e === "dark" ? {
      main: se[200],
      light: se[50],
      dark: se[400]
    } : {
      main: se[700],
      light: se[400],
      dark: se[800]
    };
  }
  function va(e = "light") {
    return e === "dark" ? {
      main: ie[200],
      light: ie[50],
      dark: ie[400]
    } : {
      main: ie[500],
      light: ie[300],
      dark: ie[700]
    };
  }
  function Ta(e = "light") {
    return e === "dark" ? {
      main: oe[500],
      light: oe[300],
      dark: oe[700]
    } : {
      main: oe[700],
      light: oe[400],
      dark: oe[800]
    };
  }
  function Ea(e = "light") {
    return e === "dark" ? {
      main: ce[400],
      light: ce[300],
      dark: ce[700]
    } : {
      main: ce[700],
      light: ce[500],
      dark: ce[900]
    };
  }
  function Oa(e = "light") {
    return e === "dark" ? {
      main: fe[400],
      light: fe[300],
      dark: fe[700]
    } : {
      main: fe[800],
      light: fe[500],
      dark: fe[900]
    };
  }
  function Ba(e = "light") {
    return e === "dark" ? {
      main: me[400],
      light: me[300],
      dark: me[700]
    } : {
      main: "#ed6c02",
      light: me[500],
      dark: me[900]
    };
  }
  function kt(e) {
    const { mode: t = "light", contrastThreshold: r = 3, tonalOffset: n = 0.2, ...a } = e, o = e.primary || ka(t), s = e.secondary || va(t), c = e.error || Ta(t), l = e.info || Ea(t), u = e.success || Oa(t), h = e.warning || Ba(t);
    function g(p) {
      return ma(p, Mt.text.primary) >= r ? Mt.text.primary : $a.text.primary;
    }
    const d = ({ color: p, name: k, mainShade: w = 500, lightShade: O = 300, darkShade: C = 700 }) => {
      if (p = {
        ...p
      }, !p.main && p[w] && (p.main = p[w]), !p.hasOwnProperty("main")) throw new Error(ae(11, k ? ` (${k})` : "", w));
      if (typeof p.main != "string") throw new Error(ae(12, k ? ` (${k})` : "", JSON.stringify(p.main)));
      return Wt(p, "light", O, n), Wt(p, "dark", C, n), p.contrastText || (p.contrastText = g(p.main)), p;
    };
    let b;
    return t === "light" ? b = dr() : t === "dark" && (b = gr()), K({
      common: {
        ...xe
      },
      mode: t,
      primary: d({
        color: o,
        name: "primary"
      }),
      secondary: d({
        color: s,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700"
      }),
      error: d({
        color: c,
        name: "error"
      }),
      warning: d({
        color: h,
        name: "warning"
      }),
      info: d({
        color: l,
        name: "info"
      }),
      success: d({
        color: u,
        name: "success"
      }),
      grey: Aa,
      contrastThreshold: r,
      getContrastText: g,
      augmentColor: d,
      tonalOffset: n,
      ...b
    }, a);
  }
  function Pa(e) {
    const t = {};
    return Object.entries(e).forEach((n) => {
      const [a, o] = n;
      typeof o == "object" && (t[a] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
    }), t;
  }
  Ra = function(e, t) {
    return {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: {
          "@media (orientation: landscape)": {
            minHeight: 48
          }
        },
        [e.up("sm")]: {
          minHeight: 64
        }
      },
      ...t
    };
  };
  function _a(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const Dt = {
    textTransform: "uppercase"
  }, Nt = '"Roboto", "Helvetica", "Arial", sans-serif';
  Ia = function(e, t) {
    const { fontFamily: r = Nt, fontSize: n = 14, fontWeightLight: a = 300, fontWeightRegular: o = 400, fontWeightMedium: s = 500, fontWeightBold: c = 700, htmlFontSize: l = 16, allVariants: u, pxToRem: h, ...g } = typeof t == "function" ? t(e) : t, d = n / 14, b = h || ((k) => `${k / l * d}rem`), m = (k, w, O, C, S) => ({
      fontFamily: r,
      fontWeight: k,
      fontSize: b(w),
      lineHeight: O,
      ...r === Nt ? {
        letterSpacing: `${_a(C / w)}em`
      } : {},
      ...S,
      ...u
    }), p = {
      h1: m(a, 96, 1.167, -1.5),
      h2: m(a, 60, 1.2, -0.5),
      h3: m(o, 48, 1.167, 0),
      h4: m(o, 34, 1.235, 0.25),
      h5: m(o, 24, 1.334, 0),
      h6: m(s, 20, 1.6, 0.15),
      subtitle1: m(o, 16, 1.75, 0.15),
      subtitle2: m(s, 14, 1.57, 0.1),
      body1: m(o, 16, 1.5, 0.15),
      body2: m(o, 14, 1.43, 0.15),
      button: m(s, 14, 1.75, 0.4, Dt),
      caption: m(o, 12, 1.66, 0.4),
      overline: m(o, 12, 2.66, 1, Dt),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
    return K({
      htmlFontSize: l,
      pxToRem: b,
      fontFamily: r,
      fontSize: n,
      fontWeightLight: a,
      fontWeightRegular: o,
      fontWeightMedium: s,
      fontWeightBold: c,
      ...p
    }, g, {
      clone: false
    });
  };
  const La = 0.2, Fa = 0.14, Ma = 0.12;
  function P(...e) {
    return [
      `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${La})`,
      `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Fa})`,
      `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ma})`
    ].join(",");
  }
  let Wa;
  Wa = [
    "none",
    P(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    P(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    P(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    P(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    P(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    P(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    P(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    P(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    P(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    P(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    P(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    P(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    P(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    P(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    P(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    P(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    P(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    P(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    P(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    P(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    P(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    P(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    P(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    P(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ];
  Da = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  };
  Na = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
  function jt(e) {
    return `${Math.round(e)}ms`;
  }
  function ja(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
  }
  Ka = function(e) {
    const t = {
      ...Da,
      ...e.easing
    }, r = {
      ...Na,
      ...e.duration
    };
    return {
      getAutoHeightDuration: ja,
      create: (a = [
        "all"
      ], o = {}) => {
        const { duration: s = r.standard, easing: c = t.easeInOut, delay: l = 0, ...u } = o;
        return (Array.isArray(a) ? a : [
          a
        ]).map((h) => `${h} ${typeof s == "string" ? s : jt(s)} ${c} ${typeof l == "string" ? l : jt(l)}`).join(",");
      },
      ...e,
      easing: t,
      duration: r
    };
  };
  const za = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function Ga(e) {
    return ne(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
  }
  function hr(e = {}) {
    const t = {
      ...e
    };
    function r(n) {
      const a = Object.entries(n);
      for (let o = 0; o < a.length; o++) {
        const [s, c] = a[o];
        !Ga(c) || s.startsWith("unstable_") ? delete n[s] : ne(c) && (n[s] = {
          ...c
        }, r(n[s]));
      }
    }
    return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
  }
  function Ie(e = {}, ...t) {
    const { breakpoints: r, mixins: n = {}, spacing: a, palette: o = {}, transitions: s = {}, typography: c = {}, shape: l, ...u } = e;
    if (e.vars && e.generateThemeVars === void 0) throw new Error(ae(20));
    const h = kt(o), g = ua(e);
    let d = K(g, {
      mixins: Ra(g.breakpoints, n),
      palette: h,
      shadows: Wa.slice(),
      typography: Ia(h, c),
      transitions: Ka(s),
      zIndex: {
        ...za
      }
    });
    return d = K(d, u), d = t.reduce((b, m) => K(b, m), d), d.unstable_sxConfig = {
      ...Ze,
      ...u == null ? void 0 : u.unstable_sxConfig
    }, d.unstable_sx = function(m) {
      return Je({
        sx: m,
        theme: this
      });
    }, d.toRuntimeSource = hr, d;
  }
  li = function(...e) {
    return Ie(...e);
  };
  Ha = function(e) {
    let t;
    return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
  };
  const Ya = [
    ...Array(25)
  ].map((e, t) => {
    if (t === 0) return "none";
    const r = Ha(t);
    return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
  });
  function mr(e) {
    return {
      inputPlaceholder: e === "dark" ? 0.5 : 0.42,
      inputUnderline: e === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
      switchTrack: e === "dark" ? 0.3 : 0.38
    };
  }
  function pr(e) {
    return e === "dark" ? Ya : [];
  }
  Ua = function(e) {
    const { palette: t = {
      mode: "light"
    }, opacity: r, overlays: n, ...a } = e, o = kt(t);
    return {
      palette: o,
      opacity: {
        ...mr(o.mode),
        ...r
      },
      overlays: n || pr(o.mode),
      ...a
    };
  };
  Va = function(e) {
    var _a2;
    return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || e[0] === "palette" && !!((_a2 = e[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
  };
  let Xa;
  Qa = (e) => [
    ...[
      ...Array(25)
    ].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`),
    `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ""}palette-AppBar-darkColor`
  ];
  Xa = (e) => (t, r) => {
    const n = e.rootSelector || ":root", a = e.colorSchemeSelector;
    let o = a;
    if (a === "class" && (o = ".%s"), a === "data" && (o = "[data-%s]"), (a == null ? void 0 : a.startsWith("data-")) && !a.includes("%s") && (o = `[${a}="%s"]`), e.defaultColorScheme === t) {
      if (t === "dark") {
        const s = {};
        return Qa(e.cssVarPrefix).forEach((c) => {
          s[c] = r[c], delete r[c];
        }), o === "media" ? {
          [n]: r,
          "@media (prefers-color-scheme: dark)": {
            [n]: s
          }
        } : o ? {
          [o.replace("%s", t)]: s,
          [`${n}, ${o.replace("%s", t)}`]: r
        } : {
          [n]: {
            ...r,
            ...s
          }
        };
      }
      if (o && o !== "media") return `${n}, ${o.replace("%s", String(t))}`;
    } else if (t) {
      if (o === "media") return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
      if (o) return o.replace("%s", String(t));
    }
    return n;
  };
  function qa(e, t) {
    t.forEach((r) => {
      e[r] || (e[r] = {});
    });
  }
  function f(e, t, r) {
    !e[t] && r && (e[t] = r);
  }
  function ye(e) {
    return typeof e != "string" || !e.startsWith("hsl") ? e : ur(e);
  }
  function ee(e, t) {
    `${t}Channel` in e || (e[`${t}Channel`] = pe(ye(e[t])));
  }
  function Za(e) {
    return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
  }
  const X = (e) => {
    try {
      return e();
    } catch {
    }
  }, Ja = (e = "mui") => ba(e);
  function st(e, t, r, n) {
    if (!t) return;
    t = t === true ? {} : t;
    const a = n === "dark" ? "dark" : "light";
    if (!r) {
      e[n] = Ua({
        ...t,
        palette: {
          mode: a,
          ...t == null ? void 0 : t.palette
        }
      });
      return;
    }
    const { palette: o, ...s } = Ie({
      ...r,
      palette: {
        mode: a,
        ...t == null ? void 0 : t.palette
      }
    });
    return e[n] = {
      ...t,
      palette: o,
      opacity: {
        ...mr(a),
        ...t == null ? void 0 : t.opacity
      },
      overlays: (t == null ? void 0 : t.overlays) || pr(a)
    }, s;
  }
  ei = function(e = {}, ...t) {
    const { colorSchemes: r = {
      light: true
    }, defaultColorScheme: n, disableCssColorScheme: a = false, cssVarPrefix: o = "mui", shouldSkipGeneratingVar: s = Va, colorSchemeSelector: c = r.light && r.dark ? "media" : void 0, rootSelector: l = ":root", ...u } = e, h = Object.keys(r)[0], g = n || (r.light && h !== "light" ? "light" : h), d = Ja(o), { [g]: b, light: m, dark: p, ...k } = r, w = {
      ...k
    };
    let O = b;
    if ((g === "dark" && !("dark" in r) || g === "light" && !("light" in r)) && (O = true), !O) throw new Error(ae(21, g));
    const C = st(w, O, u, g);
    m && !w.light && st(w, m, void 0, "light"), p && !w.dark && st(w, p, void 0, "dark");
    let S = {
      defaultColorScheme: g,
      ...C,
      cssVarPrefix: o,
      colorSchemeSelector: c,
      rootSelector: l,
      getCssVar: d,
      colorSchemes: w,
      font: {
        ...Pa(C.typography),
        ...C.font
      },
      spacing: Za(u.spacing)
    };
    Object.keys(S.colorSchemes).forEach((D) => {
      const i = S.colorSchemes[D].palette, y = (I) => {
        const j = I.split("-"), yr = j[1], br = j[2];
        return d(I, i[yr][br]);
      };
      if (i.mode === "light" && (f(i.common, "background", "#fff"), f(i.common, "onBackground", "#000")), i.mode === "dark" && (f(i.common, "background", "#000"), f(i.common, "onBackground", "#fff")), qa(i, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip"
      ]), i.mode === "light") {
        f(i.Alert, "errorColor", v(i.error.light, 0.6)), f(i.Alert, "infoColor", v(i.info.light, 0.6)), f(i.Alert, "successColor", v(i.success.light, 0.6)), f(i.Alert, "warningColor", v(i.warning.light, 0.6)), f(i.Alert, "errorFilledBg", y("palette-error-main")), f(i.Alert, "infoFilledBg", y("palette-info-main")), f(i.Alert, "successFilledBg", y("palette-success-main")), f(i.Alert, "warningFilledBg", y("palette-warning-main")), f(i.Alert, "errorFilledColor", X(() => i.getContrastText(i.error.main))), f(i.Alert, "infoFilledColor", X(() => i.getContrastText(i.info.main))), f(i.Alert, "successFilledColor", X(() => i.getContrastText(i.success.main))), f(i.Alert, "warningFilledColor", X(() => i.getContrastText(i.warning.main))), f(i.Alert, "errorStandardBg", T(i.error.light, 0.9)), f(i.Alert, "infoStandardBg", T(i.info.light, 0.9)), f(i.Alert, "successStandardBg", T(i.success.light, 0.9)), f(i.Alert, "warningStandardBg", T(i.warning.light, 0.9)), f(i.Alert, "errorIconColor", y("palette-error-main")), f(i.Alert, "infoIconColor", y("palette-info-main")), f(i.Alert, "successIconColor", y("palette-success-main")), f(i.Alert, "warningIconColor", y("palette-warning-main")), f(i.AppBar, "defaultBg", y("palette-grey-100")), f(i.Avatar, "defaultBg", y("palette-grey-400")), f(i.Button, "inheritContainedBg", y("palette-grey-300")), f(i.Button, "inheritContainedHoverBg", y("palette-grey-A100")), f(i.Chip, "defaultBorder", y("palette-grey-400")), f(i.Chip, "defaultAvatarColor", y("palette-grey-700")), f(i.Chip, "defaultIconColor", y("palette-grey-700")), f(i.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), f(i.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), f(i.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), f(i.LinearProgress, "primaryBg", T(i.primary.main, 0.62)), f(i.LinearProgress, "secondaryBg", T(i.secondary.main, 0.62)), f(i.LinearProgress, "errorBg", T(i.error.main, 0.62)), f(i.LinearProgress, "infoBg", T(i.info.main, 0.62)), f(i.LinearProgress, "successBg", T(i.success.main, 0.62)), f(i.LinearProgress, "warningBg", T(i.warning.main, 0.62)), f(i.Skeleton, "bg", `rgba(${y("palette-text-primaryChannel")} / 0.11)`), f(i.Slider, "primaryTrack", T(i.primary.main, 0.62)), f(i.Slider, "secondaryTrack", T(i.secondary.main, 0.62)), f(i.Slider, "errorTrack", T(i.error.main, 0.62)), f(i.Slider, "infoTrack", T(i.info.main, 0.62)), f(i.Slider, "successTrack", T(i.success.main, 0.62)), f(i.Slider, "warningTrack", T(i.warning.main, 0.62));
        const I = Ee(i.background.default, 0.8);
        f(i.SnackbarContent, "bg", I), f(i.SnackbarContent, "color", X(() => i.getContrastText(I))), f(i.SpeedDialAction, "fabHoverBg", Ee(i.background.paper, 0.15)), f(i.StepConnector, "border", y("palette-grey-400")), f(i.StepContent, "border", y("palette-grey-400")), f(i.Switch, "defaultColor", y("palette-common-white")), f(i.Switch, "defaultDisabledColor", y("palette-grey-100")), f(i.Switch, "primaryDisabledColor", T(i.primary.main, 0.62)), f(i.Switch, "secondaryDisabledColor", T(i.secondary.main, 0.62)), f(i.Switch, "errorDisabledColor", T(i.error.main, 0.62)), f(i.Switch, "infoDisabledColor", T(i.info.main, 0.62)), f(i.Switch, "successDisabledColor", T(i.success.main, 0.62)), f(i.Switch, "warningDisabledColor", T(i.warning.main, 0.62)), f(i.TableCell, "border", T(Te(i.divider, 1), 0.88)), f(i.Tooltip, "bg", Te(i.grey[700], 0.92));
      }
      if (i.mode === "dark") {
        f(i.Alert, "errorColor", T(i.error.light, 0.6)), f(i.Alert, "infoColor", T(i.info.light, 0.6)), f(i.Alert, "successColor", T(i.success.light, 0.6)), f(i.Alert, "warningColor", T(i.warning.light, 0.6)), f(i.Alert, "errorFilledBg", y("palette-error-dark")), f(i.Alert, "infoFilledBg", y("palette-info-dark")), f(i.Alert, "successFilledBg", y("palette-success-dark")), f(i.Alert, "warningFilledBg", y("palette-warning-dark")), f(i.Alert, "errorFilledColor", X(() => i.getContrastText(i.error.dark))), f(i.Alert, "infoFilledColor", X(() => i.getContrastText(i.info.dark))), f(i.Alert, "successFilledColor", X(() => i.getContrastText(i.success.dark))), f(i.Alert, "warningFilledColor", X(() => i.getContrastText(i.warning.dark))), f(i.Alert, "errorStandardBg", v(i.error.light, 0.9)), f(i.Alert, "infoStandardBg", v(i.info.light, 0.9)), f(i.Alert, "successStandardBg", v(i.success.light, 0.9)), f(i.Alert, "warningStandardBg", v(i.warning.light, 0.9)), f(i.Alert, "errorIconColor", y("palette-error-main")), f(i.Alert, "infoIconColor", y("palette-info-main")), f(i.Alert, "successIconColor", y("palette-success-main")), f(i.Alert, "warningIconColor", y("palette-warning-main")), f(i.AppBar, "defaultBg", y("palette-grey-900")), f(i.AppBar, "darkBg", y("palette-background-paper")), f(i.AppBar, "darkColor", y("palette-text-primary")), f(i.Avatar, "defaultBg", y("palette-grey-600")), f(i.Button, "inheritContainedBg", y("palette-grey-800")), f(i.Button, "inheritContainedHoverBg", y("palette-grey-700")), f(i.Chip, "defaultBorder", y("palette-grey-700")), f(i.Chip, "defaultAvatarColor", y("palette-grey-300")), f(i.Chip, "defaultIconColor", y("palette-grey-300")), f(i.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), f(i.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), f(i.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), f(i.LinearProgress, "primaryBg", v(i.primary.main, 0.5)), f(i.LinearProgress, "secondaryBg", v(i.secondary.main, 0.5)), f(i.LinearProgress, "errorBg", v(i.error.main, 0.5)), f(i.LinearProgress, "infoBg", v(i.info.main, 0.5)), f(i.LinearProgress, "successBg", v(i.success.main, 0.5)), f(i.LinearProgress, "warningBg", v(i.warning.main, 0.5)), f(i.Skeleton, "bg", `rgba(${y("palette-text-primaryChannel")} / 0.13)`), f(i.Slider, "primaryTrack", v(i.primary.main, 0.5)), f(i.Slider, "secondaryTrack", v(i.secondary.main, 0.5)), f(i.Slider, "errorTrack", v(i.error.main, 0.5)), f(i.Slider, "infoTrack", v(i.info.main, 0.5)), f(i.Slider, "successTrack", v(i.success.main, 0.5)), f(i.Slider, "warningTrack", v(i.warning.main, 0.5));
        const I = Ee(i.background.default, 0.98);
        f(i.SnackbarContent, "bg", I), f(i.SnackbarContent, "color", X(() => i.getContrastText(I))), f(i.SpeedDialAction, "fabHoverBg", Ee(i.background.paper, 0.15)), f(i.StepConnector, "border", y("palette-grey-600")), f(i.StepContent, "border", y("palette-grey-600")), f(i.Switch, "defaultColor", y("palette-grey-300")), f(i.Switch, "defaultDisabledColor", y("palette-grey-600")), f(i.Switch, "primaryDisabledColor", v(i.primary.main, 0.55)), f(i.Switch, "secondaryDisabledColor", v(i.secondary.main, 0.55)), f(i.Switch, "errorDisabledColor", v(i.error.main, 0.55)), f(i.Switch, "infoDisabledColor", v(i.info.main, 0.55)), f(i.Switch, "successDisabledColor", v(i.success.main, 0.55)), f(i.Switch, "warningDisabledColor", v(i.warning.main, 0.55)), f(i.TableCell, "border", v(Te(i.divider, 1), 0.68)), f(i.Tooltip, "bg", Te(i.grey[700], 0.92));
      }
      ee(i.background, "default"), ee(i.background, "paper"), ee(i.common, "background"), ee(i.common, "onBackground"), ee(i, "divider"), Object.keys(i).forEach((I) => {
        const j = i[I];
        I !== "tonalOffset" && j && typeof j == "object" && (j.main && f(i[I], "mainChannel", pe(ye(j.main))), j.light && f(i[I], "lightChannel", pe(ye(j.light))), j.dark && f(i[I], "darkChannel", pe(ye(j.dark))), j.contrastText && f(i[I], "contrastTextChannel", pe(ye(j.contrastText))), I === "text" && (ee(i[I], "primary"), ee(i[I], "secondary")), I === "action" && (j.active && ee(i[I], "active"), j.selected && ee(i[I], "selected")));
      });
    }), S = t.reduce((D, i) => K(D, i), S);
    const B = {
      prefix: o,
      disableCssColorScheme: a,
      shouldSkipGeneratingVar: s,
      getSelector: Xa(S)
    }, { vars: M, generateThemeVars: x, generateStyleSheets: Q } = wa(S, B);
    return S.vars = M, Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([D, i]) => {
      S[D] = i;
    }), S.generateThemeVars = x, S.generateStyleSheets = Q, S.generateSpacing = function() {
      return lr(u.spacing, yt(this));
    }, S.getColorSchemeSelector = xa(c), S.spacing = S.generateSpacing(), S.shouldSkipGeneratingVar = s, S.unstable_sxConfig = {
      ...Ze,
      ...u == null ? void 0 : u.unstable_sxConfig
    }, S.unstable_sx = function(i) {
      return Je({
        sx: i,
        theme: this
      });
    }, S.toRuntimeSource = hr, S;
  };
  function Kt(e, t, r) {
    e.colorSchemes && r && (e.colorSchemes[t] = {
      ...r !== true && r,
      palette: kt({
        ...r === true ? {} : r.palette,
        mode: t
      })
    });
  }
  ti = function(e = {}, ...t) {
    const { palette: r, cssVariables: n = false, colorSchemes: a = r ? void 0 : {
      light: true
    }, defaultColorScheme: o = r == null ? void 0 : r.mode, ...s } = e, c = o || "light", l = a == null ? void 0 : a[c], u = {
      ...a,
      ...r ? {
        [c]: {
          ...typeof l != "boolean" && l,
          palette: r
        }
      } : void 0
    };
    if (n === false) {
      if (!("colorSchemes" in e)) return Ie(e, ...t);
      let h = r;
      "palette" in e || u[c] && (u[c] !== true ? h = u[c].palette : c === "dark" && (h = {
        mode: "dark"
      }));
      const g = Ie({
        ...e,
        palette: h
      }, ...t);
      return g.defaultColorScheme = c, g.colorSchemes = u, g.palette.mode === "light" && (g.colorSchemes.light = {
        ...u.light !== true && u.light,
        palette: g.palette
      }, Kt(g, "dark", u.dark)), g.palette.mode === "dark" && (g.colorSchemes.dark = {
        ...u.dark !== true && u.dark,
        palette: g.palette
      }, Kt(g, "light", u.light)), g;
    }
    return !r && !("light" in u) && c === "light" && (u.light = true), ei({
      ...s,
      colorSchemes: u,
      defaultColorScheme: c,
      ...typeof n != "boolean" && n
    }, ...t);
  };
  ui = ti();
  di = "$$material";
});
export {
  da as $,
  ae as A,
  Ia as B,
  oi as C,
  ei as D,
  ci as E,
  se as F,
  xe as G,
  fe as H,
  ce as I,
  ie as J,
  oe as K,
  Na as L,
  Ha as M,
  At as N,
  $t as O,
  ya as P,
  Ye as Q,
  $r as R,
  bn as S,
  aa as T,
  Ua as U,
  li as V,
  Ka as W,
  re as X,
  Da as Y,
  ma as Z,
  dt as _,
  __tla,
  pa as a,
  ur as a0,
  Ra as a1,
  Qa as a2,
  nt as a3,
  fi as a4,
  Va as a5,
  Mn as a6,
  Un as a7,
  ir as a8,
  ra as a9,
  Vn as b,
  ti as c,
  Ze as d,
  si as e,
  Hn as f,
  Aa as g,
  fr as h,
  ne as i,
  Je as j,
  Qt as k,
  ua as l,
  te as m,
  yt as n,
  me as o,
  K as p,
  ni as q,
  ai as r,
  ea as s,
  $e as t,
  ii as u,
  di as v,
  na as w,
  ui as x,
  lr as y,
  ca as z
};
