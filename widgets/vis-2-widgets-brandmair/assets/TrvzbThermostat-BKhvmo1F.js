import { j as e, __tla as __tla_0 } from "./createSvgIcon-DUKm_13q.js";
import { _ as D, a as M, b as z, c as I, d as V, __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare___mf_0_mui_mf_1_material__loadShare__.js-DEdXGH34.js";
import { C as J, D as L, A as P, a as H, b as K, c as Y, __tla as __tla_2 } from "./Close-C0TSKQGp.js";
import { t as X, e as G, d as U } from "./translations-VUdWfrOD.js";
import { _ as T, a as Z, __tla as __tla_3 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-36-XpKNE.js";
import { __tla as __tla_4 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-DCr90mXz.js";
import { __tla as __tla_5 } from "./identifier-D6g9f8_1.js";
let R;
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
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })()
]).then(async () => {
  (function() {
    if (typeof window > "u" || typeof window.addWords != "function") return;
    const { prefix: i, ...s } = X, a = Object.keys(s);
    if (!a.length) return;
    const o = {};
    for (const c of Object.keys(s[a[0]])) {
      const r = i + c;
      o[r] = {};
      for (const f of a) o[r][f] = s[f][c];
    }
    window.addWords(o);
  })();
  class q extends window.visRxWidget {
    getPropertyValue = (i) => this.state.values[`${this.state.rxData[i]}.val`];
    static getI18nPrefix() {
      return "vis_2_widgets_brandmair_";
    }
  }
  const b = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
  ], k = {
    monday: "Mo",
    tuesday: "Di",
    wednesday: "Mi",
    thursday: "Do",
    friday: "Fr",
    saturday: "Sa",
    sunday: "So"
  };
  function Q(n) {
    const i = {};
    if (b.forEach((s) => {
      i[s] = [];
    }), !n) return i;
    try {
      const s = typeof n == "string" ? JSON.parse(n) : n;
      b.forEach((a) => {
        s[a] && (i[a] = s[a].trim().split(/\s+/).filter(Boolean).map((o) => {
          const c = o.split("/");
          return {
            time: c[0].trim(),
            temp: parseFloat(c[1])
          };
        }));
      });
    } catch {
    }
    return i;
  }
  function ee(n) {
    const i = {};
    return b.forEach((s) => {
      const a = (n[s] || []).filter((o) => o.time && !isNaN(o.temp));
      a.length && (i[s] = a.map((o) => `${o.time}/${o.temp}`).join(" "));
    }), JSON.stringify(i);
  }
  function C(n) {
    const i = n.split(":");
    return (parseInt(i[0]) || 0) * 60 + (parseInt(i[1]) || 0);
  }
  function A(n) {
    const i = Math.floor(n / 60) % 24, s = n % 60;
    return `${i < 10 ? "0" : ""}${i}:${s < 10 ? "0" : ""}${s}`;
  }
  function W(n, i, s) {
    return Math.max(i, Math.min(s, n));
  }
  function te(n) {
    return n <= 16 ? "#5DCAA5" : n <= 19 ? "#2ec27e" : n <= 22 ? "#EF9F27" : "#D85A30";
  }
  function ie({ slots: n }) {
    const i = [
      ...n
    ].sort((a, o) => a.time.localeCompare(o.time));
    if (!i.length) return e.jsx("div", {
      style: {
        position: "relative",
        height: 14,
        background: "rgba(255,255,255,0.05)",
        borderRadius: 4,
        overflow: "hidden"
      },
      children: e.jsx("span", {
        style: {
          position: "absolute",
          left: 6,
          top: 1,
          fontSize: 9,
          color: "rgba(255,255,255,0.25)"
        },
        children: "\u2013"
      })
    });
    const s = (a) => {
      const o = a.split(":");
      return ((parseInt(o[0]) || 0) * 60 + (parseInt(o[1]) || 0)) / 1440 * 100;
    };
    return e.jsx("div", {
      style: {
        position: "relative",
        height: 14,
        background: "rgba(255,255,255,0.05)",
        borderRadius: 4,
        overflow: "hidden"
      },
      children: i.map((a, o) => {
        const c = s(a.time), f = (o + 1 < i.length ? s(i[o + 1].time) : 100) - c;
        return e.jsx("div", {
          style: {
            position: "absolute",
            top: 2,
            bottom: 2,
            borderRadius: 3,
            left: `${c.toFixed(1)}%`,
            width: `${f.toFixed(1)}%`,
            background: te(a.temp),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
          },
          title: `${a.time} \u2013 ${a.temp}\xB0C`,
          children: f > 10 && e.jsxs("span", {
            style: {
              fontSize: 8,
              fontWeight: 700,
              color: "#fff"
            },
            children: [
              a.temp,
              "\xB0"
            ]
          })
        }, o);
      })
    });
  }
  function y({ icon: n, onClick: i }) {
    return e.jsx(D, {
      size: "small",
      onClick: i,
      sx: {
        padding: "2px",
        color: "rgba(255,255,255,0.5)"
      },
      children: n === "up" ? e.jsx(H, {
        fontSize: "small"
      }) : e.jsx(K, {
        fontSize: "small"
      })
    });
  }
  function ne({ title: n, scheduleRaw: i, onSave: s, onClose: a }) {
    const [o, c] = T(() => Q(i)), [r, f] = T("monday"), g = o[r] || [], m = Z((t) => {
      c((d) => {
        const l = JSON.parse(JSON.stringify(d));
        return t(l), l;
      });
    }, []), h = (t, d, l) => {
      m((p) => {
        const u = p[r];
        if (u[t]) if (d === "t") u[t].temp = W(Math.round((u[t].temp + l) * 2) / 2, 4, 35);
        else {
          const F = C(u[t].time) + (d === "h" ? l * 60 : l), B = t > 0 ? C(u[t - 1].time) + 5 : 0, E = t + 1 < u.length ? C(u[t + 1].time) - 5 : 1435;
          u[t].time = A(W(F, B, E));
        }
      });
    }, j = () => {
      m((t) => {
        if (t[r] || (t[r] = []), t[r].length >= 6) return;
        t[r].length === 0 && t[r].push({
          time: "00:00",
          temp: 20
        });
        const d = C(t[r][t[r].length - 1].time);
        t[r].push({
          time: A(Math.min(d + 60, 1435)),
          temp: 20
        });
      });
    }, w = (t) => {
      m((d) => {
        d[r].splice(t, 1), d[r].length === 1 && (d[r].length = 0);
      });
    }, _ = (t) => {
      !t || t === r || m((d) => {
        d[r] = (d[t] || []).map((l) => ({
          ...l
        }));
      });
    }, S = {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999
    }, v = {
      background: "#1e1e1e",
      borderRadius: 16,
      width: 820,
      maxWidth: "95vw",
      maxHeight: "90vh",
      overflow: "auto",
      padding: 20,
      border: "1px solid rgba(255,255,255,0.15)"
    };
    return e.jsx("div", {
      style: S,
      onClick: a,
      children: e.jsxs("div", {
        style: v,
        onClick: (t) => t.stopPropagation(),
        children: [
          e.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16
            },
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("div", {
                    style: {
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#fff"
                    },
                    children: "Wochenplan"
                  }),
                  e.jsx("div", {
                    style: {
                      fontSize: 12,
                      color: "rgba(255,255,255,0.4)"
                    },
                    children: n
                  })
                ]
              }),
              e.jsx(D, {
                onClick: a,
                sx: {
                  color: "rgba(255,255,255,0.5)"
                },
                children: e.jsx(J, {})
              })
            ]
          }),
          e.jsx("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 4,
              marginBottom: 16
            },
            children: b.map((t) => e.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 8
              },
              children: [
                e.jsx("span", {
                  style: {
                    width: 24,
                    fontSize: 10,
                    color: "rgba(255,255,255,0.4)",
                    textAlign: "right"
                  },
                  children: k[t]
                }),
                e.jsx("div", {
                  style: {
                    flex: 1
                  },
                  children: e.jsx(ie, {
                    slots: o[t] || []
                  })
                })
              ]
            }, t))
          }),
          e.jsxs("div", {
            style: {
              display: "flex",
              gap: 4,
              marginBottom: 16,
              alignItems: "center",
              flexWrap: "wrap"
            },
            children: [
              b.map((t) => e.jsx("button", {
                onClick: () => f(t),
                style: {
                  padding: "4px 10px",
                  borderRadius: 6,
                  fontSize: 12,
                  cursor: "pointer",
                  border: t === r ? "1px solid #e8622a" : "1px solid rgba(255,255,255,0.15)",
                  background: t === r ? "#e8622a" : "rgba(0,0,0,0.25)",
                  color: t === r ? "#fff" : "rgba(255,255,255,0.5)"
                },
                children: k[t]
              }, t)),
              e.jsx(M, {
                size: "small",
                value: "",
                displayEmpty: true,
                onChange: (t) => _(t.target.value),
                sx: {
                  fontSize: 11,
                  height: 28,
                  marginLeft: "auto",
                  color: "rgba(255,255,255,0.4)",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.1)"
                  },
                  ".MuiSvgIcon-root": {
                    color: "rgba(255,255,255,0.3)"
                  }
                },
                MenuProps: {
                  sx: {
                    zIndex: 10001
                  }
                },
                renderValue: (t) => t ? k[t] : "Kopieren von...",
                children: b.filter((t) => t !== r).map((t) => e.jsx(z, {
                  value: t,
                  children: k[t]
                }, t))
              })
            ]
          }),
          g.length === 0 && e.jsx("div", {
            style: {
              textAlign: "center",
              padding: 20,
              color: "rgba(255,255,255,0.3)",
              fontSize: 13
            },
            children: "Keine Zeitslots \u2013 dr\xFCcke +"
          }),
          g.length > 0 && e.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 8
            },
            children: [
              e.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 12px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 8
                },
                children: [
                  e.jsx("span", {
                    style: {
                      fontSize: 12,
                      color: "rgba(255,255,255,0.5)",
                      width: 40
                    },
                    children: "Basis"
                  }),
                  e.jsxs("span", {
                    style: {
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#fff",
                      width: 50,
                      textAlign: "center"
                    },
                    children: [
                      g[0].temp.toFixed(1),
                      "\xB0"
                    ]
                  }),
                  e.jsx(y, {
                    icon: "up",
                    onClick: () => h(0, "t", 0.5)
                  }),
                  e.jsx(y, {
                    icon: "down",
                    onClick: () => h(0, "t", -0.5)
                  })
                ]
              }),
              g.slice(1).map((t, d) => {
                const l = d + 1, p = t.time.split(":");
                return e.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "4px 12px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 8
                  },
                  children: [
                    e.jsx(y, {
                      icon: "up",
                      onClick: () => h(l, "h", 1)
                    }),
                    e.jsx("span", {
                      style: {
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#fff",
                        width: 22,
                        textAlign: "center"
                      },
                      children: p[0]
                    }),
                    e.jsx(y, {
                      icon: "down",
                      onClick: () => h(l, "h", -1)
                    }),
                    e.jsx("span", {
                      style: {
                        color: "rgba(255,255,255,0.3)",
                        fontSize: 14
                      },
                      children: ":"
                    }),
                    e.jsx(y, {
                      icon: "up",
                      onClick: () => h(l, "m", 5)
                    }),
                    e.jsx("span", {
                      style: {
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#fff",
                        width: 22,
                        textAlign: "center"
                      },
                      children: p[1]
                    }),
                    e.jsx(y, {
                      icon: "down",
                      onClick: () => h(l, "m", -5)
                    }),
                    e.jsx("span", {
                      style: {
                        margin: "0 8px",
                        color: "rgba(255,255,255,0.2)"
                      },
                      children: "|"
                    }),
                    e.jsx(y, {
                      icon: "up",
                      onClick: () => h(l, "t", 0.5)
                    }),
                    e.jsxs("span", {
                      style: {
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#fff",
                        width: 50,
                        textAlign: "center"
                      },
                      children: [
                        t.temp.toFixed(1),
                        "\xB0"
                      ]
                    }),
                    e.jsx(y, {
                      icon: "down",
                      onClick: () => h(l, "t", -0.5)
                    }),
                    e.jsx(D, {
                      size: "small",
                      onClick: () => w(l),
                      sx: {
                        marginLeft: "auto",
                        color: "rgba(255,100,100,0.5)"
                      },
                      children: e.jsx(L, {
                        fontSize: "small"
                      })
                    })
                  ]
                }, l);
              })
            ]
          }),
          e.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              marginTop: 16
            },
            children: [
              e.jsx(I, {
                size: "small",
                startIcon: e.jsx(P, {}),
                onClick: j,
                disabled: g.length >= 6,
                sx: {
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "none"
                },
                children: "Hinzuf\xFCgen"
              }),
              e.jsxs("div", {
                style: {
                  display: "flex",
                  gap: 8
                },
                children: [
                  e.jsx(I, {
                    size: "small",
                    onClick: a,
                    sx: {
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "none"
                    },
                    children: "Abbrechen"
                  }),
                  e.jsx(I, {
                    size: "small",
                    variant: "contained",
                    onClick: () => s(ee(o)),
                    sx: {
                      background: "#e8622a",
                      textTransform: "none",
                      "&:hover": {
                        background: "#d4571f"
                      }
                    },
                    children: "Speichern"
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  }
  const O = {
    de: U,
    en: G
  };
  function x(n) {
    const i = typeof window < "u" && window.systemLang || "de";
    return (O[i] || O.de)[n] ?? n;
  }
  const se = [
    [
      "oid-temp-actual",
      "local_temperature"
    ],
    [
      "oid-temp-set",
      "occupied_heating_setpoint"
    ],
    [
      "oid-mode",
      "mode"
    ],
    [
      "oid-run",
      "running_state"
    ],
    [
      "oid-batt",
      "battery"
    ],
    [
      "oid-avail",
      "available"
    ],
    [
      "oid-child",
      "child_lock"
    ],
    [
      "oid-window",
      "open_window"
    ],
    [
      "oid-sched-monday",
      "weekly_schedule_monday"
    ],
    [
      "oid-sched-tuesday",
      "weekly_schedule_tuesday"
    ],
    [
      "oid-sched-wednesday",
      "weekly_schedule_wednesday"
    ],
    [
      "oid-sched-thursday",
      "weekly_schedule_thursday"
    ],
    [
      "oid-sched-friday",
      "weekly_schedule_friday"
    ],
    [
      "oid-sched-saturday",
      "weekly_schedule_saturday"
    ],
    [
      "oid-sched-sunday",
      "weekly_schedule_sunday"
    ]
  ], $ = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
  ];
  function oe(n) {
    return isNaN(n) ? "rgba(255,255,255,0.4)" : n <= 16 ? "#4a9edd" : n <= 19 ? "#2ec27e" : n <= 22 ? "#f5a623" : "#e8622a";
  }
  function ae(n) {
    return n === "heat" ? "#e8622a" : n === "auto" ? "#4a9edd" : "rgba(255,255,255,0.15)";
  }
  function N(n) {
    const { on: i, label: s, onClick: a } = n;
    return e.jsxs("div", {
      onClick: a,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        cursor: "pointer",
        fontSize: 11,
        color: "rgba(255,255,255,0.5)",
        userSelect: "none"
      },
      children: [
        e.jsx("div", {
          style: {
            width: 36,
            height: 20,
            borderRadius: 10,
            position: "relative",
            background: i ? "rgba(232,98,42,0.7)" : "rgba(255,255,255,0.1)",
            border: `1px solid ${i ? "#e8622a" : "rgba(255,255,255,0.15)"}`,
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
              transform: i ? "translateX(14px)" : "translateX(0)",
              background: i ? "#ffffff" : "rgba(255,255,255,0.4)"
            }
          })
        }),
        e.jsx("span", {
          children: s
        })
      ]
    });
  }
  R = class extends q {
    constructor(i) {
      super(i), this.state = {
        ...this.state,
        showSchedule: false,
        sliderTemp: null
      };
    }
    static getWidgetInfo() {
      return {
        id: "tplTrvzbThermostat",
        visSet: "vis-2-widgets-brandmair",
        visWidgetLabel: "thermostat_trvzb",
        visName: "TrvzbThermostat",
        visAttrs: [
          {
            name: "common",
            label: "group_display",
            fields: [
              {
                name: "widgetTitle",
                label: "widget_title",
                type: "text",
                default: "Thermostat"
              },
              {
                name: "oid-base",
                type: "text",
                label: "base_oid",
                tooltip: "base_oid_tooltip",
                onChange: async (i, s, a) => {
                  const o = s["oid-base"];
                  if (o) {
                    for (const [c, r] of se) s[c] = `${o}.${r}`;
                    a(s);
                  }
                }
              }
            ]
          },
          {
            name: "oids",
            label: "group_oids",
            fields: [
              {
                name: "oid-temp-actual",
                type: "id",
                label: "temperature_actual"
              },
              {
                name: "oid-temp-set",
                type: "id",
                label: "temperature_set"
              },
              {
                name: "oid-mode",
                type: "id",
                label: "mode"
              },
              {
                name: "oid-run",
                type: "id",
                label: "running_state"
              },
              {
                name: "oid-batt",
                type: "id",
                label: "battery"
              },
              {
                name: "oid-avail",
                type: "id",
                label: "available"
              },
              {
                name: "oid-child",
                type: "id",
                label: "child_lock"
              },
              {
                name: "oid-window",
                type: "id",
                label: "open_window"
              }
            ]
          },
          {
            name: "schedule",
            label: "weekly_schedule",
            fields: [
              {
                name: "oid-sched-monday",
                type: "id",
                label: "schedule_monday"
              },
              {
                name: "oid-sched-tuesday",
                type: "id",
                label: "schedule_tuesday"
              },
              {
                name: "oid-sched-wednesday",
                type: "id",
                label: "schedule_wednesday"
              },
              {
                name: "oid-sched-thursday",
                type: "id",
                label: "schedule_thursday"
              },
              {
                name: "oid-sched-friday",
                type: "id",
                label: "schedule_friday"
              },
              {
                name: "oid-sched-saturday",
                type: "id",
                label: "schedule_saturday"
              },
              {
                name: "oid-sched-sunday",
                type: "id",
                label: "schedule_sunday"
              }
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: 340,
          position: "relative"
        },
        visSetIcon: "widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png",
        visPrev: "widgets/vis-2-widgets-brandmair/img/prev_thermostat.png"
      };
    }
    getWidgetInfo() {
      return R.getWidgetInfo();
    }
    val(i) {
      const s = this.state.rxData[i];
      if (s) return this.state.values[`${s}.val`];
    }
    setVal(i, s) {
      const a = this.state.rxData[i];
      if (!a) return;
      const o = JSON.parse(JSON.stringify(this.state.values));
      o[`${a}.val`] = s, this.setState({
        values: o
      }), this.props.context.setValue(a, s);
    }
    renderWidgetBody(i) {
      super.renderWidgetBody(i);
      const s = parseFloat(this.val("oid-temp-actual")), a = parseFloat(this.val("oid-temp-set")), o = this.state.sliderTemp ?? a, c = this.val("oid-mode") ?? "", r = this.val("oid-run") ?? "", f = this.val("oid-batt"), g = this.val("oid-avail"), m = this.val("oid-child"), h = this.val("oid-window"), j = this.state.rxData.widgetTitle || "", w = g === false || g === "false" || g === "0", _ = m === true || m === "true" || m === "1" || m === "LOCK", S = h === true || h === "true" || h === "1", v = r === "heat", t = oe(s);
      return e.jsxs("div", {
        style: {
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.25)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 14,
          overflow: "hidden",
          position: "relative",
          fontFamily: "sans-serif",
          opacity: w ? 0.5 : 1,
          display: "flex",
          flexDirection: "column"
        },
        children: [
          e.jsx("div", {
            style: {
              height: 4,
              background: ae(c),
              flexShrink: 0
            }
          }),
          f != null && e.jsxs("div", {
            style: {
              position: "absolute",
              top: 8,
              left: 8,
              fontSize: 10,
              color: "rgba(255,255,255,0.35)",
              fontFamily: "monospace",
              zIndex: 1
            },
            children: [
              f,
              "%"
            ]
          }),
          e.jsx("div", {
            onClick: () => this.setState({
              showSchedule: true
            }),
            style: {
              position: "absolute",
              top: 8,
              right: 8,
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.12)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1
            },
            children: e.jsx(Y, {
              sx: {
                fontSize: 16,
                color: "rgba(255,255,255,0.5)"
              }
            })
          }),
          e.jsxs("div", {
            style: {
              padding: "14px 14px 10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              flex: 1
            },
            children: [
              e.jsx("div", {
                style: {
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  border: `3px solid ${isNaN(s) ? "rgba(255,255,255,0.15)" : t}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: e.jsx("span", {
                  style: {
                    fontSize: 28,
                    fontWeight: 700,
                    color: t,
                    lineHeight: 1
                  },
                  children: isNaN(s) ? "\u2013" : `${s.toFixed(1)}\xB0`
                })
              }),
              e.jsxs("div", {
                style: {
                  width: "100%",
                  textAlign: "center"
                },
                children: [
                  e.jsx("div", {
                    style: {
                      fontSize: 13,
                      color: "rgba(255,255,255,0.5)",
                      marginBottom: 4
                    },
                    children: isNaN(o) ? "\u2013" : `${o.toFixed(1)}\xB0`
                  }),
                  e.jsx(V, {
                    size: "small",
                    min: 5,
                    max: 35,
                    step: 0.5,
                    value: isNaN(o) ? 20 : o,
                    onChange: (d, l) => this.setState({
                      sliderTemp: l
                    }),
                    onChangeCommitted: (d, l) => {
                      this.setState({
                        sliderTemp: null
                      }), this.setVal("oid-temp-set", l);
                    },
                    sx: {
                      color: "#e8622a",
                      "& .MuiSlider-thumb": {
                        width: 16,
                        height: 16
                      },
                      "& .MuiSlider-rail": {
                        opacity: 0.2
                      }
                    }
                  })
                ]
              })
            ]
          }),
          e.jsxs("div", {
            style: {
              padding: "0 14px 10px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              flexShrink: 0
            },
            children: [
              e.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  e.jsx("span", {
                    style: {
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#fff"
                    },
                    children: j
                  }),
                  e.jsx("span", {
                    style: {
                      fontSize: 10,
                      padding: "2px 8px",
                      borderRadius: 6,
                      background: v ? "rgba(232,98,42,0.25)" : "rgba(255,255,255,0.08)",
                      color: v ? "#ffb89a" : "rgba(255,255,255,0.4)"
                    },
                    children: x(v ? "heating" : "ready")
                  })
                ]
              }),
              e.jsxs(M, {
                size: "small",
                value: c || "off",
                onChange: (d) => this.setVal("oid-mode", d.target.value),
                sx: {
                  fontSize: 12,
                  color: "#fff",
                  height: 32,
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.15)"
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.3)"
                  },
                  ".MuiSvgIcon-root": {
                    color: "rgba(255,255,255,0.4)"
                  }
                },
                children: [
                  e.jsx(z, {
                    value: "off",
                    children: x("mode_off")
                  }),
                  e.jsx(z, {
                    value: "heat",
                    children: x("mode_heat")
                  }),
                  e.jsx(z, {
                    value: "auto",
                    children: x("mode_auto")
                  })
                ]
              }),
              e.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between"
                },
                children: [
                  e.jsx(N, {
                    on: _,
                    label: x("child_lock"),
                    onClick: () => this.setVal("oid-child", !_)
                  }),
                  e.jsx(N, {
                    on: S,
                    label: x("open_window"),
                    onClick: () => this.setVal("oid-window", !S)
                  })
                ]
              })
            ]
          }),
          w && e.jsx("div", {
            style: {
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.6)",
              borderRadius: 14,
              zIndex: 10,
              color: "rgba(255,255,255,0.5)",
              fontSize: 18,
              fontWeight: 700
            },
            children: x("offline")
          }),
          this.state.showSchedule && (() => {
            const d = {};
            return $.forEach((l) => {
              const p = this.val(`oid-sched-${l}`);
              p && (d[l] = String(p));
            }), e.jsx(ne, {
              title: j,
              scheduleRaw: d,
              onSave: (l) => {
                try {
                  const p = JSON.parse(l);
                  $.forEach((u) => {
                    p[u] !== void 0 && this.setVal(`oid-sched-${u}`, p[u]);
                  });
                } catch {
                }
                this.setState({
                  showSchedule: false
                });
              },
              onClose: () => this.setState({
                showSchedule: false
              })
            });
          })()
        ]
      });
    }
  };
});
export {
  __tla,
  R as default
};
