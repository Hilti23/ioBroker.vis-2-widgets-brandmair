import { j as e, __tla as __tla_0 } from "./jsx-runtime-DBblkrDb.js";
import { a as F, b as j, __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare___mf_0_mui_mf_1_material__loadShare__.js-DEdXGH34.js";
import { G as N } from "./Generic-CM5BSTAz.js";
import { t as o } from "./tr-COzJWtSl.js";
import { __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-DCr90mXz.js";
import { __tla as __tla_3 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-36-XpKNE.js";
let D;
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
  const T = [
    [
      "oid-surplus-current",
      "surplus_current_w"
    ],
    [
      "oid-surplus-avg",
      "surplus_avg_w"
    ],
    [
      "oid-pv-power",
      "pv_power_w"
    ],
    [
      "oid-battery-soc",
      "battery_soc"
    ],
    [
      "oid-forecast-today",
      "forecast_today_kwh"
    ],
    [
      "oid-managed-power",
      "managed_power_w"
    ],
    [
      "oid-active-devices",
      "active_devices"
    ],
    [
      "oid-is-holiday",
      "is_holiday"
    ],
    [
      "oid-holiday-days-remain",
      "holiday_days_remaining"
    ],
    [
      "oid-dev1-name",
      "heizstab_warmwasser.name"
    ],
    [
      "oid-dev1-mode",
      "heizstab_warmwasser.mode"
    ],
    [
      "oid-dev1-priority",
      "heizstab_warmwasser.priority"
    ],
    [
      "oid-dev1-power-min",
      "heizstab_warmwasser.power_min_w"
    ],
    [
      "oid-dev1-power-max",
      "heizstab_warmwasser.power_max_w"
    ],
    [
      "oid-dev1-is-dimmable",
      "heizstab_warmwasser.is_dimmable"
    ],
    [
      "oid-dev1-is-on",
      "heizstab_warmwasser.is_on"
    ],
    [
      "oid-dev1-power",
      "heizstab_warmwasser.power_w"
    ],
    [
      "oid-dev1-last-action",
      "heizstab_warmwasser.last_action"
    ],
    [
      "oid-dev1-holiday-blocked",
      "heizstab_warmwasser.holiday_blocked"
    ],
    [
      "oid-dev1-notif-today",
      "heizstab_warmwasser.notifications_today"
    ],
    [
      "oid-dev2-name",
      "luftentfeuchter_keller.name"
    ],
    [
      "oid-dev2-mode",
      "luftentfeuchter_keller.mode"
    ],
    [
      "oid-dev2-priority",
      "luftentfeuchter_keller.priority"
    ],
    [
      "oid-dev2-power-min",
      "luftentfeuchter_keller.power_min_w"
    ],
    [
      "oid-dev2-power-max",
      "luftentfeuchter_keller.power_max_w"
    ],
    [
      "oid-dev2-is-dimmable",
      "luftentfeuchter_keller.is_dimmable"
    ],
    [
      "oid-dev2-is-on",
      "luftentfeuchter_keller.is_on"
    ],
    [
      "oid-dev2-power",
      "luftentfeuchter_keller.power_w"
    ],
    [
      "oid-dev2-last-action",
      "luftentfeuchter_keller.last_action"
    ],
    [
      "oid-dev2-holiday-blocked",
      "luftentfeuchter_keller.holiday_blocked"
    ],
    [
      "oid-dev2-notif-today",
      "luftentfeuchter_keller.notifications_today"
    ],
    [
      "oid-dev3-name",
      "pool_wp.name"
    ],
    [
      "oid-dev3-mode",
      "pool_wp.mode"
    ],
    [
      "oid-dev3-priority",
      "pool_wp.priority"
    ],
    [
      "oid-dev3-power-min",
      "pool_wp.power_min_w"
    ],
    [
      "oid-dev3-power-max",
      "pool_wp.power_max_w"
    ],
    [
      "oid-dev3-is-dimmable",
      "pool_wp.is_dimmable"
    ],
    [
      "oid-dev3-is-on",
      "pool_wp.is_on"
    ],
    [
      "oid-dev3-power",
      "pool_wp.power_w"
    ],
    [
      "oid-dev3-last-action",
      "pool_wp.last_action"
    ],
    [
      "oid-dev3-holiday-blocked",
      "pool_wp.holiday_blocked"
    ],
    [
      "oid-dev3-notif-today",
      "pool_wp.notifications_today"
    ]
  ];
  function B(a) {
    return isNaN(a) ? "rgba(255,255,255,0.5)" : a < 30 ? "#4a9edd" : a < 45 ? "#f5a623" : "#e8622a";
  }
  function V(a) {
    return a >= 0 ? "#2ec27e" : "#e8622a";
  }
  function O(a) {
    return a < 20 ? "#e8622a" : a < 50 ? "#f5a623" : "#2ec27e";
  }
  function A(a) {
    switch (a) {
      case "auto":
        return "#4a9edd";
      case "manual_on":
        return "#2ec27e";
      case "manual_off":
        return "#f5a623";
      case "disabled":
        return "#888";
      default:
        return "#888";
    }
  }
  function u(a) {
    return Math.abs(a) >= 1e3 ? `${(a / 1e3).toFixed(1)} kW` : `${Math.round(a)} W`;
  }
  function f({ label: a, value: t, unit: i, color: l, sub: s }) {
    return e.jsxs("div", {
      style: {
        flex: "1 1 0",
        minWidth: 120,
        padding: "12px 14px",
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        gap: 2
      },
      children: [
        e.jsx("div", {
          style: {
            fontSize: 11,
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "0.04em"
          },
          children: a
        }),
        e.jsxs("div", {
          style: {
            fontSize: 22,
            fontWeight: 700,
            color: l || "#111"
          },
          children: [
            t,
            i && e.jsx("span", {
              style: {
                fontSize: 13,
                fontWeight: 400,
                marginLeft: 3,
                color: "#333"
              },
              children: i
            })
          ]
        }),
        s && e.jsx("div", {
          style: {
            fontSize: 11,
            color: "#555",
            marginTop: 2
          },
          children: s
        })
      ]
    });
  }
  function M({ label: a, temp: t }) {
    const i = isNaN(t) ? "\u2013" : `${t.toFixed(1)}`;
    return e.jsxs("div", {
      style: {
        flex: "1 1 0",
        minWidth: 120,
        padding: "12px 14px",
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        gap: 2
      },
      children: [
        e.jsx("div", {
          style: {
            fontSize: 11,
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "0.04em"
          },
          children: a
        }),
        e.jsxs("div", {
          style: {
            fontSize: 22,
            fontWeight: 700,
            color: B(t)
          },
          children: [
            i,
            e.jsx("span", {
              style: {
                fontSize: 13,
                fontWeight: 400,
                marginLeft: 3,
                color: "#333"
              },
              children: "\xB0C"
            })
          ]
        })
      ]
    });
  }
  function W(a, t) {
    const i = `oid-dev${a}`;
    return [
      {
        name: `${i}-name`,
        type: "id",
        label: `${t}_name`
      },
      {
        name: `${i}-mode`,
        type: "id",
        label: `${t}_mode`
      },
      {
        name: `${i}-priority`,
        type: "id",
        label: `${t}_priority`
      },
      {
        name: `${i}-power-min`,
        type: "id",
        label: `${t}_power_min`
      },
      {
        name: `${i}-power-max`,
        type: "id",
        label: `${t}_power_max`
      },
      {
        name: `${i}-is-dimmable`,
        type: "id",
        label: `${t}_is_dimmable`
      },
      {
        name: `${i}-is-on`,
        type: "id",
        label: `${t}_is_on`
      },
      {
        name: `${i}-power`,
        type: "id",
        label: `${t}_power`
      },
      {
        name: `${i}-last-action`,
        type: "id",
        label: `${t}_last_action`
      },
      {
        name: `${i}-holiday-blocked`,
        type: "id",
        label: `${t}_holiday_blocked`
      },
      {
        name: `${i}-notif-today`,
        type: "id",
        label: `${t}_notif_today`
      }
    ];
  }
  D = class extends N {
    constructor(t) {
      super(t), this.state = {
        ...this.state,
        editDev1Priority: null,
        editDev2Priority: null,
        editDev3Priority: null,
        editDev1PowerMin: null,
        editDev1PowerMax: null,
        editDev2PowerMin: null,
        editDev2PowerMax: null,
        editDev3PowerMin: null,
        editDev3PowerMax: null
      };
    }
    static getWidgetInfo() {
      return {
        id: "tplEnergiemanagerWidget",
        visSet: "vis-2-widgets-brandmair",
        visWidgetLabel: "em_widget",
        visName: "EnergiemanagerWidget",
        visAttrs: [
          {
            name: "common",
            label: "group_display",
            fields: [
              {
                name: "widgetTitle",
                label: "widget_title",
                type: "text",
                default: "Energiemanager"
              },
              {
                name: "oid-base",
                type: "text",
                label: "em_base_oid",
                tooltip: "em_base_oid_tooltip",
                onChange: async (t, i, l) => {
                  const s = i["oid-base"];
                  if (s) {
                    for (const [h, n] of T) i[h] = `${s}.${n}`;
                    l(i);
                  }
                }
              }
            ]
          },
          {
            name: "global",
            label: "em_group_global",
            fields: [
              {
                name: "oid-surplus-current",
                type: "id",
                label: "em_surplus_current"
              },
              {
                name: "oid-surplus-avg",
                type: "id",
                label: "em_surplus_avg"
              },
              {
                name: "oid-pv-power",
                type: "id",
                label: "em_pv_power"
              },
              {
                name: "oid-battery-soc",
                type: "id",
                label: "em_battery_soc"
              },
              {
                name: "oid-forecast-today",
                type: "id",
                label: "em_forecast_today"
              },
              {
                name: "oid-managed-power",
                type: "id",
                label: "em_managed_power"
              },
              {
                name: "oid-active-devices",
                type: "id",
                label: "em_active_devices"
              },
              {
                name: "oid-is-holiday",
                type: "id",
                label: "em_is_holiday"
              },
              {
                name: "oid-holiday-days-remain",
                type: "id",
                label: "em_holiday_days"
              },
              {
                name: "oid-ww-temp-bottom",
                type: "id",
                label: "em_ww_temp_bottom"
              },
              {
                name: "oid-ww-temp-top",
                type: "id",
                label: "em_ww_temp_top"
              }
            ]
          },
          {
            name: "holiday",
            label: "em_group_holiday",
            fields: [
              {
                name: "oid-holiday-from",
                type: "id",
                label: "em_holiday_from"
              },
              {
                name: "oid-holiday-to",
                type: "id",
                label: "em_holiday_to"
              }
            ]
          },
          {
            name: "device1",
            label: "em_group_device1",
            fields: W(1, "em_dev")
          },
          {
            name: "device2",
            label: "em_group_device2",
            fields: W(2, "em_dev")
          },
          {
            name: "device3",
            label: "em_group_device3",
            fields: W(3, "em_dev")
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: "100%",
          position: "relative"
        },
        visSetIcon: "widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png",
        visPrev: "widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png"
      };
    }
    getWidgetInfo() {
      return D.getWidgetInfo();
    }
    val(t) {
      const i = this.state.rxData[t];
      if (i) return this.state.values[`${i}.val`];
    }
    setVal(t, i) {
      const l = this.state.rxData[t];
      if (!l) return;
      const s = JSON.parse(JSON.stringify(this.state.values));
      s[`${l}.val`] = i, this.setState({
        values: s
      }), this.props.context.setValue(l, i);
    }
    renderDevice(t) {
      const i = (r) => `oid-dev${t}-${r}`, l = this.val(i("name")) || `Ger\xE4t ${t}`, s = this.val(i("mode")) || "auto", h = Number(this.val(i("priority"))) || 1, n = Number(this.val(i("power-min"))) || 0, p = Number(this.val(i("power-max"))) || 0, S = this.val(i("is-dimmable")) === true || this.val(i("is-dimmable")) === "true", c = this.val(i("is-on")) === true || this.val(i("is-on")) === "true", m = Number(this.val(i("power"))) || 0, v = this.val(i("last-action")) || "\u2013", k = this.val(i("holiday-blocked")) === true || this.val(i("holiday-blocked")) === "true", g = Number(this.val(i("notif-today"))) || 0, y = `editDev${t}Priority`, _ = `editDev${t}PowerMin`, d = `editDev${t}PowerMax`, x = this.state[y], b = this.state[_], w = this.state[d], C = x !== null ? x : h, I = b !== null ? b : n, P = w !== null ? w : p, R = p > 0 ? Math.min(100, m / p * 100) : 0, z = A(s), $ = {
        width: 70,
        padding: "4px 8px",
        fontSize: 13,
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: 6,
        background: "transparent",
        color: "#111",
        textAlign: "right"
      };
      return e.jsxs("div", {
        style: {
          flex: "1 1 300px",
          minWidth: 280,
          border: "1px solid rgba(0,0,0,0.15)",
          borderRadius: 12,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        },
        children: [
          e.jsx("div", {
            style: {
              height: 4,
              background: z,
              flexShrink: 0
            }
          }),
          e.jsxs("div", {
            style: {
              padding: "12px 14px 8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8
            },
            children: [
              e.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8
                },
                children: [
                  e.jsx("div", {
                    style: {
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: c ? "#2ec27e" : "rgba(0,0,0,0.2)",
                      boxShadow: c ? "0 0 6px rgba(46,194,126,0.5)" : "none",
                      flexShrink: 0
                    }
                  }),
                  e.jsx("div", {
                    style: {
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#111"
                    },
                    children: l
                  }),
                  S && e.jsx("span", {
                    style: {
                      fontSize: 10,
                      padding: "2px 6px",
                      borderRadius: 8,
                      background: "#e8f4ff",
                      color: "#4a9edd"
                    },
                    children: o("em_dimmable") || "stufenlos"
                  })
                ]
              }),
              k && e.jsx("span", {
                style: {
                  fontSize: 10,
                  padding: "2px 8px",
                  borderRadius: 8,
                  background: "#fff3e0",
                  color: "#f5a623",
                  fontWeight: 600
                },
                children: o("em_holiday_blocked") || "Urlaub"
              })
            ]
          }),
          e.jsxs("div", {
            style: {
              padding: "0 14px 10px"
            },
            children: [
              e.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 12,
                  color: "#333",
                  marginBottom: 4
                },
                children: [
                  e.jsx("span", {
                    children: o("em_dev_power") || "Leistung"
                  }),
                  e.jsxs("span", {
                    style: {
                      fontWeight: 600,
                      color: c ? "#fff" : "rgba(255,255,255,0.5)"
                    },
                    children: [
                      u(m),
                      " / ",
                      u(p)
                    ]
                  })
                ]
              }),
              e.jsx("div", {
                style: {
                  height: 22,
                  borderRadius: 6,
                  overflow: "hidden",
                  background: "rgba(0,0,0,0.08)",
                  position: "relative"
                },
                children: e.jsx("div", {
                  style: {
                    width: `${R}%`,
                    height: "100%",
                    background: c ? `linear-gradient(90deg, ${z}, ${z}dd)` : "rgba(0,0,0,0.15)",
                    borderRadius: 6,
                    transition: "width 0.5s ease"
                  }
                })
              })
            ]
          }),
          e.jsxs("div", {
            style: {
              padding: "0 14px 10px",
              display: "flex",
              alignItems: "center",
              gap: 10
            },
            children: [
              e.jsx("span", {
                style: {
                  fontSize: 12,
                  color: "#333",
                  minWidth: 45
                },
                children: o("em_dev_mode") || "Modus"
              }),
              e.jsxs(F, {
                value: s,
                size: "small",
                onChange: (r) => this.setVal(i("mode"), r.target.value),
                sx: {
                  flex: 1,
                  fontSize: 13,
                  height: 32,
                  color: "#111",
                  "& .MuiSelect-select": {
                    padding: "4px 10px"
                  },
                  "& .MuiSelect-icon": {
                    color: "#555"
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0,0,0,0.15)"
                  }
                },
                children: [
                  e.jsx(j, {
                    value: "auto",
                    children: o("em_mode_auto") || "Auto"
                  }),
                  e.jsx(j, {
                    value: "manual_on",
                    children: o("em_mode_manual_on") || "Manuell EIN"
                  }),
                  e.jsx(j, {
                    value: "manual_off",
                    children: o("em_mode_manual_off") || "Manuell AUS"
                  }),
                  e.jsx(j, {
                    value: "disabled",
                    children: o("em_mode_disabled") || "Deaktiviert"
                  })
                ]
              })
            ]
          }),
          e.jsxs("div", {
            style: {
              padding: "0 14px 10px",
              display: "flex",
              flexWrap: "wrap",
              gap: 8
            },
            children: [
              e.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 6
                },
                children: [
                  e.jsx("span", {
                    style: {
                      fontSize: 12,
                      color: "#333"
                    },
                    children: o("em_dev_priority") || "Prio"
                  }),
                  e.jsx("input", {
                    type: "number",
                    min: 1,
                    max: 99,
                    value: C,
                    onChange: (r) => this.setState({
                      [y]: Number(r.target.value)
                    }),
                    onBlur: () => {
                      x !== null && (this.setVal(i("priority"), x), this.setState({
                        [y]: null
                      }));
                    },
                    style: {
                      ...$,
                      width: 50
                    }
                  })
                ]
              }),
              e.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 6
                },
                children: [
                  e.jsx("span", {
                    style: {
                      fontSize: 12,
                      color: "#333"
                    },
                    children: "Min"
                  }),
                  e.jsx("input", {
                    type: "number",
                    min: 0,
                    step: 50,
                    value: I,
                    onChange: (r) => this.setState({
                      [_]: Number(r.target.value)
                    }),
                    onBlur: () => {
                      b !== null && (this.setVal(i("power-min"), b), this.setState({
                        [_]: null
                      }));
                    },
                    style: $
                  }),
                  e.jsx("span", {
                    style: {
                      fontSize: 11,
                      color: "#555"
                    },
                    children: "W"
                  })
                ]
              }),
              e.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 6
                },
                children: [
                  e.jsx("span", {
                    style: {
                      fontSize: 12,
                      color: "#333"
                    },
                    children: "Max"
                  }),
                  e.jsx("input", {
                    type: "number",
                    min: 0,
                    step: 50,
                    value: P,
                    onChange: (r) => this.setState({
                      [d]: Number(r.target.value)
                    }),
                    onBlur: () => {
                      w !== null && (this.setVal(i("power-max"), w), this.setState({
                        [d]: null
                      }));
                    },
                    style: $
                  }),
                  e.jsx("span", {
                    style: {
                      fontSize: 11,
                      color: "#555"
                    },
                    children: "W"
                  })
                ]
              })
            ]
          }),
          e.jsxs("div", {
            style: {
              padding: "8px 14px",
              borderTop: "1px solid rgba(0,0,0,0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 11,
              color: "#555",
              marginTop: "auto"
            },
            children: [
              e.jsx("div", {
                style: {
                  flex: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: v
              }),
              g > 0 && e.jsxs("div", {
                style: {
                  marginLeft: 8,
                  padding: "1px 6px",
                  borderRadius: 8,
                  background: "rgba(0,0,0,0.08)",
                  fontSize: 10,
                  color: "#333",
                  flexShrink: 0
                },
                children: [
                  g,
                  " notif"
                ]
              })
            ]
          })
        ]
      }, t);
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
      const i = this.state.rxData.widgetTitle || "Energiemanager", l = parseFloat(this.val("oid-surplus-current")) || 0, s = parseFloat(this.val("oid-surplus-avg")) || 0, h = parseFloat(this.val("oid-pv-power")) || 0, n = parseFloat(this.val("oid-battery-soc")) || 0, p = parseFloat(this.val("oid-forecast-today")) || 0, S = parseFloat(this.val("oid-managed-power")) || 0, c = this.val("oid-active-devices") || "", m = this.val("oid-is-holiday") === true || this.val("oid-is-holiday") === "true", v = Number(this.val("oid-holiday-days-remain")) || 0, k = parseFloat(this.val("oid-ww-temp-bottom")), g = parseFloat(this.val("oid-ww-temp-top")), y = this.val("oid-holiday-from") || "", _ = this.val("oid-holiday-to") || "";
      return e.jsxs("div", {
        style: {
          width: "100%",
          height: "100%",
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          padding: 16,
          gap: 16,
          boxSizing: "border-box"
        },
        children: [
          e.jsx("div", {
            style: {
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.02em",
              color: "#111"
            },
            children: i
          }),
          e.jsxs("div", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 10
            },
            children: [
              e.jsx(f, {
                label: o("em_pv_power") || "PV-Leistung",
                value: u(h),
                color: "#f5a623"
              }),
              e.jsx(f, {
                label: l >= 0 ? o("em_grid_feed") || "Einspeisung" : o("em_grid_draw") || "Netzbezug",
                value: u(Math.abs(l)),
                color: V(l),
                sub: `\xD830min: ${u(s)}`
              }),
              e.jsx(f, {
                label: o("em_battery_soc") || "Batterie",
                value: `${Math.round(n)}`,
                unit: "%",
                color: O(n)
              }),
              e.jsx(f, {
                label: o("em_forecast_today") || "Prognose",
                value: `${p.toFixed(1)}`,
                unit: "kWh",
                color: "#4a9edd"
              }),
              e.jsx(f, {
                label: o("em_managed_power") || "Gesteuert",
                value: u(S),
                color: "#8b5cf6",
                sub: c || o("em_no_devices") || "Keine"
              }),
              e.jsx(M, {
                label: o("em_ww_temp_top") || "Warmwasser oben",
                temp: g
              }),
              e.jsx(M, {
                label: o("em_ww_temp_bottom") || "Warmwasser unten",
                temp: k
              })
            ]
          }),
          e.jsxs("div", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 12,
              padding: "10px 14px",
              border: "1px solid rgba(0,0,0,0.15)",
              borderRadius: 12,
              background: m ? "rgba(245,166,35,0.08)" : "transparent"
            },
            children: [
              e.jsxs("div", {
                style: {
                  fontSize: 13,
                  fontWeight: 600,
                  color: m ? "#f5a623" : "rgba(255,255,255,0.6)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6
                },
                children: [
                  e.jsx("span", {
                    style: {
                      fontSize: 18
                    },
                    children: "\u2708"
                  }),
                  o("em_holiday") || "Urlaub",
                  m && e.jsx("span", {
                    style: {
                      fontSize: 11,
                      padding: "2px 8px",
                      borderRadius: 8,
                      background: "#fff3e0",
                      color: "#f5a623"
                    },
                    children: v > 0 ? `${v} ${o("em_holiday_days_label") || "Tage"}` : o("em_holiday_active") || "aktiv"
                  })
                ]
              }),
              e.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginLeft: "auto"
                },
                children: [
                  e.jsx("span", {
                    style: {
                      fontSize: 12,
                      color: "#333"
                    },
                    children: o("em_holiday_from") || "Von"
                  }),
                  e.jsx("input", {
                    type: "date",
                    value: y,
                    onChange: (d) => this.setVal("oid-holiday-from", d.target.value),
                    style: {
                      padding: "4px 8px",
                      fontSize: 13,
                      border: "1px solid rgba(0,0,0,0.15)",
                      borderRadius: 6,
                      background: "transparent",
                      color: "#111"
                    }
                  }),
                  e.jsx("span", {
                    style: {
                      fontSize: 12,
                      color: "#333"
                    },
                    children: o("em_holiday_to") || "Bis"
                  }),
                  e.jsx("input", {
                    type: "date",
                    value: _,
                    onChange: (d) => this.setVal("oid-holiday-to", d.target.value),
                    style: {
                      padding: "4px 8px",
                      fontSize: 13,
                      border: "1px solid rgba(0,0,0,0.15)",
                      borderRadius: 6,
                      background: "transparent",
                      color: "#111"
                    }
                  })
                ]
              })
            ]
          }),
          e.jsxs("div", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 12
            },
            children: [
              this.renderDevice(1),
              this.renderDevice(2),
              this.renderDevice(3)
            ]
          })
        ]
      });
    }
  };
});
export {
  __tla,
  D as default
};
