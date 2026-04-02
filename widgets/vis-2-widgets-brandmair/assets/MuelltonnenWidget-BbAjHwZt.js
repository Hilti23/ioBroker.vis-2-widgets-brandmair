import { j as e, __tla as __tla_0 } from "./jsx-runtime-DBblkrDb.js";
import { G as p } from "./Generic-CM5BSTAz.js";
import { t as r } from "./tr-CoP76fhR.js";
import { __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-DCr90mXz.js";
import { __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-36-XpKNE.js";
let x;
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
  const y = [
    [
      "oid-next-type",
      "next.typesText"
    ],
    [
      "oid-next-days",
      "next.daysLeft"
    ],
    [
      "oid-nextafter-type",
      "nextAfter.typesText"
    ],
    [
      "oid-nextafter-days",
      "nextAfter.daysLeft"
    ]
  ], g = {
    Biotonne: "#8B4513",
    Wertstofftonne: "#FFD700",
    Restm\u00FCll: "#808080",
    Papiertonne: "#4169E1"
  };
  function c(t) {
    return g[t] || "#999";
  }
  function u({ color: t, size: i = 120 }) {
    const n = i, s = i * 1.2;
    return e.jsxs("svg", {
      width: n,
      height: s,
      viewBox: "0 0 100 120",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        e.jsx("rect", {
          x: "15",
          y: "8",
          width: "70",
          height: "10",
          rx: "3",
          fill: t
        }),
        e.jsx("rect", {
          x: "38",
          y: "2",
          width: "24",
          height: "10",
          rx: "4",
          fill: t
        }),
        e.jsx("path", {
          d: "M20 18 L15 108 Q15 115 22 115 L78 115 Q85 115 85 108 L80 18 Z",
          fill: t
        }),
        e.jsx("line", {
          x1: "38",
          y1: "30",
          x2: "36",
          y2: "105",
          stroke: "rgba(0,0,0,0.15)",
          strokeWidth: "3",
          strokeLinecap: "round"
        }),
        e.jsx("line", {
          x1: "50",
          y1: "30",
          x2: "50",
          y2: "105",
          stroke: "rgba(0,0,0,0.15)",
          strokeWidth: "3",
          strokeLinecap: "round"
        }),
        e.jsx("line", {
          x1: "62",
          y1: "30",
          x2: "64",
          y2: "105",
          stroke: "rgba(0,0,0,0.15)",
          strokeWidth: "3",
          strokeLinecap: "round"
        }),
        e.jsx("path", {
          d: "M25 22 L22 105 Q22 110 27 110 L35 110 L38 22 Z",
          fill: "rgba(255,255,255,0.12)"
        })
      ]
    });
  }
  const d = "muell-pulse-style";
  function m() {
    if (typeof document > "u" || document.getElementById(d)) return;
    const t = document.createElement("style");
    t.id = d, t.textContent = `
        @keyframes muellPulseColor {
            from { color: #000; }
            to   { color: #fff; }
        }
    `, document.head.appendChild(t);
  }
  function a({ type: t, days: i }) {
    const n = c(t), s = i === 0, l = i === 1;
    return e.jsxs("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        position: "relative"
      },
      children: [
        e.jsx(u, {
          color: n,
          size: 110
        }),
        i >= 0 && e.jsx("div", {
          style: {
            position: "absolute",
            top: 30,
            left: 0,
            right: 0,
            height: 110,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "4rem",
            fontWeight: "bold",
            animation: "muellPulseColor 10s infinite alternate",
            pointerEvents: "none",
            textShadow: "0 0 8px rgba(0,0,0,0.3)"
          },
          children: i
        }),
        e.jsx("div", {
          style: {
            fontSize: 16,
            fontWeight: 600,
            color: "#fff",
            textAlign: "center"
          },
          children: t || "\u2013"
        }),
        s && e.jsx("div", {
          style: {
            fontSize: 22,
            fontWeight: 700,
            color: "red",
            textAlign: "center"
          },
          children: r("muell_heute")
        }),
        l && e.jsx("div", {
          style: {
            fontSize: 22,
            fontWeight: 700,
            color: "red",
            textAlign: "center"
          },
          children: r("muell_morgen")
        })
      ]
    });
  }
  x = class extends p {
    static getWidgetInfo() {
      return {
        id: "tplMuelltonnenWidget",
        visSet: "vis-2-widgets-brandmair",
        visWidgetLabel: "muell_widget",
        visName: "MuelltonnenWidget",
        visAttrs: [
          {
            name: "common",
            label: "group_display",
            fields: [
              {
                name: "widgetTitle",
                label: "widget_title",
                type: "text",
                default: "M\xFCllabfuhr"
              },
              {
                name: "oid-base",
                type: "text",
                label: "muell_base",
                tooltip: "muell_base_tooltip",
                onChange: async (i, n, s) => {
                  const l = n["oid-base"];
                  if (l) {
                    for (const [o, f] of y) n[o] = `${l}.${f}`;
                    s(n);
                  }
                }
              }
            ]
          },
          {
            name: "oids",
            label: "group_oids",
            fields: [
              {
                name: "oid-next-type",
                type: "id",
                label: "muell_next_type"
              },
              {
                name: "oid-next-days",
                type: "id",
                label: "muell_next_days"
              },
              {
                name: "oid-nextafter-type",
                type: "id",
                label: "muell_nextafter_type"
              },
              {
                name: "oid-nextafter-days",
                type: "id",
                label: "muell_nextafter_days"
              }
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: 340,
          position: "relative"
        },
        visSetIcon: "widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png",
        visPrev: "widgets/vis-2-widgets-brandmair/img/prev_muell.png"
      };
    }
    getWidgetInfo() {
      return x.getWidgetInfo();
    }
    val(i) {
      const n = this.state.rxData[i];
      if (n) return this.state.values[`${n}.val`];
    }
    renderWidgetBody(i) {
      super.renderWidgetBody(i), m();
      const n = this.val("oid-next-type") ?? "", s = parseInt(this.val("oid-next-days")) || 0, l = this.val("oid-nextafter-type") ?? "", o = parseInt(this.val("oid-nextafter-days")) || 0;
      return e.jsxs("div", {
        style: {
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.25)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 14,
          overflow: "hidden",
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column"
        },
        children: [
          e.jsx("div", {
            style: {
              padding: "8px 14px",
              fontSize: 13,
              fontWeight: 600,
              color: "#fff",
              textAlign: "center",
              flexShrink: 0
            },
            children: this.state.rxData.widgetTitle || ""
          }),
          e.jsxs("div", {
            style: {
              flex: 1,
              display: "flex",
              padding: "0 10px 10px",
              gap: 10
            },
            children: [
              e.jsx(a, {
                type: n,
                days: s
              }),
              e.jsx(a, {
                type: l,
                days: o
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
  x as default
};
