import { j as i, __tla as __tla_0 } from "./jsx-runtime-DBblkrDb.js";
import { G as p } from "./Generic-CM5BSTAz.js";
import { __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-DCr90mXz.js";
import { __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-36-XpKNE.js";
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
  const b = [
    [
      "oid-json",
      "json_summary"
    ]
  ];
  function f({ label: h, value: a, max: e, unit: s, colorFrom: l, colorTo: o }) {
    const n = e > 0 ? a / e * 100 : 0;
    return i.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "3px 0"
      },
      children: [
        i.jsx("div", {
          style: {
            width: 70,
            fontSize: 13,
            color: "rgba(255,255,255,0.7)",
            textAlign: "right",
            flexShrink: 0,
            whiteSpace: "nowrap"
          },
          children: h
        }),
        i.jsx("div", {
          style: {
            flex: 1,
            height: 22,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 4,
            overflow: "hidden",
            position: "relative"
          },
          children: i.jsx("div", {
            style: {
              width: `${n}%`,
              height: "100%",
              background: `linear-gradient(90deg, ${l}, ${o})`,
              borderRadius: 4,
              transition: "width 0.5s ease"
            }
          })
        }),
        i.jsxs("div", {
          style: {
            minWidth: 80,
            fontSize: 13,
            fontWeight: 600,
            color: "#fff",
            textAlign: "right",
            flexShrink: 0,
            whiteSpace: "nowrap"
          },
          children: [
            a,
            " ",
            s
          ]
        })
      ]
    });
  }
  c = class extends p {
    static getWidgetInfo() {
      return {
        id: "tplVerbrauchWidget",
        visSet: "vis-2-widgets-brandmair",
        visWidgetLabel: "verbrauch_widget",
        visName: "VerbrauchWidget",
        visAttrs: [
          {
            name: "common",
            label: "group_display",
            fields: [
              {
                name: "widgetTitle",
                label: "widget_title",
                type: "text",
                default: "Verbrauch"
              },
              {
                name: "oid-base",
                type: "text",
                label: "verbrauch_base",
                tooltip: "verbrauch_base_tooltip",
                onChange: async (a, e, s) => {
                  const l = e["oid-base"];
                  if (l) {
                    for (const [o, n] of b) e[o] = `${l}.${n}`;
                    s(e);
                  }
                }
              },
              {
                name: "limit",
                label: "verbrauch_limit",
                type: "number",
                default: 0,
                tooltip: "verbrauch_limit_tooltip",
                noBinding: true
              },
              {
                name: "view",
                label: "verbrauch_view",
                type: "select",
                options: [
                  {
                    value: "years",
                    label: "verbrauch_years"
                  },
                  {
                    value: "months",
                    label: "verbrauch_months"
                  },
                  {
                    value: "weeks",
                    label: "verbrauch_weeks"
                  },
                  {
                    value: "days",
                    label: "verbrauch_days"
                  }
                ],
                default: "months"
              },
              {
                name: "colorFrom",
                label: "verbrauch_color_from",
                type: "color",
                default: "#4a9edd"
              },
              {
                name: "colorTo",
                label: "verbrauch_color_to",
                type: "color",
                default: "#2ec27e"
              }
            ]
          },
          {
            name: "oids",
            label: "group_oids",
            fields: [
              {
                name: "oid-json",
                type: "id",
                label: "verbrauch_json"
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
        visPrev: "widgets/vis-2-widgets-brandmair/img/prev_verbrauch.png"
      };
    }
    getWidgetInfo() {
      return c.getWidgetInfo();
    }
    val(a) {
      const e = this.state.rxData[a];
      if (e) return this.state.values[`${e}.val`];
    }
    renderWidgetBody(a) {
      super.renderWidgetBody(a);
      const e = this.val("oid-json") || "", s = this.state.rxData.view || "months", l = this.state.rxData.widgetTitle || "", o = Number(this.state.rxData.limit) || 0, n = this.state.rxData.colorFrom || "#4a9edd", u = this.state.rxData.colorTo || "#2ec27e";
      let t = [], d = "";
      try {
        const r = JSON.parse(e);
        d = r.unit || "", t = r[s] || [];
      } catch {
      }
      t = [
        ...t
      ].reverse(), o > 0 && t.length > o && (t = t.slice(0, o));
      const v = t.reduce((r, g) => Math.max(r, g.value), 0);
      return i.jsxs("div", {
        style: {
          width: "100%",
          height: "100%",
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        },
        children: [
          l && i.jsx("div", {
            style: {
              padding: "6px 10px 2px",
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              flexShrink: 0
            },
            children: l
          }),
          i.jsxs("div", {
            style: {
              flex: 1,
              padding: "4px 10px 8px",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: t.length <= 7 ? "space-evenly" : "flex-start"
            },
            children: [
              t.length === 0 && i.jsx("div", {
                style: {
                  color: "rgba(255,255,255,0.3)",
                  fontSize: 13,
                  textAlign: "center"
                },
                children: "\u2013"
              }),
              t.map((r) => i.jsx(f, {
                label: r.label,
                value: r.value,
                max: v,
                unit: d,
                colorFrom: n,
                colorTo: u
              }, r.label))
            ]
          })
        ]
      });
    }
  };
});
export {
  __tla,
  c as default
};
