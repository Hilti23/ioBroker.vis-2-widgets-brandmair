import { j as t, __tla as __tla_0 } from "./jsx-runtime-LXN0Dejw.js";
import { d as p, __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare___mf_0_mui_mf_1_material__loadShare__.js-DEdXGH34.js";
import { G as u } from "./Generic-CM5BSTAz.js";
import { t as x } from "./tr-D1YOJ6eL.js";
import { __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-Dkt6rraE.js";
import { __tla as __tla_3 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-Cq4bBQs0.js";
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
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })()
]).then(async () => {
  function f(c) {
    const e = Math.max(0, Math.min(1, c / 1500)), i = Math.round(26 + 194 * e), n = Math.round(127 - 77 * e), s = Math.round(212 - 182 * e);
    return `rgb(${i},${n},${s})`;
  }
  d = class extends u {
    constructor(e) {
      super(e), this.state = {
        ...this.state,
        sliderWatt: null
      };
    }
    static getWidgetInfo() {
      return {
        id: "tplHeizstabWidget",
        visSet: "vis-2-widgets-brandmair",
        visWidgetLabel: "heizstab_widget",
        visName: "HeizstabWidget",
        visAttrs: [
          {
            name: "common",
            label: "group_display",
            fields: [
              {
                name: "widgetTitle",
                label: "widget_title",
                type: "text",
                default: "Heizstab"
              },
              {
                name: "oid-leistung",
                type: "id",
                label: "heizstab_leistung"
              },
              {
                name: "oid-zwang",
                type: "id",
                label: "heizstab_zwang"
              }
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: 280,
          position: "relative"
        },
        visSetIcon: "widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png",
        visPrev: "widgets/vis-2-widgets-brandmair/img/prev_heizstab.png"
      };
    }
    getWidgetInfo() {
      return d.getWidgetInfo();
    }
    val(e) {
      const i = this.state.rxData[e];
      if (i) return this.state.values[`${i}.val`];
    }
    setVal(e, i) {
      const n = this.state.rxData[e];
      if (!n) return;
      const s = JSON.parse(JSON.stringify(this.state.values));
      s[`${n}.val`] = i, this.setState({
        values: s
      }), this.props.context.setValue(n, i);
    }
    renderWidgetBody(e) {
      super.renderWidgetBody(e);
      const i = this.state.rxData.widgetTitle || "Heizstab", n = Math.max(0, Math.min(1500, parseFloat(this.val("oid-leistung")) || 0)), s = this.val("oid-zwang"), a = s === 1 || s === true || s === "1" || s === "true", r = this.state.sliderWatt !== null ? this.state.sliderWatt : n, h = r / 1500, l = f(r);
      return t.jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 12,
          padding: "16px 20px",
          fontFamily: "sans-serif",
          background: "transparent",
          border: "1px solid #ddd",
          borderRadius: 12,
          height: "100%",
          boxSizing: "border-box"
        },
        children: [
          t.jsx("div", {
            style: {
              fontSize: 13,
              fontWeight: 500,
              color: "#000",
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            },
            children: i
          }),
          t.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10
            },
            children: [
              t.jsx("span", {
                style: {
                  fontSize: 13,
                  color: "#000"
                },
                children: x("heizstab_zwangsbetrieb") || "Zwangsbetrieb"
              }),
              t.jsx("div", {
                onClick: () => this.setVal("oid-zwang", a ? 0 : 1),
                style: {
                  position: "relative",
                  width: 44,
                  height: 24,
                  borderRadius: 24,
                  cursor: "pointer",
                  background: a ? "#cc0022" : "#ccc",
                  transition: "background 0.2s"
                },
                children: t.jsx("div", {
                  style: {
                    position: "absolute",
                    width: 18,
                    height: 18,
                    left: 3,
                    bottom: 3,
                    borderRadius: "50%",
                    background: "white",
                    transform: a ? "translateX(20px)" : "translateX(0)",
                    transition: "transform 0.2s"
                  }
                })
              }),
              t.jsx("span", {
                style: {
                  fontSize: 12,
                  fontWeight: 500,
                  padding: "3px 10px",
                  borderRadius: 20,
                  transition: "all 0.2s",
                  background: a ? "#ffe0e0" : "#f0f0f0",
                  color: a ? "#c00" : "#888"
                },
                children: a ? "EIN" : "AUS"
              })
            ]
          }),
          t.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center"
            },
            children: [
              t.jsx("div", {
                style: {
                  width: 22,
                  height: 56,
                  background: "#888",
                  borderRadius: "4px 0 0 4px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: t.jsx("div", {
                  style: {
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#bbb"
                  }
                })
              }),
              t.jsx("div", {
                style: {
                  flex: 1,
                  height: 36,
                  position: "relative",
                  borderRadius: "0 6px 6px 0",
                  overflow: "hidden",
                  alignSelf: "center"
                },
                children: t.jsxs("div", {
                  style: {
                    width: "100%",
                    height: "100%",
                    borderRadius: "0 6px 6px 0",
                    position: "relative",
                    overflow: "hidden",
                    background: "#e8f4ff"
                  },
                  children: [
                    t.jsx("div", {
                      style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: `${h * 100}%`,
                        background: l,
                        transition: "width 0.6s ease, background 0.6s"
                      }
                    }),
                    t.jsxs("div", {
                      style: {
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#000",
                        zIndex: 1,
                        pointerEvents: "none"
                      },
                      children: [
                        t.jsx("span", {
                          children: Math.round(r)
                        }),
                        "\xA0",
                        t.jsx("span", {
                          style: {
                            fontSize: 11,
                            opacity: 0.7
                          },
                          children: "W / 1500 W"
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          }),
          t.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 6
            },
            children: [
              t.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  t.jsx("span", {
                    style: {
                      fontSize: 13,
                      color: "#000"
                    },
                    children: "Sollleistung"
                  }),
                  t.jsxs("span", {
                    style: {
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#000",
                      minWidth: 60,
                      textAlign: "right"
                    },
                    children: [
                      Math.round(r),
                      " W"
                    ]
                  })
                ]
              }),
              t.jsx(p, {
                value: r,
                min: 0,
                max: 1500,
                step: 50,
                onChange: (g, o) => this.setState({
                  sliderWatt: o
                }),
                onChangeCommitted: (g, o) => {
                  this.setState({
                    sliderWatt: null
                  }), this.setVal("oid-leistung", o);
                },
                sx: {
                  color: "#1a7fd4",
                  "& .MuiSlider-thumb": {
                    width: 16,
                    height: 16
                  },
                  "& .MuiSlider-rail": {
                    opacity: 0.3,
                    color: "#ccc"
                  },
                  "& .MuiSlider-track": {
                    color: l
                  }
                }
              }),
              t.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 11,
                  color: "#000"
                },
                children: [
                  t.jsx("span", {
                    children: "0 W"
                  }),
                  t.jsx("span", {
                    children: "750 W"
                  }),
                  t.jsx("span", {
                    children: "1500 W"
                  })
                ]
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
  d as default
};
