import { j as t, __tla as __tla_0 } from "./jsx-runtime-LXN0Dejw.js";
import { G as g } from "./Generic-CM5BSTAz.js";
import { __tla as __tla_1 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js_commonjs-proxy-Dkt6rraE.js";
import { __tla as __tla_2 } from "./vis2brandmairWidgets__loadShare__react__loadShare__.js-Cq4bBQs0.js";
let x;
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
  })()
]).then(async () => {
  function f(c, o, r) {
    const l = Math.max(0, Math.min(1, (c - o) / (r - o))), i = {
      r: 0,
      g: 102,
      b: 255
    }, e = {
      r: 255,
      g: 204,
      b: 0
    }, a = {
      r: 255,
      g: 51,
      b: 0
    };
    let h, d, n;
    if (l < 0.5) {
      const s = l * 2;
      h = Math.round(i.r + (e.r - i.r) * s), d = Math.round(i.g + (e.g - i.g) * s), n = Math.round(i.b + (e.b - i.b) * s);
    } else {
      const s = (l - 0.5) * 2;
      h = Math.round(e.r + (a.r - e.r) * s), d = Math.round(e.g + (a.g - e.g) * s), n = Math.round(e.b + (a.b - e.b) * s);
    }
    return `rgb(${h},${d},${n})`;
  }
  x = class extends g {
    static getWidgetInfo() {
      return {
        id: "tplWarmwasserWidget",
        visSet: "vis-2-widgets-brandmair",
        visWidgetLabel: "warmwasser_widget",
        visName: "WarmwasserWidget",
        visAttrs: [
          {
            name: "common",
            label: "group_display",
            fields: [
              {
                name: "widgetTitle",
                label: "widget_title",
                type: "text",
                default: "Warmwasserspeicher"
              },
              {
                name: "oid-temp1",
                type: "id",
                label: "warmwasser_temp1"
              },
              {
                name: "oid-temp2",
                type: "id",
                label: "warmwasser_temp2"
              },
              {
                name: "oid-heater",
                type: "id",
                label: "warmwasser_heater"
              }
            ]
          }
        ],
        visDefaultStyle: {
          width: 280,
          height: 400,
          position: "relative"
        },
        visSetIcon: "widgets/vis-2-widgets-brandmair/img/vis-2-widgets-brandmair.png",
        visPrev: "widgets/vis-2-widgets-brandmair/img/prev_warmwasser.png"
      };
    }
    getWidgetInfo() {
      return x.getWidgetInfo();
    }
    val(o) {
      const r = this.state.rxData[o];
      if (r) return this.state.values[`${r}.val`];
    }
    renderWidgetBody(o) {
      super.renderWidgetBody(o);
      const r = parseFloat(this.val("oid-temp1")) || 0, l = parseFloat(this.val("oid-temp2")) || 0, i = parseFloat(this.val("oid-heater")) || 0, e = f(r, 10, 80), a = f(l, 10, 80), h = f(i, 0, 3), d = `waterGradient_${this.props.id}`;
      return t.jsx("div", {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif"
        },
        children: t.jsxs("svg", {
          viewBox: "0 0 280 340",
          style: {
            width: "100%",
            height: "100%",
            maxHeight: 400
          },
          children: [
            t.jsx("defs", {
              children: t.jsxs("linearGradient", {
                id: d,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  t.jsx("stop", {
                    offset: "0%",
                    stopColor: a,
                    stopOpacity: 0.9
                  }),
                  t.jsx("stop", {
                    offset: "100%",
                    stopColor: e,
                    stopOpacity: 0.9
                  })
                ]
              })
            }),
            t.jsx("rect", {
              x: "80",
              y: "20",
              width: "110",
              height: "292",
              rx: "10",
              fill: "#aaa",
              stroke: "#666",
              strokeWidth: "3"
            }),
            t.jsx("rect", {
              x: "88",
              y: "28",
              width: "94",
              height: "276",
              rx: "6",
              fill: `url(#${d})`
            }),
            t.jsx("ellipse", {
              cx: "135",
              cy: "20",
              rx: "55",
              ry: "12",
              fill: "#bbb",
              stroke: "#666",
              strokeWidth: "2"
            }),
            t.jsx("ellipse", {
              cx: "135",
              cy: "312",
              rx: "55",
              ry: "12",
              fill: "#aaa",
              stroke: "#666",
              strokeWidth: "2"
            }),
            t.jsx("rect", {
              x: "190",
              y: "27",
              width: "25",
              height: "10",
              fill: "#ff4444",
              stroke: "#cc2222",
              strokeWidth: "1"
            }),
            t.jsx("path", {
              d: "M 220 32 l -8 -8 M 220 32 l -8 8",
              fill: "none",
              stroke: "#cc2222",
              strokeWidth: "2"
            }),
            t.jsx("rect", {
              x: "198",
              y: "171",
              width: "17",
              height: "10",
              fill: "#ff8844",
              stroke: "#cc6622",
              strokeWidth: "1"
            }),
            t.jsx("path", {
              d: "M 190 176 l 8 -8 M 190 176 l 8 8",
              fill: "none",
              stroke: "#cc6622",
              strokeWidth: "2"
            }),
            t.jsx("rect", {
              x: "198",
              y: "213",
              width: "17",
              height: "10",
              fill: "#6688cc",
              stroke: "#446699",
              strokeWidth: "1"
            }),
            t.jsx("path", {
              d: "M 190 218 l 8 -8 M 190 218 l 8 8",
              fill: "none",
              stroke: "#446699",
              strokeWidth: "2"
            }),
            t.jsx("rect", {
              x: "190",
              y: "253",
              width: "25",
              height: "10",
              fill: "#66aa66",
              stroke: "#448844",
              strokeWidth: "1"
            }),
            t.jsx("path", {
              d: "M 220 258 l -8 -8 M 220 258 l -8 8",
              fill: "none",
              stroke: "#448844",
              strokeWidth: "2"
            }),
            t.jsx("rect", {
              x: "198",
              y: "289",
              width: "17",
              height: "10",
              fill: "#4488ff",
              stroke: "#336699",
              strokeWidth: "1"
            }),
            t.jsx("path", {
              d: "M 190 294 l 8 -8 M 190 294 l 8 8",
              fill: "none",
              stroke: "#336699",
              strokeWidth: "2"
            }),
            t.jsx("rect", {
              x: "60",
              y: "236",
              width: "20",
              height: "18",
              rx: "2",
              fill: "#444",
              stroke: "#333",
              strokeWidth: "1"
            }),
            t.jsx("circle", {
              cx: "68",
              cy: "233",
              r: "3",
              fill: "#222"
            }),
            t.jsx("circle", {
              cx: "72",
              cy: "233",
              r: "3",
              fill: "#222"
            }),
            t.jsx("rect", {
              x: "78",
              y: "240",
              width: "90",
              height: "10",
              rx: "2",
              fill: "#555",
              stroke: "#333",
              strokeWidth: "1"
            }),
            t.jsx("rect", {
              x: "80",
              y: "242",
              width: "86",
              height: "6",
              rx: "1",
              fill: h,
              opacity: 0.9
            }),
            t.jsx("text", {
              x: "135",
              y: "234",
              fill: "#fff",
              fontSize: "14",
              fontWeight: "bold",
              textAnchor: "middle",
              stroke: "#000",
              strokeWidth: "2",
              paintOrder: "stroke",
              children: i.toFixed(1)
            }),
            t.jsx("text", {
              x: "225",
              y: "36",
              fill: "#fff",
              fontSize: "9",
              children: "WW"
            }),
            t.jsx("text", {
              x: "225",
              y: "180",
              fill: "#fff",
              fontSize: "9",
              children: "HZ-W"
            }),
            t.jsx("text", {
              x: "225",
              y: "222",
              fill: "#fff",
              fontSize: "9",
              children: "KW-H"
            }),
            t.jsx("text", {
              x: "225",
              y: "262",
              fill: "#fff",
              fontSize: "9",
              children: "HZ-K"
            }),
            t.jsx("text", {
              x: "225",
              y: "298",
              fill: "#fff",
              fontSize: "9",
              children: "KW"
            }),
            t.jsx("text", {
              x: "135",
              y: "85",
              fill: "#fff",
              fontSize: "48",
              fontWeight: "bold",
              textAnchor: "middle",
              stroke: "#000",
              strokeWidth: "3",
              paintOrder: "stroke",
              children: Math.floor(l)
            }),
            t.jsx("text", {
              x: "135",
              y: "295",
              fill: "#fff",
              fontSize: "48",
              fontWeight: "bold",
              textAnchor: "middle",
              stroke: "#000",
              strokeWidth: "3",
              paintOrder: "stroke",
              children: Math.floor(r)
            })
          ]
        })
      });
    }
  };
});
export {
  __tla,
  x as default
};
