import { j as t, __tla as __tla_0 } from "./jsx-runtime-LXN0Dejw.js";
import { b as P, __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-Cq4bBQs0.js";
import { a as ee, b as T, __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare___mf_0_mui_mf_1_material__loadShare__.js-DEdXGH34.js";
import { G as te } from "./Generic-CM5BSTAz.js";
import { t as s } from "./tr-JHuBM9tK.js";
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
  ], N = [
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
    const i = ie[n], e = `oid-dev${n}`;
    N.push([
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
    for (const [a, l] of se) N.push([
      `${e}-${a}`,
      `${i}.${l}`
    ]);
  }
  N.push([
    "oid-dev1-temp-max-top",
    "heizstab_warmwasser.temp_max_top"
  ], [
    "oid-dev1-temp-restart",
    "heizstab_warmwasser.temp_restart"
  ], [
    "oid-dev1-temp-blocked",
    "heizstab_warmwasser.temp_blocked"
  ]);
  function R(n) {
    return isNaN(n) ? "#777" : n < 30 ? "#4a9edd" : n < 45 ? "#f5a623" : "#e8622a";
  }
  function ne(n) {
    return n >= 0 ? "#2ec27e" : "#e8622a";
  }
  function oe(n) {
    return n < 20 ? "#e8622a" : n < 50 ? "#f5a623" : "#2ec27e";
  }
  function ae(n) {
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
  function C(n) {
    return Math.abs(n) >= 1e3 ? `${(n / 1e3).toFixed(1)} kW` : `${Math.round(n)} W`;
  }
  const A = [
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
  function re(n) {
    try {
      return JSON.parse(n);
    } catch {
      return [];
    }
  }
  function de(n) {
    try {
      return JSON.parse(n).filter((e) => e.silent).map((e) => {
        const a = e.days.map((l) => A[l] || l).join(",");
        return e.before ? `${a} <${e.before}` : a;
      }).join(" | ") || "\u2013";
    } catch {
      return "\u2013";
    }
  }
  function V(n) {
    try {
      const i = JSON.parse(n);
      if (Array.isArray(i)) return i;
    } catch {
    }
    return [];
  }
  function L(n) {
    try {
      const i = JSON.parse(n);
      if (Array.isArray(i)) return i;
    } catch {
    }
    return [];
  }
  function ce(n, i, e, a) {
    let l = L(n);
    if (l.length === 0 && (i || e)) {
      const r = V(a);
      r.length > 0 && (i || e) && (l = [
        {
          days: r,
          start: i || "00:00",
          end: e || "23:59"
        }
      ]);
    }
    return l.length === 0 ? "\u2013" : l.map((r) => `${pe(r.days)} ${r.start}-${r.end}`).join(" | ");
  }
  function pe(n) {
    if (n.length === 0) return "";
    const i = [
      ...n
    ].sort((r, u) => r - u), e = [];
    let a = i[0], l = i[0];
    for (let r = 1; r <= i.length; r++) r < i.length && i[r] === l + 1 ? l = i[r] : (a === l ? e.push(A[a]) : e.push(`${A[a]}-${A[l]}`), r < i.length && (a = i[r], l = i[r]));
    return e.join(",");
  }
  const J = "0 0 3px rgba(0,0,0,0.6), 0 0 6px rgba(0,0,0,0.3)";
  function W({ label: n, value: i, unit: e, color: a, sub: l }) {
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
            textShadow: a ? J : "none"
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
            textShadow: a ? J : "none"
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
  function E({ checked: n, label: i, onChange: e }) {
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
  function me({ rules: n, silentRules: i, excludeHolidays: e, onSave: a, onCancel: l }) {
    const r = () => {
      const o = [];
      for (let h = 1; h <= 7; h++) {
        const d = n.find((c) => c.days.includes(h)), x = i.find((c) => c.days.includes(h));
        o.push({
          day: h,
          active: !!d,
          start: d ? d.start : "08:00",
          end: d ? d.end : "20:00",
          silent: x ? x.silent : false,
          silentBefore: x && x.before ? x.before : ""
        });
      }
      return o;
    }, [u, v] = P.useState(r), [_, w] = P.useState(e), b = (o, h, d) => {
      v((x) => {
        const c = [
          ...x
        ];
        return c[o] = {
          ...c[o],
          [h]: d
        }, c;
      });
    }, z = () => {
      const o = {};
      for (const c of u) {
        if (!c.active) continue;
        const y = `${c.start}|${c.end}`;
        o[y] || (o[y] = []), o[y].push(c.day);
      }
      const h = Object.entries(o).map(([c, y]) => {
        const [f, g] = c.split("|");
        return {
          days: y.sort((m, p) => m - p),
          start: f,
          end: g
        };
      }), d = {};
      for (const c of u) {
        const y = `${c.silent}|${c.silentBefore}`;
        d[y] || (d[y] = []), d[y].push(c.day);
      }
      const x = Object.entries(d).map(([c, y]) => {
        const [f, g] = c.split("|"), m = {
          days: y.sort((p, $) => p - $),
          silent: f === "true"
        };
        return g && (m.before = g), m;
      });
      a(h, x, _);
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
                      children: le[o.day]
                    }),
                    t.jsx("td", {
                      style: {
                        padding: "4px",
                        textAlign: "center"
                      },
                      children: t.jsx("input", {
                        type: "checkbox",
                        checked: o.active,
                        onChange: (d) => b(h, "active", d.target.checked),
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
                        onChange: (d) => b(h, "start", d.target.value),
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
                        onChange: (d) => b(h, "end", d.target.value),
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
                        onChange: (d) => b(h, "silent", d.target.checked),
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
                        onChange: (d) => b(h, "silentBefore", d.target.value),
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
                checked: _,
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
                children: s("em_time_save") || "Speichern"
              })
            ]
          })
        ]
      })
    });
  }
  function O(n, i) {
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
                    for (const [r, u] of N) e[r] = `${l}.${u}`;
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
            fields: O(1, "em_dev")
          },
          {
            name: "device2",
            label: "em_group_device2",
            fields: O(2, "em_dev")
          },
          {
            name: "device3",
            label: "em_group_device3",
            fields: O(3, "em_dev")
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
      const e = (w) => `oid-dev${i}-${w}`, a = this.val(e("time-rules")) || "", l = L(a);
      if (l.length > 0) return l;
      const r = this.val(e("time-start")) || "", u = this.val(e("time-end")) || "", v = this.val(e("days")) || "[]", _ = V(v);
      return _.length > 0 && (r || u) ? [
        {
          days: _,
          start: r || "00:00",
          end: u || "23:59"
        }
      ] : [];
    }
    renderDevice(i) {
      const e = (S) => `oid-dev${i}-${S}`, a = this.val(e("name")) || `Ger\xE4t ${i}`, l = this.val(e("mode")) || "auto", r = Number(this.val(e("priority"))) || 1, u = Number(this.val(e("power-min"))) || 0, v = Number(this.val(e("power-max"))) || 0;
      this.toBool(this.val(e("is-dimmable")));
      const _ = this.toBool(this.val(e("is-on"))), w = Number(this.val(e("power"))) || 0, b = this.val(e("last-action")) || "\u2013", z = this.toBool(this.val(e("holiday-blocked"))), j = this.val(e("time-rules")) || "", o = this.val(e("time-start")) || "", h = this.val(e("time-end")) || "", d = this.val(e("days")) || "[]", x = this.toBool(this.val(e("silent-active"))), c = this.val(e("silent-rules")) || "[]", y = `editDev${i}Priority`, f = `editDev${i}PowerMin`, g = `editDev${i}PowerMax`, m = `showTimeModal${i}`, p = this.state[y], $ = this.state[f], M = this.state[g], I = this.state[m], F = p !== null ? p : r, B = $ !== null ? $ : u, H = M !== null ? M : v, K = v > 0 ? Math.min(100, w / v * 100) : 0, U = ae(l), k = {
        width: 65,
        padding: "3px 6px",
        fontSize: 12,
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: 5,
        background: "transparent",
        color: "#111",
        textAlign: "right"
      }, Z = {
        ...k,
        width: 40,
        fontSize: 11
      }, Y = {
        ...k,
        width: 70,
        fontSize: 11,
        textAlign: "center"
      }, X = ce(j, o, h, d);
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
                    value: F,
                    onChange: (S) => this.setState({
                      [y]: Number(S.target.value)
                    }),
                    onBlur: () => {
                      p !== null && (this.setVal(e("priority"), p), this.setState({
                        [y]: null
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
                      C(w),
                      " / ",
                      C(v)
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
                    background: _ ? "linear-gradient(90deg, #2ec27e, #2ec27ecc)" : "rgba(0,0,0,0.15)",
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
              t.jsxs(ee, {
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
                  t.jsx(T, {
                    value: "auto",
                    children: s("em_mode_auto") || "Auto"
                  }),
                  t.jsx(T, {
                    value: "manual_on",
                    children: s("em_mode_manual_on") || "Manuell EIN"
                  }),
                  t.jsx(T, {
                    value: "manual_off",
                    children: s("em_mode_manual_off") || "Manuell AUS"
                  }),
                  t.jsx(T, {
                    value: "disabled",
                    children: s("em_mode_disabled") || "Deaktiviert"
                  })
                ]
              })
            ]
          }),
          z && t.jsx("div", {
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
                children: X
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
                  background: x ? "rgba(139,92,246,0.15)" : "rgba(0,0,0,0.06)",
                  color: x ? "#8b5cf6" : "#777",
                  fontWeight: 600
                },
                children: x ? "aktiv" : "aus"
              }),
              t.jsx("span", {
                style: {
                  fontSize: 10,
                  color: "#555",
                  marginLeft: "auto"
                },
                children: de(c)
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
                    value: B,
                    onChange: (S) => this.setState({
                      [f]: Number(S.target.value)
                    }),
                    onBlur: () => {
                      $ !== null && (this.setVal(e("power-min"), $), this.setState({
                        [f]: null
                      }));
                    },
                    style: k
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
                    onChange: (S) => this.setState({
                      [g]: Number(S.target.value)
                    }),
                    onBlur: () => {
                      M !== null && (this.setVal(e("power-max"), M), this.setState({
                        [g]: null
                      }));
                    },
                    style: k
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
          this.renderDeviceSettings(i, e, Z, Y),
          I && t.jsx(me, {
            rules: this.getTimeRulesForDevice(i),
            silentRules: re(this.val(e("silent-rules")) || "[]"),
            excludeHolidays: this.toBool(this.val(e("excl-holidays"))),
            onSave: (S, q, Q) => {
              this.setVal(e("time-rules"), JSON.stringify(S)), this.setVal(e("silent-rules"), JSON.stringify(q)), this.setVal(e("excl-holidays"), Q), this.setState({
                [m]: false
              });
            },
            onCancel: () => this.setState({
              [m]: false
            })
          }),
          t.jsx("div", {
            style: {
              padding: "6px 14px",
              borderTop: "1px solid rgba(0,0,0,0.08)",
              fontSize: 11,
              color: "#555",
              marginTop: "auto",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: b
          })
        ]
      }, i);
    }
    renderDeviceSettings(i, e, a, l) {
      const r = Number(this.val(e("min-soc"))) || 0, u = Number(this.val(e("soc-off"))) || 0, v = Number(this.val(e("surplus-on"))) || 0, _ = Number(this.val(e("surplus-off"))) || 0, w = Number(this.val(e("avg-min"))) || 0;
      this.toBool(this.val(e("excl-holidays")));
      const b = Number(this.val(e("min-runtime"))) || 0, z = Number(this.val(e("min-pause"))) || 0, j = this.toBool(this.val(e("notify"))), o = this.toBool(this.val(e("fc-enabled"))), h = this.val(e("fc-start")) || "", d = this.val(e("fc-end")) || "", x = Number(this.val(e("fc-min-soc"))) || 0, c = this.toBool(this.val(e("dis-holiday"))), y = Number(this.val(e("hol-pre-days"))) || 0, f = {
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
      }, m = (p, $, M, I = 50, F = 1) => t.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 3
        },
        children: [
          t.jsx("input", {
            type: "number",
            value: p,
            step: F,
            onChange: (B) => this.setVal(e($), Number(B.target.value)),
            style: {
              ...a,
              width: I
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
            style: f,
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
              m(r, "min-soc", "%", 35),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_soc_off") || "SOC Aus"
              }),
              m(u, "soc-off", "%", 35),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_avg_min") || "\xD8"
              }),
              m(w, "avg-min", "min", 30)
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
              m(v, "surplus-on", "W", 45),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_surplus_off") || "Aussch."
              }),
              m(_, "surplus-off", "W", 45)
            ]
          }),
          t.jsxs("div", {
            style: f,
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
              m(b, "min-runtime", "min"),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_min_pause") || "Min. Pause"
              }),
              m(z, "min-pause", "min")
            ]
          }),
          t.jsxs("div", {
            style: f,
            children: [
              t.jsx("div", {
                style: g,
                children: s("em_notifications") || "Benachrichtigungen"
              }),
              t.jsx(E, {
                checked: j,
                label: s("em_notify_active") || "Aktiv",
                onChange: (p) => this.setVal(e("notify"), p)
              })
            ]
          }),
          t.jsxs("div", {
            style: f,
            children: [
              t.jsx("div", {
                style: g,
                children: s("em_forecast") || "Forecast"
              }),
              t.jsx(E, {
                checked: o,
                label: s("em_fc_preheat") || "Vorheizen",
                onChange: (p) => this.setVal(e("fc-enabled"), p)
              }),
              t.jsx("input", {
                type: "time",
                value: h,
                onChange: (p) => this.setVal(e("fc-start"), p.target.value),
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
                value: d,
                onChange: (p) => this.setVal(e("fc-end"), p.target.value),
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
              m(x, "fc-min-soc", "%", 40)
            ]
          }),
          t.jsxs("div", {
            style: f,
            children: [
              t.jsx("div", {
                style: g,
                children: s("em_holiday_settings") || "Urlaub"
              }),
              t.jsx(E, {
                checked: c,
                label: s("em_dis_holiday") || "Im Urlaub aus",
                onChange: (p) => this.setVal(e("dis-holiday"), p)
              }),
              t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#333"
                },
                children: s("em_hol_pre_days") || "Vorlauf"
              }),
              m(y, "hol-pre-days", s("em_holiday_days_label") || "Tage", 40)
            ]
          }),
          i === 1 && (() => {
            const p = Number(this.val(e("temp-max-top"))) || 75, $ = Number(this.val(e("temp-restart"))) || 0, M = this.toBool(this.val(e("temp-blocked")));
            return t.jsxs("div", {
              style: f,
              children: [
                t.jsxs("div", {
                  style: {
                    ...g,
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                  },
                  children: [
                    t.jsx("span", {
                      children: s("em_temp_section") || "Temperatur"
                    }),
                    M && t.jsx("span", {
                      style: {
                        fontSize: 10,
                        padding: "2px 8px",
                        borderRadius: 8,
                        background: "rgba(232,98,42,0.15)",
                        color: "#e8622a",
                        fontWeight: 600,
                        textTransform: "none"
                      },
                      children: s("em_temp_blocked") || "Temp-Sperre aktiv"
                    })
                  ]
                }),
                t.jsx("span", {
                  style: {
                    fontSize: 11,
                    color: "#333"
                  },
                  children: s("em_temp_max_top") || "Max oben"
                }),
                m(p, "temp-max-top", "\xB0C", 40),
                t.jsx("span", {
                  style: {
                    fontSize: 11,
                    color: "#333"
                  },
                  children: s("em_temp_restart") || "Wiedereinsch."
                }),
                m($, "temp-restart", "\xB0C", 40)
              ]
            });
          })()
        ]
      });
    }
    renderWidgetBody(i) {
      super.renderWidgetBody(i), this.state.rxData.widgetTitle;
      const e = parseFloat(this.val("oid-surplus-current")) || 0, a = parseFloat(this.val("oid-surplus-avg")) || 0, l = parseFloat(this.val("oid-pv-power")) || 0, r = parseFloat(this.val("oid-battery-soc")) || 0, u = parseFloat(this.val("oid-forecast-today")) || 0, v = parseFloat(this.val("oid-managed-power")) || 0, _ = this.val("oid-active-devices") || "", w = parseFloat(this.val("oid-ww-temp-bottom")), b = parseFloat(this.val("oid-ww-temp-top")), z = parseFloat(this.val("oid-pool-temp")), j = parseFloat(this.val("oid-outside-temp")), o = parseFloat(this.val("oid-humidity"));
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
              t.jsx(W, {
                label: s("em_pv_power") || "PV-Leistung",
                value: C(l),
                color: "#f5a623"
              }),
              t.jsx(W, {
                label: e >= 0 ? s("em_grid_feed") || "Einspeisung" : s("em_grid_draw") || "Netzbezug",
                value: C(Math.abs(e)),
                color: ne(e),
                sub: `Avg: ${C(a)}`
              }),
              t.jsx(W, {
                label: s("em_battery_soc") || "Batterie",
                value: `${Math.round(r)}`,
                unit: "%",
                color: oe(r)
              }),
              t.jsx(W, {
                label: s("em_forecast_today") || "Prognose",
                value: `${u.toFixed(1)}`,
                unit: "kWh",
                color: "#4a9edd"
              }),
              t.jsx(W, {
                label: s("em_managed_power") || "Gesteuert",
                value: C(v),
                color: "#8b5cf6",
                sub: _ || s("em_no_devices") || "Keine"
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
                value: isNaN(b) ? "-" : b.toFixed(1),
                unit: "\xB0C",
                color: R(b)
              }),
              t.jsx(D, {
                label: s("em_ww_temp_bottom") || "WW unten",
                value: isNaN(w) ? "-" : w.toFixed(1),
                unit: "\xB0C",
                color: R(w)
              }),
              t.jsx(D, {
                label: s("em_pool_temp") || "Pool",
                value: isNaN(z) ? "-" : z.toFixed(1),
                unit: "\xB0C",
                color: R(z)
              }),
              t.jsx(D, {
                label: s("em_outside_temp") || "Au\xDFen",
                value: isNaN(j) ? "-" : j.toFixed(1),
                unit: "\xB0C",
                color: R(j)
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
  G as default
};
