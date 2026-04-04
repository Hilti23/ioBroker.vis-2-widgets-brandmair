import { j as t, __tla as __tla_0 } from "./jsx-runtime-DBblkrDb.js";
import { G as f } from "./Generic-CM5BSTAz.js";
import { t as n } from "./tr-D79cCJ1N.js";
import { __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-DCr90mXz.js";
import { __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-36-XpKNE.js";
let a;
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
  const p = [
    [
      "oid-bio-days",
      "type.biotonne.daysLeft"
    ],
    [
      "oid-papier-days",
      "type.papiertonne.daysLeft"
    ],
    [
      "oid-restmuell-days",
      "type.restm\xFCll.daysLeft"
    ],
    [
      "oid-wertstoff-days",
      "type.wertstofftonne.daysLeft"
    ]
  ], y = [
    {
      key: "oid-bio-days",
      name: "Biotonne",
      color: "#c78300"
    },
    {
      key: "oid-papier-days",
      name: "Papiertonne",
      color: "#4169E1"
    },
    {
      key: "oid-restmuell-days",
      name: "Restm\xFCll",
      color: "#808080"
    },
    {
      key: "oid-wertstoff-days",
      name: "Wertstofftonne",
      color: "#FFD700"
    }
  ];
  function u({ color: o, size: s = 160 }) {
    const i = s, e = s * 1.2;
    return t.jsxs("svg", {
      width: i,
      height: e,
      viewBox: "0 0 100 120",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        t.jsx("rect", {
          x: "15",
          y: "8",
          width: "70",
          height: "10",
          rx: "3",
          fill: o
        }),
        t.jsx("rect", {
          x: "38",
          y: "2",
          width: "24",
          height: "10",
          rx: "4",
          fill: o
        }),
        t.jsx("path", {
          d: "M20 18 L15 108 Q15 115 22 115 L78 115 Q85 115 85 108 L80 18 Z",
          fill: o
        }),
        t.jsx("line", {
          x1: "38",
          y1: "30",
          x2: "36",
          y2: "105",
          stroke: "rgba(0,0,0,0.15)",
          strokeWidth: "3",
          strokeLinecap: "round"
        }),
        t.jsx("line", {
          x1: "50",
          y1: "30",
          x2: "50",
          y2: "105",
          stroke: "rgba(0,0,0,0.15)",
          strokeWidth: "3",
          strokeLinecap: "round"
        }),
        t.jsx("line", {
          x1: "62",
          y1: "30",
          x2: "64",
          y2: "105",
          stroke: "rgba(0,0,0,0.15)",
          strokeWidth: "3",
          strokeLinecap: "round"
        }),
        t.jsx("path", {
          d: "M25 22 L22 105 Q22 110 27 110 L35 110 L38 22 Z",
          fill: "rgba(255,255,255,0.12)"
        })
      ]
    });
  }
  const r = "muell-pulse-style";
  function c() {
    if (typeof document > "u" || document.getElementById(r)) return;
    const o = document.createElement("style");
    o.id = r, o.textContent = `
        @keyframes muellPulseColor {
            from { color: #000; }
            to   { color: #fff; }
        }
    `, document.head.appendChild(o);
  }
  function g({ name: o, color: s, days: i }) {
    const e = i === 0, l = i === 1;
    return t.jsxs("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        position: "relative",
        minWidth: 0
      },
      children: [
        t.jsxs("div", {
          style: {
            position: "relative"
          },
          children: [
            t.jsx(u, {
              color: s,
              size: 160
            }),
            t.jsx("div", {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "6rem",
                fontWeight: "bold",
                animation: "muellPulseColor 10s infinite alternate",
                pointerEvents: "none",
                textShadow: "0 0 8px rgba(0,0,0,0.3)"
              },
              children: i
            })
          ]
        }),
        t.jsx("div", {
          style: {
            fontSize: 13,
            fontWeight: 600,
            color: "#fff",
            textAlign: "center",
            lineHeight: 1.2
          },
          children: o
        }),
        (e || l) && t.jsx("div", {
          style: {
            fontSize: 18,
            fontWeight: 700,
            color: "red",
            textAlign: "center"
          },
          children: e ? n("muell_heute") : n("muell_morgen")
        })
      ]
    });
  }
  a = class extends f {
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
                onChange: async (s, i, e) => {
                  const l = i["oid-base"];
                  if (l) {
                    for (const [d, m] of p) i[d] = `${l}.${m}`;
                    e(i);
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
                name: "oid-bio-days",
                type: "id",
                label: "muell_bio"
              },
              {
                name: "oid-papier-days",
                type: "id",
                label: "muell_papier"
              },
              {
                name: "oid-restmuell-days",
                type: "id",
                label: "muell_restmuell"
              },
              {
                name: "oid-wertstoff-days",
                type: "id",
                label: "muell_wertstoff"
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
      return a.getWidgetInfo();
    }
    val(s) {
      const i = this.state.rxData[s];
      if (i) return this.state.values[`${i}.val`];
    }
    renderWidgetBody(s) {
      super.renderWidgetBody(s), c();
      const i = y.map((e) => ({
        name: e.name,
        color: e.color,
        days: parseInt(this.val(e.key)) || 0
      })).sort((e, l) => e.days - l.days);
      return t.jsx("div", {
        style: {
          width: "100%",
          height: "100%",
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column"
        },
        children: t.jsx("div", {
          style: {
            flex: 1,
            display: "flex",
            padding: "5px 5px",
            gap: 4,
            alignItems: "flex-start"
          },
          children: i.map((e) => t.jsx(g, {
            name: e.name,
            color: e.color,
            days: e.days
          }, e.name))
        })
      });
    }
  };
});
export {
  __tla,
  a as default
};
