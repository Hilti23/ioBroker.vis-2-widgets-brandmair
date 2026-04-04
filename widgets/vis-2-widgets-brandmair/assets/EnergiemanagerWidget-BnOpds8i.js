import { j as t, __tla as __tla_0 } from "./jsx-runtime-LXN0Dejw.js";
import { b as V, __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-Cq4bBQs0.js";
import { a as Q, b as R, __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare___mf_0_mui_mf_1_material__loadShare__.js-DEdXGH34.js";
import { G as ee } from "./Generic-CM5BSTAz.js";
import { t as n } from "./tr-miy5TWOP.js";
import { __tla as __tla_3 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-Dkt6rraE.js";
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
  const te = {
    1: "heizstab_warmwasser",
    2: "luftentfeuchter_keller",
    3: "pool_wp"
  }, ie = [
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
    ],
    [
      "time-rules",
      "time_rules"
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
  for (let s = 1; s <= 3; s++) {
    const i = te[s], e = `oid-dev${s}`;
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
    for (const [o, a] of ie) F.push([
      `${e}-${o}`,
      `${i}.${a}`
    ]);
  }
  function se(s) {
    return isNaN(s) ? "#777" : s < 30 ? "#4a9edd" : s < 45 ? "#f5a623" : "#e8622a";
  }
  function ne(s) {
    return s >= 0 ? "#2ec27e" : "#e8622a";
  }
  function ae(s) {
    return s < 20 ? "#e8622a" : s < 50 ? "#f5a623" : "#2ec27e";
  }
  function oe(s) {
    switch (s) {
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
  function C(s) {
    return Math.abs(s) >= 1e3 ? `${(s / 1e3).toFixed(1)} kW` : `${Math.round(s)} W`;
  }
  const k = [
    "",
    "Mo",
    "Di",
    "Mi",
    "Do",
    "Fr",
    "Sa",
    "So"
  ], le = [
    "",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag"
  ];
  function re(s) {
    try {
      return JSON.parse(s).filter((e) => e.silent).map((e) => {
        const o = e.days.map((a) => k[a] || a).join(",");
        return e.before ? `${o} <${e.before}` : o;
      }).join(" | ") || "\u2013";
    } catch {
      return "\u2013";
    }
  }
  function P(s) {
    try {
      const i = JSON.parse(s);
      if (Array.isArray(i)) return i;
    } catch {
    }
    return [];
  }
  function L(s) {
    try {
      const i = JSON.parse(s);
      if (Array.isArray(i)) return i;
    } catch {
    }
    return [];
  }
  function de(s, i, e, o) {
    let a = L(s);
    if (a.length === 0 && (i || e)) {
      const l = P(o);
      l.length > 0 && (i || e) && (a = [
        {
          days: l,
          start: i || "00:00",
          end: e || "23:59"
        }
      ]);
    }
    return a.length === 0 ? "\u2013" : a.map((l) => `${ce(l.days)} ${l.start}-${l.end}`).join(" | ");
  }
  function ce(s) {
    if (s.length === 0) return "";
    const i = [
      ...s
    ].sort((l, m) => l - m), e = [];
    let o = i[0], a = i[0];
    for (let l = 1; l <= i.length; l++) l < i.length && i[l] === a + 1 ? a = i[l] : (o === a ? e.push(k[o]) : e.push(`${k[o]}-${k[a]}`), l < i.length && (o = i[l], a = i[l]));
    return e.join(",");
  }
  const J = "0 0 3px rgba(0,0,0,0.6), 0 0 6px rgba(0,0,0,0.3)";
  function T({ label: s, value: i, unit: e, color: o, sub: a }) {
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
          children: s
        }),
        t.jsxs("div", {
          style: {
            fontSize: 22,
            fontWeight: 700,
            color: o || "#111",
            textShadow: o ? J : "none"
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
        a && t.jsx("div", {
          style: {
            fontSize: 11,
            color: "#555",
            marginTop: 2
          },
          children: a
        })
      ]
    });
  }
  function O({ label: s, temp: i }) {
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
          children: s
        }),
        t.jsxs("div", {
          style: {
            fontSize: 22,
            fontWeight: 700,
            color: se(i),
            textShadow: J
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
  function pe({ on: s, label: i, onClick: e }) {
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
            background: s ? "rgba(245,166,35,0.5)" : "rgba(0,0,0,0.15)",
            border: `1px solid ${s ? "#f5a623" : "rgba(0,0,0,0.2)"}`,
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
              transform: s ? "translateX(14px)" : "translateX(0)",
              background: s ? "#f5a623" : "rgba(0,0,0,0.3)"
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
  function E({ checked: s, label: i, onChange: e }) {
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
          checked: s,
          onChange: (o) => e(o.target.checked),
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
  function me({ rules: s, excludeHolidays: i, onSave: e, onCancel: o }) {
    const a = () => {
      const r = [];
      for (let c = 1; c <= 7; c++) {
        const d = s.find((f) => f.days.includes(c));
        r.push({
          day: c,
          active: !!d,
          start: d ? d.start : "08:00",
          end: d ? d.end : "20:00"
        });
      }
      return r;
    }, [l, m] = V.useState(a), [u, y] = V.useState(i), x = (r, c, d) => {
      m((f) => {
        const b = [
          ...f
        ];
        return b[r] = {
          ...b[r],
          [c]: d
        }, b;
      });
    }, w = () => {
      const r = {};
      for (const d of l) {
        if (!d.active) continue;
        const f = `${d.start}|${d.end}`;
        r[f] || (r[f] = []), r[f].push(d.day);
      }
      const c = Object.entries(r).map(([d, f]) => {
        const [b, S] = d.split("|");
        return {
          days: f.sort((D, $) => D - $),
          start: b,
          end: S
        };
      });
      e(c, u);
    }, j = {
      padding: "4px 6px",
      fontSize: 13,
      border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: 5,
      background: "#fff",
      color: "#111",
      textAlign: "center",
      width: 80
    };
    return t.jsx("div", {
      onClick: (r) => {
        r.target === r.currentTarget && o();
      },
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1100
      },
      children: t.jsxs("div", {
        style: {
          background: "#fff",
          borderRadius: 12,
          padding: 24,
          minWidth: 340,
          maxWidth: 480,
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          color: "#111"
        },
        children: [
          t.jsx("div", {
            style: {
              fontSize: 16,
              fontWeight: 700,
              marginBottom: 16,
              color: "#111"
            },
            children: n("em_time_rules") || "Zeitfenster"
          }),
          t.jsxs("table", {
            style: {
              width: "100%",
              borderCollapse: "collapse"
            },
            children: [
              t.jsx("thead", {
                children: t.jsxs("tr", {
                  children: [
                    t.jsx("th", {
                      style: {
                        textAlign: "left",
                        fontSize: 12,
                        color: "#555",
                        padding: "4px 6px"
                      },
                      children: "Tag"
                    }),
                    t.jsx("th", {
                      style: {
                        textAlign: "center",
                        fontSize: 12,
                        color: "#555",
                        padding: "4px 6px"
                      },
                      children: n("em_time_active") || "Aktiv"
                    }),
                    t.jsx("th", {
                      style: {
                        textAlign: "center",
                        fontSize: 12,
                        color: "#555",
                        padding: "4px 6px"
                      },
                      children: "Start"
                    }),
                    t.jsx("th", {
                      style: {
                        textAlign: "center",
                        fontSize: 12,
                        color: "#555",
                        padding: "4px 6px"
                      },
                      children: "Ende"
                    })
                  ]
                })
              }),
              t.jsx("tbody", {
                children: l.map((r, c) => t.jsxs("tr", {
                  style: {
                    borderTop: "1px solid rgba(0,0,0,0.08)",
                    opacity: r.active ? 1 : 0.5
                  },
                  children: [
                    t.jsx("td", {
                      style: {
                        padding: "6px",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#333"
                      },
                      children: le[r.day]
                    }),
                    t.jsx("td", {
                      style: {
                        padding: "6px",
                        textAlign: "center"
                      },
                      children: t.jsx("input", {
                        type: "checkbox",
                        checked: r.active,
                        onChange: (d) => x(c, "active", d.target.checked),
                        style: {
                          width: 16,
                          height: 16
                        }
                      })
                    }),
                    t.jsx("td", {
                      style: {
                        padding: "6px",
                        textAlign: "center"
                      },
                      children: t.jsx("input", {
                        type: "time",
                        value: r.start,
                        disabled: !r.active,
                        onChange: (d) => x(c, "start", d.target.value),
                        style: {
                          ...j,
                          opacity: r.active ? 1 : 0.4
                        }
                      })
                    }),
                    t.jsx("td", {
                      style: {
                        padding: "6px",
                        textAlign: "center"
                      },
                      children: t.jsx("input", {
                        type: "time",
                        value: r.end,
                        disabled: !r.active,
                        onChange: (d) => x(c, "end", d.target.value),
                        style: {
                          ...j,
                          opacity: r.active ? 1 : 0.4
                        }
                      })
                    })
                  ]
                }, r.day))
              })
            ]
          }),
          t.jsxs("div", {
            style: {
              marginTop: 14,
              padding: "10px 6px",
              borderTop: "1px solid rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              gap: 8
            },
            children: [
              t.jsx("input", {
                type: "checkbox",
                checked: u,
                onChange: (r) => y(r.target.checked),
                style: {
                  width: 16,
                  height: 16
                }
              }),
              t.jsx("span", {
                style: {
                  fontSize: 13,
                  color: "#333"
                },
                children: n("em_excl_holidays") || "An Feiertagen aus"
              })
            ]
          }),
          t.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "flex-end",
              gap: 10,
              marginTop: 14
            },
            children: [
              t.jsx("button", {
                onClick: o,
                style: {
                  padding: "8px 20px",
                  fontSize: 13,
                  border: "1px solid rgba(0,0,0,0.2)",
                  borderRadius: 6,
                  background: "#f5f5f5",
                  color: "#333",
                  cursor: "pointer"
                },
                children: n("em_time_cancel") || "Abbrechen"
              }),
              t.jsx("button", {
                onClick: w,
                style: {
                  padding: "8px 20px",
                  fontSize: 13,
                  border: "1px solid #4a9edd",
                  borderRadius: 6,
                  background: "#4a9edd",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: 600
                },
                children: n("em_time_save") || "Speichern"
              })
            ]
          })
        ]
      })
    });
  }
  function B(s, i) {
    const e = `oid-dev${s}`;
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
      },
      {
        name: `${e}-time-rules`,
        type: "id",
        label: "em_time_rules"
      }
    ];
  }
  K = class extends ee {
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
        showTimeModal1: false,
        showTimeModal2: false,
        showTimeModal3: false,
        editTimeRules1: null,
        editTimeRules2: null,
        editTimeRules3: null
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
                onChange: async (i, e, o) => {
                  const a = e["oid-base"];
                  if (a) {
                    for (const [l, m] of F) e[l] = `${a}.${m}`;
                    o(e);
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
            fields: B(1, "em_dev")
          },
          {
            name: "device2",
            label: "em_group_device2",
            fields: B(2, "em_dev")
          },
          {
            name: "device3",
            label: "em_group_device3",
            fields: B(3, "em_dev")
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
      const o = this.state.rxData[i];
      if (!o) return;
      const a = JSON.parse(JSON.stringify(this.state.values));
      a[`${o}.val`] = e, this.setState({
        values: a
      }), this.props.context.setValue(o, e);
    }
    toBool(i) {
      return i === true || i === "true";
    }
    getTimeRulesForDevice(i) {
      const e = (x) => `oid-dev${i}-${x}`, o = this.val(e("time-rules")) || "", a = L(o);
      if (a.length > 0) return a;
      const l = this.val(e("time-start")) || "", m = this.val(e("time-end")) || "", u = this.val(e("days")) || "[]", y = P(u);
      return y.length > 0 && (l || m) ? [
        {
          days: y,
          start: l || "00:00",
          end: m || "23:59"
        }
      ] : [];
    }
    renderDevice(i) {
      const e = (_) => `oid-dev${i}-${_}`, o = this.val(e("name")) || `Ger\xE4t ${i}`, a = this.val(e("mode")) || "auto", l = Number(this.val(e("priority"))) || 1, m = Number(this.val(e("power-min"))) || 0, u = Number(this.val(e("power-max"))) || 0;
      this.toBool(this.val(e("is-dimmable")));
      const y = this.toBool(this.val(e("is-on"))), x = Number(this.val(e("power"))) || 0, w = this.val(e("last-action")) || "\u2013", j = this.toBool(this.val(e("holiday-blocked"))), r = Number(this.val(e("notif-today"))) || 0, c = this.val(e("time-rules")) || "", d = this.val(e("time-start")) || "", f = this.val(e("time-end")) || "", b = this.val(e("days")) || "[]", S = this.toBool(this.val(e("silent-active"))), D = this.val(e("silent-rules")) || "[]", $ = `editDev${i}Priority`, g = `editDev${i}PowerMin`, v = `editDev${i}PowerMax`, h = `showTimeModal${i}`, p = this.state[$], z = this.state[g], M = this.state[v], A = this.state[h], I = p !== null ? p : l, N = z !== null ? z : m, U = M !== null ? M : u, G = u > 0 ? Math.min(100, x / u * 100) : 0, H = oe(a), W = {
        width: 65,
        padding: "3px 6px",
        fontSize: 12,
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: 5,
        background: "transparent",
        color: "#111",
        textAlign: "right"
      }, X = {
        ...W,
        width: 40,
        fontSize: 11
      }, Z = {
        ...W,
        width: 70,
        fontSize: 11,
        textAlign: "center"
      }, Y = de(c, d, f, b);
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
              background: H,
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
                      background: y ? "#2ec27e" : "rgba(0,0,0,0.2)",
                      boxShadow: y ? "0 0 6px rgba(46,194,126,0.5)" : "none",
                      flexShrink: 0
                    }
                  }),
                  t.jsx("div", {
                    style: {
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#111"
                    },
                    children: o
                  })
                ]
              }),
              t.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 6
                },
                children: [
                  t.jsx("span", {
                    style: {
                      fontSize: 11,
                      color: "#555"
                    },
                    children: "P"
                  }),
                  t.jsx("input", {
                    type: "number",
                    min: 1,
                    max: 99,
                    value: I,
                    onChange: (_) => this.setState({
                      [$]: Number(_.target.value)
                    }),
                    onBlur: () => {
                      p !== null && (this.setVal(e("priority"), p), this.setState({
                        [$]: null
                      }));
                    },
                    style: {
                      width: 32,
                      padding: "2px 4px",
                      fontSize: 12,
                      border: "1px solid rgba(0,0,0,0.15)",
                      borderRadius: 5,
                      background: "transparent",
                      color: "#111",
                      textAlign: "center"
                    }
                  }),
                  t.jsx("div", {
                    onClick: () => this.setState({
                      [h]: true
                    }),
                    style: {
                      width: 28,
                      height: 28,
                      borderRadius: 6,
                      background: "rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: 14,
                      flexShrink: 0
                    },
                    title: n("em_time_rules") || "Zeitfenster",
                    children: "\u{1F4C5}"
                  })
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
                    children: n("em_dev_power") || "Leistung"
                  }),
                  t.jsxs("span", {
                    style: {
                      fontWeight: 600,
                      color: "#111"
                    },
                    children: [
                      C(x),
                      " / ",
                      C(u)
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
                    width: `${G}%`,
                    height: "100%",
                    background: y ? "linear-gradient(90deg, #2ec27e, #2ec27ecc)" : "rgba(0,0,0,0.15)",
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
                children: n("em_dev_mode") || "Modus"
              }),
              t.jsxs(Q, {
                value: a,
                size: "small",
                onChange: (_) => this.setVal(e("mode"), _.target.value),
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
                  t.jsx(R, {
                    value: "auto",
                    children: n("em_mode_auto") || "Auto"
                  }),
                  t.jsx(R, {
                    value: "manual_on",
                    children: n("em_mode_manual_on") || "Manuell EIN"
                  }),
                  t.jsx(R, {
                    value: "manual_off",
                    children: n("em_mode_manual_off") || "Manuell AUS"
                  }),
                  t.jsx(R, {
                    value: "disabled",
                    children: n("em_mode_disabled") || "Deaktiviert"
                  })
                ]
              })
            ]
          }),
          t.jsx("div", {
            style: {
              padding: "0 14px 8px"
            },
            children: t.jsx(pe, {
              on: j,
              label: n("em_holiday_blocked") || "Urlaub-Sperre",
              onClick: () => this.setVal(e("holiday-blocked"), !j)
            })
          }),
          t.jsxs("div", {
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
                  n("em_time_rules") || "Zeitfenster",
                  ":"
                ]
              }),
              t.jsx("span", {
                style: {
                  flex: 1
                },
                children: Y
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
                  background: S ? "rgba(139,92,246,0.15)" : "rgba(0,0,0,0.06)",
                  color: S ? "#8b5cf6" : "#777",
                  fontWeight: 600
                },
                children: S ? "aktiv" : "aus"
              }),
              t.jsx("span", {
                style: {
                  fontSize: 10,
                  color: "#555",
                  marginLeft: "auto"
                },
                children: re(D)
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
                    children: "Min"
                  }),
                  t.jsx("input", {
                    type: "number",
                    min: 0,
                    step: 50,
                    value: N,
                    onChange: (_) => this.setState({
                      [g]: Number(_.target.value)
                    }),
                    onBlur: () => {
                      z !== null && (this.setVal(e("power-min"), z), this.setState({
                        [g]: null
                      }));
                    },
                    style: W
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
                    value: U,
                    onChange: (_) => this.setState({
                      [v]: Number(_.target.value)
                    }),
                    onBlur: () => {
                      M !== null && (this.setVal(e("power-max"), M), this.setState({
                        [v]: null
                      }));
                    },
                    style: W
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
          this.renderDeviceSettings(i, e, X, Z),
          A && t.jsx(me, {
            rules: this.getTimeRulesForDevice(i),
            excludeHolidays: this.toBool(this.val(e("excl-holidays"))),
            onSave: (_, q) => {
              this.setVal(e("time-rules"), JSON.stringify(_)), this.setVal(e("excl-holidays"), q), this.setState({
                [h]: false
              });
            },
            onCancel: () => this.setState({
              [h]: false
            })
          }),
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
                children: w
              }),
              r > 0 && t.jsxs("div", {
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
                  r,
                  " notif"
                ]
              })
            ]
          })
        ]
      }, i);
    }
    renderDeviceSettings(i, e, o, a) {
      const l = Number(this.val(e("min-soc"))) || 0, m = Number(this.val(e("soc-off"))) || 0, u = Number(this.val(e("surplus-on"))) || 0, y = Number(this.val(e("surplus-off"))) || 0, x = Number(this.val(e("avg-min"))) || 0;
      this.toBool(this.val(e("excl-holidays")));
      const w = Number(this.val(e("min-runtime"))) || 0, j = Number(this.val(e("min-pause"))) || 0, r = this.toBool(this.val(e("notify"))), c = Number(this.val(e("max-notif"))) || 0, d = this.toBool(this.val(e("fc-enabled"))), f = this.val(e("fc-start")) || "", b = this.val(e("fc-end")) || "", S = Number(this.val(e("fc-min-soc"))) || 0, D = this.toBool(this.val(e("dis-holiday"))), $ = Number(this.val(e("hol-pre-days"))) || 0, g = {
        padding: "6px 14px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 8,
        borderTop: "1px solid rgba(0,0,0,0.06)"
      }, v = {
        fontSize: 10,
        fontWeight: 700,
        color: "#555",
        textTransform: "uppercase",
        letterSpacing: "0.03em",
        width: "100%",
        marginBottom: 2
      }, h = (p, z, M, A = 50, I = 1) => t.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 3
        },
        children: [
          t.jsx("input", {
            type: "number",
            value: p,
            step: I,
            onChange: (N) => this.setVal(e(z), Number(N.target.value)),
            style: {
              ...o,
              width: A
            }
          }),
          t.jsx("span", {
            style: {
              fontSize: 10,
              color: "#555"
            },
            children: M
          })
        ]
      });
      return t.jsxs("div", {
        style: {
          background: "rgba(0,0,0,0.02)",
          borderTop: "1px solid rgba(0,0,0,0.08)"
        },
        children: [
          t.jsxs("div", {
            style: g,
            children: [
              t.jsx("div", {
                style: v,
                children: n("em_soc_thresholds") || "SOC & Schwellen"
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_min_soc") || "Min SOC"
              }),
              h(l, "min-soc", "%", 35),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_soc_off") || "SOC Aus"
              }),
              h(m, "soc-off", "%", 35),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_avg_min") || "\xD8"
              }),
              h(x, "avg-min", "min", 30)
            ]
          }),
          t.jsxs("div", {
            style: {
              ...g,
              borderTop: "none",
              paddingTop: 0
            },
            children: [
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_surplus_on") || "Einsch."
              }),
              h(u, "surplus-on", "W", 45),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_surplus_off") || "Aussch."
              }),
              h(y, "surplus-off", "W", 45)
            ]
          }),
          t.jsxs("div", {
            style: g,
            children: [
              t.jsx("div", {
                style: v,
                children: n("em_runtimes") || "Laufzeiten"
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_min_runtime") || "Min. Lauf"
              }),
              h(w, "min-runtime", "min"),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_min_pause") || "Min. Pause"
              }),
              h(j, "min-pause", "min")
            ]
          }),
          t.jsxs("div", {
            style: g,
            children: [
              t.jsx("div", {
                style: v,
                children: n("em_notifications") || "Benachrichtigungen"
              }),
              t.jsx(E, {
                checked: r,
                label: n("em_notify_active") || "Aktiv",
                onChange: (p) => this.setVal(e("notify"), p)
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_max_notif") || "Max/Tag"
              }),
              h(c, "max-notif", "", 40)
            ]
          }),
          t.jsxs("div", {
            style: g,
            children: [
              t.jsx("div", {
                style: v,
                children: n("em_forecast") || "Forecast"
              }),
              t.jsx(E, {
                checked: d,
                label: n("em_fc_preheat") || "Vorheizen",
                onChange: (p) => this.setVal(e("fc-enabled"), p)
              }),
              t.jsx("input", {
                type: "time",
                value: f,
                onChange: (p) => this.setVal(e("fc-start"), p.target.value),
                style: a
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
                value: b,
                onChange: (p) => this.setVal(e("fc-end"), p.target.value),
                style: a
              })
            ]
          }),
          t.jsxs("div", {
            style: {
              ...g,
              borderTop: "none",
              paddingTop: 0
            },
            children: [
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_fc_min_soc") || "Vorheiz SOC"
              }),
              h(S, "fc-min-soc", "%", 40)
            ]
          }),
          t.jsxs("div", {
            style: g,
            children: [
              t.jsx("div", {
                style: v,
                children: n("em_holiday_settings") || "Urlaub"
              }),
              t.jsx(E, {
                checked: D,
                label: n("em_dis_holiday") || "Im Urlaub aus",
                onChange: (p) => this.setVal(e("dis-holiday"), p)
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_hol_pre_days") || "Vorlauf"
              }),
              h($, "hol-pre-days", n("em_holiday_days_label") || "Tage", 40)
            ]
          })
        ]
      });
    }
    renderWidgetBody(i) {
      super.renderWidgetBody(i), this.state.rxData.widgetTitle;
      const e = parseFloat(this.val("oid-surplus-current")) || 0, o = parseFloat(this.val("oid-surplus-avg")) || 0, a = parseFloat(this.val("oid-pv-power")) || 0, l = parseFloat(this.val("oid-battery-soc")) || 0, m = parseFloat(this.val("oid-forecast-today")) || 0, u = parseFloat(this.val("oid-managed-power")) || 0, y = this.val("oid-active-devices") || "", x = parseFloat(this.val("oid-ww-temp-bottom")), w = parseFloat(this.val("oid-ww-temp-top"));
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
              t.jsx(T, {
                label: n("em_pv_power") || "PV-Leistung",
                value: C(a),
                color: "#f5a623"
              }),
              t.jsx(T, {
                label: e >= 0 ? n("em_grid_feed") || "Einspeisung" : n("em_grid_draw") || "Netzbezug",
                value: C(Math.abs(e)),
                color: ne(e),
                sub: `\xD830min: ${C(o)}`
              }),
              t.jsx(T, {
                label: n("em_battery_soc") || "Batterie",
                value: `${Math.round(l)}`,
                unit: "%",
                color: ae(l)
              }),
              t.jsx(T, {
                label: n("em_forecast_today") || "Prognose",
                value: `${m.toFixed(1)}`,
                unit: "kWh",
                color: "#4a9edd"
              }),
              t.jsx(T, {
                label: n("em_managed_power") || "Gesteuert",
                value: C(u),
                color: "#8b5cf6",
                sub: y || n("em_no_devices") || "Keine"
              }),
              t.jsx(O, {
                label: n("em_ww_temp_top") || "Warmwasser oben",
                temp: w
              }),
              t.jsx(O, {
                label: n("em_ww_temp_bottom") || "Warmwasser unten",
                temp: x
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
