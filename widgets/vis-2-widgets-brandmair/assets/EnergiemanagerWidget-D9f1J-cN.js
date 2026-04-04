import { j as t, __tla as __tla_0 } from "./jsx-runtime-DBblkrDb.js";
import { a as G, b as k, __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare___mf_0_mui_mf_1_material__loadShare__.js-DEdXGH34.js";
import { G as H } from "./Generic-CM5BSTAz.js";
import { t as s } from "./tr-D79cCJ1N.js";
import { __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-DCr90mXz.js";
import { __tla as __tla_3 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-36-XpKNE.js";
let K;
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
  const X = {
    1: "heizstab_warmwasser",
    2: "luftentfeuchter_keller",
    3: "pool_wp"
  }, Z = [
    [
      "min-soc",
      "min_soc"
    ],
    [
      "soc-off",
      "soc_off"
    ],
    [
      "surplus-on",
      "surplus_on_avg_w"
    ],
    [
      "surplus-off",
      "surplus_off_avg_w"
    ],
    [
      "avg-min",
      "avg_minutes"
    ],
    [
      "time-start",
      "time_start"
    ],
    [
      "time-end",
      "time_end"
    ],
    [
      "days",
      "days"
    ],
    [
      "excl-holidays",
      "exclude_holidays"
    ],
    [
      "min-runtime",
      "min_runtime_min"
    ],
    [
      "min-pause",
      "min_pause_min"
    ],
    [
      "notify",
      "notify"
    ],
    [
      "max-notif",
      "max_notifications_per_day"
    ],
    [
      "fc-enabled",
      "forecast_enabled"
    ],
    [
      "fc-start",
      "forecast_preheat_start"
    ],
    [
      "fc-end",
      "forecast_preheat_end"
    ],
    [
      "fc-min-soc",
      "forecast_preheat_min_soc"
    ],
    [
      "fc-rules",
      "forecast_rules"
    ],
    [
      "dis-holiday",
      "disable_on_holiday"
    ],
    [
      "hol-pre-days",
      "holiday_pre_days"
    ],
    [
      "silent-rules",
      "silent_rules"
    ],
    [
      "silent-active",
      "silent_active"
    ]
  ], F = [
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
      "oid-ww-temp-bottom",
      "warmwasser_temp_bottom"
    ],
    [
      "oid-ww-temp-top",
      "warmwasser_temp_top"
    ],
    [
      "oid-holiday-from",
      "holiday_from"
    ],
    [
      "oid-holiday-to",
      "holiday_to"
    ]
  ];
  for (let a = 1; a <= 3; a++) {
    const i = X[a], e = `oid-dev${a}`;
    F.push([
      `${e}-name`,
      `${i}.name`
    ], [
      `${e}-mode`,
      `${i}.mode`
    ], [
      `${e}-priority`,
      `${i}.priority`
    ], [
      `${e}-power-min`,
      `${i}.power_min_w`
    ], [
      `${e}-power-max`,
      `${i}.power_max_w`
    ], [
      `${e}-is-dimmable`,
      `${i}.is_dimmable`
    ], [
      `${e}-is-on`,
      `${i}.is_on`
    ], [
      `${e}-power`,
      `${i}.power_w`
    ], [
      `${e}-last-action`,
      `${i}.last_action`
    ], [
      `${e}-holiday-blocked`,
      `${i}.holiday_blocked`
    ], [
      `${e}-notif-today`,
      `${i}.notifications_today`
    ]);
    for (const [n, l] of Z) F.push([
      `${e}-${n}`,
      `${i}.${l}`
    ]);
  }
  function Y(a) {
    return isNaN(a) ? "#777" : a < 30 ? "#4a9edd" : a < 45 ? "#f5a623" : "#e8622a";
  }
  function q(a) {
    return a >= 0 ? "#2ec27e" : "#e8622a";
  }
  function Q(a) {
    return a < 20 ? "#e8622a" : a < 50 ? "#f5a623" : "#2ec27e";
  }
  function ee(a) {
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
  function M(a) {
    return Math.abs(a) >= 1e3 ? `${(a / 1e3).toFixed(1)} kW` : `${Math.round(a)} W`;
  }
  const J = [
    "",
    "Mo",
    "Di",
    "Mi",
    "Do",
    "Fr",
    "Sa",
    "So"
  ];
  function te(a) {
    try {
      return JSON.parse(a).filter((e) => e.silent).map((e) => {
        const n = e.days.map((l) => J[l] || l).join(",");
        return e.before ? `${n} <${e.before}` : n;
      }).join(" | ") || "\u2013";
    } catch {
      return "\u2013";
    }
  }
  function ie(a) {
    try {
      const i = JSON.parse(a);
      if (Array.isArray(i)) return i;
    } catch {
    }
    return [];
  }
  const O = "0 0 3px rgba(0,0,0,0.6), 0 0 6px rgba(0,0,0,0.3)";
  function R({ label: a, value: i, unit: e, color: n, sub: l }) {
    return t.jsxs("div", {
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
        t.jsx("div", {
          style: {
            fontSize: 11,
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "0.04em"
          },
          children: a
        }),
        t.jsxs("div", {
          style: {
            fontSize: 22,
            fontWeight: 700,
            color: n || "#111",
            textShadow: n ? O : "none"
          },
          children: [
            i,
            e && t.jsx("span", {
              style: {
                fontSize: 13,
                fontWeight: 400,
                marginLeft: 3,
                color: "#333",
                textShadow: "none"
              },
              children: e
            })
          ]
        }),
        l && t.jsx("div", {
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
  function L({ label: a, temp: i }) {
    const e = isNaN(i) ? "\u2013" : `${i.toFixed(1)}`;
    return t.jsxs("div", {
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
        t.jsx("div", {
          style: {
            fontSize: 11,
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "0.04em"
          },
          children: a
        }),
        t.jsxs("div", {
          style: {
            fontSize: 22,
            fontWeight: 700,
            color: Y(i),
            textShadow: O
          },
          children: [
            e,
            t.jsx("span", {
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
  function se({ on: a, label: i, onClick: e }) {
    return t.jsxs("div", {
      onClick: e,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        cursor: "pointer",
        userSelect: "none"
      },
      children: [
        t.jsx("div", {
          style: {
            width: 36,
            height: 20,
            borderRadius: 10,
            position: "relative",
            background: a ? "rgba(245,166,35,0.5)" : "rgba(0,0,0,0.15)",
            border: `1px solid ${a ? "#f5a623" : "rgba(0,0,0,0.2)"}`,
            transition: "all 0.2s"
          },
          children: t.jsx("div", {
            style: {
              width: 14,
              height: 14,
              borderRadius: "50%",
              position: "absolute",
              top: 2,
              left: 2,
              transition: "all 0.2s",
              transform: a ? "translateX(14px)" : "translateX(0)",
              background: a ? "#f5a623" : "rgba(0,0,0,0.3)"
            }
          })
        }),
        t.jsx("span", {
          style: {
            fontSize: 11,
            color: "#333"
          },
          children: i
        })
      ]
    });
  }
  function T({ checked: a, label: i, onChange: e }) {
    return t.jsxs("label", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        cursor: "pointer",
        fontSize: 11,
        color: "#333"
      },
      children: [
        t.jsx("input", {
          type: "checkbox",
          checked: a,
          onChange: (n) => e(n.target.checked),
          style: {
            width: 14,
            height: 14,
            margin: 0
          }
        }),
        i
      ]
    });
  }
  function A(a, i) {
    const e = `oid-dev${a}`;
    return [
      {
        name: `${e}-name`,
        type: "id",
        label: `${i}_name`
      },
      {
        name: `${e}-mode`,
        type: "id",
        label: `${i}_mode`
      },
      {
        name: `${e}-priority`,
        type: "id",
        label: `${i}_priority`
      },
      {
        name: `${e}-power-min`,
        type: "id",
        label: `${i}_power_min`
      },
      {
        name: `${e}-power-max`,
        type: "id",
        label: `${i}_power_max`
      },
      {
        name: `${e}-is-dimmable`,
        type: "id",
        label: `${i}_is_dimmable`
      },
      {
        name: `${e}-is-on`,
        type: "id",
        label: `${i}_is_on`
      },
      {
        name: `${e}-power`,
        type: "id",
        label: `${i}_power`
      },
      {
        name: `${e}-last-action`,
        type: "id",
        label: `${i}_last_action`
      },
      {
        name: `${e}-holiday-blocked`,
        type: "id",
        label: `${i}_holiday_blocked`
      },
      {
        name: `${e}-notif-today`,
        type: "id",
        label: `${i}_notif_today`
      },
      {
        name: `${e}-min-soc`,
        type: "id",
        label: "em_min_soc"
      },
      {
        name: `${e}-soc-off`,
        type: "id",
        label: "em_soc_off"
      },
      {
        name: `${e}-surplus-on`,
        type: "id",
        label: "em_surplus_on"
      },
      {
        name: `${e}-surplus-off`,
        type: "id",
        label: "em_surplus_off"
      },
      {
        name: `${e}-avg-min`,
        type: "id",
        label: "em_avg_min"
      },
      {
        name: `${e}-time-start`,
        type: "id",
        label: "em_time_window"
      },
      {
        name: `${e}-time-end`,
        type: "id",
        label: "em_time_window"
      },
      {
        name: `${e}-days`,
        type: "id",
        label: "em_days_label"
      },
      {
        name: `${e}-excl-holidays`,
        type: "id",
        label: "em_excl_holidays"
      },
      {
        name: `${e}-min-runtime`,
        type: "id",
        label: "em_min_runtime"
      },
      {
        name: `${e}-min-pause`,
        type: "id",
        label: "em_min_pause"
      },
      {
        name: `${e}-notify`,
        type: "id",
        label: "em_notify_active"
      },
      {
        name: `${e}-max-notif`,
        type: "id",
        label: "em_max_notif"
      },
      {
        name: `${e}-fc-enabled`,
        type: "id",
        label: "em_forecast"
      },
      {
        name: `${e}-fc-start`,
        type: "id",
        label: "em_fc_preheat"
      },
      {
        name: `${e}-fc-end`,
        type: "id",
        label: "em_fc_preheat"
      },
      {
        name: `${e}-fc-min-soc`,
        type: "id",
        label: "em_fc_min_soc"
      },
      {
        name: `${e}-fc-rules`,
        type: "id",
        label: "em_forecast"
      },
      {
        name: `${e}-dis-holiday`,
        type: "id",
        label: "em_dis_holiday"
      },
      {
        name: `${e}-hol-pre-days`,
        type: "id",
        label: "em_hol_pre_days"
      },
      {
        name: `${e}-silent-rules`,
        type: "id",
        label: "em_silent_rules"
      },
      {
        name: `${e}-silent-active`,
        type: "id",
        label: "em_silent_active"
      }
    ];
  }
  K = class extends H {
    constructor(i) {
      super(i), this.state = {
        ...this.state,
        editDev1Priority: null,
        editDev2Priority: null,
        editDev3Priority: null,
        editDev1PowerMin: null,
        editDev1PowerMax: null,
        editDev2PowerMin: null,
        editDev2PowerMax: null,
        editDev3PowerMin: null,
        editDev3PowerMax: null,
        showSettings1: false,
        showSettings2: false,
        showSettings3: false
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
                onChange: async (i, e, n) => {
                  const l = e["oid-base"];
                  if (l) {
                    for (const [x, h] of F) e[x] = `${l}.${h}`;
                    n(e);
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
            fields: A(1, "em_dev")
          },
          {
            name: "device2",
            label: "em_group_device2",
            fields: A(2, "em_dev")
          },
          {
            name: "device3",
            label: "em_group_device3",
            fields: A(3, "em_dev")
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
      return K.getWidgetInfo();
    }
    val(i) {
      const e = this.state.rxData[i];
      if (e) return this.state.values[`${e}.val`];
    }
    setVal(i, e) {
      const n = this.state.rxData[i];
      if (!n) return;
      const l = JSON.parse(JSON.stringify(this.state.values));
      l[`${n}.val`] = e, this.setState({
        values: l
      }), this.props.context.setValue(n, e);
    }
    toBool(i) {
      return i === true || i === "true";
    }
    renderDevice(i) {
      const e = (c) => `oid-dev${i}-${c}`, n = this.val(e("name")) || `Ger\xE4t ${i}`, l = this.val(e("mode")) || "auto", x = Number(this.val(e("priority"))) || 1, h = Number(this.val(e("power-min"))) || 0, u = Number(this.val(e("power-max"))) || 0;
      this.toBool(this.val(e("is-dimmable")));
      const _ = this.toBool(this.val(e("is-on"))), j = Number(this.val(e("power"))) || 0, y = this.val(e("last-action")) || "\u2013", b = this.toBool(this.val(e("holiday-blocked"))), S = Number(this.val(e("notif-today"))) || 0, r = this.val(e("time-start")) || "", $ = this.val(e("time-end")) || "", v = this.toBool(this.val(e("silent-active"))), w = this.val(e("silent-rules")) || "[]", C = `editDev${i}Priority`, I = `editDev${i}PowerMin`, N = `editDev${i}PowerMax`, E = `showSettings${i}`, z = this.state[C], W = this.state[I], D = this.state[N], f = this.state[E], p = z !== null ? z : x, g = W !== null ? W : h, d = D !== null ? D : u, B = u > 0 ? Math.min(100, j / u * 100) : 0, o = ee(l), m = {
        width: 65,
        padding: "3px 6px",
        fontSize: 12,
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: 5,
        background: "transparent",
        color: "#111",
        textAlign: "right"
      }, V = {
        ...m,
        width: 50,
        fontSize: 11
      }, P = {
        ...m,
        width: 70,
        fontSize: 11,
        textAlign: "center"
      };
      return t.jsxs("div", {
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
          t.jsx("div", {
            style: {
              height: 4,
              background: o,
              flexShrink: 0
            }
          }),
          t.jsxs("div", {
            style: {
              padding: "10px 14px 6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8
            },
            children: [
              t.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8
                },
                children: [
                  t.jsx("div", {
                    style: {
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: _ ? "#2ec27e" : "rgba(0,0,0,0.2)",
                      boxShadow: _ ? "0 0 6px rgba(46,194,126,0.5)" : "none",
                      flexShrink: 0
                    }
                  }),
                  t.jsx("div", {
                    style: {
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#111"
                    },
                    children: n
                  })
                ]
              }),
              t.jsxs("span", {
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
                  p
                ]
              })
            ]
          }),
          t.jsxs("div", {
            style: {
              padding: "0 14px 8px"
            },
            children: [
              t.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 12,
                  color: "#333",
                  marginBottom: 4
                },
                children: [
                  t.jsx("span", {
                    children: s("em_dev_power") || "Leistung"
                  }),
                  t.jsxs("span", {
                    style: {
                      fontWeight: 600,
                      color: "#111"
                    },
                    children: [
                      M(j),
                      " / ",
                      M(u)
                    ]
                  })
                ]
              }),
              t.jsx("div", {
                style: {
                  height: 22,
                  borderRadius: 6,
                  overflow: "hidden",
                  background: "rgba(0,0,0,0.08)",
                  position: "relative"
                },
                children: t.jsx("div", {
                  style: {
                    width: `${B}%`,
                    height: "100%",
                    background: _ ? `linear-gradient(90deg, ${o}, ${o}dd)` : "rgba(0,0,0,0.15)",
                    borderRadius: 6,
                    transition: "width 0.5s ease"
                  }
                })
              })
            ]
          }),
          t.jsxs("div", {
            style: {
              padding: "0 14px 8px",
              display: "flex",
              alignItems: "center",
              gap: 10
            },
            children: [
              t.jsx("span", {
                style: {
                  fontSize: 12,
                  color: "#333",
                  minWidth: 45
                },
                children: s("em_dev_mode") || "Modus"
              }),
              t.jsxs(G, {
                value: l,
                size: "small",
                onChange: (c) => this.setVal(e("mode"), c.target.value),
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
                  t.jsx(k, {
                    value: "auto",
                    children: s("em_mode_auto") || "Auto"
                  }),
                  t.jsx(k, {
                    value: "manual_on",
                    children: s("em_mode_manual_on") || "Manuell EIN"
                  }),
                  t.jsx(k, {
                    value: "manual_off",
                    children: s("em_mode_manual_off") || "Manuell AUS"
                  }),
                  t.jsx(k, {
                    value: "disabled",
                    children: s("em_mode_disabled") || "Deaktiviert"
                  })
                ]
              })
            ]
          }),
          t.jsx("div", {
            style: {
              padding: "0 14px 8px"
            },
            children: t.jsx(se, {
              on: b,
              label: s("em_holiday_blocked") || "Urlaub-Sperre",
              onClick: () => this.setVal(e("holiday-blocked"), !b)
            })
          }),
          (r || $) && t.jsxs("div", {
            style: {
              padding: "0 14px 8px",
              fontSize: 11,
              color: "#555",
              display: "flex",
              alignItems: "center",
              gap: 4
            },
            children: [
              t.jsxs("span", {
                style: {
                  color: "#333",
                  fontWeight: 600
                },
                children: [
                  s("em_time_window") || "Zeitfenster",
                  ":"
                ]
              }),
              t.jsxs("span", {
                children: [
                  r || "--:--",
                  " \\u2013 ",
                  $ || "--:--"
                ]
              })
            ]
          }),
          t.jsxs("div", {
            style: {
              padding: "0 14px 8px",
              display: "flex",
              alignItems: "center",
              gap: 8
            },
            children: [
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: "Silent"
              }),
              t.jsx("span", {
                style: {
                  fontSize: 10,
                  padding: "2px 6px",
                  borderRadius: 8,
                  background: v ? "rgba(139,92,246,0.15)" : "rgba(0,0,0,0.06)",
                  color: v ? "#8b5cf6" : "#777",
                  fontWeight: 600
                },
                children: v ? "aktiv" : "aus"
              }),
              t.jsx("span", {
                style: {
                  fontSize: 10,
                  color: "#555",
                  marginLeft: "auto"
                },
                children: te(w)
              })
            ]
          }),
          t.jsxs("div", {
            style: {
              padding: "0 14px 8px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              borderTop: "1px solid rgba(0,0,0,0.06)",
              paddingTop: 8
            },
            children: [
              t.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 4
                },
                children: [
                  t.jsx("span", {
                    style: {
                      fontSize: 11,
                      color: "#555"
                    },
                    children: "Prio"
                  }),
                  t.jsx("input", {
                    type: "number",
                    min: 1,
                    max: 99,
                    value: p,
                    onChange: (c) => this.setState({
                      [C]: Number(c.target.value)
                    }),
                    onBlur: () => {
                      z !== null && (this.setVal(e("priority"), z), this.setState({
                        [C]: null
                      }));
                    },
                    style: {
                      ...m,
                      width: 42
                    }
                  })
                ]
              }),
              t.jsx("div", {
                style: {
                  width: 1,
                  height: 20,
                  background: "rgba(0,0,0,0.1)"
                }
              }),
              t.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 4
                },
                children: [
                  t.jsx("span", {
                    style: {
                      fontSize: 11,
                      color: "#555"
                    },
                    children: "Min"
                  }),
                  t.jsx("input", {
                    type: "number",
                    min: 0,
                    step: 50,
                    value: g,
                    onChange: (c) => this.setState({
                      [I]: Number(c.target.value)
                    }),
                    onBlur: () => {
                      W !== null && (this.setVal(e("power-min"), W), this.setState({
                        [I]: null
                      }));
                    },
                    style: m
                  })
                ]
              }),
              t.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 4
                },
                children: [
                  t.jsx("span", {
                    style: {
                      fontSize: 11,
                      color: "#555"
                    },
                    children: "Max"
                  }),
                  t.jsx("input", {
                    type: "number",
                    min: 0,
                    step: 50,
                    value: d,
                    onChange: (c) => this.setState({
                      [N]: Number(c.target.value)
                    }),
                    onBlur: () => {
                      D !== null && (this.setVal(e("power-max"), D), this.setState({
                        [N]: null
                      }));
                    },
                    style: m
                  })
                ]
              }),
              t.jsx("span", {
                style: {
                  fontSize: 10,
                  color: "#555"
                },
                children: "W"
              })
            ]
          }),
          t.jsx("div", {
            style: {
              padding: "0 14px 8px"
            },
            children: t.jsxs("div", {
              onClick: () => this.setState({
                [E]: !f
              }),
              style: {
                cursor: "pointer",
                userSelect: "none",
                fontSize: 12,
                fontWeight: 600,
                color: f ? "#4a9edd" : "#333",
                padding: "6px 12px",
                borderRadius: 8,
                background: f ? "rgba(74,158,221,0.12)" : "rgba(0,0,0,0.05)",
                border: `1px solid ${f ? "rgba(74,158,221,0.3)" : "rgba(0,0,0,0.1)"}`,
                textAlign: "center",
                transition: "all 0.2s"
              },
              children: [
                f ? "\u25B2 " : "\u25BC ",
                s("em_settings") || "Einstellungen"
              ]
            })
          }),
          f && this.renderDeviceSettings(i, e, V, P),
          t.jsxs("div", {
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
              t.jsx("div", {
                style: {
                  flex: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: y
              }),
              S > 0 && t.jsxs("div", {
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
                  S,
                  " notif"
                ]
              })
            ]
          })
        ]
      }, i);
    }
    renderDeviceSettings(i, e, n, l) {
      const x = Number(this.val(e("min-soc"))) || 0, h = Number(this.val(e("soc-off"))) || 0, u = Number(this.val(e("surplus-on"))) || 0, _ = Number(this.val(e("surplus-off"))) || 0, j = Number(this.val(e("avg-min"))) || 0, y = this.val(e("time-start")) || "", b = this.val(e("time-end")) || "", S = this.val(e("days")) || "[]", r = ie(S), $ = this.toBool(this.val(e("excl-holidays"))), v = Number(this.val(e("min-runtime"))) || 0, w = Number(this.val(e("min-pause"))) || 0, C = this.toBool(this.val(e("notify"))), I = Number(this.val(e("max-notif"))) || 0, N = this.toBool(this.val(e("fc-enabled"))), E = this.val(e("fc-start")) || "", z = this.val(e("fc-end")) || "", W = Number(this.val(e("fc-min-soc"))) || 0, D = this.toBool(this.val(e("dis-holiday"))), f = Number(this.val(e("hol-pre-days"))) || 0, p = {
        padding: "6px 14px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 8,
        borderTop: "1px solid rgba(0,0,0,0.06)"
      }, g = {
        fontSize: 10,
        fontWeight: 700,
        color: "#555",
        textTransform: "uppercase",
        letterSpacing: "0.03em",
        width: "100%",
        marginBottom: 2
      }, d = (o, m, V, P = 50, c = 1) => t.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 3
        },
        children: [
          t.jsx("input", {
            type: "number",
            value: o,
            step: c,
            onChange: (U) => this.setVal(e(m), Number(U.target.value)),
            style: {
              ...n,
              width: P
            }
          }),
          t.jsx("span", {
            style: {
              fontSize: 10,
              color: "#555"
            },
            children: V
          })
        ]
      }), B = (o) => {
        const m = r.includes(o) ? r.filter((V) => V !== o) : [
          ...r,
          o
        ].sort();
        this.setVal(e("days"), JSON.stringify(m));
      };
      return t.jsxs("div", {
        style: {
          background: "rgba(0,0,0,0.02)",
          borderTop: "1px solid rgba(0,0,0,0.08)"
        },
        children: [
          t.jsxs("div", {
            style: p,
            children: [
              t.jsx("div", {
                style: g,
                children: s("em_soc_thresholds") || "SOC & Schwellen"
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_min_soc") || "Min SOC"
              }),
              d(x, "min-soc", "%"),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_soc_off") || "SOC Aus"
              }),
              d(h, "soc-off", "%"),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_surplus_on") || "Einsch."
              }),
              d(u, "surplus-on", "W", 60),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_surplus_off") || "Aussch."
              }),
              d(_, "surplus-off", "W", 60),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_avg_min") || "\xD8"
              }),
              d(j, "avg-min", "min")
            ]
          }),
          t.jsxs("div", {
            style: p,
            children: [
              t.jsx("div", {
                style: g,
                children: s("em_time_window") || "Zeitfenster"
              }),
              t.jsx("input", {
                type: "time",
                value: y,
                onChange: (o) => this.setVal(e("time-start"), o.target.value),
                style: l
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#555"
                },
                children: "\\u2013"
              }),
              t.jsx("input", {
                type: "time",
                value: b,
                onChange: (o) => this.setVal(e("time-end"), o.target.value),
                style: l
              }),
              t.jsx("div", {
                style: {
                  width: 1,
                  height: 16,
                  background: "rgba(0,0,0,0.1)"
                }
              }),
              t.jsxs("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: [
                  s("em_days_label") || "Tage",
                  ":"
                ]
              }),
              [
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ].map((o) => t.jsx("span", {
                onClick: () => B(o),
                style: {
                  fontSize: 10,
                  padding: "2px 5px",
                  borderRadius: 4,
                  cursor: "pointer",
                  userSelect: "none",
                  background: r.includes(o) ? "rgba(74,158,221,0.2)" : "rgba(0,0,0,0.06)",
                  color: r.includes(o) ? "#4a9edd" : "#777",
                  fontWeight: r.includes(o) ? 600 : 400,
                  border: `1px solid ${r.includes(o) ? "rgba(74,158,221,0.3)" : "rgba(0,0,0,0.1)"}`
                },
                children: J[o]
              }, o)),
              t.jsx("div", {
                style: {
                  width: 1,
                  height: 16,
                  background: "rgba(0,0,0,0.1)"
                }
              }),
              t.jsx(T, {
                checked: $,
                label: s("em_excl_holidays") || "Feiertage aus",
                onChange: (o) => this.setVal(e("excl-holidays"), o)
              })
            ]
          }),
          t.jsxs("div", {
            style: p,
            children: [
              t.jsx("div", {
                style: g,
                children: s("em_runtimes") || "Laufzeiten"
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_min_runtime") || "Min. Lauf"
              }),
              d(v, "min-runtime", "min"),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_min_pause") || "Min. Pause"
              }),
              d(w, "min-pause", "min")
            ]
          }),
          t.jsxs("div", {
            style: p,
            children: [
              t.jsx("div", {
                style: g,
                children: s("em_notifications") || "Benachrichtigungen"
              }),
              t.jsx(T, {
                checked: C,
                label: s("em_notify_active") || "Aktiv",
                onChange: (o) => this.setVal(e("notify"), o)
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_max_notif") || "Max/Tag"
              }),
              d(I, "max-notif", "", 40)
            ]
          }),
          t.jsxs("div", {
            style: p,
            children: [
              t.jsx("div", {
                style: g,
                children: s("em_forecast") || "Forecast"
              }),
              t.jsx(T, {
                checked: N,
                label: s("em_fc_preheat") || "Vorheizen",
                onChange: (o) => this.setVal(e("fc-enabled"), o)
              }),
              t.jsx("input", {
                type: "time",
                value: E,
                onChange: (o) => this.setVal(e("fc-start"), o.target.value),
                style: l
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#555"
                },
                children: "\\u2013"
              }),
              t.jsx("input", {
                type: "time",
                value: z,
                onChange: (o) => this.setVal(e("fc-end"), o.target.value),
                style: l
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_fc_min_soc") || "Min SOC"
              }),
              d(W, "fc-min-soc", "%")
            ]
          }),
          t.jsxs("div", {
            style: p,
            children: [
              t.jsx("div", {
                style: g,
                children: s("em_holiday_settings") || "Urlaub"
              }),
              t.jsx(T, {
                checked: D,
                label: s("em_dis_holiday") || "Im Urlaub aus",
                onChange: (o) => this.setVal(e("dis-holiday"), o)
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_hol_pre_days") || "Vorlauf"
              }),
              d(f, "hol-pre-days", s("em_holiday_days_label") || "Tage", 40)
            ]
          })
        ]
      });
    }
    renderWidgetBody(i) {
      super.renderWidgetBody(i);
      const e = this.state.rxData.widgetTitle || "Energiemanager", n = parseFloat(this.val("oid-surplus-current")) || 0, l = parseFloat(this.val("oid-surplus-avg")) || 0, x = parseFloat(this.val("oid-pv-power")) || 0, h = parseFloat(this.val("oid-battery-soc")) || 0, u = parseFloat(this.val("oid-forecast-today")) || 0, _ = parseFloat(this.val("oid-managed-power")) || 0, j = this.val("oid-active-devices") || "", y = this.val("oid-is-holiday") === true || this.val("oid-is-holiday") === "true", b = Number(this.val("oid-holiday-days-remain")) || 0, S = parseFloat(this.val("oid-ww-temp-bottom")), r = parseFloat(this.val("oid-ww-temp-top")), $ = this.val("oid-holiday-from") || "", v = this.val("oid-holiday-to") || "";
      return t.jsxs("div", {
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
          t.jsx("div", {
            style: {
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.02em",
              color: "#111",
              textShadow: "0 0 4px rgba(0,0,0,0.3)"
            },
            children: e
          }),
          t.jsxs("div", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 10
            },
            children: [
              t.jsx(R, {
                label: s("em_pv_power") || "PV-Leistung",
                value: M(x),
                color: "#f5a623"
              }),
              t.jsx(R, {
                label: n >= 0 ? s("em_grid_feed") || "Einspeisung" : s("em_grid_draw") || "Netzbezug",
                value: M(Math.abs(n)),
                color: q(n),
                sub: `\xD830min: ${M(l)}`
              }),
              t.jsx(R, {
                label: s("em_battery_soc") || "Batterie",
                value: `${Math.round(h)}`,
                unit: "%",
                color: Q(h)
              }),
              t.jsx(R, {
                label: s("em_forecast_today") || "Prognose",
                value: `${u.toFixed(1)}`,
                unit: "kWh",
                color: "#4a9edd"
              }),
              t.jsx(R, {
                label: s("em_managed_power") || "Gesteuert",
                value: M(_),
                color: "#8b5cf6",
                sub: j || s("em_no_devices") || "Keine"
              }),
              t.jsx(L, {
                label: s("em_ww_temp_top") || "Warmwasser oben",
                temp: r
              }),
              t.jsx(L, {
                label: s("em_ww_temp_bottom") || "Warmwasser unten",
                temp: S
              })
            ]
          }),
          t.jsxs("div", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 12,
              padding: "10px 14px",
              border: "1px solid rgba(0,0,0,0.15)",
              borderRadius: 12,
              background: y ? "rgba(245,166,35,0.08)" : "transparent"
            },
            children: [
              t.jsxs("div", {
                style: {
                  fontSize: 13,
                  fontWeight: 600,
                  color: y ? "#f5a623" : "#555",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  textShadow: y ? O : "none"
                },
                children: [
                  t.jsx("span", {
                    style: {
                      fontSize: 18
                    },
                    children: "\u2708"
                  }),
                  s("em_holiday") || "Urlaub",
                  y && t.jsx("span", {
                    style: {
                      fontSize: 11,
                      padding: "2px 8px",
                      borderRadius: 8,
                      background: "#fff3e0",
                      color: "#f5a623",
                      textShadow: "none"
                    },
                    children: b > 0 ? `${b} ${s("em_holiday_days_label") || "Tage"}` : s("em_holiday_active") || "aktiv"
                  })
                ]
              }),
              t.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginLeft: "auto"
                },
                children: [
                  t.jsx("span", {
                    style: {
                      fontSize: 12,
                      color: "#333"
                    },
                    children: s("em_holiday_from") || "Von"
                  }),
                  t.jsx("input", {
                    type: "date",
                    value: $,
                    onChange: (w) => this.setVal("oid-holiday-from", w.target.value),
                    style: {
                      padding: "4px 8px",
                      fontSize: 13,
                      border: "1px solid rgba(0,0,0,0.15)",
                      borderRadius: 6,
                      background: "transparent",
                      color: "#111"
                    }
                  }),
                  t.jsx("span", {
                    style: {
                      fontSize: 12,
                      color: "#333"
                    },
                    children: s("em_holiday_to") || "Bis"
                  }),
                  t.jsx("input", {
                    type: "date",
                    value: v,
                    onChange: (w) => this.setVal("oid-holiday-to", w.target.value),
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
          t.jsxs("div", {
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
  K as default
};
