import { j as t, __tla as __tla_0 } from "./jsx-runtime-LXN0Dejw.js";
import { G as h } from "./Generic-CM5BSTAz.js";
import { t as l } from "./tr-JHuBM9tK.js";
import { __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-Dkt6rraE.js";
import { __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-Cq4bBQs0.js";
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
  function x(d) {
    if (!d) return "-";
    try {
      const r = new Date(d), i = (/* @__PURE__ */ new Date()).getTime() - r.getTime(), a = Math.floor(i / 6e4), f = Math.floor(i / 36e5), g = Math.floor(i / 864e5);
      let e = "";
      a < 1 ? e = "gerade" : a < 60 ? e = `${a}min` : f < 24 ? e = `${f}h` : e = `${g}d`;
      const o = r.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit"
      });
      return `${r.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit"
      })} ${o} (${e})`;
    } catch {
      return "-";
    }
  }
  function u(d) {
    return d === null ? "#999" : d < 20 ? "#e8622a" : d < 50 ? "#f5a623" : "#1a8a5a";
  }
  c = class extends h {
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
      return c.getWidgetInfo();
    }
    val(r) {
      const s = this.state.rxData[r];
      if (s) return this.state.values[`${s}.val`];
    }
    renderWidgetBody(r) {
      super.renderWidgetBody(r), this.state.rxData.widgetTitle;
      const s = this.val("oid-json") || "[]";
      let i = [];
      try {
        i = JSON.parse(s);
      } catch {
      }
      const a = i.filter((e) => e.open === true).length, f = i.filter((e) => e.open === false).length, g = [
        ...i
      ].sort((e, o) => e.open && !o.open ? -1 : !e.open && o.open ? 1 : e.name.localeCompare(o.name));
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
          t.jsx("div", {
            style: {
              padding: "8px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              flexShrink: 0
            },
            children: t.jsxs("div", {
              style: {
                display: "flex",
                gap: 10,
                fontSize: 12
              },
              children: [
                a > 0 && t.jsxs("span", {
                  style: {
                    padding: "2px 10px",
                    borderRadius: 10,
                    background: "rgba(232,98,42,0.15)",
                    color: "#e8622a",
                    fontWeight: 600
                  },
                  children: [
                    a,
                    " ",
                    l("ft_open") || "offen"
                  ]
                }),
                t.jsxs("span", {
                  style: {
                    padding: "2px 10px",
                    borderRadius: 10,
                    background: "rgba(26,138,90,0.15)",
                    color: "#1a8a5a",
                    fontWeight: 600
                  },
                  children: [
                    f,
                    " ",
                    l("ft_closed") || "zu"
                  ]
                })
              ]
            })
          }),
          t.jsxs("div", {
            style: {
              flex: 1,
              overflow: "auto",
              padding: "4px 0"
            },
            children: [
              g.map((e, o) => {
                const n = e.open === true, p = e.type === "door" ? "\u{1F6AA}" : "\u{1FA9F}";
                return t.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "6px 14px",
                    borderBottom: "1px solid rgba(0,0,0,0.05)",
                    background: n ? "rgba(232,98,42,0.06)" : "transparent"
                  },
                  children: [
                    t.jsx("div", {
                      style: {
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: e.open === null ? "#999" : n ? "#e8622a" : "#1a8a5a",
                        boxShadow: n ? "0 0 6px rgba(232,98,42,0.4)" : "none"
                      }
                    }),
                    t.jsx("span", {
                      style: {
                        fontSize: 14,
                        flexShrink: 0
                      },
                      children: p
                    }),
                    t.jsx("div", {
                      style: {
                        flex: 1,
                        fontSize: 13,
                        fontWeight: n ? 600 : 400,
                        color: n ? "#e8622a" : "#111"
                      },
                      children: e.name
                    }),
                    t.jsx("div", {
                      style: {
                        fontSize: 11,
                        fontWeight: 600,
                        flexShrink: 0,
                        color: n ? "#e8622a" : "#1a8a5a"
                      },
                      children: e.open === null ? "-" : n ? l("ft_open") || "offen" : l("ft_closed") || "zu"
                    }),
                    t.jsx("div", {
                      style: {
                        fontSize: 10,
                        color: "#555",
                        flexShrink: 0,
                        minWidth: 110,
                        textAlign: "right"
                      },
                      children: x(e.lastChanged)
                    }),
                    t.jsx("div", {
                      style: {
                        fontSize: 10,
                        color: u(e.battery),
                        flexShrink: 0,
                        minWidth: 30,
                        textAlign: "right",
                        fontWeight: 600
                      },
                      children: e.battery !== null ? `${e.battery}%` : "-"
                    })
                  ]
                }, o);
              }),
              i.length === 0 && t.jsx("div", {
                style: {
                  padding: 20,
                  textAlign: "center",
                  color: "#999",
                  fontSize: 13
                },
                children: l("ft_no_data") || "Keine Daten"
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
  c as default
};
