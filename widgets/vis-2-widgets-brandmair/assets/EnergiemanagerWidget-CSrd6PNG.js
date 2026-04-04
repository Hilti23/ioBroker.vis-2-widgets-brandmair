import { j as e, __tla as __tla_0 } from "./jsx-runtime-DBblkrDb.js";
import { a as V, b as S, __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare___mf_0_mui_mf_1_material__loadShare__.js-DEdXGH34.js";
import { G as A } from "./Generic-CM5BSTAz.js";
import { t as a } from "./tr-DlxLwYzi.js";
import { __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-DCr90mXz.js";
import { __tla as __tla_3 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-36-XpKNE.js";
let I;
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
  const B = [
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
    ],
    [
      "oid-dev3-silent-rules",
      "pool_wp.silent_rules"
    ],
    [
      "oid-dev3-silent-active",
      "pool_wp.silent_active"
    ]
  ];
  function O(o) {
    return isNaN(o) ? "#777" : o < 30 ? "#4a9edd" : o < 45 ? "#f5a623" : "#e8622a";
  }
  function E(o) {
    return o >= 0 ? "#2ec27e" : "#e8622a";
  }
  function L(o) {
    return o < 20 ? "#e8622a" : o < 50 ? "#f5a623" : "#2ec27e";
  }
  function G(o) {
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
  function m(o) {
    return Math.abs(o) >= 1e3 ? `${(o / 1e3).toFixed(1)} kW` : `${Math.round(o)} W`;
  }
  const K = [
    "",
    "Mo",
    "Di",
    "Mi",
    "Do",
    "Fr",
    "Sa",
    "So"
  ];
  function J(o) {
    try {
      return JSON.parse(o).filter((i) => i.silent).map((i) => {
        const s = i.days.map((l) => K[l] || l).join(",");
        return i.before ? `${s} <${i.before}` : s;
      }).join(" | ") || "\u2013";
    } catch {
      return "\u2013";
    }
  }
  const W = "0 0 3px rgba(0,0,0,0.6), 0 0 6px rgba(0,0,0,0.3)";
  function v({ label: o, value: t, unit: i, color: s, sub: l }) {
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
          children: o
        }),
        e.jsxs("div", {
          style: {
            fontSize: 22,
            fontWeight: 700,
            color: s || "#111",
            textShadow: s ? W : "none"
          },
          children: [
            t,
            i && e.jsx("span", {
              style: {
                fontSize: 13,
                fontWeight: 400,
                marginLeft: 3,
                color: "#333",
                textShadow: "none"
              },
              children: i
            })
          ]
        }),
        l && e.jsx("div", {
          style: {
            fontSize: 11,
            color: "#555",
            marginTop: 2
          },
          children: l
        })
      ]
    });
  }
  function C({ label: o, temp: t }) {
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
          children: o
        }),
        e.jsxs("div", {
          style: {
            fontSize: 22,
            fontWeight: 700,
            color: O(t),
            textShadow: W
          },
          children: [
            i,
            e.jsx("span", {
              style: {
                fontSize: 13,
                fontWeight: 400,
                marginLeft: 3,
                color: "#333",
                textShadow: "none"
              },
              children: "\xB0C"
            })
          ]
        })
      ]
    });
  }
  function U({ on: o, label: t, onClick: i }) {
    return e.jsxs("div", {
      onClick: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        cursor: "pointer",
        userSelect: "none"
      },
      children: [
        e.jsx("div", {
          style: {
            width: 36,
            height: 20,
            borderRadius: 10,
            position: "relative",
            background: o ? "rgba(245,166,35,0.5)" : "rgba(0,0,0,0.15)",
            border: `1px solid ${o ? "#f5a623" : "rgba(0,0,0,0.2)"}`,
            transition: "all 0.2s"
          },
          children: e.jsx("div", {
            style: {
              width: 14,
              height: 14,
              borderRadius: "50%",
              position: "absolute",
              top: 2,
              left: 2,
              transition: "all 0.2s",
              transform: o ? "translateX(14px)" : "translateX(0)",
              background: o ? "#f5a623" : "rgba(0,0,0,0.3)"
            }
          })
        }),
        e.jsx("span", {
          style: {
            fontSize: 11,
            color: "#333"
          },
          children: t
        })
      ]
    });
  }
  function M(o, t) {
    const i = `oid-dev${o}`, s = [
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
    return o === 3 && s.push({
      name: `${i}-silent-rules`,
      type: "id",
      label: "em_silent_rules"
    }, {
      name: `${i}-silent-active`,
      type: "id",
      label: "em_silent_active"
    }), s;
  }
  I = class extends A {
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
                onChange: async (t, i, s) => {
                  const l = i["oid-base"];
                  if (l) {
                    for (const [u, p] of B) i[u] = `${l}.${p}`;
                    s(i);
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
            fields: M(1, "em_dev")
          },
          {
            name: "device2",
            label: "em_group_device2",
            fields: M(2, "em_dev")
          },
          {
            name: "device3",
            label: "em_group_device3",
            fields: M(3, "em_dev")
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
      return I.getWidgetInfo();
    }
    val(t) {
      const i = this.state.rxData[t];
      if (i) return this.state.values[`${i}.val`];
    }
    setVal(t, i) {
      const s = this.state.rxData[t];
      if (!s) return;
      const l = JSON.parse(JSON.stringify(this.state.values));
      l[`${s}.val`] = i, this.setState({
        values: l
      }), this.props.context.setValue(s, i);
    }
    renderDevice(t) {
      const i = (r) => `oid-dev${t}-${r}`, s = this.val(i("name")) || `Ger\xE4t ${t}`, l = this.val(i("mode")) || "auto", u = Number(this.val(i("priority"))) || 1, p = Number(this.val(i("power-min"))) || 0, c = Number(this.val(i("power-max"))) || 0, k = this.val(i("is-dimmable")) === true || this.val(i("is-dimmable")) === "true", h = this.val(i("is-on")) === true || this.val(i("is-on")) === "true", d = Number(this.val(i("power"))) || 0, _ = this.val(i("last-action")) || "\u2013", f = this.val(i("holiday-blocked")) === true || this.val(i("holiday-blocked")) === "true", x = Number(this.val(i("notif-today"))) || 0, y = `editDev${t}Priority`, g = `editDev${t}PowerMin`, n = `editDev${t}PowerMax`, b = this.state[y], w = this.state[g], j = this.state[n], D = b !== null ? b : u, P = w !== null ? w : p, T = j !== null ? j : c, F = c > 0 ? Math.min(100, d / c * 100) : 0, $ = G(l), z = {
        width: 65,
        padding: "3px 6px",
        fontSize: 12,
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: 5,
        background: "transparent",
        color: "#111",
        textAlign: "right"
      };
      let R = null;
      if (t === 3) {
        const r = this.val(i("silent-active")) === true || this.val(i("silent-active")) === "true", N = this.val(i("silent-rules")) || "[]";
        R = e.jsxs("div", {
          style: {
            padding: "6px 14px 10px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            borderTop: "1px solid rgba(0,0,0,0.06)"
          },
          children: [
            e.jsx("span", {
              style: {
                fontSize: 11,
                color: "#333"
              },
              children: "Silent"
            }),
            e.jsx("span", {
              style: {
                fontSize: 10,
                padding: "2px 6px",
                borderRadius: 8,
                background: r ? "rgba(139,92,246,0.15)" : "rgba(0,0,0,0.06)",
                color: r ? "#8b5cf6" : "#777",
                fontWeight: 600
              },
              children: r ? "aktiv" : "aus"
            }),
            e.jsx("span", {
              style: {
                fontSize: 10,
                color: "#555",
                marginLeft: "auto"
              },
              children: J(N)
            })
          ]
        });
      }
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
              background: $,
              flexShrink: 0
            }
          }),
          e.jsxs("div", {
            style: {
              padding: "10px 14px 6px",
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
                      background: h ? "#2ec27e" : "rgba(0,0,0,0.2)",
                      boxShadow: h ? "0 0 6px rgba(46,194,126,0.5)" : "none",
                      flexShrink: 0
                    }
                  }),
                  e.jsx("div", {
                    style: {
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#111"
                    },
                    children: s
                  }),
                  k && e.jsx("span", {
                    style: {
                      fontSize: 10,
                      padding: "2px 6px",
                      borderRadius: 8,
                      background: "rgba(74,158,221,0.15)",
                      color: "#4a9edd"
                    },
                    children: a("em_dimmable") || "stufenlos"
                  })
                ]
              }),
              e.jsxs("span", {
                style: {
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "2px 8px",
                  borderRadius: 10,
                  background: "rgba(0,0,0,0.08)",
                  color: "#333",
                  border: "1px solid rgba(0,0,0,0.1)"
                },
                children: [
                  "P",
                  D
                ]
              })
            ]
          }),
          e.jsxs("div", {
            style: {
              padding: "0 14px 8px"
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
                    children: a("em_dev_power") || "Leistung"
                  }),
                  e.jsxs("span", {
                    style: {
                      fontWeight: 600,
                      color: "#111"
                    },
                    children: [
                      m(d),
                      " / ",
                      m(c)
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
                    width: `${F}%`,
                    height: "100%",
                    background: h ? `linear-gradient(90deg, ${$}, ${$}dd)` : "rgba(0,0,0,0.15)",
                    borderRadius: 6,
                    transition: "width 0.5s ease"
                  }
                })
              })
            ]
          }),
          e.jsxs("div", {
            style: {
              padding: "0 14px 8px",
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
                children: a("em_dev_mode") || "Modus"
              }),
              e.jsxs(V, {
                value: l,
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
                  e.jsx(S, {
                    value: "auto",
                    children: a("em_mode_auto") || "Auto"
                  }),
                  e.jsx(S, {
                    value: "manual_on",
                    children: a("em_mode_manual_on") || "Manuell EIN"
                  }),
                  e.jsx(S, {
                    value: "manual_off",
                    children: a("em_mode_manual_off") || "Manuell AUS"
                  }),
                  e.jsx(S, {
                    value: "disabled",
                    children: a("em_mode_disabled") || "Deaktiviert"
                  })
                ]
              })
            ]
          }),
          e.jsx("div", {
            style: {
              padding: "0 14px 8px"
            },
            children: e.jsx(U, {
              on: f,
              label: a("em_holiday_blocked") || "Urlaub-Sperre",
              onClick: () => this.setVal(i("holiday-blocked"), !f)
            })
          }),
          e.jsxs("div", {
            style: {
              padding: "0 14px 8px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              borderTop: "1px solid rgba(0,0,0,0.06)",
              paddingTop: 8
            },
            children: [
              e.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 4
                },
                children: [
                  e.jsx("span", {
                    style: {
                      fontSize: 11,
                      color: "#555"
                    },
                    children: "Prio"
                  }),
                  e.jsx("input", {
                    type: "number",
                    min: 1,
                    max: 99,
                    value: D,
                    onChange: (r) => this.setState({
                      [y]: Number(r.target.value)
                    }),
                    onBlur: () => {
                      b !== null && (this.setVal(i("priority"), b), this.setState({
                        [y]: null
                      }));
                    },
                    style: {
                      ...z,
                      width: 42
                    }
                  })
                ]
              }),
              e.jsx("div", {
                style: {
                  width: 1,
                  height: 20,
                  background: "rgba(0,0,0,0.1)"
                }
              }),
              e.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 4
                },
                children: [
                  e.jsx("span", {
                    style: {
                      fontSize: 11,
                      color: "#555"
                    },
                    children: "Min"
                  }),
                  e.jsx("input", {
                    type: "number",
                    min: 0,
                    step: 50,
                    value: P,
                    onChange: (r) => this.setState({
                      [g]: Number(r.target.value)
                    }),
                    onBlur: () => {
                      w !== null && (this.setVal(i("power-min"), w), this.setState({
                        [g]: null
                      }));
                    },
                    style: z
                  })
                ]
              }),
              e.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 4
                },
                children: [
                  e.jsx("span", {
                    style: {
                      fontSize: 11,
                      color: "#555"
                    },
                    children: "Max"
                  }),
                  e.jsx("input", {
                    type: "number",
                    min: 0,
                    step: 50,
                    value: T,
                    onChange: (r) => this.setState({
                      [n]: Number(r.target.value)
                    }),
                    onBlur: () => {
                      j !== null && (this.setVal(i("power-max"), j), this.setState({
                        [n]: null
                      }));
                    },
                    style: z
                  })
                ]
              }),
              e.jsx("span", {
                style: {
                  fontSize: 10,
                  color: "#555"
                },
                children: "W"
              })
            ]
          }),
          R,
          e.jsxs("div", {
            style: {
              padding: "6px 14px",
              borderTop: "1px solid rgba(0,0,0,0.08)",
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
                children: _
              }),
              x > 0 && e.jsxs("div", {
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
                  x,
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
      const i = this.state.rxData.widgetTitle || "Energiemanager", s = parseFloat(this.val("oid-surplus-current")) || 0, l = parseFloat(this.val("oid-surplus-avg")) || 0, u = parseFloat(this.val("oid-pv-power")) || 0, p = parseFloat(this.val("oid-battery-soc")) || 0, c = parseFloat(this.val("oid-forecast-today")) || 0, k = parseFloat(this.val("oid-managed-power")) || 0, h = this.val("oid-active-devices") || "", d = this.val("oid-is-holiday") === true || this.val("oid-is-holiday") === "true", _ = Number(this.val("oid-holiday-days-remain")) || 0, f = parseFloat(this.val("oid-ww-temp-bottom")), x = parseFloat(this.val("oid-ww-temp-top")), y = this.val("oid-holiday-from") || "", g = this.val("oid-holiday-to") || "";
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
              color: "#111",
              textShadow: "0 0 4px rgba(0,0,0,0.3)"
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
              e.jsx(v, {
                label: a("em_pv_power") || "PV-Leistung",
                value: m(u),
                color: "#f5a623"
              }),
              e.jsx(v, {
                label: s >= 0 ? a("em_grid_feed") || "Einspeisung" : a("em_grid_draw") || "Netzbezug",
                value: m(Math.abs(s)),
                color: E(s),
                sub: `\xD830min: ${m(l)}`
              }),
              e.jsx(v, {
                label: a("em_battery_soc") || "Batterie",
                value: `${Math.round(p)}`,
                unit: "%",
                color: L(p)
              }),
              e.jsx(v, {
                label: a("em_forecast_today") || "Prognose",
                value: `${c.toFixed(1)}`,
                unit: "kWh",
                color: "#4a9edd"
              }),
              e.jsx(v, {
                label: a("em_managed_power") || "Gesteuert",
                value: m(k),
                color: "#8b5cf6",
                sub: h || a("em_no_devices") || "Keine"
              }),
              e.jsx(C, {
                label: a("em_ww_temp_top") || "Warmwasser oben",
                temp: x
              }),
              e.jsx(C, {
                label: a("em_ww_temp_bottom") || "Warmwasser unten",
                temp: f
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
              background: d ? "rgba(245,166,35,0.08)" : "transparent"
            },
            children: [
              e.jsxs("div", {
                style: {
                  fontSize: 13,
                  fontWeight: 600,
                  color: d ? "#f5a623" : "#555",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  textShadow: d ? W : "none"
                },
                children: [
                  e.jsx("span", {
                    style: {
                      fontSize: 18
                    },
                    children: "\u2708"
                  }),
                  a("em_holiday") || "Urlaub",
                  d && e.jsx("span", {
                    style: {
                      fontSize: 11,
                      padding: "2px 8px",
                      borderRadius: 8,
                      background: "#fff3e0",
                      color: "#f5a623",
                      textShadow: "none"
                    },
                    children: _ > 0 ? `${_} ${a("em_holiday_days_label") || "Tage"}` : a("em_holiday_active") || "aktiv"
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
                    children: a("em_holiday_from") || "Von"
                  }),
                  e.jsx("input", {
                    type: "date",
                    value: y,
                    onChange: (n) => this.setVal("oid-holiday-from", n.target.value),
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
                    children: a("em_holiday_to") || "Bis"
                  }),
                  e.jsx("input", {
                    type: "date",
                    value: g,
                    onChange: (n) => this.setVal("oid-holiday-to", n.target.value),
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
  I as default
};
