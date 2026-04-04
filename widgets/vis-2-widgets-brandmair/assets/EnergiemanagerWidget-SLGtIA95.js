import { j as t, __tla as __tla_0 } from "./jsx-runtime-LXN0Dejw.js";
import { b as F, __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-Cq4bBQs0.js";
import { a as ee, b as k, __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare___mf_0_mui_mf_1_material__loadShare__.js-DEdXGH34.js";
import { G as te } from "./Generic-CM5BSTAz.js";
import { t as n } from "./tr-miy5TWOP.js";
import { __tla as __tla_3 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-Dkt6rraE.js";
let G;
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
  const ie = {
    1: "heizstab_warmwasser",
    2: "luftentfeuchter_keller",
    3: "pool_wp"
  }, se = [
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
  ], O = [
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
    const i = ie[s], e = `oid-dev${s}`;
    O.push([
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
    for (const [a, l] of se) O.push([
      `${e}-${a}`,
      `${i}.${l}`
    ]);
  }
  function ne(s) {
    return isNaN(s) ? "#777" : s < 30 ? "#4a9edd" : s < 45 ? "#f5a623" : "#e8622a";
  }
  function le(s) {
    return s >= 0 ? "#2ec27e" : "#e8622a";
  }
  function oe(s) {
    return s < 20 ? "#e8622a" : s < 50 ? "#f5a623" : "#2ec27e";
  }
  function ae(s) {
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
  function D(s) {
    return Math.abs(s) >= 1e3 ? `${(s / 1e3).toFixed(1)} kW` : `${Math.round(s)} W`;
  }
  const W = [
    "",
    "Mo",
    "Di",
    "Mi",
    "Do",
    "Fr",
    "Sa",
    "So"
  ], re = [
    "",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag"
  ];
  function de(s) {
    try {
      return JSON.parse(s);
    } catch {
      return [];
    }
  }
  function ce(s) {
    try {
      return JSON.parse(s).filter((e) => e.silent).map((e) => {
        const a = e.days.map((l) => W[l] || l).join(",");
        return e.before ? `${a} <${e.before}` : a;
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
  function pe(s, i, e, a) {
    let l = L(s);
    if (l.length === 0 && (i || e)) {
      const r = P(a);
      r.length > 0 && (i || e) && (l = [
        {
          days: r,
          start: i || "00:00",
          end: e || "23:59"
        }
      ]);
    }
    return l.length === 0 ? "\u2013" : l.map((r) => `${me(r.days)} ${r.start}-${r.end}`).join(" | ");
  }
  function me(s) {
    if (s.length === 0) return "";
    const i = [
      ...s
    ].sort((r, u) => r - u), e = [];
    let a = i[0], l = i[0];
    for (let r = 1; r <= i.length; r++) r < i.length && i[r] === l + 1 ? l = i[r] : (a === l ? e.push(W[a]) : e.push(`${W[a]}-${W[l]}`), r < i.length && (a = i[r], l = i[r]));
    return e.join(",");
  }
  const J = "0 0 3px rgba(0,0,0,0.6), 0 0 6px rgba(0,0,0,0.3)";
  function R({ label: s, value: i, unit: e, color: a, sub: l }) {
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
            color: a || "#111",
            textShadow: a ? J : "none"
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
  function V({ label: s, temp: i }) {
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
            color: ne(i),
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
  function he({ on: s, label: i, onClick: e }) {
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
  function B({ checked: s, label: i, onChange: e }) {
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
          onChange: (a) => e(a.target.checked),
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
  function ue({ rules: s, silentRules: i, excludeHolidays: e, onSave: a, onCancel: l }) {
    const r = () => {
      const o = [];
      for (let p = 1; p <= 7; p++) {
        const d = s.find((c) => c.days.includes(p)), _ = i.find((c) => c.days.includes(p));
        o.push({
          day: p,
          active: !!d,
          start: d ? d.start : "08:00",
          end: d ? d.end : "20:00",
          silent: _ ? _.silent : false,
          silentBefore: _ && _.before ? _.before : ""
        });
      }
      return o;
    }, [u, b] = F.useState(r), [g, j] = F.useState(e), v = (o, p, d) => {
      b((_) => {
        const c = [
          ..._
        ];
        return c[o] = {
          ...c[o],
          [p]: d
        }, c;
      });
    }, z = () => {
      const o = {};
      for (const c of u) {
        if (!c.active) continue;
        const y = `${c.start}|${c.end}`;
        o[y] || (o[y] = []), o[y].push(c.day);
      }
      const p = Object.entries(o).map(([c, y]) => {
        const [S, f] = c.split("|");
        return {
          days: y.sort((x, m) => x - m),
          start: S,
          end: f
        };
      }), d = {};
      for (const c of u) {
        const y = `${c.silent}|${c.silentBefore}`;
        d[y] || (d[y] = []), d[y].push(c.day);
      }
      const _ = Object.entries(d).map(([c, y]) => {
        const [S, f] = c.split("|"), x = {
          days: y.sort((m, h) => m - h),
          silent: S === "true"
        };
        return f && (x.before = f), x;
      });
      a(p, _, g);
    }, $ = {
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
      onClick: (o) => {
        o.target === o.currentTarget && l();
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
          minWidth: 380,
          maxWidth: 560,
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          color: "#111",
          maxHeight: "90vh",
          overflow: "auto"
        },
        children: [
          t.jsxs("div", {
            style: {
              fontSize: 16,
              fontWeight: 700,
              marginBottom: 16,
              color: "#111"
            },
            children: [
              n("em_time_rules") || "Zeitfenster",
              " & Silent"
            ]
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
                        fontSize: 11,
                        color: "#555",
                        padding: "4px 4px"
                      },
                      children: "Tag"
                    }),
                    t.jsx("th", {
                      style: {
                        textAlign: "center",
                        fontSize: 11,
                        color: "#555",
                        padding: "4px 4px"
                      },
                      children: "Aktiv"
                    }),
                    t.jsx("th", {
                      style: {
                        textAlign: "center",
                        fontSize: 11,
                        color: "#555",
                        padding: "4px 4px"
                      },
                      children: "Start"
                    }),
                    t.jsx("th", {
                      style: {
                        textAlign: "center",
                        fontSize: 11,
                        color: "#555",
                        padding: "4px 4px"
                      },
                      children: "Ende"
                    }),
                    t.jsx("th", {
                      style: {
                        textAlign: "center",
                        fontSize: 11,
                        color: "#8b5cf6",
                        padding: "4px 4px"
                      },
                      children: "Silent"
                    }),
                    t.jsx("th", {
                      style: {
                        textAlign: "center",
                        fontSize: 11,
                        color: "#8b5cf6",
                        padding: "4px 4px"
                      },
                      children: "bis"
                    })
                  ]
                })
              }),
              t.jsx("tbody", {
                children: u.map((o, p) => t.jsxs("tr", {
                  style: {
                    borderTop: "1px solid rgba(0,0,0,0.08)",
                    opacity: o.active ? 1 : 0.4
                  },
                  children: [
                    t.jsx("td", {
                      style: {
                        padding: "4px",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#333"
                      },
                      children: re[o.day]
                    }),
                    t.jsx("td", {
                      style: {
                        padding: "4px",
                        textAlign: "center"
                      },
                      children: t.jsx("input", {
                        type: "checkbox",
                        checked: o.active,
                        onChange: (d) => v(p, "active", d.target.checked),
                        style: {
                          width: 16,
                          height: 16
                        }
                      })
                    }),
                    t.jsx("td", {
                      style: {
                        padding: "4px",
                        textAlign: "center"
                      },
                      children: t.jsx("input", {
                        type: "time",
                        value: o.start,
                        disabled: !o.active,
                        onChange: (d) => v(p, "start", d.target.value),
                        style: {
                          ...$,
                          width: 75,
                          opacity: o.active ? 1 : 0.3
                        }
                      })
                    }),
                    t.jsx("td", {
                      style: {
                        padding: "4px",
                        textAlign: "center"
                      },
                      children: t.jsx("input", {
                        type: "time",
                        value: o.end,
                        disabled: !o.active,
                        onChange: (d) => v(p, "end", d.target.value),
                        style: {
                          ...$,
                          width: 75,
                          opacity: o.active ? 1 : 0.3
                        }
                      })
                    }),
                    t.jsx("td", {
                      style: {
                        padding: "4px",
                        textAlign: "center"
                      },
                      children: t.jsx("input", {
                        type: "checkbox",
                        checked: o.silent,
                        onChange: (d) => v(p, "silent", d.target.checked),
                        style: {
                          width: 16,
                          height: 16,
                          accentColor: "#8b5cf6"
                        }
                      })
                    }),
                    t.jsx("td", {
                      style: {
                        padding: "4px",
                        textAlign: "center"
                      },
                      children: t.jsx("input", {
                        type: "time",
                        value: o.silentBefore,
                        disabled: !o.silent,
                        onChange: (d) => v(p, "silentBefore", d.target.value),
                        style: {
                          ...$,
                          width: 75,
                          opacity: o.silent ? 1 : 0.3
                        }
                      })
                    })
                  ]
                }, o.day))
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
                checked: g,
                onChange: (o) => j(o.target.checked),
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
                onClick: l,
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
                onClick: z,
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
  function E(s, i) {
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
  G = class extends te {
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
                onChange: async (i, e, a) => {
                  const l = e["oid-base"];
                  if (l) {
                    for (const [r, u] of O) e[r] = `${l}.${u}`;
                    a(e);
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
            fields: E(1, "em_dev")
          },
          {
            name: "device2",
            label: "em_group_device2",
            fields: E(2, "em_dev")
          },
          {
            name: "device3",
            label: "em_group_device3",
            fields: E(3, "em_dev")
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
      return G.getWidgetInfo();
    }
    val(i) {
      const e = this.state.rxData[i];
      if (e) return this.state.values[`${e}.val`];
    }
    setVal(i, e) {
      const a = this.state.rxData[i];
      if (!a) return;
      const l = JSON.parse(JSON.stringify(this.state.values));
      l[`${a}.val`] = e, this.setState({
        values: l
      }), this.props.context.setValue(a, e);
    }
    toBool(i) {
      return i === true || i === "true";
    }
    getTimeRulesForDevice(i) {
      const e = (j) => `oid-dev${i}-${j}`, a = this.val(e("time-rules")) || "", l = L(a);
      if (l.length > 0) return l;
      const r = this.val(e("time-start")) || "", u = this.val(e("time-end")) || "", b = this.val(e("days")) || "[]", g = P(b);
      return g.length > 0 && (r || u) ? [
        {
          days: g,
          start: r || "00:00",
          end: u || "23:59"
        }
      ] : [];
    }
    renderDevice(i) {
      const e = (w) => `oid-dev${i}-${w}`, a = this.val(e("name")) || `Ger\xE4t ${i}`, l = this.val(e("mode")) || "auto", r = Number(this.val(e("priority"))) || 1, u = Number(this.val(e("power-min"))) || 0, b = Number(this.val(e("power-max"))) || 0;
      this.toBool(this.val(e("is-dimmable")));
      const g = this.toBool(this.val(e("is-on"))), j = Number(this.val(e("power"))) || 0, v = this.val(e("last-action")) || "\u2013", z = this.toBool(this.val(e("holiday-blocked"))), $ = Number(this.val(e("notif-today"))) || 0, o = this.val(e("time-rules")) || "", p = this.val(e("time-start")) || "", d = this.val(e("time-end")) || "", _ = this.val(e("days")) || "[]", c = this.toBool(this.val(e("silent-active"))), y = this.val(e("silent-rules")) || "[]", S = `editDev${i}Priority`, f = `editDev${i}PowerMin`, x = `editDev${i}PowerMax`, m = `showTimeModal${i}`, h = this.state[S], M = this.state[f], C = this.state[x], A = this.state[m], I = h !== null ? h : r, N = M !== null ? M : u, H = C !== null ? C : b, K = b > 0 ? Math.min(100, j / b * 100) : 0, U = ae(l), T = {
        width: 65,
        padding: "3px 6px",
        fontSize: 12,
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: 5,
        background: "transparent",
        color: "#111",
        textAlign: "right"
      }, X = {
        ...T,
        width: 40,
        fontSize: 11
      }, Z = {
        ...T,
        width: 70,
        fontSize: 11,
        textAlign: "center"
      }, Y = pe(o, p, d, _);
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
              background: U,
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
                      background: g ? "#2ec27e" : "rgba(0,0,0,0.2)",
                      boxShadow: g ? "0 0 6px rgba(46,194,126,0.5)" : "none",
                      flexShrink: 0
                    }
                  }),
                  t.jsx("div", {
                    style: {
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#111"
                    },
                    children: a
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
                    children: "Prio"
                  }),
                  t.jsx("input", {
                    type: "number",
                    min: 1,
                    max: 99,
                    value: I,
                    onChange: (w) => this.setState({
                      [S]: Number(w.target.value)
                    }),
                    onBlur: () => {
                      h !== null && (this.setVal(e("priority"), h), this.setState({
                        [S]: null
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
                      [m]: true
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
                      D(j),
                      " / ",
                      D(b)
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
                    width: `${K}%`,
                    height: "100%",
                    background: g ? "linear-gradient(90deg, #2ec27e, #2ec27ecc)" : "rgba(0,0,0,0.15)",
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
              t.jsxs(ee, {
                value: l,
                size: "small",
                onChange: (w) => this.setVal(e("mode"), w.target.value),
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
                    children: n("em_mode_auto") || "Auto"
                  }),
                  t.jsx(k, {
                    value: "manual_on",
                    children: n("em_mode_manual_on") || "Manuell EIN"
                  }),
                  t.jsx(k, {
                    value: "manual_off",
                    children: n("em_mode_manual_off") || "Manuell AUS"
                  }),
                  t.jsx(k, {
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
            children: t.jsx(he, {
              on: z,
              label: n("em_holiday_blocked") || "Urlaub-Sperre",
              onClick: () => this.setVal(e("holiday-blocked"), !z)
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
                  background: c ? "rgba(139,92,246,0.15)" : "rgba(0,0,0,0.06)",
                  color: c ? "#8b5cf6" : "#777",
                  fontWeight: 600
                },
                children: c ? "aktiv" : "aus"
              }),
              t.jsx("span", {
                style: {
                  fontSize: 10,
                  color: "#555",
                  marginLeft: "auto"
                },
                children: ce(y)
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
                    onChange: (w) => this.setState({
                      [f]: Number(w.target.value)
                    }),
                    onBlur: () => {
                      M !== null && (this.setVal(e("power-min"), M), this.setState({
                        [f]: null
                      }));
                    },
                    style: T
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
                    value: H,
                    onChange: (w) => this.setState({
                      [x]: Number(w.target.value)
                    }),
                    onBlur: () => {
                      C !== null && (this.setVal(e("power-max"), C), this.setState({
                        [x]: null
                      }));
                    },
                    style: T
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
          A && t.jsx(ue, {
            rules: this.getTimeRulesForDevice(i),
            silentRules: de(this.val(e("silent-rules")) || "[]"),
            excludeHolidays: this.toBool(this.val(e("excl-holidays"))),
            onSave: (w, q, Q) => {
              this.setVal(e("time-rules"), JSON.stringify(w)), this.setVal(e("silent-rules"), JSON.stringify(q)), this.setVal(e("excl-holidays"), Q), this.setState({
                [m]: false
              });
            },
            onCancel: () => this.setState({
              [m]: false
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
                children: v
              }),
              $ > 0 && t.jsxs("div", {
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
                  $,
                  " notif"
                ]
              })
            ]
          })
        ]
      }, i);
    }
    renderDeviceSettings(i, e, a, l) {
      const r = Number(this.val(e("min-soc"))) || 0, u = Number(this.val(e("soc-off"))) || 0, b = Number(this.val(e("surplus-on"))) || 0, g = Number(this.val(e("surplus-off"))) || 0, j = Number(this.val(e("avg-min"))) || 0;
      this.toBool(this.val(e("excl-holidays")));
      const v = Number(this.val(e("min-runtime"))) || 0, z = Number(this.val(e("min-pause"))) || 0, $ = this.toBool(this.val(e("notify"))), o = Number(this.val(e("max-notif"))) || 0, p = this.toBool(this.val(e("fc-enabled"))), d = this.val(e("fc-start")) || "", _ = this.val(e("fc-end")) || "", c = Number(this.val(e("fc-min-soc"))) || 0, y = this.toBool(this.val(e("dis-holiday"))), S = Number(this.val(e("hol-pre-days"))) || 0, f = {
        padding: "6px 14px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 8,
        borderTop: "1px solid rgba(0,0,0,0.06)"
      }, x = {
        fontSize: 10,
        fontWeight: 700,
        color: "#555",
        textTransform: "uppercase",
        letterSpacing: "0.03em",
        width: "100%",
        marginBottom: 2
      }, m = (h, M, C, A = 50, I = 1) => t.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 3
        },
        children: [
          t.jsx("input", {
            type: "number",
            value: h,
            step: I,
            onChange: (N) => this.setVal(e(M), Number(N.target.value)),
            style: {
              ...a,
              width: A
            }
          }),
          t.jsx("span", {
            style: {
              fontSize: 10,
              color: "#555"
            },
            children: C
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
            style: f,
            children: [
              t.jsx("div", {
                style: x,
                children: n("em_soc_thresholds") || "SOC & Schwellen"
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_min_soc") || "Min SOC"
              }),
              m(r, "min-soc", "%", 35),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_soc_off") || "SOC Aus"
              }),
              m(u, "soc-off", "%", 35),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_avg_min") || "\xD8"
              }),
              m(j, "avg-min", "min", 30)
            ]
          }),
          t.jsxs("div", {
            style: {
              ...f,
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
              m(b, "surplus-on", "W", 45),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_surplus_off") || "Aussch."
              }),
              m(g, "surplus-off", "W", 45)
            ]
          }),
          t.jsxs("div", {
            style: f,
            children: [
              t.jsx("div", {
                style: x,
                children: n("em_runtimes") || "Laufzeiten"
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_min_runtime") || "Min. Lauf"
              }),
              m(v, "min-runtime", "min"),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_min_pause") || "Min. Pause"
              }),
              m(z, "min-pause", "min")
            ]
          }),
          t.jsxs("div", {
            style: f,
            children: [
              t.jsx("div", {
                style: x,
                children: n("em_notifications") || "Benachrichtigungen"
              }),
              t.jsx(B, {
                checked: $,
                label: n("em_notify_active") || "Aktiv",
                onChange: (h) => this.setVal(e("notify"), h)
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_max_notif") || "Max/Tag"
              }),
              m(o, "max-notif", "", 40)
            ]
          }),
          t.jsxs("div", {
            style: f,
            children: [
              t.jsx("div", {
                style: x,
                children: n("em_forecast") || "Forecast"
              }),
              t.jsx(B, {
                checked: p,
                label: n("em_fc_preheat") || "Vorheizen",
                onChange: (h) => this.setVal(e("fc-enabled"), h)
              }),
              t.jsx("input", {
                type: "time",
                value: d,
                onChange: (h) => this.setVal(e("fc-start"), h.target.value),
                style: l
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
                value: _,
                onChange: (h) => this.setVal(e("fc-end"), h.target.value),
                style: l
              })
            ]
          }),
          t.jsxs("div", {
            style: {
              ...f,
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
              m(c, "fc-min-soc", "%", 40)
            ]
          }),
          t.jsxs("div", {
            style: f,
            children: [
              t.jsx("div", {
                style: x,
                children: n("em_holiday_settings") || "Urlaub"
              }),
              t.jsx(B, {
                checked: y,
                label: n("em_dis_holiday") || "Im Urlaub aus",
                onChange: (h) => this.setVal(e("dis-holiday"), h)
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: n("em_hol_pre_days") || "Vorlauf"
              }),
              m(S, "hol-pre-days", n("em_holiday_days_label") || "Tage", 40)
            ]
          })
        ]
      });
    }
    renderWidgetBody(i) {
      super.renderWidgetBody(i), this.state.rxData.widgetTitle;
      const e = parseFloat(this.val("oid-surplus-current")) || 0, a = parseFloat(this.val("oid-surplus-avg")) || 0, l = parseFloat(this.val("oid-pv-power")) || 0, r = parseFloat(this.val("oid-battery-soc")) || 0, u = parseFloat(this.val("oid-forecast-today")) || 0, b = parseFloat(this.val("oid-managed-power")) || 0, g = this.val("oid-active-devices") || "", j = parseFloat(this.val("oid-ww-temp-bottom")), v = parseFloat(this.val("oid-ww-temp-top"));
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
              t.jsx(R, {
                label: n("em_pv_power") || "PV-Leistung",
                value: D(l),
                color: "#f5a623"
              }),
              t.jsx(R, {
                label: e >= 0 ? n("em_grid_feed") || "Einspeisung" : n("em_grid_draw") || "Netzbezug",
                value: D(Math.abs(e)),
                color: le(e),
                sub: `\xD830min: ${D(a)}`
              }),
              t.jsx(R, {
                label: n("em_battery_soc") || "Batterie",
                value: `${Math.round(r)}`,
                unit: "%",
                color: oe(r)
              }),
              t.jsx(R, {
                label: n("em_forecast_today") || "Prognose",
                value: `${u.toFixed(1)}`,
                unit: "kWh",
                color: "#4a9edd"
              }),
              t.jsx(R, {
                label: n("em_managed_power") || "Gesteuert",
                value: D(b),
                color: "#8b5cf6",
                sub: g || n("em_no_devices") || "Keine"
              }),
              t.jsx(V, {
                label: n("em_ww_temp_top") || "Warmwasser oben",
                temp: v
              }),
              t.jsx(V, {
                label: n("em_ww_temp_bottom") || "Warmwasser unten",
                temp: j
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
  G as default
};
