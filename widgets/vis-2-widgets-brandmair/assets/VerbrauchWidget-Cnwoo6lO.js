import { j as t, __tla as __tla_0 } from "./jsx-runtime-DBblkrDb.js";
import { G as g } from "./Generic-CM5BSTAz.js";
import { __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-DCr90mXz.js";
import { __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-36-XpKNE.js";
let o;
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
  const v = [
    [
      "oid-json",
      "json_summary"
    ]
  ];
  function p({ label: d, value: r, max: e, unit: l }) {
    const a = e > 0 ? r / e * 100 : 0;
    return t.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "3px 0"
      },
      children: [
        t.jsx("div", {
          style: {
            width: 70,
            fontSize: 13,
            color: "rgba(255,255,255,0.7)",
            textAlign: "right",
            flexShrink: 0,
            whiteSpace: "nowrap"
          },
          children: d
        }),
        t.jsx("div", {
          style: {
            flex: 1,
            height: 22,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 4,
            overflow: "hidden",
            position: "relative"
          },
          children: t.jsx("div", {
            style: {
              width: `${a}%`,
              height: "100%",
              background: "linear-gradient(90deg, #4a9edd, #2ec27e)",
              borderRadius: 4,
              transition: "width 0.5s ease"
            }
          })
        }),
        t.jsxs("div", {
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
            r,
            " ",
            l
          ]
        })
      ]
    });
  }
  o = class extends g {
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
                onChange: async (r, e, l) => {
                  const a = e["oid-base"];
                  if (a) {
                    for (const [s, n] of v) e[s] = `${a}.${n}`;
                    l(e);
                  }
                }
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
      return o.getWidgetInfo();
    }
    val(r) {
      const e = this.state.rxData[r];
      if (e) return this.state.values[`${e}.val`];
    }
    renderWidgetBody(r) {
      super.renderWidgetBody(r);
      const e = this.val("oid-json") || "", l = this.state.rxData.view || "months", a = this.state.rxData.widgetTitle || "";
      let s = [], n = "";
      try {
        const i = JSON.parse(e);
        n = i.unit || "", s = i[l] || [];
      } catch {
      }
      const h = s.reduce((i, c) => Math.max(i, c.value), 0);
      return t.jsxs("div", {
        style: {
          width: "100%",
          height: "100%",
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        },
        children: [
          a && t.jsx("div", {
            style: {
              padding: "6px 10px 2px",
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              flexShrink: 0
            },
            children: a
          }),
          t.jsxs("div", {
            style: {
              flex: 1,
              padding: "4px 10px 8px",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: s.length <= 7 ? "space-evenly" : "flex-start"
            },
            children: [
              s.length === 0 && t.jsx("div", {
                style: {
                  color: "rgba(255,255,255,0.3)",
                  fontSize: 13,
                  textAlign: "center"
                },
                children: "\u2013"
              }),
              s.map((i) => t.jsx(p, {
                label: i.label,
                value: i.value,
                max: h,
                unit: n
              }, i.label))
            ]
          })
        ]
      });
    }
  };
});
export {
  __tla,
  o as default
};
