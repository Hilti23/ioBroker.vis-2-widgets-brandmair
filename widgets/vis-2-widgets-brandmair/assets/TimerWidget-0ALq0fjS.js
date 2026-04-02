import { j as m, __tla as __tla_0 } from "./jsx-runtime-LXN0Dejw.js";
import { b as g, __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-Cq4bBQs0.js";
import { G as u } from "./Generic-CM5BSTAz.js";
import { __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-Dkt6rraE.js";
let c;
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
  function n(i) {
    return i < 10 ? "0" + i : String(i);
  }
  function f(i) {
    if (i <= 0) return "00:00";
    const t = Math.floor(i / 1e3);
    if (i >= 36e5) {
      const e = Math.floor(t / 3600), d = Math.floor(t % 3600 / 60), o = t % 60;
      return `${n(e)}:${n(d)}:${n(o)}`;
    }
    const r = Math.floor(t / 60), a = t % 60;
    return `${n(r)}:${n(a)}`;
  }
  c = class extends u {
    containerRef = g.createRef();
    timerInterval = null;
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
      return c.getWidgetInfo();
    }
    val(t) {
      const r = this.state.rxData[t];
      if (r) return this.state.values[`${r}.val`];
    }
    tick = () => {
      const t = this.containerRef.current;
      if (!t) return;
      const r = Date.now();
      t.querySelectorAll(".timer-card").forEach((a) => {
        const e = a, o = parseInt(e.getAttribute("data-trigger") || "0") - r, s = o < 6e4, l = e.querySelector(".timer-display");
        l && (l.textContent = f(o), l.style.color = s ? "red" : e.getAttribute("data-accent") || "#333"), e.style.background = s ? "#ffdddd" : e.getAttribute("data-bg") || "#f0f0f0", e.style.borderLeftColor = s ? "red" : e.getAttribute("data-accent") || "#333";
      });
    };
    componentDidMount() {
      var _a;
      (_a = super.componentDidMount) == null ? void 0 : _a.call(this), this.timerInterval = setInterval(this.tick, 1e3);
    }
    componentDidUpdate() {
      this.tick();
    }
    componentWillUnmount() {
      var _a;
      this.timerInterval && (clearInterval(this.timerInterval), this.timerInterval = null), (_a = super.componentWillUnmount) == null ? void 0 : _a.call(this);
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
      const r = this.val("oid-html") || "";
      return m.jsx("div", {
        ref: this.containerRef,
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
  c as default
};
