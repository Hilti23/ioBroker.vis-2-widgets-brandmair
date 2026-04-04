import { j as e, __tla as __tla_0 } from "./jsx-runtime-DBblkrDb.js";
import { a as F, b as j, __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare___mf_0_mui_mf_1_material__loadShare__.js-DEdXGH34.js";
import { G as N } from "./Generic-CM5BSTAz.js";
import { t as a } from "./tr-COzJWtSl.js";
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
  function B(o) {
    return isNaN(o) ? "rgba(255,255,255,0.5)" : o < 30 ? "#4a9edd" : o < 45 ? "#f5a623" : "#e8622a";
  }
  function V(o) {
    return o >= 0 ? "#2ec27e" : "#e8622a";
  }
  function O(o) {
    return o < 20 ? "#e8622a" : o < 50 ? "#f5a623" : "#2ec27e";
  }
  function A(o) {
    switch (o) {
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
  function u(o) {
    return Math.abs(o) >= 1e3 ? `${(o / 1e3).toFixed(1)} kW` : `${Math.round(o)} W`;
  }
  function _({ label: o, value: t, unit: i, color: r, sub: l }) {
    return e.jsxs("div", {
      style: {
        flex: "1 1 0",
        minWidth: 120,
        padding: "12px 14px",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        gap: 2
      },
      children: [
        e.jsx("div", {
          style: {
            fontSize: 11,
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            letterSpacing: "0.04em"
          },
          children: o
        }),
        e.jsxs("div", {
          style: {
            fontSize: 22,
            fontWeight: 700,
            color: r || "#fff"
          },
          children: [
            t,
            i && e.jsx("span", {
              style: {
                fontSize: 13,
                fontWeight: 400,
                marginLeft: 3,
                color: "rgba(255,255,255,0.6)"
              },
              children: i
            })
          ]
        }),
        l && e.jsx("div", {
          style: {
            fontSize: 11,
            color: "rgba(255,255,255,0.5)",
            marginTop: 2
          },
          children: l
        })
      ]
    });
  }
  function M({ label: o, temp: t }) {
    const i = isNaN(t) ? "\u2013" : `${t.toFixed(1)}`;
    return e.jsxs("div", {
      style: {
        flex: "1 1 0",
        minWidth: 120,
        padding: "12px 14px",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        gap: 2
      },
      children: [
        e.jsx("div", {
          style: {
            fontSize: 11,
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            letterSpacing: "0.04em"
          },
          children: o
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
                color: "rgba(255,255,255,0.6)"
              },
              children: "\xB0C"
            })
          ]
        })
      ]
    });
  }
  function W(o, t) {
    const i = `oid-dev${o}`;
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
                onChange: async (t, i, r) => {
                  const l = i["oid-base"];
                  if (l) {
                    for (const [h, n] of T) i[h] = `${l}.${n}`;
                    r(i);
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
      const r = this.state.rxData[t];
      if (!r) return;
      const l = JSON.parse(JSON.stringify(this.state.values));
      l[`${r}.val`] = i, this.setState({
        values: l
      }), this.props.context.setValue(r, i);
    }
    renderDevice(t) {
      const i = (s) => `oid-dev${t}-${s}`, r = this.val(i("name")) || `Ger\xE4t ${t}`, l = this.val(i("mode")) || "auto", h = Number(this.val(i("priority"))) || 1, n = Number(this.val(i("power-min"))) || 0, p = Number(this.val(i("power-max"))) || 0, S = this.val(i("is-dimmable")) === true || this.val(i("is-dimmable")) === "true", c = this.val(i("is-on")) === true || this.val(i("is-on")) === "true", m = Number(this.val(i("power"))) || 0, g = this.val(i("last-action")) || "\u2013", k = this.val(i("holiday-blocked")) === true || this.val(i("holiday-blocked")) === "true", v = Number(this.val(i("notif-today"))) || 0, f = `editDev${t}Priority`, y = `editDev${t}PowerMin`, d = `editDev${t}PowerMax`, b = this.state[f], x = this.state[y], w = this.state[d], C = b !== null ? b : h, I = x !== null ? x : n, P = w !== null ? w : p, R = p > 0 ? Math.min(100, m / p * 100) : 0, z = A(l), $ = {
        width: 70,
        padding: "4px 8px",
        fontSize: 13,
        border: "1px solid rgba(255,255,255,0.25)",
        borderRadius: 6,
        background: "transparent",
        color: "#fff",
        textAlign: "right"
      };
      return e.jsxs("div", {
        style: {
          flex: "1 1 300px",
          minWidth: 280,
          border: "1px solid rgba(255,255,255,0.2)",
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
                      background: c ? "#2ec27e" : "rgba(255,255,255,0.3)",
                      boxShadow: c ? "0 0 6px rgba(46,194,126,0.5)" : "none",
                      flexShrink: 0
                    }
                  }),
                  e.jsx("div", {
                    style: {
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#fff"
                    },
                    children: r
                  }),
                  S && e.jsx("span", {
                    style: {
                      fontSize: 10,
                      padding: "2px 6px",
                      borderRadius: 8,
                      background: "#e8f4ff",
                      color: "#4a9edd"
                    },
                    children: a("em_dimmable") || "stufenlos"
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
                children: a("em_holiday_blocked") || "Urlaub"
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
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 4
                },
                children: [
                  e.jsx("span", {
                    children: a("em_dev_power") || "Leistung"
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
                  background: "rgba(255,255,255,0.1)",
                  position: "relative"
                },
                children: e.jsx("div", {
                  style: {
                    width: `${R}%`,
                    height: "100%",
                    background: c ? `linear-gradient(90deg, ${z}, ${z}dd)` : "rgba(255,255,255,0.2)",
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
                  color: "rgba(255,255,255,0.6)",
                  minWidth: 45
                },
                children: a("em_dev_mode") || "Modus"
              }),
              e.jsxs(F, {
                value: l,
                size: "small",
                onChange: (s) => this.setVal(i("mode"), s.target.value),
                sx: {
                  flex: 1,
                  fontSize: 13,
                  height: 32,
                  color: "#fff",
                  "& .MuiSelect-select": {
                    padding: "4px 10px"
                  },
                  "& .MuiSelect-icon": {
                    color: "rgba(255,255,255,0.5)"
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.25)"
                  }
                },
                children: [
                  e.jsx(j, {
                    value: "auto",
                    children: a("em_mode_auto") || "Auto"
                  }),
                  e.jsx(j, {
                    value: "manual_on",
                    children: a("em_mode_manual_on") || "Manuell EIN"
                  }),
                  e.jsx(j, {
                    value: "manual_off",
                    children: a("em_mode_manual_off") || "Manuell AUS"
                  }),
                  e.jsx(j, {
                    value: "disabled",
                    children: a("em_mode_disabled") || "Deaktiviert"
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
                      color: "rgba(255,255,255,0.6)"
                    },
                    children: a("em_dev_priority") || "Prio"
                  }),
                  e.jsx("input", {
                    type: "number",
                    min: 1,
                    max: 99,
                    value: C,
                    onChange: (s) => this.setState({
                      [f]: Number(s.target.value)
                    }),
                    onBlur: () => {
                      b !== null && (this.setVal(i("priority"), b), this.setState({
                        [f]: null
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
                      color: "rgba(255,255,255,0.6)"
                    },
                    children: "Min"
                  }),
                  e.jsx("input", {
                    type: "number",
                    min: 0,
                    step: 50,
                    value: I,
                    onChange: (s) => this.setState({
                      [y]: Number(s.target.value)
                    }),
                    onBlur: () => {
                      x !== null && (this.setVal(i("power-min"), x), this.setState({
                        [y]: null
                      }));
                    },
                    style: $
                  }),
                  e.jsx("span", {
                    style: {
                      fontSize: 11,
                      color: "rgba(255,255,255,0.5)"
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
                      color: "rgba(255,255,255,0.6)"
                    },
                    children: "Max"
                  }),
                  e.jsx("input", {
                    type: "number",
                    min: 0,
                    step: 50,
                    value: P,
                    onChange: (s) => this.setState({
                      [d]: Number(s.target.value)
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
                      color: "rgba(255,255,255,0.5)"
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
              borderTop: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 11,
              color: "rgba(255,255,255,0.5)",
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
                children: g
              }),
              v > 0 && e.jsxs("div", {
                style: {
                  marginLeft: 8,
                  padding: "1px 6px",
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.1)",
                  fontSize: 10,
                  color: "rgba(255,255,255,0.6)",
                  flexShrink: 0
                },
                children: [
                  v,
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
      const i = this.state.rxData.widgetTitle || "Energiemanager", r = parseFloat(this.val("oid-surplus-current")) || 0, l = parseFloat(this.val("oid-surplus-avg")) || 0, h = parseFloat(this.val("oid-pv-power")) || 0, n = parseFloat(this.val("oid-battery-soc")) || 0, p = parseFloat(this.val("oid-forecast-today")) || 0, S = parseFloat(this.val("oid-managed-power")) || 0, c = this.val("oid-active-devices") || "", m = this.val("oid-is-holiday") === true || this.val("oid-is-holiday") === "true", g = Number(this.val("oid-holiday-days-remain")) || 0, k = parseFloat(this.val("oid-ww-temp-bottom")), v = parseFloat(this.val("oid-ww-temp-top")), f = this.val("oid-holiday-from") || "", y = this.val("oid-holiday-to") || "";
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
              color: "#fff"
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
              e.jsx(_, {
                label: a("em_pv_power") || "PV-Leistung",
                value: u(h),
                color: "#f5a623"
              }),
              e.jsx(_, {
                label: r >= 0 ? a("em_grid_feed") || "Einspeisung" : a("em_grid_draw") || "Netzbezug",
                value: u(Math.abs(r)),
                color: V(r),
                sub: `\xD830min: ${u(l)}`
              }),
              e.jsx(_, {
                label: a("em_battery_soc") || "Batterie",
                value: `${Math.round(n)}`,
                unit: "%",
                color: O(n)
              }),
              e.jsx(_, {
                label: a("em_forecast_today") || "Prognose",
                value: `${p.toFixed(1)}`,
                unit: "kWh",
                color: "#4a9edd"
              }),
              e.jsx(_, {
                label: a("em_managed_power") || "Gesteuert",
                value: u(S),
                color: "#8b5cf6",
                sub: c || a("em_no_devices") || "Keine"
              }),
              e.jsx(M, {
                label: a("em_ww_temp_top") || "Warmwasser oben",
                temp: v
              }),
              e.jsx(M, {
                label: a("em_ww_temp_bottom") || "Warmwasser unten",
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
              border: "1px solid rgba(255,255,255,0.2)",
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
                  a("em_holiday") || "Urlaub",
                  m && e.jsx("span", {
                    style: {
                      fontSize: 11,
                      padding: "2px 8px",
                      borderRadius: 8,
                      background: "#fff3e0",
                      color: "#f5a623"
                    },
                    children: g > 0 ? `${g} ${a("em_holiday_days_label") || "Tage"}` : a("em_holiday_active") || "aktiv"
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
                      color: "rgba(255,255,255,0.6)"
                    },
                    children: a("em_holiday_from") || "Von"
                  }),
                  e.jsx("input", {
                    type: "date",
                    value: f,
                    onChange: (d) => this.setVal("oid-holiday-from", d.target.value),
                    style: {
                      padding: "4px 8px",
                      fontSize: 13,
                      border: "1px solid rgba(255,255,255,0.25)",
                      borderRadius: 6,
                      background: "transparent",
                      color: "#fff"
                    }
                  }),
                  e.jsx("span", {
                    style: {
                      fontSize: 12,
                      color: "rgba(255,255,255,0.6)"
                    },
                    children: a("em_holiday_to") || "Bis"
                  }),
                  e.jsx("input", {
                    type: "date",
                    value: y,
                    onChange: (d) => this.setVal("oid-holiday-to", d.target.value),
                    style: {
                      padding: "4px 8px",
                      fontSize: 13,
                      border: "1px solid rgba(255,255,255,0.25)",
                      borderRadius: 6,
                      background: "transparent",
                      color: "#fff"
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
