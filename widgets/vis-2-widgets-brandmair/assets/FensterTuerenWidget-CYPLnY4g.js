import { j as t, __tla as __tla_0 } from "./jsx-runtime-LXN0Dejw.js";
import { G as x } from "./Generic-CM5BSTAz.js";
import { t as g } from "./tr-JHuBM9tK.js";
import { __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-Dkt6rraE.js";
import { __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-Cq4bBQs0.js";
let p;
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
  function u(s) {
    if (!s) return "-";
    try {
      const n = new Date(s), a = (/* @__PURE__ */ new Date()).getTime() - n.getTime(), i = Math.floor(a / 6e4), f = Math.floor(a / 36e5), c = Math.floor(a / 864e5);
      let r = "";
      i < 1 ? r = "gerade" : i < 60 ? r = `${i}min` : f < 24 ? r = `${f}h` : r = `${c}d`;
      const e = n.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit"
      });
      return `${n.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit"
      })} ${e} (${r})`;
    } catch {
      return "-";
    }
  }
  function m(s) {
    return s === null ? "#999" : s < 20 ? "#e8622a" : s < 50 ? "#f5a623" : "#2ec27e";
  }
  p = class extends x {
    static getWidgetInfo() {
      return {
        id: "tplFensterTuerenWidget",
        visSet: "vis-2-widgets-brandmair",
        visWidgetLabel: "ft_widget",
        visName: "FensterTuerenWidget",
        visAttrs: [
          {
            name: "common",
            label: "group_display",
            fields: [
              {
                name: "widgetTitle",
                label: "widget_title",
                type: "text",
                default: "Fenster & T\xFCren"
              },
              {
                name: "oid-json",
                type: "id",
                label: "ft_json_oid"
              }
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: 500,
          position: "relative"
        },
        visSetIcon: "widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png",
        visPrev: "widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png"
      };
    }
    getWidgetInfo() {
      return p.getWidgetInfo();
    }
    val(n) {
      const l = this.state.rxData[n];
      if (l) return this.state.values[`${l}.val`];
    }
    renderWidgetBody(n) {
      super.renderWidgetBody(n);
      const l = this.state.rxData.widgetTitle || "Fenster & T\xFCren", a = this.val("oid-json") || "[]";
      let i = [];
      try {
        i = JSON.parse(a);
      } catch {
      }
      const f = i.filter((e) => e.open === true).length, c = i.filter((e) => e.open === false).length, r = [
        ...i
      ].sort((e, d) => e.open && !d.open ? -1 : !e.open && d.open ? 1 : e.name.localeCompare(d.name));
      return t.jsxs("div", {
        style: {
          width: "100%",
          height: "100%",
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxSizing: "border-box"
        },
        children: [
          t.jsxs("div", {
            style: {
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              flexShrink: 0
            },
            children: [
              t.jsx("div", {
                style: {
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#111"
                },
                children: l
              }),
              t.jsxs("div", {
                style: {
                  display: "flex",
                  gap: 10,
                  fontSize: 12
                },
                children: [
                  f > 0 && t.jsxs("span", {
                    style: {
                      padding: "2px 10px",
                      borderRadius: 10,
                      background: "rgba(232,98,42,0.15)",
                      color: "#e8622a",
                      fontWeight: 600
                    },
                    children: [
                      f,
                      " ",
                      g("ft_open") || "offen"
                    ]
                  }),
                  t.jsxs("span", {
                    style: {
                      padding: "2px 10px",
                      borderRadius: 10,
                      background: "rgba(46,194,126,0.12)",
                      color: "#2ec27e",
                      fontWeight: 600
                    },
                    children: [
                      c,
                      " ",
                      g("ft_closed") || "zu"
                    ]
                  })
                ]
              })
            ]
          }),
          t.jsxs("div", {
            style: {
              flex: 1,
              overflow: "auto",
              padding: "4px 0"
            },
            children: [
              r.map((e, d) => {
                const o = e.open === true, h = e.type === "door" ? "\u{1F6AA}" : "\u{1FA9F}";
                return t.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "6px 14px",
                    borderBottom: "1px solid rgba(0,0,0,0.05)",
                    background: o ? "rgba(232,98,42,0.06)" : "transparent"
                  },
                  children: [
                    t.jsx("div", {
                      style: {
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: e.open === null ? "#999" : o ? "#e8622a" : "#2ec27e",
                        boxShadow: o ? "0 0 6px rgba(232,98,42,0.4)" : "none"
                      }
                    }),
                    t.jsx("span", {
                      style: {
                        fontSize: 14,
                        flexShrink: 0
                      },
                      children: h
                    }),
                    t.jsx("div", {
                      style: {
                        flex: 1,
                        fontSize: 13,
                        fontWeight: o ? 600 : 400,
                        color: o ? "#e8622a" : "#111"
                      },
                      children: e.name
                    }),
                    t.jsx("div", {
                      style: {
                        fontSize: 11,
                        fontWeight: 600,
                        flexShrink: 0,
                        color: o ? "#e8622a" : "#2ec27e"
                      },
                      children: e.open === null ? "-" : o ? g("ft_open") || "offen" : g("ft_closed") || "zu"
                    }),
                    t.jsx("div", {
                      style: {
                        fontSize: 10,
                        color: "#555",
                        flexShrink: 0,
                        minWidth: 110,
                        textAlign: "right"
                      },
                      children: u(e.lastChanged)
                    }),
                    t.jsx("div", {
                      style: {
                        fontSize: 10,
                        color: m(e.battery),
                        flexShrink: 0,
                        minWidth: 30,
                        textAlign: "right",
                        fontWeight: 600
                      },
                      children: e.battery !== null ? `${e.battery}%` : "-"
                    })
                  ]
                }, d);
              }),
              i.length === 0 && t.jsx("div", {
                style: {
                  padding: 20,
                  textAlign: "center",
                  color: "#999",
                  fontSize: 13
                },
                children: g("ft_no_data") || "Keine Daten"
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
  p as default
};
