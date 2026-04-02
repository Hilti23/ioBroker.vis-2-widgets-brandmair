import { j as i, __tla as __tla_0 } from "./jsx-runtime-DBblkrDb.js";
import { G as g } from "./Generic-CM5BSTAz.js";
import { __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-DCr90mXz.js";
import { __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-36-XpKNE.js";
let d;
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
  const u = [
    [
      "oid-json",
      "json_summary"
    ]
  ];
  function p({ label: h, value: r, max: e, unit: l }) {
    const s = e > 0 ? r / e * 100 : 0;
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
              width: `${s}%`,
              height: "100%",
              background: "linear-gradient(90deg, #4a9edd, #2ec27e)",
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
            r,
            " ",
            l
          ]
        })
      ]
    });
  }
  d = class extends g {
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
                  const s = e["oid-base"];
                  if (s) {
                    for (const [n, t] of u) e[n] = `${s}.${t}`;
                    l(e);
                  }
                }
              },
              {
                name: "limit",
                label: "verbrauch_limit",
                type: "number",
                default: 0,
                tooltip: "verbrauch_limit_tooltip"
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
      return d.getWidgetInfo();
    }
    val(r) {
      const e = this.state.rxData[r];
      if (e) return this.state.values[`${e}.val`];
    }
    renderWidgetBody(r) {
      super.renderWidgetBody(r);
      const e = this.val("oid-json") || "", l = this.state.rxData.view || "months", s = this.state.rxData.widgetTitle || "", n = Number(this.state.rxData.limit) || 0;
      let t = [], o = "";
      try {
        const a = JSON.parse(e);
        o = a.unit || "", t = a[l] || [];
      } catch {
      }
      n > 0 && t.length > n && (t = t.slice(-n));
      const c = t.reduce((a, v) => Math.max(a, v.value), 0);
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
          s && i.jsx("div", {
            style: {
              padding: "6px 10px 2px",
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              flexShrink: 0
            },
            children: s
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
              t.map((a) => i.jsx(p, {
                label: a.label,
                value: a.value,
                max: c,
                unit: o
              }, a.label))
            ]
          })
        ]
      });
    }
  };
});
export {
  __tla,
  d as default
};
