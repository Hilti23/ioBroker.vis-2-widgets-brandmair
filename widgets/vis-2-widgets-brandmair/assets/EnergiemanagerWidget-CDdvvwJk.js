import { j as t, __tla as __tla_0 } from "./jsx-runtime-LXN0Dejw.js";
import { b as V, __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-Cq4bBQs0.js";
import { a as te, b as R, __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare___mf_0_mui_mf_1_material__loadShare__.js-DEdXGH34.js";
import { G as ie } from "./Generic-CM5BSTAz.js";
import { t as s } from "./tr-atxHVmGA.js";
import { __tla as __tla_3 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-Dkt6rraE.js";
let H;
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
  const se = {
    1: "heizstab_warmwasser",
    2: "luftentfeuchter_keller",
    3: "pool_wp"
  }, ne = [
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
  ], I = [
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
  for (let n = 1; n <= 3; n++) {
    const i = se[n], e = `oid-dev${n}`;
    I.push([
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
    for (const [a, l] of ne) I.push([
      `${e}-${a}`,
      `${i}.${l}`
    ]);
  }
  I.push([
    "oid-dev1-temp-max-top",
    "heizstab_warmwasser.temp_max_top"
  ], [
    "oid-dev1-temp-restart",
    "heizstab_warmwasser.temp_restart"
  ], [
    "oid-dev1-temp-blocked",
    "heizstab_warmwasser.temp_blocked"
  ]);
  function A(n) {
    return isNaN(n) ? "#777" : n < 30 ? "#4a9edd" : n < 45 ? "#f5a623" : "#e8622a";
  }
  function oe(n) {
    return n >= 0 ? "#2ec27e" : "#e8622a";
  }
  function ae(n) {
    return n < 20 ? "#e8622a" : n < 50 ? "#f5a623" : "#2ec27e";
  }
  function le(n) {
    switch (n) {
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
  function W(n) {
    return Math.abs(n) >= 1e3 ? `${(n / 1e3).toFixed(1)} kW` : `${Math.round(n)} W`;
  }
  const N = [
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
  function de(n) {
    try {
      return JSON.parse(n);
    } catch {
      return [];
    }
  }
  function ce(n) {
    try {
      return JSON.parse(n).filter((e) => e.silent).map((e) => {
        const a = e.days.map((l) => N[l] || l).join(",");
        return e.before ? `${a} <${e.before}` : a;
      }).join(" | ") || "\u2013";
    } catch {
      return "\u2013";
    }
  }
  function L(n) {
    try {
      const i = JSON.parse(n);
      if (Array.isArray(i)) return i;
    } catch {
    }
    return [];
  }
  function J(n) {
    try {
      const i = JSON.parse(n);
      if (Array.isArray(i)) return i;
    } catch {
    }
    return [];
  }
  function pe(n, i, e, a) {
    let l = J(n);
    if (l.length === 0 && (i || e)) {
      const r = L(a);
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
  function me(n) {
    if (n.length === 0) return "";
    const i = [
      ...n
    ].sort((r, u) => r - u), e = [];
    let a = i[0], l = i[0];
    for (let r = 1; r <= i.length; r++) r < i.length && i[r] === l + 1 ? l = i[r] : (a === l ? e.push(N[a]) : e.push(`${N[a]}-${N[l]}`), r < i.length && (a = i[r], l = i[r]));
    return e.join(",");
  }
  const G = "0 0 3px rgba(0,0,0,0.6), 0 0 6px rgba(0,0,0,0.3)";
  function k({ label: n, value: i, unit: e, color: a, sub: l }) {
    return t.jsxs("div", {
      style: {
        flex: "1 1 0",
        minWidth: 100,
        padding: "6px 10px",
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "center",
        textAlign: "center"
      },
      children: [
        t.jsx("div", {
          style: {
            fontSize: 10,
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "0.04em"
          },
          children: n
        }),
        t.jsxs("div", {
          style: {
            fontSize: 18,
            fontWeight: 700,
            color: a || "#111",
            textShadow: a ? G : "none"
          },
          children: [
            i,
            e && t.jsx("span", {
              style: {
                fontSize: 11,
                fontWeight: 400,
                marginLeft: 2,
                color: "#333",
                textShadow: "none"
              },
              children: e
            })
          ]
        }),
        l && t.jsx("div", {
          style: {
            fontSize: 10,
            color: "#555"
          },
          children: l
        })
      ]
    });
  }
  function D({ label: n, value: i, unit: e, color: a }) {
    return t.jsxs("div", {
      style: {
        flex: "1 1 0",
        minWidth: 100,
        padding: "6px 10px",
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "center",
        textAlign: "center"
      },
      children: [
        t.jsx("div", {
          style: {
            fontSize: 10,
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "0.04em"
          },
          children: n
        }),
        t.jsxs("div", {
          style: {
            fontSize: 18,
            fontWeight: 700,
            color: a || "#111",
            textShadow: a ? G : "none"
          },
          children: [
            i,
            t.jsx("span", {
              style: {
                fontSize: 11,
                fontWeight: 400,
                marginLeft: 2,
                color: "#333",
                textShadow: "none"
              },
              children: e
            })
          ]
        })
      ]
    });
  }
  function O({ checked: n, label: i, onChange: e }) {
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
          checked: n,
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
  function he({ rules: n, silentRules: i, excludeHolidays: e, onSave: a, onCancel: l }) {
    const r = () => {
      const o = [];
      for (let h = 1; h <= 7; h++) {
        const d = n.find((c) => c.days.includes(h)), b = i.find((c) => c.days.includes(h));
        o.push({
          day: h,
          active: !!d,
          start: d ? d.start : "08:00",
          end: d ? d.end : "20:00",
          silent: b ? b.silent : false,
          silentBefore: b && b.before ? b.before : ""
        });
      }
      return o;
    }, [u, v] = V.useState(r), [g, w] = V.useState(e), _ = (o, h, d) => {
      v((b) => {
        const c = [
          ...b
        ];
        return c[o] = {
          ...c[o],
          [h]: d
        }, c;
      });
    }, $ = () => {
      const o = {};
      for (const c of u) {
        if (!c.active) continue;
        const y = `${c.start}|${c.end}`;
        o[y] || (o[y] = []), o[y].push(c.day);
      }
      const h = Object.entries(o).map(([c, y]) => {
        const [z, f] = c.split("|");
        return {
          days: y.sort((x, p) => x - p),
          start: z,
          end: f
        };
      }), d = {};
      for (const c of u) {
        const y = `${c.silent}|${c.silentBefore}`;
        d[y] || (d[y] = []), d[y].push(c.day);
      }
      const b = Object.entries(d).map(([c, y]) => {
        const [z, f] = c.split("|"), x = {
          days: y.sort((p, m) => p - m),
          silent: z === "true"
        };
        return f && (x.before = f), x;
      });
      a(h, b, g);
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
              s("em_time_rules") || "Zeitfenster",
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
                children: u.map((o, h) => t.jsxs("tr", {
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
                        onChange: (d) => _(h, "active", d.target.checked),
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
                        onChange: (d) => _(h, "start", d.target.value),
                        style: {
                          ...j,
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
                        onChange: (d) => _(h, "end", d.target.value),
                        style: {
                          ...j,
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
                        onChange: (d) => _(h, "silent", d.target.checked),
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
                        onChange: (d) => _(h, "silentBefore", d.target.value),
                        style: {
                          ...j,
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
                onChange: (o) => w(o.target.checked),
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
                children: s("em_excl_holidays") || "An Feiertagen aus"
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
                children: s("em_time_cancel") || "Abbrechen"
              }),
              t.jsx("button", {
                onClick: $,
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
                children: s("em_time_save") || "Speichern"
              })
            ]
          })
        ]
      })
    });
  }
  function P(n, i) {
    const e = `oid-dev${n}`, a = [
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
    return n === 1 && a.push({
      name: `${e}-temp-max-top`,
      type: "id",
      label: "em_temp_max_top"
    }, {
      name: `${e}-temp-restart`,
      type: "id",
      label: "em_temp_restart"
    }, {
      name: `${e}-temp-blocked`,
      type: "id",
      label: "em_temp_blocked"
    }), a;
  }
  H = class extends ie {
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
                    for (const [r, u] of I) e[r] = `${l}.${u}`;
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
              },
              {
                name: "oid-pool-temp",
                type: "id",
                label: "em_pool_temp"
              },
              {
                name: "oid-outside-temp",
                type: "id",
                label: "em_outside_temp"
              },
              {
                name: "oid-humidity",
                type: "id",
                label: "em_humidity"
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
            fields: P(1, "em_dev")
          },
          {
            name: "device2",
            label: "em_group_device2",
            fields: P(2, "em_dev")
          },
          {
            name: "device3",
            label: "em_group_device3",
            fields: P(3, "em_dev")
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
      return H.getWidgetInfo();
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
      const e = (w) => `oid-dev${i}-${w}`, a = this.val(e("time-rules")) || "", l = J(a);
      if (l.length > 0) return l;
      const r = this.val(e("time-start")) || "", u = this.val(e("time-end")) || "", v = this.val(e("days")) || "[]", g = L(v);
      return g.length > 0 && (r || u) ? [
        {
          days: g,
          start: r || "00:00",
          end: u || "23:59"
        }
      ] : [];
    }
    renderDevice(i) {
      const e = (S) => `oid-dev${i}-${S}`, a = this.val(e("name")) || `Ger\xE4t ${i}`, l = this.val(e("mode")) || "auto", r = Number(this.val(e("priority"))) || 1, u = Number(this.val(e("power-min"))) || 0, v = Number(this.val(e("power-max"))) || 0;
      this.toBool(this.val(e("is-dimmable")));
      const g = this.toBool(this.val(e("is-on"))), w = Number(this.val(e("power"))) || 0, _ = this.val(e("last-action")) || "\u2013", $ = this.toBool(this.val(e("holiday-blocked"))), j = Number(this.val(e("notif-today"))) || 0, o = this.val(e("time-rules")) || "", h = this.val(e("time-start")) || "", d = this.val(e("time-end")) || "", b = this.val(e("days")) || "[]", c = this.toBool(this.val(e("silent-active"))), y = this.val(e("silent-rules")) || "[]", z = `editDev${i}Priority`, f = `editDev${i}PowerMin`, x = `editDev${i}PowerMax`, p = `showTimeModal${i}`, m = this.state[z], M = this.state[f], C = this.state[x], F = this.state[p], B = m !== null ? m : r, E = M !== null ? M : u, K = C !== null ? C : v, U = v > 0 ? Math.min(100, w / v * 100) : 0, Z = le(l), T = {
        width: 65,
        padding: "3px 6px",
        fontSize: 12,
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: 5,
        background: "transparent",
        color: "#111",
        textAlign: "right"
      }, Y = {
        ...T,
        width: 40,
        fontSize: 11
      }, X = {
        ...T,
        width: 70,
        fontSize: 11,
        textAlign: "center"
      }, q = pe(o, h, d, b);
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
              background: Z,
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
                    value: B,
                    onChange: (S) => this.setState({
                      [z]: Number(S.target.value)
                    }),
                    onBlur: () => {
                      m !== null && (this.setVal(e("priority"), m), this.setState({
                        [z]: null
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
                      [p]: true
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
                    title: s("em_time_rules") || "Zeitfenster",
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
                    children: s("em_dev_power") || "Leistung"
                  }),
                  t.jsxs("span", {
                    style: {
                      fontWeight: 600,
                      color: "#111"
                    },
                    children: [
                      W(w),
                      " / ",
                      W(v)
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
                    width: `${U}%`,
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
                children: s("em_dev_mode") || "Modus"
              }),
              t.jsxs(te, {
                value: l,
                size: "small",
                onChange: (S) => this.setVal(e("mode"), S.target.value),
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
                    children: s("em_mode_auto") || "Auto"
                  }),
                  t.jsx(R, {
                    value: "manual_on",
                    children: s("em_mode_manual_on") || "Manuell EIN"
                  }),
                  t.jsx(R, {
                    value: "manual_off",
                    children: s("em_mode_manual_off") || "Manuell AUS"
                  }),
                  t.jsx(R, {
                    value: "disabled",
                    children: s("em_mode_disabled") || "Deaktiviert"
                  })
                ]
              })
            ]
          }),
          $ && t.jsx("div", {
            style: {
              padding: "0 14px 8px"
            },
            children: t.jsx("span", {
              style: {
                fontSize: 11,
                padding: "3px 10px",
                borderRadius: 8,
                background: "rgba(245,166,35,0.15)",
                color: "#f5a623",
                fontWeight: 600
              },
              children: s("em_holiday_blocked") || "Urlaub-Sperre aktiv"
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
                  s("em_time_rules") || "Zeitfenster",
                  ":"
                ]
              }),
              t.jsx("span", {
                style: {
                  flex: 1
                },
                children: q
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
                    value: E,
                    onChange: (S) => this.setState({
                      [f]: Number(S.target.value)
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
                    value: K,
                    onChange: (S) => this.setState({
                      [x]: Number(S.target.value)
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
          this.renderDeviceSettings(i, e, Y, X),
          F && t.jsx(he, {
            rules: this.getTimeRulesForDevice(i),
            silentRules: de(this.val(e("silent-rules")) || "[]"),
            excludeHolidays: this.toBool(this.val(e("excl-holidays"))),
            onSave: (S, Q, ee) => {
              this.setVal(e("time-rules"), JSON.stringify(S)), this.setVal(e("silent-rules"), JSON.stringify(Q)), this.setVal(e("excl-holidays"), ee), this.setState({
                [p]: false
              });
            },
            onCancel: () => this.setState({
              [p]: false
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
                children: _
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
    renderDeviceSettings(i, e, a, l) {
      const r = Number(this.val(e("min-soc"))) || 0, u = Number(this.val(e("soc-off"))) || 0, v = Number(this.val(e("surplus-on"))) || 0, g = Number(this.val(e("surplus-off"))) || 0, w = Number(this.val(e("avg-min"))) || 0;
      this.toBool(this.val(e("excl-holidays")));
      const _ = Number(this.val(e("min-runtime"))) || 0, $ = Number(this.val(e("min-pause"))) || 0, j = this.toBool(this.val(e("notify"))), o = Number(this.val(e("max-notif"))) || 0, h = this.toBool(this.val(e("fc-enabled"))), d = this.val(e("fc-start")) || "", b = this.val(e("fc-end")) || "", c = Number(this.val(e("fc-min-soc"))) || 0, y = this.toBool(this.val(e("dis-holiday"))), z = Number(this.val(e("hol-pre-days"))) || 0, f = {
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
      }, p = (m, M, C, F = 50, B = 1) => t.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 3
        },
        children: [
          t.jsx("input", {
            type: "number",
            value: m,
            step: B,
            onChange: (E) => this.setVal(e(M), Number(E.target.value)),
            style: {
              ...a,
              width: F
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
                children: s("em_soc_thresholds") || "SOC & Schwellen"
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_min_soc") || "Min SOC"
              }),
              p(r, "min-soc", "%", 35),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_soc_off") || "SOC Aus"
              }),
              p(u, "soc-off", "%", 35),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_avg_min") || "\xD8"
              }),
              p(w, "avg-min", "min", 30)
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
                children: s("em_surplus_on") || "Einsch."
              }),
              p(v, "surplus-on", "W", 45),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_surplus_off") || "Aussch."
              }),
              p(g, "surplus-off", "W", 45)
            ]
          }),
          t.jsxs("div", {
            style: f,
            children: [
              t.jsx("div", {
                style: x,
                children: s("em_runtimes") || "Laufzeiten"
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_min_runtime") || "Min. Lauf"
              }),
              p(_, "min-runtime", "min"),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_min_pause") || "Min. Pause"
              }),
              p($, "min-pause", "min")
            ]
          }),
          t.jsxs("div", {
            style: f,
            children: [
              t.jsx("div", {
                style: x,
                children: s("em_notifications") || "Benachrichtigungen"
              }),
              t.jsx(O, {
                checked: j,
                label: s("em_notify_active") || "Aktiv",
                onChange: (m) => this.setVal(e("notify"), m)
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_max_notif") || "Max/Tag"
              }),
              p(o, "max-notif", "", 40)
            ]
          }),
          t.jsxs("div", {
            style: f,
            children: [
              t.jsx("div", {
                style: x,
                children: s("em_forecast") || "Forecast"
              }),
              t.jsx(O, {
                checked: h,
                label: s("em_fc_preheat") || "Vorheizen",
                onChange: (m) => this.setVal(e("fc-enabled"), m)
              }),
              t.jsx("input", {
                type: "time",
                value: d,
                onChange: (m) => this.setVal(e("fc-start"), m.target.value),
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
                value: b,
                onChange: (m) => this.setVal(e("fc-end"), m.target.value),
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
                children: s("em_fc_min_soc") || "Vorheiz SOC"
              }),
              p(c, "fc-min-soc", "%", 40)
            ]
          }),
          t.jsxs("div", {
            style: f,
            children: [
              t.jsx("div", {
                style: x,
                children: s("em_holiday_settings") || "Urlaub"
              }),
              t.jsx(O, {
                checked: y,
                label: s("em_dis_holiday") || "Im Urlaub aus",
                onChange: (m) => this.setVal(e("dis-holiday"), m)
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_hol_pre_days") || "Vorlauf"
              }),
              p(z, "hol-pre-days", s("em_holiday_days_label") || "Tage", 40)
            ]
          }),
          i === 1 && (() => {
            const m = Number(this.val(e("temp-max-top"))) || 75, M = Number(this.val(e("temp-restart"))) || 0, C = this.toBool(this.val(e("temp-blocked")));
            return t.jsxs("div", {
              style: f,
              children: [
                t.jsx("div", {
                  style: x,
                  children: s("em_temp_section") || "Temperatur"
                }),
                t.jsx("span", {
                  style: {
                    fontSize: 11,
                    color: "#333"
                  },
                  children: s("em_temp_max_top") || "Max oben"
                }),
                p(m, "temp-max-top", "\xB0C", 40),
                t.jsx("span", {
                  style: {
                    fontSize: 11,
                    color: "#333"
                  },
                  children: s("em_temp_restart") || "Wiedereinsch."
                }),
                p(M, "temp-restart", "\xB0C", 40),
                C && t.jsx("span", {
                  style: {
                    fontSize: 10,
                    padding: "2px 8px",
                    borderRadius: 8,
                    background: "rgba(232,98,42,0.15)",
                    color: "#e8622a",
                    fontWeight: 600,
                    marginLeft: 8
                  },
                  children: s("em_temp_blocked") || "Temp-Sperre aktiv"
                })
              ]
            });
          })()
        ]
      });
    }
    renderWidgetBody(i) {
      super.renderWidgetBody(i), this.state.rxData.widgetTitle;
      const e = parseFloat(this.val("oid-surplus-current")) || 0, a = parseFloat(this.val("oid-surplus-avg")) || 0, l = parseFloat(this.val("oid-pv-power")) || 0, r = parseFloat(this.val("oid-battery-soc")) || 0, u = parseFloat(this.val("oid-forecast-today")) || 0, v = parseFloat(this.val("oid-managed-power")) || 0, g = this.val("oid-active-devices") || "", w = parseFloat(this.val("oid-ww-temp-bottom")), _ = parseFloat(this.val("oid-ww-temp-top")), $ = parseFloat(this.val("oid-pool-temp")), j = parseFloat(this.val("oid-outside-temp")), o = parseFloat(this.val("oid-humidity"));
      return t.jsxs("div", {
        style: {
          width: "100%",
          height: "100%",
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          padding: 16,
          gap: 10,
          boxSizing: "border-box"
        },
        children: [
          t.jsxs("div", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 8
            },
            children: [
              t.jsx(k, {
                label: s("em_pv_power") || "PV-Leistung",
                value: W(l),
                color: "#f5a623"
              }),
              t.jsx(k, {
                label: e >= 0 ? s("em_grid_feed") || "Einspeisung" : s("em_grid_draw") || "Netzbezug",
                value: W(Math.abs(e)),
                color: oe(e),
                sub: `Avg: ${W(a)}`
              }),
              t.jsx(k, {
                label: s("em_battery_soc") || "Batterie",
                value: `${Math.round(r)}`,
                unit: "%",
                color: ae(r)
              }),
              t.jsx(k, {
                label: s("em_forecast_today") || "Prognose",
                value: `${u.toFixed(1)}`,
                unit: "kWh",
                color: "#4a9edd"
              }),
              t.jsx(k, {
                label: s("em_managed_power") || "Gesteuert",
                value: W(v),
                color: "#8b5cf6",
                sub: g || s("em_no_devices") || "Keine"
              })
            ]
          }),
          t.jsxs("div", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 8
            },
            children: [
              t.jsx(D, {
                label: s("em_ww_temp_top") || "WW oben",
                value: isNaN(_) ? "-" : _.toFixed(1),
                unit: "\xB0C",
                color: A(_)
              }),
              t.jsx(D, {
                label: s("em_ww_temp_bottom") || "WW unten",
                value: isNaN(w) ? "-" : w.toFixed(1),
                unit: "\xB0C",
                color: A(w)
              }),
              t.jsx(D, {
                label: s("em_pool_temp") || "Pool",
                value: isNaN($) ? "-" : $.toFixed(1),
                unit: "\xB0C",
                color: A($)
              }),
              t.jsx(D, {
                label: s("em_outside_temp") || "Au\xDFen",
                value: isNaN(j) ? "-" : j.toFixed(1),
                unit: "\xB0C",
                color: A(j)
              }),
              t.jsx(D, {
                label: s("em_humidity") || "Feuchte",
                value: isNaN(o) ? "-" : Math.round(o).toString(),
                unit: "%",
                color: o > 65 ? "#e8622a" : o > 50 ? "#f5a623" : "#2ec27e"
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
  H as default
};
