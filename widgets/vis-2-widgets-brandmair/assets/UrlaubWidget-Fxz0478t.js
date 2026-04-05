import { j as t, __tla as __tla_0 } from "./jsx-runtime-LXN0Dejw.js";
import { G as p } from "./Generic-CM5BSTAz.js";
import { t as l } from "./tr-CDlrC61U.js";
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
  g = class extends p {
    static getWidgetInfo() {
      return {
        id: "tplUrlaubWidget",
        visSet: "vis-2-widgets-brandmair",
        visWidgetLabel: "urlaub_widget",
        visName: "UrlaubWidget",
        visAttrs: [
          {
            name: "common",
            label: "group_display",
            fields: [
              {
                name: "widgetTitle",
                label: "widget_title",
                type: "text",
                default: "Urlaub"
              },
              {
                name: "oid-holiday-from",
                type: "id",
                label: "urlaub_from"
              },
              {
                name: "oid-holiday-to",
                type: "id",
                label: "urlaub_to"
              },
              {
                name: "oid-is-holiday",
                type: "id",
                label: "urlaub_active"
              },
              {
                name: "oid-holiday-days-remain",
                type: "id",
                label: "urlaub_days_remain"
              }
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: 80,
          position: "relative"
        },
        visSetIcon: "widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png",
        visPrev: "widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png"
      };
    }
    getWidgetInfo() {
      return g.getWidgetInfo();
    }
    val(i) {
      const e = this.state.rxData[i];
      if (e) return this.state.values[`${e}.val`];
    }
    setVal(i, e) {
      const a = this.state.rxData[i];
      if (!a) return;
      const s = JSON.parse(JSON.stringify(this.state.values));
      s[`${a}.val`] = e, this.setState({
        values: s
      }), this.props.context.setValue(a, e);
    }
    renderWidgetBody(i) {
      super.renderWidgetBody(i);
      const e = this.state.rxData.widgetTitle || "Urlaub", a = this.val("oid-holiday-from") || "", s = this.val("oid-holiday-to") || "", r = this.val("oid-is-holiday") === true || this.val("oid-is-holiday") === "true", o = Number(this.val("oid-holiday-days-remain")) || 0, n = {
        padding: "5px 10px",
        fontSize: 14,
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: 6,
        background: "transparent",
        color: "#111"
      };
      return t.jsxs("div", {
        style: {
          width: "100%",
          height: "100%",
          fontFamily: "sans-serif",
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "10px 16px",
          boxSizing: "border-box"
        },
        children: [
          t.jsxs("div", {
            style: {
              fontSize: 14,
              fontWeight: 600,
              color: r ? "#f5a623" : "#333",
              display: "flex",
              alignItems: "center",
              gap: 6,
              textShadow: r ? "0 0 3px rgba(0,0,0,0.4)" : "none",
              flexShrink: 0
            },
            children: [
              t.jsx("span", {
                style: {
                  fontSize: 20
                },
                children: "\u2708"
              }),
              e
            ]
          }),
          t.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 6
            },
            children: [
              t.jsx("span", {
                style: {
                  fontSize: 12,
                  color: "#333"
                },
                children: l("urlaub_von") || "Von"
              }),
              t.jsx("input", {
                type: "date",
                value: a,
                onChange: (d) => this.setVal("oid-holiday-from", d.target.value),
                style: n
              })
            ]
          }),
          t.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 6
            },
            children: [
              t.jsx("span", {
                style: {
                  fontSize: 12,
                  color: "#333"
                },
                children: l("urlaub_bis") || "Bis"
              }),
              t.jsx("input", {
                type: "date",
                value: s,
                onChange: (d) => this.setVal("oid-holiday-to", d.target.value),
                style: n
              })
            ]
          }),
          r && t.jsx("span", {
            style: {
              fontSize: 12,
              padding: "3px 10px",
              borderRadius: 10,
              background: "rgba(245,166,35,0.15)",
              color: "#f5a623",
              fontWeight: 600,
              flexShrink: 0
            },
            children: o > 0 ? `${o} ${l("urlaub_tage") || "Tage"}` : l("urlaub_aktiv") || "aktiv"
          })
        ]
      });
    }
  };
});
export {
  __tla,
  g as default
};
