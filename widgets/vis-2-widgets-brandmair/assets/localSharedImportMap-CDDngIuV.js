import { _ as a } from "./preload-helper-PPVm8Dsz.js";
let s, i;
let __tla = (async () => {
  let o;
  o = {
    "@iobroker/adapter-react-v5": async () => await a(() => import("./index-BBef33bx.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "@mui/icons-material": async () => await a(() => import("./index-DN35xnVc.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "@mui/material": async () => await a(() => import("./index-7G1fJOe4.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    react: async () => await a(() => import("./index-0R9ml6Qm.js").then((t) => t.i), [], import.meta.url),
    "react-dom": async () => await a(() => import("./index-ClxTPnPf.js").then(async (m) => {
      await m.__tla;
      return m;
    }).then((t) => t.i), [], import.meta.url)
  };
  i = {
    "@iobroker/adapter-react-v5": {
      name: "@iobroker/adapter-react-v5",
      version: "7.7.5",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis2brandmairWidgets",
      async get() {
        i["@iobroker/adapter-react-v5"].loaded = true;
        const { "@iobroker/adapter-react-v5": e } = o, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "@mui/icons-material": {
      name: "@mui/icons-material",
      version: "6.5.0",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis2brandmairWidgets",
      async get() {
        i["@mui/icons-material"].loaded = true;
        const { "@mui/icons-material": e } = o, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "@mui/material": {
      name: "@mui/material",
      version: "6.5.0",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis2brandmairWidgets",
      async get() {
        i["@mui/material"].loaded = true;
        const { "@mui/material": e } = o, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    react: {
      name: "react",
      version: "18.3.1",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis2brandmairWidgets",
      async get() {
        i.react.loaded = true;
        const { react: e } = o, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "react-dom": {
      name: "react-dom",
      version: "18.3.1",
      scope: [
        "default"
      ],
      loaded: false,
      from: "vis2brandmairWidgets",
      async get() {
        i["react-dom"].loaded = true;
        const { "react-dom": e } = o, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    }
  };
  s = [];
})();
export {
  __tla,
  s as usedRemotes,
  i as usedShared
};
