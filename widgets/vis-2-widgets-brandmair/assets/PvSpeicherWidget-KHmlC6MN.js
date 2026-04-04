import { j as e, __tla as __tla_0 } from "./jsx-runtime-DBblkrDb.js";
import { G as u } from "./Generic-CM5BSTAz.js";
import { t } from "./tr-DlxLwYzi.js";
import { __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-DCr90mXz.js";
import { __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-36-XpKNE.js";
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
  g = class extends u {
    static getWidgetInfo() {
      return {
        id: "tplPvSpeicherWidget",
        visSet: "vis-2-widgets-brandmair",
        visWidgetLabel: "pvspeicher_widget",
        visName: "PvSpeicherWidget",
        visAttrs: [
          {
            name: "common",
            label: "group_display",
            fields: [
              {
                name: "widgetTitle",
                label: "widget_title",
                type: "text",
                default: "RCT Batterie"
              },
              {
                name: "oid-soc",
                type: "id",
                label: "pvspeicher_soc"
              },
              {
                name: "oid-power",
                type: "id",
                label: "pvspeicher_power"
              },
              {
                name: "oid-status",
                type: "id",
                label: "pvspeicher_status"
              }
            ]
          }
        ],
        visDefaultStyle: {
          width: 220,
          height: 400,
          position: "relative"
        },
        visSetIcon: "widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png",
        visPrev: "widgets/vis-2-widgets-brandmair/img/prev_pvspeicher.png"
      };
    }
    getWidgetInfo() {
      return g.getWidgetInfo();
    }
    val(a) {
      const o = this.state.rxData[a];
      if (o) return this.state.values[`${o}.val`];
    }
    renderWidgetBody(a) {
      super.renderWidgetBody(a);
      const o = this.state.rxData.widgetTitle || "RCT Batterie", l = Math.max(0, Math.min(100, parseFloat(this.val("oid-soc")) || 0)), s = parseFloat(this.val("oid-power")) || 0, x = (parseInt(this.val("oid-status")) || 0) === 2048, n = Math.abs(s), f = l / 100 * 250, m = 305 - f, v = l < 20 ? "#ef4444" : l < 40 ? "#f59e0b" : "#22c55e";
      let d, h;
      n >= 1e3 ? (d = (n / 1e3).toFixed(1), h = "kW") : (d = String(Math.round(n)), h = "W");
      let i, r, c = false, p = false;
      return x ? (r = "#f59e0b", s > 50 ? (i = `${t("pvspeicher_calibrating")} ${t("pvspeicher_discharging")}`, p = true) : s < -50 ? (i = `${t("pvspeicher_calibrating")} ${t("pvspeicher_charging")}`, c = true) : i = t("pvspeicher_calibrating")) : s > 50 ? (i = t("pvspeicher_discharging"), r = "#ef4444", p = true) : s < -50 ? (i = t("pvspeicher_charging"), r = "#22c55e", c = true) : (i = t("pvspeicher_ready"), r = "#888888"), e.jsxs("div", {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif"
        },
        children: [
          e.jsx("div", {
            style: {
              fontSize: 13,
              fontWeight: 500,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 4
            },
            children: o
          }),
          e.jsxs("svg", {
            viewBox: "0 0 200 350",
            style: {
              width: "100%",
              height: "100%",
              maxHeight: 400
            },
            children: [
              e.jsx("rect", {
                x: "30",
                y: "40",
                width: "140",
                height: "280",
                rx: "8",
                fill: "#2d2d2d",
                stroke: "#1a1a1a",
                strokeWidth: "3"
              }),
              e.jsx("rect", {
                x: "70",
                y: "25",
                width: "60",
                height: "20",
                rx: "4",
                fill: "#444",
                stroke: "#333",
                strokeWidth: "2"
              }),
              e.jsx("rect", {
                x: "45",
                y: m,
                width: "110",
                height: f,
                rx: "3",
                fill: v
              }),
              e.jsx("g", {
                opacity: c ? 1 : 0,
                transform: "translate(100, 90) scale(2)",
                children: e.jsx("polygon", {
                  points: "0,-20 15,5 8,5 8,20 -8,20 -8,5 -15,5",
                  fill: "#22c55e",
                  stroke: "#000",
                  strokeWidth: "1"
                })
              }),
              e.jsx("g", {
                opacity: p ? 1 : 0,
                transform: "translate(100, 90) scale(2)",
                children: e.jsx("polygon", {
                  points: "0,20 15,-5 8,-5 8,-20 -8,-20 -8,-5 -15,-5",
                  fill: "#ef4444",
                  stroke: "#000",
                  strokeWidth: "1"
                })
              }),
              e.jsx("text", {
                x: "100",
                y: "180",
                fill: "#fff",
                fontSize: "48",
                fontWeight: "bold",
                textAnchor: "middle",
                stroke: "#000",
                strokeWidth: "3",
                paintOrder: "stroke",
                children: Math.round(l)
              }),
              e.jsx("text", {
                x: "100",
                y: "210",
                fill: "#888",
                fontSize: "16",
                textAnchor: "middle",
                stroke: "#000",
                strokeWidth: "2",
                paintOrder: "stroke",
                children: "%"
              }),
              e.jsx("text", {
                x: "100",
                y: "280",
                fill: "#fff",
                fontSize: "20",
                fontWeight: "bold",
                textAnchor: "middle",
                stroke: "#000",
                strokeWidth: "2",
                paintOrder: "stroke",
                children: d
              }),
              e.jsx("text", {
                x: "100",
                y: "295",
                fill: "#888",
                fontSize: "12",
                textAnchor: "middle",
                stroke: "#000",
                strokeWidth: "1.5",
                paintOrder: "stroke",
                children: h
              }),
              e.jsx("text", {
                x: "100",
                y: "340",
                fill: r,
                fontSize: "14",
                fontWeight: "bold",
                textAnchor: "middle",
                stroke: "#000",
                strokeWidth: "2",
                paintOrder: "stroke",
                children: i
              })
            ]
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
