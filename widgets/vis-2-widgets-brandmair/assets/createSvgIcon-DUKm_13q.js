import { o as Z, m as D, i as le, p as ce, g as Q, e as ue, u as de, __tla as __tla_0 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-36-XpKNE.js";
import { r as fe, __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-DCr90mXz.js";
import { a6 as me, w as pe, T as he, a7 as ye, s as ee, a8 as ge, a9 as ve, b as Se, l as be, j as W, i as _e, v as we, x as xe, k as j, __tla as __tla_2 } from "./identifier-D6g9f8_1.js";
let Ie, mt, H, U, je, Xe, ht, Re, Le, nt, oe, ot, O, E, rt, at, st, pt, N, He, it;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })()
]).then(async () => {
  var te = {
    exports: {}
  }, M = {};
  var ke = fe, Pe = Symbol.for("react.element"), Ce = Symbol.for("react.fragment"), Te = Object.prototype.hasOwnProperty, Oe = ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ae = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function re(e, t, r) {
    var o, n = {}, s = null, i = null;
    r !== void 0 && (s = "" + r), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (o in t) Te.call(t, o) && !Ae.hasOwnProperty(o) && (n[o] = t[o]);
    if (e && e.defaultProps) for (o in t = e.defaultProps, t) n[o] === void 0 && (n[o] = t[o]);
    return {
      $$typeof: Pe,
      type: e,
      key: s,
      ref: i,
      props: n,
      _owner: Oe.current
    };
  }
  M.Fragment = Ce;
  M.jsx = re;
  M.jsxs = re;
  te.exports = M;
  E = te.exports;
  N = function(e, t) {
    const r = {
      ...t
    };
    for (const o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
      const n = o;
      if (n === "components" || n === "slots") r[n] = {
        ...e[n],
        ...r[n]
      };
      else if (n === "componentsProps" || n === "slotProps") {
        const s = e[n], i = t[n];
        if (!i) r[n] = s || {};
        else if (!s) r[n] = i;
        else {
          r[n] = {
            ...i
          };
          for (const a in s) if (Object.prototype.hasOwnProperty.call(s, a)) {
            const h = a;
            r[n][h] = N(s[h], i[h]);
          }
        }
      } else r[n] === void 0 && (r[n] = e[n]);
    }
    return r;
  };
  Re = function(e, t, r = void 0) {
    const o = {};
    for (const n in e) {
      const s = e[n];
      let i = "", a = true;
      for (let h = 0; h < s.length; h += 1) {
        const d = s[h];
        d && (i += (a === true ? "" : " ") + t(d), a = false, r && r[d] && (i += " " + r[d]));
      }
      o[n] = i;
    }
    return o;
  };
  let G, ze, Fe;
  G = (e) => e;
  ze = () => {
    let e = G;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = G;
      }
    };
  };
  Ie = ze();
  Fe = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected"
  };
  oe = function(e, t, r = "Mui") {
    const o = Fe[t];
    return o ? `${r}-${o}` : `${Ie.generate(e)}-${t}`;
  };
  Le = function(e, t, r = "Mui") {
    const o = {};
    return t.forEach((n) => {
      o[n] = oe(e, n, r);
    }), o;
  };
  function ne(e) {
    var t, r, o = "";
    if (typeof e == "string" || typeof e == "number") o += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
      var n = e.length;
      for (t = 0; t < n; t++) e[t] && (r = ne(e[t])) && (o && (o += " "), o += r);
    } else for (r in e) e[r] && (o && (o += " "), o += r);
    return o;
  }
  je = function() {
    for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = ne(e)) && (o && (o += " "), o += t);
    return o;
  };
  U = function() {
    return U = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
      }
      return e;
    }, U.apply(null, arguments);
  };
  var Ee = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Me = me(function(e) {
    return Ee.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }), De = Me, $e = function(t) {
    return t !== "theme";
  }, X = function(t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? De : $e;
  }, Y = function(t, r, o) {
    var n;
    if (r) {
      var s = r.shouldForwardProp;
      n = t.__emotion_forwardProp && s ? function(i) {
        return t.__emotion_forwardProp(i) && s(i);
      } : s;
    }
    return typeof n != "function" && o && (n = t.__emotion_forwardProp), n;
  }, Ne = function(t) {
    var r = t.cache, o = t.serialized, n = t.isStringTag;
    return ge(r, o, n), ve(function() {
      return Se(r, o, n);
    }), null;
  }, Ue = function e(t, r) {
    var o = t.__emotion_real === t, n = o && t.__emotion_base || t, s, i;
    r !== void 0 && (s = r.label, i = r.target);
    var a = Y(t, r, o), h = a || X(n), d = !h("as");
    return function() {
      var c = arguments, m = o && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (s !== void 0 && m.push("label:" + s + ";"), c[0] == null || c[0].raw === void 0) m.push.apply(m, c);
      else {
        var x = c[0];
        m.push(x[0]);
        for (var A = c.length, S = 1; S < A; S++) m.push(c[S], x[S]);
      }
      var u = pe(function(l, y, w) {
        var k = d && l.as || n, P = "", z = [], f = l;
        if (l.theme == null) {
          f = {};
          for (var p in l) f[p] = l[p];
          f.theme = Z(he);
        }
        typeof l.className == "string" ? P = ye(y.registered, z, l.className) : l.className != null && (P = l.className + " ");
        var b = ee(m.concat(z), y.registered, f);
        P += y.key + "-" + b.name, i !== void 0 && (P += " " + i);
        var g = d && a === void 0 ? X(k) : h, R = {};
        for (var C in l) d && C === "as" || g(C) && (R[C] = l[C]);
        return R.className = P, w && (R.ref = w), D(le, null, D(Ne, {
          cache: y,
          serialized: b,
          isStringTag: typeof k == "string"
        }), D(k, R));
      });
      return u.displayName = s !== void 0 ? s : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", u.defaultProps = t.defaultProps, u.__emotion_real = u, u.__emotion_base = n, u.__emotion_styles = m, u.__emotion_forwardProp = a, Object.defineProperty(u, "toString", {
        value: function() {
          return "." + i;
        }
      }), u.withComponent = function(l, y) {
        var w = e(l, U({}, r, y, {
          shouldForwardProp: Y(u, y, true)
        }));
        return w.apply(void 0, m);
      }, u;
    };
  }, Ve = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan"
  ], V = Ue.bind(null);
  Ve.forEach(function(e) {
    V[e] = V(e);
  });
  He = function(e, t) {
    return V(e, t);
  };
  function qe(e, t) {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
  }
  const K = [];
  O = function(e) {
    return K[0] = e, ee(K);
  };
  function se(e) {
    const { variants: t, ...r } = e, o = {
      variants: t,
      style: O(r),
      isProcessed: true
    };
    return o.style === r || t && t.forEach((n) => {
      typeof n.style != "function" && (n.style = O(n.style));
    }), o;
  }
  const Be = be();
  function $(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
  }
  function T(e, t) {
    return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
  }
  function We(e) {
    return e ? (t, r) => r[e] : null;
  }
  function Ge(e, t, r) {
    e.theme = Ke(e.theme) ? r : e.theme[t] || e.theme;
  }
  function L(e, t, r) {
    const o = typeof t == "function" ? t(e) : t;
    if (Array.isArray(o)) return o.flatMap((n) => L(e, n, r));
    if (Array.isArray(o == null ? void 0 : o.variants)) {
      let n;
      if (o.isProcessed) n = r ? T(o.style, r) : o.style;
      else {
        const { variants: s, ...i } = o;
        n = r ? T(O(i), r) : i;
      }
      return ie(e, o.variants, [
        n
      ], r);
    }
    return (o == null ? void 0 : o.isProcessed) ? r ? T(O(o.style), r) : o.style : r ? T(O(o), r) : o;
  }
  function ie(e, t, r = [], o = void 0) {
    var _a;
    let n;
    e: for (let s = 0; s < t.length; s += 1) {
      const i = t[s];
      if (typeof i.props == "function") {
        if (n ?? (n = {
          ...e,
          ...e.ownerState,
          ownerState: e.ownerState
        }), !i.props(n)) continue;
      } else for (const a in i.props) if (e[a] !== i.props[a] && ((_a = e.ownerState) == null ? void 0 : _a[a]) !== i.props[a]) continue e;
      typeof i.style == "function" ? (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), r.push(o ? T(O(i.style(n)), o) : i.style(n))) : r.push(o ? T(O(i.style), o) : i.style);
    }
    return r;
  }
  Xe = function(e = {}) {
    const { themeId: t, defaultTheme: r = Be, rootShouldForwardProp: o = $, slotShouldForwardProp: n = $ } = e;
    function s(a) {
      Ge(a, t, r);
    }
    return (a, h = {}) => {
      qe(a, (f) => f.filter((p) => p !== W));
      const { name: d, slot: c, skipVariantsResolver: m, skipSx: x, overridesResolver: A = We(Ze(c)), ...S } = h, u = d && d.startsWith("Mui") || c ? "components" : "custom", l = m !== void 0 ? m : c && c !== "Root" && c !== "root" || false, y = x || false;
      let w = $;
      c === "Root" || c === "root" ? w = o : c ? w = n : Je(a) && (w = void 0);
      const k = He(a, {
        shouldForwardProp: w,
        label: Ye(),
        ...S
      }), P = (f) => {
        if (f.__emotion_real === f) return f;
        if (typeof f == "function") return function(b) {
          return L(b, f, b.theme.modularCssLayers ? u : void 0);
        };
        if (_e(f)) {
          const p = se(f);
          return function(g) {
            return p.variants ? L(g, p, g.theme.modularCssLayers ? u : void 0) : g.theme.modularCssLayers ? T(p.style, u) : p.style;
          };
        }
        return f;
      }, z = (...f) => {
        const p = [], b = f.map(P), g = [];
        if (p.push(s), d && A && g.push(function(v) {
          var _a, _b;
          const _ = (_b = (_a = v.theme.components) == null ? void 0 : _a[d]) == null ? void 0 : _b.styleOverrides;
          if (!_) return null;
          const q = {};
          for (const B in _) q[B] = L(v, _[B], v.theme.modularCssLayers ? "theme" : void 0);
          return A(v, q);
        }), d && !l && g.push(function(v) {
          var _a, _b, _c;
          const _ = (_c = (_b = (_a = v.theme) == null ? void 0 : _a.components) == null ? void 0 : _b[d]) == null ? void 0 : _c.variants;
          return _ ? ie(v, _, [], v.theme.modularCssLayers ? "theme" : void 0) : null;
        }), y || g.push(W), Array.isArray(b[0])) {
          const I = b.shift(), v = new Array(p.length).fill(""), F = new Array(g.length).fill("");
          let _;
          _ = [
            ...v,
            ...I,
            ...F
          ], _.raw = [
            ...v,
            ...I.raw,
            ...F
          ], p.unshift(_);
        }
        const R = [
          ...p,
          ...b,
          ...g
        ], C = k(...R);
        return a.muiName && (C.muiName = a.muiName), C;
      };
      return k.withConfig && (z.withConfig = k.withConfig), z;
    };
  };
  function Ye(e, t) {
    return void 0;
  }
  function Ke(e) {
    for (const t in e) return false;
    return true;
  }
  function Je(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96;
  }
  function Ze(e) {
    return e && e.charAt(0).toLowerCase() + e.slice(1);
  }
  const ae = ce(void 0);
  mt = function({ value: e, children: t }) {
    return E.jsx(ae.Provider, {
      value: e,
      children: t
    });
  };
  function Qe(e) {
    const { theme: t, name: r, props: o } = e;
    if (!t || !t.components || !t.components[r]) return o;
    const n = t.components[r];
    return n.defaultProps ? N(n.defaultProps, o) : !n.styleOverrides && !n.variants ? N(n, o) : o;
  }
  function et({ props: e, name: t }) {
    const r = Z(ae);
    return Qe({
      props: e,
      name: t,
      theme: {
        components: r
      }
    });
  }
  const J = {
    theme: void 0
  };
  function tt(e) {
    let t, r;
    return function(n) {
      let s = t;
      return (s === void 0 || n.theme !== r) && (J.theme = n.theme, s = se(e(J)), t = s, r = n.theme), s;
    };
  }
  rt = function(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
  };
  ot = (e) => rt(e) && e !== "classes";
  nt = Xe({
    themeId: we,
    defaultTheme: xe,
    rootShouldForwardProp: ot
  });
  st = tt;
  it = function(e) {
    return et(e);
  };
  at = function(e) {
    return oe("MuiSvgIcon", e);
  };
  let lt, ct;
  pt = Le("MuiSvgIcon", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "colorAction",
    "colorError",
    "colorDisabled",
    "fontSizeInherit",
    "fontSizeSmall",
    "fontSizeMedium",
    "fontSizeLarge"
  ]);
  lt = (e) => {
    const { color: t, fontSize: r, classes: o } = e, n = {
      root: [
        "root",
        t !== "inherit" && `color${j(t)}`,
        `fontSize${j(r)}`
      ]
    };
    return Re(n, at, o);
  };
  ct = nt("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.color !== "inherit" && t[`color${j(r.color)}`],
        t[`fontSize${j(r.fontSize)}`]
      ];
    }
  })(st(({ theme: e }) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      flexShrink: 0,
      transition: (_d = (_a = e.transitions) == null ? void 0 : _a.create) == null ? void 0 : _d.call(_a, "fill", {
        duration: (_c = (_b = (e.vars ?? e).transitions) == null ? void 0 : _b.duration) == null ? void 0 : _c.shorter
      }),
      variants: [
        {
          props: (t) => !t.hasSvgAsChild,
          style: {
            fill: "currentColor"
          }
        },
        {
          props: {
            fontSize: "inherit"
          },
          style: {
            fontSize: "inherit"
          }
        },
        {
          props: {
            fontSize: "small"
          },
          style: {
            fontSize: ((_f = (_e2 = e.typography) == null ? void 0 : _e2.pxToRem) == null ? void 0 : _f.call(_e2, 20)) || "1.25rem"
          }
        },
        {
          props: {
            fontSize: "medium"
          },
          style: {
            fontSize: ((_h = (_g = e.typography) == null ? void 0 : _g.pxToRem) == null ? void 0 : _h.call(_g, 24)) || "1.5rem"
          }
        },
        {
          props: {
            fontSize: "large"
          },
          style: {
            fontSize: ((_j = (_i = e.typography) == null ? void 0 : _i.pxToRem) == null ? void 0 : _j.call(_i, 35)) || "2.1875rem"
          }
        },
        ...Object.entries((e.vars ?? e).palette).filter(([, t]) => t && t.main).map(([t]) => {
          var _a2, _b2;
          return {
            props: {
              color: t
            },
            style: {
              color: (_b2 = (_a2 = (e.vars ?? e).palette) == null ? void 0 : _a2[t]) == null ? void 0 : _b2.main
            }
          };
        }),
        {
          props: {
            color: "action"
          },
          style: {
            color: (_l = (_k = (e.vars ?? e).palette) == null ? void 0 : _k.action) == null ? void 0 : _l.active
          }
        },
        {
          props: {
            color: "disabled"
          },
          style: {
            color: (_n = (_m = (e.vars ?? e).palette) == null ? void 0 : _m.action) == null ? void 0 : _n.disabled
          }
        },
        {
          props: {
            color: "inherit"
          },
          style: {
            color: void 0
          }
        }
      ]
    };
  }));
  H = Q(function(t, r) {
    const o = it({
      props: t,
      name: "MuiSvgIcon"
    }), { children: n, className: s, color: i = "inherit", component: a = "svg", fontSize: h = "medium", htmlColor: d, inheritViewBox: c = false, titleAccess: m, viewBox: x = "0 0 24 24", ...A } = o, S = ue(n) && n.type === "svg", u = {
      ...o,
      color: i,
      component: a,
      fontSize: h,
      instanceFontSize: t.fontSize,
      inheritViewBox: c,
      viewBox: x,
      hasSvgAsChild: S
    }, l = {};
    c || (l.viewBox = x);
    const y = lt(u);
    return E.jsxs(ct, {
      as: a,
      className: je(y.root, s),
      focusable: "false",
      color: d,
      "aria-hidden": m ? void 0 : true,
      role: m ? "img" : void 0,
      ref: r,
      ...l,
      ...A,
      ...S && n.props,
      ownerState: u,
      children: [
        S ? n.props.children : n,
        m ? E.jsx("title", {
          children: m
        }) : null
      ]
    });
  });
  H.muiName = "SvgIcon";
  ht = function(e, t) {
    function r(o, n) {
      return E.jsx(H, {
        "data-testid": `${t}Icon`,
        ref: n,
        ...o,
        children: e
      });
    }
    return r.muiName = H.muiName, de(Q(r));
  };
});
export {
  Ie as C,
  mt as D,
  H as S,
  U as _,
  __tla,
  je as a,
  Xe as b,
  ht as c,
  Re as d,
  Le as e,
  nt as f,
  oe as g,
  ot as h,
  O as i,
  E as j,
  rt as k,
  at as l,
  st as m,
  pt as n,
  N as r,
  He as s,
  it as u
};
