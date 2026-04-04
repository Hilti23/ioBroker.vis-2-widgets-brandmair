import { j as c, __tla as __tla_0 } from "./jsx-runtime-LXN0Dejw.js";
import { G as f } from "./Generic-CM5BSTAz.js";
import { __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-Dkt6rraE.js";
import { __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-Cq4bBQs0.js";
let g;
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
  function a(i) {
    return i < 10 ? "0" + i : String(i);
  }
  function m(i) {
    if (i <= 0) return "00:00";
    const e = Math.floor(i / 1e3);
    if (i >= 36e5) {
      const d = Math.floor(e / 3600), o = Math.floor(e % 3600 / 60), n = e % 60;
      return `${a(d)}:${a(o)}:${a(n)}`;
    }
    const r = Math.floor(e / 60), t = e % 60;
    return `${a(r)}:${a(t)}`;
  }
  function l(i) {
    const e = Date.now();
    i.querySelectorAll(".timer-card").forEach((r) => {
      const t = r, o = parseInt(t.getAttribute("data-trigger") || "0") - e, n = o < 6e4, s = t.querySelector(".timer-display");
      s && (s.textContent = m(o), s.style.color = n ? "red" : t.getAttribute("data-accent") || "#333"), t.style.background = n ? "#ffdddd" : t.getAttribute("data-bg") || "#f0f0f0", t.style.borderLeftColor = n ? "red" : t.getAttribute("data-accent") || "#333";
    });
  }
  g = class extends f {
    _intervalId = 0;
    static getWidgetInfo() {
      return {
        id: "tplTimerWidget",
        visSet: "vis-2-widgets-brandmair",
        visWidgetLabel: "timer_widget",
        visName: "TimerWidget",
        visAttrs: [
          {
            name: "common",
            label: "group_display",
            fields: [
              {
                name: "widgetTitle",
                label: "widget_title",
                type: "text",
                default: "Timer"
              },
              {
                name: "oid-html",
                type: "id",
                label: "timer_html"
              }
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: 300,
          position: "relative"
        },
        visSetIcon: "widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png",
        visPrev: "widgets/vis-2-widgets-brandmair/img/prev_timer.png"
      };
    }
    getWidgetInfo() {
      return g.getWidgetInfo();
    }
    val(e) {
      const r = this.state.rxData[e];
      if (r) return this.state.values[`${r}.val`];
    }
    renderWidgetBody(e) {
      super.renderWidgetBody(e);
      const r = this.val("oid-html") || "";
      return c.jsx("div", {
        ref: (t) => {
          t ? (this._intervalId || (this._intervalId = window.setInterval(() => l(t), 1e3)), l(t)) : this._intervalId && (window.clearInterval(this._intervalId), this._intervalId = 0);
        },
        style: {
          width: "100%",
          height: "100%",
          overflow: "auto"
        },
        dangerouslySetInnerHTML: {
          __html: r
        }
      });
    }
  };
});
export {
  __tla,
  g as default
};
