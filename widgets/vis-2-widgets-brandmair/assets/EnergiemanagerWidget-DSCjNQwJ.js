import { j as t, __tla as __tla_0 } from "./jsx-runtime-DBblkrDb.js";
import { a as G, b as E, __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare___mf_0_mui_mf_1_material__loadShare__.js-DEdXGH34.js";
import { G as H } from "./Generic-CM5BSTAz.js";
import { t as s } from "./tr-B1Gg-7na.js";
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
    for (const [l, n] of Z) F.push([
      `${e}-${l}`,
      `${i}.${n}`
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
  function W(a) {
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
        const l = e.days.map((n) => J[n] || n).join(",");
        return e.before ? `${l} <${e.before}` : l;
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
  function V({ label: a, value: i, unit: e, color: l, sub: n }) {
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
            color: l || "#111",
            textShadow: l ? O : "none"
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
        n && t.jsx("div", {
          style: {
            fontSize: 11,
            color: "#555",
            marginTop: 2
          },
          children: n
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
  function k({ checked: a, label: i, onChange: e }) {
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
          onChange: (l) => e(l.target.checked),
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
                onChange: async (i, e, l) => {
                  const n = e["oid-base"];
                  if (n) {
                    for (const [y, x] of F) e[y] = `${n}.${x}`;
                    l(e);
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
      const l = this.state.rxData[i];
      if (!l) return;
      const n = JSON.parse(JSON.stringify(this.state.values));
      n[`${l}.val`] = e, this.setState({
        values: n
      }), this.props.context.setValue(l, e);
    }
    toBool(i) {
      return i === true || i === "true";
    }
    renderDevice(i) {
      const e = (c) => `oid-dev${i}-${c}`, l = this.val(e("name")) || `Ger\xE4t ${i}`, n = this.val(e("mode")) || "auto", y = Number(this.val(e("priority"))) || 1, x = Number(this.val(e("power-min"))) || 0, f = Number(this.val(e("power-max"))) || 0;
      this.toBool(this.val(e("is-dimmable")));
      const b = this.toBool(this.val(e("is-on"))), p = Number(this.val(e("power"))) || 0, v = this.val(e("last-action")) || "\u2013", w = this.toBool(this.val(e("holiday-blocked"))), j = Number(this.val(e("notif-today"))) || 0, r = this.val(e("time-start")) || "", S = this.val(e("time-end")) || "", m = this.toBool(this.val(e("silent-active"))), T = this.val(e("silent-rules")) || "[]", C = `editDev${i}Priority`, M = `editDev${i}PowerMin`, I = `editDev${i}PowerMax`, R = `showSettings${i}`, $ = this.state[C], z = this.state[M], D = this.state[I], g = this.state[R], h = $ !== null ? $ : y, _ = z !== null ? z : x, d = D !== null ? D : f, B = f > 0 ? Math.min(100, p / f * 100) : 0, o = ee(n), u = {
        width: 65,
        padding: "3px 6px",
        fontSize: 12,
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: 5,
        background: "transparent",
        color: "#111",
        textAlign: "right"
      }, N = {
        ...u,
        width: 50,
        fontSize: 11
      }, P = {
        ...u,
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
                      background: b ? "#2ec27e" : "rgba(0,0,0,0.2)",
                      boxShadow: b ? "0 0 6px rgba(46,194,126,0.5)" : "none",
                      flexShrink: 0
                    }
                  }),
                  t.jsx("div", {
                    style: {
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#111"
                    },
                    children: l
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
                  h
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
                      W(p),
                      " / ",
                      W(f)
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
                    background: b ? `linear-gradient(90deg, ${o}, ${o}dd)` : "rgba(0,0,0,0.15)",
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
                value: n,
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
                  t.jsx(E, {
                    value: "auto",
                    children: s("em_mode_auto") || "Auto"
                  }),
                  t.jsx(E, {
                    value: "manual_on",
                    children: s("em_mode_manual_on") || "Manuell EIN"
                  }),
                  t.jsx(E, {
                    value: "manual_off",
                    children: s("em_mode_manual_off") || "Manuell AUS"
                  }),
                  t.jsx(E, {
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
              on: w,
              label: s("em_holiday_blocked") || "Urlaub-Sperre",
              onClick: () => this.setVal(e("holiday-blocked"), !w)
            })
          }),
          (r || S) && t.jsxs("div", {
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
                  " - ",
                  S || "--:--"
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
                  background: m ? "rgba(139,92,246,0.15)" : "rgba(0,0,0,0.06)",
                  color: m ? "#8b5cf6" : "#777",
                  fontWeight: 600
                },
                children: m ? "aktiv" : "aus"
              }),
              t.jsx("span", {
                style: {
                  fontSize: 10,
                  color: "#555",
                  marginLeft: "auto"
                },
                children: te(T)
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
                    value: h,
                    onChange: (c) => this.setState({
                      [C]: Number(c.target.value)
                    }),
                    onBlur: () => {
                      $ !== null && (this.setVal(e("priority"), $), this.setState({
                        [C]: null
                      }));
                    },
                    style: {
                      ...u,
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
                    value: _,
                    onChange: (c) => this.setState({
                      [M]: Number(c.target.value)
                    }),
                    onBlur: () => {
                      z !== null && (this.setVal(e("power-min"), z), this.setState({
                        [M]: null
                      }));
                    },
                    style: u
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
                      [I]: Number(c.target.value)
                    }),
                    onBlur: () => {
                      D !== null && (this.setVal(e("power-max"), D), this.setState({
                        [I]: null
                      }));
                    },
                    style: u
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
                [R]: !g
              }),
              style: {
                cursor: "pointer",
                userSelect: "none",
                fontSize: 12,
                fontWeight: 600,
                color: g ? "#4a9edd" : "#333",
                padding: "6px 12px",
                borderRadius: 8,
                background: g ? "rgba(74,158,221,0.12)" : "rgba(0,0,0,0.05)",
                border: `1px solid ${g ? "rgba(74,158,221,0.3)" : "rgba(0,0,0,0.1)"}`,
                textAlign: "center",
                transition: "all 0.2s"
              },
              children: [
                g ? "\u25B2 " : "\u25BC ",
                s("em_settings") || "Einstellungen"
              ]
            })
          }),
          g && this.renderDeviceSettings(i, e, N, P),
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
                children: v
              }),
              j > 0 && t.jsxs("div", {
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
                  j,
                  " notif"
                ]
              })
            ]
          })
        ]
      }, i);
    }
    renderDeviceSettings(i, e, l, n) {
      const y = Number(this.val(e("min-soc"))) || 0, x = Number(this.val(e("soc-off"))) || 0, f = Number(this.val(e("surplus-on"))) || 0, b = Number(this.val(e("surplus-off"))) || 0, p = Number(this.val(e("avg-min"))) || 0, v = this.val(e("time-start")) || "", w = this.val(e("time-end")) || "", j = this.val(e("days")) || "[]", r = ie(j), S = this.toBool(this.val(e("excl-holidays"))), m = Number(this.val(e("min-runtime"))) || 0, T = Number(this.val(e("min-pause"))) || 0, C = this.toBool(this.val(e("notify"))), M = Number(this.val(e("max-notif"))) || 0, I = this.toBool(this.val(e("fc-enabled"))), R = this.val(e("fc-start")) || "", $ = this.val(e("fc-end")) || "", z = Number(this.val(e("fc-min-soc"))) || 0, D = this.toBool(this.val(e("dis-holiday"))), g = Number(this.val(e("hol-pre-days"))) || 0, h = {
        padding: "6px 14px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 8,
        borderTop: "1px solid rgba(0,0,0,0.06)"
      }, _ = {
        fontSize: 10,
        fontWeight: 700,
        color: "#555",
        textTransform: "uppercase",
        letterSpacing: "0.03em",
        width: "100%",
        marginBottom: 2
      }, d = (o, u, N, P = 50, c = 1) => t.jsxs("div", {
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
            onChange: (U) => this.setVal(e(u), Number(U.target.value)),
            style: {
              ...l,
              width: P
            }
          }),
          t.jsx("span", {
            style: {
              fontSize: 10,
              color: "#555"
            },
            children: N
          })
        ]
      }), B = (o) => {
        const u = r.includes(o) ? r.filter((N) => N !== o) : [
          ...r,
          o
        ].sort();
        this.setVal(e("days"), JSON.stringify(u));
      };
      return t.jsxs("div", {
        style: {
          background: "rgba(0,0,0,0.02)",
          borderTop: "1px solid rgba(0,0,0,0.08)"
        },
        children: [
          t.jsxs("div", {
            style: h,
            children: [
              t.jsx("div", {
                style: _,
                children: s("em_soc_thresholds") || "SOC & Schwellen"
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_min_soc") || "Min SOC"
              }),
              d(y, "min-soc", "%"),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_soc_off") || "SOC Aus"
              }),
              d(x, "soc-off", "%"),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_surplus_on") || "Einsch."
              }),
              d(f, "surplus-on", "W", 60),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_surplus_off") || "Aussch."
              }),
              d(b, "surplus-off", "W", 60),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_avg_min") || "\xD8"
              }),
              d(p, "avg-min", "min")
            ]
          }),
          t.jsxs("div", {
            style: h,
            children: [
              t.jsx("div", {
                style: _,
                children: s("em_time_window") || "Zeitfenster"
              }),
              t.jsx("input", {
                type: "time",
                value: v,
                onChange: (o) => this.setVal(e("time-start"), o.target.value),
                style: n
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#555"
                },
                children: "-"
              }),
              t.jsx("input", {
                type: "time",
                value: w,
                onChange: (o) => this.setVal(e("time-end"), o.target.value),
                style: n
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
              t.jsx(k, {
                checked: S,
                label: s("em_excl_holidays") || "Feiertage aus",
                onChange: (o) => this.setVal(e("excl-holidays"), o)
              })
            ]
          }),
          t.jsxs("div", {
            style: h,
            children: [
              t.jsx("div", {
                style: _,
                children: s("em_runtimes") || "Laufzeiten"
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_min_runtime") || "Min. Lauf"
              }),
              d(m, "min-runtime", "min"),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_min_pause") || "Min. Pause"
              }),
              d(T, "min-pause", "min")
            ]
          }),
          t.jsxs("div", {
            style: h,
            children: [
              t.jsx("div", {
                style: _,
                children: s("em_notifications") || "Benachrichtigungen"
              }),
              t.jsx(k, {
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
              d(M, "max-notif", "", 40)
            ]
          }),
          t.jsxs("div", {
            style: h,
            children: [
              t.jsx("div", {
                style: _,
                children: s("em_forecast") || "Forecast"
              }),
              t.jsx(k, {
                checked: I,
                label: s("em_fc_preheat") || "Vorheizen",
                onChange: (o) => this.setVal(e("fc-enabled"), o)
              }),
              t.jsx("input", {
                type: "time",
                value: R,
                onChange: (o) => this.setVal(e("fc-start"), o.target.value),
                style: n
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#555"
                },
                children: "-"
              }),
              t.jsx("input", {
                type: "time",
                value: $,
                onChange: (o) => this.setVal(e("fc-end"), o.target.value),
                style: n
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_fc_min_soc") || "Vorheiz SOC"
              }),
              d(z, "fc-min-soc", "%")
            ]
          }),
          t.jsxs("div", {
            style: h,
            children: [
              t.jsx("div", {
                style: _,
                children: s("em_holiday_settings") || "Urlaub"
              }),
              t.jsx(k, {
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
              d(g, "hol-pre-days", s("em_holiday_days_label") || "Tage", 40)
            ]
          })
        ]
      });
    }
    renderWidgetBody(i) {
      super.renderWidgetBody(i), this.state.rxData.widgetTitle;
      const e = parseFloat(this.val("oid-surplus-current")) || 0, l = parseFloat(this.val("oid-surplus-avg")) || 0, n = parseFloat(this.val("oid-pv-power")) || 0, y = parseFloat(this.val("oid-battery-soc")) || 0, x = parseFloat(this.val("oid-forecast-today")) || 0, f = parseFloat(this.val("oid-managed-power")) || 0, b = this.val("oid-active-devices") || "", p = this.val("oid-is-holiday") === true || this.val("oid-is-holiday") === "true", v = Number(this.val("oid-holiday-days-remain")) || 0, w = parseFloat(this.val("oid-ww-temp-bottom")), j = parseFloat(this.val("oid-ww-temp-top")), r = this.val("oid-holiday-from") || "", S = this.val("oid-holiday-to") || "";
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
          t.jsxs("div", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 10
            },
            children: [
              t.jsx(V, {
                label: s("em_pv_power") || "PV-Leistung",
                value: W(n),
                color: "#f5a623"
              }),
              t.jsx(V, {
                label: e >= 0 ? s("em_grid_feed") || "Einspeisung" : s("em_grid_draw") || "Netzbezug",
                value: W(Math.abs(e)),
                color: q(e),
                sub: `\xD830min: ${W(l)}`
              }),
              t.jsx(V, {
                label: s("em_battery_soc") || "Batterie",
                value: `${Math.round(y)}`,
                unit: "%",
                color: Q(y)
              }),
              t.jsx(V, {
                label: s("em_forecast_today") || "Prognose",
                value: `${x.toFixed(1)}`,
                unit: "kWh",
                color: "#4a9edd"
              }),
              t.jsx(V, {
                label: s("em_managed_power") || "Gesteuert",
                value: W(f),
                color: "#8b5cf6",
                sub: b || s("em_no_devices") || "Keine"
              }),
              t.jsx(L, {
                label: s("em_ww_temp_top") || "Warmwasser oben",
                temp: j
              }),
              t.jsx(L, {
                label: s("em_ww_temp_bottom") || "Warmwasser unten",
                temp: w
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
              background: p ? "rgba(245,166,35,0.08)" : "transparent"
            },
            children: [
              t.jsxs("div", {
                style: {
                  fontSize: 13,
                  fontWeight: 600,
                  color: p ? "#f5a623" : "#555",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  textShadow: p ? O : "none"
                },
                children: [
                  t.jsx("span", {
                    style: {
                      fontSize: 18
                    },
                    children: "\u2708"
                  }),
                  s("em_holiday") || "Urlaub",
                  p && t.jsx("span", {
                    style: {
                      fontSize: 11,
                      padding: "2px 8px",
                      borderRadius: 8,
                      background: "#fff3e0",
                      color: "#f5a623",
                      textShadow: "none"
                    },
                    children: v > 0 ? `${v} ${s("em_holiday_days_label") || "Tage"}` : s("em_holiday_active") || "aktiv"
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
                    value: r,
                    onChange: (m) => this.setVal("oid-holiday-from", m.target.value),
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
                    value: S,
                    onChange: (m) => this.setVal("oid-holiday-to", m.target.value),
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
