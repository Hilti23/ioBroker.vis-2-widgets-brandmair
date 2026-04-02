import { R as u, __tla as __tla_0 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-Cq4bBQs0.js";
let s, c, l;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  s = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  c = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  function a(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var n = e.default;
    if (typeof n == "function") {
      var t = function r() {
        var o = false;
        try {
          o = this instanceof r;
        } catch {
        }
        return o ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
      };
      t.prototype = n.prototype;
    } else t = {};
    return Object.defineProperty(t, "__esModule", {
      value: true
    }), Object.keys(e).forEach(function(r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(t, r, o.get ? o : {
        enumerable: true,
        get: function() {
          return e[r];
        }
      });
    }), t;
  }
  l = a(u);
});
export {
  __tla,
  s as c,
  c as g,
  l as r
};
