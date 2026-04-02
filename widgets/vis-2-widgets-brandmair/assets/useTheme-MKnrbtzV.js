import { o as i, __tla as __tla_0 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-Cq4bBQs0.js";
import { T as m, l as u, v as y, x as T, __tla as __tla_1 } from "./identifier-BAD5gSHj.js";
let D, O, g, F;
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
  })()
]).then(async () => {
  function c(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var n = {
    exports: {}
  }, h = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", f = h, l = f;
  function p() {
  }
  function a() {
  }
  a.resetWarningCache = p;
  var _ = function() {
    function e(x, E, R, S, d, s) {
      if (s !== l) {
        var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw o.name = "Invariant Violation", o;
      }
    }
    e.isRequired = e;
    function t() {
      return e;
    }
    var r = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: a,
      resetWarningCache: p
    };
    return r.PropTypes = r, r;
  };
  n.exports = _();
  var P = n.exports;
  D = c(P);
  function b(e) {
    return Object.keys(e).length === 0;
  }
  g = function(e = null) {
    const t = i(m);
    return !t || b(t) ? e : t;
  };
  const v = u();
  O = function(e = v) {
    return g(e);
  };
  F = function() {
    const e = O(T);
    return e[y] || e;
  };
});
export {
  D as P,
  __tla,
  O as a,
  g as b,
  F as u
};
