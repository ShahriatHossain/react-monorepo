import * as Cf from "react/jsx-runtime";
import { jsx as Z, jsxs as bt, Fragment as Rf } from "react/jsx-runtime";
import * as k from "react";
import gt, { isValidElement as Df, useCallback as zf, createContext as tc, useContext as rc, Fragment as Af, useState as Zt, forwardRef as Di, memo as zi, Component as oc, PureComponent as nc, useEffect as Ff } from "react";
import * as jf from "react-dom";
import To, { unstable_batchedUpdates as If } from "react-dom";
const Mf = {};
function mk(e) {
  return /* @__PURE__ */ Z("div", { className: Mf.container, children: /* @__PURE__ */ Z("h1", { children: "Welcome to TaskManagerFeatures!" }) });
}
function qf(e) {
  if (!Array.isArray(e))
    return [e];
  if (process.env.NODE_ENV !== "production" && e.length > 2)
    throw new Error("CSS Bucket contains an entry with greater than 2 items, please report this to https://github.com/microsoft/griffel/issues");
  return e;
}
const Jn = typeof window > "u" ? global : window, Qn = "@griffel/";
function ic(e, t) {
  return Jn[Symbol.for(Qn + e)] || (Jn[Symbol.for(Qn + e)] = t), Jn[Symbol.for(Qn + e)];
}
const _a = /* @__PURE__ */ ic("DEBUG_RESET_CLASSES", {}), Jr = /* @__PURE__ */ ic("DEFINITION_LOOKUP_TABLE", {}), Io = "data-make-styles-bucket", Ai = "f", Qr = "r", Kr = 7, yt = "___", ac = "_", sc = process.env.NODE_ENV === "production" ? yt.length + Kr : yt.length + Kr + ac.length + Kr, Lf = 0, cs = 1, Vf = {
  all: 1,
  animation: 1,
  animationRange: 1,
  background: 1,
  backgroundPosition: 1,
  border: 1,
  borderBlock: 1,
  borderBlockEnd: 1,
  borderBlockStart: 1,
  borderBottom: 1,
  borderColor: 1,
  borderImage: 1,
  borderInline: 1,
  borderInlineEnd: 1,
  borderInlineStart: 1,
  borderLeft: 1,
  borderRadius: 1,
  borderRight: 1,
  borderStyle: 1,
  borderTop: 1,
  borderWidth: 1,
  caret: 1,
  columns: 1,
  columnRule: 1,
  containIntrinsicSize: 1,
  container: 1,
  flex: 1,
  flexFlow: 1,
  font: 1,
  gap: 1,
  grid: 1,
  gridArea: 1,
  gridColumn: 1,
  gridRow: 1,
  gridTemplate: 1,
  inset: 1,
  insetBlock: 1,
  insetInline: 1,
  lineClamp: 1,
  listStyle: 1,
  margin: 1,
  marginBlock: 1,
  marginInline: 1,
  mask: 1,
  maskBorder: 1,
  motion: 1,
  offset: 1,
  outline: 1,
  overflow: 1,
  overscrollBehavior: 1,
  padding: 1,
  paddingBlock: 1,
  paddingInline: 1,
  placeItems: 1,
  placeContent: 1,
  placeSelf: 1,
  scrollMargin: 1,
  scrollMarginBlock: 1,
  scrollMarginInline: 1,
  scrollPadding: 1,
  scrollPaddingBlock: 1,
  scrollPaddingInline: 1,
  scrollSnapMargin: 1,
  scrollTimeline: 1,
  textDecoration: 1,
  textEmphasis: 1,
  transition: 1,
  viewTimeline: 1
};
function Hf(e, t, r) {
  const o = [];
  if (r[Io] = t, e)
    for (const i in r)
      e.setAttribute(i, r[i]);
  function n(i) {
    return e != null && e.sheet ? e.sheet.insertRule(i, e.sheet.cssRules.length) : o.push(i);
  }
  return {
    elementAttributes: r,
    insertRule: n,
    element: e,
    bucketName: t,
    cssRules() {
      return e != null && e.sheet ? Array.from(e.sheet.cssRules).map((i) => i.cssText) : o;
    }
  };
}
const $f = [
  // reset styles
  "r",
  // catch-all
  "d",
  // link
  "l",
  // visited
  "v",
  // focus-within
  "w",
  // focus
  "f",
  // focus-visible
  "i",
  // hover
  "h",
  // active
  "a",
  // at rules for reset styles
  "s",
  // keyframes
  "k",
  // at-rules
  "t",
  // @media rules
  "m",
  // @container rules
  "c"
], us = /* @__PURE__ */ $f.reduce((e, t, r) => (e[t] = r, e), {});
function Wf(e, t, r, o, n = {}) {
  const i = e === "m", a = i ? e + n.m : e;
  if (!o.stylesheets[a]) {
    const s = t && t.createElement("style"), l = Hf(s, e, Object.assign({}, o.styleElementAttributes, i && {
      media: n.m
    }));
    o.stylesheets[a] = l, t && s && t.head.insertBefore(s, Uf(t, r, e, o, n));
  }
  return o.stylesheets[a];
}
function Uf(e, t, r, o, n) {
  const i = us[r];
  let a = (u) => i - us[u.getAttribute(Io)], s = e.head.querySelectorAll(`[${Io}]`);
  if (r === "m" && n) {
    const u = e.head.querySelectorAll(`[${Io}="${r}"]`);
    u.length && (s = u, a = (d) => o.compareMediaQueries(n.m, d.media));
  }
  const l = s.length;
  let c = l - 1;
  for (; c >= 0; ) {
    const u = s.item(c);
    if (a(u) > 0)
      return u.nextSibling;
    c--;
  }
  return l > 0 ? s.item(0) : t ? t.nextSibling : null;
}
const Gf = /* @__PURE__ */ ["-moz-placeholder", "-moz-focus-inner", "-moz-focusring", "-ms-input-placeholder", "-moz-read-write", "-moz-read-only"].join("|"), Kf = /* @__PURE__ */ new RegExp(`:(${Gf})`);
function ds(e, t) {
  try {
    e.insertRule(t);
  } catch (r) {
    process.env.NODE_ENV !== "production" && !Kf.test(t) && console.error(`There was a problem inserting the following rule: "${t}"`, r);
  }
}
const kr = /* @__PURE__ */ (() => {
  try {
    var e;
    return !!(typeof window < "u" && ((e = window.sessionStorage) != null && e.getItem("__GRIFFEL_DEVTOOLS__")));
  } catch {
    return !1;
  }
})();
function ct(e) {
  for (var t = 0, r, o = 0, n = e.length; n >= 4; ++o, n -= 4)
    r = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (n) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Zn(e) {
  const t = e.length;
  if (t === Kr)
    return e;
  for (let r = t; r < Kr; r++)
    e += "0";
  return e;
}
function lc(e, t, r = []) {
  return process.env.NODE_ENV === "production" ? yt + Zn(ct(e + t)) : yt + Zn(ct(e + t)) + ac + Zn(ct(r.join("")));
}
function cc(e, t) {
  let r = "";
  for (const o in e) {
    const n = e[o];
    if (n) {
      const i = Array.isArray(n);
      t === "rtl" ? r += (i ? n[1] : n) + " " : r += (i ? n[0] : n) + " ";
    }
  }
  return r.slice(0, -1);
}
function Zo(e, t) {
  const r = {};
  for (const o in e) {
    const n = cc(e[o], t);
    if (n === "") {
      r[o] = "";
      continue;
    }
    const i = lc(n, t), a = i + " " + n;
    Jr[i] = [e[o], t], r[o] = a;
  }
  return r;
}
const en = {};
function K() {
  let e = null, t = "", r = "";
  const o = new Array(arguments.length);
  let n = "";
  for (let u = 0; u < arguments.length; u++) {
    const d = arguments[u];
    if (typeof d == "string" && d !== "") {
      const f = d.indexOf(yt);
      if (f === -1)
        process.env.NODE_ENV !== "production" && d.split(" ").forEach((h) => {
          h.startsWith(Qr) && _a[h] && (n ? console.error(`mergeClasses(): a passed string contains multiple classes produced by makeResetStyles (${d} & ${t}, this will lead to non-deterministic behavior. Learn more:https://griffel.js.org/react/api/make-reset-styles#limitations
Source string: ${d}`) : n = h);
        }), t += d + " ";
      else {
        const h = d.substr(f, sc);
        f > 0 && (t += d.slice(0, f)), r += h, o[u] = h;
      }
      process.env.NODE_ENV !== "production" && d.indexOf(yt, f + 1) !== -1 && console.error(`mergeClasses(): a passed string contains multiple identifiers of atomic classes (classes that start with "${yt}"), it's possible that passed classes were concatenated in a wrong way. Source string: ${d}`);
    }
  }
  if (r === "")
    return t.slice(0, -1);
  const i = en[r];
  if (i !== void 0)
    return t + i;
  const a = [];
  for (let u = 0; u < arguments.length; u++) {
    const d = o[u];
    if (d) {
      const f = Jr[d];
      f ? (a.push(f[Lf]), process.env.NODE_ENV !== "production" && e !== null && e !== f[cs] && console.error(`mergeClasses(): a passed string contains an identifier (${d}) that has different direction (dir="${f[1] ? "rtl" : "ltr"}") setting than other classes. This is not supported. Source string: ${arguments[u]}`), e = f[cs]) : process.env.NODE_ENV !== "production" && console.error(`mergeClasses(): a passed string contains an identifier (${d}) that does not match any entry in cache. Source string: ${arguments[u]}`);
    }
  }
  const s = Object.assign.apply(
    Object,
    // .assign() mutates the first object, we can't mutate mappings as it will produce invalid results later
    [{}].concat(a)
  );
  let l = cc(s, e);
  const c = lc(l, e, o);
  return l = c + " " + l, en[r] = l, Jr[c] = [s, e], t + l;
}
const fs = {}, vs = /* @__PURE__ */ new Set(), wr = {
  getChildrenSequences: (e) => {
    const t = Object.keys(en).find((r) => en[r].startsWith(e));
    return t ? t.split(yt).filter((r) => r.length).map((r) => yt + r) : [];
  },
  addCSSRule: (e) => {
    vs.add(e);
  },
  addSequenceDetails: (e, t) => {
    Object.entries(e).forEach(([r, o]) => {
      fs[o.substring(0, sc)] = {
        slotName: r,
        sourceURL: t
      };
    });
  },
  getCSSRules: () => Array.from(vs),
  getSequenceDetails: (e) => fs[e]
};
function hs(e, t) {
  return Array.isArray(e) ? t === "rtl" ? e[1] : e[0] : e;
}
function Xf(e, t, r, o) {
  const n = e[0], i = e[1];
  return Object.entries(n).map(([a, s]) => {
    const l = hs(s, i);
    let c;
    if (r && t) {
      const u = r.find(({
        className: d
      }) => d === l);
      !u && t[0][a] ? c = hs(t[0][a], t[1]) : u && t[0][a] ? c = (o ? o.filter(({
        debugClassNames: f
      }) => f.filter(({
        className: h
      }) => h === l).length > 0).length > 0 : !1) ? u.className : u.overriddenBy : (!u && !t[0][a] || u && !t[0][a]) && (c = void 0);
    }
    return {
      className: l,
      overriddenBy: c
    };
  });
}
function uc(e, t) {
  const r = Jr[e];
  if (r === void 0)
    return;
  const o = t ? Jr[t.sequenceHash] : void 0, n = Xf(r, o, t == null ? void 0 : t.debugClassNames, t == null ? void 0 : t.children), i = {
    sequenceHash: e,
    direction: r[1],
    children: [],
    debugClassNames: n
  };
  return wr.getChildrenSequences(i.sequenceHash).reverse().forEach((s) => {
    const l = uc(s, i);
    l && i.children.push(l);
  }), i.children.length || (i.rules = {}, i.debugClassNames.forEach(({
    className: s
  }) => {
    const l = wr.getSequenceDetails(e);
    l && (i.slot = l.slotName, i.sourceURL = l.sourceURL);
    const c = wr.getCSSRules().find((u) => u.includes(s));
    i.rules[s] = c;
  })), i;
}
function Yf(e) {
  const t = e.defaultView;
  if (!t || t.__GRIFFEL_DEVTOOLS__)
    return;
  const r = {
    getInfo: (o) => {
      const n = Array.from(o.classList).find((i) => i.startsWith(yt));
      if (n !== void 0)
        return uc(n);
    }
  };
  Object.defineProperty(t, "__GRIFFEL_DEVTOOLS__", {
    configurable: !1,
    enumerable: !1,
    get() {
      return r;
    }
  });
}
let Jf = 0;
const Qf = (e, t) => e < t ? -1 : e > t ? 1 : 0;
function Zf(e = typeof document > "u" ? void 0 : document, t = {}) {
  const {
    unstable_filterCSSRule: r,
    insertionPoint: o,
    styleElementAttributes: n,
    compareMediaQueries: i = Qf
  } = t, a = {
    insertionCache: {},
    stylesheets: {},
    styleElementAttributes: Object.freeze(n),
    compareMediaQueries: i,
    id: `d${Jf++}`,
    insertCSSRules(s) {
      for (const l in s) {
        const c = s[l];
        for (let u = 0, d = c.length; u < d; u++) {
          const [f, h] = qf(c[u]), v = Wf(l, e, o || null, a, h);
          a.insertionCache[f] || (a.insertionCache[f] = l, process.env.NODE_ENV !== "production" && kr && wr.addCSSRule(f), r ? r(f) && ds(v, f) : ds(v, f));
        }
      }
    }
  };
  return e && process.env.NODE_ENV !== "production" && kr && Yf(e), a;
}
const _n = () => {
  const e = {};
  return function(r, o) {
    e[r.id] === void 0 && (r.insertCSSRules(o), e[r.id] = !0);
  };
};
function dc(e) {
  return e.reduce(function(t, r) {
    var o = r[0], n = r[1];
    return t[o] = n, t[n] = o, t;
  }, {});
}
function ev(e) {
  return typeof e == "boolean";
}
function tv(e) {
  return typeof e == "function";
}
function Hr(e) {
  return typeof e == "number";
}
function rv(e) {
  return e === null || typeof e > "u";
}
function ov(e) {
  return e && typeof e == "object";
}
function nv(e) {
  return typeof e == "string";
}
function Mo(e, t) {
  return e.indexOf(t) !== -1;
}
function iv(e) {
  return parseFloat(e) === 0 ? e : e[0] === "-" ? e.slice(1) : "-" + e;
}
function No(e, t, r, o) {
  return t + iv(r) + o;
}
function av(e) {
  var t = e.indexOf(".");
  if (t === -1)
    e = 100 - parseFloat(e) + "%";
  else {
    var r = e.length - t - 2;
    e = 100 - parseFloat(e), e = e.toFixed(r) + "%";
  }
  return e;
}
function fc(e) {
  return e.replace(/ +/g, " ").split(" ").map(function(t) {
    return t.trim();
  }).filter(Boolean).reduce(function(t, r) {
    var o = t.list, n = t.state, i = (r.match(/\(/g) || []).length, a = (r.match(/\)/g) || []).length;
    return n.parensDepth > 0 ? o[o.length - 1] = o[o.length - 1] + " " + r : o.push(r), n.parensDepth += i - a, {
      list: o,
      state: n
    };
  }, {
    list: [],
    state: {
      parensDepth: 0
    }
  }).list;
}
function ps(e) {
  var t = fc(e);
  if (t.length <= 3 || t.length > 4)
    return e;
  var r = t[0], o = t[1], n = t[2], i = t[3];
  return [r, i, n, o].join(" ");
}
function sv(e) {
  return !ev(e) && !rv(e);
}
function lv(e) {
  for (var t = [], r = 0, o = 0, n = !1; o < e.length; )
    !n && e[o] === "," ? (t.push(e.substring(r, o).trim()), o++, r = o) : e[o] === "(" ? (n = !0, o++) : (e[o] === ")" && (n = !1), o++);
  return r != o && t.push(e.substring(r, o + 1)), t;
}
var N = {
  padding: function(t) {
    var r = t.value;
    return Hr(r) ? r : ps(r);
  },
  textShadow: function(t) {
    var r = t.value, o = lv(r).map(function(n) {
      return n.replace(/(^|\s)(-*)([.|\d]+)/, function(i, a, s, l) {
        if (l === "0")
          return i;
        var c = s === "" ? "-" : "";
        return "" + a + c + l;
      });
    });
    return o.join(",");
  },
  borderColor: function(t) {
    var r = t.value;
    return ps(r);
  },
  borderRadius: function(t) {
    var r = t.value;
    if (Hr(r))
      return r;
    if (Mo(r, "/")) {
      var o = r.split("/"), n = o[0], i = o[1], a = N.borderRadius({
        value: n.trim()
      }), s = N.borderRadius({
        value: i.trim()
      });
      return a + " / " + s;
    }
    var l = fc(r);
    switch (l.length) {
      case 2:
        return l.reverse().join(" ");
      case 4: {
        var c = l[0], u = l[1], d = l[2], f = l[3];
        return [u, c, f, d].join(" ");
      }
      default:
        return r;
    }
  },
  background: function(t) {
    var r = t.value, o = t.valuesToConvert, n = t.isRtl, i = t.bgImgDirectionRegex, a = t.bgPosDirectionRegex;
    if (Hr(r))
      return r;
    var s = r.replace(/(url\(.*?\))|(rgba?\(.*?\))|(hsl\(.*?\))|(#[a-fA-F0-9]+)|((^| )(\D)+( |$))/g, "").trim();
    return r = r.replace(s, N.backgroundPosition({
      value: s,
      valuesToConvert: o,
      isRtl: n,
      bgPosDirectionRegex: a
    })), N.backgroundImage({
      value: r,
      valuesToConvert: o,
      bgImgDirectionRegex: i
    });
  },
  backgroundImage: function(t) {
    var r = t.value, o = t.valuesToConvert, n = t.bgImgDirectionRegex;
    return !Mo(r, "url(") && !Mo(r, "linear-gradient(") ? r : r.replace(n, function(i, a, s) {
      return i.replace(s, o[s]);
    });
  },
  backgroundPosition: function(t) {
    var r = t.value, o = t.valuesToConvert, n = t.isRtl, i = t.bgPosDirectionRegex;
    return r.replace(n ? /^((-|\d|\.)+%)/ : null, function(a, s) {
      return av(s);
    }).replace(i, function(a) {
      return o[a];
    });
  },
  backgroundPositionX: function(t) {
    var r = t.value, o = t.valuesToConvert, n = t.isRtl, i = t.bgPosDirectionRegex;
    return Hr(r) ? r : N.backgroundPosition({
      value: r,
      valuesToConvert: o,
      isRtl: n,
      bgPosDirectionRegex: i
    });
  },
  transition: function(t) {
    var r = t.value, o = t.propertiesToConvert;
    return r.split(/,\s*/g).map(function(n) {
      var i = n.split(" ");
      return i[0] = o[i[0]] || i[0], i.join(" ");
    }).join(", ");
  },
  transitionProperty: function(t) {
    var r = t.value, o = t.propertiesToConvert;
    return r.split(/,\s*/g).map(function(n) {
      return o[n] || n;
    }).join(", ");
  },
  transform: function(t) {
    var r = t.value, o = "[^\\u0020-\\u007e]", n = "(?:(?:(?:\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])", i = "((?:-?" + ("(?:[0-9]*\\.[0-9]+|[0-9]+)(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|" + ("-?" + ("(?:[_a-z]|" + o + "|" + n + ")") + ("(?:[_a-z0-9-]|" + o + "|" + n + ")") + "*") + ")?") + ")|(?:inherit|auto))", a = new RegExp("(translateX\\s*\\(\\s*)" + i + "(\\s*\\))", "gi"), s = new RegExp("(translate\\s*\\(\\s*)" + i + "((?:\\s*,\\s*" + i + "){0,1}\\s*\\))", "gi"), l = new RegExp("(translate3d\\s*\\(\\s*)" + i + "((?:\\s*,\\s*" + i + "){0,2}\\s*\\))", "gi"), c = new RegExp("(rotate[ZY]?\\s*\\(\\s*)" + i + "(\\s*\\))", "gi");
    return r.replace(a, No).replace(s, No).replace(l, No).replace(c, No);
  }
};
N.objectPosition = N.backgroundPosition;
N.margin = N.padding;
N.borderWidth = N.padding;
N.boxShadow = N.textShadow;
N.webkitBoxShadow = N.boxShadow;
N.mozBoxShadow = N.boxShadow;
N.WebkitBoxShadow = N.boxShadow;
N.MozBoxShadow = N.boxShadow;
N.borderStyle = N.borderColor;
N.webkitTransform = N.transform;
N.mozTransform = N.transform;
N.WebkitTransform = N.transform;
N.MozTransform = N.transform;
N.transformOrigin = N.backgroundPosition;
N.webkitTransformOrigin = N.transformOrigin;
N.mozTransformOrigin = N.transformOrigin;
N.WebkitTransformOrigin = N.transformOrigin;
N.MozTransformOrigin = N.transformOrigin;
N.webkitTransition = N.transition;
N.mozTransition = N.transition;
N.WebkitTransition = N.transition;
N.MozTransition = N.transition;
N.webkitTransitionProperty = N.transitionProperty;
N.mozTransitionProperty = N.transitionProperty;
N.WebkitTransitionProperty = N.transitionProperty;
N.MozTransitionProperty = N.transitionProperty;
N["text-shadow"] = N.textShadow;
N["border-color"] = N.borderColor;
N["border-radius"] = N.borderRadius;
N["background-image"] = N.backgroundImage;
N["background-position"] = N.backgroundPosition;
N["background-position-x"] = N.backgroundPositionX;
N["object-position"] = N.objectPosition;
N["border-width"] = N.padding;
N["box-shadow"] = N.textShadow;
N["-webkit-box-shadow"] = N.textShadow;
N["-moz-box-shadow"] = N.textShadow;
N["border-style"] = N.borderColor;
N["-webkit-transform"] = N.transform;
N["-moz-transform"] = N.transform;
N["transform-origin"] = N.transformOrigin;
N["-webkit-transform-origin"] = N.transformOrigin;
N["-moz-transform-origin"] = N.transformOrigin;
N["-webkit-transition"] = N.transition;
N["-moz-transition"] = N.transition;
N["transition-property"] = N.transitionProperty;
N["-webkit-transition-property"] = N.transitionProperty;
N["-moz-transition-property"] = N.transitionProperty;
var vc = dc([
  ["paddingLeft", "paddingRight"],
  ["marginLeft", "marginRight"],
  ["left", "right"],
  ["borderLeft", "borderRight"],
  ["borderLeftColor", "borderRightColor"],
  ["borderLeftStyle", "borderRightStyle"],
  ["borderLeftWidth", "borderRightWidth"],
  ["borderTopLeftRadius", "borderTopRightRadius"],
  ["borderBottomLeftRadius", "borderBottomRightRadius"],
  // kebab-case versions
  ["padding-left", "padding-right"],
  ["margin-left", "margin-right"],
  ["border-left", "border-right"],
  ["border-left-color", "border-right-color"],
  ["border-left-style", "border-right-style"],
  ["border-left-width", "border-right-width"],
  ["border-top-left-radius", "border-top-right-radius"],
  ["border-bottom-left-radius", "border-bottom-right-radius"]
]), cv = ["content"], bs = dc([["ltr", "rtl"], ["left", "right"], ["w-resize", "e-resize"], ["sw-resize", "se-resize"], ["nw-resize", "ne-resize"]]), uv = new RegExp("(^|\\W|_)((ltr)|(rtl)|(left)|(right))(\\W|_|$)", "g"), dv = new RegExp("(left)|(right)");
function ya(e) {
  return Object.keys(e).reduce(function(t, r) {
    var o = e[r];
    if (nv(o) && (o = o.trim()), Mo(cv, r))
      return t[r] = o, t;
    var n = Zr(r, o), i = n.key, a = n.value;
    return t[i] = a, t;
  }, Array.isArray(e) ? [] : {});
}
function Zr(e, t) {
  var r = /\/\*\s?@noflip\s?\*\//.test(t), o = r ? e : fv(e), n = r ? t : vv(o, t);
  return {
    key: o,
    value: n
  };
}
function fv(e) {
  return vc[e] || e;
}
function vv(e, t) {
  if (!sv(t))
    return t;
  if (ov(t))
    return ya(t);
  var r = Hr(t), o = tv(t), n = r || o ? t : t.replace(/ !important.*?$/, ""), i = !r && n.length !== t.length, a = N[e], s;
  return a ? s = a({
    value: n,
    valuesToConvert: bs,
    propertiesToConvert: vc,
    isRtl: !0,
    bgImgDirectionRegex: uv,
    bgPosDirectionRegex: dv
  }) : s = bs[n] || n, i ? s + " !important" : s;
}
const hv = /[A-Z]/g, pv = /^ms-/, ei = {};
function bv(e) {
  return "-" + e.toLowerCase();
}
function Ot(e) {
  if (Object.prototype.hasOwnProperty.call(ei, e))
    return ei[e];
  if (e.substr(0, 2) === "--")
    return e;
  const t = e.replace(hv, bv);
  return ei[e] = pv.test(t) ? "-" + t : t;
}
function hc(e) {
  return e.charAt(0) === "&" ? e.slice(1) : e;
}
var Xr = "-moz-", st = "-webkit-", pc = "comm", yn = "rule", wa = "decl", gv = "@media", mv = "@import", _v = "@supports", yv = "@keyframes", bc = "@layer", gc = Math.abs, wn = String.fromCharCode, wv = Object.assign;
function kv(e, t) {
  return Fe(e, 0) ^ 45 ? (((t << 2 ^ Fe(e, 0)) << 2 ^ Fe(e, 1)) << 2 ^ Fe(e, 2)) << 2 ^ Fe(e, 3) : 0;
}
function mc(e) {
  return e.trim();
}
function _c(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Le(e, t, r) {
  return e.replace(t, r);
}
function yc(e, t, r) {
  return e.indexOf(t, r);
}
function Fe(e, t) {
  return e.charCodeAt(t) | 0;
}
function eo(e, t, r) {
  return e.slice(t, r);
}
function pt(e) {
  return e.length;
}
function wc(e) {
  return e.length;
}
function er(e, t) {
  return t.push(e), e;
}
function xv(e, t) {
  return e.map(t).join("");
}
var kn = 1, xr = 1, kc = 0, Ge = 0, _e = 0, Or = "";
function xn(e, t, r, o, n, i, a, s) {
  return { value: e, root: t, parent: r, type: o, props: n, children: i, line: kn, column: xr, length: a, return: "", siblings: s };
}
function ti(e, t) {
  return wv(xn("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ev() {
  return _e;
}
function Sv() {
  return _e = Ge > 0 ? Fe(Or, --Ge) : 0, xr--, _e === 10 && (xr = 1, kn--), _e;
}
function rt() {
  return _e = Ge < kc ? Fe(Or, Ge++) : 0, xr++, _e === 10 && (xr = 1, kn++), _e;
}
function tr() {
  return Fe(Or, Ge);
}
function qo() {
  return Ge;
}
function En(e, t) {
  return eo(Or, e, t);
}
function tn(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function xc(e) {
  return kn = xr = 1, kc = pt(Or = e), Ge = 0, [];
}
function Ec(e) {
  return Or = "", e;
}
function Lo(e) {
  return mc(En(Ge - 1, Fi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Bv(e) {
  return Ec(Nv(xc(e)));
}
function Tv(e) {
  for (; (_e = tr()) && _e < 33; )
    rt();
  return tn(e) > 2 || tn(_e) > 3 ? "" : " ";
}
function Nv(e) {
  for (; rt(); )
    switch (tn(_e)) {
      case 0:
        er(Sc(Ge - 1), e);
        break;
      case 2:
        er(Lo(_e), e);
        break;
      default:
        er(wn(_e), e);
    }
  return e;
}
function Ov(e, t) {
  for (; --t && rt() && !(_e < 48 || _e > 102 || _e > 57 && _e < 65 || _e > 70 && _e < 97); )
    ;
  return En(e, qo() + (t < 6 && tr() == 32 && rt() == 32));
}
function Fi(e) {
  for (; rt(); )
    switch (_e) {
      case e:
        return Ge;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fi(_e);
        break;
      case 40:
        e === 41 && Fi(e);
        break;
      case 92:
        rt();
        break;
    }
  return Ge;
}
function Pv(e, t) {
  for (; rt() && e + _e !== 57; )
    if (e + _e === 84 && tr() === 47)
      break;
  return "/*" + En(t, Ge - 1) + "*" + wn(e === 47 ? e : rt());
}
function Sc(e) {
  for (; !tn(tr()); )
    rt();
  return En(e, Ge);
}
function ka(e) {
  return Ec(Vo("", null, null, null, [""], e = xc(e), 0, [0], e));
}
function Vo(e, t, r, o, n, i, a, s, l) {
  for (var c = 0, u = 0, d = a, f = 0, h = 0, v = 0, p = 1, g = 1, b = 1, y = 0, m = "", w = n, _ = i, E = o, S = m; g; )
    switch (v = y, y = rt()) {
      case 40:
        if (v != 108 && Fe(S, d - 1) == 58) {
          yc(S += Le(Lo(y), "&", "&\f"), "&\f", gc(c ? s[c - 1] : 0)) != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Lo(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Tv(v);
        break;
      case 92:
        S += Ov(qo() - 1, 7);
        continue;
      case 47:
        switch (tr()) {
          case 42:
          case 47:
            er(Cv(Pv(rt(), qo()), t, r, l), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * p:
        s[c++] = pt(S) * b;
      case 125 * p:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            b == -1 && (S = Le(S, /\f/g, "")), h > 0 && pt(S) - d && er(h > 32 ? ms(S + ";", o, r, d - 1, l) : ms(Le(S, " ", "") + ";", o, r, d - 2, l), l);
            break;
          case 59:
            S += ";";
          default:
            if (er(E = gs(S, t, r, c, u, n, s, m, w = [], _ = [], d, i), i), y === 123)
              if (u === 0)
                Vo(S, t, E, E, w, i, d, s, _);
              else
                switch (f === 99 && Fe(S, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Vo(e, E, E, o && er(gs(e, E, E, 0, 0, n, s, m, n, w = [], d, _), _), n, _, d, s, o ? w : _);
                    break;
                  default:
                    Vo(S, E, E, E, [""], _, 0, s, _);
                }
        }
        c = u = h = 0, p = b = 1, m = S = "", d = a;
        break;
      case 58:
        d = 1 + pt(S), h = v;
      default:
        if (p < 1) {
          if (y == 123)
            --p;
          else if (y == 125 && p++ == 0 && Sv() == 125)
            continue;
        }
        switch (S += wn(y), y * p) {
          case 38:
            b = u > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            s[c++] = (pt(S) - 1) * b, b = 1;
            break;
          case 64:
            tr() === 45 && (S += Lo(rt())), f = tr(), u = d = pt(m = S += Sc(qo())), y++;
            break;
          case 45:
            v === 45 && pt(S) == 2 && (p = 0);
        }
    }
  return i;
}
function gs(e, t, r, o, n, i, a, s, l, c, u, d) {
  for (var f = n - 1, h = n === 0 ? i : [""], v = wc(h), p = 0, g = 0, b = 0; p < o; ++p)
    for (var y = 0, m = eo(e, f + 1, f = gc(g = a[p])), w = e; y < v; ++y)
      (w = mc(g > 0 ? h[y] + " " + m : Le(m, /&\f/g, h[y]))) && (l[b++] = w);
  return xn(e, t, r, n === 0 ? yn : s, l, c, u, d);
}
function Cv(e, t, r, o) {
  return xn(e, t, r, pc, wn(Ev()), eo(e, 2, -2), 0, o);
}
function ms(e, t, r, o, n) {
  return xn(e, t, r, wa, eo(e, 0, o), eo(e, o + 1, -1), o, n);
}
function nr(e, t) {
  for (var r = "", o = 0; o < e.length; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function xa(e, t, r, o) {
  switch (e.type) {
    case bc:
      if (e.children.length)
        break;
    case mv:
    case wa:
      return e.return = e.return || e.value;
    case pc:
      return "";
    case yv:
      return e.return = e.value + "{" + nr(e.children, o) + "}";
    case yn:
      if (!pt(e.value = e.props.join(",")))
        return "";
  }
  return pt(r = nr(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ea(e) {
  var t = wc(e);
  return function(r, o, n, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, o, n, i) || "";
    return a;
  };
}
function Bc(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
const Tc = (e) => {
  switch (e.type) {
    case yn:
      if (typeof e.props == "string") {
        if (process.env.NODE_ENV !== "production")
          throw new Error(`"element.props" has type "string" (${JSON.stringify(e.props, null, 2)}), it's not expected. Please report a bug if it happens.`);
        return;
      }
      e.props = e.props.map((t) => t.indexOf(":global(") === -1 ? t : Bv(t).reduce((r, o, n, i) => {
        if (o === "")
          return r;
        if (o === ":" && i[n + 1] === "global") {
          const a = (
            // An inner part of ":global()"
            i[n + 2].slice(1, -1) + // A separator between selectors i.e. "body .class"
            " "
          );
          return r.unshift(a), i[n + 1] = "", i[n + 2] = "", r;
        }
        return r.push(o), r;
      }, []).join(""));
  }
};
function Nc(e, t, r) {
  switch (kv(e, t)) {
    case 5103:
      return st + "print-" + e + e;
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
      return st + e + e;
    case 4215:
      if (Fe(e, 9) === 102 || Fe(e, t + 1) === 116)
        return st + e + e;
      break;
    case 4789:
      return Xr + e + e;
    case 5349:
    case 4246:
    case 6968:
      return st + e + Xr + e + e;
    case 6187:
      if (!_c(e, /grab/))
        return Le(Le(Le(e, /(zoom-|grab)/, st + "$1"), /(image-set)/, st + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Le(e, /(image-set\([^]*)/, st + "$1$`$1");
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Le(e, /(.+)-inline(.+)/, st + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (pt(e) - 1 - t > 6)
        switch (Fe(e, t + 1)) {
          case 102:
            if (Fe(e, t + 3) === 108)
              return Le(
                e,
                /(.+:)(.+)-([^]+)/,
                // eslint-disable-next-line no-useless-concat, eqeqeq
                "$1" + st + "$2-$3$1" + Xr + (Fe(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e;
          case 115:
            return ~yc(e, "stretch") ? Nc(Le(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
  }
  return e;
}
function Sa(e, t, r, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case wa:
        e.return = Nc(e.value, e.length);
        return;
      case yn:
        if (e.length)
          return xv(e.props, function(n) {
            switch (_c(n, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return nr(
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  [ti(e, {
                    props: [Le(n, /:(read-\w+)/, ":" + Xr + "$1")]
                  })],
                  o
                );
              case "::placeholder":
                return nr([
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  ti(e, {
                    props: [Le(n, /:(plac\w+)/, ":" + st + "input-$1")]
                  }),
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  ti(e, {
                    props: [Le(n, /:(plac\w+)/, ":" + Xr + "$1")]
                  })
                ], o);
            }
            return "";
          });
    }
}
function Oc(e) {
  switch (e.type) {
    case "@container":
    case gv:
    case _v:
    case bc:
      return !0;
  }
  return !1;
}
const Rv = (e) => {
  Oc(e) && Array.isArray(e.children) && e.children.sort((t, r) => t.props[0] > r.props[0] ? 1 : -1);
};
function Dv() {
}
function zv(e, t) {
  const r = [];
  return nr(ka(e), Ea([
    Tc,
    t ? Rv : Dv,
    Sa,
    xa,
    // 💡 we are using `.insertRule()` API for DOM operations, which does not support
    // insertion of multiple CSS rules in a single call. `rulesheet` plugin extracts
    // individual rules to be used with this API
    Bc((o) => r.push(o))
  ])), r;
}
const Av = /,( *[^ &])/g;
function Pc(e) {
  return "&" + hc(
    // Regex there replaces a comma, spaces and an ampersand if it's present with comma and an ampersand.
    // This allows to normalize input, see examples in JSDoc.
    e.replace(Av, ",&$1")
  );
}
function _s(e, t, r) {
  let o = t;
  return r.length > 0 && (o = r.reduceRight((n, i) => `${Pc(i)} { ${n} }`, t)), `${e}{${o}}`;
}
function ys(e) {
  const {
    className: t,
    media: r,
    layer: o,
    selectors: n,
    support: i,
    property: a,
    rtlClassName: s,
    rtlProperty: l,
    rtlValue: c,
    value: u,
    container: d
  } = e, f = `.${t}`, h = Array.isArray(u) ? `${u.map((p) => `${Ot(a)}: ${p}`).join(";")};` : `${Ot(a)}: ${u};`;
  let v = _s(f, h, n);
  if (l && s) {
    const p = `.${s}`, g = Array.isArray(c) ? `${c.map((b) => `${Ot(l)}: ${b}`).join(";")};` : `${Ot(l)}: ${c};`;
    v += _s(p, g, n);
  }
  return r && (v = `@media ${r} { ${v} }`), o && (v = `@layer ${o} { ${v} }`), i && (v = `@supports ${i} { ${v} }`), d && (v = `@container ${d} { ${v} }`), zv(v, !0);
}
function Fv(e) {
  let t = "";
  for (const r in e) {
    const o = e[r];
    typeof o != "string" && typeof o != "number" || (t += Ot(r) + ":" + o + ";");
  }
  return t;
}
function rn(e) {
  let t = "";
  for (const r in e)
    t += `${r}{${Fv(e[r])}}`;
  return t;
}
function on(e, t) {
  const r = `@keyframes ${e} {${t}}`, o = [];
  return nr(ka(r), Ea([
    xa,
    Sa,
    // 💡 we are using `.insertRule()` API for DOM operations, which does not support
    // insertion of multiple CSS rules in a single call. `rulesheet` plugin extracts
    // individual rules to be used with this API
    Bc((n) => o.push(n))
  ])), o;
}
function ws(e, t) {
  return e.length === 0 ? t : `${e} and ${t}`;
}
function Cc(e) {
  return e.substr(0, 6) === "@media";
}
function Rc(e) {
  return e.substr(0, 6) === "@layer";
}
const jv = /^(:|\[|>|&)/;
function Dc(e) {
  return jv.test(e);
}
function zc(e) {
  return e.substr(0, 9) === "@supports";
}
function Ac(e) {
  return e.substring(0, 10) === "@container";
}
function Fc(e) {
  return e != null && typeof e == "object" && Array.isArray(e) === !1;
}
const ks = {
  // :focus-within
  "us-w": "w",
  // :focus-visible
  "us-v": "i",
  // :link
  nk: "l",
  // :visited
  si: "v",
  // :focus
  cu: "f",
  // :hover
  ve: "h",
  // :active
  ti: "a"
};
function xs(e, t, r, o, n) {
  if (r)
    return "m";
  if (t || o)
    return "t";
  if (n)
    return "c";
  if (e.length > 0) {
    const i = e[0].trim();
    if (i.charCodeAt(0) === 58)
      return ks[i.slice(4, 8)] || ks[i.slice(3, 5)] || "d";
  }
  return "d";
}
function Oo({
  container: e,
  media: t,
  layer: r,
  property: o,
  selector: n,
  support: i,
  value: a
}) {
  const s = ct(n + e + t + r + i + o + // Trimming of value is required to generate consistent hashes
  a.trim());
  return Ai + s;
}
function Es(e, t, r, o, n) {
  const i = e + t + r + o + n, a = ct(i), s = a.charCodeAt(0);
  return s >= 48 && s <= 57 ? String.fromCharCode(s + 17) + a.slice(1) : a;
}
function Ss(e) {
  return e.replace(/>\s+/g, ">");
}
function jc(...e) {
  process.env.NODE_ENV !== "production" && typeof document < "u" && console.error(...e);
}
function Ic(e, t) {
  const r = JSON.stringify(t, null, 2), o = ["@griffel/react: A rule was not resolved to CSS properly. Please check your `makeStyles` or `makeResetStyles` calls for following:", " ".repeat(2) + "makeStyles({", " ".repeat(4) + "[slot]: {", " ".repeat(6) + `"${e}": ${r.split(`
`).map((n, i) => " ".repeat(i === 0 ? 0 : 6) + n).join(`
`)}`, " ".repeat(4) + "}", " ".repeat(2) + "})", ""];
  e.indexOf("&") === -1 ? (o.push("It looks that you're are using a nested selector, but it is missing an ampersand placeholder where the generated class name should be injected."), o.push(`Try to update a property to include it i.e "${e}" => "&${e}".`)) : (o.push(""), o.push("If it's not obvious what triggers a problem, please report an issue at https://github.com/microsoft/griffel/issues")), jc(o.join(`
`));
}
function Iv(e, t) {
  jc([`@griffel/react: You are using unsupported shorthand CSS property "${e}". Please check your "makeStyles" calls, there *should not* be following:`, " ".repeat(2) + "makeStyles({", " ".repeat(4) + `[slot]: { ${e}: "${t}" }`, " ".repeat(2) + "})", "", "Learn why CSS shorthands are not supported: https://aka.ms/griffel-css-shorthands"].join(`
`));
}
function Bs(e, t, r, o) {
  e[t] = o ? [r, o] : r;
}
function Ts(e, t) {
  return t ? [e, t] : e;
}
function ri(e, t, r, o, n) {
  var i;
  let a;
  t === "m" && n && (a = {
    m: n
  }), (i = e[t]) != null || (e[t] = []), r && e[t].push(Ts(r, a)), o && e[t].push(Ts(o, a));
}
function Kt(e, t = [], r = "", o = "", n = "", i = "", a = {}, s = {}, l) {
  for (const c in e) {
    if (Vf.hasOwnProperty(c)) {
      Iv(c, e[c]);
      continue;
    }
    const u = e[c];
    if (u != null) {
      if (typeof u == "string" || typeof u == "number") {
        const d = Ss(t.join("")), f = Es(d, i, r, n, c), h = Oo({
          container: i,
          media: r,
          layer: o,
          value: u.toString(),
          support: n,
          selector: d,
          property: c
        }), v = l && {
          key: c,
          value: l
        } || Zr(c, u), p = v.key !== c || v.value !== u, g = p ? Oo({
          container: i,
          value: v.value.toString(),
          property: v.key,
          selector: d,
          media: r,
          layer: o,
          support: n
        }) : void 0, b = p ? {
          rtlClassName: g,
          rtlProperty: v.key,
          rtlValue: v.value
        } : void 0, y = xs(t, o, r, n, i), [m, w] = ys(Object.assign({
          className: h,
          media: r,
          layer: o,
          selectors: t,
          property: c,
          support: n,
          container: i,
          value: u
        }, b));
        Bs(a, f, h, g), ri(s, y, m, w, r);
      } else if (c === "animationName") {
        const d = Array.isArray(u) ? u : [u], f = [], h = [];
        for (const v of d) {
          const p = rn(v), g = rn(ya(v)), b = Ai + ct(p);
          let y;
          const m = on(b, p);
          let w = [];
          p === g ? y = b : (y = Ai + ct(g), w = on(y, g));
          for (let _ = 0; _ < m.length; _++)
            ri(
              s,
              // keyframes styles should be inserted into own bucket
              "k",
              m[_],
              w[_],
              r
            );
          f.push(b), h.push(y);
        }
        Kt({
          animationName: f.join(", ")
        }, t, r, o, n, i, a, s, h.join(", "));
      } else if (Array.isArray(u)) {
        if (u.length === 0) {
          process.env.NODE_ENV !== "production" && console.warn(`makeStyles(): An empty array was passed as input to "${c}", the property will be omitted in the styles.`);
          continue;
        }
        const d = Ss(t.join("")), f = Es(d, i, r, n, c), h = Oo({
          container: i,
          media: r,
          layer: o,
          value: u.map((E) => (E ?? "").toString()).join(";"),
          support: n,
          selector: d,
          property: c
        }), v = u.map((E) => Zr(c, E));
        if (!!v.some((E) => E.key !== v[0].key)) {
          process.env.NODE_ENV !== "production" && console.error("makeStyles(): mixing CSS fallback values which result in multiple CSS properties in RTL is not supported.");
          continue;
        }
        const g = v[0].key !== c || v.some((E, S) => E.value !== u[S]), b = g ? Oo({
          container: i,
          value: v.map((E) => {
            var S;
            return ((S = E == null ? void 0 : E.value) != null ? S : "").toString();
          }).join(";"),
          property: v[0].key,
          selector: d,
          layer: o,
          media: r,
          support: n
        }) : void 0, y = g ? {
          rtlClassName: b,
          rtlProperty: v[0].key,
          rtlValue: v.map((E) => E.value)
        } : void 0, m = xs(t, o, r, n, i), [w, _] = ys(Object.assign({
          className: h,
          media: r,
          layer: o,
          selectors: t,
          property: c,
          support: n,
          container: i,
          value: u
        }, y));
        Bs(a, f, h, b), ri(s, m, w, _, r);
      } else if (Fc(u))
        if (Dc(c))
          Kt(u, t.concat(hc(c)), r, o, n, i, a, s);
        else if (Cc(c)) {
          const d = ws(r, c.slice(6).trim());
          Kt(u, t, d, o, n, i, a, s);
        } else if (Rc(c)) {
          const d = (o ? `${o}.` : "") + c.slice(6).trim();
          Kt(u, t, r, d, n, i, a, s);
        } else if (zc(c)) {
          const d = ws(n, c.slice(9).trim());
          Kt(u, t, r, o, d, i, a, s);
        } else if (Ac(c)) {
          const d = c.slice(10).trim();
          Kt(u, t, r, o, n, d, a, s);
        } else
          Ic(c, u);
    }
  }
  return [a, s];
}
function Mv(e) {
  const t = {}, r = {};
  for (const o in e) {
    const n = e[o], [i, a] = Kt(n);
    t[o] = i, Object.keys(a).forEach((s) => {
      r[s] = (r[s] || []).concat(a[s]);
    });
  }
  return [t, r];
}
const Ba = "<unknown>";
function qv(e) {
  return $v(e) || Gv(e) || Xv(e);
}
const Lv = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)?\)?\s*$/i, Vv = /^\s*at ()((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)\s*$/i, Hv = /\((\S*)\)/;
function $v(e) {
  const t = Lv.exec(e) || Vv.exec(e);
  if (!t)
    return null;
  let r = t[2];
  const o = r && r.indexOf("native") === 0, n = r && r.indexOf("eval") === 0, i = Hv.exec(r);
  return n && i != null && (r = i[1]), {
    loc: o ? null : t[2],
    name: t[1] || Ba
  };
}
const Wv = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)\s*$/i, Uv = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function Gv(e) {
  const t = Wv.exec(e);
  if (!t)
    return null;
  let r = t[3];
  const o = r && r.indexOf(" > eval") > -1, n = Uv.exec(r);
  return o && n != null && (r = n[1]), {
    loc: t[3],
    name: t[1] || Ba
  };
}
const Kv = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?)\s*$/i;
function Xv(e) {
  const t = Kv.exec(e);
  return t ? {
    loc: t[3],
    name: t[1] || Ba
  } : null;
}
function Mc() {
  const e = String(new Error().stack).split(`
`), t = Yv(e);
  if (t === void 0)
    return;
  const r = qv(t);
  return r == null ? void 0 : r.loc;
}
function Yv(e) {
  for (let t = e.length - 1; t >= 0; --t)
    if (e[t].includes("at getSourceURLfromError"))
      return e[t + 3];
}
function Jv(e, t = _n) {
  const r = t();
  let o = null, n = null, i = null, a = null, s;
  process.env.NODE_ENV !== "production" && kr && (s = Mc());
  function l(c) {
    const {
      dir: u,
      renderer: d
    } = c;
    o === null && ([o, n] = Mv(e));
    const f = u === "ltr";
    f ? i === null && (i = Zo(o, u)) : a === null && (a = Zo(o, u)), r(d, n);
    const h = f ? i : a;
    return process.env.NODE_ENV !== "production" && kr && wr.addSequenceDetails(h, s), h;
  }
  return l;
}
function Qv(e) {
  return function(t) {
    t.root || t.return && e(t, t.return);
  };
}
function Ns(e) {
  const t = [], r = [];
  return nr(ka(e), Ea([
    Tc,
    Sa,
    xa,
    // 💡 we are using `.insertRule()` API for DOM operations, which does not support
    // insertion of multiple CSS rules in a single call. `rulesheet` plugin extracts
    // individual rules to be used with this API
    Qv((o, n) => {
      if (Oc(o)) {
        r.push(n);
        return;
      }
      t.push(n);
    })
  ])), [t, r];
}
function ji(e) {
  let t = "", r = "";
  for (const o in e) {
    const n = e[o];
    if (n != null) {
      if (typeof n == "string" || typeof n == "number") {
        const {
          key: i,
          value: a
        } = Zr(o, n);
        t += `${Ot(o)}:${n};`, r += `${Ot(i)}:${a};`;
        continue;
      }
      if (o === "animationName" && typeof n == "object") {
        const i = Array.isArray(n) ? n : [n], a = [], s = [];
        for (const l of i) {
          const c = rn(l), u = rn(ya(l)), d = Qr + ct(c), f = Qr + ct(u);
          a.push(d), s.push(f), t += on(d, c).join(""), d !== f && (r += on(f, u).join(""));
        }
        t += `animation-name:${a.join(",")};`, r += `animation-name:${s.join(",")};`;
        continue;
      }
      if (Array.isArray(n)) {
        if (n.length === 0) {
          process.env.NODE_ENV !== "production" && console.warn(`makeResetStyles(): An empty array was passed as input to "${o}", the property will be omitted in the styles.`);
          continue;
        }
        const i = n.map((l) => Zr(o, l));
        if (!!i.some((l) => l.key !== i[0].key)) {
          process.env.NODE_ENV !== "production" && console.error("makeStyles(): mixing CSS fallback values which result in multiple CSS properties in RTL is not supported.");
          continue;
        }
        const s = i[0].key;
        t += n.map((l) => `${Ot(o)}:${l};`).join(""), r += i.map((l) => `${Ot(s)}:${l.value};`).join("");
        continue;
      }
      if (Fc(n)) {
        if (Dc(o)) {
          const i = Pc(o), [a, s] = ji(n);
          t += `${i}{${a}}`, r += `${i}{${s}}`;
          continue;
        }
        if (Cc(o) || Rc(o) || zc(o) || Ac(o)) {
          const [i, a] = ji(n);
          t += `${o}{${i}}`, r += `${o}{${a}}`;
          continue;
        }
      }
      Ic(o, n);
    }
  }
  return [t, r];
}
function Zv(e) {
  const [t, r] = ji(e), o = Qr + ct(t), [n, i] = Ns(`.${o}{${t}}`), a = i.length > 0;
  if (t === r)
    return [o, null, a ? {
      r: n,
      s: i
    } : n];
  const s = Qr + ct(r), [l, c] = Ns(`.${s}{${r}}`);
  return [o, s, a ? {
    r: n.concat(l),
    s: i.concat(c)
  } : n.concat(l)];
}
function eh(e, t = _n) {
  const r = t();
  let o = null, n = null, i = null;
  function a(s) {
    const {
      dir: l,
      renderer: c
    } = s;
    o === null && ([o, n, i] = Zv(e)), r(c, Array.isArray(i) ? {
      r: i
    } : i);
    const u = l === "ltr" ? o : n || o;
    return process.env.NODE_ENV !== "production" && (_a[u] = 1), u;
  }
  return a;
}
function th(e, t, r = _n) {
  const o = r();
  let n = null, i = null, a;
  process.env.NODE_ENV !== "production" && kr && (a = Mc());
  function s(l) {
    const {
      dir: c,
      renderer: u
    } = l, d = c === "ltr";
    d ? n === null && (n = Zo(e, c)) : i === null && (i = Zo(e, c)), o(u, t);
    const f = d ? n : i;
    return process.env.NODE_ENV !== "production" && kr && wr.addSequenceDetails(f, a), f;
  }
  return s;
}
function rh(e, t, r, o = _n) {
  const n = o();
  function i(a) {
    const {
      dir: s,
      renderer: l
    } = a, c = s === "ltr" ? e : t || e;
    return n(l, Array.isArray(r) ? {
      r
    } : r), process.env.NODE_ENV !== "production" && (_a[c] = 1), c;
  }
  return i;
}
function oh() {
  return typeof window < "u" && !!(window.document && window.document.createElement);
}
const Os = (
  // @ts-expect-error Hack to make sure that `useInsertionEffect` will not cause bundling issues in older React versions
  // eslint-disable-next-line no-useless-concat
  k.useInsertionEffect ? k.useInsertionEffect : void 0
), Sn = () => {
  const e = {};
  return function(r, o) {
    if (Os && oh()) {
      Os(() => {
        r.insertCSSRules(o);
      }, [r, o]);
      return;
    }
    e[r.id] === void 0 && (r.insertCSSRules(o), e[r.id] = !0);
  };
}, nh = /* @__PURE__ */ k.createContext(/* @__PURE__ */ Zf());
function Bn() {
  return k.useContext(nh);
}
const ih = /* @__PURE__ */ k.createContext("ltr");
function Tn() {
  return k.useContext(ih);
}
function qc() {
  try {
    const e = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher.current;
    return e == null ? !1 : (e.useContext({}), !0);
  } catch {
    return !1;
  }
}
function ah(e) {
  const t = Jv(e, Sn);
  if (process.env.NODE_ENV !== "production" && qc())
    throw new Error(["makeStyles(): this function cannot be called in component's scope.", "All makeStyles() calls should be top level i.e. in a root scope of a file."].join(" "));
  return function() {
    const o = Tn(), n = Bn();
    return t({
      dir: o,
      renderer: n
    });
  };
}
function sh(e) {
  const t = eh(e, Sn);
  if (process.env.NODE_ENV !== "production" && qc())
    throw new Error(["makeResetStyles(): this function cannot be called in component's scope.", "All makeResetStyles() calls should be top level i.e. in a root scope of a file."].join(" "));
  return function() {
    const o = Tn(), n = Bn();
    return t({
      dir: o,
      renderer: n
    });
  };
}
function J(e, t) {
  const r = th(e, t, Sn);
  return function() {
    const n = Tn(), i = Bn();
    return r({
      dir: n,
      renderer: i
    });
  };
}
function Ie(e, t, r) {
  const o = rh(e, t, r, Sn);
  return function() {
    const i = Tn(), a = Bn();
    return o({
      dir: i,
      renderer: a
    });
  };
}
const Lc = Symbol.for("fui.slotRenderFunction"), Er = Symbol.for("fui.slotElementType");
function ye(e, t) {
  const { defaultProps: r, elementType: o } = t, n = Vc(e), i = {
    ...r,
    ...n,
    [Er]: o
  };
  return n && typeof n.children == "function" && (i[Lc] = n.children, i.children = r == null ? void 0 : r.children), i;
}
function Pe(e, t) {
  if (!(e === null || e === void 0 && !t.renderByDefault))
    return ye(e, t);
}
function Vc(e) {
  return typeof e == "string" || typeof e == "number" || Array.isArray(e) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
  k.isValidElement(e) ? {
    children: e
  } : (e && typeof e != "object" && process.env.NODE_ENV !== "production" && console.error(`@fluentui/react-utilities [slot.${Vc.name}]:
A slot got an invalid value "${e}" (${typeof e}).
A valid value for a slot is a slot shorthand or slot properties object.
Slot shorthands can be strings, numbers, arrays or JSX elements`), e);
}
function lh(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && !Df(e);
}
function Ii(e) {
  return !!(e != null && e.hasOwnProperty(Er));
}
function Ee(e) {
  if (process.env.NODE_ENV !== "production") {
    const t = e;
    for (const r of Object.keys(t.components)) {
      const o = t[r];
      if (o !== void 0)
        if (!Ii(o))
          t[r] = ye(o, {
            elementType: t.components[r]
          }), console.warn(`@fluentui/react-utilities [${Ee.name}]:
"state.${r}" is not a slot!
Be sure to create slots properly by using "slot.always" or "slot.optional".`);
        else {
          const { [Er]: n } = o;
          n !== t.components[r] && (o[Er] = t.components[r], console.warn(`@fluentui/react-utilities [${Ee.name}]:
"state.${r}" element type differs from "state.components.${r}",
${n} !== ${t.components[r]}.
Be sure to create slots properly by using "slot.always" or "slot.optional" with the correct elementType.`));
        }
    }
  }
}
const he = (...e) => {
  const t = {};
  for (const r of e) {
    const o = Array.isArray(r) ? r : Object.keys(r);
    for (const n of o)
      t[n] = 1;
  }
  return t;
}, ch = he([
  "onAuxClick",
  "onAnimationEnd",
  "onAnimationStart",
  "onCopy",
  "onCut",
  "onPaste",
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate",
  "onFocus",
  "onFocusCapture",
  "onBlur",
  "onBlurCapture",
  "onChange",
  "onInput",
  "onSubmit",
  "onLoad",
  "onError",
  "onKeyDown",
  "onKeyDownCapture",
  "onKeyPress",
  "onKeyUp",
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting",
  "onClick",
  "onClickCapture",
  "onContextMenu",
  "onDoubleClick",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onMouseDown",
  "onMouseDownCapture",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onMouseUpCapture",
  "onSelect",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onScroll",
  "onWheel",
  "onPointerCancel",
  "onPointerDown",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerMove",
  "onPointerOut",
  "onPointerOver",
  "onPointerUp",
  "onGotPointerCapture",
  "onLostPointerCapture"
]), uh = he([
  "accessKey",
  "children",
  "className",
  "contentEditable",
  "dir",
  "draggable",
  "hidden",
  "htmlFor",
  "id",
  "lang",
  "ref",
  "role",
  "style",
  "tabIndex",
  "title",
  "translate",
  "spellCheck",
  "name"
]), dh = he([
  "itemID",
  "itemProp",
  "itemRef",
  "itemScope",
  "itemType"
]), Se = he(uh, ch, dh), fh = he(Se, [
  "form"
]), Hc = he(Se, [
  "height",
  "loop",
  "muted",
  "preload",
  "src",
  "width"
]), vh = he(Hc, [
  "poster"
]), hh = he(Se, [
  "start"
]), ph = he(Se, [
  "value"
]), bh = he(Se, [
  "download",
  "href",
  "hrefLang",
  "media",
  "rel",
  "target",
  "type"
]), gh = he(Se, [
  "dateTime"
]), Nn = he(Se, [
  "autoFocus",
  "disabled",
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "type",
  "value"
]), mh = he(Nn, [
  "accept",
  "alt",
  "autoCapitalize",
  "autoComplete",
  "checked",
  "dirname",
  "form",
  "height",
  "inputMode",
  "list",
  "max",
  "maxLength",
  "min",
  "multiple",
  "pattern",
  "placeholder",
  "readOnly",
  "required",
  "src",
  "step",
  "size",
  "type",
  "value",
  "width"
]), _h = he(Nn, [
  "autoCapitalize",
  "cols",
  "dirname",
  "form",
  "maxLength",
  "placeholder",
  "readOnly",
  "required",
  "rows",
  "wrap"
]), yh = he(Nn, [
  "form",
  "multiple",
  "required"
]), wh = he(Se, [
  "selected",
  "value"
]), kh = he(Se, [
  "cellPadding",
  "cellSpacing"
]), xh = Se, Eh = he(Se, [
  "colSpan",
  "rowSpan",
  "scope"
]), Sh = he(Se, [
  "colSpan",
  "headers",
  "rowSpan",
  "scope"
]), Bh = he(Se, [
  "span"
]), Th = he(Se, [
  "span"
]), Nh = he(Se, [
  "disabled",
  "form"
]), Oh = he(Se, [
  "acceptCharset",
  "action",
  "encType",
  "encType",
  "method",
  "noValidate",
  "target"
]), Ph = he(Se, [
  "allow",
  "allowFullScreen",
  "allowPaymentRequest",
  "allowTransparency",
  "csp",
  "height",
  "importance",
  "referrerPolicy",
  "sandbox",
  "src",
  "srcDoc",
  "width"
]), Ch = he(Se, [
  "alt",
  "crossOrigin",
  "height",
  "src",
  "srcSet",
  "useMap",
  "width"
]), Rh = he(Se, [
  "open",
  "onCancel",
  "onClose"
]);
function Dh(e, t, r) {
  const o = Array.isArray(t), n = {}, i = Object.keys(e);
  for (const a of i)
    (!o && t[a] || o && t.indexOf(a) >= 0 || a.indexOf("data-") === 0 || a.indexOf("aria-") === 0) && (!r || (r == null ? void 0 : r.indexOf(a)) === -1) && (n[a] = e[a]);
  return n;
}
const zh = {
  label: fh,
  audio: Hc,
  video: vh,
  ol: hh,
  li: ph,
  a: bh,
  button: Nn,
  input: mh,
  textarea: _h,
  select: yh,
  option: wh,
  table: kh,
  tr: xh,
  th: Eh,
  td: Sh,
  colGroup: Bh,
  col: Th,
  fieldset: Nh,
  form: Oh,
  iframe: Ph,
  img: Ch,
  time: gh,
  dialog: Rh
};
function $c(e, t, r) {
  const o = e && zh[e] || Se;
  return o.as = 1, Dh(t, o, r);
}
const Wc = ({ primarySlotTagName: e, props: t, excludedPropNames: r }) => ({
  root: {
    style: t.style,
    className: t.className
  },
  // eslint-disable-next-line deprecation/deprecation
  primary: $c(e, t, [
    ...r || [],
    "style",
    "className"
  ])
}), ze = (e, t, r) => {
  var o;
  return $c((o = t.as) !== null && o !== void 0 ? o : e, t, r);
};
function Ah() {
  return (
    // eslint-disable-next-line deprecation/deprecation, no-restricted-globals
    typeof window < "u" && !!(window.document && window.document.createElement)
  );
}
function Fh(e) {
  return typeof e == "function";
}
const fo = (e) => {
  const [t, r] = k.useState(() => e.defaultState === void 0 ? e.initialState : jh(e.defaultState) ? e.defaultState() : e.defaultState), o = k.useRef(e.state);
  k.useEffect(() => {
    o.current = e.state;
  }, [
    e.state
  ]);
  const n = k.useCallback((i) => {
    Fh(i) && i(o.current);
  }, []);
  return Ih(e.state) ? [
    e.state,
    n
  ] : [
    t,
    r
  ];
};
function jh(e) {
  return typeof e == "function";
}
const Ih = (e) => {
  const [t] = k.useState(() => e !== void 0);
  return process.env.NODE_ENV !== "production" && k.useEffect(() => {
    if (t !== (e !== void 0)) {
      const r = new Error(), o = t ? "a controlled value to be uncontrolled" : "an uncontrolled value to be controlled", n = t ? "defined to an undefined" : "undefined to a defined";
      console.error(`@fluentui/react-utilities [${fo.name}]:
A component is changing ${o}. This is likely caused by the value changing from ${n} value, which should not happen.
Decide between using a controlled or uncontrolled input element for the lifetime of the component.
More info: https://reactjs.org/link/controlled-components
${r.stack}`);
    }
  }, [
    t,
    e
  ]), t;
}, Mh = {
  current: 0
}, qh = /* @__PURE__ */ k.createContext(void 0);
function Lh() {
  var e;
  return (e = k.useContext(qh)) !== null && e !== void 0 ? e : Mh;
}
const vo = Ah() ? k.useLayoutEffect : k.useEffect, Pt = (e) => {
  const t = k.useRef(() => {
    throw new Error("Cannot call an event handler while rendering");
  });
  return vo(() => {
    t.current = e;
  }, [
    e
  ]), k.useCallback((...r) => {
    const o = t.current;
    return o(...r);
  }, [
    t
  ]);
}, Uc = k.createContext(void 0);
Uc.Provider;
function Vh() {
  return k.useContext(Uc) || "";
}
function Ta(e = "fui-", t) {
  const r = Lh(), o = Vh(), n = k.useId;
  if (n) {
    const i = n(), a = k.useMemo(() => i.replace(/:/g, ""), [
      i
    ]);
    return t || `${o}${e}${a}`;
  }
  return k.useMemo(() => t || `${o}${e}${++r.current}`, [
    o,
    e,
    t,
    r
  ]);
}
function On(...e) {
  const t = k.useCallback(
    (r) => {
      t.current = r;
      for (const o of e)
        typeof o == "function" ? o(r) : o && (o.current = r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- already exhaustive
    [
      ...e
    ]
  );
  return t;
}
const Gc = k.createContext(void 0), Hh = "";
Gc.Provider;
function $h() {
  var e;
  return (e = k.useContext(Gc)) !== null && e !== void 0 ? e : Hh;
}
const Kc = k.createContext(void 0), Wh = {
  // eslint-disable-next-line no-restricted-globals
  targetDocument: typeof document == "object" ? document : void 0,
  dir: "ltr"
};
Kc.Provider;
function dr() {
  var e;
  return (e = k.useContext(Kc)) !== null && e !== void 0 ? e : Wh;
}
const Xc = k.createContext(void 0);
Xc.Provider;
function Yc() {
  var e;
  return (e = k.useContext(Xc)) !== null && e !== void 0 ? e : {};
}
const Jc = k.createContext(void 0), Uh = () => {
};
Jc.Provider;
const Ae = (e) => {
  var t, r;
  return (r = (t = k.useContext(Jc)) === null || t === void 0 ? void 0 : t[e]) !== null && r !== void 0 ? r : Uh;
}, Qc = k.createContext(void 0);
Qc.Provider;
function Gh() {
  return k.useContext(Qc);
}
function Ps(e, t) {
  return (...r) => {
    e == null || e(...r), t == null || t(...r);
  };
}
function Mi(e, t) {
  var r;
  const o = e;
  var n;
  return !!(!(o == null || (r = o.ownerDocument) === null || r === void 0) && r.defaultView && o instanceof o.ownerDocument.defaultView[(n = t == null ? void 0 : t.constructorName) !== null && n !== void 0 ? n : "HTMLElement"]);
}
function Zc(e) {
  return !!e.type.isFluentTriggerComponent;
}
function Kh(e, t) {
  return typeof e == "function" ? e(t) : e ? eu(e, t) : e || null;
}
function eu(e, t) {
  if (!k.isValidElement(e) || e.type === k.Fragment)
    throw new Error("A trigger element must be a single element for this component. Please ensure that you're not using React Fragments.");
  if (Zc(e)) {
    const r = eu(e.props.children, t);
    return k.cloneElement(e, void 0, r);
  } else
    return k.cloneElement(e, t);
}
function tu(e) {
  return k.isValidElement(e) ? Zc(e) ? tu(
    // FIXME: This casting should be unnecessary as isFluentTrigger is a guard type method,
    // but for some reason it's failing on build
    e.props.children
  ) : e : null;
}
function Xh(e) {
  return e && !!e._virtual;
}
function Yh(e) {
  return Xh(e) && e._virtual.parent || null;
}
function Jh(e, t = {}) {
  if (!e)
    return null;
  if (!t.skipVirtual) {
    const o = Yh(e);
    if (o)
      return o;
  }
  const r = e.parentNode;
  return r && r.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? r.host : r;
}
function Cs(e, t) {
  if (!e)
    return;
  const r = e;
  r._virtual || (r._virtual = {}), r._virtual.parent = t;
}
function Qh(e, t) {
  return {
    ...t,
    [Er]: e
  };
}
function Zh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qi = { exports: {} }, de = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rs;
function ep() {
  if (Rs)
    return de;
  Rs = 1;
  var e = 60103, t = 60106, r = 60107, o = 60108, n = 60114, i = 60109, a = 60110, s = 60112, l = 60113, c = 60120, u = 60115, d = 60116, f = 60121, h = 60122, v = 60117, p = 60129, g = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var b = Symbol.for;
    e = b("react.element"), t = b("react.portal"), r = b("react.fragment"), o = b("react.strict_mode"), n = b("react.profiler"), i = b("react.provider"), a = b("react.context"), s = b("react.forward_ref"), l = b("react.suspense"), c = b("react.suspense_list"), u = b("react.memo"), d = b("react.lazy"), f = b("react.block"), h = b("react.server.block"), v = b("react.fundamental"), p = b("react.debug_trace_mode"), g = b("react.legacy_hidden");
  }
  function y(R) {
    if (typeof R == "object" && R !== null) {
      var ee = R.$$typeof;
      switch (ee) {
        case e:
          switch (R = R.type, R) {
            case r:
            case n:
            case o:
            case l:
            case c:
              return R;
            default:
              switch (R = R && R.$$typeof, R) {
                case a:
                case s:
                case d:
                case u:
                case i:
                  return R;
                default:
                  return ee;
              }
          }
        case t:
          return ee;
      }
    }
  }
  var m = i, w = e, _ = s, E = r, S = d, C = u, I = t, H = n, se = o, Be = l;
  return de.ContextConsumer = a, de.ContextProvider = m, de.Element = w, de.ForwardRef = _, de.Fragment = E, de.Lazy = S, de.Memo = C, de.Portal = I, de.Profiler = H, de.StrictMode = se, de.Suspense = Be, de.isAsyncMode = function() {
    return !1;
  }, de.isConcurrentMode = function() {
    return !1;
  }, de.isContextConsumer = function(R) {
    return y(R) === a;
  }, de.isContextProvider = function(R) {
    return y(R) === i;
  }, de.isElement = function(R) {
    return typeof R == "object" && R !== null && R.$$typeof === e;
  }, de.isForwardRef = function(R) {
    return y(R) === s;
  }, de.isFragment = function(R) {
    return y(R) === r;
  }, de.isLazy = function(R) {
    return y(R) === d;
  }, de.isMemo = function(R) {
    return y(R) === u;
  }, de.isPortal = function(R) {
    return y(R) === t;
  }, de.isProfiler = function(R) {
    return y(R) === n;
  }, de.isStrictMode = function(R) {
    return y(R) === o;
  }, de.isSuspense = function(R) {
    return y(R) === l;
  }, de.isValidElementType = function(R) {
    return typeof R == "string" || typeof R == "function" || R === r || R === n || R === p || R === o || R === l || R === c || R === g || typeof R == "object" && R !== null && (R.$$typeof === d || R.$$typeof === u || R.$$typeof === i || R.$$typeof === a || R.$$typeof === s || R.$$typeof === v || R.$$typeof === f || R[0] === h);
  }, de.typeOf = y, de;
}
var fe = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ds;
function tp() {
  return Ds || (Ds = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, o = 60108, n = 60114, i = 60109, a = 60110, s = 60112, l = 60113, c = 60120, u = 60115, d = 60116, f = 60121, h = 60122, v = 60117, p = 60129, g = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var b = Symbol.for;
      e = b("react.element"), t = b("react.portal"), r = b("react.fragment"), o = b("react.strict_mode"), n = b("react.profiler"), i = b("react.provider"), a = b("react.context"), s = b("react.forward_ref"), l = b("react.suspense"), c = b("react.suspense_list"), u = b("react.memo"), d = b("react.lazy"), f = b("react.block"), h = b("react.server.block"), v = b("react.fundamental"), b("react.scope"), b("react.opaque.id"), p = b("react.debug_trace_mode"), b("react.offscreen"), g = b("react.legacy_hidden");
    }
    var y = !1;
    function m(F) {
      return !!(typeof F == "string" || typeof F == "function" || F === r || F === n || F === p || F === o || F === l || F === c || F === g || y || typeof F == "object" && F !== null && (F.$$typeof === d || F.$$typeof === u || F.$$typeof === i || F.$$typeof === a || F.$$typeof === s || F.$$typeof === v || F.$$typeof === f || F[0] === h));
    }
    function w(F) {
      if (typeof F == "object" && F !== null) {
        var z = F.$$typeof;
        switch (z) {
          case e:
            var Re = F.type;
            switch (Re) {
              case r:
              case n:
              case o:
              case l:
              case c:
                return Re;
              default:
                var Ye = Re && Re.$$typeof;
                switch (Ye) {
                  case a:
                  case s:
                  case d:
                  case u:
                  case i:
                    return Ye;
                  default:
                    return z;
                }
            }
          case t:
            return z;
        }
      }
    }
    var _ = a, E = i, S = e, C = s, I = r, H = d, se = u, Be = t, R = n, ee = o, Ce = l, ue = !1, be = !1;
    function D(F) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(F) {
      return be || (be = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function x(F) {
      return w(F) === a;
    }
    function P(F) {
      return w(F) === i;
    }
    function M(F) {
      return typeof F == "object" && F !== null && F.$$typeof === e;
    }
    function V(F) {
      return w(F) === s;
    }
    function q(F) {
      return w(F) === r;
    }
    function X(F) {
      return w(F) === d;
    }
    function $(F) {
      return w(F) === u;
    }
    function G(F) {
      return w(F) === t;
    }
    function te(F) {
      return w(F) === n;
    }
    function ie(F) {
      return w(F) === o;
    }
    function re(F) {
      return w(F) === l;
    }
    fe.ContextConsumer = _, fe.ContextProvider = E, fe.Element = S, fe.ForwardRef = C, fe.Fragment = I, fe.Lazy = H, fe.Memo = se, fe.Portal = Be, fe.Profiler = R, fe.StrictMode = ee, fe.Suspense = Ce, fe.isAsyncMode = D, fe.isConcurrentMode = L, fe.isContextConsumer = x, fe.isContextProvider = P, fe.isElement = M, fe.isForwardRef = V, fe.isFragment = q, fe.isLazy = X, fe.isMemo = $, fe.isPortal = G, fe.isProfiler = te, fe.isStrictMode = ie, fe.isSuspense = re, fe.isValidElementType = m, fe.typeOf = w;
  }()), fe;
}
process.env.NODE_ENV === "production" ? qi.exports = ep() : qi.exports = tp();
var rp = qi.exports;
function op(e) {
  process.env.NODE_ENV === "development" && typeof e == "object" && !rp.isValidElementType(e) && console.error(`@fluentui/react-jsx-runtime:
Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: ${e}.

If this happened in a slot of Fluent UI component, you might be facing package resolution issues.
Please make sure you don't have multiple versions of "@fluentui/react-utilities" installed in your dependencies or sub-dependencies.
You can check this by searching up for matching entries in a lockfile produced by your package manager (yarn.lock, pnpm-lock.yaml or package-lock.json).`);
}
function ru(e, t) {
  return function(o, n, i, a, s) {
    return Ii(n) ? t(Qh(o, n), null, i, a, s) : Ii(o) ? t(o, n, i, a, s) : (op(o), e(o, n, i, a, s));
  };
}
function ou(e) {
  const { as: t, [Er]: r, [Lc]: o, ...n } = e, i = n, a = typeof r == "string" ? t ?? r : r;
  return typeof a != "string" && t && (i.as = t), {
    elementType: a,
    props: i,
    renderFunction: o
  };
}
const rr = Cf, np = (e, t, r) => {
  const { elementType: o, renderFunction: n, props: i } = ou(e), a = {
    ...i,
    ...t
  };
  return n ? rr.jsx(k.Fragment, {
    children: n(o, a)
  }, r) : rr.jsx(o, a, r);
}, ip = (e, t, r) => {
  const { elementType: o, renderFunction: n, props: i } = ou(e), a = {
    ...i,
    ...t
  };
  return n ? rr.jsx(k.Fragment, {
    children: n(o, {
      ...a,
      children: rr.jsxs(k.Fragment, {
        children: a.children
      }, void 0)
    })
  }, r) : rr.jsxs(o, a, r);
}, Y = ru(rr.jsx, np), Ke = ru(rr.jsxs, ip), Li = k.createContext(void 0), ap = {};
Li.Provider;
const sp = () => k.useContext(Li) ? k.useContext(Li) : ap, lp = J({
  root: {
    mc9l5x: "f1w7gpdv",
    Bg96gwp: "fez10in",
    ycbfsm: "fg4l7m0"
  },
  rtl: {
    Bz10aip: "f13rod7r"
  }
}, {
  d: [".f1w7gpdv{display:inline;}", ".fez10in{line-height:0;}", ".f13rod7r{-webkit-transform:scaleX(-1);-moz-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}"],
  t: ["@media (forced-colors: active){.fg4l7m0{forced-color-adjust:auto;}}"]
}), cp = (e, t) => {
  const {
    title: r,
    primaryFill: o = "currentColor",
    ...n
  } = e, i = {
    ...n,
    title: void 0,
    fill: o
  }, a = lp(), s = sp();
  return i.className = K(a.root, (t == null ? void 0 : t.flipInRtl) && (s == null ? void 0 : s.textDirection) === "rtl" && a.rtl, i.className), r && (i["aria-label"] = r), !i["aria-label"] && !i["aria-labelledby"] ? i["aria-hidden"] = !0 : i.role = "img", i;
}, $t = (e, t, r, o) => {
  const n = t === "1em" ? "20" : t, i = k.forwardRef((a, s) => {
    const l = {
      ...cp(a, {
        flipInRtl: o == null ? void 0 : o.flipInRtl
      }),
      ref: s,
      width: t,
      height: t,
      viewBox: `0 0 ${n} ${n}`,
      xmlns: "http://www.w3.org/2000/svg"
    };
    return k.createElement("svg", l, ...r.map((c) => k.createElement("path", {
      d: c,
      fill: l.fill
    })));
  });
  return i.displayName = e, i;
}, up = /* @__PURE__ */ $t("ArrowDownRegular", "1em", ["M16.87 10.84a.5.5 0 1 0-.74-.68l-5.63 6.17V2.5a.5.5 0 0 0-1 0v13.83l-5.63-6.17a.5.5 0 0 0-.74.68l6.31 6.91a.75.75 0 0 0 1.11 0l6.32-6.91Z"]), dp = /* @__PURE__ */ $t("ArrowUpRegular", "1em", ["M3.13 9.16a.5.5 0 1 0 .74.68L9.5 3.67V17.5a.5.5 0 1 0 1 0V3.67l5.63 6.17a.5.5 0 0 0 .74-.68l-6.32-6.92a.75.75 0 0 0-1.1 0L3.13 9.16Z"]), fp = /* @__PURE__ */ $t("DeleteRegular", "1em", ["M8.5 4h3a1.5 1.5 0 0 0-3 0Zm-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.05l-1.2 10.34A3 3 0 0 1 12.27 18H7.73a3 3 0 0 1-2.98-2.66L3.55 5H2.5a.5.5 0 0 1 0-1h5ZM5.74 15.23A2 2 0 0 0 7.73 17h4.54a2 2 0 0 0 1.99-1.77L15.44 5H4.56l1.18 10.23ZM8.5 7.5c.28 0 .5.22.5.5v6a.5.5 0 0 1-1 0V8c0-.28.22-.5.5-.5ZM12 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V8Z"]), vp = /* @__PURE__ */ $t("EditRegular", "1em", ["M17.18 2.93a2.97 2.97 0 0 0-4.26-.06l-9.37 9.38c-.33.33-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.93-.87c.46-.1.9-.34 1.23-.68l9.36-9.36a2.97 2.97 0 0 0 .05-4.15Zm-3.55.65a1.97 1.97 0 1 1 2.8 2.8l-.68.66-2.8-2.79.68-.67Zm-1.38 1.38 2.8 2.8-7.99 7.97c-.2.2-.46.35-.74.41l-3.16.7.7-3.18c.07-.27.2-.51.4-.7l8-8Z"]), hp = /* @__PURE__ */ $t("CheckmarkCircle12Filled", "12", ["M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6Zm7.35-.9a.5.5 0 1 0-.7-.7L5.5 6.54 4.35 5.4a.5.5 0 1 0-.7.7l1.5 1.5c.2.2.5.2.7 0l2.5-2.5Z"]), pp = /* @__PURE__ */ $t("Dismiss20Regular", "20", ["m4.09 4.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L10 9.29l5.15-5.14a.5.5 0 0 1 .63-.06l.07.06c.18.17.2.44.06.63l-.06.07L10.71 10l5.14 5.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L10 10.71l-5.15 5.14a.5.5 0 0 1-.63.06l-.07-.06a.5.5 0 0 1-.06-.63l.06-.07L9.29 10 4.15 4.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"]), bp = /* @__PURE__ */ $t("ErrorCircle12Filled", "12", ["M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10Zm-.75-2.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm.26-4.84a.5.5 0 0 1 .98 0l.01.09v2.59a.5.5 0 0 1-1 0V3.41Z"]), gp = /* @__PURE__ */ $t("Warning12Filled", "12", ["M5.21 1.46a.9.9 0 0 1 1.58 0l4.09 7.17a.92.92 0 0 1-.79 1.37H1.91a.92.92 0 0 1-.79-1.37l4.1-7.17ZM5.5 4.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0ZM6 6.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"]);
var mp = typeof WeakRef < "u", zs = class {
  constructor(e) {
    mp && typeof e == "object" ? this._weakRef = new WeakRef(e) : this._instance = e;
  }
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/deref}
   */
  deref() {
    var e, t;
    let r;
    return this._weakRef ? (r = (e = this._weakRef) == null ? void 0 : e.deref(), r || delete this._weakRef) : (r = this._instance, (t = r == null ? void 0 : r.isDisposed) != null && t.call(r) && delete this._instance), r;
  }
}, ft = "keyborg:focusin", to = "keyborg:focusout";
function _p(e) {
  const t = e.HTMLElement, r = t.prototype.focus;
  let o = !1;
  return t.prototype.focus = function() {
    o = !0;
  }, e.document.createElement("button").focus(), t.prototype.focus = r, o;
}
var oi = !1;
function xt(e) {
  const t = e.focus;
  t.__keyborgNativeFocus ? t.__keyborgNativeFocus.call(e) : e.focus();
}
function yp(e) {
  const t = e;
  oi || (oi = _p(t));
  const r = t.HTMLElement.prototype.focus;
  if (r.__keyborgNativeFocus)
    return;
  t.HTMLElement.prototype.focus = l;
  const o = /* @__PURE__ */ new Set(), n = (u) => {
    const d = u.target;
    if (!d)
      return;
    const f = new CustomEvent(to, {
      cancelable: !0,
      bubbles: !0,
      // Allows the event to bubble past an open shadow root
      composed: !0,
      detail: {
        originalEvent: u
      }
    });
    d.dispatchEvent(f);
  }, i = (u) => {
    const d = u.target;
    if (!d)
      return;
    let f = u.composedPath()[0];
    const h = /* @__PURE__ */ new Set();
    for (; f; )
      f.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (h.add(f), f = f.host) : f = f.parentNode;
    for (const v of o) {
      const p = v.deref();
      (!p || !h.has(p)) && (o.delete(v), p && (p.removeEventListener("focusin", i, !0), p.removeEventListener("focusout", n, !0)));
    }
    a(d, u.relatedTarget || void 0);
  }, a = (u, d, f) => {
    var h;
    const v = u.shadowRoot;
    if (v) {
      for (const b of o)
        if (b.deref() === v)
          return;
      v.addEventListener("focusin", i, !0), v.addEventListener("focusout", n, !0), o.add(new zs(v));
      return;
    }
    const p = {
      relatedTarget: d,
      originalEvent: f
    }, g = new CustomEvent(ft, {
      cancelable: !0,
      bubbles: !0,
      // Allows the event to bubble past an open shadow root
      composed: !0,
      detail: p
    });
    g.details = p, (oi || s.lastFocusedProgrammatically) && (p.isFocusedProgrammatically = u === ((h = s.lastFocusedProgrammatically) == null ? void 0 : h.deref()), s.lastFocusedProgrammatically = void 0), u.dispatchEvent(g);
  }, s = t.__keyborgData = {
    focusInHandler: i,
    focusOutHandler: n,
    shadowTargets: o
  };
  t.document.addEventListener(
    "focusin",
    t.__keyborgData.focusInHandler,
    !0
  ), t.document.addEventListener(
    "focusout",
    t.__keyborgData.focusOutHandler,
    !0
  );
  function l() {
    const u = t.__keyborgData;
    return u && (u.lastFocusedProgrammatically = new zs(
      this
    )), r.apply(this, arguments);
  }
  let c = t.document.activeElement;
  for (; c && c.shadowRoot; )
    a(c), c = c.shadowRoot.activeElement;
  l.__keyborgNativeFocus = r;
}
function wp(e) {
  const t = e, r = t.HTMLElement.prototype, o = r.focus.__keyborgNativeFocus, n = t.__keyborgData;
  if (n) {
    t.document.removeEventListener(
      "focusin",
      n.focusInHandler,
      !0
    ), t.document.removeEventListener(
      "focusout",
      n.focusOutHandler,
      !0
    );
    for (const i of n.shadowTargets) {
      const a = i.deref();
      a && (a.removeEventListener(
        "focusin",
        n.focusInHandler,
        !0
      ), a.removeEventListener(
        "focusout",
        n.focusOutHandler,
        !0
      ));
    }
    n.shadowTargets.clear(), delete t.__keyborgData;
  }
  o && (r.focus = o);
}
var kp = 500, nu = 0, xp = class {
  constructor(e, t) {
    this._isNavigatingWithKeyboard_DO_NOT_USE = !1, this._onFocusIn = (o) => {
      if (this._isMouseUsedTimer || this.isNavigatingWithKeyboard)
        return;
      const n = o.detail;
      n.relatedTarget && (n.isFocusedProgrammatically || n.isFocusedProgrammatically === void 0 || (this.isNavigatingWithKeyboard = !0));
    }, this._onMouseDown = (o) => {
      if (o.buttons === 0 || o.clientX === 0 && o.clientY === 0 && o.screenX === 0 && o.screenY === 0)
        return;
      const n = this._win;
      n && (this._isMouseUsedTimer && n.clearTimeout(this._isMouseUsedTimer), this._isMouseUsedTimer = n.setTimeout(() => {
        delete this._isMouseUsedTimer;
      }, 1e3)), this.isNavigatingWithKeyboard = !1;
    }, this._onKeyDown = (o) => {
      this.isNavigatingWithKeyboard ? this._shouldDismissKeyboardNavigation(o) && this._scheduleDismiss() : this._shouldTriggerKeyboardNavigation(o) && (this.isNavigatingWithKeyboard = !0);
    }, this.id = "c" + ++nu, this._win = e;
    const r = e.document;
    if (t) {
      const o = t.triggerKeys, n = t.dismissKeys;
      o != null && o.length && (this._triggerKeys = new Set(o)), n != null && n.length && (this._dismissKeys = new Set(n));
    }
    r.addEventListener(ft, this._onFocusIn, !0), r.addEventListener("mousedown", this._onMouseDown, !0), e.addEventListener("keydown", this._onKeyDown, !0), yp(e);
  }
  get isNavigatingWithKeyboard() {
    return this._isNavigatingWithKeyboard_DO_NOT_USE;
  }
  set isNavigatingWithKeyboard(e) {
    this._isNavigatingWithKeyboard_DO_NOT_USE !== e && (this._isNavigatingWithKeyboard_DO_NOT_USE = e, this.update());
  }
  dispose() {
    const e = this._win;
    if (e) {
      this._isMouseUsedTimer && (e.clearTimeout(this._isMouseUsedTimer), this._isMouseUsedTimer = void 0), this._dismissTimer && (e.clearTimeout(this._dismissTimer), this._dismissTimer = void 0), wp(e);
      const t = e.document;
      t.removeEventListener(ft, this._onFocusIn, !0), t.removeEventListener("mousedown", this._onMouseDown, !0), e.removeEventListener("keydown", this._onKeyDown, !0), delete this._win;
    }
  }
  isDisposed() {
    return !!this._win;
  }
  /**
   * Updates all keyborg instances with the keyboard navigation state
   */
  update() {
    var e, t;
    const r = (t = (e = this._win) == null ? void 0 : e.__keyborg) == null ? void 0 : t.refs;
    if (r)
      for (const o of Object.keys(r))
        Na.update(r[o], this.isNavigatingWithKeyboard);
  }
  /**
   * @returns whether the keyboard event should trigger keyboard navigation mode
   */
  _shouldTriggerKeyboardNavigation(e) {
    var t;
    if (e.key === "Tab")
      return !0;
    const r = (t = this._win) == null ? void 0 : t.document.activeElement, o = !this._triggerKeys || this._triggerKeys.has(e.keyCode), n = r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA" || r.isContentEditable);
    return o && !n;
  }
  /**
   * @returns whether the keyboard event should dismiss keyboard navigation mode
   */
  _shouldDismissKeyboardNavigation(e) {
    var t;
    return (t = this._dismissKeys) == null ? void 0 : t.has(e.keyCode);
  }
  _scheduleDismiss() {
    const e = this._win;
    if (e) {
      this._dismissTimer && (e.clearTimeout(this._dismissTimer), this._dismissTimer = void 0);
      const t = e.document.activeElement;
      this._dismissTimer = e.setTimeout(() => {
        this._dismissTimer = void 0;
        const r = e.document.activeElement;
        t && r && t === r && (this.isNavigatingWithKeyboard = !1);
      }, kp);
    }
  }
}, Na = class iu {
  constructor(t, r) {
    this._cb = [], this._id = "k" + ++nu, this._win = t;
    const o = t.__keyborg;
    o ? (this._core = o.core, o.refs[this._id] = this) : (this._core = new xp(t, r), t.__keyborg = {
      core: this._core,
      refs: { [this._id]: this }
    });
  }
  static create(t, r) {
    return new iu(t, r);
  }
  static dispose(t) {
    t.dispose();
  }
  /**
   * Updates all subscribed callbacks with the keyboard navigation state
   */
  static update(t, r) {
    t._cb.forEach((o) => o(r));
  }
  dispose() {
    var t;
    const r = (t = this._win) == null ? void 0 : t.__keyborg;
    r != null && r.refs[this._id] ? (delete r.refs[this._id], Object.keys(r.refs).length === 0 && (r.core.dispose(), delete this._win.__keyborg)) : process.env.NODE_ENV !== "production" && console.error(
      `Keyborg instance ${this._id} is being disposed incorrectly.`
    ), this._cb = [], delete this._core, delete this._win;
  }
  /**
   * @returns Whether the user is navigating with keyboard
   */
  isNavigatingWithKeyboard() {
    var t;
    return !!((t = this._core) != null && t.isNavigatingWithKeyboard);
  }
  /**
   * @param callback - Called when the keyboard navigation state changes
   */
  subscribe(t) {
    this._cb.push(t);
  }
  /**
   * @param callback - Registered with subscribe
   */
  unsubscribe(t) {
    const r = this._cb.indexOf(t);
    r >= 0 && this._cb.splice(r, 1);
  }
  /**
   * Manually set the keyboard navigtion state
   */
  setVal(t) {
    this._core && (this._core.isNavigatingWithKeyboard = t);
  }
};
function Oa(e, t) {
  return Na.create(e, t);
}
function Pa(e) {
  Na.dispose(e);
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const Ct = "data-tabster", Ca = "data-tabster-dummy", Ep = "tabster:deloser", au = "tabster:modalizer:active", su = "tabster:modalizer:inactive", Sp = "tabster:modalizer:focusin", Bp = "tabster:modalizer:focusout", Tp = "tabster:modalizer:beforefocusout", Vi = "tabster:mover", lu = "tabster:focusin", cu = "tabster:focusout", uu = "tabster:movefocus", Hi = "tabster:mover:movefocus", $i = "tabster:groupper:movefocus", Wi = "tabster:mover:memorized-element", Ra = /* @__PURE__ */ ["a[href]", "button:not([disabled])", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "*[tabindex]", "*[contenteditable]"].join(", "), Ui = {
  Enter: 1,
  Escape: 2
}, Np = {
  Any: 0,
  Accessible: 1,
  Focusable: 2
}, Op = {
  History: 0,
  DeloserDefault: 1,
  RootDefault: 2,
  DeloserFirst: 3,
  RootFirst: 4
}, Bt = {
  Invisible: 0,
  PartiallyVisible: 1,
  Visible: 2
}, ro = {
  Source: 0,
  Target: 1
}, Xt = {
  Both: 0,
  Vertical: 1,
  Horizontal: 2,
  Grid: 3,
  GridLinear: 4
}, we = {
  ArrowUp: 1,
  ArrowDown: 2,
  ArrowLeft: 3,
  ArrowRight: 4,
  PageUp: 5,
  PageDown: 6,
  Home: 7,
  End: 8
}, du = {
  Unlimited: 0,
  Limited: 1,
  LimitedTrapFocus: 2
}, fu = {
  Auto: 0,
  Inside: 1,
  Outside: 2
};
var Je = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  TabsterAttributeName: Ct,
  TabsterDummyInputAttributeName: Ca,
  DeloserEventName: Ep,
  ModalizerActiveEventName: au,
  ModalizerInactiveEventName: su,
  ModalizerFocusInEventName: Sp,
  ModalizerFocusOutEventName: Bp,
  ModalizerBeforeFocusOutEventName: Tp,
  MoverEventName: Vi,
  FocusInEventName: lu,
  FocusOutEventName: cu,
  MoveFocusEventName: uu,
  MoverMoveFocusEventName: Hi,
  GroupperMoveFocusEventName: $i,
  MoverMemorizedElementEventName: Wi,
  FocusableSelector: Ra,
  GroupperMoveFocusActions: Ui,
  ObservedElementAccesibilities: Np,
  RestoreFocusOrders: Op,
  Visibilities: Bt,
  RestorerTypes: ro,
  MoverDirections: Xt,
  MoverKeys: we,
  GroupperTabbabilities: du,
  SysDummyInputsPositions: fu
});
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function je(e, t) {
  var r;
  return (r = e.storageEntry(t)) === null || r === void 0 ? void 0 : r.tabster;
}
function vu(e, t, r) {
  var o, n;
  const i = r || e._noop ? void 0 : t.getAttribute(Ct);
  let a = e.storageEntry(t), s;
  if (i)
    if (i !== ((o = a == null ? void 0 : a.attr) === null || o === void 0 ? void 0 : o.string))
      try {
        const d = JSON.parse(i);
        if (typeof d != "object")
          throw new Error(`Value is not a JSON object, got '${i}'.`);
        s = {
          string: i,
          object: d
        };
      } catch (d) {
        process.env.NODE_ENV === "development" && console.error(`data-tabster attribute error: ${d}`, t);
      }
    else
      return;
  else if (!a)
    return;
  a || (a = e.storageEntry(t, !0)), a.tabster || (a.tabster = {});
  const l = a.tabster || {}, c = ((n = a.attr) === null || n === void 0 ? void 0 : n.object) || {}, u = (s == null ? void 0 : s.object) || {};
  for (const d of Object.keys(c))
    if (!u[d]) {
      if (d === "root") {
        const f = l[d];
        f && e.root.onRoot(f, !0);
      }
      switch (d) {
        case "deloser":
        case "root":
        case "groupper":
        case "modalizer":
        case "restorer":
        case "mover":
          const f = l[d];
          f && (f.dispose(), delete l[d]);
          break;
        case "observed":
          delete l[d], e.observedElement && e.observedElement.onObservedElementUpdate(t);
          break;
        case "focusable":
        case "outline":
        case "uncontrolled":
        case "sys":
          delete l[d];
          break;
      }
    }
  for (const d of Object.keys(u)) {
    const f = u.sys;
    switch (d) {
      case "deloser":
        l.deloser ? l.deloser.setProps(u.deloser) : e.deloser ? l.deloser = e.deloser.createDeloser(t, u.deloser) : process.env.NODE_ENV === "development" && console.error("Deloser API used before initialization, please call `getDeloser()`");
        break;
      case "root":
        l.root ? l.root.setProps(u.root) : l.root = e.root.createRoot(t, u.root, f), e.root.onRoot(l.root);
        break;
      case "modalizer":
        l.modalizer ? l.modalizer.setProps(u.modalizer) : e.modalizer ? l.modalizer = e.modalizer.createModalizer(t, u.modalizer, f) : process.env.NODE_ENV === "development" && console.error("Modalizer API used before initialization, please call `getModalizer()`");
        break;
      case "restorer":
        l.restorer ? l.restorer.setProps(u.restorer) : e.restorer ? u.restorer && (l.restorer = e.restorer.createRestorer(t, u.restorer)) : process.env.NODE_ENV === "development" && console.error("Restorer API used before initialization, please call `getRestorer()`");
        break;
      case "focusable":
        l.focusable = u.focusable;
        break;
      case "groupper":
        l.groupper ? l.groupper.setProps(u.groupper) : e.groupper ? l.groupper = e.groupper.createGroupper(t, u.groupper, f) : process.env.NODE_ENV === "development" && console.error("Groupper API used before initialization, please call `getGroupper()`");
        break;
      case "mover":
        l.mover ? l.mover.setProps(u.mover) : e.mover ? l.mover = e.mover.createMover(t, u.mover, f) : process.env.NODE_ENV === "development" && console.error("Mover API used before initialization, please call `getMover()`");
        break;
      case "observed":
        e.observedElement ? (l.observed = u.observed, e.observedElement.onObservedElementUpdate(t)) : process.env.NODE_ENV === "development" && console.error("ObservedElement API used before initialization, please call `getObservedElement()`");
        break;
      case "uncontrolled":
        l.uncontrolled = u.uncontrolled;
        break;
      case "outline":
        e.outline ? l.outline = u.outline : process.env.NODE_ENV === "development" && console.error("Outline API used before initialization, please call `getOutline()`");
        break;
      case "sys":
        l.sys = u.sys;
        break;
      default:
        console.error(`Unknown key '${d}' in data-tabster attribute value.`);
    }
  }
  s ? a.attr = s : (Object.keys(l).length === 0 && (delete a.tabster, delete a.attr), e.storageEntry(t, !1));
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function Pp(e) {
  const t = e();
  try {
    if (t.EventTarget)
      return new t.EventTarget();
  } catch (r) {
    if (!(r instanceof TypeError))
      throw r;
  }
  return t.document.createElement("div");
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const Cp = (e) => new MutationObserver(e), Rp = (e, t, r, o) => e.createTreeWalker(t, r, o), Dp = (e) => e ? e.parentNode : null, zp = (e) => e ? e.parentElement : null, Ap = (e, t) => !!(t && (e != null && e.contains(t))), Fp = (e) => e.activeElement, jp = (e, t) => e.querySelector(t), Ip = (e, t) => Array.prototype.slice.call(e.querySelectorAll(t), 0), Mp = (e, t) => e.getElementById(t), qp = (e) => (e == null ? void 0 : e.firstChild) || null, Lp = (e) => (e == null ? void 0 : e.lastChild) || null, Vp = (e) => (e == null ? void 0 : e.nextSibling) || null, Hp = (e) => (e == null ? void 0 : e.previousSibling) || null, $p = (e) => (e == null ? void 0 : e.firstElementChild) || null, Wp = (e) => (e == null ? void 0 : e.lastElementChild) || null, Up = (e) => (e == null ? void 0 : e.nextElementSibling) || null, Gp = (e) => (e == null ? void 0 : e.previousElementSibling) || null, Kp = (e, t) => e.appendChild(t), Xp = (e, t, r) => e.insertBefore(t, r), Yp = (e) => {
  var t;
  return ((t = e.ownerDocument) === null || t === void 0 ? void 0 : t.getSelection()) || null;
}, T = {
  createMutationObserver: Cp,
  createTreeWalker: Rp,
  getParentNode: Dp,
  getParentElement: zp,
  nodeContains: Ap,
  getActiveElement: Fp,
  querySelector: jp,
  querySelectorAll: Ip,
  getElementById: Mp,
  getFirstChild: qp,
  getLastChild: Lp,
  getNextSibling: Vp,
  getPreviousSibling: Hp,
  getFirstElementChild: $p,
  getLastElementChild: Wp,
  getNextElementSibling: Up,
  getPreviousElementSibling: Gp,
  appendChild: Kp,
  insertBefore: Xp,
  getSelection: Yp
};
function Jp(e) {
  for (const t of Object.keys(e))
    T[t] = e[t];
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
let Gi;
const As = typeof DOMRect < "u" ? DOMRect : class {
  constructor(e, t, r, o) {
    this.left = e || 0, this.top = t || 0, this.right = (e || 0) + (r || 0), this.bottom = (t || 0) + (o || 0);
  }
};
let Qp = 0;
try {
  document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT), Gi = !1;
} catch {
  Gi = !0;
}
const ni = 100;
function At(e) {
  const t = e();
  let r = t.__tabsterInstanceContext;
  return r || (r = {
    elementByUId: {},
    basics: {
      Promise: t.Promise || void 0,
      WeakRef: t.WeakRef || void 0
    },
    containerBoundingRectCache: {},
    lastContainerBoundingRectCacheId: 0,
    fakeWeakRefs: [],
    fakeWeakRefsStarted: !1
  }, t.__tabsterInstanceContext = r), r;
}
function Zp(e) {
  const t = e.__tabsterInstanceContext;
  t && (t.elementByUId = {}, delete t.WeakRef, t.containerBoundingRectCache = {}, t.containerBoundingRectCacheTimer && e.clearTimeout(t.containerBoundingRectCacheTimer), t.fakeWeakRefsTimer && e.clearTimeout(t.fakeWeakRefsTimer), t.fakeWeakRefs = [], delete e.__tabsterInstanceContext);
}
function eb(e) {
  const t = e.__tabsterInstanceContext;
  return new ((t == null ? void 0 : t.basics.WeakMap) || WeakMap)();
}
function tb(e) {
  return !!e.querySelector(Ra);
}
class hu {
  constructor(t) {
    this._target = t;
  }
  deref() {
    return this._target;
  }
  static cleanup(t, r) {
    return t._target ? r || !za(t._target.ownerDocument, t._target) ? (delete t._target, !0) : !1 : !0;
  }
}
class He {
  constructor(t, r, o) {
    const n = At(t);
    let i;
    n.WeakRef ? i = new n.WeakRef(r) : (i = new hu(r), n.fakeWeakRefs.push(i)), this._ref = i, this._data = o;
  }
  get() {
    const t = this._ref;
    let r;
    return t && (r = t.deref(), r || delete this._ref), r;
  }
  getData() {
    return this._data;
  }
}
function pu(e, t) {
  const r = At(e);
  r.fakeWeakRefs = r.fakeWeakRefs.filter((o) => !hu.cleanup(o, t));
}
function bu(e) {
  const t = At(e);
  t.fakeWeakRefsStarted || (t.fakeWeakRefsStarted = !0, t.WeakRef = sb(t)), t.fakeWeakRefsTimer || (t.fakeWeakRefsTimer = e().setTimeout(() => {
    t.fakeWeakRefsTimer = void 0, pu(e), bu(e);
  }, 2 * 60 * 1e3));
}
function rb(e) {
  const t = At(e);
  t.fakeWeakRefsStarted = !1, t.fakeWeakRefsTimer && (e().clearTimeout(t.fakeWeakRefsTimer), t.fakeWeakRefsTimer = void 0, t.fakeWeakRefs = []);
}
function Da(e, t, r) {
  if (t.nodeType !== Node.ELEMENT_NODE)
    return;
  const o = Gi ? r : {
    acceptNode: r
  };
  return T.createTreeWalker(
    e,
    t,
    NodeFilter.SHOW_ELEMENT,
    o,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: We still don't want to completely break IE11, so, entityReferenceExpansion argument is not optional.
    !1
    /* Last argument is not optional for IE11! */
  );
}
function gu(e, t) {
  let r = t.__tabsterCacheId;
  const o = At(e), n = r ? o.containerBoundingRectCache[r] : void 0;
  if (n)
    return n.rect;
  const i = t.ownerDocument && t.ownerDocument.documentElement;
  if (!i)
    return new As();
  let a = 0, s = 0, l = i.clientWidth, c = i.clientHeight;
  if (t !== i) {
    const d = t.getBoundingClientRect();
    a = Math.max(a, d.left), s = Math.max(s, d.top), l = Math.min(l, d.right), c = Math.min(c, d.bottom);
  }
  const u = new As(a < l ? a : -1, s < c ? s : -1, a < l ? l - a : 0, s < c ? c - s : 0);
  return r || (r = "r-" + ++o.lastContainerBoundingRectCacheId, t.__tabsterCacheId = r), o.containerBoundingRectCache[r] = {
    rect: u,
    element: t
  }, o.containerBoundingRectCacheTimer || (o.containerBoundingRectCacheTimer = window.setTimeout(() => {
    o.containerBoundingRectCacheTimer = void 0;
    for (const d of Object.keys(o.containerBoundingRectCache))
      delete o.containerBoundingRectCache[d].element.__tabsterCacheId;
    o.containerBoundingRectCache = {};
  }, 50)), u;
}
function Fs(e, t, r) {
  const o = mu(t);
  if (!o)
    return !1;
  const n = gu(e, o), i = t.getBoundingClientRect(), a = i.height * (1 - r), s = Math.max(0, n.top - i.top), l = Math.max(0, i.bottom - n.bottom), c = s + l;
  return c === 0 || c <= a;
}
function ob(e, t, r) {
  const o = mu(t);
  if (o) {
    const n = gu(e, o), i = t.getBoundingClientRect();
    r ? o.scrollTop += i.top - n.top : o.scrollTop += i.bottom - n.bottom;
  }
}
function mu(e) {
  const t = e.ownerDocument;
  if (t) {
    for (let r = T.getParentElement(e); r; r = T.getParentElement(r))
      if (r.scrollWidth > r.clientWidth || r.scrollHeight > r.clientHeight)
        return r;
    return t.documentElement;
  }
  return null;
}
function nb(e) {
  e.__shouldIgnoreFocus = !0;
}
function _u(e) {
  return !!e.__shouldIgnoreFocus;
}
function ib(e) {
  const t = new Uint32Array(4);
  if (e.crypto && e.crypto.getRandomValues)
    e.crypto.getRandomValues(t);
  else if (e.msCrypto && e.msCrypto.getRandomValues)
    e.msCrypto.getRandomValues(t);
  else
    for (let o = 0; o < t.length; o++)
      t[o] = 4294967295 * Math.random();
  const r = [];
  for (let o = 0; o < t.length; o++)
    r.push(t[o].toString(36));
  return r.push("|"), r.push((++Qp).toString(36)), r.push("|"), r.push(Date.now().toString(36)), r.join("");
}
function Ho(e, t) {
  const r = At(e);
  let o = t.__tabsterElementUID;
  return o || (o = t.__tabsterElementUID = ib(e())), !r.elementByUId[o] && za(t.ownerDocument, t) && (r.elementByUId[o] = new He(e, t)), o;
}
function js(e, t) {
  const r = At(e);
  for (const o of Object.keys(r.elementByUId)) {
    const n = r.elementByUId[o], i = n && n.get();
    i && t && !T.nodeContains(t, i) || delete r.elementByUId[o];
  }
}
function za(e, t) {
  return T.nodeContains(e == null ? void 0 : e.body, t);
}
function yu(e, t) {
  const r = e.matches || e.matchesSelector || e.msMatchesSelector || e.webkitMatchesSelector;
  return r && r.call(e, t);
}
function ab(e) {
  const t = At(e);
  if (t.basics.Promise)
    return t.basics.Promise;
  throw new Error("No Promise defined.");
}
function sb(e) {
  return e.basics.WeakRef;
}
let lb = 0;
class ho {
  constructor(t, r, o) {
    const n = t.getWindow;
    this._tabster = t, this._element = new He(n, r), this._props = {
      ...o
    }, this.id = "i" + ++lb;
  }
  getElement() {
    return this._element.get();
  }
  getProps() {
    return this._props;
  }
  setProps(t) {
    this._props = {
      ...t
    };
  }
}
class nn {
  constructor(t, r, o, n, i) {
    var a;
    this._focusIn = (u) => {
      if (this._fixedTarget) {
        const f = this._fixedTarget.get();
        f && xt(f);
        return;
      }
      const d = this.input;
      if (this.onFocusIn && d) {
        const f = u.relatedTarget;
        this.onFocusIn(this, this._isBackward(!0, d, f), f);
      }
    }, this._focusOut = (u) => {
      if (this._fixedTarget)
        return;
      this.useDefaultAction = !1;
      const d = this.input;
      if (this.onFocusOut && d) {
        const f = u.relatedTarget;
        this.onFocusOut(this, this._isBackward(!1, d, f), f);
      }
    };
    const s = t(), l = s.document.createElement("i");
    l.tabIndex = 0, l.setAttribute("role", "none"), l.setAttribute(Ca, ""), l.setAttribute("aria-hidden", "true");
    const c = l.style;
    c.position = "fixed", c.width = c.height = "1px", c.opacity = "0.001", c.zIndex = "-1", c.setProperty("content-visibility", "hidden"), nb(l), this.input = l, this.isFirst = o.isFirst, this.isOutside = r, this._isPhantom = (a = o.isPhantom) !== null && a !== void 0 ? a : !1, this._fixedTarget = i, l.addEventListener("focusin", this._focusIn), l.addEventListener("focusout", this._focusOut), l.__tabsterDummyContainer = n, this._isPhantom && (this._disposeTimer = s.setTimeout(() => {
      delete this._disposeTimer, this.dispose();
    }, 0), this._clearDisposeTimeout = () => {
      this._disposeTimer && (s.clearTimeout(this._disposeTimer), delete this._disposeTimer), delete this._clearDisposeTimeout;
    });
  }
  dispose() {
    var t;
    this._clearDisposeTimeout && this._clearDisposeTimeout();
    const r = this.input;
    r && (delete this._fixedTarget, delete this.onFocusIn, delete this.onFocusOut, delete this.input, r.removeEventListener("focusin", this._focusIn), r.removeEventListener("focusout", this._focusOut), delete r.__tabsterDummyContainer, (t = T.getParentNode(r)) === null || t === void 0 || t.removeChild(r));
  }
  setTopLeft(t, r) {
    var o;
    const n = (o = this.input) === null || o === void 0 ? void 0 : o.style;
    n && (n.top = `${t}px`, n.left = `${r}px`);
  }
  _isBackward(t, r, o) {
    return t && !o ? !this.isFirst : !!(o && r.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING);
  }
}
const Pn = {
  Root: 1,
  Modalizer: 2,
  Mover: 3,
  Groupper: 4
};
class Sr {
  constructor(t, r, o, n, i, a) {
    this._element = r, this._instance = new ub(t, r, this, o, n, i, a);
  }
  _setHandlers(t, r) {
    this._onFocusIn = t, this._onFocusOut = r;
  }
  moveOut(t) {
    var r;
    (r = this._instance) === null || r === void 0 || r.moveOut(t);
  }
  moveOutWithDefaultAction(t, r) {
    var o;
    (o = this._instance) === null || o === void 0 || o.moveOutWithDefaultAction(t, r);
  }
  getHandler(t) {
    return t ? this._onFocusIn : this._onFocusOut;
  }
  setTabbable(t) {
    var r;
    (r = this._instance) === null || r === void 0 || r.setTabbable(this, t);
  }
  dispose() {
    this._instance && (this._instance.dispose(this), delete this._instance), delete this._onFocusIn, delete this._onFocusOut;
  }
  static moveWithPhantomDummy(t, r, o, n, i) {
    var a;
    const l = new nn(t.getWindow, !0, {
      isPhantom: !0,
      isFirst: !0
    }).input;
    if (l) {
      let c, u;
      if (r.tagName === "BODY")
        c = r, u = o && n || !o && !n ? T.getFirstElementChild(r) : null;
      else {
        o && (!n || n && !t.focusable.isFocusable(r, !1, !0, !0)) ? (c = r, u = n ? r.firstElementChild : null) : (c = T.getParentElement(r), u = o && n || !o && !n ? r : T.getNextElementSibling(r));
        let d, f;
        do
          d = o && n || !o && !n ? T.getPreviousElementSibling(u) : u, f = (a = d == null ? void 0 : d.__tabsterDummyContainer) === null || a === void 0 ? void 0 : a.get(), f === r ? u = o && n || !o && !n ? d : T.getNextElementSibling(d) : f = void 0;
        while (f);
      }
      c && Lt({
        by: "root",
        owner: c,
        next: null,
        relatedEvent: i
      }) && (T.insertBefore(c, l, u), xt(l));
    }
  }
  static addPhantomDummyWithTarget(t, r, o, n) {
    const a = new nn(t.getWindow, !0, {
      isPhantom: !0,
      isFirst: !0
    }, void 0, new He(t.getWindow, n)).input;
    if (a) {
      let s, l;
      tb(r) && !o ? (s = r, l = T.getFirstElementChild(r)) : (s = T.getParentElement(r), l = o ? r : T.getNextElementSibling(r)), s && T.insertBefore(s, a, l);
    }
  }
}
function It(e, t) {
  var r;
  const o = {
    1: "Root",
    2: "Modalizer",
    3: "Mover",
    4: "Groupper"
  };
  (r = e.input) === null || r === void 0 || r.setAttribute(Ca, [`isFirst=${e.isFirst}`, `isOutside=${e.isOutside}`, ...t.map((n) => `(${o[n.priority]}, tabbable=${n.tabbable})`)].join(", "));
}
class cb {
  constructor(t) {
    this._updateQueue = /* @__PURE__ */ new Set(), this._lastUpdateQueueTime = 0, this._changedParents = /* @__PURE__ */ new WeakSet(), this._dummyElements = [], this._dummyCallbacks = /* @__PURE__ */ new WeakMap(), this._domChanged = (r) => {
      var o;
      this._changedParents.has(r) || (this._changedParents.add(r), !this._updateDummyInputsTimer && (this._updateDummyInputsTimer = (o = this._win) === null || o === void 0 ? void 0 : o.call(this).setTimeout(() => {
        delete this._updateDummyInputsTimer;
        for (const n of this._dummyElements) {
          const i = n.get();
          if (i) {
            const a = this._dummyCallbacks.get(i);
            if (a) {
              const s = T.getParentNode(i);
              (!s || this._changedParents.has(s)) && a();
            }
          }
        }
        this._changedParents = /* @__PURE__ */ new WeakSet();
      }, ni)));
    }, this._win = t;
  }
  add(t, r) {
    !this._dummyCallbacks.has(t) && this._win && (this._dummyElements.push(new He(this._win, t)), this._dummyCallbacks.set(t, r), this.domChanged = this._domChanged);
  }
  remove(t) {
    this._dummyElements = this._dummyElements.filter((r) => {
      const o = r.get();
      return o && o !== t;
    }), this._dummyCallbacks.delete(t), this._dummyElements.length === 0 && delete this.domChanged;
  }
  dispose() {
    var t;
    const r = (t = this._win) === null || t === void 0 ? void 0 : t.call(this);
    this._updateTimer && (r == null || r.clearTimeout(this._updateTimer), delete this._updateTimer), this._updateDummyInputsTimer && (r == null || r.clearTimeout(this._updateDummyInputsTimer), delete this._updateDummyInputsTimer), this._changedParents = /* @__PURE__ */ new WeakSet(), this._dummyCallbacks = /* @__PURE__ */ new WeakMap(), this._dummyElements = [], this._updateQueue.clear(), delete this.domChanged, delete this._win;
  }
  updatePositions(t) {
    this._win && (this._updateQueue.add(t), this._lastUpdateQueueTime = Date.now(), this._scheduledUpdatePositions());
  }
  _scheduledUpdatePositions() {
    var t;
    this._updateTimer || (this._updateTimer = (t = this._win) === null || t === void 0 ? void 0 : t.call(this).setTimeout(() => {
      if (delete this._updateTimer, this._lastUpdateQueueTime + ni <= Date.now()) {
        const r = /* @__PURE__ */ new Map(), o = [];
        for (const n of this._updateQueue)
          o.push(n(r));
        this._updateQueue.clear();
        for (const n of o)
          n();
        r.clear();
      } else
        this._scheduledUpdatePositions();
    }, ni));
  }
}
class ub {
  constructor(t, r, o, n, i, a, s) {
    this._wrappers = [], this._isOutside = !1, this._transformElements = /* @__PURE__ */ new Set(), this._onFocusIn = (h, v, p) => {
      this._onFocus(!0, h, v, p);
    }, this._onFocusOut = (h, v, p) => {
      this._onFocus(!1, h, v, p);
    }, this.moveOut = (h) => {
      var v;
      const p = this._firstDummy, g = this._lastDummy;
      if (p && g) {
        this._ensurePosition();
        const b = p.input, y = g.input, m = (v = this._element) === null || v === void 0 ? void 0 : v.get();
        if (b && y && m) {
          let w;
          h ? (b.tabIndex = 0, w = b) : (y.tabIndex = 0, w = y), w && xt(w);
        }
      }
    }, this.moveOutWithDefaultAction = (h, v) => {
      var p;
      const g = this._firstDummy, b = this._lastDummy;
      if (g && b) {
        this._ensurePosition();
        const y = g.input, m = b.input, w = (p = this._element) === null || p === void 0 ? void 0 : p.get();
        if (y && m && w) {
          let _;
          h ? !g.isOutside && this._tabster.focusable.isFocusable(w, !0, !0, !0) ? _ = w : (g.useDefaultAction = !0, y.tabIndex = 0, _ = y) : (b.useDefaultAction = !0, m.tabIndex = 0, _ = m), _ && Lt({
            by: "root",
            owner: w,
            next: null,
            relatedEvent: v
          }) && xt(_);
        }
      }
    }, this.setTabbable = (h, v) => {
      var p, g;
      for (const y of this._wrappers)
        if (y.manager === h) {
          y.tabbable = v;
          break;
        }
      const b = this._getCurrent();
      if (b) {
        const y = b.tabbable ? 0 : -1;
        let m = (p = this._firstDummy) === null || p === void 0 ? void 0 : p.input;
        m && (m.tabIndex = y), m = (g = this._lastDummy) === null || g === void 0 ? void 0 : g.input, m && (m.tabIndex = y);
      }
      process.env.NODE_ENV === "development" && (this._firstDummy && It(this._firstDummy, this._wrappers), this._lastDummy && It(this._lastDummy, this._wrappers));
    }, this._addDummyInputs = () => {
      this._addTimer || (this._addTimer = this._getWindow().setTimeout(() => {
        delete this._addTimer, this._ensurePosition(), process.env.NODE_ENV === "development" && (this._firstDummy && It(this._firstDummy, this._wrappers), this._lastDummy && It(this._lastDummy, this._wrappers)), this._addTransformOffsets();
      }, 0));
    }, this._addTransformOffsets = () => {
      this._tabster._dummyObserver.updatePositions(this._computeTransformOffsets);
    }, this._computeTransformOffsets = (h) => {
      var v, p;
      const g = ((v = this._firstDummy) === null || v === void 0 ? void 0 : v.input) || ((p = this._lastDummy) === null || p === void 0 ? void 0 : p.input), b = this._transformElements, y = /* @__PURE__ */ new Set();
      let m = 0, w = 0;
      const _ = this._getWindow();
      for (let E = g; E && E.nodeType === Node.ELEMENT_NODE; E = T.getParentElement(E)) {
        let S = h.get(E);
        if (S === void 0) {
          const C = _.getComputedStyle(E).transform;
          C && C !== "none" && (S = {
            scrollTop: E.scrollTop,
            scrollLeft: E.scrollLeft
          }), h.set(E, S || null);
        }
        S && (y.add(E), b.has(E) || E.addEventListener("scroll", this._addTransformOffsets), m += S.scrollTop, w += S.scrollLeft);
      }
      for (const E of b)
        y.has(E) || E.removeEventListener("scroll", this._addTransformOffsets);
      return this._transformElements = y, () => {
        var E, S;
        (E = this._firstDummy) === null || E === void 0 || E.setTopLeft(m, w), (S = this._lastDummy) === null || S === void 0 || S.setTopLeft(m, w);
      };
    };
    const l = r.get();
    if (!l)
      throw new Error("No element");
    this._tabster = t, this._getWindow = t.getWindow, this._callForDefaultAction = s;
    const c = l.__tabsterDummy;
    if ((c || this)._wrappers.push({
      manager: o,
      priority: n,
      tabbable: !0
    }), c)
      return process.env.NODE_ENV === "development" && (this._firstDummy && It(this._firstDummy, c._wrappers), this._lastDummy && It(this._lastDummy, c._wrappers)), c;
    l.__tabsterDummy = this;
    const u = i == null ? void 0 : i.dummyInputsPosition, d = l.tagName;
    this._isOutside = u ? u === fu.Outside : (a || d === "UL" || d === "OL" || d === "TABLE") && !(d === "LI" || d === "TD" || d === "TH"), this._firstDummy = new nn(this._getWindow, this._isOutside, {
      isFirst: !0
    }, r), this._lastDummy = new nn(this._getWindow, this._isOutside, {
      isFirst: !1
    }, r);
    const f = this._firstDummy.input;
    f && t._dummyObserver.add(f, this._addDummyInputs), this._firstDummy.onFocusIn = this._onFocusIn, this._firstDummy.onFocusOut = this._onFocusOut, this._lastDummy.onFocusIn = this._onFocusIn, this._lastDummy.onFocusOut = this._onFocusOut, this._element = r, this._addDummyInputs();
  }
  dispose(t, r) {
    var o, n, i, a;
    const s = this._wrappers = this._wrappers.filter((l) => l.manager !== t && !r);
    if (process.env.NODE_ENV === "development" && (this._firstDummy && It(this._firstDummy, s), this._lastDummy && It(this._lastDummy, s)), s.length === 0) {
      delete ((o = this._element) === null || o === void 0 ? void 0 : o.get()).__tabsterDummy;
      for (const u of this._transformElements)
        u.removeEventListener("scroll", this._addTransformOffsets);
      this._transformElements.clear();
      const l = this._getWindow();
      this._addTimer && (l.clearTimeout(this._addTimer), delete this._addTimer);
      const c = (n = this._firstDummy) === null || n === void 0 ? void 0 : n.input;
      c && this._tabster._dummyObserver.remove(c), (i = this._firstDummy) === null || i === void 0 || i.dispose(), (a = this._lastDummy) === null || a === void 0 || a.dispose();
    }
  }
  _onFocus(t, r, o, n) {
    var i;
    const a = this._getCurrent();
    a && (!r.useDefaultAction || this._callForDefaultAction) && ((i = a.manager.getHandler(t)) === null || i === void 0 || i(r, o, n));
  }
  _getCurrent() {
    return this._wrappers.sort((t, r) => t.tabbable !== r.tabbable ? t.tabbable ? -1 : 1 : t.priority - r.priority), this._wrappers[0];
  }
  _ensurePosition() {
    var t, r, o;
    const n = (t = this._element) === null || t === void 0 ? void 0 : t.get(), i = (r = this._firstDummy) === null || r === void 0 ? void 0 : r.input, a = (o = this._lastDummy) === null || o === void 0 ? void 0 : o.input;
    if (!(!n || !i || !a))
      if (this._isOutside) {
        const s = T.getParentNode(n);
        if (s) {
          const l = T.getNextSibling(n);
          l !== a && T.insertBefore(s, a, l), T.getPreviousElementSibling(n) !== i && T.insertBefore(s, i, n);
        }
      } else {
        T.getLastElementChild(n) !== a && T.appendChild(n, a);
        const s = T.getFirstElementChild(n);
        s && s !== i && s.parentNode && T.insertBefore(s.parentNode, i, s);
      }
  }
}
function wu(e) {
  let t = null;
  for (let r = T.getLastElementChild(e); r; r = T.getLastElementChild(r))
    t = r;
  return t || void 0;
}
function db(e, t) {
  let r = e, o = null;
  for (; r && !o; )
    o = t ? T.getPreviousElementSibling(r) : T.getNextElementSibling(r), r = T.getParentElement(r);
  return o || void 0;
}
function Et(e, t, r) {
  const o = new CustomEvent(t, {
    bubbles: !0,
    cancelable: !0,
    composed: !0,
    detail: r
  });
  return o.details = r, e.dispatchEvent(o), !o.defaultPrevented;
}
function Lt(e) {
  return Et(e.owner, uu, e);
}
function ii(e, t, r, o) {
  const n = e.storageEntry(t, !0);
  let i = !1;
  if (!n.aug) {
    if (o === void 0)
      return i;
    n.aug = {};
  }
  if (o === void 0) {
    if (r in n.aug) {
      const a = n.aug[r];
      delete n.aug[r], a === null ? t.removeAttribute(r) : t.setAttribute(r, a), i = !0;
    }
  } else {
    let a;
    r in n.aug || (a = t.getAttribute(r)), a !== void 0 && a !== o && (n.aug[r] = a, o === null ? t.removeAttribute(r) : t.setAttribute(r, o), i = !0);
  }
  return o === void 0 && Object.keys(n.aug).length === 0 && (delete n.aug, e.storageEntry(t, !1)), i;
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function Aa(e, t) {
  const r = JSON.stringify(e);
  return t === !0 ? r : {
    [Ct]: r
  };
}
function fb(e, t) {
  for (const r of Object.keys(t)) {
    const o = t[r];
    o ? e[r] = o : delete e[r];
  }
}
function vb(e, t, r) {
  let o;
  if (r) {
    const n = e.getAttribute(Ct);
    if (n)
      try {
        o = JSON.parse(n);
      } catch (i) {
        process.env.NODE_ENV === "development" && console.error(`data-tabster attribute error: ${i}`, e);
      }
  }
  o || (o = {}), fb(o, t), Object.keys(o).length > 0 ? e.setAttribute(Ct, Aa(o, !0)) : e.removeAttribute(Ct);
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function Is(e, t, r) {
  if (process.env.NODE_ENV === "development") {
    const o = e.get();
    o && (t ? o.style.removeProperty("--tabster-root") : o.style.setProperty("--tabster-root", r + ","));
  }
}
class Ms extends Sr {
  constructor(t, r, o, n) {
    super(t, r, Pn.Root, n, void 0, !0), this._onDummyInputFocus = (i) => {
      var a;
      if (i.useDefaultAction)
        this._setFocused(!1);
      else {
        this._tabster.keyboardNavigation.setNavigatingWithKeyboard(!0);
        const s = this._element.get();
        if (s) {
          this._setFocused(!0);
          const l = this._tabster.focusedElement.getFirstOrLastTabbable(i.isFirst, {
            container: s,
            ignoreAccessibility: !0
          });
          if (l) {
            xt(l);
            return;
          }
        }
        (a = i.input) === null || a === void 0 || a.blur();
      }
    }, this._setHandlers(this._onDummyInputFocus), this._tabster = t, this._setFocused = o;
  }
}
class hb extends ho {
  constructor(t, r, o, n, i) {
    super(t, r, n), this._isFocused = !1, this._setFocused = (c) => {
      var u;
      if (this._setFocusedTimer && (this._tabster.getWindow().clearTimeout(this._setFocusedTimer), delete this._setFocusedTimer), this._isFocused === c)
        return;
      const d = this._element.get();
      d && (c ? (this._isFocused = !0, (u = this._dummyManager) === null || u === void 0 || u.setTabbable(!1), Et(this._tabster.root.eventTarget, "focus", {
        element: d
      })) : this._setFocusedTimer = this._tabster.getWindow().setTimeout(() => {
        var f;
        delete this._setFocusedTimer, this._isFocused = !1, (f = this._dummyManager) === null || f === void 0 || f.setTabbable(!0), Et(this._tabster.root.eventTarget, "blur", {
          element: d
        });
      }, 0));
    }, this._onFocusIn = (c) => {
      const u = this._tabster.getParent, d = this._element.get();
      let f = c.composedPath()[0];
      do {
        if (f === d) {
          this._setFocused(!0);
          return;
        }
        f = f && u(f);
      } while (f);
    }, this._onFocusOut = () => {
      this._setFocused(!1);
    }, this._onDispose = o;
    const a = t.getWindow;
    this.uid = Ho(a, r), this._sys = i, (t.controlTab || t.rootDummyInputs) && this.addDummyInputs();
    const l = a().document;
    l.addEventListener(ft, this._onFocusIn), l.addEventListener(to, this._onFocusOut), this._add();
  }
  addDummyInputs() {
    this._dummyManager || (this._dummyManager = new Ms(this._tabster, this._element, this._setFocused, this._sys));
  }
  dispose() {
    var t;
    this._onDispose(this);
    const r = this._tabster.getWindow(), o = r.document;
    o.removeEventListener(ft, this._onFocusIn), o.removeEventListener(to, this._onFocusOut), this._setFocusedTimer && (r.clearTimeout(this._setFocusedTimer), delete this._setFocusedTimer), (t = this._dummyManager) === null || t === void 0 || t.dispose(), this._remove();
  }
  moveOutWithDefaultAction(t, r) {
    const o = this._dummyManager;
    if (o)
      o.moveOutWithDefaultAction(t, r);
    else {
      const n = this.getElement();
      n && Ms.moveWithPhantomDummy(this._tabster, n, !0, t, r);
    }
  }
  _add() {
    process.env.NODE_ENV === "development" && Is(this._element, !1, this.uid);
  }
  _remove() {
    process.env.NODE_ENV === "development" && Is(this._element, !0);
  }
}
class ve {
  constructor(t, r) {
    this._autoRootWaiting = !1, this._roots = {}, this._forceDummy = !1, this.rootById = {}, this._autoRootCreate = () => {
      var o;
      const n = this._win().document, i = n.body;
      if (i) {
        this._autoRootUnwait(n);
        const a = this._autoRoot;
        if (a)
          return vb(i, {
            root: a
          }, !0), vu(this._tabster, i), (o = je(this._tabster, i)) === null || o === void 0 ? void 0 : o.root;
      } else
        this._autoRootWaiting || (this._autoRootWaiting = !0, n.addEventListener("readystatechange", this._autoRootCreate));
    }, this._onRootDispose = (o) => {
      delete this._roots[o.id];
    }, this._tabster = t, this._win = t.getWindow, this._autoRoot = r, this.eventTarget = Pp(this._win), t.queueInit(() => {
      this._autoRoot && this._autoRootCreate();
    });
  }
  _autoRootUnwait(t) {
    t.removeEventListener("readystatechange", this._autoRootCreate), this._autoRootWaiting = !1;
  }
  dispose() {
    const t = this._win();
    this._autoRootUnwait(t.document), delete this._autoRoot, Object.keys(this._roots).forEach((r) => {
      this._roots[r] && (this._roots[r].dispose(), delete this._roots[r]);
    }), this.rootById = {};
  }
  createRoot(t, r, o) {
    process.env.NODE_ENV;
    const n = new hb(this._tabster, t, this._onRootDispose, r, o);
    return this._roots[n.id] = n, this._forceDummy && n.addDummyInputs(), n;
  }
  addDummyInputs() {
    this._forceDummy = !0;
    const t = this._roots;
    for (const r of Object.keys(t))
      t[r].addDummyInputs();
  }
  static getRootByUId(t, r) {
    const o = t().__tabsterInstance;
    return o && o.root.rootById[r];
  }
  /**
   * Fetches the tabster context for an element walking up its ancestors
   *
   * @param tabster Tabster instance
   * @param element The element the tabster context should represent
   * @param options Additional options
   * @returns undefined if the element is not a child of a tabster root, otherwise all applicable tabster behaviours and configurations
   */
  static getTabsterContext(t, r, o) {
    o === void 0 && (o = {});
    var n, i, a, s;
    if (!r.ownerDocument)
      return;
    const {
      checkRtl: l,
      referenceElement: c
    } = o, u = t.getParent;
    t.drainInitQueue();
    let d, f, h, v, p = !1, g, b, y, m, w = c || r;
    const _ = {};
    for (; w && (!d || l); ) {
      const S = je(t, w);
      if (l && y === void 0) {
        const Be = w.dir;
        Be && (y = Be.toLowerCase() === "rtl");
      }
      if (!S) {
        w = u(w);
        continue;
      }
      const C = w.tagName;
      (S.uncontrolled || C === "IFRAME" || C === "WEBVIEW") && (m = w), !v && (!((n = S.focusable) === null || n === void 0) && n.excludeFromMover) && !h && (p = !0);
      const I = S.modalizer, H = S.groupper, se = S.mover;
      !f && I && (f = I), !h && H && (!f || I) && (f ? (!H.isActive() && H.getProps().tabbability && f.userId !== ((i = t.modalizer) === null || i === void 0 ? void 0 : i.activeId) && (f = void 0, h = H), b = H) : h = H), !v && se && (!f || I) && (!H || w !== r) && (v = se, g = !!h && h !== H), S.root && (d = S.root), !((a = S.focusable) === null || a === void 0) && a.ignoreKeydown && Object.assign(_, S.focusable.ignoreKeydown), w = u(w);
    }
    if (!d) {
      const S = t.root;
      S._autoRoot && !((s = r.ownerDocument) === null || s === void 0) && s.body && (d = S._autoRootCreate());
    }
    return h && !v && (g = !0), process.env.NODE_ENV === "development" && !d && (f || h || v) && console.error("Tabster Root is required for Mover, Groupper and Modalizer to work."), d ? {
      root: d,
      modalizer: f,
      groupper: h,
      mover: v,
      groupperBeforeMover: g,
      modalizerInGroupper: b,
      rtl: l ? !!y : void 0,
      uncontrolled: m,
      excludedFromMover: p,
      ignoreKeydown: (S) => !!_[S.key]
    } : void 0;
  }
  static getRoot(t, r) {
    var o;
    const n = t.getParent;
    for (let i = r; i; i = n(i)) {
      const a = (o = je(t, i)) === null || o === void 0 ? void 0 : o.root;
      if (a)
        return a;
    }
  }
  onRoot(t, r) {
    r ? delete this.rootById[t.uid] : this.rootById[t.uid] = t;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class ku {
  constructor() {
    this._callbacks = [];
  }
  dispose() {
    this._callbacks = [], delete this._val;
  }
  subscribe(t) {
    const r = this._callbacks;
    r.indexOf(t) < 0 && r.push(t);
  }
  subscribeFirst(t) {
    const r = this._callbacks, o = r.indexOf(t);
    o >= 0 && r.splice(o, 1), r.unshift(t);
  }
  unsubscribe(t) {
    const r = this._callbacks.indexOf(t);
    r >= 0 && this._callbacks.splice(r, 1);
  }
  setVal(t, r) {
    this._val !== t && (this._val = t, this._callCallbacks(t, r));
  }
  getVal() {
    return this._val;
  }
  trigger(t, r) {
    this._callCallbacks(t, r);
  }
  _callCallbacks(t, r) {
    this._callbacks.forEach((o) => o(t, r));
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class pb {
  constructor(t) {
    this._tabster = t;
  }
  dispose() {
  }
  getProps(t) {
    const r = je(this._tabster, t);
    return r && r.focusable || {};
  }
  isFocusable(t, r, o, n) {
    return yu(t, Ra) && (r || t.tabIndex !== -1) ? (o || this.isVisible(t)) && (n || this.isAccessible(t)) : !1;
  }
  isVisible(t) {
    if (!t.ownerDocument || t.nodeType !== Node.ELEMENT_NODE || t.offsetParent === null && t.ownerDocument.body !== t)
      return !1;
    const r = t.ownerDocument.defaultView;
    if (!r)
      return !1;
    const o = t.ownerDocument.body.getBoundingClientRect();
    return !(o.width === 0 && o.height === 0 || r.getComputedStyle(t).visibility === "hidden");
  }
  isAccessible(t) {
    var r;
    for (let o = t; o; o = T.getParentElement(o)) {
      const n = je(this._tabster, o);
      if (this._isHidden(o) || !((r = n == null ? void 0 : n.focusable) === null || r === void 0 ? void 0 : r.ignoreAriaDisabled) && this._isDisabled(o))
        return !1;
    }
    return !0;
  }
  _isDisabled(t) {
    return t.hasAttribute("disabled");
  }
  _isHidden(t) {
    var r;
    const o = t.getAttribute("aria-hidden");
    return !!(o && o.toLowerCase() === "true" && !(!((r = this._tabster.modalizer) === null || r === void 0) && r.isAugmented(t)));
  }
  findFirst(t, r) {
    return this.findElement({
      ...t
    }, r);
  }
  findLast(t, r) {
    return this.findElement({
      isBackward: !0,
      ...t
    }, r);
  }
  findNext(t, r) {
    return this.findElement({
      ...t
    }, r);
  }
  findPrev(t, r) {
    return this.findElement({
      ...t,
      isBackward: !0
    }, r);
  }
  findDefault(t, r) {
    return this.findElement({
      ...t,
      acceptCondition: (o) => this.isFocusable(o, t.includeProgrammaticallyFocusable) && !!this.getProps(o).isDefault
    }, r) || null;
  }
  findAll(t) {
    return this._findElements(!0, t) || [];
  }
  findElement(t, r) {
    const o = this._findElements(!1, t, r);
    return o && o[0];
  }
  _findElements(t, r, o) {
    var n, i, a;
    const {
      container: s,
      currentElement: l = null,
      includeProgrammaticallyFocusable: c,
      useActiveModalizer: u,
      ignoreAccessibility: d,
      modalizerId: f,
      isBackward: h,
      onElement: v
    } = r;
    o || (o = {});
    const p = [];
    let {
      acceptCondition: g
    } = r;
    const b = !!g;
    if (!s)
      return null;
    g || (g = (_) => this.isFocusable(_, c, !1, d));
    const y = {
      container: s,
      modalizerUserId: f === void 0 && u ? (n = this._tabster.modalizer) === null || n === void 0 ? void 0 : n.activeId : f || ((a = (i = ve.getTabsterContext(this._tabster, s)) === null || i === void 0 ? void 0 : i.modalizer) === null || a === void 0 ? void 0 : a.userId),
      from: l || s,
      isBackward: h,
      acceptCondition: g,
      hasCustomCondition: b,
      includeProgrammaticallyFocusable: c,
      ignoreAccessibility: d,
      cachedGrouppers: {}
    }, m = Da(s.ownerDocument, s, (_) => this._acceptElement(_, y));
    if (!m)
      return null;
    const w = (_) => {
      var E, S;
      const C = (E = y.foundElement) !== null && E !== void 0 ? E : y.foundBackward;
      return C && p.push(C), t ? C && (y.found = !1, delete y.foundElement, delete y.foundBackward, delete y.fromCtx, y.from = C, v && !v(C)) ? !1 : !!(C || _) : (C && o && (o.uncontrolled = (S = ve.getTabsterContext(this._tabster, C)) === null || S === void 0 ? void 0 : S.uncontrolled), !!(_ && !C));
    };
    if (l || (o.outOfDOMOrder = !0), l && T.nodeContains(s, l))
      m.currentNode = l;
    else if (h) {
      const _ = wu(s);
      if (!_)
        return null;
      if (this._acceptElement(_, y) === NodeFilter.FILTER_ACCEPT && !w(!0))
        return y.skippedFocusable && (o.outOfDOMOrder = !0), p;
      m.currentNode = _;
    }
    do
      h ? m.previousNode() : m.nextNode();
    while (w());
    return y.skippedFocusable && (o.outOfDOMOrder = !0), p.length ? p : null;
  }
  _acceptElement(t, r) {
    var o, n, i;
    if (r.found)
      return NodeFilter.FILTER_ACCEPT;
    const a = r.foundBackward;
    if (a && (t === a || !T.nodeContains(a, t)))
      return r.found = !0, r.foundElement = a, NodeFilter.FILTER_ACCEPT;
    const s = r.container;
    if (t === s)
      return NodeFilter.FILTER_SKIP;
    if (!T.nodeContains(s, t) || t.__tabsterDummyContainer || T.nodeContains(r.rejectElementsFrom, t))
      return NodeFilter.FILTER_REJECT;
    const l = r.currentCtx = ve.getTabsterContext(this._tabster, t);
    if (!l)
      return NodeFilter.FILTER_SKIP;
    if (_u(t))
      return this.isFocusable(t, void 0, !0, !0) && (r.skippedFocusable = !0), NodeFilter.FILTER_SKIP;
    if (!r.hasCustomCondition && (t.tagName === "IFRAME" || t.tagName === "WEBVIEW"))
      return ((o = l.modalizer) === null || o === void 0 ? void 0 : o.userId) === ((n = this._tabster.modalizer) === null || n === void 0 ? void 0 : n.activeId) ? (r.found = !0, r.rejectElementsFrom = r.foundElement = t, NodeFilter.FILTER_ACCEPT) : NodeFilter.FILTER_REJECT;
    if (!r.ignoreAccessibility && !this.isAccessible(t))
      return this.isFocusable(t, !1, !0, !0) && (r.skippedFocusable = !0), NodeFilter.FILTER_REJECT;
    let c, u = r.fromCtx;
    u || (u = r.fromCtx = ve.getTabsterContext(this._tabster, r.from));
    const d = u == null ? void 0 : u.mover;
    let f = l.groupper, h = l.mover;
    if (c = (i = this._tabster.modalizer) === null || i === void 0 ? void 0 : i.acceptElement(t, r), c !== void 0 && (r.skippedFocusable = !0), c === void 0 && (f || h || d)) {
      const v = f == null ? void 0 : f.getElement(), p = d == null ? void 0 : d.getElement();
      let g = h == null ? void 0 : h.getElement();
      g && T.nodeContains(p, g) && T.nodeContains(s, p) && (!v || !h || T.nodeContains(p, v)) && (h = d, g = p), v && (v === s || !T.nodeContains(s, v)) && (f = void 0), g && !T.nodeContains(s, g) && (h = void 0), f && h && (g && v && !T.nodeContains(v, g) ? h = void 0 : f = void 0), f && (c = f.acceptElement(t, r)), h && (c = h.acceptElement(t, r));
    }
    return c === void 0 && (c = r.acceptCondition(t) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP, c === NodeFilter.FILTER_SKIP && this.isFocusable(t, !1, !0, !0) && (r.skippedFocusable = !0)), c === NodeFilter.FILTER_ACCEPT && !r.found && (r.isBackward ? (r.foundBackward = t, c = NodeFilter.FILTER_SKIP) : (r.found = !0, r.foundElement = t)), c;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const ke = {
  Tab: 9,
  Enter: 13,
  Esc: 27,
  Space: 32,
  PageUp: 33,
  PageDown: 34,
  End: 35,
  Home: 36,
  Left: 37,
  Up: 38,
  Right: 39,
  Down: 40
};
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function bb(e, t) {
  var r;
  const o = e.getParent;
  let n = t;
  do {
    const i = (r = je(e, n)) === null || r === void 0 ? void 0 : r.uncontrolled;
    if (i && e.uncontrolled.isUncontrolledCompletely(n, !!i.completely))
      return n;
    n = o(n);
  } while (n);
}
class xe extends ku {
  constructor(t, r) {
    super(), this._init = () => {
      const o = this._win(), n = o.document;
      n.addEventListener(ft, this._onFocusIn, !0), n.addEventListener(to, this._onFocusOut, !0), o.addEventListener("keydown", this._onKeyDown, !0);
      const i = T.getActiveElement(n);
      i && i !== n.body && this._setFocusedElement(i), this.subscribe(this._onChanged);
    }, this._onFocusIn = (o) => {
      const n = o.composedPath()[0];
      n && this._setFocusedElement(n, o.detail.relatedTarget, o.detail.isFocusedProgrammatically);
    }, this._onFocusOut = (o) => {
      var n;
      this._setFocusedElement(void 0, (n = o.detail) === null || n === void 0 ? void 0 : n.originalEvent.relatedTarget);
    }, this._validateFocusedElement = (o) => {
    }, this._onKeyDown = (o) => {
      if (o.keyCode !== ke.Tab || o.ctrlKey)
        return;
      const n = this.getVal();
      if (!n || !n.ownerDocument || n.contentEditable === "true")
        return;
      const i = this._tabster, a = i.controlTab, s = ve.getTabsterContext(i, n);
      if (!s || s.ignoreKeydown(o))
        return;
      const l = o.shiftKey, c = xe.findNextTabbable(i, s, void 0, n, void 0, l, !0), u = s.root.getElement();
      if (!u)
        return;
      const d = c == null ? void 0 : c.element, f = bb(i, n);
      if (d) {
        const h = c.uncontrolled;
        if (s.uncontrolled || T.nodeContains(h, n)) {
          if (!c.outOfDOMOrder && h === s.uncontrolled || f && !T.nodeContains(f, d))
            return;
          Sr.addPhantomDummyWithTarget(i, n, l, d);
          return;
        }
        if (h || d.tagName === "IFRAME") {
          Lt({
            by: "root",
            owner: u,
            next: d,
            relatedEvent: o
          }) && Sr.moveWithPhantomDummy(this._tabster, h ?? d, !1, l, o);
          return;
        }
        (a || c != null && c.outOfDOMOrder) && Lt({
          by: "root",
          owner: u,
          next: d,
          relatedEvent: o
        }) && (o.preventDefault(), o.stopImmediatePropagation(), xt(d));
      } else
        !f && Lt({
          by: "root",
          owner: u,
          next: null,
          relatedEvent: o
        }) && s.root.moveOutWithDefaultAction(l, o);
    }, this._onChanged = (o, n) => {
      var i, a;
      if (o)
        Et(o, lu, n);
      else {
        const s = (i = this._lastVal) === null || i === void 0 ? void 0 : i.get();
        if (s) {
          const l = {
            ...n
          }, c = ve.getTabsterContext(this._tabster, s), u = (a = c == null ? void 0 : c.modalizer) === null || a === void 0 ? void 0 : a.userId;
          u && (l.modalizerId = u), Et(s, cu, l);
        }
      }
    }, this._tabster = t, this._win = r, t.queueInit(this._init);
  }
  dispose() {
    super.dispose();
    const t = this._win(), r = t.document;
    r.removeEventListener(ft, this._onFocusIn, !0), r.removeEventListener(to, this._onFocusOut, !0), t.removeEventListener("keydown", this._onKeyDown, !0), this.unsubscribe(this._onChanged), delete xe._lastResetElement, delete this._nextVal, delete this._lastVal;
  }
  static forgetMemorized(t, r) {
    var o, n;
    let i = xe._lastResetElement, a = i && i.get();
    a && T.nodeContains(r, a) && delete xe._lastResetElement, a = (n = (o = t._nextVal) === null || o === void 0 ? void 0 : o.element) === null || n === void 0 ? void 0 : n.get(), a && T.nodeContains(r, a) && delete t._nextVal, i = t._lastVal, a = i && i.get(), a && T.nodeContains(r, a) && delete t._lastVal;
  }
  getFocusedElement() {
    return this.getVal();
  }
  getLastFocusedElement() {
    var t;
    let r = (t = this._lastVal) === null || t === void 0 ? void 0 : t.get();
    return (!r || r && !za(r.ownerDocument, r)) && (this._lastVal = r = void 0), r;
  }
  focus(t, r, o) {
    return this._tabster.focusable.isFocusable(t, r, !1, o) ? (t.focus(), !0) : !1;
  }
  focusDefault(t) {
    const r = this._tabster.focusable.findDefault({
      container: t
    });
    return r ? (this._tabster.focusedElement.focus(r), !0) : !1;
  }
  getFirstOrLastTabbable(t, r) {
    var o;
    const {
      container: n,
      ignoreAccessibility: i
    } = r;
    let a;
    if (n) {
      const s = ve.getTabsterContext(this._tabster, n);
      s && (a = (o = xe.findNextTabbable(this._tabster, s, n, void 0, void 0, !t, i)) === null || o === void 0 ? void 0 : o.element);
    }
    return a && !T.nodeContains(n, a) && (a = void 0), a || void 0;
  }
  _focusFirstOrLast(t, r) {
    const o = this.getFirstOrLastTabbable(t, r);
    return o ? (this.focus(o, !1, !0), !0) : !1;
  }
  focusFirst(t) {
    return this._focusFirstOrLast(!0, t);
  }
  focusLast(t) {
    return this._focusFirstOrLast(!1, t);
  }
  resetFocus(t) {
    if (!this._tabster.focusable.isVisible(t))
      return !1;
    if (this._tabster.focusable.isFocusable(t, !0, !0, !0))
      this.focus(t);
    else {
      const r = t.getAttribute("tabindex"), o = t.getAttribute("aria-hidden");
      t.tabIndex = -1, t.setAttribute("aria-hidden", "true"), xe._lastResetElement = new He(this._win, t), this.focus(t, !0, !0), this._setOrRemoveAttribute(t, "tabindex", r), this._setOrRemoveAttribute(t, "aria-hidden", o);
    }
    return !0;
  }
  _setOrRemoveAttribute(t, r, o) {
    o === null ? t.removeAttribute(r) : t.setAttribute(r, o);
  }
  _setFocusedElement(t, r, o) {
    var n, i;
    if (this._tabster._noop)
      return;
    const a = {
      relatedTarget: r
    };
    if (t) {
      const l = (n = xe._lastResetElement) === null || n === void 0 ? void 0 : n.get();
      if (xe._lastResetElement = void 0, l === t || _u(t))
        return;
      a.isFocusedProgrammatically = o;
      const c = ve.getTabsterContext(this._tabster, t), u = (i = c == null ? void 0 : c.modalizer) === null || i === void 0 ? void 0 : i.userId;
      u && (a.modalizerId = u);
    }
    const s = this._nextVal = {
      element: t ? new He(this._win, t) : void 0,
      details: a
    };
    t && t !== this._val && this._validateFocusedElement(t), this._nextVal === s && this.setVal(t, a), this._nextVal = void 0;
  }
  setVal(t, r) {
    super.setVal(t, r), t && (this._lastVal = new He(this._win, t));
  }
  static findNextTabbable(t, r, o, n, i, a, s) {
    const l = o || r.root.getElement();
    if (!l)
      return null;
    let c = null;
    const u = xe._isTabbingTimer, d = t.getWindow();
    u && d.clearTimeout(u), xe.isTabbing = !0, xe._isTabbingTimer = d.setTimeout(() => {
      delete xe._isTabbingTimer, xe.isTabbing = !1;
    }, 0);
    const f = r.modalizer, h = r.groupper, v = r.mover, p = (g) => {
      if (c = g.findNextTabbable(n, i, a, s), n && !(c != null && c.element)) {
        const b = g !== f && T.getParentElement(g.getElement());
        if (b) {
          const y = ve.getTabsterContext(t, n, {
            referenceElement: b
          });
          if (y) {
            const m = g.getElement(), w = a ? m : m && wu(m) || m;
            w && (c = xe.findNextTabbable(t, y, o, w, b, a, s), c && (c.outOfDOMOrder = !0));
          }
        }
      }
    };
    if (h && v)
      p(r.groupperBeforeMover ? h : v);
    else if (h)
      p(h);
    else if (v)
      p(v);
    else if (f)
      p(f);
    else {
      const g = {
        container: l,
        currentElement: n,
        referenceElement: i,
        ignoreAccessibility: s,
        useActiveModalizer: !0
      }, b = {};
      c = {
        element: t.focusable[a ? "findPrev" : "findNext"](g, b),
        outOfDOMOrder: b.outOfDOMOrder,
        uncontrolled: b.uncontrolled
      };
    }
    return c;
  }
}
xe.isTabbing = !1;
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class gb extends Sr {
  constructor(t, r, o, n) {
    super(o, t, Pn.Groupper, n, !0), this._setHandlers((i, a, s) => {
      var l, c;
      const u = t.get(), d = i.input;
      if (u && d) {
        const f = ve.getTabsterContext(o, d);
        if (f) {
          let h;
          h = (l = r.findNextTabbable(s || void 0, void 0, a, !0)) === null || l === void 0 ? void 0 : l.element, h || (h = (c = xe.findNextTabbable(o, f, void 0, i.isOutside ? d : db(u, !a), void 0, a, !0)) === null || c === void 0 ? void 0 : c.element), h && xt(h);
        }
      }
    });
  }
}
class mb extends ho {
  constructor(t, r, o, n, i) {
    super(t, r, n), this._shouldTabInside = !1, this.makeTabbable(!1), this._onDispose = o, t.controlTab || (this.dummyManager = new gb(this._element, this, t, i));
  }
  dispose() {
    var t;
    this._onDispose(this);
    const r = this._element.get();
    (t = this.dummyManager) === null || t === void 0 || t.dispose(), delete this.dummyManager, r && process.env.NODE_ENV === "development" && qs(this._element, !0), delete this._first;
  }
  findNextTabbable(t, r, o, n) {
    var i;
    const a = this.getElement();
    if (!a)
      return null;
    const s = ((i = t == null ? void 0 : t.__tabsterDummyContainer) === null || i === void 0 ? void 0 : i.get()) === a;
    if (!this._shouldTabInside && t && T.nodeContains(a, t) && !s)
      return {
        element: void 0,
        outOfDOMOrder: !0
      };
    const l = this.getFirst(!0);
    if (!t || !T.nodeContains(a, t) || s)
      return {
        element: l,
        outOfDOMOrder: !0
      };
    const c = this._tabster;
    let u = null, d = !1, f;
    if (this._shouldTabInside && l) {
      const h = {
        container: a,
        currentElement: t,
        referenceElement: r,
        ignoreAccessibility: n,
        useActiveModalizer: !0
      }, v = {};
      u = c.focusable[o ? "findPrev" : "findNext"](h, v), d = !!v.outOfDOMOrder, !u && this._props.tabbability === du.LimitedTrapFocus && (u = c.focusable[o ? "findLast" : "findFirst"]({
        container: a,
        ignoreAccessibility: n,
        useActiveModalizer: !0
      }, v), d = !0), f = v.uncontrolled;
    }
    return {
      element: u,
      uncontrolled: f,
      outOfDOMOrder: d
    };
  }
  makeTabbable(t) {
    this._shouldTabInside = t || !this._props.tabbability, process.env.NODE_ENV === "development" && qs(this._element, !this._shouldTabInside);
  }
  isActive(t) {
    var r;
    const o = this.getElement() || null;
    let n = !0;
    for (let a = T.getParentElement(o); a; a = T.getParentElement(a)) {
      const s = (r = je(this._tabster, a)) === null || r === void 0 ? void 0 : r.groupper;
      s && (s._shouldTabInside || (n = !1));
    }
    let i = n ? this._props.tabbability ? this._shouldTabInside : !1 : void 0;
    if (i && t) {
      const a = this._tabster.focusedElement.getFocusedElement();
      a && (i = a !== this.getFirst(!0));
    }
    return i;
  }
  getFirst(t) {
    var r;
    const o = this.getElement();
    let n;
    if (o) {
      if (t && this._tabster.focusable.isFocusable(o))
        return o;
      n = (r = this._first) === null || r === void 0 ? void 0 : r.get(), n || (n = this._tabster.focusable.findFirst({
        container: o,
        useActiveModalizer: !0
      }) || void 0, n && this.setFirst(n));
    }
    return n;
  }
  setFirst(t) {
    t ? this._first = new He(this._tabster.getWindow, t) : delete this._first;
  }
  acceptElement(t, r) {
    const o = r.cachedGrouppers, n = T.getParentElement(this.getElement()), i = n && ve.getTabsterContext(this._tabster, n), a = i == null ? void 0 : i.groupper, s = i != null && i.groupperBeforeMover ? a : void 0;
    let l;
    const c = (f) => {
      let h = o[f.id], v;
      return h ? v = h.isActive : (v = this.isActive(!0), h = o[f.id] = {
        isActive: v
      }), v;
    };
    if (s && (l = s.getElement(), !c(s) && l && r.container !== l && T.nodeContains(r.container, l)))
      return r.skippedFocusable = !0, NodeFilter.FILTER_REJECT;
    const u = c(this), d = this.getElement();
    if (d && u !== !0) {
      if (d === t && a && (l || (l = a.getElement()), l && !c(a) && T.nodeContains(r.container, l) && l !== r.container) || d !== t && T.nodeContains(d, t))
        return r.skippedFocusable = !0, NodeFilter.FILTER_REJECT;
      const f = o[this.id];
      let h;
      if ("first" in f ? h = f.first : h = f.first = this.getFirst(!0), h && r.acceptCondition(h))
        return r.rejectElementsFrom = d, r.skippedFocusable = !0, h !== r.from ? (r.found = !0, r.foundElement = h, NodeFilter.FILTER_ACCEPT) : NodeFilter.FILTER_REJECT;
    }
  }
}
class _b {
  constructor(t, r) {
    this._current = {}, this._grouppers = {}, this._init = () => {
      const o = this._win();
      this._tabster.focusedElement.subscribeFirst(this._onFocus);
      const n = o.document, i = T.getActiveElement(n);
      i && this._onFocus(i), n.addEventListener("mousedown", this._onMouseDown, !0), o.addEventListener("keydown", this._onKeyDown, !0), o.addEventListener($i, this._onMoveFocus);
    }, this._onGroupperDispose = (o) => {
      delete this._grouppers[o.id];
    }, this._onFocus = (o) => {
      o && this._updateCurrent(o, !0, !0);
    }, this._onMouseDown = (o) => {
      o.target && this._updateCurrent(o.target, !0);
    }, this._onKeyDown = (o) => {
      if (o.keyCode !== ke.Enter && o.keyCode !== ke.Esc || o.ctrlKey || o.altKey || o.shiftKey || o.metaKey)
        return;
      const n = this._tabster.focusedElement.getFocusedElement();
      n && this.handleKeyPress(n, o);
    }, this._onMoveFocus = (o) => {
      var n;
      const i = o.composedPath()[0], a = (n = o.detail) === null || n === void 0 ? void 0 : n.action;
      i && a !== void 0 && !o.defaultPrevented && (a === Ui.Enter ? this._enterGroupper(i) : this._escapeGroupper(i), o.stopImmediatePropagation());
    }, this._tabster = t, this._win = r, t.queueInit(this._init);
  }
  dispose() {
    const t = this._win();
    this._handleKeyPressTimer && (t.clearTimeout(this._handleKeyPressTimer), delete this._handleKeyPressTimer), this._current = {}, this._updateTimer && (t.clearTimeout(this._updateTimer), delete this._updateTimer), this._tabster.focusedElement.unsubscribe(this._onFocus), t.document.removeEventListener("mousedown", this._onMouseDown, !0), t.removeEventListener("keydown", this._onKeyDown, !0), t.removeEventListener($i, this._onMoveFocus), Object.keys(this._grouppers).forEach((r) => {
      this._grouppers[r] && (this._grouppers[r].dispose(), delete this._grouppers[r]);
    });
  }
  createGroupper(t, r, o) {
    process.env.NODE_ENV;
    const n = new mb(this._tabster, t, this._onGroupperDispose, r, o);
    this._grouppers[n.id] = n;
    const i = this._tabster.focusedElement.getFocusedElement();
    return i && T.nodeContains(t, i) && !this._updateTimer && (this._updateTimer = this._win().setTimeout(() => {
      delete this._updateTimer, i === this._tabster.focusedElement.getFocusedElement() && this._updateCurrent(i, !0, !0);
    }, 0)), n;
  }
  forgetCurrentGrouppers() {
    this._current = {};
  }
  _updateCurrent(t, r, o) {
    var n;
    this._updateTimer && (this._win().clearTimeout(this._updateTimer), delete this._updateTimer);
    const i = {};
    let a = !0;
    for (let s = t; s; s = T.getParentElement(s)) {
      const l = (n = je(this._tabster, s)) === null || n === void 0 ? void 0 : n.groupper;
      if (l) {
        if (i[l.id] = !0, a && o && s !== t && (a = !1), r || !a) {
          this._current[l.id] = l;
          const c = l.isActive() || t !== s && (!l.getProps().delegated || l.getFirst(!1) !== t);
          l.makeTabbable(c);
        }
        a = !1;
      }
    }
    for (const s of Object.keys(this._current)) {
      const l = this._current[s];
      l.id in i || (l.makeTabbable(!1), l.setFirst(void 0), delete this._current[s]);
    }
  }
  _enterGroupper(t, r) {
    const o = this._tabster, n = ve.getTabsterContext(o, t), i = (n == null ? void 0 : n.groupper) || (n == null ? void 0 : n.modalizerInGroupper), a = i == null ? void 0 : i.getElement();
    if (i && a && (t === a || i.getProps().delegated && t === i.getFirst(!1))) {
      const s = o.focusable.findNext({
        container: a,
        currentElement: t,
        useActiveModalizer: !0
      });
      if (s && (!r || r && Lt({
        by: "groupper",
        owner: a,
        next: s,
        relatedEvent: r
      })))
        return r && (r.preventDefault(), r.stopImmediatePropagation()), s.focus(), s;
    }
    return null;
  }
  _escapeGroupper(t, r, o) {
    var n;
    const i = this._tabster, a = ve.getTabsterContext(i, t), s = a == null ? void 0 : a.modalizerInGroupper;
    let l = (a == null ? void 0 : a.groupper) || s;
    const c = l == null ? void 0 : l.getElement();
    if (l && c && T.nodeContains(c, t)) {
      let u;
      if (t !== c || o)
        u = l.getFirst(!0);
      else {
        const d = T.getParentElement(c), f = d ? ve.getTabsterContext(i, d) : void 0;
        l = f == null ? void 0 : f.groupper, u = l == null ? void 0 : l.getFirst(!0);
      }
      if (u && (!r || r && Lt({
        by: "groupper",
        owner: c,
        next: u,
        relatedEvent: r
      })))
        return l && (l.makeTabbable(!1), s && ((n = i.modalizer) === null || n === void 0 || n.setActive(void 0))), u.focus(), u;
    }
    return null;
  }
  moveFocus(t, r) {
    return r === Ui.Enter ? this._enterGroupper(t) : this._escapeGroupper(t);
  }
  handleKeyPress(t, r, o) {
    const n = this._tabster, i = ve.getTabsterContext(n, t);
    if (i && (i != null && i.groupper || i != null && i.modalizerInGroupper)) {
      const a = this._win();
      if (this._handleKeyPressTimer && (a.clearTimeout(this._handleKeyPressTimer), delete this._handleKeyPressTimer), i.ignoreKeydown(r))
        return;
      if (r.keyCode === ke.Enter)
        this._enterGroupper(t, r);
      else if (r.keyCode === ke.Esc) {
        const s = n.focusedElement.getFocusedElement();
        this._handleKeyPressTimer = a.setTimeout(() => {
          delete this._handleKeyPressTimer, !(s !== n.focusedElement.getFocusedElement() && // A part of Modalizer that has called this handler to escape the active groupper
          // might have been removed from DOM, if the focus is on body, we still want to handle Esc.
          (o && !s || !o)) && this._escapeGroupper(t, r, o);
        }, 0);
      }
    }
  }
}
function qs(e, t) {
  if (process.env.NODE_ENV === "development") {
    const r = e.get();
    r && (t ? r.style.removeProperty("--tabster-groupper") : r.style.setProperty("--tabster-groupper", "unlimited"));
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class yb extends ku {
  constructor(t) {
    super(), this._onChange = (r) => {
      this.setVal(r, void 0);
    }, this._keyborg = Oa(t()), this._keyborg.subscribe(this._onChange);
  }
  dispose() {
    super.dispose(), this._keyborg && (this._keyborg.unsubscribe(this._onChange), Pa(this._keyborg), delete this._keyborg);
  }
  setNavigatingWithKeyboard(t) {
    var r;
    (r = this._keyborg) === null || r === void 0 || r.setVal(t);
  }
  isNavigatingWithKeyboard() {
    var t;
    return !!(!((t = this._keyborg) === null || t === void 0) && t.isNavigatingWithKeyboard());
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
let wb = 0;
const ai = "aria-hidden";
function si(e, t, r, o, n, i) {
  if (process.env.NODE_ENV === "development") {
    const a = e.get();
    a && (t ? a.style.removeProperty("--tabster-modalizer") : a.style.setProperty("--tabster-modalizer", r + "," + o + "," + (n ? "active" : "inactive") + ",," + (i ? `focused(${i})` : "not-focused")));
  }
}
class kb extends Sr {
  constructor(t, r, o) {
    super(r, t, Pn.Modalizer, o), this._setHandlers((n, i) => {
      var a, s, l;
      const c = t.get(), u = c && ((a = ve.getRoot(r, c)) === null || a === void 0 ? void 0 : a.getElement()), d = n.input;
      let f;
      if (u && d) {
        const h = (s = d.__tabsterDummyContainer) === null || s === void 0 ? void 0 : s.get(), v = ve.getTabsterContext(r, h || d);
        v && (f = (l = xe.findNextTabbable(r, v, u, d, void 0, i, !0)) === null || l === void 0 ? void 0 : l.element), f && xt(f);
      }
    });
  }
}
class xb extends ho {
  constructor(t, r, o, n, i, a) {
    super(t, r, n), this._wasFocused = 0, this.userId = n.id, this._onDispose = o, this._activeElements = a, t.controlTab || (this.dummyManager = new kb(this._element, t, i)), process.env.NODE_ENV === "development" && si(this._element, !1, this.id, this.userId, this._isActive, this._wasFocused);
  }
  makeActive(t) {
    if (this._isActive !== t) {
      this._isActive = t;
      const r = this.getElement();
      if (r) {
        const o = this._activeElements, n = o.map((i) => i.get()).indexOf(r);
        t ? n < 0 && o.push(new He(this._tabster.getWindow, r)) : n >= 0 && o.splice(n, 1);
      }
      process.env.NODE_ENV === "development" && si(this._element, !1, this.id, this.userId, this._isActive, this._wasFocused), this.triggerFocusEvent(t ? au : su);
    }
  }
  focused(t) {
    return t || (this._wasFocused = ++wb), this._wasFocused;
  }
  setProps(t) {
    t.id && (this.userId = t.id), this._props = {
      ...t
    };
  }
  dispose() {
    var t;
    this.makeActive(!1), this._onDispose(this), (t = this.dummyManager) === null || t === void 0 || t.dispose(), delete this.dummyManager, this._activeElements = [], this._remove();
  }
  isActive() {
    return !!this._isActive;
  }
  contains(t) {
    return T.nodeContains(this.getElement(), t);
  }
  findNextTabbable(t, r, o, n) {
    var i, a;
    if (!this.getElement())
      return null;
    const l = this._tabster;
    let c = null, u = !1, d;
    const f = t && ((i = ve.getRoot(l, t)) === null || i === void 0 ? void 0 : i.getElement());
    if (f) {
      const h = {
        container: f,
        currentElement: t,
        referenceElement: r,
        ignoreAccessibility: n,
        useActiveModalizer: !0
      }, v = {};
      c = l.focusable[o ? "findPrev" : "findNext"](h, v), !c && this._props.isTrapped && (!((a = l.modalizer) === null || a === void 0) && a.activeId) ? (c = l.focusable[o ? "findLast" : "findFirst"]({
        container: f,
        ignoreAccessibility: n,
        useActiveModalizer: !0
      }, v), u = !0) : u = !!v.outOfDOMOrder, d = v.uncontrolled;
    }
    return {
      element: c,
      uncontrolled: d,
      outOfDOMOrder: u
    };
  }
  triggerFocusEvent(t, r) {
    const o = this.getElement();
    let n = !1;
    if (o) {
      const i = r ? this._activeElements.map((a) => a.get()) : [o];
      for (const a of i)
        a && !Et(a, t, {
          id: this.userId,
          element: o,
          eventName: t
        }) && (n = !0);
    }
    return n;
  }
  _remove() {
    process.env.NODE_ENV === "development" && si(this._element, !0);
  }
}
class Eb {
  constructor(t, r, o) {
    this._onModalizerDispose = (i) => {
      const a = i.id, s = i.userId, l = this._parts[s];
      delete this._modalizers[a], l && (delete l[a], Object.keys(l).length === 0 && (delete this._parts[s], this.activeId === s && this.setActive(void 0)));
    }, this._onKeyDown = (i) => {
      var a;
      if (i.keyCode !== ke.Esc)
        return;
      const s = this._tabster, l = s.focusedElement.getFocusedElement();
      if (l) {
        const c = ve.getTabsterContext(s, l), u = c == null ? void 0 : c.modalizer;
        if (c && !c.groupper && (u != null && u.isActive()) && !c.ignoreKeydown(i)) {
          const d = u.userId;
          if (d) {
            const f = this._parts[d];
            if (f) {
              const h = Object.keys(f).map((v) => {
                var p;
                const g = f[v], b = g.getElement();
                let y;
                return b && (y = (p = je(this._tabster, b)) === null || p === void 0 ? void 0 : p.groupper), g && b && y ? {
                  el: b,
                  focusedSince: g.focused(!0)
                } : {
                  focusedSince: 0
                };
              }).filter((v) => v.focusedSince > 0).sort((v, p) => v.focusedSince > p.focusedSince ? -1 : v.focusedSince < p.focusedSince ? 1 : 0);
              if (h.length) {
                const v = h[0].el;
                v && ((a = s.groupper) === null || a === void 0 || a.handleKeyPress(v, i, !0));
              }
            }
          }
        }
      }
    }, this._onFocus = (i, a) => {
      var s, l;
      const c = i && ve.getTabsterContext(this._tabster, i);
      if (!c || !i)
        return;
      const u = this._augMap;
      for (let f = i; f; f = T.getParentElement(f))
        u.has(f) && (u.delete(f), ii(this._tabster, f, ai));
      const d = c.modalizer;
      if ((l = d || ((s = je(this._tabster, i)) === null || s === void 0 ? void 0 : s.modalizer)) === null || l === void 0 || l.focused(), (d == null ? void 0 : d.userId) === this.activeId) {
        this.currentIsOthersAccessible = d == null ? void 0 : d.getProps().isOthersAccessible;
        return;
      }
      if (a.isFocusedProgrammatically || this.currentIsOthersAccessible || d != null && d.getProps().isAlwaysAccessible)
        this.setActive(d);
      else {
        const f = this._win();
        f.clearTimeout(this._restoreModalizerFocusTimer), this._restoreModalizerFocusTimer = f.setTimeout(() => this._restoreModalizerFocus(i), 100);
      }
    }, this._tabster = t, this._win = t.getWindow, this._modalizers = {}, this._parts = {}, this._augMap = /* @__PURE__ */ new WeakMap(), this._aug = [], this._alwaysAccessibleSelector = r, this._accessibleCheck = o, this.activeElements = [], t.controlTab || t.root.addDummyInputs(), this._win().addEventListener("keydown", this._onKeyDown, !0), t.queueInit(() => {
      this._tabster.focusedElement.subscribe(this._onFocus);
    });
  }
  dispose() {
    const t = this._win();
    t.removeEventListener("keydown", this._onKeyDown, !0), Object.keys(this._modalizers).forEach((r) => {
      this._modalizers[r] && (this._modalizers[r].dispose(), delete this._modalizers[r]);
    }), t.clearTimeout(this._restoreModalizerFocusTimer), t.clearTimeout(this._hiddenUpdateTimer), this._parts = {}, delete this.activeId, this.activeElements = [], this._augMap = /* @__PURE__ */ new WeakMap(), this._aug = [], this._tabster.focusedElement.unsubscribe(this._onFocus);
  }
  createModalizer(t, r, o) {
    var n;
    process.env.NODE_ENV;
    const i = new xb(this._tabster, t, this._onModalizerDispose, r, o, this.activeElements), a = i.id, s = r.id;
    this._modalizers[a] = i;
    let l = this._parts[s];
    return l || (l = this._parts[s] = {}), l[a] = i, T.nodeContains(t, (n = this._tabster.focusedElement.getFocusedElement()) !== null && n !== void 0 ? n : null) && (s !== this.activeId ? this.setActive(i) : i.makeActive(!0)), i;
  }
  isAugmented(t) {
    return this._augMap.has(t);
  }
  hiddenUpdate() {
    this._hiddenUpdateTimer || (this._hiddenUpdateTimer = this._win().setTimeout(() => {
      delete this._hiddenUpdateTimer, this._hiddenUpdate();
    }, 250));
  }
  setActive(t) {
    const r = t == null ? void 0 : t.userId, o = this.activeId;
    if (o !== r) {
      if (this.activeId = r, o) {
        const n = this._parts[o];
        if (n)
          for (const i of Object.keys(n))
            n[i].makeActive(!1);
      }
      if (r) {
        const n = this._parts[r];
        if (n)
          for (const i of Object.keys(n))
            n[i].makeActive(!0);
      }
      this.currentIsOthersAccessible = t == null ? void 0 : t.getProps().isOthersAccessible, this.hiddenUpdate();
    }
  }
  focus(t, r, o) {
    const n = ve.getTabsterContext(this._tabster, t), i = n == null ? void 0 : n.modalizer;
    if (i) {
      this.setActive(i);
      const a = i.getProps(), s = i.getElement();
      if (s) {
        if (r === void 0 && (r = a.isNoFocusFirst), !r && this._tabster.keyboardNavigation.isNavigatingWithKeyboard() && this._tabster.focusedElement.focusFirst({
          container: s
        }) || (o === void 0 && (o = a.isNoFocusDefault), !o && this._tabster.focusedElement.focusDefault(s)))
          return !0;
        this._tabster.focusedElement.resetFocus(s);
      }
    } else
      process.env.NODE_ENV === "development" && console.error("Element is not in Modalizer.", t);
    return !1;
  }
  acceptElement(t, r) {
    var o;
    const n = r.modalizerUserId, i = (o = r.currentCtx) === null || o === void 0 ? void 0 : o.modalizer;
    if (n)
      for (const s of this.activeElements) {
        const l = s.get();
        if (l && (T.nodeContains(t, l) || l === t))
          return NodeFilter.FILTER_SKIP;
      }
    const a = n === (i == null ? void 0 : i.userId) || !n && (i != null && i.getProps().isAlwaysAccessible) ? void 0 : NodeFilter.FILTER_SKIP;
    return a !== void 0 && (r.skippedFocusable = !0), a;
  }
  _hiddenUpdate() {
    var t;
    const r = this._tabster, o = r.getWindow().document.body, n = this.activeId, i = this._parts, a = [], s = [], l = this._alwaysAccessibleSelector, c = l ? Array.from(T.querySelectorAll(o, l)) : [], u = [];
    for (const b of Object.keys(i)) {
      const y = i[b];
      for (const m of Object.keys(y)) {
        const w = y[m], _ = w.getElement(), S = w.getProps().isAlwaysAccessible;
        _ && (b === n ? (u.push(_), this.currentIsOthersAccessible || a.push(_)) : S ? c.push(_) : s.push(_));
      }
    }
    const d = this._augMap, f = a.length > 0 ? [...a, ...c] : void 0, h = [], v = /* @__PURE__ */ new WeakMap(), p = (b, y) => {
      var m;
      const w = b.tagName;
      if (w === "SCRIPT" || w === "STYLE")
        return;
      let _ = !1;
      d.has(b) ? y ? _ = !0 : (d.delete(b), ii(r, b, ai)) : y && !(!((m = this._accessibleCheck) === null || m === void 0) && m.call(this, b, u)) && ii(r, b, ai, "true") && (d.set(b, !0), _ = !0), _ && (h.push(new He(r.getWindow, b)), v.set(b, !0));
    }, g = (b) => {
      for (let y = T.getFirstElementChild(b); y; y = T.getNextElementSibling(y)) {
        let m = !1, w = !1, _ = !1;
        if (f) {
          const E = r.getParent(y);
          for (const S of f) {
            if (y === S) {
              m = !0;
              break;
            }
            if (T.nodeContains(y, S)) {
              w = !0;
              break;
            } else
              T.nodeContains(S, E) && (_ = !0);
          }
          w ? g(y) : !m && !_ && p(y, !0);
        } else
          p(y, !1);
      }
    };
    f || c.forEach((b) => p(b, !1)), s.forEach((b) => p(b, !0)), o && g(o), (t = this._aug) === null || t === void 0 || t.map((b) => b.get()).forEach((b) => {
      b && !v.get(b) && p(b, !1);
    }), this._aug = h, this._augMap = v;
  }
  /**
   * Called when an element is focused outside of an active modalizer.
   * Attempts to pull focus back into the active modalizer
   * @param outsideElement - An element being focused outside of the modalizer
   */
  _restoreModalizerFocus(t) {
    const r = t == null ? void 0 : t.ownerDocument;
    if (!t || !r)
      return;
    const o = ve.getTabsterContext(this._tabster, t), n = o == null ? void 0 : o.modalizer, i = this.activeId;
    if (!n && !i || n && i === n.userId)
      return;
    const a = o == null ? void 0 : o.root.getElement();
    if (a) {
      let s = this._tabster.focusable.findFirst({
        container: a,
        useActiveModalizer: !0
      });
      if (s) {
        if (t.compareDocumentPosition(s) & document.DOCUMENT_POSITION_PRECEDING && (s = this._tabster.focusable.findLast({
          container: a,
          useActiveModalizer: !0
        }), !s))
          throw new Error("Something went wrong.");
        this._tabster.focusedElement.focus(s);
        return;
      }
    }
    t.blur();
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const Sb = /* @__PURE__ */ ["input", "textarea", "*[contenteditable]"].join(", ");
class Bb extends Sr {
  constructor(t, r, o, n) {
    super(r, t, Pn.Mover, n), this._onFocusDummyInput = (i) => {
      var a, s;
      const l = this._element.get(), c = i.input;
      if (l && c) {
        const u = ve.getTabsterContext(this._tabster, l);
        let d;
        u && (d = (a = xe.findNextTabbable(this._tabster, u, void 0, c, void 0, !i.isFirst, !0)) === null || a === void 0 ? void 0 : a.element);
        const f = (s = this._getMemorized()) === null || s === void 0 ? void 0 : s.get();
        f && (d = f), d && xt(d);
      }
    }, this._tabster = r, this._getMemorized = o, this._setHandlers(this._onFocusDummyInput);
  }
}
const li = 1, Ls = 2, Vs = 3;
class Tb extends ho {
  constructor(t, r, o, n, i) {
    var a;
    super(t, r, n), this._visible = {}, this._onIntersection = (l) => {
      for (const c of l) {
        const u = c.target, d = Ho(this._win, u);
        let f, h = this._fullyVisible;
        if (c.intersectionRatio >= 0.25 ? (f = c.intersectionRatio >= 0.75 ? Bt.Visible : Bt.PartiallyVisible, f === Bt.Visible && (h = d)) : f = Bt.Invisible, this._visible[d] !== f) {
          f === void 0 ? (delete this._visible[d], h === d && delete this._fullyVisible) : (this._visible[d] = f, this._fullyVisible = h);
          const v = this.getState(u);
          v && Et(u, Vi, v);
        }
      }
    }, this._win = t.getWindow, this.visibilityTolerance = (a = n.visibilityTolerance) !== null && a !== void 0 ? a : 0.8, (this._props.trackState || this._props.visibilityAware) && (this._intersectionObserver = new IntersectionObserver(this._onIntersection, {
      threshold: [0, 0.25, 0.5, 0.75, 1]
    }), this._observeState()), this._onDispose = o;
    const s = () => n.memorizeCurrent ? this._current : void 0;
    t.controlTab || (this.dummyManager = new Bb(this._element, t, s, i));
  }
  dispose() {
    var t;
    this._onDispose(this), this._intersectionObserver && (this._intersectionObserver.disconnect(), delete this._intersectionObserver), delete this._current, delete this._fullyVisible, delete this._allElements, delete this._updateQueue, this._unobserve && (this._unobserve(), delete this._unobserve);
    const r = this._win();
    this._setCurrentTimer && (r.clearTimeout(this._setCurrentTimer), delete this._setCurrentTimer), this._updateTimer && (r.clearTimeout(this._updateTimer), delete this._updateTimer), (t = this.dummyManager) === null || t === void 0 || t.dispose(), delete this.dummyManager;
  }
  setCurrent(t) {
    t ? this._current = new He(this._win, t) : this._current = void 0, (this._props.trackState || this._props.visibilityAware) && !this._setCurrentTimer && (this._setCurrentTimer = this._win().setTimeout(() => {
      var r;
      delete this._setCurrentTimer;
      const o = [];
      this._current !== this._prevCurrent && (o.push(this._current), o.push(this._prevCurrent), this._prevCurrent = this._current);
      for (const n of o) {
        const i = n == null ? void 0 : n.get();
        if (i && ((r = this._allElements) === null || r === void 0 ? void 0 : r.get(i)) === this) {
          const a = this._props;
          if (i && (a.visibilityAware !== void 0 || a.trackState)) {
            const s = this.getState(i);
            s && Et(i, Vi, s);
          }
        }
      }
    }));
  }
  getCurrent() {
    var t;
    return ((t = this._current) === null || t === void 0 ? void 0 : t.get()) || null;
  }
  findNextTabbable(t, r, o, n) {
    var i;
    const a = this.getElement(), s = a && ((i = t == null ? void 0 : t.__tabsterDummyContainer) === null || i === void 0 ? void 0 : i.get()) === a;
    if (!a)
      return null;
    let l = null, c = !1, u;
    if (this._props.tabbable || s || t && !T.nodeContains(a, t)) {
      const d = {
        currentElement: t,
        referenceElement: r,
        container: a,
        ignoreAccessibility: n,
        useActiveModalizer: !0
      }, f = {};
      l = this._tabster.focusable[o ? "findPrev" : "findNext"](d, f), c = !!f.outOfDOMOrder, u = f.uncontrolled;
    }
    return {
      element: l,
      uncontrolled: u,
      outOfDOMOrder: c
    };
  }
  acceptElement(t, r) {
    var o, n, i;
    if (!xe.isTabbing)
      return !((o = r.currentCtx) === null || o === void 0) && o.excludedFromMover ? NodeFilter.FILTER_REJECT : void 0;
    const {
      memorizeCurrent: a,
      visibilityAware: s,
      hasDefault: l = !0
    } = this._props, c = this.getElement();
    if (c && (a || s || l) && (!T.nodeContains(c, r.from) || ((n = r.from.__tabsterDummyContainer) === null || n === void 0 ? void 0 : n.get()) === c)) {
      let u;
      if (a) {
        const d = (i = this._current) === null || i === void 0 ? void 0 : i.get();
        d && r.acceptCondition(d) && (u = d);
      }
      if (!u && l && (u = this._tabster.focusable.findDefault({
        container: c,
        useActiveModalizer: !0
      })), !u && s && (u = this._tabster.focusable.findElement({
        container: c,
        useActiveModalizer: !0,
        isBackward: r.isBackward,
        acceptCondition: (d) => {
          var f;
          const h = Ho(this._win, d), v = this._visible[h];
          return c !== d && !!(!((f = this._allElements) === null || f === void 0) && f.get(d)) && r.acceptCondition(d) && (v === Bt.Visible || v === Bt.PartiallyVisible && (s === Bt.PartiallyVisible || !this._fullyVisible));
        }
      })), u)
        return r.found = !0, r.foundElement = u, r.rejectElementsFrom = c, r.skippedFocusable = !0, NodeFilter.FILTER_ACCEPT;
    }
  }
  _observeState() {
    const t = this.getElement();
    if (this._unobserve || !t || typeof MutationObserver > "u")
      return;
    const r = this._win(), o = this._allElements = /* @__PURE__ */ new WeakMap(), n = this._tabster.focusable;
    let i = this._updateQueue = [];
    const a = T.createMutationObserver((h) => {
      for (const v of h) {
        const p = v.target, g = v.removedNodes, b = v.addedNodes;
        if (v.type === "attributes")
          v.attributeName === "tabindex" && i.push({
            element: p,
            type: Ls
          });
        else {
          for (let y = 0; y < g.length; y++)
            i.push({
              element: g[y],
              type: Vs
            });
          for (let y = 0; y < b.length; y++)
            i.push({
              element: b[y],
              type: li
            });
        }
      }
      d();
    }), s = (h, v) => {
      var p, g;
      const b = o.get(h);
      b && v && ((p = this._intersectionObserver) === null || p === void 0 || p.unobserve(h), o.delete(h)), !b && !v && (o.set(h, this), (g = this._intersectionObserver) === null || g === void 0 || g.observe(h));
    }, l = (h) => {
      const v = n.isFocusable(h);
      o.get(h) ? v || s(h, !0) : v && s(h);
    }, c = (h) => {
      const {
        mover: v
      } = f(h);
      if (v && v !== this)
        if (v.getElement() === h && n.isFocusable(h))
          s(h);
        else
          return;
      const p = Da(r.document, h, (g) => {
        const {
          mover: b,
          groupper: y
        } = f(g);
        if (b && b !== this)
          return NodeFilter.FILTER_REJECT;
        const m = y == null ? void 0 : y.getFirst(!0);
        return y && y.getElement() !== g && m && m !== g ? NodeFilter.FILTER_REJECT : (n.isFocusable(g) && s(g), NodeFilter.FILTER_SKIP);
      });
      if (p)
        for (p.currentNode = h; p.nextNode(); )
          ;
    }, u = (h) => {
      o.get(h) && s(h, !0);
      for (let p = T.getFirstElementChild(h); p; p = T.getNextElementSibling(p))
        u(p);
    }, d = () => {
      !this._updateTimer && i.length && (this._updateTimer = r.setTimeout(() => {
        delete this._updateTimer;
        for (const {
          element: h,
          type: v
        } of i)
          switch (v) {
            case Ls:
              l(h);
              break;
            case li:
              c(h);
              break;
            case Vs:
              u(h);
              break;
          }
        i = this._updateQueue = [];
      }, 0));
    }, f = (h) => {
      const v = {};
      for (let p = h; p; p = T.getParentElement(p)) {
        const g = je(this._tabster, p);
        if (g && (g.groupper && !v.groupper && (v.groupper = g.groupper), g.mover)) {
          v.mover = g.mover;
          break;
        }
      }
      return v;
    };
    i.push({
      element: t,
      type: li
    }), d(), a.observe(t, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["tabindex"]
    }), this._unobserve = () => {
      a.disconnect();
    };
  }
  getState(t) {
    const r = Ho(this._win, t);
    if (r in this._visible) {
      const o = this._visible[r] || Bt.Invisible;
      return {
        isCurrent: this._current ? this._current.get() === t : void 0,
        visibility: o
      };
    }
  }
}
function Nb(e, t, r, o, n, i, a, s) {
  const l = r < n ? n - r : a < e ? e - a : 0, c = o < i ? i - o : s < t ? t - s : 0;
  return l === 0 ? c : c === 0 ? l : Math.sqrt(l * l + c * c);
}
class Ob {
  constructor(t, r) {
    this._init = () => {
      const o = this._win();
      o.addEventListener("keydown", this._onKeyDown, !0), o.addEventListener(Hi, this._onMoveFocus), o.addEventListener(Wi, this._onMemorizedElement), this._tabster.focusedElement.subscribe(this._onFocus);
    }, this._onMoverDispose = (o) => {
      delete this._movers[o.id];
    }, this._onFocus = (o) => {
      var n;
      let i = o, a = o;
      for (let s = T.getParentElement(o); s; s = T.getParentElement(s)) {
        const l = (n = je(this._tabster, s)) === null || n === void 0 ? void 0 : n.mover;
        l && (l.setCurrent(a), i = void 0), !i && this._tabster.focusable.isFocusable(s) && (i = a = s);
      }
    }, this._onKeyDown = async (o) => {
      var n;
      if (this._ignoredInputTimer && (this._win().clearTimeout(this._ignoredInputTimer), delete this._ignoredInputTimer), (n = this._ignoredInputResolve) === null || n === void 0 || n.call(this, !1), o.ctrlKey || o.altKey || o.shiftKey || o.metaKey)
        return;
      const i = o.keyCode;
      let a;
      if (i === ke.Down ? a = we.ArrowDown : i === ke.Right ? a = we.ArrowRight : i === ke.Up ? a = we.ArrowUp : i === ke.Left ? a = we.ArrowLeft : i === ke.PageDown ? a = we.PageDown : i === ke.PageUp ? a = we.PageUp : i === ke.Home ? a = we.Home : i === ke.End && (a = we.End), !a)
        return;
      const s = this._tabster.focusedElement.getFocusedElement();
      !s || await this._isIgnoredInput(s, i) || this._moveFocus(s, a, o);
    }, this._onMoveFocus = (o) => {
      var n;
      const i = o.composedPath()[0], a = (n = o.detail) === null || n === void 0 ? void 0 : n.key;
      i && a !== void 0 && !o.defaultPrevented && (this._moveFocus(i, a), o.stopImmediatePropagation());
    }, this._onMemorizedElement = (o) => {
      var n;
      const i = o.composedPath()[0];
      let a = (n = o.detail) === null || n === void 0 ? void 0 : n.memorizedElement;
      if (i) {
        const s = ve.getTabsterContext(this._tabster, i), l = s == null ? void 0 : s.mover;
        l && (a && !T.nodeContains(l.getElement(), a) && (a = void 0), l.setCurrent(a), o.stopImmediatePropagation());
      }
    }, this._tabster = t, this._win = r, this._movers = {}, t.queueInit(this._init);
  }
  dispose() {
    var t;
    const r = this._win();
    this._tabster.focusedElement.unsubscribe(this._onFocus), (t = this._ignoredInputResolve) === null || t === void 0 || t.call(this, !1), this._ignoredInputTimer && (r.clearTimeout(this._ignoredInputTimer), delete this._ignoredInputTimer), r.removeEventListener("keydown", this._onKeyDown, !0), r.removeEventListener(Hi, this._onMoveFocus), r.removeEventListener(Wi, this._onMemorizedElement), Object.keys(this._movers).forEach((o) => {
      this._movers[o] && (this._movers[o].dispose(), delete this._movers[o]);
    });
  }
  createMover(t, r, o) {
    process.env.NODE_ENV;
    const n = new Tb(this._tabster, t, this._onMoverDispose, r, o);
    return this._movers[n.id] = n, n;
  }
  moveFocus(t, r) {
    return this._moveFocus(t, r);
  }
  _moveFocus(t, r, o) {
    var n, i;
    const a = this._tabster, s = ve.getTabsterContext(a, t, {
      checkRtl: !0
    });
    if (!s || !s.mover || s.excludedFromMover || o && s.ignoreKeydown(o))
      return null;
    const l = s.mover, c = l.getElement();
    if (s.groupperBeforeMover) {
      const C = s.groupper;
      if (C && !C.isActive(!0)) {
        for (let I = T.getParentElement(C.getElement()); I && I !== c; I = T.getParentElement(I))
          if (!((i = (n = je(a, I)) === null || n === void 0 ? void 0 : n.groupper) === null || i === void 0) && i.isActive(!0))
            return null;
      } else
        return null;
    }
    if (!c)
      return null;
    const u = a.focusable, d = l.getProps(), f = d.direction || Xt.Both, h = f === Xt.Both, v = h || f === Xt.Vertical, p = h || f === Xt.Horizontal, g = f === Xt.GridLinear, b = g || f === Xt.Grid, y = d.cyclic;
    let m, w, _, E = 0, S = 0;
    if (b && (_ = t.getBoundingClientRect(), E = Math.ceil(_.left), S = Math.floor(_.right)), s.rtl && (r === we.ArrowRight ? r = we.ArrowLeft : r === we.ArrowLeft && (r = we.ArrowRight)), r === we.ArrowDown && v || r === we.ArrowRight && (p || b))
      if (m = u.findNext({
        currentElement: t,
        container: c,
        useActiveModalizer: !0
      }), m && b) {
        const C = Math.ceil(m.getBoundingClientRect().left);
        !g && S > C && (m = void 0);
      } else
        !m && y && (m = u.findFirst({
          container: c,
          useActiveModalizer: !0
        }));
    else if (r === we.ArrowUp && v || r === we.ArrowLeft && (p || b))
      if (m = u.findPrev({
        currentElement: t,
        container: c,
        useActiveModalizer: !0
      }), m && b) {
        const C = Math.floor(m.getBoundingClientRect().right);
        !g && C > E && (m = void 0);
      } else
        !m && y && (m = u.findLast({
          container: c,
          useActiveModalizer: !0
        }));
    else if (r === we.Home)
      b ? u.findElement({
        container: c,
        currentElement: t,
        useActiveModalizer: !0,
        isBackward: !0,
        acceptCondition: (C) => {
          var I;
          if (!u.isFocusable(C))
            return !1;
          const H = Math.ceil((I = C.getBoundingClientRect().left) !== null && I !== void 0 ? I : 0);
          return C !== t && E <= H ? !0 : (m = C, !1);
        }
      }) : m = u.findFirst({
        container: c,
        useActiveModalizer: !0
      });
    else if (r === we.End)
      b ? u.findElement({
        container: c,
        currentElement: t,
        useActiveModalizer: !0,
        acceptCondition: (C) => {
          var I;
          if (!u.isFocusable(C))
            return !1;
          const H = Math.ceil((I = C.getBoundingClientRect().left) !== null && I !== void 0 ? I : 0);
          return C !== t && E >= H ? !0 : (m = C, !1);
        }
      }) : m = u.findLast({
        container: c,
        useActiveModalizer: !0
      });
    else if (r === we.PageUp) {
      if (u.findElement({
        currentElement: t,
        container: c,
        useActiveModalizer: !0,
        isBackward: !0,
        acceptCondition: (C) => u.isFocusable(C) ? Fs(this._win, C, l.visibilityTolerance) ? (m = C, !1) : !0 : !1
      }), b && m) {
        const C = Math.ceil(m.getBoundingClientRect().left);
        u.findElement({
          currentElement: m,
          container: c,
          useActiveModalizer: !0,
          acceptCondition: (I) => {
            if (!u.isFocusable(I))
              return !1;
            const H = Math.ceil(I.getBoundingClientRect().left);
            return E < H || C >= H ? !0 : (m = I, !1);
          }
        });
      }
      w = !1;
    } else if (r === we.PageDown) {
      if (u.findElement({
        currentElement: t,
        container: c,
        useActiveModalizer: !0,
        acceptCondition: (C) => u.isFocusable(C) ? Fs(this._win, C, l.visibilityTolerance) ? (m = C, !1) : !0 : !1
      }), b && m) {
        const C = Math.ceil(m.getBoundingClientRect().left);
        u.findElement({
          currentElement: m,
          container: c,
          useActiveModalizer: !0,
          isBackward: !0,
          acceptCondition: (I) => {
            if (!u.isFocusable(I))
              return !1;
            const H = Math.ceil(I.getBoundingClientRect().left);
            return E > H || C <= H ? !0 : (m = I, !1);
          }
        });
      }
      w = !0;
    } else if (b) {
      const C = r === we.ArrowUp, I = E, H = Math.ceil(_.top), se = S, Be = Math.floor(_.bottom);
      let R, ee, Ce = 0;
      u.findAll({
        container: c,
        currentElement: t,
        isBackward: C,
        onElement: (ue) => {
          const be = ue.getBoundingClientRect(), D = Math.ceil(be.left), L = Math.ceil(be.top), x = Math.floor(be.right), P = Math.floor(be.bottom);
          if (C && H < P || !C && Be > L)
            return !0;
          const M = Math.ceil(Math.min(se, x)) - Math.floor(Math.max(I, D)), V = Math.ceil(Math.min(se - I, x - D));
          if (M > 0 && V >= M) {
            const q = M / V;
            q > Ce && (R = ue, Ce = q);
          } else if (Ce === 0) {
            const q = Nb(I, H, se, Be, D, L, x, P);
            (ee === void 0 || q < ee) && (ee = q, R = ue);
          } else if (Ce > 0)
            return !1;
          return !0;
        }
      }), m = R;
    }
    return m && (!o || o && Lt({
      by: "mover",
      owner: c,
      next: m,
      relatedEvent: o
    })) ? (w !== void 0 && ob(this._win, m, w), o && (o.preventDefault(), o.stopImmediatePropagation()), xt(m), m) : null;
  }
  async _isIgnoredInput(t, r) {
    if (t.getAttribute("aria-expanded") === "true" && t.hasAttribute("aria-activedescendant"))
      return !0;
    if (yu(t, Sb)) {
      let o = 0, n = 0, i = 0, a;
      if (t.tagName === "INPUT" || t.tagName === "TEXTAREA") {
        const s = t.type;
        if (i = (t.value || "").length, s === "email" || s === "number") {
          if (i) {
            const c = T.getSelection(t);
            if (c) {
              const u = c.toString().length, d = r === ke.Left || r === ke.Up;
              if (c.modify("extend", d ? "backward" : "forward", "character"), u !== c.toString().length)
                return c.modify("extend", d ? "forward" : "backward", "character"), !0;
              i = 0;
            }
          }
        } else {
          const c = t.selectionStart;
          if (c === null)
            return s === "hidden";
          o = c || 0, n = t.selectionEnd || 0;
        }
      } else
        t.contentEditable === "true" && (a = new (ab(this._win))((s) => {
          this._ignoredInputResolve = (h) => {
            delete this._ignoredInputResolve, s(h);
          };
          const l = this._win();
          this._ignoredInputTimer && l.clearTimeout(this._ignoredInputTimer);
          const {
            anchorNode: c,
            focusNode: u,
            anchorOffset: d,
            focusOffset: f
          } = T.getSelection(t) || {};
          this._ignoredInputTimer = l.setTimeout(() => {
            var h, v, p;
            delete this._ignoredInputTimer;
            const {
              anchorNode: g,
              focusNode: b,
              anchorOffset: y,
              focusOffset: m
            } = T.getSelection(t) || {};
            if (g !== c || b !== u || y !== d || m !== f) {
              (h = this._ignoredInputResolve) === null || h === void 0 || h.call(this, !1);
              return;
            }
            if (o = y || 0, n = m || 0, i = ((v = t.textContent) === null || v === void 0 ? void 0 : v.length) || 0, g && b && T.nodeContains(t, g) && T.nodeContains(t, b) && g !== t) {
              let w = !1;
              const _ = (E) => {
                if (E === g)
                  w = !0;
                else if (E === b)
                  return !0;
                const S = E.textContent;
                if (S && !T.getFirstChild(E)) {
                  const I = S.length;
                  w ? b !== g && (n += I) : (o += I, n += I);
                }
                let C = !1;
                for (let I = T.getFirstChild(E); I && !C; I = I.nextSibling)
                  C = _(I);
                return C;
              };
              _(t);
            }
            (p = this._ignoredInputResolve) === null || p === void 0 || p.call(this, !0);
          }, 0);
        }));
      if (a && !await a || o !== n || o > 0 && (r === ke.Left || r === ke.Up || r === ke.Home) || o < i && (r === ke.Right || r === ke.Down || r === ke.End))
        return !0;
    }
    return !1;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function Pb(e, t, r, o) {
  if (typeof MutationObserver > "u")
    return () => {
    };
  const n = t.getWindow;
  let i;
  const a = (u) => {
    var d, f, h, v, p;
    for (const g of u) {
      const b = g.target, y = g.removedNodes, m = g.addedNodes;
      if (g.type === "attributes")
        g.attributeName === Ct && r(t, b);
      else {
        for (let w = 0; w < y.length; w++)
          s(y[w], !0), (f = (d = t._dummyObserver).domChanged) === null || f === void 0 || f.call(d, b);
        for (let w = 0; w < m.length; w++)
          s(m[w]), (v = (h = t._dummyObserver).domChanged) === null || v === void 0 || v.call(h, b);
      }
    }
    (p = t.modalizer) === null || p === void 0 || p.hiddenUpdate();
  };
  function s(u, d) {
    i || (i = At(n).elementByUId), l(u, d);
    const f = Da(e, u, (h) => l(h, d));
    if (f)
      for (; f.nextNode(); )
        ;
  }
  function l(u, d) {
    var f;
    if (!u.getAttribute)
      return NodeFilter.FILTER_SKIP;
    const h = u.__tabsterElementUID;
    return h && i && (d ? delete i[h] : (f = i[h]) !== null && f !== void 0 || (i[h] = new He(n, u))), (je(t, u) || u.hasAttribute(Ct)) && r(t, u, d), NodeFilter.FILTER_SKIP;
  }
  const c = T.createMutationObserver(a);
  return o && s(n().document.body), c.observe(e, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: [Ct]
  }), () => {
    c.disconnect();
  };
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class Cb {
  constructor(t) {
    this._isUncontrolledCompletely = t;
  }
  isUncontrolledCompletely(t, r) {
    var o;
    const n = (o = this._isUncontrolledCompletely) === null || o === void 0 ? void 0 : o.call(this, t, r);
    return n === void 0 ? r : n;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const an = "restorer:restorefocus", Rb = 10;
class Db extends ho {
  constructor(t, r, o) {
    var n;
    if (super(t, r, o), this._hasFocus = !1, this._onFocusOut = (i) => {
      var a;
      const s = (a = this._element) === null || a === void 0 ? void 0 : a.get();
      s && i.relatedTarget === null && Et(s, an), s && !T.nodeContains(s, i.relatedTarget) && (this._hasFocus = !1);
    }, this._onFocusIn = () => {
      this._hasFocus = !0;
    }, this._props.type === ro.Source) {
      const i = (n = this._element) === null || n === void 0 ? void 0 : n.get();
      i == null || i.addEventListener("focusout", this._onFocusOut), i == null || i.addEventListener("focusin", this._onFocusIn), this._hasFocus = T.nodeContains(i, i && T.getActiveElement(i.ownerDocument));
    }
  }
  dispose() {
    var t;
    if (this._props.type === ro.Source) {
      const r = (t = this._element) === null || t === void 0 ? void 0 : t.get();
      if (r == null || r.removeEventListener("focusout", this._onFocusOut), r == null || r.removeEventListener("focusin", this._onFocusIn), this._hasFocus) {
        const o = this._tabster.getWindow().document;
        Et(o.body, an);
      }
    }
  }
}
class zb {
  constructor(t) {
    this._history = [], this._restoreFocusTimeout = 0, this._onRestoreFocus = (r) => {
      const o = this._getWindow();
      this._restoreFocusTimeout && (o.clearTimeout(this._restoreFocusTimeout), this._restoreFocusTimeout = 0);
      const n = r.composedPath()[0];
      n && (this._restoreFocusTimeout = o.setTimeout(() => this._restoreFocus(n)));
    }, this._onFocusIn = (r) => {
      var o;
      if (!r)
        return;
      const n = je(this._tabster, r);
      ((o = n == null ? void 0 : n.restorer) === null || o === void 0 ? void 0 : o.getProps().type) === ro.Target && this._addToHistory(r);
    }, this._restoreFocus = (r) => {
      var o;
      const n = this._getWindow().document;
      if (T.getActiveElement(n) !== n.body || // clicking on any empty space focuses body - this is can be a false positive
      !this._keyboardNavState.isNavigatingWithKeyboard() && // Source no longer exists on DOM - always restore focus
      T.nodeContains(n.body, r))
        return;
      let i = this._history.pop();
      for (; i && !T.nodeContains(n.body, T.getParentElement(i.get())); )
        i = this._history.pop();
      (o = i == null ? void 0 : i.get()) === null || o === void 0 || o.focus();
    }, this._tabster = t, this._getWindow = t.getWindow, this._getWindow().addEventListener(an, this._onRestoreFocus), this._keyboardNavState = t.keyboardNavigation, this._focusedElementState = t.focusedElement, this._focusedElementState.subscribe(this._onFocusIn);
  }
  dispose() {
    const t = this._getWindow();
    this._focusedElementState.unsubscribe(this._onFocusIn), t.removeEventListener(an, this._onRestoreFocus), this._restoreFocusTimeout && t.clearTimeout(this._restoreFocusTimeout);
  }
  _addToHistory(t) {
    var r;
    ((r = this._history[this._history.length - 1]) === null || r === void 0 ? void 0 : r.get()) !== t && (this._history.length > Rb && this._history.shift(), this._history.push(new He(this._getWindow, t)));
  }
  createRestorer(t, r) {
    const o = new Db(this._tabster, t, r);
    return r.type === ro.Target && T.getActiveElement(t.ownerDocument) === t && this._addToHistory(t), o;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class Ab {
  constructor(t) {
    this.keyboardNavigation = t.keyboardNavigation, this.focusedElement = t.focusedElement, this.focusable = t.focusable, this.root = t.root, this.uncontrolled = t.uncontrolled, this.core = t;
  }
}
class Fb {
  constructor(t, r) {
    var o, n;
    this._forgetMemorizedElements = [], this._wrappers = /* @__PURE__ */ new Set(), this._initQueue = [], this._version = "6.1.0", this._noop = !1, this.getWindow = () => {
      if (!this._win)
        throw new Error("Using disposed Tabster.");
      return this._win;
    }, this._storage = eb(t), this._win = t;
    const i = this.getWindow;
    r != null && r.DOMAPI && Jp({
      ...r.DOMAPI
    }), this.keyboardNavigation = new yb(i), this.focusedElement = new xe(this, i), this.focusable = new pb(this), this.root = new ve(this, r == null ? void 0 : r.autoRoot), this.uncontrolled = new Cb(
      // TODO: Remove checkUncontrolledTrappingFocus in the next major version.
      (r == null ? void 0 : r.checkUncontrolledCompletely) || (r == null ? void 0 : r.checkUncontrolledTrappingFocus)
    ), this.controlTab = (o = r == null ? void 0 : r.controlTab) !== null && o !== void 0 ? o : !0, this.rootDummyInputs = !!(r != null && r.rootDummyInputs), this._dummyObserver = new cb(i), this.getParent = (n = r == null ? void 0 : r.getParent) !== null && n !== void 0 ? n : T.getParentNode, this.internal = {
      stopObserver: () => {
        this._unobserve && (this._unobserve(), delete this._unobserve);
      },
      resumeObserver: (a) => {
        if (!this._unobserve) {
          const s = i().document;
          this._unobserve = Pb(s, this, vu, a);
        }
      }
    }, bu(i), this.queueInit(() => {
      this.internal.resumeObserver(!0);
    });
  }
  /**
   * Merges external props with the current props. Not all
   * props can/should be mergeable, so let's add more as we move on.
   * @param props Tabster props
   */
  _mergeProps(t) {
    var r;
    t && (this.getParent = (r = t.getParent) !== null && r !== void 0 ? r : this.getParent);
  }
  createTabster(t, r) {
    const o = new Ab(this);
    return t || this._wrappers.add(o), this._mergeProps(r), o;
  }
  disposeTabster(t, r) {
    r ? this._wrappers.clear() : this._wrappers.delete(t), this._wrappers.size === 0 && this.dispose();
  }
  dispose() {
    var t, r, o, n, i, a, s, l;
    this.internal.stopObserver();
    const c = this._win;
    c == null || c.clearTimeout(this._initTimer), delete this._initTimer, this._initQueue = [], this._forgetMemorizedElements = [], c && this._forgetMemorizedTimer && (c.clearTimeout(this._forgetMemorizedTimer), delete this._forgetMemorizedTimer), (t = this.outline) === null || t === void 0 || t.dispose(), (r = this.crossOrigin) === null || r === void 0 || r.dispose(), (o = this.deloser) === null || o === void 0 || o.dispose(), (n = this.groupper) === null || n === void 0 || n.dispose(), (i = this.mover) === null || i === void 0 || i.dispose(), (a = this.modalizer) === null || a === void 0 || a.dispose(), (s = this.observedElement) === null || s === void 0 || s.dispose(), (l = this.restorer) === null || l === void 0 || l.dispose(), this.keyboardNavigation.dispose(), this.focusable.dispose(), this.focusedElement.dispose(), this.root.dispose(), this._dummyObserver.dispose(), rb(this.getWindow), js(this.getWindow), this._storage = /* @__PURE__ */ new WeakMap(), this._wrappers.clear(), c && (Zp(c), delete c.__tabsterInstance, delete this._win);
  }
  storageEntry(t, r) {
    const o = this._storage;
    let n = o.get(t);
    return n ? r === !1 && Object.keys(n).length === 0 && o.delete(t) : r === !0 && (n = {}, o.set(t, n)), n;
  }
  forceCleanup() {
    this._win && (this._forgetMemorizedElements.push(this._win.document.body), !this._forgetMemorizedTimer && (this._forgetMemorizedTimer = this._win.setTimeout(() => {
      delete this._forgetMemorizedTimer;
      for (let t = this._forgetMemorizedElements.shift(); t; t = this._forgetMemorizedElements.shift())
        js(this.getWindow, t), xe.forgetMemorized(this.focusedElement, t);
    }, 0), pu(this.getWindow, !0)));
  }
  queueInit(t) {
    var r;
    this._win && (this._initQueue.push(t), this._initTimer || (this._initTimer = (r = this._win) === null || r === void 0 ? void 0 : r.setTimeout(() => {
      delete this._initTimer, this.drainInitQueue();
    }, 0)));
  }
  drainInitQueue() {
    if (!this._win)
      return;
    const t = this._initQueue;
    this._initQueue = [], t.forEach((r) => r());
  }
}
function jb(e, t) {
  let r = Vb(e);
  return r ? r.createTabster(!1, t) : (r = new Fb(e, t), e.__tabsterInstance = r, r.createTabster());
}
function Ib(e) {
  const t = e.core;
  return t.groupper || (t.groupper = new _b(t, t.getWindow)), t.groupper;
}
function Mb(e) {
  const t = e.core;
  return t.mover || (t.mover = new Ob(t, t.getWindow)), t.mover;
}
function qb(e, t, r) {
  const o = e.core;
  return o.modalizer || (o.modalizer = new Eb(o, t, r)), o.modalizer;
}
function xu(e) {
  const t = e.core;
  return t.restorer || (t.restorer = new zb(t)), t.restorer;
}
function Lb(e, t) {
  e.core.disposeTabster(e, t);
}
function Vb(e) {
  return e.__tabsterInstance;
}
const Pr = () => {
  const { targetDocument: e } = dr(), t = (e == null ? void 0 : e.defaultView) || void 0, r = t == null ? void 0 : t.__tabsterShadowDOMAPI, o = k.useMemo(() => t ? jb(t, {
    autoRoot: {},
    controlTab: !1,
    getParent: Jh,
    checkUncontrolledTrappingFocus: (n) => {
      var i;
      return !!(!((i = n.firstElementChild) === null || i === void 0) && i.hasAttribute("data-is-focus-trap-zone-bumper"));
    },
    DOMAPI: r
  }) : null, [
    t,
    r
  ]);
  return vo(() => () => {
    o && Lb(o);
  }, [
    o
  ]), o;
}, sn = (e) => {
  Pr();
  const t = Aa(e, !0);
  return k.useMemo(() => ({
    [Je.TabsterAttributeName]: t
  }), [
    t
  ]);
}, Hb = (e = {}) => {
  const {
    circular: t,
    axis: r,
    memorizeCurrent: o = !0,
    tabbable: n,
    ignoreDefaultKeydown: i,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_hasDefault: a
  } = e, s = Pr();
  return s && Mb(s), sn({
    mover: {
      cyclic: !!t,
      direction: $b(r ?? "vertical"),
      memorizeCurrent: o,
      tabbable: n,
      hasDefault: a
    },
    ...i && {
      focusable: {
        ignoreKeydown: i
      }
    }
  });
};
function $b(e) {
  switch (e) {
    case "horizontal":
      return Je.MoverDirections.Horizontal;
    case "grid":
      return Je.MoverDirections.Grid;
    case "grid-linear":
      return Je.MoverDirections.GridLinear;
    case "both":
      return Je.MoverDirections.Both;
    case "vertical":
    default:
      return Je.MoverDirections.Vertical;
  }
}
const Eu = (e) => {
  const t = Pr();
  return t && Ib(t), sn({
    groupper: {
      tabbability: Wb(e == null ? void 0 : e.tabBehavior)
    },
    focusable: {
      ignoreKeydown: e == null ? void 0 : e.ignoreDefaultKeydown
    }
  });
}, Wb = (e) => {
  switch (e) {
    case "unlimited":
      return Je.GroupperTabbabilities.Unlimited;
    case "limited":
      return Je.GroupperTabbabilities.Limited;
    case "limited-trap-focus":
      return Je.GroupperTabbabilities.LimitedTrapFocus;
    default:
      return;
  }
}, Su = () => {
  const e = Pr(), { targetDocument: t } = dr(), r = k.useCallback((s, l) => (e == null ? void 0 : e.focusable.findAll({
    container: s,
    acceptCondition: l
  })) || [], [
    e
  ]), o = k.useCallback((s) => e == null ? void 0 : e.focusable.findFirst({
    container: s
  }), [
    e
  ]), n = k.useCallback((s) => e == null ? void 0 : e.focusable.findLast({
    container: s
  }), [
    e
  ]), i = k.useCallback((s, l = {}) => {
    if (!e || !t)
      return null;
    const { container: c = t.body } = l;
    return e.focusable.findNext({
      currentElement: s,
      container: c
    });
  }, [
    e,
    t
  ]), a = k.useCallback((s, l = {}) => {
    if (!e || !t)
      return null;
    const { container: c = t.body } = l;
    return e.focusable.findPrev({
      currentElement: s,
      container: c
    });
  }, [
    e,
    t
  ]);
  return {
    findAllFocusable: r,
    findFirstFocusable: o,
    findLastFocusable: n,
    findNextFocusable: i,
    findPrevFocusable: a
  };
}, Hs = "data-fui-focus-visible", Bu = "data-fui-focus-within";
function Ub(e, t) {
  if (Tu(e))
    return () => {
    };
  const r = {
    current: void 0
  }, o = Oa(t);
  function n(l) {
    o.isNavigatingWithKeyboard() && Mi(l) && (r.current = l, l.setAttribute(Hs, ""));
  }
  function i() {
    r.current && (r.current.removeAttribute(Hs), r.current = void 0);
  }
  o.subscribe((l) => {
    l || i();
  });
  const a = (l) => {
    i();
    const c = l.composedPath()[0];
    n(c);
  }, s = (l) => {
    (!l.relatedTarget || Mi(l.relatedTarget) && !e.contains(l.relatedTarget)) && i();
  };
  return e.addEventListener(ft, a), e.addEventListener("focusout", s), e.focusVisible = !0, e.contains(t.document.activeElement) && n(t.document.activeElement), () => {
    i(), e.removeEventListener(ft, a), e.removeEventListener("focusout", s), delete e.focusVisible, Pa(o);
  };
}
function Tu(e) {
  return e ? e.focusVisible ? !0 : Tu(e == null ? void 0 : e.parentElement) : !1;
}
function Nu(e = {}) {
  const t = dr(), r = k.useRef(null);
  var o;
  const n = (o = e.targetDocument) !== null && o !== void 0 ? o : t.targetDocument;
  return k.useEffect(() => {
    if (n != null && n.defaultView && r.current)
      return Ub(r.current, n.defaultView);
  }, [
    r,
    n
  ]), r;
}
function Gb(e, t) {
  const r = Oa(t);
  r.subscribe((i) => {
    i || $s(e);
  });
  const o = (i) => {
    r.isNavigatingWithKeyboard() && Ws(i.target) && Kb(e);
  }, n = (i) => {
    (!i.relatedTarget || Ws(i.relatedTarget) && !e.contains(i.relatedTarget)) && $s(e);
  };
  return e.addEventListener(ft, o), e.addEventListener("focusout", n), () => {
    e.removeEventListener(ft, o), e.removeEventListener("focusout", n), Pa(r);
  };
}
function Kb(e) {
  e.setAttribute(Bu, "");
}
function $s(e) {
  e.removeAttribute(Bu);
}
function Ws(e) {
  return e ? !!(e && typeof e == "object" && "classList" in e && "contains" in e) : !1;
}
function Fa() {
  const { targetDocument: e } = dr(), t = k.useRef(null);
  return k.useEffect(() => {
    if (e != null && e.defaultView && t.current)
      return Gb(t.current, e.defaultView);
  }, [
    t,
    e
  ]), t;
}
const Ou = (e = {}) => {
  const { trapFocus: t, alwaysFocusable: r, legacyTrapFocus: o } = e, n = Pr();
  n && (qb(n), xu(n));
  const i = Ta("modal-", e.id), a = sn({
    restorer: {
      type: Je.RestorerTypes.Source
    },
    ...t && {
      modalizer: {
        id: i,
        isOthersAccessible: !t,
        isAlwaysAccessible: r,
        isTrapped: o && t
      }
    }
  }), s = sn({
    restorer: {
      type: Je.RestorerTypes.Target
    }
  });
  return {
    modalAttributes: a,
    triggerAttributes: s
  };
};
function Xb() {
  const e = Pr();
  return e && xu(e), Aa({
    restorer: {
      type: Je.RestorerTypes.Target
    }
  });
}
const Yb = {
  // Color tokens
  colorNeutralForeground1: "var(--colorNeutralForeground1)",
  colorNeutralForeground1Hover: "var(--colorNeutralForeground1Hover)",
  colorNeutralForeground1Pressed: "var(--colorNeutralForeground1Pressed)",
  colorNeutralForeground1Selected: "var(--colorNeutralForeground1Selected)",
  colorNeutralForeground2: "var(--colorNeutralForeground2)",
  colorNeutralForeground2Hover: "var(--colorNeutralForeground2Hover)",
  colorNeutralForeground2Pressed: "var(--colorNeutralForeground2Pressed)",
  colorNeutralForeground2Selected: "var(--colorNeutralForeground2Selected)",
  colorNeutralForeground2BrandHover: "var(--colorNeutralForeground2BrandHover)",
  colorNeutralForeground2BrandPressed: "var(--colorNeutralForeground2BrandPressed)",
  colorNeutralForeground2BrandSelected: "var(--colorNeutralForeground2BrandSelected)",
  colorNeutralForeground3: "var(--colorNeutralForeground3)",
  colorNeutralForeground3Hover: "var(--colorNeutralForeground3Hover)",
  colorNeutralForeground3Pressed: "var(--colorNeutralForeground3Pressed)",
  colorNeutralForeground3Selected: "var(--colorNeutralForeground3Selected)",
  colorNeutralForeground3BrandHover: "var(--colorNeutralForeground3BrandHover)",
  colorNeutralForeground3BrandPressed: "var(--colorNeutralForeground3BrandPressed)",
  colorNeutralForeground3BrandSelected: "var(--colorNeutralForeground3BrandSelected)",
  colorNeutralForeground4: "var(--colorNeutralForeground4)",
  colorNeutralForegroundDisabled: "var(--colorNeutralForegroundDisabled)",
  colorBrandForegroundLink: "var(--colorBrandForegroundLink)",
  colorBrandForegroundLinkHover: "var(--colorBrandForegroundLinkHover)",
  colorBrandForegroundLinkPressed: "var(--colorBrandForegroundLinkPressed)",
  colorBrandForegroundLinkSelected: "var(--colorBrandForegroundLinkSelected)",
  colorNeutralForeground2Link: "var(--colorNeutralForeground2Link)",
  colorNeutralForeground2LinkHover: "var(--colorNeutralForeground2LinkHover)",
  colorNeutralForeground2LinkPressed: "var(--colorNeutralForeground2LinkPressed)",
  colorNeutralForeground2LinkSelected: "var(--colorNeutralForeground2LinkSelected)",
  colorCompoundBrandForeground1: "var(--colorCompoundBrandForeground1)",
  colorCompoundBrandForeground1Hover: "var(--colorCompoundBrandForeground1Hover)",
  colorCompoundBrandForeground1Pressed: "var(--colorCompoundBrandForeground1Pressed)",
  colorNeutralForegroundOnBrand: "var(--colorNeutralForegroundOnBrand)",
  colorNeutralForegroundInverted: "var(--colorNeutralForegroundInverted)",
  colorNeutralForegroundInvertedHover: "var(--colorNeutralForegroundInvertedHover)",
  colorNeutralForegroundInvertedPressed: "var(--colorNeutralForegroundInvertedPressed)",
  colorNeutralForegroundInvertedSelected: "var(--colorNeutralForegroundInvertedSelected)",
  colorNeutralForegroundInverted2: "var(--colorNeutralForegroundInverted2)",
  colorNeutralForegroundStaticInverted: "var(--colorNeutralForegroundStaticInverted)",
  colorNeutralForegroundInvertedLink: "var(--colorNeutralForegroundInvertedLink)",
  colorNeutralForegroundInvertedLinkHover: "var(--colorNeutralForegroundInvertedLinkHover)",
  colorNeutralForegroundInvertedLinkPressed: "var(--colorNeutralForegroundInvertedLinkPressed)",
  colorNeutralForegroundInvertedLinkSelected: "var(--colorNeutralForegroundInvertedLinkSelected)",
  colorNeutralForegroundInvertedDisabled: "var(--colorNeutralForegroundInvertedDisabled)",
  colorBrandForeground1: "var(--colorBrandForeground1)",
  colorBrandForeground2: "var(--colorBrandForeground2)",
  colorBrandForeground2Hover: "var(--colorBrandForeground2Hover)",
  colorBrandForeground2Pressed: "var(--colorBrandForeground2Pressed)",
  colorNeutralForeground1Static: "var(--colorNeutralForeground1Static)",
  colorBrandForegroundInverted: "var(--colorBrandForegroundInverted)",
  colorBrandForegroundInvertedHover: "var(--colorBrandForegroundInvertedHover)",
  colorBrandForegroundInvertedPressed: "var(--colorBrandForegroundInvertedPressed)",
  colorBrandForegroundOnLight: "var(--colorBrandForegroundOnLight)",
  colorBrandForegroundOnLightHover: "var(--colorBrandForegroundOnLightHover)",
  colorBrandForegroundOnLightPressed: "var(--colorBrandForegroundOnLightPressed)",
  colorBrandForegroundOnLightSelected: "var(--colorBrandForegroundOnLightSelected)",
  colorNeutralBackground1: "var(--colorNeutralBackground1)",
  colorNeutralBackground1Hover: "var(--colorNeutralBackground1Hover)",
  colorNeutralBackground1Pressed: "var(--colorNeutralBackground1Pressed)",
  colorNeutralBackground1Selected: "var(--colorNeutralBackground1Selected)",
  colorNeutralBackground2: "var(--colorNeutralBackground2)",
  colorNeutralBackground2Hover: "var(--colorNeutralBackground2Hover)",
  colorNeutralBackground2Pressed: "var(--colorNeutralBackground2Pressed)",
  colorNeutralBackground2Selected: "var(--colorNeutralBackground2Selected)",
  colorNeutralBackground3: "var(--colorNeutralBackground3)",
  colorNeutralBackground3Hover: "var(--colorNeutralBackground3Hover)",
  colorNeutralBackground3Pressed: "var(--colorNeutralBackground3Pressed)",
  colorNeutralBackground3Selected: "var(--colorNeutralBackground3Selected)",
  colorNeutralBackground4: "var(--colorNeutralBackground4)",
  colorNeutralBackground4Hover: "var(--colorNeutralBackground4Hover)",
  colorNeutralBackground4Pressed: "var(--colorNeutralBackground4Pressed)",
  colorNeutralBackground4Selected: "var(--colorNeutralBackground4Selected)",
  colorNeutralBackground5: "var(--colorNeutralBackground5)",
  colorNeutralBackground5Hover: "var(--colorNeutralBackground5Hover)",
  colorNeutralBackground5Pressed: "var(--colorNeutralBackground5Pressed)",
  colorNeutralBackground5Selected: "var(--colorNeutralBackground5Selected)",
  colorNeutralBackground6: "var(--colorNeutralBackground6)",
  colorNeutralBackgroundInverted: "var(--colorNeutralBackgroundInverted)",
  colorNeutralBackgroundStatic: "var(--colorNeutralBackgroundStatic)",
  colorNeutralBackgroundAlpha: "var(--colorNeutralBackgroundAlpha)",
  colorNeutralBackgroundAlpha2: "var(--colorNeutralBackgroundAlpha2)",
  colorSubtleBackground: "var(--colorSubtleBackground)",
  colorSubtleBackgroundHover: "var(--colorSubtleBackgroundHover)",
  colorSubtleBackgroundPressed: "var(--colorSubtleBackgroundPressed)",
  colorSubtleBackgroundSelected: "var(--colorSubtleBackgroundSelected)",
  colorSubtleBackgroundLightAlphaHover: "var(--colorSubtleBackgroundLightAlphaHover)",
  colorSubtleBackgroundLightAlphaPressed: "var(--colorSubtleBackgroundLightAlphaPressed)",
  colorSubtleBackgroundLightAlphaSelected: "var(--colorSubtleBackgroundLightAlphaSelected)",
  colorSubtleBackgroundInverted: "var(--colorSubtleBackgroundInverted)",
  colorSubtleBackgroundInvertedHover: "var(--colorSubtleBackgroundInvertedHover)",
  colorSubtleBackgroundInvertedPressed: "var(--colorSubtleBackgroundInvertedPressed)",
  colorSubtleBackgroundInvertedSelected: "var(--colorSubtleBackgroundInvertedSelected)",
  colorTransparentBackground: "var(--colorTransparentBackground)",
  colorTransparentBackgroundHover: "var(--colorTransparentBackgroundHover)",
  colorTransparentBackgroundPressed: "var(--colorTransparentBackgroundPressed)",
  colorTransparentBackgroundSelected: "var(--colorTransparentBackgroundSelected)",
  colorNeutralBackgroundDisabled: "var(--colorNeutralBackgroundDisabled)",
  colorNeutralBackgroundInvertedDisabled: "var(--colorNeutralBackgroundInvertedDisabled)",
  colorNeutralStencil1: "var(--colorNeutralStencil1)",
  colorNeutralStencil2: "var(--colorNeutralStencil2)",
  colorNeutralStencil1Alpha: "var(--colorNeutralStencil1Alpha)",
  colorNeutralStencil2Alpha: "var(--colorNeutralStencil2Alpha)",
  colorBackgroundOverlay: "var(--colorBackgroundOverlay)",
  colorScrollbarOverlay: "var(--colorScrollbarOverlay)",
  colorBrandBackground: "var(--colorBrandBackground)",
  colorBrandBackgroundHover: "var(--colorBrandBackgroundHover)",
  colorBrandBackgroundPressed: "var(--colorBrandBackgroundPressed)",
  colorBrandBackgroundSelected: "var(--colorBrandBackgroundSelected)",
  colorCompoundBrandBackground: "var(--colorCompoundBrandBackground)",
  colorCompoundBrandBackgroundHover: "var(--colorCompoundBrandBackgroundHover)",
  colorCompoundBrandBackgroundPressed: "var(--colorCompoundBrandBackgroundPressed)",
  colorBrandBackgroundStatic: "var(--colorBrandBackgroundStatic)",
  colorBrandBackground2: "var(--colorBrandBackground2)",
  colorBrandBackground2Hover: "var(--colorBrandBackground2Hover)",
  colorBrandBackground2Pressed: "var(--colorBrandBackground2Pressed)",
  colorBrandBackground3Static: "var(--colorBrandBackground3Static)",
  colorBrandBackground4Static: "var(--colorBrandBackground4Static)",
  colorBrandBackgroundInverted: "var(--colorBrandBackgroundInverted)",
  colorBrandBackgroundInvertedHover: "var(--colorBrandBackgroundInvertedHover)",
  colorBrandBackgroundInvertedPressed: "var(--colorBrandBackgroundInvertedPressed)",
  colorBrandBackgroundInvertedSelected: "var(--colorBrandBackgroundInvertedSelected)",
  colorNeutralCardBackground: "var(--colorNeutralCardBackground)",
  colorNeutralCardBackgroundHover: "var(--colorNeutralCardBackgroundHover)",
  colorNeutralCardBackgroundPressed: "var(--colorNeutralCardBackgroundPressed)",
  colorNeutralCardBackgroundSelected: "var(--colorNeutralCardBackgroundSelected)",
  colorNeutralCardBackgroundDisabled: "var(--colorNeutralCardBackgroundDisabled)",
  colorNeutralStrokeAccessible: "var(--colorNeutralStrokeAccessible)",
  colorNeutralStrokeAccessibleHover: "var(--colorNeutralStrokeAccessibleHover)",
  colorNeutralStrokeAccessiblePressed: "var(--colorNeutralStrokeAccessiblePressed)",
  colorNeutralStrokeAccessibleSelected: "var(--colorNeutralStrokeAccessibleSelected)",
  colorNeutralStroke1: "var(--colorNeutralStroke1)",
  colorNeutralStroke1Hover: "var(--colorNeutralStroke1Hover)",
  colorNeutralStroke1Pressed: "var(--colorNeutralStroke1Pressed)",
  colorNeutralStroke1Selected: "var(--colorNeutralStroke1Selected)",
  colorNeutralStroke2: "var(--colorNeutralStroke2)",
  colorNeutralStroke3: "var(--colorNeutralStroke3)",
  colorNeutralStrokeSubtle: "var(--colorNeutralStrokeSubtle)",
  colorNeutralStrokeOnBrand: "var(--colorNeutralStrokeOnBrand)",
  colorNeutralStrokeOnBrand2: "var(--colorNeutralStrokeOnBrand2)",
  colorNeutralStrokeOnBrand2Hover: "var(--colorNeutralStrokeOnBrand2Hover)",
  colorNeutralStrokeOnBrand2Pressed: "var(--colorNeutralStrokeOnBrand2Pressed)",
  colorNeutralStrokeOnBrand2Selected: "var(--colorNeutralStrokeOnBrand2Selected)",
  colorBrandStroke1: "var(--colorBrandStroke1)",
  colorBrandStroke2: "var(--colorBrandStroke2)",
  colorBrandStroke2Hover: "var(--colorBrandStroke2Hover)",
  colorBrandStroke2Pressed: "var(--colorBrandStroke2Pressed)",
  colorBrandStroke2Contrast: "var(--colorBrandStroke2Contrast)",
  colorCompoundBrandStroke: "var(--colorCompoundBrandStroke)",
  colorCompoundBrandStrokeHover: "var(--colorCompoundBrandStrokeHover)",
  colorCompoundBrandStrokePressed: "var(--colorCompoundBrandStrokePressed)",
  colorNeutralStrokeDisabled: "var(--colorNeutralStrokeDisabled)",
  colorNeutralStrokeInvertedDisabled: "var(--colorNeutralStrokeInvertedDisabled)",
  colorTransparentStroke: "var(--colorTransparentStroke)",
  colorTransparentStrokeInteractive: "var(--colorTransparentStrokeInteractive)",
  colorTransparentStrokeDisabled: "var(--colorTransparentStrokeDisabled)",
  colorNeutralStrokeAlpha: "var(--colorNeutralStrokeAlpha)",
  colorNeutralStrokeAlpha2: "var(--colorNeutralStrokeAlpha2)",
  colorStrokeFocus1: "var(--colorStrokeFocus1)",
  colorStrokeFocus2: "var(--colorStrokeFocus2)",
  colorNeutralShadowAmbient: "var(--colorNeutralShadowAmbient)",
  colorNeutralShadowKey: "var(--colorNeutralShadowKey)",
  colorNeutralShadowAmbientLighter: "var(--colorNeutralShadowAmbientLighter)",
  colorNeutralShadowKeyLighter: "var(--colorNeutralShadowKeyLighter)",
  colorNeutralShadowAmbientDarker: "var(--colorNeutralShadowAmbientDarker)",
  colorNeutralShadowKeyDarker: "var(--colorNeutralShadowKeyDarker)",
  colorBrandShadowAmbient: "var(--colorBrandShadowAmbient)",
  colorBrandShadowKey: "var(--colorBrandShadowKey)",
  // Color palette tokens
  // Color palette red tokens
  colorPaletteRedBackground1: "var(--colorPaletteRedBackground1)",
  colorPaletteRedBackground2: "var(--colorPaletteRedBackground2)",
  colorPaletteRedBackground3: "var(--colorPaletteRedBackground3)",
  colorPaletteRedBorderActive: "var(--colorPaletteRedBorderActive)",
  colorPaletteRedBorder1: "var(--colorPaletteRedBorder1)",
  colorPaletteRedBorder2: "var(--colorPaletteRedBorder2)",
  colorPaletteRedForeground1: "var(--colorPaletteRedForeground1)",
  colorPaletteRedForeground2: "var(--colorPaletteRedForeground2)",
  colorPaletteRedForeground3: "var(--colorPaletteRedForeground3)",
  colorPaletteRedForegroundInverted: "var(--colorPaletteRedForegroundInverted)",
  // Color palette green tokens
  colorPaletteGreenBackground1: "var(--colorPaletteGreenBackground1)",
  colorPaletteGreenBackground2: "var(--colorPaletteGreenBackground2)",
  colorPaletteGreenBackground3: "var(--colorPaletteGreenBackground3)",
  colorPaletteGreenBorderActive: "var(--colorPaletteGreenBorderActive)",
  colorPaletteGreenBorder1: "var(--colorPaletteGreenBorder1)",
  colorPaletteGreenBorder2: "var(--colorPaletteGreenBorder2)",
  colorPaletteGreenForeground1: "var(--colorPaletteGreenForeground1)",
  colorPaletteGreenForeground2: "var(--colorPaletteGreenForeground2)",
  colorPaletteGreenForeground3: "var(--colorPaletteGreenForeground3)",
  colorPaletteGreenForegroundInverted: "var(--colorPaletteGreenForegroundInverted)",
  // Color palette dark orange tokens
  colorPaletteDarkOrangeBackground1: "var(--colorPaletteDarkOrangeBackground1)",
  colorPaletteDarkOrangeBackground2: "var(--colorPaletteDarkOrangeBackground2)",
  colorPaletteDarkOrangeBackground3: "var(--colorPaletteDarkOrangeBackground3)",
  colorPaletteDarkOrangeBorderActive: "var(--colorPaletteDarkOrangeBorderActive)",
  colorPaletteDarkOrangeBorder1: "var(--colorPaletteDarkOrangeBorder1)",
  colorPaletteDarkOrangeBorder2: "var(--colorPaletteDarkOrangeBorder2)",
  colorPaletteDarkOrangeForeground1: "var(--colorPaletteDarkOrangeForeground1)",
  colorPaletteDarkOrangeForeground2: "var(--colorPaletteDarkOrangeForeground2)",
  colorPaletteDarkOrangeForeground3: "var(--colorPaletteDarkOrangeForeground3)",
  // Color palette yellow tokens
  colorPaletteYellowBackground1: "var(--colorPaletteYellowBackground1)",
  colorPaletteYellowBackground2: "var(--colorPaletteYellowBackground2)",
  colorPaletteYellowBackground3: "var(--colorPaletteYellowBackground3)",
  colorPaletteYellowBorderActive: "var(--colorPaletteYellowBorderActive)",
  colorPaletteYellowBorder1: "var(--colorPaletteYellowBorder1)",
  colorPaletteYellowBorder2: "var(--colorPaletteYellowBorder2)",
  colorPaletteYellowForeground1: "var(--colorPaletteYellowForeground1)",
  colorPaletteYellowForeground2: "var(--colorPaletteYellowForeground2)",
  colorPaletteYellowForeground3: "var(--colorPaletteYellowForeground3)",
  colorPaletteYellowForegroundInverted: "var(--colorPaletteYellowForegroundInverted)",
  // Color palette berry tokens
  colorPaletteBerryBackground1: "var(--colorPaletteBerryBackground1)",
  colorPaletteBerryBackground2: "var(--colorPaletteBerryBackground2)",
  colorPaletteBerryBackground3: "var(--colorPaletteBerryBackground3)",
  colorPaletteBerryBorderActive: "var(--colorPaletteBerryBorderActive)",
  colorPaletteBerryBorder1: "var(--colorPaletteBerryBorder1)",
  colorPaletteBerryBorder2: "var(--colorPaletteBerryBorder2)",
  colorPaletteBerryForeground1: "var(--colorPaletteBerryForeground1)",
  colorPaletteBerryForeground2: "var(--colorPaletteBerryForeground2)",
  colorPaletteBerryForeground3: "var(--colorPaletteBerryForeground3)",
  // Color palette marigold tokens
  colorPaletteMarigoldBackground1: "var(--colorPaletteMarigoldBackground1)",
  colorPaletteMarigoldBackground2: "var(--colorPaletteMarigoldBackground2)",
  colorPaletteMarigoldBackground3: "var(--colorPaletteMarigoldBackground3)",
  colorPaletteMarigoldBorderActive: "var(--colorPaletteMarigoldBorderActive)",
  colorPaletteMarigoldBorder1: "var(--colorPaletteMarigoldBorder1)",
  colorPaletteMarigoldBorder2: "var(--colorPaletteMarigoldBorder2)",
  colorPaletteMarigoldForeground1: "var(--colorPaletteMarigoldForeground1)",
  colorPaletteMarigoldForeground2: "var(--colorPaletteMarigoldForeground2)",
  colorPaletteMarigoldForeground3: "var(--colorPaletteMarigoldForeground3)",
  // Color palette light green tokens
  colorPaletteLightGreenBackground1: "var(--colorPaletteLightGreenBackground1)",
  colorPaletteLightGreenBackground2: "var(--colorPaletteLightGreenBackground2)",
  colorPaletteLightGreenBackground3: "var(--colorPaletteLightGreenBackground3)",
  colorPaletteLightGreenBorderActive: "var(--colorPaletteLightGreenBorderActive)",
  colorPaletteLightGreenBorder1: "var(--colorPaletteLightGreenBorder1)",
  colorPaletteLightGreenBorder2: "var(--colorPaletteLightGreenBorder2)",
  colorPaletteLightGreenForeground1: "var(--colorPaletteLightGreenForeground1)",
  colorPaletteLightGreenForeground2: "var(--colorPaletteLightGreenForeground2)",
  colorPaletteLightGreenForeground3: "var(--colorPaletteLightGreenForeground3)",
  // Color palette anchor tokens
  colorPaletteAnchorBackground2: "var(--colorPaletteAnchorBackground2)",
  colorPaletteAnchorBorderActive: "var(--colorPaletteAnchorBorderActive)",
  colorPaletteAnchorForeground2: "var(--colorPaletteAnchorForeground2)",
  // Color palette beige tokens
  colorPaletteBeigeBackground2: "var(--colorPaletteBeigeBackground2)",
  colorPaletteBeigeBorderActive: "var(--colorPaletteBeigeBorderActive)",
  colorPaletteBeigeForeground2: "var(--colorPaletteBeigeForeground2)",
  // Color palette blue tokens
  colorPaletteBlueBackground2: "var(--colorPaletteBlueBackground2)",
  colorPaletteBlueBorderActive: "var(--colorPaletteBlueBorderActive)",
  colorPaletteBlueForeground2: "var(--colorPaletteBlueForeground2)",
  // Color palette brass tokens
  colorPaletteBrassBackground2: "var(--colorPaletteBrassBackground2)",
  colorPaletteBrassBorderActive: "var(--colorPaletteBrassBorderActive)",
  colorPaletteBrassForeground2: "var(--colorPaletteBrassForeground2)",
  // Color palette brown tokens
  colorPaletteBrownBackground2: "var(--colorPaletteBrownBackground2)",
  colorPaletteBrownBorderActive: "var(--colorPaletteBrownBorderActive)",
  colorPaletteBrownForeground2: "var(--colorPaletteBrownForeground2)",
  // Color palette cornflower tokens
  colorPaletteCornflowerBackground2: "var(--colorPaletteCornflowerBackground2)",
  colorPaletteCornflowerBorderActive: "var(--colorPaletteCornflowerBorderActive)",
  colorPaletteCornflowerForeground2: "var(--colorPaletteCornflowerForeground2)",
  // Color palette cranberry tokens
  colorPaletteCranberryBackground2: "var(--colorPaletteCranberryBackground2)",
  colorPaletteCranberryBorderActive: "var(--colorPaletteCranberryBorderActive)",
  colorPaletteCranberryForeground2: "var(--colorPaletteCranberryForeground2)",
  // Color palette dark green tokens
  colorPaletteDarkGreenBackground2: "var(--colorPaletteDarkGreenBackground2)",
  colorPaletteDarkGreenBorderActive: "var(--colorPaletteDarkGreenBorderActive)",
  colorPaletteDarkGreenForeground2: "var(--colorPaletteDarkGreenForeground2)",
  // Color palette dark red tokens
  colorPaletteDarkRedBackground2: "var(--colorPaletteDarkRedBackground2)",
  colorPaletteDarkRedBorderActive: "var(--colorPaletteDarkRedBorderActive)",
  colorPaletteDarkRedForeground2: "var(--colorPaletteDarkRedForeground2)",
  // Color palette forest tokens
  colorPaletteForestBackground2: "var(--colorPaletteForestBackground2)",
  colorPaletteForestBorderActive: "var(--colorPaletteForestBorderActive)",
  colorPaletteForestForeground2: "var(--colorPaletteForestForeground2)",
  // Color palette gold tokens
  colorPaletteGoldBackground2: "var(--colorPaletteGoldBackground2)",
  colorPaletteGoldBorderActive: "var(--colorPaletteGoldBorderActive)",
  colorPaletteGoldForeground2: "var(--colorPaletteGoldForeground2)",
  // Color palette grape tokens
  colorPaletteGrapeBackground2: "var(--colorPaletteGrapeBackground2)",
  colorPaletteGrapeBorderActive: "var(--colorPaletteGrapeBorderActive)",
  colorPaletteGrapeForeground2: "var(--colorPaletteGrapeForeground2)",
  // Color palette lavender tokens
  colorPaletteLavenderBackground2: "var(--colorPaletteLavenderBackground2)",
  colorPaletteLavenderBorderActive: "var(--colorPaletteLavenderBorderActive)",
  colorPaletteLavenderForeground2: "var(--colorPaletteLavenderForeground2)",
  // Color palette light teal tokens
  colorPaletteLightTealBackground2: "var(--colorPaletteLightTealBackground2)",
  colorPaletteLightTealBorderActive: "var(--colorPaletteLightTealBorderActive)",
  colorPaletteLightTealForeground2: "var(--colorPaletteLightTealForeground2)",
  // Color palette lilac tokens
  colorPaletteLilacBackground2: "var(--colorPaletteLilacBackground2)",
  colorPaletteLilacBorderActive: "var(--colorPaletteLilacBorderActive)",
  colorPaletteLilacForeground2: "var(--colorPaletteLilacForeground2)",
  // Color palette magenta tokens
  colorPaletteMagentaBackground2: "var(--colorPaletteMagentaBackground2)",
  colorPaletteMagentaBorderActive: "var(--colorPaletteMagentaBorderActive)",
  colorPaletteMagentaForeground2: "var(--colorPaletteMagentaForeground2)",
  // Color palette mink tokens
  colorPaletteMinkBackground2: "var(--colorPaletteMinkBackground2)",
  colorPaletteMinkBorderActive: "var(--colorPaletteMinkBorderActive)",
  colorPaletteMinkForeground2: "var(--colorPaletteMinkForeground2)",
  // Color palette navy tokens
  colorPaletteNavyBackground2: "var(--colorPaletteNavyBackground2)",
  colorPaletteNavyBorderActive: "var(--colorPaletteNavyBorderActive)",
  colorPaletteNavyForeground2: "var(--colorPaletteNavyForeground2)",
  // Color palette peach tokens
  colorPalettePeachBackground2: "var(--colorPalettePeachBackground2)",
  colorPalettePeachBorderActive: "var(--colorPalettePeachBorderActive)",
  colorPalettePeachForeground2: "var(--colorPalettePeachForeground2)",
  // Color palette pink tokens
  colorPalettePinkBackground2: "var(--colorPalettePinkBackground2)",
  colorPalettePinkBorderActive: "var(--colorPalettePinkBorderActive)",
  colorPalettePinkForeground2: "var(--colorPalettePinkForeground2)",
  // Color palette platinum tokens
  colorPalettePlatinumBackground2: "var(--colorPalettePlatinumBackground2)",
  colorPalettePlatinumBorderActive: "var(--colorPalettePlatinumBorderActive)",
  colorPalettePlatinumForeground2: "var(--colorPalettePlatinumForeground2)",
  // Color palette plum tokens
  colorPalettePlumBackground2: "var(--colorPalettePlumBackground2)",
  colorPalettePlumBorderActive: "var(--colorPalettePlumBorderActive)",
  colorPalettePlumForeground2: "var(--colorPalettePlumForeground2)",
  // Color palette pumpkin tokens
  colorPalettePumpkinBackground2: "var(--colorPalettePumpkinBackground2)",
  colorPalettePumpkinBorderActive: "var(--colorPalettePumpkinBorderActive)",
  colorPalettePumpkinForeground2: "var(--colorPalettePumpkinForeground2)",
  // Color palette purple tokens
  colorPalettePurpleBackground2: "var(--colorPalettePurpleBackground2)",
  colorPalettePurpleBorderActive: "var(--colorPalettePurpleBorderActive)",
  colorPalettePurpleForeground2: "var(--colorPalettePurpleForeground2)",
  // Color palette royal blue tokens
  colorPaletteRoyalBlueBackground2: "var(--colorPaletteRoyalBlueBackground2)",
  colorPaletteRoyalBlueBorderActive: "var(--colorPaletteRoyalBlueBorderActive)",
  colorPaletteRoyalBlueForeground2: "var(--colorPaletteRoyalBlueForeground2)",
  // Color palette seafoam tokens
  colorPaletteSeafoamBackground2: "var(--colorPaletteSeafoamBackground2)",
  colorPaletteSeafoamBorderActive: "var(--colorPaletteSeafoamBorderActive)",
  colorPaletteSeafoamForeground2: "var(--colorPaletteSeafoamForeground2)",
  // Color palette steel tokens
  colorPaletteSteelBackground2: "var(--colorPaletteSteelBackground2)",
  colorPaletteSteelBorderActive: "var(--colorPaletteSteelBorderActive)",
  colorPaletteSteelForeground2: "var(--colorPaletteSteelForeground2)",
  // Color palette teal tokens
  colorPaletteTealBackground2: "var(--colorPaletteTealBackground2)",
  colorPaletteTealBorderActive: "var(--colorPaletteTealBorderActive)",
  colorPaletteTealForeground2: "var(--colorPaletteTealForeground2)",
  // Color status success tokens
  colorStatusSuccessBackground1: "var(--colorStatusSuccessBackground1)",
  colorStatusSuccessBackground2: "var(--colorStatusSuccessBackground2)",
  colorStatusSuccessBackground3: "var(--colorStatusSuccessBackground3)",
  colorStatusSuccessForeground1: "var(--colorStatusSuccessForeground1)",
  colorStatusSuccessForeground2: "var(--colorStatusSuccessForeground2)",
  colorStatusSuccessForeground3: "var(--colorStatusSuccessForeground3)",
  colorStatusSuccessForegroundInverted: "var(--colorStatusSuccessForegroundInverted)",
  colorStatusSuccessBorderActive: "var(--colorStatusSuccessBorderActive)",
  colorStatusSuccessBorder1: "var(--colorStatusSuccessBorder1)",
  colorStatusSuccessBorder2: "var(--colorStatusSuccessBorder2)",
  // Color status warning tokens
  colorStatusWarningBackground1: "var(--colorStatusWarningBackground1)",
  colorStatusWarningBackground2: "var(--colorStatusWarningBackground2)",
  colorStatusWarningBackground3: "var(--colorStatusWarningBackground3)",
  colorStatusWarningForeground1: "var(--colorStatusWarningForeground1)",
  colorStatusWarningForeground2: "var(--colorStatusWarningForeground2)",
  colorStatusWarningForeground3: "var(--colorStatusWarningForeground3)",
  colorStatusWarningForegroundInverted: "var(--colorStatusWarningForegroundInverted)",
  colorStatusWarningBorderActive: "var(--colorStatusWarningBorderActive)",
  colorStatusWarningBorder1: "var(--colorStatusWarningBorder1)",
  colorStatusWarningBorder2: "var(--colorStatusWarningBorder2)",
  // Color status danger tokens
  colorStatusDangerBackground1: "var(--colorStatusDangerBackground1)",
  colorStatusDangerBackground2: "var(--colorStatusDangerBackground2)",
  colorStatusDangerBackground3: "var(--colorStatusDangerBackground3)",
  colorStatusDangerBackground3Hover: "var(--colorStatusDangerBackground3Hover)",
  colorStatusDangerBackground3Pressed: "var(--colorStatusDangerBackground3Pressed)",
  colorStatusDangerForeground1: "var(--colorStatusDangerForeground1)",
  colorStatusDangerForeground2: "var(--colorStatusDangerForeground2)",
  colorStatusDangerForeground3: "var(--colorStatusDangerForeground3)",
  colorStatusDangerForegroundInverted: "var(--colorStatusDangerForegroundInverted)",
  colorStatusDangerBorderActive: "var(--colorStatusDangerBorderActive)",
  colorStatusDangerBorder1: "var(--colorStatusDangerBorder1)",
  colorStatusDangerBorder2: "var(--colorStatusDangerBorder2)",
  // Border radius tokens
  borderRadiusNone: "var(--borderRadiusNone)",
  borderRadiusSmall: "var(--borderRadiusSmall)",
  borderRadiusMedium: "var(--borderRadiusMedium)",
  borderRadiusLarge: "var(--borderRadiusLarge)",
  borderRadiusXLarge: "var(--borderRadiusXLarge)",
  borderRadiusCircular: "var(--borderRadiusCircular)",
  // Font family tokens
  fontFamilyBase: "var(--fontFamilyBase)",
  fontFamilyMonospace: "var(--fontFamilyMonospace)",
  fontFamilyNumeric: "var(--fontFamilyNumeric)",
  // Font size tokens
  fontSizeBase100: "var(--fontSizeBase100)",
  fontSizeBase200: "var(--fontSizeBase200)",
  fontSizeBase300: "var(--fontSizeBase300)",
  fontSizeBase400: "var(--fontSizeBase400)",
  fontSizeBase500: "var(--fontSizeBase500)",
  fontSizeBase600: "var(--fontSizeBase600)",
  fontSizeHero700: "var(--fontSizeHero700)",
  fontSizeHero800: "var(--fontSizeHero800)",
  fontSizeHero900: "var(--fontSizeHero900)",
  fontSizeHero1000: "var(--fontSizeHero1000)",
  // Font weight tokens
  fontWeightRegular: "var(--fontWeightRegular)",
  fontWeightMedium: "var(--fontWeightMedium)",
  fontWeightSemibold: "var(--fontWeightSemibold)",
  fontWeightBold: "var(--fontWeightBold)",
  // Line height tokens
  lineHeightBase100: "var(--lineHeightBase100)",
  lineHeightBase200: "var(--lineHeightBase200)",
  lineHeightBase300: "var(--lineHeightBase300)",
  lineHeightBase400: "var(--lineHeightBase400)",
  lineHeightBase500: "var(--lineHeightBase500)",
  lineHeightBase600: "var(--lineHeightBase600)",
  lineHeightHero700: "var(--lineHeightHero700)",
  lineHeightHero800: "var(--lineHeightHero800)",
  lineHeightHero900: "var(--lineHeightHero900)",
  lineHeightHero1000: "var(--lineHeightHero1000)",
  // Shadow tokens
  shadow2: "var(--shadow2)",
  shadow4: "var(--shadow4)",
  shadow8: "var(--shadow8)",
  shadow16: "var(--shadow16)",
  shadow28: "var(--shadow28)",
  shadow64: "var(--shadow64)",
  // Shadow brand tokens
  shadow2Brand: "var(--shadow2Brand)",
  shadow4Brand: "var(--shadow4Brand)",
  shadow8Brand: "var(--shadow8Brand)",
  shadow16Brand: "var(--shadow16Brand)",
  shadow28Brand: "var(--shadow28Brand)",
  shadow64Brand: "var(--shadow64Brand)",
  // Stroke width tokens
  strokeWidthThin: "var(--strokeWidthThin)",
  strokeWidthThick: "var(--strokeWidthThick)",
  strokeWidthThicker: "var(--strokeWidthThicker)",
  strokeWidthThickest: "var(--strokeWidthThickest)",
  // Spacings
  spacingHorizontalNone: "var(--spacingHorizontalNone)",
  spacingHorizontalXXS: "var(--spacingHorizontalXXS)",
  spacingHorizontalXS: "var(--spacingHorizontalXS)",
  spacingHorizontalSNudge: "var(--spacingHorizontalSNudge)",
  spacingHorizontalS: "var(--spacingHorizontalS)",
  spacingHorizontalMNudge: "var(--spacingHorizontalMNudge)",
  spacingHorizontalM: "var(--spacingHorizontalM)",
  spacingHorizontalL: "var(--spacingHorizontalL)",
  spacingHorizontalXL: "var(--spacingHorizontalXL)",
  spacingHorizontalXXL: "var(--spacingHorizontalXXL)",
  spacingHorizontalXXXL: "var(--spacingHorizontalXXXL)",
  spacingVerticalNone: "var(--spacingVerticalNone)",
  spacingVerticalXXS: "var(--spacingVerticalXXS)",
  spacingVerticalXS: "var(--spacingVerticalXS)",
  spacingVerticalSNudge: "var(--spacingVerticalSNudge)",
  spacingVerticalS: "var(--spacingVerticalS)",
  spacingVerticalMNudge: "var(--spacingVerticalMNudge)",
  spacingVerticalM: "var(--spacingVerticalM)",
  spacingVerticalL: "var(--spacingVerticalL)",
  spacingVerticalXL: "var(--spacingVerticalXL)",
  spacingVerticalXXL: "var(--spacingVerticalXXL)",
  spacingVerticalXXXL: "var(--spacingVerticalXXXL)",
  // Durations
  durationUltraFast: "var(--durationUltraFast)",
  durationFaster: "var(--durationFaster)",
  durationFast: "var(--durationFast)",
  durationNormal: "var(--durationNormal)",
  durationGentle: "var(--durationGentle)",
  durationSlow: "var(--durationSlow)",
  durationSlower: "var(--durationSlower)",
  durationUltraSlow: "var(--durationUltraSlow)",
  // Curves
  curveAccelerateMax: "var(--curveAccelerateMax)",
  curveAccelerateMid: "var(--curveAccelerateMid)",
  curveAccelerateMin: "var(--curveAccelerateMin)",
  curveDecelerateMax: "var(--curveDecelerateMax)",
  curveDecelerateMid: "var(--curveDecelerateMid)",
  curveDecelerateMin: "var(--curveDecelerateMin)",
  curveEasyEaseMax: "var(--curveEasyEaseMax)",
  curveEasyEase: "var(--curveEasyEase)",
  curveLinear: "var(--curveLinear)"
};
var Ki = { exports: {} }, ci = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Us;
function Jb() {
  return Us || (Us = 1, function(e) {
    function t(D, L) {
      var x = D.length;
      D.push(L);
      e:
        for (; 0 < x; ) {
          var P = x - 1 >>> 1, M = D[P];
          if (0 < n(M, L))
            D[P] = L, D[x] = M, x = P;
          else
            break e;
        }
    }
    function r(D) {
      return D.length === 0 ? null : D[0];
    }
    function o(D) {
      if (D.length === 0)
        return null;
      var L = D[0], x = D.pop();
      if (x !== L) {
        D[0] = x;
        e:
          for (var P = 0, M = D.length, V = M >>> 1; P < V; ) {
            var q = 2 * (P + 1) - 1, X = D[q], $ = q + 1, G = D[$];
            if (0 > n(X, x))
              $ < M && 0 > n(G, X) ? (D[P] = G, D[$] = x, P = $) : (D[P] = X, D[q] = x, P = q);
            else if ($ < M && 0 > n(G, x))
              D[P] = G, D[$] = x, P = $;
            else
              break e;
          }
      }
      return L;
    }
    function n(D, L) {
      var x = D.sortIndex - L.sortIndex;
      return x !== 0 ? x : D.id - L.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var i = performance;
      e.unstable_now = function() {
        return i.now();
      };
    } else {
      var a = Date, s = a.now();
      e.unstable_now = function() {
        return a.now() - s;
      };
    }
    var l = [], c = [], u = 1, d = null, f = 3, h = !1, v = !1, p = !1, g = typeof setTimeout == "function" ? setTimeout : null, b = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(D) {
      for (var L = r(c); L !== null; ) {
        if (L.callback === null)
          o(c);
        else if (L.startTime <= D)
          o(c), L.sortIndex = L.expirationTime, t(l, L);
        else
          break;
        L = r(c);
      }
    }
    function w(D) {
      if (p = !1, m(D), !v)
        if (r(l) !== null)
          v = !0, ue(_);
        else {
          var L = r(c);
          L !== null && be(w, L.startTime - D);
        }
    }
    function _(D, L) {
      v = !1, p && (p = !1, b(C), C = -1), h = !0;
      var x = f;
      try {
        for (m(L), d = r(l); d !== null && (!(d.expirationTime > L) || D && !se()); ) {
          var P = d.callback;
          if (typeof P == "function") {
            d.callback = null, f = d.priorityLevel;
            var M = P(d.expirationTime <= L);
            L = e.unstable_now(), typeof M == "function" ? d.callback = M : d === r(l) && o(l), m(L);
          } else
            o(l);
          d = r(l);
        }
        if (d !== null)
          var V = !0;
        else {
          var q = r(c);
          q !== null && be(w, q.startTime - L), V = !1;
        }
        return V;
      } finally {
        d = null, f = x, h = !1;
      }
    }
    var E = !1, S = null, C = -1, I = 5, H = -1;
    function se() {
      return !(e.unstable_now() - H < I);
    }
    function Be() {
      if (S !== null) {
        var D = e.unstable_now();
        H = D;
        var L = !0;
        try {
          L = S(!0, D);
        } finally {
          L ? R() : (E = !1, S = null);
        }
      } else
        E = !1;
    }
    var R;
    if (typeof y == "function")
      R = function() {
        y(Be);
      };
    else if (typeof MessageChannel < "u") {
      var ee = new MessageChannel(), Ce = ee.port2;
      ee.port1.onmessage = Be, R = function() {
        Ce.postMessage(null);
      };
    } else
      R = function() {
        g(Be, 0);
      };
    function ue(D) {
      S = D, E || (E = !0, R());
    }
    function be(D, L) {
      C = g(function() {
        D(e.unstable_now());
      }, L);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, e.unstable_continueExecution = function() {
      v || h || (v = !0, ue(_));
    }, e.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < D ? Math.floor(1e3 / D) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return f;
    }, e.unstable_getFirstCallbackNode = function() {
      return r(l);
    }, e.unstable_next = function(D) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = f;
      }
      var x = f;
      f = L;
      try {
        return D();
      } finally {
        f = x;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(D, L) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var x = f;
      f = D;
      try {
        return L();
      } finally {
        f = x;
      }
    }, e.unstable_scheduleCallback = function(D, L, x) {
      var P = e.unstable_now();
      switch (typeof x == "object" && x !== null ? (x = x.delay, x = typeof x == "number" && 0 < x ? P + x : P) : x = P, D) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return M = x + M, D = { id: u++, callback: L, priorityLevel: D, startTime: x, expirationTime: M, sortIndex: -1 }, x > P ? (D.sortIndex = x, t(c, D), r(l) === null && D === r(c) && (p ? (b(C), C = -1) : p = !0, be(w, x - P))) : (D.sortIndex = M, t(l, D), v || h || (v = !0, ue(_))), D;
    }, e.unstable_shouldYield = se, e.unstable_wrapCallback = function(D) {
      var L = f;
      return function() {
        var x = f;
        f = L;
        try {
          return D.apply(this, arguments);
        } finally {
          f = x;
        }
      };
    };
  }(ci)), ci;
}
var ui = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gs;
function Qb() {
  return Gs || (Gs = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = !1, r = !1, o = 5;
      function n(j, U) {
        var oe = j.length;
        j.push(U), s(j, U, oe);
      }
      function i(j) {
        return j.length === 0 ? null : j[0];
      }
      function a(j) {
        if (j.length === 0)
          return null;
        var U = j[0], oe = j.pop();
        return oe !== U && (j[0] = oe, l(j, oe, 0)), U;
      }
      function s(j, U, oe) {
        for (var me = oe; me > 0; ) {
          var Ne = me - 1 >>> 1, at = j[Ne];
          if (c(at, U) > 0)
            j[Ne] = U, j[me] = at, me = Ne;
          else
            return;
        }
      }
      function l(j, U, oe) {
        for (var me = oe, Ne = j.length, at = Ne >>> 1; me < at; ) {
          var Me = (me + 1) * 2 - 1, pr = j[Me], qe = Me + 1, Bo = j[qe];
          if (c(pr, U) < 0)
            qe < Ne && c(Bo, pr) < 0 ? (j[me] = Bo, j[qe] = U, me = qe) : (j[me] = pr, j[Me] = U, me = Me);
          else if (qe < Ne && c(Bo, U) < 0)
            j[me] = Bo, j[qe] = U, me = qe;
          else
            return;
        }
      }
      function c(j, U) {
        var oe = j.sortIndex - U.sortIndex;
        return oe !== 0 ? oe : j.id - U.id;
      }
      var u = 1, d = 2, f = 3, h = 4, v = 5;
      function p(j, U) {
      }
      var g = typeof performance == "object" && typeof performance.now == "function";
      if (g) {
        var b = performance;
        e.unstable_now = function() {
          return b.now();
        };
      } else {
        var y = Date, m = y.now();
        e.unstable_now = function() {
          return y.now() - m;
        };
      }
      var w = 1073741823, _ = -1, E = 250, S = 5e3, C = 1e4, I = w, H = [], se = [], Be = 1, R = null, ee = f, Ce = !1, ue = !1, be = !1, D = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, x = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function P(j) {
        for (var U = i(se); U !== null; ) {
          if (U.callback === null)
            a(se);
          else if (U.startTime <= j)
            a(se), U.sortIndex = U.expirationTime, n(H, U);
          else
            return;
          U = i(se);
        }
      }
      function M(j) {
        if (be = !1, P(j), !ue)
          if (i(H) !== null)
            ue = !0, Xn(V);
          else {
            var U = i(se);
            U !== null && Yn(M, U.startTime - j);
          }
      }
      function V(j, U) {
        ue = !1, be && (be = !1, ls()), Ce = !0;
        var oe = ee;
        try {
          var me;
          if (!r)
            return q(j, U);
        } finally {
          R = null, ee = oe, Ce = !1;
        }
      }
      function q(j, U) {
        var oe = U;
        for (P(oe), R = i(H); R !== null && !t && !(R.expirationTime > oe && (!j || as())); ) {
          var me = R.callback;
          if (typeof me == "function") {
            R.callback = null, ee = R.priorityLevel;
            var Ne = R.expirationTime <= oe, at = me(Ne);
            oe = e.unstable_now(), typeof at == "function" ? R.callback = at : R === i(H) && a(H), P(oe);
          } else
            a(H);
          R = i(H);
        }
        if (R !== null)
          return !0;
        var Me = i(se);
        return Me !== null && Yn(M, Me.startTime - oe), !1;
      }
      function X(j, U) {
        switch (j) {
          case u:
          case d:
          case f:
          case h:
          case v:
            break;
          default:
            j = f;
        }
        var oe = ee;
        ee = j;
        try {
          return U();
        } finally {
          ee = oe;
        }
      }
      function $(j) {
        var U;
        switch (ee) {
          case u:
          case d:
          case f:
            U = f;
            break;
          default:
            U = ee;
            break;
        }
        var oe = ee;
        ee = U;
        try {
          return j();
        } finally {
          ee = oe;
        }
      }
      function G(j) {
        var U = ee;
        return function() {
          var oe = ee;
          ee = U;
          try {
            return j.apply(this, arguments);
          } finally {
            ee = oe;
          }
        };
      }
      function te(j, U, oe) {
        var me = e.unstable_now(), Ne;
        if (typeof oe == "object" && oe !== null) {
          var at = oe.delay;
          typeof at == "number" && at > 0 ? Ne = me + at : Ne = me;
        } else
          Ne = me;
        var Me;
        switch (j) {
          case u:
            Me = _;
            break;
          case d:
            Me = E;
            break;
          case v:
            Me = I;
            break;
          case h:
            Me = C;
            break;
          case f:
          default:
            Me = S;
            break;
        }
        var pr = Ne + Me, qe = {
          id: Be++,
          callback: U,
          priorityLevel: j,
          startTime: Ne,
          expirationTime: pr,
          sortIndex: -1
        };
        return Ne > me ? (qe.sortIndex = Ne, n(se, qe), i(H) === null && qe === i(se) && (be ? ls() : be = !0, Yn(M, Ne - me))) : (qe.sortIndex = pr, n(H, qe), !ue && !Ce && (ue = !0, Xn(V))), qe;
      }
      function ie() {
      }
      function re() {
        !ue && !Ce && (ue = !0, Xn(V));
      }
      function F() {
        return i(H);
      }
      function z(j) {
        j.callback = null;
      }
      function Re() {
        return ee;
      }
      var Ye = !1, Ut = null, Un = -1, Gn = o, is = -1;
      function as() {
        var j = e.unstable_now() - is;
        return !(j < Gn);
      }
      function Bf() {
      }
      function Tf(j) {
        if (j < 0 || j > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        j > 0 ? Gn = Math.floor(1e3 / j) : Gn = o;
      }
      var Kn = function() {
        if (Ut !== null) {
          var j = e.unstable_now();
          is = j;
          var U = !0, oe = !0;
          try {
            oe = Ut(U, j);
          } finally {
            oe ? Fr() : (Ye = !1, Ut = null);
          }
        } else
          Ye = !1;
      }, Fr;
      if (typeof x == "function")
        Fr = function() {
          x(Kn);
        };
      else if (typeof MessageChannel < "u") {
        var ss = new MessageChannel(), Nf = ss.port2;
        ss.port1.onmessage = Kn, Fr = function() {
          Nf.postMessage(null);
        };
      } else
        Fr = function() {
          D(Kn, 0);
        };
      function Xn(j) {
        Ut = j, Ye || (Ye = !0, Fr());
      }
      function Yn(j, U) {
        Un = D(function() {
          j(e.unstable_now());
        }, U);
      }
      function ls() {
        L(Un), Un = -1;
      }
      var Of = Bf, Pf = null;
      e.unstable_IdlePriority = v, e.unstable_ImmediatePriority = u, e.unstable_LowPriority = h, e.unstable_NormalPriority = f, e.unstable_Profiling = Pf, e.unstable_UserBlockingPriority = d, e.unstable_cancelCallback = z, e.unstable_continueExecution = re, e.unstable_forceFrameRate = Tf, e.unstable_getCurrentPriorityLevel = Re, e.unstable_getFirstCallbackNode = F, e.unstable_next = $, e.unstable_pauseExecution = ie, e.unstable_requestPaint = Of, e.unstable_runWithPriority = X, e.unstable_scheduleCallback = te, e.unstable_shouldYield = as, e.unstable_wrapCallback = G, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ui)), ui;
}
process.env.NODE_ENV === "production" ? Ki.exports = Jb() : Ki.exports = Qb();
var Ks = Ki.exports;
const Zb = (e) => {
  const t = (r) => {
    const o = k.useRef(r.value), n = k.useRef(0), i = k.useRef();
    return i.current || (i.current = {
      value: o,
      version: n,
      listeners: []
    }), vo(() => {
      o.current = r.value, n.current += 1, Ks.unstable_runWithPriority(Ks.unstable_NormalPriority, () => {
        i.current.listeners.forEach((a) => {
          a([
            n.current,
            r.value
          ]);
        });
      });
    }, [
      r.value
    ]), k.createElement(e, {
      value: i.current
    }, r.children);
  };
  return process.env.NODE_ENV !== "production" && (t.displayName = "ContextSelector.Provider"), t;
}, eg = (e) => {
  const t = k.createContext({
    value: {
      current: e
    },
    version: {
      current: -1
    },
    listeners: []
  });
  return t.Provider = Zb(t.Provider), delete t.Consumer, t;
}, tg = (e, t) => {
  const r = k.useContext(e), { value: { current: o }, version: { current: n }, listeners: i } = r, a = t(o), [s, l] = k.useReducer((c, u) => {
    if (!u)
      return [
        o,
        a
      ];
    if (u[0] <= n)
      return Po(c[1], a) ? c : [
        o,
        a
      ];
    try {
      if (Po(c[0], u[1]))
        return c;
      const d = t(u[1]);
      return Po(c[1], d) ? c : [
        u[1],
        d
      ];
    } catch {
    }
    return [
      c[0],
      c[1]
    ];
  }, [
    o,
    a
  ]);
  return Po(s[1], a) || l(void 0), vo(() => (i.push(l), () => {
    const c = i.indexOf(l);
    i.splice(c, 1);
  }), [
    i
  ]), s[1];
};
function rg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
const Po = (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore fallback to native if it exists (not in IE11)
  typeof Object.is == "function" ? Object.is : rg
);
function og(e) {
  const t = k.useContext(e);
  return t.version ? t.version.current !== -1 : !1;
}
const $o = "Enter", Co = " ", ng = "Escape";
function ja(e, t) {
  const { disabled: r, disabledFocusable: o = !1, ["aria-disabled"]: n, onClick: i, onKeyDown: a, onKeyUp: s, ...l } = t ?? {}, c = typeof n == "string" ? n === "true" : n, u = r || o || c, d = Pt((v) => {
    u ? (v.preventDefault(), v.stopPropagation()) : i == null || i(v);
  }), f = Pt((v) => {
    if (a == null || a(v), v.isDefaultPrevented())
      return;
    const p = v.key;
    if (u && (p === $o || p === Co)) {
      v.preventDefault(), v.stopPropagation();
      return;
    }
    if (p === Co) {
      v.preventDefault();
      return;
    } else
      p === $o && (v.preventDefault(), v.currentTarget.click());
  }), h = Pt((v) => {
    if (s == null || s(v), v.isDefaultPrevented())
      return;
    const p = v.key;
    if (u && (p === $o || p === Co)) {
      v.preventDefault(), v.stopPropagation();
      return;
    }
    p === Co && (v.preventDefault(), v.currentTarget.click());
  });
  if (e === "button" || e === void 0)
    return {
      ...l,
      disabled: r && !o,
      "aria-disabled": o ? !0 : c,
      // onclick should still use internal handler to ensure prevention if disabled
      // if disabledFocusable then there's no requirement for handlers as those events should not be propagated
      onClick: o ? void 0 : d,
      onKeyUp: o ? void 0 : s,
      onKeyDown: o ? void 0 : a
    };
  {
    const v = {
      role: "button",
      tabIndex: r && !o ? void 0 : 0,
      ...l,
      // If it's not a <button> than listeners are required even with disabledFocusable
      // Since you cannot assure the default behavior of the element
      // E.g: <a> will redirect on click
      onClick: d,
      onKeyUp: h,
      onKeyDown: f,
      "aria-disabled": r || o || c
    };
    return e === "a" && u && (v.href = void 0), v;
  }
}
const ig = k.createContext(void 0), ag = ig.Provider;
function sg(e) {
  return Mi(e) ? {
    element: e
  } : typeof e == "object" ? e === null ? {
    element: null
  } : e : {};
}
var Ia = () => k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner.current, Xs = /* @__PURE__ */ Symbol.for("react.strict_mode"), lg = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = k.useRef(void 0), t = k.useMemo(() => Number(k.version.split(".")[0]), [k.version]);
  if (isNaN(t) || t < 18)
    return !1;
  if (e.current === void 0) {
    let r = Ia();
    for (; r && r.return; )
      r = r.return, (r.type === Xs || r.elementType === Xs) && (e.current = !0);
  }
  return !!e.current;
}, Ys = /* @__PURE__ */ new WeakSet();
function cg(e, t) {
  const r = Ia();
  k.useEffect(() => {
    if (!Ys.has(r)) {
      Ys.add(r), e();
      return;
    }
    return e();
  }, t);
}
var Js = /* @__PURE__ */ new WeakSet();
function ug(e, t) {
  return k.useMemo(() => {
    const r = Ia();
    return Js.has(r) ? e() : (Js.add(r), null);
  }, t);
}
function dg(e, t) {
  var r;
  const o = lg() && process.env.NODE_ENV !== "production", n = o ? ug : k.useMemo, i = o ? cg : k.useEffect, [a, s] = (r = n(() => e(), t)) != null ? r : [
    null,
    () => null
  ];
  return i(() => s, t), a;
}
const fg = /* @__PURE__ */ J({
  root: {
    qhf8xq: "f1euv43f",
    Bhzewxz: "f15twtuk",
    oyh7mz: ["f1vgc2s3", "f1e31b4d"],
    j35jbq: ["f1e31b4d", "f1vgc2s3"],
    Bj3rh1h: "f494woh"
  }
}, {
  d: [".f1euv43f{position:absolute;}", ".f15twtuk{top:0;}", ".f1vgc2s3{left:0;}", ".f1e31b4d{right:0;}", ".f494woh{z-index:1000000;}"]
}), Qs = k.useInsertionEffect, vg = (e) => {
  const { targetDocument: t, dir: r } = dr(), o = Gh(), n = Nu(), i = fg(), a = $h(), s = K(a, i.root, e.className), l = o ?? (t == null ? void 0 : t.body), c = dg(() => {
    if (l === void 0 || e.disabled)
      return [
        null,
        () => null
      ];
    const u = l.ownerDocument.createElement("div");
    return l.appendChild(u), [
      u,
      () => u.remove()
    ];
  }, [
    l
  ]);
  return Qs ? Qs(() => {
    if (!c)
      return;
    const u = s.split(" ").filter(Boolean);
    return c.classList.add(...u), c.setAttribute("dir", r), n.current = c, () => {
      c.classList.remove(...u), c.removeAttribute("dir");
    };
  }, [
    s,
    r,
    c,
    n
  ]) : k.useMemo(() => {
    c && (c.className = s, c.setAttribute("dir", r), n.current = c);
  }, [
    s,
    r,
    c,
    n
  ]), c;
}, hg = (e) => {
  const { element: t, className: r } = sg(e.mountNode), o = k.useRef(null), n = vg({
    disabled: !!t,
    className: r
  }), i = t ?? n, a = {
    children: e.children,
    mountNode: i,
    virtualParentRootRef: o
  };
  return k.useEffect(() => {
    if (!i)
      return;
    const s = o.current, l = i.contains(s);
    if (s && !l)
      return Cs(i, s), () => {
        Cs(i, void 0);
      };
  }, [
    o,
    i
  ]), a;
}, pg = (e) => /* @__PURE__ */ k.createElement("span", {
  hidden: !0,
  ref: e.virtualParentRootRef
}, e.mountNode && /* @__PURE__ */ jf.createPortal(e.children, e.mountNode)), Pu = (e) => {
  const t = hg(e);
  return pg(t);
};
Pu.displayName = "Portal";
const bg = (e) => {
  Ee(e);
  const { iconOnly: t, iconPosition: r } = e;
  return /* @__PURE__ */ Ke(e.root, {
    children: [
      r !== "after" && e.icon && /* @__PURE__ */ Y(e.icon, {}),
      !t && e.root.children,
      r === "after" && e.icon && /* @__PURE__ */ Y(e.icon, {})
    ]
  });
}, Cu = k.createContext(void 0), gg = {};
Cu.Provider;
const mg = () => {
  var e;
  return (e = k.useContext(Cu)) !== null && e !== void 0 ? e : gg;
}, _g = (e, t) => {
  const { size: r } = mg(), { appearance: o = "secondary", as: n = "button", disabled: i = !1, disabledFocusable: a = !1, icon: s, iconPosition: l = "before", shape: c = "rounded", size: u = r ?? "medium" } = e, d = Pe(s, {
    elementType: "span"
  });
  return {
    // Props passed at the top-level
    appearance: o,
    disabled: i,
    disabledFocusable: a,
    iconPosition: l,
    shape: c,
    size: u,
    iconOnly: !!(d != null && d.children && !e.children),
    components: {
      root: "button",
      icon: "span"
    },
    root: ye(ze(n, ja(e.as, e)), {
      elementType: "button",
      defaultProps: {
        ref: t,
        type: "button"
      }
    }),
    icon: d
  };
}, Zs = {
  root: "fui-Button",
  icon: "fui-Button__icon"
}, yg = /* @__PURE__ */ Ie("r1alrhcs", null, {
  r: [".r1alrhcs{align-items:center;box-sizing:border-box;display:inline-flex;justify-content:center;text-decoration-line:none;vertical-align:middle;margin:0;overflow:hidden;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);border:var(--strokeWidthThin) solid var(--colorNeutralStroke1);font-family:var(--fontFamilyBase);outline-style:none;padding:5px var(--spacingHorizontalM);min-width:96px;border-radius:var(--borderRadiusMedium);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase300);transition-duration:var(--durationFaster);transition-property:background,border,color;transition-timing-function:var(--curveEasyEase);}", ".r1alrhcs:hover{background-color:var(--colorNeutralBackground1Hover);border-color:var(--colorNeutralStroke1Hover);color:var(--colorNeutralForeground1Hover);cursor:pointer;}", ".r1alrhcs:hover:active{background-color:var(--colorNeutralBackground1Pressed);border-color:var(--colorNeutralStroke1Pressed);color:var(--colorNeutralForeground1Pressed);outline-style:none;}", ".r1alrhcs[data-fui-focus-visible]{border-color:var(--colorStrokeFocus2);border-radius:var(--borderRadiusMedium);border-width:1px;outline:var(--strokeWidthThick) solid var(--colorTransparentStroke);box-shadow:0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;z-index:1;}"],
  s: ["@media screen and (prefers-reduced-motion: reduce){.r1alrhcs{transition-duration:0.01ms;}}", "@media (forced-colors: active){.r1alrhcs:focus{border-color:ButtonText;}.r1alrhcs:hover{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}.r1alrhcs:hover:active{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}}", "@supports (-moz-appearance:button){.r1alrhcs[data-fui-focus-visible]{box-shadow:0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}"]
}), wg = /* @__PURE__ */ Ie("rywnvv2", null, [".rywnvv2{align-items:center;display:inline-flex;justify-content:center;font-size:20px;height:20px;width:20px;--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}"]), kg = /* @__PURE__ */ J({
  outline: {
    De3pzq: "f1c21dwh",
    Jwef8y: "fjxutwb",
    iro3zm: "fwiml72"
  },
  primary: {
    De3pzq: "ffp7eso",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    sj55zd: "f1phragk",
    Jwef8y: "f15wkkf3",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    Bi91k9c: "f1rq72xc",
    iro3zm: "fnp9lpt",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"],
    B2d53fq: "f1d6v5y2",
    Bsw6fvg: "f1rirnrt",
    Bjwas2f: "f1uu00uk",
    Bn1d65q: ["fkvaka8", "f9a0qzu"],
    Bxeuatn: "f1ux7til",
    n51gp8: ["f9a0qzu", "fkvaka8"],
    Bbusuzp: "f1lkg8j3",
    ycbfsm: "fkc42ay",
    Bqrx1nm: "fq7113v",
    pgvf35: "ff1wgvm",
    Bh7lczh: ["fiob0tu", "f1x4h75k"],
    dpv3f4: "f1j6scgf",
    Bpnjhaq: ["f1x4h75k", "fiob0tu"],
    ze5xyy: "f4xjyn1",
    g2kj27: "fbgcvur",
    Bf756sw: "f1ks1yx8",
    Bow2dr7: ["f1o6qegi", "fmxjhhp"],
    Bvhedfk: "fcnxywj",
    Gye4lf: ["fmxjhhp", "f1o6qegi"],
    pc6evw: "f9ddjv3"
  },
  secondary: {},
  subtle: {
    De3pzq: "fhovq9v",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    sj55zd: "fkfq4zb",
    Jwef8y: "f1t94bn6",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    Bi91k9c: "fnwyq0v",
    Bk3fhr4: "ft1hn21",
    Bmfj8id: "fuxngvv",
    Bbdnnc7: "fy5bs14",
    iro3zm: "fsv2rcd",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"],
    B2d53fq: "f1omzyqd",
    em6i61: "f1dfjoow",
    vm6p8p: "f1j98vj9",
    x3br3k: "fj8yq94",
    ze5xyy: "f4xjyn1",
    Bx3q9su: "f1et0tmh",
    pc6evw: "f9ddjv3",
    xd2cci: "f1wi8ngl"
  },
  transparent: {
    De3pzq: "f1c21dwh",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    sj55zd: "fkfq4zb",
    Jwef8y: "fjxutwb",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    Bi91k9c: "f139oj5f",
    Bk3fhr4: "ft1hn21",
    Bmfj8id: "fuxngvv",
    iro3zm: "fwiml72",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"],
    B2d53fq: "f1fg1p5m",
    em6i61: "f1dfjoow",
    vm6p8p: "f1j98vj9",
    Bqrx1nm: "f1tme0vf",
    ze5xyy: "f4xjyn1",
    g2kj27: "f18onu3q",
    pc6evw: "f9ddjv3"
  },
  circular: {
    Bbmb7ep: ["f8fbkgy", "f1nfllo7"],
    Beyfa6y: ["f1nfllo7", "f8fbkgy"],
    B7oj6ja: ["f1djnp8u", "f1s8kh49"],
    Btl43ni: ["f1s8kh49", "f1djnp8u"]
  },
  rounded: {},
  square: {
    Bbmb7ep: ["fzi6hpg", "fyowgf4"],
    Beyfa6y: ["fyowgf4", "fzi6hpg"],
    B7oj6ja: ["f3fg2lr", "f13av6d4"],
    Btl43ni: ["f13av6d4", "f3fg2lr"]
  },
  small: {
    Bf4jedk: "fh7ncta",
    z8tnut: "f1khb0e9",
    z189sj: ["f1vdfbxk", "f1f5gg8d"],
    Byoj8tv: "f1jnq6q7",
    uwmqm3: ["f1f5gg8d", "f1vdfbxk"],
    Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
    Beyfa6y: ["f16jpd5f", "f1aa9q02"],
    B7oj6ja: ["f1jar5jt", "fyu767a"],
    Btl43ni: ["fyu767a", "f1jar5jt"],
    Be2twd7: "fy9rknc",
    Bhrd7zp: "figsok6",
    Bg96gwp: "fwrc4pm"
  },
  smallWithIcon: {
    Byoj8tv: "f1brlhvm",
    z8tnut: "f1sl3k7w"
  },
  medium: {},
  large: {
    Bf4jedk: "f14es27b",
    z8tnut: "fp9bwmr",
    z189sj: ["fjodcmx", "fhx4nu"],
    Byoj8tv: "f150uoa4",
    uwmqm3: ["fhx4nu", "fjodcmx"],
    Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
    Beyfa6y: ["f16jpd5f", "f1aa9q02"],
    B7oj6ja: ["f1jar5jt", "fyu767a"],
    Btl43ni: ["fyu767a", "f1jar5jt"],
    Be2twd7: "fod5ikn",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "faaz57k"
  },
  largeWithIcon: {
    Byoj8tv: "fy7v416",
    z8tnut: "f1a1bwwz"
  }
}, {
  d: [".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".ffp7eso{background-color:var(--colorBrandBackground);}", ".f1p3nwhy{border-top-color:transparent;}", ".f11589ue{border-right-color:transparent;}", ".f1pdflbu{border-left-color:transparent;}", ".f1q5o8ev{border-bottom-color:transparent;}", ".f1phragk{color:var(--colorNeutralForegroundOnBrand);}", ".fhovq9v{background-color:var(--colorSubtleBackground);}", ".fkfq4zb{color:var(--colorNeutralForeground2);}", ".f8fbkgy{border-bottom-right-radius:var(--borderRadiusCircular);}", ".f1nfllo7{border-bottom-left-radius:var(--borderRadiusCircular);}", ".f1djnp8u{border-top-right-radius:var(--borderRadiusCircular);}", ".f1s8kh49{border-top-left-radius:var(--borderRadiusCircular);}", ".fzi6hpg{border-bottom-right-radius:var(--borderRadiusNone);}", ".fyowgf4{border-bottom-left-radius:var(--borderRadiusNone);}", ".f3fg2lr{border-top-right-radius:var(--borderRadiusNone);}", ".f13av6d4{border-top-left-radius:var(--borderRadiusNone);}", ".fh7ncta{min-width:64px;}", ".f1khb0e9{padding-top:3px;}", ".f1vdfbxk{padding-right:var(--spacingHorizontalS);}", ".f1f5gg8d{padding-left:var(--spacingHorizontalS);}", ".f1jnq6q7{padding-bottom:3px;}", ".f1aa9q02{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f16jpd5f{border-bottom-left-radius:var(--borderRadiusMedium);}", ".f1jar5jt{border-top-right-radius:var(--borderRadiusMedium);}", ".fyu767a{border-top-left-radius:var(--borderRadiusMedium);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".f1brlhvm{padding-bottom:1px;}", ".f1sl3k7w{padding-top:1px;}", ".f14es27b{min-width:96px;}", ".fp9bwmr{padding-top:8px;}", ".fjodcmx{padding-right:var(--spacingHorizontalL);}", ".fhx4nu{padding-left:var(--spacingHorizontalL);}", ".f150uoa4{padding-bottom:8px;}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".fy7v416{padding-bottom:7px;}", ".f1a1bwwz{padding-top:7px;}"],
  h: [".fjxutwb:hover{background-color:var(--colorTransparentBackgroundHover);}", ".fwiml72:hover:active{background-color:var(--colorTransparentBackgroundPressed);}", ".f15wkkf3:hover{background-color:var(--colorBrandBackgroundHover);}", ".f1s2uweq:hover{border-top-color:transparent;}", ".fr80ssc:hover{border-right-color:transparent;}", ".fecsdlb:hover{border-left-color:transparent;}", ".f1ukrpxl:hover{border-bottom-color:transparent;}", ".f1rq72xc:hover{color:var(--colorNeutralForegroundOnBrand);}", ".fnp9lpt:hover:active{background-color:var(--colorBrandBackgroundPressed);}", ".f1h0usnq:hover:active{border-top-color:transparent;}", ".fs4ktlq:hover:active{border-right-color:transparent;}", ".fx2bmrt:hover:active{border-left-color:transparent;}", ".f16h9ulv:hover:active{border-bottom-color:transparent;}", ".f1d6v5y2:hover:active{color:var(--colorNeutralForegroundOnBrand);}", ".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}", ".fnwyq0v:hover{color:var(--colorNeutralForeground2Hover);}", ".ft1hn21:hover .fui-Icon-filled{display:inline;}", ".fuxngvv:hover .fui-Icon-regular{display:none;}", ".fy5bs14:hover .fui-Button__icon{color:var(--colorNeutralForeground2BrandHover);}", ".fsv2rcd:hover:active{background-color:var(--colorSubtleBackgroundPressed);}", ".f1omzyqd:hover:active{color:var(--colorNeutralForeground2Pressed);}", ".f1dfjoow:hover:active .fui-Icon-filled{display:inline;}", ".f1j98vj9:hover:active .fui-Icon-regular{display:none;}", ".fj8yq94:hover:active .fui-Button__icon{color:var(--colorNeutralForeground2BrandPressed);}", ".f139oj5f:hover{color:var(--colorNeutralForeground2BrandHover);}", ".f1fg1p5m:hover:active{color:var(--colorNeutralForeground2BrandPressed);}"],
  m: [["@media (forced-colors: active){.f1rirnrt{background-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1uu00uk{border-top-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f9a0qzu{border-left-color:HighlightText;}.fkvaka8{border-right-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1ux7til{border-bottom-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1lkg8j3{color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fkc42ay{forced-color-adjust:none;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fq7113v:hover{background-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.ff1wgvm:hover{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1x4h75k:hover{border-left-color:Highlight;}.fiob0tu:hover{border-right-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1j6scgf:hover{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f4xjyn1:hover{color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fbgcvur:hover:active{background-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1ks1yx8:hover:active{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1o6qegi:hover:active{border-right-color:Highlight;}.fmxjhhp:hover:active{border-left-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fcnxywj:hover:active{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f9ddjv3:hover:active{color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1et0tmh:hover .fui-Button__icon{color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1wi8ngl:hover:active .fui-Button__icon{color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1tme0vf:hover{background-color:var(--colorTransparentBackground);}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f18onu3q:hover:active{background-color:var(--colorTransparentBackground);}}", {
    m: "(forced-colors: active)"
  }]]
}), xg = /* @__PURE__ */ J({
  base: {
    De3pzq: "f1bg9a2p",
    g2u3we: "f1jj8ep1",
    h3c5rm: ["f15xbau", "fy0fskl"],
    B9xav0g: "f4ikngz",
    zhjwy3: ["fy0fskl", "f15xbau"],
    sj55zd: "f1s2aq7o",
    Bceei9c: "fdrzuqr",
    Bfinmwp: "f15x8b5r",
    Jwef8y: "f1falr9n",
    Bgoe8wy: "f12mpcsy",
    Bwzppfd: ["f1gwvigk", "f18rmfxp"],
    oetu4i: "f1jnshp0",
    gg5e9n: ["f18rmfxp", "f1gwvigk"],
    Bi91k9c: "fvgxktp",
    eoavqd: "fphbwmw",
    Bk3fhr4: "f19vpps7",
    Bmfj8id: "fv5swzo",
    Bbdnnc7: "f1al02dq",
    iro3zm: "f1t6o4dc",
    b661bw: "f10ztigi",
    Bk6r4ia: ["f1ft5sdu", "f1gzf82w"],
    B9zn80p: "f12zbtn2",
    Bpld233: ["f1gzf82w", "f1ft5sdu"],
    B2d53fq: "fcvwxyo",
    c3iz72: "f8w4c43",
    em6i61: "f1ol4fw6",
    vm6p8p: "f1q1lw4e",
    x3br3k: "f1dwjv2g"
  },
  highContrast: {
    Bsw6fvg: "f4lkoma",
    Bjwas2f: "fg455y9",
    Bn1d65q: ["f1rvyvqg", "f14g86mu"],
    Bxeuatn: "f1cwzwz",
    n51gp8: ["f14g86mu", "f1rvyvqg"],
    Bbusuzp: "f1dcs8yz",
    G867l3: "fjwq6ea",
    gdbnj: ["f1lr3nhc", "f1mbxvi6"],
    mxns5l: "fn5gmvv",
    o3nasb: ["f1mbxvi6", "f1lr3nhc"],
    Bqrx1nm: "f1vmkb5g",
    pgvf35: "f53ppgq",
    Bh7lczh: ["f1663y11", "f80fkiy"],
    dpv3f4: "f18v5270",
    Bpnjhaq: ["f80fkiy", "f1663y11"],
    ze5xyy: "f1kc2mi9",
    g2kj27: "f1y0svfh",
    Bf756sw: "fihuait",
    Bow2dr7: ["fnxhupq", "fyd6l6x"],
    Bvhedfk: "fx507ft",
    Gye4lf: ["fyd6l6x", "fnxhupq"],
    pc6evw: "fb3rf2x"
  },
  outline: {
    De3pzq: "f1c21dwh",
    Jwef8y: "f9ql6rf",
    iro3zm: "f3h1zc4"
  },
  primary: {
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"]
  },
  secondary: {},
  subtle: {
    De3pzq: "f1c21dwh",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    Jwef8y: "f9ql6rf",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    iro3zm: "f3h1zc4",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"]
  },
  transparent: {
    De3pzq: "f1c21dwh",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    Jwef8y: "f9ql6rf",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    iro3zm: "f3h1zc4",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"]
  }
}, {
  d: [".f1bg9a2p{background-color:var(--colorNeutralBackgroundDisabled);}", ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}", ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".fdrzuqr{cursor:not-allowed;}", ".f15x8b5r .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f1p3nwhy{border-top-color:transparent;}", ".f11589ue{border-right-color:transparent;}", ".f1pdflbu{border-left-color:transparent;}", ".f1q5o8ev{border-bottom-color:transparent;}"],
  h: [".f1falr9n:hover{background-color:var(--colorNeutralBackgroundDisabled);}", ".f12mpcsy:hover{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f1gwvigk:hover{border-right-color:var(--colorNeutralStrokeDisabled);}", ".f18rmfxp:hover{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f1jnshp0:hover{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fvgxktp:hover{color:var(--colorNeutralForegroundDisabled);}", ".fphbwmw:hover{cursor:not-allowed;}", ".f19vpps7:hover .fui-Icon-filled{display:none;}", ".fv5swzo:hover .fui-Icon-regular{display:inline;}", ".f1al02dq:hover .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}", ".f1t6o4dc:hover:active{background-color:var(--colorNeutralBackgroundDisabled);}", ".f10ztigi:hover:active{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f1ft5sdu:hover:active{border-right-color:var(--colorNeutralStrokeDisabled);}", ".f1gzf82w:hover:active{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f12zbtn2:hover:active{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fcvwxyo:hover:active{color:var(--colorNeutralForegroundDisabled);}", ".f8w4c43:hover:active{cursor:not-allowed;}", ".f1ol4fw6:hover:active .fui-Icon-filled{display:none;}", ".f1q1lw4e:hover:active .fui-Icon-regular{display:inline;}", ".f1dwjv2g:hover:active .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}", ".f9ql6rf:hover{background-color:var(--colorTransparentBackground);}", ".f3h1zc4:hover:active{background-color:var(--colorTransparentBackground);}", ".f1s2uweq:hover{border-top-color:transparent;}", ".fr80ssc:hover{border-right-color:transparent;}", ".fecsdlb:hover{border-left-color:transparent;}", ".f1ukrpxl:hover{border-bottom-color:transparent;}", ".f1h0usnq:hover:active{border-top-color:transparent;}", ".fs4ktlq:hover:active{border-right-color:transparent;}", ".fx2bmrt:hover:active{border-left-color:transparent;}", ".f16h9ulv:hover:active{border-bottom-color:transparent;}"],
  m: [["@media (forced-colors: active){.f4lkoma{background-color:ButtonFace;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fg455y9{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f14g86mu{border-left-color:GrayText;}.f1rvyvqg{border-right-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1cwzwz{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1dcs8yz{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fjwq6ea:focus{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1lr3nhc:focus{border-right-color:GrayText;}.f1mbxvi6:focus{border-left-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fn5gmvv:focus{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1vmkb5g:hover{background-color:ButtonFace;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f53ppgq:hover{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1663y11:hover{border-right-color:GrayText;}.f80fkiy:hover{border-left-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f18v5270:hover{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1kc2mi9:hover{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1y0svfh:hover:active{background-color:ButtonFace;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fihuait:hover:active{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fnxhupq:hover:active{border-right-color:GrayText;}.fyd6l6x:hover:active{border-left-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fx507ft:hover:active{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fb3rf2x:hover:active{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }]]
}), Eg = /* @__PURE__ */ J({
  circular: {
    kdpuga: ["fanj13w", "f1gou5sz"],
    Bw81rd7: ["f1gou5sz", "fanj13w"],
    B6xbmo0: ["fulf6x3", "foeb2x"],
    dm238s: ["foeb2x", "fulf6x3"]
  },
  rounded: {},
  square: {
    kdpuga: ["f1ndz5i7", "f1co4qro"],
    Bw81rd7: ["f1co4qro", "f1ndz5i7"],
    B6xbmo0: ["f146y5a9", "f1k2ftg"],
    dm238s: ["f1k2ftg", "f146y5a9"]
  },
  primary: {
    B8q5s1w: "f17t0x8g",
    Bci5o5g: ["f194v5ow", "fk7jm04"],
    n8qw10: "f1qgg65p",
    Bdrgwmp: ["fk7jm04", "f194v5ow"],
    j6ew2k: ["fhgccpy", "fjo7pq6"],
    he4mth: "f32wu9k",
    Byr4aka: "fu5nqqq",
    lks7q5: ["f13prjl2", "f1nl83rv"],
    Bnan3qt: "f1czftr5",
    k1dn9: ["f1nl83rv", "f13prjl2"],
    Boium3a: ["f12k37oa", "fdnykm2"],
    tm8e47: "fr96u23"
  },
  small: {
    kdpuga: ["fg3gtdo", "fwii5mg"],
    Bw81rd7: ["fwii5mg", "fg3gtdo"],
    B6xbmo0: ["f1palphq", "f12nxie7"],
    dm238s: ["f12nxie7", "f1palphq"]
  },
  medium: {},
  large: {
    kdpuga: ["ft3lys4", "f1la4x2g"],
    Bw81rd7: ["f1la4x2g", "ft3lys4"],
    B6xbmo0: ["f156y0zm", "fakimq4"],
    dm238s: ["fakimq4", "f156y0zm"]
  }
}, {
  d: [".fanj13w[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusCircular);}", ".f1gou5sz[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusCircular);}", ".fulf6x3[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusCircular);}", ".foeb2x[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusCircular);}", ".f1ndz5i7[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusNone);}", ".f1co4qro[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusNone);}", ".f146y5a9[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusNone);}", ".f1k2ftg[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusNone);}", ".f17t0x8g[data-fui-focus-visible]{border-top-color:var(--colorStrokeFocus2);}", ".f194v5ow[data-fui-focus-visible]{border-right-color:var(--colorStrokeFocus2);}", ".fk7jm04[data-fui-focus-visible]{border-left-color:var(--colorStrokeFocus2);}", ".f1qgg65p[data-fui-focus-visible]{border-bottom-color:var(--colorStrokeFocus2);}", ".fhgccpy[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}", ".fjo7pq6[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}", ".f32wu9k[data-fui-focus-visible]:hover{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;}", ".fu5nqqq[data-fui-focus-visible]:hover{border-top-color:var(--colorStrokeFocus2);}", ".f13prjl2[data-fui-focus-visible]:hover{border-right-color:var(--colorStrokeFocus2);}", ".f1nl83rv[data-fui-focus-visible]:hover{border-left-color:var(--colorStrokeFocus2);}", ".f1czftr5[data-fui-focus-visible]:hover{border-bottom-color:var(--colorStrokeFocus2);}", ".fg3gtdo[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusSmall);}", ".fwii5mg[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusSmall);}", ".f1palphq[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusSmall);}", ".f12nxie7[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusSmall);}", ".ft3lys4[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusLarge);}", ".f1la4x2g[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusLarge);}", ".f156y0zm[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusLarge);}", ".fakimq4[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusLarge);}"],
  t: ["@supports (-moz-appearance:button){.f12k37oa[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}.fdnykm2[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}}", "@supports (-moz-appearance:button){.fr96u23[data-fui-focus-visible]:hover{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}"]
}), Sg = /* @__PURE__ */ J({
  small: {
    z8tnut: "f1sl3k7w",
    z189sj: ["f136y8j8", "f10xn8zz"],
    Byoj8tv: "f1brlhvm",
    uwmqm3: ["f10xn8zz", "f136y8j8"],
    Bf4jedk: "f17fgpbq",
    B2u0y6b: "f1jt17bm"
  },
  medium: {
    z8tnut: "f1sbtcvk",
    z189sj: ["fwiuce9", "f15vdbe4"],
    Byoj8tv: "fdghr9",
    uwmqm3: ["f15vdbe4", "fwiuce9"],
    Bf4jedk: "fwbmr0d",
    B2u0y6b: "f44c6la"
  },
  large: {
    z8tnut: "f1a1bwwz",
    z189sj: ["f18k1jr3", "f1rtp3s9"],
    Byoj8tv: "fy7v416",
    uwmqm3: ["f1rtp3s9", "f18k1jr3"],
    Bf4jedk: "f12clzc2",
    B2u0y6b: "fjy1crr"
  }
}, {
  d: [".f1sl3k7w{padding-top:1px;}", ".f136y8j8{padding-right:1px;}", ".f10xn8zz{padding-left:1px;}", ".f1brlhvm{padding-bottom:1px;}", ".f17fgpbq{min-width:24px;}", ".f1jt17bm{max-width:24px;}", ".f1sbtcvk{padding-top:5px;}", ".fwiuce9{padding-right:5px;}", ".f15vdbe4{padding-left:5px;}", ".fdghr9{padding-bottom:5px;}", ".fwbmr0d{min-width:32px;}", ".f44c6la{max-width:32px;}", ".f1a1bwwz{padding-top:7px;}", ".f18k1jr3{padding-right:7px;}", ".f1rtp3s9{padding-left:7px;}", ".fy7v416{padding-bottom:7px;}", ".f12clzc2{min-width:40px;}", ".fjy1crr{max-width:40px;}"]
}), Bg = /* @__PURE__ */ J({
  small: {
    Be2twd7: "fe5j1ua",
    Bqenvij: "fjamq6b",
    a9b677: "f64fuq3",
    Bqrlyyl: "fbaiahx"
  },
  medium: {},
  large: {
    Be2twd7: "f1rt2boy",
    Bqenvij: "frvgh55",
    a9b677: "fq4mcun",
    Bqrlyyl: "f1exjqw5"
  },
  before: {
    t21cq0: ["f1nizpg2", "f1a695kz"]
  },
  after: {
    Frg6f3: ["f1a695kz", "f1nizpg2"]
  }
}, {
  d: [".fe5j1ua{font-size:20px;}", ".fjamq6b{height:20px;}", ".f64fuq3{width:20px;}", ".fbaiahx{--fui-Button__icon--spacing:var(--spacingHorizontalXS);}", ".f1rt2boy{font-size:24px;}", ".frvgh55{height:24px;}", ".fq4mcun{width:24px;}", ".f1exjqw5{--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}", ".f1nizpg2{margin-right:var(--fui-Button__icon--spacing);}", ".f1a695kz{margin-left:var(--fui-Button__icon--spacing);}"]
}), Tg = (e) => {
  const t = yg(), r = wg(), o = kg(), n = xg(), i = Eg(), a = Sg(), s = Bg(), {
    appearance: l,
    disabled: c,
    disabledFocusable: u,
    icon: d,
    iconOnly: f,
    iconPosition: h,
    shape: v,
    size: p
  } = e;
  return e.root.className = K(
    Zs.root,
    t,
    l && o[l],
    o[p],
    d && p === "small" && o.smallWithIcon,
    d && p === "large" && o.largeWithIcon,
    o[v],
    // Disabled styles
    (c || u) && n.base,
    (c || u) && n.highContrast,
    l && (c || u) && n[l],
    // Focus styles
    l === "primary" && i.primary,
    i[p],
    i[v],
    // Icon-only styles
    f && a[p],
    // User provided class name
    e.root.className
  ), e.icon && (e.icon.className = K(Zs.icon, r, !!e.root.children && s[h], s[p], e.icon.className)), e;
}, Vt = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = _g(e, t);
  return Tg(r), Ae("useButtonStyles_unstable")(r), bg(r);
});
Vt.displayName = "Button";
const Ru = k.createContext(void 0), Ng = Ru.Provider, Og = () => k.useContext(Ru), Pg = (e) => {
  var t, r, o, n;
  const { generatedControlId: i, orientation: a, required: s, size: l, validationState: c } = e, u = (t = e.label) === null || t === void 0 ? void 0 : t.htmlFor, d = (r = e.label) === null || r === void 0 ? void 0 : r.id, f = (o = e.validationMessage) === null || o === void 0 ? void 0 : o.id, h = (n = e.hint) === null || n === void 0 ? void 0 : n.id;
  return {
    field: k.useMemo(() => ({
      generatedControlId: i,
      hintId: h,
      labelFor: u,
      labelId: d,
      orientation: a,
      required: s,
      size: l,
      validationMessageId: f,
      validationState: c
    }), [
      i,
      h,
      u,
      d,
      a,
      s,
      l,
      f,
      c
    ])
  };
};
function Du(e, t) {
  return zu(Og(), e, t);
}
function zu(e, t, r) {
  if (!e)
    return t;
  t = {
    ...t
  };
  const { generatedControlId: o, hintId: n, labelFor: i, labelId: a, required: s, validationMessageId: l, validationState: c } = e;
  if (o) {
    var u, d;
    (d = (u = t).id) !== null && d !== void 0 || (u.id = o);
  }
  if (a && (!(r != null && r.supportsLabelFor) || i !== t.id)) {
    var f, h, v;
    (v = (f = t)[h = "aria-labelledby"]) !== null && v !== void 0 || (f[h] = a);
  }
  if ((l || n) && (t["aria-describedby"] = [
    l,
    n,
    t == null ? void 0 : t["aria-describedby"]
  ].filter(Boolean).join(" ")), c === "error") {
    var p, g, b;
    (b = (p = t)[g = "aria-invalid"]) !== null && b !== void 0 || (p[g] = !0);
  }
  if (s)
    if (r != null && r.supportsRequired) {
      var y, m;
      (m = (y = t).required) !== null && m !== void 0 || (y.required = !0);
    } else {
      var w, _, E;
      (E = (w = t)[_ = "aria-required"]) !== null && E !== void 0 || (w[_] = !0);
    }
  if (r != null && r.supportsSize) {
    var S, C;
    (C = (S = t).size) !== null && C !== void 0 || (S.size = e.size);
  }
  return t;
}
const Cg = (e, t) => {
  Ee(e);
  let { children: r } = e;
  return typeof r == "function" && (r = r(zu(t.field) || {})), /* @__PURE__ */ Y(Ng, {
    value: t == null ? void 0 : t.field,
    children: /* @__PURE__ */ Ke(e.root, {
      children: [
        e.label && /* @__PURE__ */ Y(e.label, {}),
        r,
        e.validationMessage && /* @__PURE__ */ Ke(e.validationMessage, {
          children: [
            e.validationMessageIcon && /* @__PURE__ */ Y(e.validationMessageIcon, {}),
            e.validationMessage.children
          ]
        }),
        e.hint && /* @__PURE__ */ Y(e.hint, {})
      ]
    })
  });
}, Rg = (e, t) => {
  const { disabled: r = !1, required: o = !1, weight: n = "regular", size: i = "medium" } = e;
  return {
    disabled: r,
    required: Pe(o === !0 ? "*" : o || void 0, {
      defaultProps: {
        "aria-hidden": "true"
      },
      elementType: "span"
    }),
    weight: n,
    size: i,
    components: {
      root: "label",
      required: "span"
    },
    root: ye(ze("label", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLLabelElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      ...e
    }), {
      elementType: "label"
    })
  };
}, Dg = (e) => (Ee(e), /* @__PURE__ */ Ke(e.root, {
  children: [
    e.root.children,
    e.required && /* @__PURE__ */ Y(e.required, {})
  ]
})), el = {
  root: "fui-Label",
  required: "fui-Label__required"
}, zg = /* @__PURE__ */ J({
  root: {
    Bahqtrf: "fk6fouc",
    sj55zd: "f19n0e5"
  },
  disabled: {
    sj55zd: "f1s2aq7o",
    Bbusuzp: "f1dcs8yz"
  },
  required: {
    sj55zd: "f1whyuy6",
    uwmqm3: ["fruq291", "f7x41pl"]
  },
  small: {
    Be2twd7: "fy9rknc",
    Bg96gwp: "fwrc4pm"
  },
  medium: {
    Be2twd7: "fkhj508",
    Bg96gwp: "f1i3iumi"
  },
  large: {
    Be2twd7: "fod5ikn",
    Bg96gwp: "faaz57k",
    Bhrd7zp: "fl43uef"
  },
  semibold: {
    Bhrd7zp: "fl43uef"
  }
}, {
  d: [".fk6fouc{font-family:var(--fontFamilyBase);}", ".f19n0e5{color:var(--colorNeutralForeground1);}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".f1whyuy6{color:var(--colorPaletteRedForeground3);}", ".fruq291{padding-left:var(--spacingHorizontalXS);}", ".f7x41pl{padding-right:var(--spacingHorizontalXS);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}"],
  m: [["@media (forced-colors: active){.f1dcs8yz{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }]]
}), Ag = (e) => {
  const t = zg();
  return e.root.className = K(el.root, t.root, e.disabled && t.disabled, t[e.size], e.weight === "semibold" && t.semibold, e.root.className), e.required && (e.required.className = K(el.required, t.required, e.disabled && t.disabled, e.required.className)), e;
}, Xi = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = Rg(e, t);
  return Ag(r), Ae("useLabelStyles_unstable")(r), Dg(r);
});
Xi.displayName = "Label";
const Fg = {
  error: /* @__PURE__ */ k.createElement(bp, null),
  warning: /* @__PURE__ */ k.createElement(gp, null),
  success: /* @__PURE__ */ k.createElement(hp, null),
  none: void 0
}, jg = (e, t) => {
  const { children: r, orientation: o = "vertical", required: n = !1, validationState: i = e.validationMessage ? "error" : "none", size: a = "medium" } = e, s = Ta("field-"), l = s + "__control", c = ye(ze(
    "div",
    {
      ...e,
      ref: t
    },
    /*excludedPropNames:*/
    [
      "children"
    ]
  ), {
    elementType: "div"
  }), u = Pe(e.label, {
    defaultProps: {
      htmlFor: l,
      id: s + "__label",
      required: n,
      size: a
    },
    elementType: Xi
  }), d = Pe(e.validationMessage, {
    defaultProps: {
      id: s + "__validationMessage",
      role: i === "error" ? "alert" : void 0
    },
    elementType: "div"
  }), f = Pe(e.hint, {
    defaultProps: {
      id: s + "__hint"
    },
    elementType: "div"
  }), h = Fg[i], v = Pe(e.validationMessageIcon, {
    renderByDefault: !!h,
    defaultProps: {
      children: h
    },
    elementType: "span"
  });
  return {
    children: r,
    generatedControlId: l,
    orientation: o,
    required: n,
    size: a,
    validationState: i,
    components: {
      root: "div",
      label: Xi,
      validationMessage: "div",
      validationMessageIcon: "span",
      hint: "div"
    },
    root: c,
    label: u,
    validationMessageIcon: v,
    validationMessage: d,
    hint: f
  };
}, jr = {
  root: "fui-Field",
  label: "fui-Field__label",
  validationMessage: "fui-Field__validationMessage",
  validationMessageIcon: "fui-Field__validationMessageIcon",
  hint: "fui-Field__hint"
}, Ig = /* @__PURE__ */ J({
  base: {
    mc9l5x: "f13qh94s"
  },
  horizontal: {
    Budl1dq: "f2wwaib",
    wkccdc: "f1645dqt"
  },
  horizontalNoLabel: {
    uwmqm3: ["f15jqgz8", "fggqkej"],
    Budl1dq: "f1c2z91y"
  }
}, {
  d: [".f13qh94s{display:grid;}", ".f2wwaib{grid-template-columns:33% 1fr;}", ".f1645dqt{grid-template-rows:auto auto auto 1fr;}", ".f15jqgz8{padding-left:33%;}", ".fggqkej{padding-right:33%;}", ".f1c2z91y{grid-template-columns:1fr;}"]
}), Mg = /* @__PURE__ */ J({
  base: {
    z8tnut: "fclwglc",
    Byoj8tv: "fywfov9"
  },
  large: {
    z8tnut: "f1sl3k7w",
    Byoj8tv: "f1brlhvm"
  },
  vertical: {
    jrapky: "fyacil5"
  },
  verticalLarge: {
    jrapky: "f8l5zjj"
  },
  horizontal: {
    t21cq0: ["fkujibs", "f199hnxi"],
    Ijaq50: "f16hsg94",
    nk6f5a: "f1nzqi2z"
  }
}, {
  d: [".fclwglc{padding-top:var(--spacingVerticalXXS);}", ".fywfov9{padding-bottom:var(--spacingVerticalXXS);}", ".f1sl3k7w{padding-top:1px;}", ".f1brlhvm{padding-bottom:1px;}", ".fyacil5{margin-bottom:var(--spacingVerticalXXS);}", ".f8l5zjj{margin-bottom:var(--spacingVerticalXS);}", ".fkujibs{margin-right:var(--spacingHorizontalM);}", ".f199hnxi{margin-left:var(--spacingHorizontalM);}", ".f16hsg94{grid-row-start:1;}", ".f1nzqi2z{grid-row-end:-1;}"]
}), qg = /* @__PURE__ */ Ie("r5c4z9l", null, [".r5c4z9l{margin-top:var(--spacingVerticalXXS);color:var(--colorNeutralForeground3);font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase200);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase200);}"]), Lg = /* @__PURE__ */ J({
  error: {
    sj55zd: "f1hcrxcs"
  },
  withIcon: {
    uwmqm3: ["frawy03", "fg4c52"]
  }
}, {
  d: [".f1hcrxcs{color:var(--colorPaletteRedForeground1);}", ".frawy03{padding-left:calc(12px + var(--spacingHorizontalXS));}", ".fg4c52{padding-right:calc(12px + var(--spacingHorizontalXS));}"]
}), Vg = /* @__PURE__ */ Ie("ra7h1uk", "r1rh6bd7", [".ra7h1uk{display:inline-block;font-size:12px;margin-left:calc(-12px - var(--spacingHorizontalXS));margin-right:var(--spacingHorizontalXS);line-height:0;vertical-align:-1px;}", ".r1rh6bd7{display:inline-block;font-size:12px;margin-right:calc(-12px - var(--spacingHorizontalXS));margin-left:var(--spacingHorizontalXS);line-height:0;vertical-align:-1px;}"]), Hg = /* @__PURE__ */ J({
  error: {
    sj55zd: "f1hcrxcs"
  },
  warning: {
    sj55zd: "f1k5f75o"
  },
  success: {
    sj55zd: "ffmvakt"
  }
}, {
  d: [".f1hcrxcs{color:var(--colorPaletteRedForeground1);}", ".f1k5f75o{color:var(--colorPaletteDarkOrangeForeground1);}", ".ffmvakt{color:var(--colorPaletteGreenForeground1);}"]
}), $g = (e) => {
  const {
    validationState: t
  } = e, r = e.orientation === "horizontal", o = Ig();
  e.root.className = K(jr.root, o.base, r && o.horizontal, r && !e.label && o.horizontalNoLabel, e.root.className);
  const n = Mg();
  e.label && (e.label.className = K(jr.label, n.base, r && n.horizontal, !r && n.vertical, e.label.size === "large" && n.large, !r && e.label.size === "large" && n.verticalLarge, e.label.className));
  const i = Vg(), a = Hg();
  e.validationMessageIcon && (e.validationMessageIcon.className = K(jr.validationMessageIcon, i, t !== "none" && a[t], e.validationMessageIcon.className));
  const s = qg(), l = Lg();
  return e.validationMessage && (e.validationMessage.className = K(jr.validationMessage, s, t === "error" && l.error, !!e.validationMessageIcon && l.withIcon, e.validationMessage.className)), e.hint && (e.hint.className = K(jr.hint, s, e.hint.className)), e;
}, Yi = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = jg(e, t);
  $g(r);
  const o = Pg(r);
  return Cg(r, o);
});
Yi.displayName = "Field";
const Wg = (e, t) => {
  e = Du(e, {
    supportsLabelFor: !0,
    supportsRequired: !0,
    supportsSize: !0
  });
  const r = Yc();
  var o;
  const { size: n = "medium", appearance: i = (o = r.inputDefaultAppearance) !== null && o !== void 0 ? o : "outline", onChange: a } = e;
  process.env.NODE_ENV !== "production" && (i === "filled-darker-shadow" || i === "filled-lighter-shadow") && console.error("The 'filled-darker-shadow' and 'filled-lighter-shadow' appearances are deprecated and will be removed in the future.");
  const [s, l] = fo({
    state: e.value,
    defaultState: e.defaultValue,
    initialState: void 0
  }), c = Wc({
    props: e,
    primarySlotTagName: "input",
    excludedPropNames: [
      "size",
      "onChange",
      "value",
      "defaultValue"
    ]
  }), u = {
    size: n,
    appearance: i,
    components: {
      root: "span",
      input: "input",
      contentBefore: "span",
      contentAfter: "span"
    },
    input: ye(e.input, {
      defaultProps: {
        type: "text",
        ref: t,
        ...c.primary
      },
      elementType: "input"
    }),
    contentAfter: Pe(e.contentAfter, {
      elementType: "span"
    }),
    contentBefore: Pe(e.contentBefore, {
      elementType: "span"
    }),
    root: ye(e.root, {
      defaultProps: c.root,
      elementType: "span"
    })
  };
  return u.input.value = s, u.input.onChange = Pt((d) => {
    const f = d.target.value;
    a == null || a(d, {
      value: f
    }), l(f);
  }), u;
}, Ug = (e) => (Ee(e), /* @__PURE__ */ Ke(e.root, {
  children: [
    e.contentBefore && /* @__PURE__ */ Y(e.contentBefore, {}),
    /* @__PURE__ */ Y(e.input, {}),
    e.contentAfter && /* @__PURE__ */ Y(e.contentAfter, {})
  ]
})), Ro = {
  root: "fui-Input",
  input: "fui-Input__input",
  contentBefore: "fui-Input__contentBefore",
  contentAfter: "fui-Input__contentAfter"
}, Gg = /* @__PURE__ */ Ie("r1jtohuq", "rl1z2p5", {
  r: [".r1jtohuq{display:inline-flex;align-items:center;flex-wrap:nowrap;gap:var(--spacingHorizontalXXS);border-radius:var(--borderRadiusMedium);position:relative;box-sizing:border-box;min-height:32px;padding:0 var(--spacingHorizontalMNudge);font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);background-color:var(--colorNeutralBackground1);border:1px solid var(--colorNeutralStroke1);border-bottom-color:var(--colorNeutralStrokeAccessible);}", '.r1jtohuq::after{box-sizing:border-box;content:"";position:absolute;left:-1px;bottom:-1px;right:-1px;height:max(2px, var(--borderRadiusMedium));border-bottom-left-radius:var(--borderRadiusMedium);border-bottom-right-radius:var(--borderRadiusMedium);border-bottom:2px solid var(--colorCompoundBrandStroke);clip-path:inset(calc(100% - 2px) 0 0 0);transform:scaleX(0);transition-property:transform;transition-duration:var(--durationUltraFast);transition-delay:var(--curveAccelerateMid);}', ".r1jtohuq:focus-within::after{transform:scaleX(1);transition-property:transform;transition-duration:var(--durationNormal);transition-delay:var(--curveDecelerateMid);}", ".r1jtohuq:focus-within:active::after{border-bottom-color:var(--colorCompoundBrandStrokePressed);}", ".r1jtohuq:focus-within{outline:2px solid transparent;}", ".rl1z2p5{display:inline-flex;align-items:center;flex-wrap:nowrap;gap:var(--spacingHorizontalXXS);border-radius:var(--borderRadiusMedium);position:relative;box-sizing:border-box;min-height:32px;padding:0 var(--spacingHorizontalMNudge);font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);background-color:var(--colorNeutralBackground1);border:1px solid var(--colorNeutralStroke1);border-bottom-color:var(--colorNeutralStrokeAccessible);}", '.rl1z2p5::after{box-sizing:border-box;content:"";position:absolute;right:-1px;bottom:-1px;left:-1px;height:max(2px, var(--borderRadiusMedium));border-bottom-right-radius:var(--borderRadiusMedium);border-bottom-left-radius:var(--borderRadiusMedium);border-bottom:2px solid var(--colorCompoundBrandStroke);clip-path:inset(calc(100% - 2px) 0 0 0);transform:scaleX(0);transition-property:transform;transition-duration:var(--durationUltraFast);transition-delay:var(--curveAccelerateMid);}', ".rl1z2p5:focus-within::after{transform:scaleX(1);transition-property:transform;transition-duration:var(--durationNormal);transition-delay:var(--curveDecelerateMid);}", ".rl1z2p5:focus-within:active::after{border-bottom-color:var(--colorCompoundBrandStrokePressed);}", ".rl1z2p5:focus-within{outline:2px solid transparent;}"],
  s: ["@media screen and (prefers-reduced-motion: reduce){.r1jtohuq::after{transition-duration:0.01ms;transition-delay:0.01ms;}}", "@media screen and (prefers-reduced-motion: reduce){.r1jtohuq:focus-within::after{transition-duration:0.01ms;transition-delay:0.01ms;}}", "@media screen and (prefers-reduced-motion: reduce){.rl1z2p5::after{transition-duration:0.01ms;transition-delay:0.01ms;}}", "@media screen and (prefers-reduced-motion: reduce){.rl1z2p5:focus-within::after{transition-duration:0.01ms;transition-delay:0.01ms;}}"]
}), Kg = /* @__PURE__ */ J({
  small: {
    sshi5w: "f1pha7fy",
    uwmqm3: ["fk8j09s", "fdw0yi8"],
    z189sj: ["fdw0yi8", "fk8j09s"],
    Bahqtrf: "fk6fouc",
    Be2twd7: "fy9rknc",
    Bhrd7zp: "figsok6",
    Bg96gwp: "fwrc4pm"
  },
  medium: {},
  large: {
    sshi5w: "f1w5jphr",
    uwmqm3: ["f1uw59to", "fw5db7e"],
    z189sj: ["fw5db7e", "f1uw59to"],
    Bahqtrf: "fk6fouc",
    Be2twd7: "fod5ikn",
    Bhrd7zp: "figsok6",
    Bg96gwp: "faaz57k",
    i8kkvl: "f1rjii52",
    Belr9w4: "f1r7g2jn"
  },
  outline: {},
  outlineInteractive: {
    Bgoe8wy: "fvcxoqz",
    Bwzppfd: ["f1ub3y4t", "f1m52nbi"],
    oetu4i: "f1l4zc64",
    gg5e9n: ["f1m52nbi", "f1ub3y4t"],
    Drbcw7: "f8vnjqi",
    udz0bu: ["fz1etlk", "f1hc16gm"],
    Be8ivqh: "f1klwx88",
    ofdepl: ["f1hc16gm", "fz1etlk"]
  },
  underline: {
    De3pzq: "f1c21dwh",
    Bbmb7ep: ["f1krrbdw", "f1deotkl"],
    Beyfa6y: ["f1deotkl", "f1krrbdw"],
    B7oj6ja: ["f10ostut", "f1ozlkrg"],
    Btl43ni: ["f1ozlkrg", "f10ostut"],
    icvyot: "f1ern45e",
    vrafjx: ["f1n71otn", "f1deefiw"],
    wvpqe5: ["f1deefiw", "f1n71otn"],
    Eqx8gd: ["f1n6gb5g", "f15yvnhg"],
    B1piin3: ["f15yvnhg", "f1n6gb5g"]
  },
  underlineInteractive: {
    oetu4i: "f1l4zc64",
    Be8ivqh: "f1klwx88",
    B3778ie: ["f1nf3wye", "feulmo5"],
    d9w3h3: ["feulmo5", "f1nf3wye"],
    Bl18szs: ["f18vqdqu", "f53nyzz"],
    B4j8arr: ["f53nyzz", "f18vqdqu"]
  },
  filled: {
    g2u3we: "fghlq4f",
    h3c5rm: ["f1gn591s", "fjscplz"],
    B9xav0g: "fb073pr",
    zhjwy3: ["fjscplz", "f1gn591s"]
  },
  filledInteractive: {
    q7v0qe: "ftmjh5b",
    kmh5ft: ["f17blpuu", "fsrcdbj"],
    nagaa4: "f1tpwn32",
    B1yhkcb: ["fsrcdbj", "f17blpuu"]
  },
  invalid: {
    tvckwq: "fs4k3qj",
    gk2u95: ["fcee079", "fmyw78r"],
    hhx65j: "f1fgmyf4",
    Bxowmz0: ["fmyw78r", "fcee079"]
  },
  "filled-darker": {
    De3pzq: "f16xq7d1"
  },
  "filled-lighter": {
    De3pzq: "fxugw4r"
  },
  "filled-darker-shadow": {
    De3pzq: "f16xq7d1",
    E5pizo: "fyed02w"
  },
  "filled-lighter-shadow": {
    De3pzq: "fxugw4r",
    E5pizo: "fyed02w"
  },
  disabled: {
    Bceei9c: "fdrzuqr",
    De3pzq: "f1c21dwh",
    g2u3we: "f1jj8ep1",
    h3c5rm: ["f15xbau", "fy0fskl"],
    B9xav0g: "f4ikngz",
    zhjwy3: ["fy0fskl", "f15xbau"],
    Bjwas2f: "fg455y9",
    Bn1d65q: ["f1rvyvqg", "f14g86mu"],
    Bxeuatn: "f1cwzwz",
    n51gp8: ["f14g86mu", "f1rvyvqg"],
    Bsft5z2: "fhr9occ",
    Bduesf4: "f99w1ws"
  }
}, {
  d: [".f1pha7fy{min-height:24px;}", ".fk8j09s{padding-left:var(--spacingHorizontalSNudge);}", ".fdw0yi8{padding-right:var(--spacingHorizontalSNudge);}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".f1w5jphr{min-height:40px;}", ".f1uw59to{padding-left:var(--spacingHorizontalM);}", ".fw5db7e{padding-right:var(--spacingHorizontalM);}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".f1rjii52{column-gap:var(--spacingHorizontalSNudge);}", ".f1r7g2jn{row-gap:var(--spacingHorizontalSNudge);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f1krrbdw{border-bottom-right-radius:0;}", ".f1deotkl{border-bottom-left-radius:0;}", ".f10ostut{border-top-right-radius:0;}", ".f1ozlkrg{border-top-left-radius:0;}", ".f1ern45e{border-top-style:none;}", ".f1n71otn{border-right-style:none;}", ".f1deefiw{border-left-style:none;}", ".f1n6gb5g::after{left:0;}", ".f15yvnhg::after{right:0;}", ".f1nf3wye::after{border-bottom-right-radius:0;}", ".feulmo5::after{border-bottom-left-radius:0;}", ".f18vqdqu::after{border-top-right-radius:0;}", ".f53nyzz::after{border-top-left-radius:0;}", ".fghlq4f{border-top-color:var(--colorTransparentStroke);}", ".f1gn591s{border-right-color:var(--colorTransparentStroke);}", ".fjscplz{border-left-color:var(--colorTransparentStroke);}", ".fb073pr{border-bottom-color:var(--colorTransparentStroke);}", ".fs4k3qj:not(:focus-within),.fs4k3qj:hover:not(:focus-within){border-top-color:var(--colorPaletteRedBorder2);}", ".fcee079:not(:focus-within),.fcee079:hover:not(:focus-within){border-right-color:var(--colorPaletteRedBorder2);}", ".fmyw78r:not(:focus-within),.fmyw78r:hover:not(:focus-within){border-left-color:var(--colorPaletteRedBorder2);}", ".f1fgmyf4:not(:focus-within),.f1fgmyf4:hover:not(:focus-within){border-bottom-color:var(--colorPaletteRedBorder2);}", ".f16xq7d1{background-color:var(--colorNeutralBackground3);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".fyed02w{box-shadow:var(--shadow2);}", ".fdrzuqr{cursor:not-allowed;}", ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}", ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fhr9occ::after{content:unset;}"],
  h: [".fvcxoqz:hover{border-top-color:var(--colorNeutralStroke1Hover);}", ".f1ub3y4t:hover{border-right-color:var(--colorNeutralStroke1Hover);}", ".f1m52nbi:hover{border-left-color:var(--colorNeutralStroke1Hover);}", ".f1l4zc64:hover{border-bottom-color:var(--colorNeutralStrokeAccessibleHover);}", ".ftmjh5b:hover,.ftmjh5b:focus-within{border-top-color:var(--colorTransparentStrokeInteractive);}", ".f17blpuu:hover,.f17blpuu:focus-within{border-right-color:var(--colorTransparentStrokeInteractive);}", ".fsrcdbj:hover,.fsrcdbj:focus-within{border-left-color:var(--colorTransparentStrokeInteractive);}", ".f1tpwn32:hover,.f1tpwn32:focus-within{border-bottom-color:var(--colorTransparentStrokeInteractive);}"],
  a: [".f8vnjqi:active,.f8vnjqi:focus-within{border-top-color:var(--colorNeutralStroke1Pressed);}", ".fz1etlk:active,.fz1etlk:focus-within{border-right-color:var(--colorNeutralStroke1Pressed);}", ".f1hc16gm:active,.f1hc16gm:focus-within{border-left-color:var(--colorNeutralStroke1Pressed);}", ".f1klwx88:active,.f1klwx88:focus-within{border-bottom-color:var(--colorNeutralStrokeAccessiblePressed);}"],
  m: [["@media (forced-colors: active){.fg455y9{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f14g86mu{border-left-color:GrayText;}.f1rvyvqg{border-right-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1cwzwz{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }]],
  w: [".f99w1ws:focus-within{outline-style:none;}"]
}), Xg = /* @__PURE__ */ Ie("rvp2gzh", null, [".rvp2gzh{box-sizing:border-box;flex-grow:1;min-width:0;border-style:none;padding:0 var(--spacingHorizontalXXS);color:var(--colorNeutralForeground1);background-color:transparent;outline-style:none;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;}", ".rvp2gzh::-webkit-input-placeholder{color:var(--colorNeutralForeground4);opacity:1;}", ".rvp2gzh::-moz-placeholder{color:var(--colorNeutralForeground4);opacity:1;}", ".rvp2gzh:-ms-input-placeholder{color:var(--colorNeutralForeground4);opacity:1;}", ".rvp2gzh::placeholder{color:var(--colorNeutralForeground4);opacity:1;}"]), Yg = /* @__PURE__ */ J({
  large: {
    uwmqm3: ["fk8j09s", "fdw0yi8"],
    z189sj: ["fdw0yi8", "fk8j09s"]
  },
  disabled: {
    sj55zd: "f1s2aq7o",
    De3pzq: "f1c21dwh",
    Bceei9c: "fdrzuqr",
    yvdlaj: "fahhnxm"
  }
}, {
  d: [".fk8j09s{padding-left:var(--spacingHorizontalSNudge);}", ".fdw0yi8{padding-right:var(--spacingHorizontalSNudge);}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".fdrzuqr{cursor:not-allowed;}", ".fahhnxm::-webkit-input-placeholder{color:var(--colorNeutralForegroundDisabled);}", ".fahhnxm::-moz-placeholder{color:var(--colorNeutralForegroundDisabled);}"]
}), Jg = /* @__PURE__ */ Ie("r1572tok", null, [".r1572tok{box-sizing:border-box;color:var(--colorNeutralForeground3);display:flex;}", ".r1572tok>svg{font-size:20px;}"]), Qg = /* @__PURE__ */ J({
  disabled: {
    sj55zd: "f1s2aq7o"
  },
  small: {
    kwki1k: "f3u2cy0"
  },
  medium: {},
  large: {
    kwki1k: "fa420co"
  }
}, {
  d: [".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".f3u2cy0>svg{font-size:16px;}", ".fa420co>svg{font-size:24px;}"]
}), Zg = (e) => {
  const {
    size: t,
    appearance: r
  } = e, o = e.input.disabled, n = `${e.input["aria-invalid"]}` == "true", i = r.startsWith("filled"), a = Kg(), s = Yg(), l = Qg();
  e.root.className = K(Ro.root, Gg(), a[t], a[r], !o && r === "outline" && a.outlineInteractive, !o && r === "underline" && a.underlineInteractive, !o && i && a.filledInteractive, i && a.filled, !o && n && a.invalid, o && a.disabled, e.root.className), e.input.className = K(Ro.input, Xg(), t === "large" && s.large, o && s.disabled, e.input.className);
  const c = [Jg(), o && l.disabled, l[t]];
  return e.contentBefore && (e.contentBefore.className = K(Ro.contentBefore, ...c, e.contentBefore.className)), e.contentAfter && (e.contentAfter.className = K(Ro.contentAfter, ...c, e.contentAfter.className)), e;
}, Au = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = Wg(e, t);
  return Zg(r), Ae("useInputStyles_unstable")(r), Ug(r);
});
Au.displayName = "Input";
const em = (e) => (Ee(e), /* @__PURE__ */ Y(e.root, {
  children: /* @__PURE__ */ Y(e.textarea, {})
})), tm = (e, t) => {
  e = Du(e, {
    supportsLabelFor: !0,
    supportsRequired: !0,
    supportsSize: !0
  });
  const r = Yc();
  var o;
  const { size: n = "medium", appearance: i = (o = r.inputDefaultAppearance) !== null && o !== void 0 ? o : "outline", resize: a = "none", onChange: s } = e;
  process.env.NODE_ENV !== "production" && (i === "filled-darker-shadow" || i === "filled-lighter-shadow") && console.error("The 'filled-darker-shadow' and 'filled-lighter-shadow' appearances are deprecated and will be removed in the future.");
  const [l, c] = fo({
    state: e.value,
    defaultState: e.defaultValue,
    initialState: void 0
  }), u = Wc({
    props: e,
    primarySlotTagName: "textarea",
    excludedPropNames: [
      "onChange",
      "value",
      "defaultValue"
    ]
  }), d = {
    size: n,
    appearance: i,
    resize: a,
    components: {
      root: "span",
      textarea: "textarea"
    },
    textarea: ye(e.textarea, {
      defaultProps: {
        ref: t,
        ...u.primary
      },
      elementType: "textarea"
    }),
    root: ye(e.root, {
      defaultProps: u.root,
      elementType: "span"
    })
  };
  return d.textarea.value = l, d.textarea.onChange = Pt((f) => {
    const h = f.target.value;
    s == null || s(f, {
      value: h
    }), c(h);
  }), d;
}, tl = {
  root: "fui-Textarea",
  textarea: "fui-Textarea__textarea"
}, rm = /* @__PURE__ */ J({
  base: {
    mc9l5x: "ftuwxu6",
    B7ck84d: "f1ewtqcl",
    qhf8xq: "f10pi13n",
    z8tnut: "f1g0x7ka",
    z189sj: ["fhxju0i", "f1cnd47f"],
    Byoj8tv: "f1ean75l",
    uwmqm3: ["f1cnd47f", "fhxju0i"],
    B6of3ja: "f1hu3pq6",
    t21cq0: ["f11qmguv", "f1tyq0we"],
    jrapky: "f19f4twv",
    Frg6f3: ["f1tyq0we", "f11qmguv"],
    Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
    Beyfa6y: ["f16jpd5f", "f1aa9q02"],
    B7oj6ja: ["f1jar5jt", "fyu767a"],
    Btl43ni: ["fyu767a", "f1jar5jt"]
  },
  disabled: {
    De3pzq: "f1c21dwh",
    B4j52fo: "f192inf7",
    Bekrc4i: ["f5tn483", "f1ojsxk5"],
    Bn0qgzm: "f1vxd6vx",
    ibv6hh: ["f1ojsxk5", "f5tn483"],
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    g2u3we: "f1jj8ep1",
    h3c5rm: ["f15xbau", "fy0fskl"],
    B9xav0g: "f4ikngz",
    zhjwy3: ["fy0fskl", "f15xbau"],
    Bjwas2f: "fg455y9",
    Bn1d65q: ["f1rvyvqg", "f14g86mu"],
    Bxeuatn: "f1cwzwz",
    n51gp8: ["f14g86mu", "f1rvyvqg"]
  },
  interactive: {
    li1rpt: "f1gw3sf2",
    Bsft5z2: "f13zj6fq",
    E3zdtr: "f1mdlcz9",
    Eqx8gd: ["f1a7op3", "f1cjjd47"],
    By385i5: "f1gboi2j",
    B1piin3: ["f1cjjd47", "f1a7op3"],
    Dlnsje: "ffyw7fx",
    d9w3h3: ["f1kp91vd", "f1ibwz09"],
    B3778ie: ["f1ibwz09", "f1kp91vd"],
    Bcgy8vk: "f14pi962",
    Bw17bha: "f1lh990p",
    B1q35kw: "f1jc6hxc",
    Gjdm7m: "fj2g8qd",
    b1kco5: "f1yk9hq",
    Ba2ppi3: "fhwpy7i",
    F2fol1: "f14ee0xe",
    lck23g: "f1xhbsuh",
    df92cz: "fv8e3ye",
    I188md: "ftb5wc6",
    umuwi5: "fjw5xc1",
    Blcqepd: "f1xdyd5c",
    nplu4u: "fatpbeo",
    Bioka5o: "fb7uyps",
    H713fs: "f1cmft4k",
    B9ooomg: "f1x58t8o",
    Bercvud: "f1ibeo51",
    Bbr2w1p: "f1vnc8sk",
    Bduesf4: "f3e99gv",
    Bpq79vn: "fhljsf7"
  },
  filled: {
    B4j52fo: "f192inf7",
    Bekrc4i: ["f5tn483", "f1ojsxk5"],
    Bn0qgzm: "f1vxd6vx",
    ibv6hh: ["f1ojsxk5", "f5tn483"],
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    g2u3we: "fghlq4f",
    h3c5rm: ["f1gn591s", "fjscplz"],
    B9xav0g: "fb073pr",
    zhjwy3: ["fjscplz", "f1gn591s"],
    q7v0qe: "ftmjh5b",
    kmh5ft: ["f17blpuu", "fsrcdbj"],
    nagaa4: "f1tpwn32",
    B1yhkcb: ["fsrcdbj", "f17blpuu"]
  },
  "filled-darker": {
    De3pzq: "f16xq7d1"
  },
  "filled-lighter": {
    De3pzq: "fxugw4r"
  },
  "filled-darker-shadow": {
    De3pzq: "f16xq7d1",
    B4j52fo: "f192inf7",
    Bekrc4i: ["f5tn483", "f1ojsxk5"],
    Bn0qgzm: "f1vxd6vx",
    ibv6hh: ["f1ojsxk5", "f5tn483"],
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    g2u3we: "f1bh3yvw",
    h3c5rm: ["fmi79ni", "f11fozsx"],
    B9xav0g: "fnzw4c6",
    zhjwy3: ["f11fozsx", "fmi79ni"],
    E5pizo: "fyed02w"
  },
  "filled-lighter-shadow": {
    De3pzq: "fxugw4r",
    B4j52fo: "f192inf7",
    Bekrc4i: ["f5tn483", "f1ojsxk5"],
    Bn0qgzm: "f1vxd6vx",
    ibv6hh: ["f1ojsxk5", "f5tn483"],
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    g2u3we: "f1bh3yvw",
    h3c5rm: ["fmi79ni", "f11fozsx"],
    B9xav0g: "fnzw4c6",
    zhjwy3: ["f11fozsx", "fmi79ni"],
    E5pizo: "fyed02w"
  },
  outline: {
    De3pzq: "fxugw4r",
    B4j52fo: "f192inf7",
    Bekrc4i: ["f5tn483", "f1ojsxk5"],
    Bn0qgzm: "f1vxd6vx",
    ibv6hh: ["f1ojsxk5", "f5tn483"],
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    g2u3we: "fj3muxo",
    h3c5rm: ["f1akhkt", "f1lxtadh"],
    B9xav0g: "f1c1zstj",
    zhjwy3: ["f1lxtadh", "f1akhkt"]
  },
  outlineInteractive: {
    ckks6v: "f7ic3uo",
    B2zwrfe: ["f1omjgsz", "f1snvl17"],
    xv9156: "fn6xmsl",
    dt87k2: ["f1snvl17", "f1omjgsz"],
    Bf40cpq: "f1sn8sm0",
    Bop6t4b: ["f1wovo5e", "f716mnf"],
    gvrnp0: "fm0h710",
    Beu9t3s: ["f716mnf", "f1wovo5e"],
    Bgoe8wy: "fvcxoqz",
    Bwzppfd: ["f1ub3y4t", "f1m52nbi"],
    oetu4i: "f1l4zc64",
    gg5e9n: ["f1m52nbi", "f1ub3y4t"],
    uqwnxt: "fk7lb2a",
    Bvecx4l: ["f1knhbbd", "f17itt0b"],
    Bs0cc2w: "f15pjvi3",
    e1hlit: ["f17itt0b", "f1knhbbd"],
    e2sjt0: "f6ginmj",
    Bbcopvn: ["f1grcyuh", "fgzu20w"],
    Bj33j0h: "fk1xjsr",
    f7epvg: ["fgzu20w", "f1grcyuh"],
    B6oc9vd: "fvs00aa",
    ak43y8: ["f1assf6x", "f4ruux4"],
    wmxk5l: "f1z0osm6",
    B50zh58: ["f4ruux4", "f1assf6x"],
    Bbs6y8j: "fu7v4fk",
    rexu52: ["f1fnaxjy", "fwory1w"],
    B7pmvfx: "f7hodha",
    Belqbek: ["fwory1w", "f1fnaxjy"],
    Bawrxx6: "f8jkv7v",
    r7b1zc: ["f1f3jaeo", "fh8au0q"],
    Bt3ojkv: "f19usxel",
    t1ykpo: ["fh8au0q", "f1f3jaeo"],
    Bvq3b66: "f12oevn0",
    Brahy3i: ["fvdgz8d", "f1cq0lt5"],
    zoxjo1: "f1so894s",
    an54nd: ["f1cq0lt5", "fvdgz8d"]
  },
  invalid: {
    tvckwq: "fs4k3qj",
    gk2u95: ["fcee079", "fmyw78r"],
    hhx65j: "f1fgmyf4",
    Bxowmz0: ["fmyw78r", "fcee079"]
  }
}, {
  d: [".ftuwxu6{display:inline-flex;}", ".f1ewtqcl{box-sizing:border-box;}", ".f10pi13n{position:relative;}", ".f1g0x7ka{padding-top:0;}", ".fhxju0i{padding-right:0;}", ".f1cnd47f{padding-left:0;}", ".f1ean75l{padding-bottom:var(--strokeWidthThick);}", ".f1hu3pq6{margin-top:0;}", ".f11qmguv{margin-right:0;}", ".f1tyq0we{margin-left:0;}", ".f19f4twv{margin-bottom:0;}", ".f1aa9q02{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f16jpd5f{border-bottom-left-radius:var(--borderRadiusMedium);}", ".f1jar5jt{border-top-right-radius:var(--borderRadiusMedium);}", ".fyu767a{border-top-left-radius:var(--borderRadiusMedium);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f192inf7{border-top-width:var(--strokeWidthThin);}", ".f5tn483{border-right-width:var(--strokeWidthThin);}", ".f1ojsxk5{border-left-width:var(--strokeWidthThin);}", ".f1vxd6vx{border-bottom-width:var(--strokeWidthThin);}", ".fzkkow9{border-top-style:solid;}", ".fcdblym{border-right-style:solid;}", ".fjik90z{border-left-style:solid;}", ".fg706s2{border-bottom-style:solid;}", ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}", ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".f1gw3sf2::after{box-sizing:border-box;}", '.f13zj6fq::after{content:"";}', ".f1mdlcz9::after{position:absolute;}", ".f1a7op3::after{left:-1px;}", ".f1cjjd47::after{right:-1px;}", ".f1gboi2j::after{bottom:-1px;}", ".ffyw7fx::after{height:max(var(--strokeWidthThick), var(--borderRadiusMedium));}", ".f1kp91vd::after{border-bottom-left-radius:var(--borderRadiusMedium);}", ".f1ibwz09::after{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f14pi962::after{border-bottom-width:var(--strokeWidthThick);}", ".f1lh990p::after{border-bottom-style:solid;}", ".f1jc6hxc::after{border-bottom-color:var(--colorCompoundBrandStroke);}", ".fj2g8qd::after{clip-path:inset(calc(100% - var(--strokeWidthThick)) 0 0 0);}", ".f1yk9hq::after{transform:scaleX(0);}", ".fhwpy7i::after{transition-property:transform;}", ".f14ee0xe::after{transition-duration:var(--durationUltraFast);}", ".f1xhbsuh::after{transition-delay:var(--curveAccelerateMid);}", ".fghlq4f{border-top-color:var(--colorTransparentStroke);}", ".f1gn591s{border-right-color:var(--colorTransparentStroke);}", ".fjscplz{border-left-color:var(--colorTransparentStroke);}", ".fb073pr{border-bottom-color:var(--colorTransparentStroke);}", ".f16xq7d1{background-color:var(--colorNeutralBackground3);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f1bh3yvw{border-top-color:var(--colorTransparentStrokeInteractive);}", ".fmi79ni{border-right-color:var(--colorTransparentStrokeInteractive);}", ".f11fozsx{border-left-color:var(--colorTransparentStrokeInteractive);}", ".fnzw4c6{border-bottom-color:var(--colorTransparentStrokeInteractive);}", ".fyed02w{box-shadow:var(--shadow2);}", ".fj3muxo{border-top-color:var(--colorNeutralStroke1);}", ".f1akhkt{border-right-color:var(--colorNeutralStroke1);}", ".f1lxtadh{border-left-color:var(--colorNeutralStroke1);}", ".f1c1zstj{border-bottom-color:var(--colorNeutralStrokeAccessible);}", ".fs4k3qj:not(:focus-within),.fs4k3qj:hover:not(:focus-within){border-top-color:var(--colorPaletteRedBorder2);}", ".fcee079:not(:focus-within),.fcee079:hover:not(:focus-within){border-right-color:var(--colorPaletteRedBorder2);}", ".fmyw78r:not(:focus-within),.fmyw78r:hover:not(:focus-within){border-left-color:var(--colorPaletteRedBorder2);}", ".f1fgmyf4:not(:focus-within),.f1fgmyf4:hover:not(:focus-within){border-bottom-color:var(--colorPaletteRedBorder2);}"],
  m: [["@media (forced-colors: active){.fg455y9{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f14g86mu{border-left-color:GrayText;}.f1rvyvqg{border-right-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1cwzwz{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media screen and (prefers-reduced-motion: reduce){.fv8e3ye::after{transition-duration:0.01ms;}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }], ["@media screen and (prefers-reduced-motion: reduce){.ftb5wc6::after{transition-delay:0.01ms;}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }], ["@media screen and (prefers-reduced-motion: reduce){.f1cmft4k:focus-within::after{transition-duration:0.01ms;}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }], ["@media screen and (prefers-reduced-motion: reduce){.f1x58t8o:focus-within::after{transition-delay:0.01ms;}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }]],
  w: [".fjw5xc1:focus-within::after{transform:scaleX(1);}", ".f1xdyd5c:focus-within::after{transition-property:transform;}", ".fatpbeo:focus-within::after{transition-duration:var(--durationNormal);}", ".fb7uyps:focus-within::after{transition-delay:var(--curveDecelerateMid);}", ".f1ibeo51:focus-within:active::after{border-bottom-color:var(--colorCompoundBrandStrokePressed);}", ".f1vnc8sk:focus-within{outline-width:var(--strokeWidthThick);}", ".f3e99gv:focus-within{outline-style:solid;}", ".fhljsf7:focus-within{outline-color:transparent;}", ".fu7v4fk:focus-within{border-top-width:var(--strokeWidthThin);}", ".f1fnaxjy:focus-within{border-right-width:var(--strokeWidthThin);}", ".fwory1w:focus-within{border-left-width:var(--strokeWidthThin);}", ".f7hodha:focus-within{border-bottom-width:var(--strokeWidthThin);}", ".f8jkv7v:focus-within{border-top-style:solid;}", ".f1f3jaeo:focus-within{border-right-style:solid;}", ".fh8au0q:focus-within{border-left-style:solid;}", ".f19usxel:focus-within{border-bottom-style:solid;}", ".f12oevn0:focus-within{border-top-color:var(--colorNeutralStroke1);}", ".fvdgz8d:focus-within{border-right-color:var(--colorNeutralStroke1);}", ".f1cq0lt5:focus-within{border-left-color:var(--colorNeutralStroke1);}", ".f1so894s:focus-within{border-bottom-color:var(--colorCompoundBrandStroke);}"],
  h: [".ftmjh5b:hover,.ftmjh5b:focus-within{border-top-color:var(--colorTransparentStrokeInteractive);}", ".f17blpuu:hover,.f17blpuu:focus-within{border-right-color:var(--colorTransparentStrokeInteractive);}", ".fsrcdbj:hover,.fsrcdbj:focus-within{border-left-color:var(--colorTransparentStrokeInteractive);}", ".f1tpwn32:hover,.f1tpwn32:focus-within{border-bottom-color:var(--colorTransparentStrokeInteractive);}", ".f7ic3uo:hover{border-top-width:var(--strokeWidthThin);}", ".f1omjgsz:hover{border-right-width:var(--strokeWidthThin);}", ".f1snvl17:hover{border-left-width:var(--strokeWidthThin);}", ".fn6xmsl:hover{border-bottom-width:var(--strokeWidthThin);}", ".f1sn8sm0:hover{border-top-style:solid;}", ".f1wovo5e:hover{border-right-style:solid;}", ".f716mnf:hover{border-left-style:solid;}", ".fm0h710:hover{border-bottom-style:solid;}", ".fvcxoqz:hover{border-top-color:var(--colorNeutralStroke1Hover);}", ".f1ub3y4t:hover{border-right-color:var(--colorNeutralStroke1Hover);}", ".f1m52nbi:hover{border-left-color:var(--colorNeutralStroke1Hover);}", ".f1l4zc64:hover{border-bottom-color:var(--colorNeutralStrokeAccessibleHover);}"],
  a: [".fk7lb2a:active{border-top-width:var(--strokeWidthThin);}", ".f1knhbbd:active{border-right-width:var(--strokeWidthThin);}", ".f17itt0b:active{border-left-width:var(--strokeWidthThin);}", ".f15pjvi3:active{border-bottom-width:var(--strokeWidthThin);}", ".f6ginmj:active{border-top-style:solid;}", ".f1grcyuh:active{border-right-style:solid;}", ".fgzu20w:active{border-left-style:solid;}", ".fk1xjsr:active{border-bottom-style:solid;}", ".fvs00aa:active{border-top-color:var(--colorNeutralStroke1Pressed);}", ".f1assf6x:active{border-right-color:var(--colorNeutralStroke1Pressed);}", ".f4ruux4:active{border-left-color:var(--colorNeutralStroke1Pressed);}", ".f1z0osm6:active{border-bottom-color:var(--colorNeutralStrokeAccessiblePressed);}"]
}), om = /* @__PURE__ */ J({
  base: {
    icvyot: "f1ern45e",
    vrafjx: ["f1n71otn", "f1deefiw"],
    oivjwe: "f1h8hb77",
    wvpqe5: ["f1deefiw", "f1n71otn"],
    B6of3ja: "f1hu3pq6",
    t21cq0: ["f11qmguv", "f1tyq0we"],
    jrapky: "f19f4twv",
    Frg6f3: ["f1tyq0we", "f11qmguv"],
    De3pzq: "f3rmtva",
    B7ck84d: "f1ewtqcl",
    sj55zd: "f19n0e5",
    Bh6795r: "fqerorx",
    Bahqtrf: "fk6fouc",
    Bqenvij: "f1l02sjl",
    yvdlaj: "fwyc1cq",
    B3o7kgh: "f13ta7ih",
    B4brmom: "f1vw9udw",
    Brrnbx2: "fbb3kq8",
    oeaueh: "f1s6fcnf"
  },
  disabled: {
    sj55zd: "f1s2aq7o",
    Bceei9c: "fdrzuqr",
    yvdlaj: "fahhnxm"
  },
  small: {
    sshi5w: "f1w5jphr",
    z8tnut: "f1ywm7hm",
    z189sj: ["fqznh8f", "f1xile11"],
    Byoj8tv: "f14wxoun",
    uwmqm3: ["f1xile11", "fqznh8f"],
    Bxyxcbc: "f192z54u",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fy9rknc",
    Bhrd7zp: "figsok6",
    Bg96gwp: "fwrc4pm"
  },
  medium: {
    sshi5w: "fvmd9f",
    z8tnut: "fp2oml8",
    z189sj: ["f135dnwl", "f1e60jzv"],
    Byoj8tv: "f1tdddsa",
    uwmqm3: ["f1e60jzv", "f135dnwl"],
    Bxyxcbc: "f1if7ixc",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  },
  large: {
    sshi5w: "f1kfson",
    z8tnut: "f1kwiid1",
    z189sj: ["fcgl2c4", "f1anj20m"],
    Byoj8tv: "f5b47ha",
    uwmqm3: ["f1anj20m", "fcgl2c4"],
    Bxyxcbc: "f3kip1f",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fod5ikn",
    Bhrd7zp: "figsok6",
    Bg96gwp: "faaz57k"
  }
}, {
  d: [".f1ern45e{border-top-style:none;}", ".f1n71otn{border-right-style:none;}", ".f1deefiw{border-left-style:none;}", ".f1h8hb77{border-bottom-style:none;}", ".f1hu3pq6{margin-top:0;}", ".f11qmguv{margin-right:0;}", ".f1tyq0we{margin-left:0;}", ".f19f4twv{margin-bottom:0;}", ".f3rmtva{background-color:transparent;}", ".f1ewtqcl{box-sizing:border-box;}", ".f19n0e5{color:var(--colorNeutralForeground1);}", ".fqerorx{flex-grow:1;}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".f1l02sjl{height:100%;}", ".fwyc1cq::-webkit-input-placeholder{color:var(--colorNeutralForeground4);}", ".fwyc1cq::-moz-placeholder{color:var(--colorNeutralForeground4);}", ".f13ta7ih::-webkit-input-placeholder{opacity:1;}", ".f13ta7ih::-moz-placeholder{opacity:1;}", ".f1vw9udw::selection{color:var(--colorNeutralForegroundInverted);}", ".fbb3kq8::selection{background-color:var(--colorNeutralBackgroundInverted);}", ".f1s6fcnf{outline-style:none;}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".fdrzuqr{cursor:not-allowed;}", ".fahhnxm::-webkit-input-placeholder{color:var(--colorNeutralForegroundDisabled);}", ".fahhnxm::-moz-placeholder{color:var(--colorNeutralForegroundDisabled);}", ".f1w5jphr{min-height:40px;}", ".f1ywm7hm{padding-top:var(--spacingVerticalXS);}", ".fqznh8f{padding-right:calc(var(--spacingHorizontalSNudge) + var(--spacingHorizontalXXS));}", ".f1xile11{padding-left:calc(var(--spacingHorizontalSNudge) + var(--spacingHorizontalXXS));}", ".f14wxoun{padding-bottom:var(--spacingVerticalXS);}", ".f192z54u{max-height:200px;}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".fvmd9f{min-height:52px;}", ".fp2oml8{padding-top:var(--spacingVerticalSNudge);}", ".f135dnwl{padding-right:calc(var(--spacingHorizontalMNudge) + var(--spacingHorizontalXXS));}", ".f1e60jzv{padding-left:calc(var(--spacingHorizontalMNudge) + var(--spacingHorizontalXXS));}", ".f1tdddsa{padding-bottom:var(--spacingVerticalSNudge);}", ".f1if7ixc{max-height:260px;}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".f1kfson{min-height:64px;}", ".f1kwiid1{padding-top:var(--spacingVerticalS);}", ".fcgl2c4{padding-right:calc(var(--spacingHorizontalM) + var(--spacingHorizontalXXS));}", ".f1anj20m{padding-left:calc(var(--spacingHorizontalM) + var(--spacingHorizontalXXS));}", ".f5b47ha{padding-bottom:var(--spacingVerticalS);}", ".f3kip1f{max-height:320px;}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".faaz57k{line-height:var(--lineHeightBase400);}"]
}), nm = /* @__PURE__ */ J({
  none: {
    B3rzk8w: "f1o1s39h"
  },
  both: {
    B3rzk8w: "f1pxm0xe"
  },
  horizontal: {
    B3rzk8w: "fq6nmtn"
  },
  vertical: {
    B3rzk8w: "f1f5ktr4"
  }
}, {
  d: [".f1o1s39h{resize:none;}", ".f1pxm0xe{resize:both;}", ".fq6nmtn{resize:horizontal;}", ".f1f5ktr4{resize:vertical;}"]
}), im = (e) => {
  const {
    size: t,
    appearance: r,
    resize: o
  } = e, n = e.textarea.disabled, i = `${e.textarea["aria-invalid"]}` == "true", a = r.startsWith("filled"), s = rm();
  e.root.className = K(tl.root, s.base, n && s.disabled, !n && a && s.filled, !n && s[r], !n && s.interactive, !n && r === "outline" && s.outlineInteractive, !n && i && s.invalid, e.root.className);
  const l = om(), c = nm();
  return e.textarea.className = K(tl.textarea, l.base, l[t], c[o], n && l.disabled, e.textarea.className), e;
}, Fu = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = tm(e, t);
  return im(r), Ae("useTextareaStyles_unstable")(r), em(r);
});
Fu.displayName = "Textarea";
const Yt = "__fluentDisableScrollElement";
function am() {
  const { targetDocument: e } = dr();
  return zf(() => {
    if (e)
      return sm(e.body);
  }, [
    e
  ]);
}
function sm(e) {
  var t;
  const { clientWidth: r } = e.ownerDocument.documentElement;
  var o;
  const n = (o = (t = e.ownerDocument.defaultView) === null || t === void 0 ? void 0 : t.innerWidth) !== null && o !== void 0 ? o : 0;
  return lm(e), e[Yt].count === 0 && (e.style.overflow = "hidden", e.style.paddingRight = `${n - r}px`), e[Yt].count++, () => {
    e[Yt].count--, e[Yt].count === 0 && (e.style.overflow = e[Yt].previousOverflowStyle, e.style.paddingRight = e[Yt].previousPaddingRightStyle);
  };
}
function lm(e) {
  var t, r, o;
  (o = (t = e)[r = Yt]) !== null && o !== void 0 || (t[r] = {
    count: 0,
    previousOverflowStyle: e.style.overflow,
    previousPaddingRightStyle: e.style.paddingRight
  });
}
function cm(e, t) {
  const { findFirstFocusable: r } = Su(), { targetDocument: o } = dr(), n = k.useRef(null);
  return k.useEffect(() => {
    if (!e)
      return;
    const i = n.current && r(n.current);
    if (i)
      i.focus();
    else {
      var a;
      (a = n.current) === null || a === void 0 || a.focus(), process.env.NODE_ENV === "development" && console.warn("@fluentui/react-dialog [useFocusFirstElement]:\nA Dialog should have at least one focusable element inside DialogSurface.\nPlease add at least a close button either on `DialogTitle` action slot or inside `DialogActions`");
    }
  }, [
    r,
    e,
    t,
    o
  ]), n;
}
const um = {
  open: !1,
  inertTrapFocus: !1,
  modalType: "modal",
  isNestedDialog: !1,
  dialogRef: {
    current: null
  },
  requestOpenChange() {
  }
}, Ma = eg(void 0), dm = Ma.Provider, Tt = (e) => tg(Ma, (t = um) => e(t)), fm = !1, ju = tc(void 0), Iu = ju.Provider, vm = () => {
  var e;
  return (e = rc(ju)) !== null && e !== void 0 ? e : fm;
}, hm = (e) => {
  const { children: t, modalType: r = "modal", onOpenChange: o, inertTrapFocus: n = !1 } = e, [i, a] = pm(t), [s, l] = fo({
    state: e.open,
    defaultState: e.defaultOpen,
    initialState: !1
  }), c = Pt((p) => {
    o == null || o(p.event, p), p.event.isDefaultPrevented() || l(p.open);
  }), u = cm(s, r), d = am(), f = !!(s && r !== "non-modal");
  vo(() => {
    if (f)
      return d();
  }, [
    d,
    f
  ]);
  const { modalAttributes: h, triggerAttributes: v } = Ou({
    trapFocus: r !== "non-modal",
    legacyTrapFocus: !n
  });
  return {
    components: {
      backdrop: "div"
    },
    inertTrapFocus: n,
    open: s,
    modalType: r,
    content: a,
    trigger: i,
    requestOpenChange: c,
    dialogTitleId: Ta("dialog-title-"),
    isNestedDialog: og(Ma),
    dialogRef: u,
    modalAttributes: r !== "non-modal" ? h : void 0,
    triggerAttributes: v
  };
};
function pm(e) {
  const t = k.Children.toArray(e);
  switch (process.env.NODE_ENV !== "production" && t.length !== 1 && t.length !== 2 && console.warn(`@fluentui/react-dialog [useDialog]:
Dialog must contain at least one child <DialogSurface/>,
and at most two children <DialogTrigger/> <DialogSurface/> (in this order).`), t.length) {
    case 2:
      return t;
    case 1:
      return [
        void 0,
        t[0]
      ];
    default:
      return [
        void 0,
        void 0
      ];
  }
}
function bm(e, t) {
  if (e == null)
    return {};
  var r = {}, o = Object.keys(e), n, i;
  for (i = 0; i < o.length; i++)
    n = o[i], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
  return r;
}
function Ji(e, t) {
  return Ji = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, n) {
    return o.__proto__ = n, o;
  }, Ji(e, t);
}
function gm(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ji(e, t);
}
var Qi = { exports: {} }, Do = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rl;
function mm() {
  if (rl)
    return le;
  rl = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function m(_) {
    if (typeof _ == "object" && _ !== null) {
      var E = _.$$typeof;
      switch (E) {
        case t:
          switch (_ = _.type, _) {
            case l:
            case c:
            case o:
            case i:
            case n:
            case d:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case s:
                case u:
                case v:
                case h:
                case a:
                  return _;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function w(_) {
    return m(_) === c;
  }
  return le.AsyncMode = l, le.ConcurrentMode = c, le.ContextConsumer = s, le.ContextProvider = a, le.Element = t, le.ForwardRef = u, le.Fragment = o, le.Lazy = v, le.Memo = h, le.Portal = r, le.Profiler = i, le.StrictMode = n, le.Suspense = d, le.isAsyncMode = function(_) {
    return w(_) || m(_) === l;
  }, le.isConcurrentMode = w, le.isContextConsumer = function(_) {
    return m(_) === s;
  }, le.isContextProvider = function(_) {
    return m(_) === a;
  }, le.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, le.isForwardRef = function(_) {
    return m(_) === u;
  }, le.isFragment = function(_) {
    return m(_) === o;
  }, le.isLazy = function(_) {
    return m(_) === v;
  }, le.isMemo = function(_) {
    return m(_) === h;
  }, le.isPortal = function(_) {
    return m(_) === r;
  }, le.isProfiler = function(_) {
    return m(_) === i;
  }, le.isStrictMode = function(_) {
    return m(_) === n;
  }, le.isSuspense = function(_) {
    return m(_) === d;
  }, le.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === o || _ === c || _ === i || _ === n || _ === d || _ === f || typeof _ == "object" && _ !== null && (_.$$typeof === v || _.$$typeof === h || _.$$typeof === a || _.$$typeof === s || _.$$typeof === u || _.$$typeof === g || _.$$typeof === b || _.$$typeof === y || _.$$typeof === p);
  }, le.typeOf = m, le;
}
var ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ol;
function _m() {
  return ol || (ol = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function m(z) {
      return typeof z == "string" || typeof z == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      z === o || z === c || z === i || z === n || z === d || z === f || typeof z == "object" && z !== null && (z.$$typeof === v || z.$$typeof === h || z.$$typeof === a || z.$$typeof === s || z.$$typeof === u || z.$$typeof === g || z.$$typeof === b || z.$$typeof === y || z.$$typeof === p);
    }
    function w(z) {
      if (typeof z == "object" && z !== null) {
        var Re = z.$$typeof;
        switch (Re) {
          case t:
            var Ye = z.type;
            switch (Ye) {
              case l:
              case c:
              case o:
              case i:
              case n:
              case d:
                return Ye;
              default:
                var Ut = Ye && Ye.$$typeof;
                switch (Ut) {
                  case s:
                  case u:
                  case v:
                  case h:
                  case a:
                    return Ut;
                  default:
                    return Re;
                }
            }
          case r:
            return Re;
        }
      }
    }
    var _ = l, E = c, S = s, C = a, I = t, H = u, se = o, Be = v, R = h, ee = r, Ce = i, ue = n, be = d, D = !1;
    function L(z) {
      return D || (D = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(z) || w(z) === l;
    }
    function x(z) {
      return w(z) === c;
    }
    function P(z) {
      return w(z) === s;
    }
    function M(z) {
      return w(z) === a;
    }
    function V(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function q(z) {
      return w(z) === u;
    }
    function X(z) {
      return w(z) === o;
    }
    function $(z) {
      return w(z) === v;
    }
    function G(z) {
      return w(z) === h;
    }
    function te(z) {
      return w(z) === r;
    }
    function ie(z) {
      return w(z) === i;
    }
    function re(z) {
      return w(z) === n;
    }
    function F(z) {
      return w(z) === d;
    }
    ce.AsyncMode = _, ce.ConcurrentMode = E, ce.ContextConsumer = S, ce.ContextProvider = C, ce.Element = I, ce.ForwardRef = H, ce.Fragment = se, ce.Lazy = Be, ce.Memo = R, ce.Portal = ee, ce.Profiler = Ce, ce.StrictMode = ue, ce.Suspense = be, ce.isAsyncMode = L, ce.isConcurrentMode = x, ce.isContextConsumer = P, ce.isContextProvider = M, ce.isElement = V, ce.isForwardRef = q, ce.isFragment = X, ce.isLazy = $, ce.isMemo = G, ce.isPortal = te, ce.isProfiler = ie, ce.isStrictMode = re, ce.isSuspense = F, ce.isValidElementType = m, ce.typeOf = w;
  }()), ce;
}
var nl;
function Mu() {
  return nl || (nl = 1, process.env.NODE_ENV === "production" ? Do.exports = mm() : Do.exports = _m()), Do.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var di, il;
function ym() {
  if (il)
    return di;
  il = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function o(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function n() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(a).map(function(u) {
        return a[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return di = n() ? Object.assign : function(i, a) {
    for (var s, l = o(i), c, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var d in s)
        t.call(s, d) && (l[d] = s[d]);
      if (e) {
        c = e(s);
        for (var f = 0; f < c.length; f++)
          r.call(s, c[f]) && (l[c[f]] = s[c[f]]);
      }
    }
    return l;
  }, di;
}
var fi, al;
function qa() {
  if (al)
    return fi;
  al = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return fi = e, fi;
}
var vi, sl;
function qu() {
  return sl || (sl = 1, vi = Function.call.bind(Object.prototype.hasOwnProperty)), vi;
}
var hi, ll;
function wm() {
  if (ll)
    return hi;
  ll = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = qa(), r = {}, o = qu();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function n(i, a, s, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in i)
        if (o(i, u)) {
          var d;
          try {
            if (typeof i[u] != "function") {
              var f = Error(
                (l || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            d = i[u](a, u, l, s, null, t);
          } catch (v) {
            d = v;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var h = c ? c() : "";
            e(
              "Failed " + s + " type: " + d.message + (h ?? "")
            );
          }
        }
    }
  }
  return n.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, hi = n, hi;
}
var pi, cl;
function km() {
  if (cl)
    return pi;
  cl = 1;
  var e = Mu(), t = ym(), r = qa(), o = qu(), n = wm(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return pi = function(s, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(x) {
      var P = x && (c && x[c] || x[u]);
      if (typeof P == "function")
        return P;
    }
    var f = "<<anonymous>>", h = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: y(),
      arrayOf: m,
      element: w(),
      elementType: _(),
      instanceOf: E,
      node: H(),
      objectOf: C,
      oneOf: S,
      oneOfType: I,
      shape: Be,
      exact: R
    };
    function v(x, P) {
      return x === P ? x !== 0 || 1 / x === 1 / P : x !== x && P !== P;
    }
    function p(x, P) {
      this.message = x, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function g(x) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, M = 0;
      function V(X, $, G, te, ie, re, F) {
        if (te = te || f, re = re || G, F !== r) {
          if (l) {
            var z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw z.name = "Invariant Violation", z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Re = te + ":" + G;
            !P[Re] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + re + "` prop on `" + te + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[Re] = !0, M++);
          }
        }
        return $[G] == null ? X ? $[G] === null ? new p("The " + ie + " `" + re + "` is marked as required " + ("in `" + te + "`, but its value is `null`.")) : new p("The " + ie + " `" + re + "` is marked as required in " + ("`" + te + "`, but its value is `undefined`.")) : null : x($, G, te, ie, re);
      }
      var q = V.bind(null, !1);
      return q.isRequired = V.bind(null, !0), q;
    }
    function b(x) {
      function P(M, V, q, X, $, G) {
        var te = M[V], ie = ue(te);
        if (ie !== x) {
          var re = be(te);
          return new p(
            "Invalid " + X + " `" + $ + "` of type " + ("`" + re + "` supplied to `" + q + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return g(P);
    }
    function y() {
      return g(a);
    }
    function m(x) {
      function P(M, V, q, X, $) {
        if (typeof x != "function")
          return new p("Property `" + $ + "` of component `" + q + "` has invalid PropType notation inside arrayOf.");
        var G = M[V];
        if (!Array.isArray(G)) {
          var te = ue(G);
          return new p("Invalid " + X + " `" + $ + "` of type " + ("`" + te + "` supplied to `" + q + "`, expected an array."));
        }
        for (var ie = 0; ie < G.length; ie++) {
          var re = x(G, ie, q, X, $ + "[" + ie + "]", r);
          if (re instanceof Error)
            return re;
        }
        return null;
      }
      return g(P);
    }
    function w() {
      function x(P, M, V, q, X) {
        var $ = P[M];
        if (!s($)) {
          var G = ue($);
          return new p("Invalid " + q + " `" + X + "` of type " + ("`" + G + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(x);
    }
    function _() {
      function x(P, M, V, q, X) {
        var $ = P[M];
        if (!e.isValidElementType($)) {
          var G = ue($);
          return new p("Invalid " + q + " `" + X + "` of type " + ("`" + G + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(x);
    }
    function E(x) {
      function P(M, V, q, X, $) {
        if (!(M[V] instanceof x)) {
          var G = x.name || f, te = L(M[V]);
          return new p("Invalid " + X + " `" + $ + "` of type " + ("`" + te + "` supplied to `" + q + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return g(P);
    }
    function S(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function P(M, V, q, X, $) {
        for (var G = M[V], te = 0; te < x.length; te++)
          if (v(G, x[te]))
            return null;
        var ie = JSON.stringify(x, function(F, z) {
          var Re = be(z);
          return Re === "symbol" ? String(z) : z;
        });
        return new p("Invalid " + X + " `" + $ + "` of value `" + String(G) + "` " + ("supplied to `" + q + "`, expected one of " + ie + "."));
      }
      return g(P);
    }
    function C(x) {
      function P(M, V, q, X, $) {
        if (typeof x != "function")
          return new p("Property `" + $ + "` of component `" + q + "` has invalid PropType notation inside objectOf.");
        var G = M[V], te = ue(G);
        if (te !== "object")
          return new p("Invalid " + X + " `" + $ + "` of type " + ("`" + te + "` supplied to `" + q + "`, expected an object."));
        for (var ie in G)
          if (o(G, ie)) {
            var re = x(G, ie, q, X, $ + "." + ie, r);
            if (re instanceof Error)
              return re;
          }
        return null;
      }
      return g(P);
    }
    function I(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var P = 0; P < x.length; P++) {
        var M = x[P];
        if (typeof M != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + D(M) + " at index " + P + "."
          ), a;
      }
      function V(q, X, $, G, te) {
        for (var ie = [], re = 0; re < x.length; re++) {
          var F = x[re], z = F(q, X, $, G, te, r);
          if (z == null)
            return null;
          z.data && o(z.data, "expectedType") && ie.push(z.data.expectedType);
        }
        var Re = ie.length > 0 ? ", expected one of type [" + ie.join(", ") + "]" : "";
        return new p("Invalid " + G + " `" + te + "` supplied to " + ("`" + $ + "`" + Re + "."));
      }
      return g(V);
    }
    function H() {
      function x(P, M, V, q, X) {
        return ee(P[M]) ? null : new p("Invalid " + q + " `" + X + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return g(x);
    }
    function se(x, P, M, V, q) {
      return new p(
        (x || "React class") + ": " + P + " type `" + M + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + q + "`."
      );
    }
    function Be(x) {
      function P(M, V, q, X, $) {
        var G = M[V], te = ue(G);
        if (te !== "object")
          return new p("Invalid " + X + " `" + $ + "` of type `" + te + "` " + ("supplied to `" + q + "`, expected `object`."));
        for (var ie in x) {
          var re = x[ie];
          if (typeof re != "function")
            return se(q, X, $, ie, be(re));
          var F = re(G, ie, q, X, $ + "." + ie, r);
          if (F)
            return F;
        }
        return null;
      }
      return g(P);
    }
    function R(x) {
      function P(M, V, q, X, $) {
        var G = M[V], te = ue(G);
        if (te !== "object")
          return new p("Invalid " + X + " `" + $ + "` of type `" + te + "` " + ("supplied to `" + q + "`, expected `object`."));
        var ie = t({}, M[V], x);
        for (var re in ie) {
          var F = x[re];
          if (o(x, re) && typeof F != "function")
            return se(q, X, $, re, be(F));
          if (!F)
            return new p(
              "Invalid " + X + " `" + $ + "` key `" + re + "` supplied to `" + q + "`.\nBad object: " + JSON.stringify(M[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var z = F(G, re, q, X, $ + "." + re, r);
          if (z)
            return z;
        }
        return null;
      }
      return g(P);
    }
    function ee(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(ee);
          if (x === null || s(x))
            return !0;
          var P = d(x);
          if (P) {
            var M = P.call(x), V;
            if (P !== x.entries) {
              for (; !(V = M.next()).done; )
                if (!ee(V.value))
                  return !1;
            } else
              for (; !(V = M.next()).done; ) {
                var q = V.value;
                if (q && !ee(q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Ce(x, P) {
      return x === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function ue(x) {
      var P = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : Ce(P, x) ? "symbol" : P;
    }
    function be(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var P = ue(x);
      if (P === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function D(x) {
      var P = be(x);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function L(x) {
      return !x.constructor || !x.constructor.name ? f : x.constructor.name;
    }
    return h.checkPropTypes = n, h.resetWarningCache = n.resetWarningCache, h.PropTypes = h, h;
  }, pi;
}
var bi, ul;
function xm() {
  if (ul)
    return bi;
  ul = 1;
  var e = qa();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, bi = function() {
    function o(a, s, l, c, u, d) {
      if (d !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    o.isRequired = o;
    function n() {
      return o;
    }
    var i = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: n,
      element: o,
      elementType: o,
      instanceOf: n,
      node: o,
      objectOf: n,
      oneOf: n,
      oneOfType: n,
      shape: n,
      exact: n,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, bi;
}
if (process.env.NODE_ENV !== "production") {
  var Em = Mu(), Sm = !0;
  Qi.exports = km()(Em.isElement, Sm);
} else
  Qi.exports = xm()();
var Bm = Qi.exports;
const Q = /* @__PURE__ */ Zh(Bm), dl = {
  disabled: !1
};
var Tm = process.env.NODE_ENV !== "production" ? Q.oneOfType([Q.number, Q.shape({
  enter: Q.number,
  exit: Q.number,
  appear: Q.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && Q.oneOfType([Q.string, Q.shape({
  enter: Q.string,
  exit: Q.string,
  active: Q.string
}), Q.shape({
  enter: Q.string,
  enterDone: Q.string,
  enterActive: Q.string,
  exit: Q.string,
  exitDone: Q.string,
  exitActive: Q.string
})]);
const Lu = gt.createContext(null);
var Nm = function(t) {
  return t.scrollTop;
}, $r = "unmounted", Jt = "exited", Qt = "entering", gr = "entered", Zi = "exiting", Ft = /* @__PURE__ */ function(e) {
  gm(t, e);
  function t(o, n) {
    var i;
    i = e.call(this, o, n) || this;
    var a = n, s = a && !a.isMounting ? o.enter : o.appear, l;
    return i.appearStatus = null, o.in ? s ? (l = Jt, i.appearStatus = Qt) : l = gr : o.unmountOnExit || o.mountOnEnter ? l = $r : l = Jt, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(n, i) {
    var a = n.in;
    return a && i.status === $r ? {
      status: Jt
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(n) {
    var i = null;
    if (n !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Qt && a !== gr && (i = Qt) : (a === Qt || a === gr) && (i = Zi);
    }
    this.updateStatus(!1, i);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var n = this.props.timeout, i, a, s;
    return i = a = s = n, n != null && typeof n != "number" && (i = n.exit, a = n.enter, s = n.appear !== void 0 ? n.appear : a), {
      exit: i,
      enter: a,
      appear: s
    };
  }, r.updateStatus = function(n, i) {
    if (n === void 0 && (n = !1), i !== null)
      if (this.cancelNextCallback(), i === Qt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : To.findDOMNode(this);
          a && Nm(a);
        }
        this.performEnter(n);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Jt && this.setState({
        status: $r
      });
  }, r.performEnter = function(n) {
    var i = this, a = this.props.enter, s = this.context ? this.context.isMounting : n, l = this.props.nodeRef ? [s] : [To.findDOMNode(this), s], c = l[0], u = l[1], d = this.getTimeouts(), f = s ? d.appear : d.enter;
    if (!n && !a || dl.disabled) {
      this.safeSetState({
        status: gr
      }, function() {
        i.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, u), this.safeSetState({
      status: Qt
    }, function() {
      i.props.onEntering(c, u), i.onTransitionEnd(f, function() {
        i.safeSetState({
          status: gr
        }, function() {
          i.props.onEntered(c, u);
        });
      });
    });
  }, r.performExit = function() {
    var n = this, i = this.props.exit, a = this.getTimeouts(), s = this.props.nodeRef ? void 0 : To.findDOMNode(this);
    if (!i || dl.disabled) {
      this.safeSetState({
        status: Jt
      }, function() {
        n.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Zi
    }, function() {
      n.props.onExiting(s), n.onTransitionEnd(a.exit, function() {
        n.safeSetState({
          status: Jt
        }, function() {
          n.props.onExited(s);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(n, i) {
    i = this.setNextCallback(i), this.setState(n, i);
  }, r.setNextCallback = function(n) {
    var i = this, a = !0;
    return this.nextCallback = function(s) {
      a && (a = !1, i.nextCallback = null, n(s));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(n, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : To.findDOMNode(this), s = n == null && !this.props.addEndListener;
    if (!a || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], c = l[0], u = l[1];
      this.props.addEndListener(c, u);
    }
    n != null && setTimeout(this.nextCallback, n);
  }, r.render = function() {
    var n = this.state.status;
    if (n === $r)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var s = bm(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ gt.createElement(Lu.Provider, {
        value: null
      }, typeof a == "function" ? a(n, s) : gt.cloneElement(gt.Children.only(a), s))
    );
  }, t;
}(gt.Component);
Ft.contextType = Lu;
Ft.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: Q.shape({
    current: typeof Element > "u" ? Q.any : function(e, t, r, o, n, i) {
      var a = e[t];
      return Q.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, r, o, n, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: Q.oneOfType([Q.func.isRequired, Q.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: Q.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: Q.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: Q.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: Q.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: Q.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: Q.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var r = Tm;
    t.addEndListener || (r = r.isRequired);
    for (var o = arguments.length, n = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
      n[i - 1] = arguments[i];
    return r.apply(void 0, [t].concat(n));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: Q.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: Q.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: Q.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: Q.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: Q.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: Q.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: Q.func
} : {};
function br() {
}
Ft.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: br,
  onEntering: br,
  onEntered: br,
  onExit: br,
  onExiting: br,
  onExited: br
};
Ft.UNMOUNTED = $r;
Ft.EXITED = Jt;
Ft.ENTERING = Qt;
Ft.ENTERED = gr;
Ft.EXITING = Zi;
const Om = Ft, Pm = void 0, Vu = k.createContext(void 0), fl = Vu.Provider, Cm = () => {
  var e;
  return (e = k.useContext(Vu)) !== null && e !== void 0 ? e : Pm;
}, Rm = (e, t) => {
  const { content: r, trigger: o } = e;
  return /* @__PURE__ */ Y(dm, {
    value: t.dialog,
    children: /* @__PURE__ */ Ke(Iu, {
      value: t.dialogSurface,
      children: [
        o,
        process.env.NODE_ENV === "test" ? e.open && /* @__PURE__ */ Y(fl, {
          value: void 0,
          children: r
        }) : /* @__PURE__ */ Y(Om, {
          mountOnEnter: !0,
          unmountOnExit: !0,
          in: e.open,
          nodeRef: e.dialogRef,
          appear: !0,
          // FIXME: this should not be hardcoded tokens.durationGentle
          timeout: 250,
          children: (n) => /* @__PURE__ */ Y(fl, {
            value: n,
            children: r
          })
        })
      ]
    })
  });
};
function Dm(e) {
  const { modalType: t, open: r, dialogRef: o, dialogTitleId: n, isNestedDialog: i, inertTrapFocus: a, requestOpenChange: s, modalAttributes: l, triggerAttributes: c } = e;
  return {
    dialog: {
      open: r,
      modalType: t,
      dialogRef: o,
      dialogTitleId: n,
      isNestedDialog: i,
      inertTrapFocus: a,
      modalAttributes: l,
      triggerAttributes: c,
      requestOpenChange: s
    },
    dialogSurface: !1
  };
}
const Hu = /* @__PURE__ */ k.memo((e) => {
  const t = hm(e), r = Dm(t);
  return Rm(t, r);
});
Hu.displayName = "Dialog";
const zm = (e) => {
  const t = vm(), { children: r, disableButtonEnhancement: o = !1, action: n = t ? "close" : "open" } = e, i = tu(r), a = Tt((d) => d.requestOpenChange), { triggerAttributes: s } = Ou(), l = Pt((d) => {
    var f, h;
    i == null || (f = (h = i.props).onClick) === null || f === void 0 || f.call(h, d), d.isDefaultPrevented() || a({
      event: d,
      type: "triggerClick",
      open: n === "open"
    });
  }), c = {
    ...i == null ? void 0 : i.props,
    ref: i == null ? void 0 : i.ref,
    onClick: l,
    ...s
  }, u = ja((i == null ? void 0 : i.type) === "button" || (i == null ? void 0 : i.type) === "a" ? i.type : "div", {
    ...c,
    type: "button"
  });
  return {
    children: Kh(r, o ? c : u)
  };
}, Am = (e) => e.children, Cn = (e) => {
  const t = zm(e);
  return Am(t);
};
Cn.displayName = "DialogTrigger";
Cn.isFluentTriggerComponent = !0;
const Fm = (e, t) => {
  const { position: r = "end", fluid: o = !1 } = e;
  return {
    components: {
      root: "div"
    },
    root: ye(ze("div", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      ...e
    }), {
      elementType: "div"
    }),
    position: r,
    fluid: o
  };
}, jm = (e) => (Ee(e), /* @__PURE__ */ Y(e.root, {})), Im = {
  root: "fui-DialogActions"
}, Mm = /* @__PURE__ */ Ie("r78gbj", null, {
  r: [".r78gbj{column-gap:8px;row-gap:8px;height:fit-content;box-sizing:border-box;display:flex;grid-row-start:3;grid-row-end:3;}"],
  s: ["@media screen and (max-width: 480px){.r78gbj{flex-direction:column;justify-self:stretch;}}"]
}), qm = /* @__PURE__ */ J({
  gridPositionEnd: {
    Bdqf98w: "f1a7i8kp",
    Br312pm: "fd46tj4",
    Bw0ie65: "fsyjsko",
    B6n781s: "f1f41i0t",
    Bv5d0be: "f1jaqex3",
    v4ugfu: "f2ao6jk"
  },
  gridPositionStart: {
    Bdqf98w: "fsxvdwy",
    Br312pm: "fwpfdsa",
    Bw0ie65: "f1e2fz10",
    Bojbm9c: "f11ihkml",
    Bv5d0be: "fce5bvx",
    v4ugfu: "f2ao6jk"
  },
  fluidStart: {
    Bw0ie65: "fsyjsko"
  },
  fluidEnd: {
    Br312pm: "fwpfdsa"
  }
}, {
  d: [".f1a7i8kp{justify-self:end;}", ".fd46tj4{grid-column-start:2;}", ".fsyjsko{grid-column-end:4;}", ".fsxvdwy{justify-self:start;}", ".fwpfdsa{grid-column-start:1;}", ".f1e2fz10{grid-column-end:2;}"],
  m: [["@media screen and (max-width: 480px){.f1f41i0t{grid-column-start:1;}}", {
    m: "screen and (max-width: 480px)"
  }], ["@media screen and (max-width: 480px){.f1jaqex3{grid-row-start:4;}}", {
    m: "screen and (max-width: 480px)"
  }], ["@media screen and (max-width: 480px){.f2ao6jk{grid-row-end:auto;}}", {
    m: "screen and (max-width: 480px)"
  }], ["@media screen and (max-width: 480px){.f11ihkml{grid-column-end:4;}}", {
    m: "screen and (max-width: 480px)"
  }], ["@media screen and (max-width: 480px){.fce5bvx{grid-row-start:3;}}", {
    m: "screen and (max-width: 480px)"
  }]]
}), Lm = (e) => {
  const t = Mm(), r = qm();
  return e.root.className = K(Im.root, t, e.position === "start" && r.gridPositionStart, e.position === "end" && r.gridPositionEnd, e.fluid && e.position === "start" && r.fluidStart, e.fluid && e.position === "end" && r.fluidEnd, e.root.className), e;
}, $u = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = Fm(e, t);
  return Lm(r), Ae("useDialogActionsStyles_unstable")(r), jm(r);
});
$u.displayName = "DialogActions";
const Vm = (e, t) => {
  var r;
  return {
    components: {
      root: "div"
    },
    root: ye(ze((r = e.as) !== null && r !== void 0 ? r : "div", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      ...e
    }), {
      elementType: "div"
    })
  };
}, Hm = (e) => (Ee(e), /* @__PURE__ */ Y(e.root, {})), $m = {
  root: "fui-DialogBody"
}, Wm = /* @__PURE__ */ Ie("r71plkv", null, {
  r: [".r71plkv{overflow-x:unset;overflow-y:unset;column-gap:8px;row-gap:8px;display:grid;max-height:calc(100vh - 2 * 24px);box-sizing:border-box;grid-template-rows:auto 1fr;grid-template-columns:1fr 1fr auto;}"],
  s: ["@media screen and (max-width: 480px){.r71plkv{max-width:100vw;grid-template-rows:auto 1fr auto;}}"]
}), Um = (e) => {
  const t = Wm();
  return e.root.className = K($m.root, t, e.root.className), e;
}, Wu = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = Vm(e, t);
  return Um(r), Ae("useDialogBodyStyles_unstable")(r), Hm(r);
});
Wu.displayName = "DialogBody";
const vl = {
  root: "fui-DialogTitle",
  action: "fui-DialogTitle__action"
}, Gm = /* @__PURE__ */ Ie("rztv7rx", "rt0yqbx", [".rztv7rx{font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase500);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase500);margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;grid-row-start:1;grid-row-end:1;grid-column-start:1;grid-column-end:3;}", ".rt0yqbx{font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase500);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase500);margin-top:0;margin-left:0;margin-bottom:0;margin-right:0;grid-row-start:1;grid-row-end:1;grid-column-start:1;grid-column-end:3;}"]), Km = /* @__PURE__ */ J({
  rootWithoutAction: {
    Bw0ie65: "fsyjsko"
  }
}, {
  d: [".fsyjsko{grid-column-end:4;}"]
}), Xm = /* @__PURE__ */ Ie("r13kcrze", null, [".r13kcrze{grid-row-start:1;grid-row-end:1;grid-column-start:3;justify-self:end;align-self:start;}"]), Ym = /* @__PURE__ */ Ie("r51tj", "rgre5d", {
  r: [".r51tj{overflow-x:visible;overflow-y:visible;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;position:relative;box-sizing:content-box;background-color:inherit;color:inherit;font-family:inherit;font-size:inherit;cursor:pointer;line-height:0;-webkit-appearance:button;text-align:unset;}", ".r51tj:focus{outline-style:none;}", ".r51tj:focus-visible{outline-style:none;}", ".r51tj[data-fui-focus-visible]{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;}", '.r51tj[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;border-bottom-right-radius:var(--borderRadiusMedium);border-bottom-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);top:calc(2px * -1);right:calc(2px * -1);bottom:calc(2px * -1);left:calc(2px * -1);}', ".rgre5d{overflow-x:visible;overflow-y:visible;padding-top:0;padding-left:0;padding-bottom:0;padding-right:0;border-top-style:none;border-left-style:none;border-bottom-style:none;border-right-style:none;position:relative;box-sizing:content-box;background-color:inherit;color:inherit;font-family:inherit;font-size:inherit;cursor:pointer;line-height:0;-webkit-appearance:button;text-align:unset;}", ".rgre5d:focus{outline-style:none;}", ".rgre5d:focus-visible{outline-style:none;}", ".rgre5d[data-fui-focus-visible]{border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;}", '.rgre5d[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-left-style:solid;border-bottom-style:solid;border-right-style:solid;border-top-width:2px;border-left-width:2px;border-bottom-width:2px;border-right-width:2px;border-bottom-left-radius:var(--borderRadiusMedium);border-bottom-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);top:calc(2px * -1);left:calc(2px * -1);bottom:calc(2px * -1);right:calc(2px * -1);}'],
  s: ["@media (forced-colors: active){.r51tj[data-fui-focus-visible]::after{border-top-color:Highlight;border-right-color:Highlight;border-bottom-color:Highlight;border-left-color:Highlight;}}", "@media (forced-colors: active){.rgre5d[data-fui-focus-visible]::after{border-top-color:Highlight;border-left-color:Highlight;border-bottom-color:Highlight;border-right-color:Highlight;}}"]
}), Jm = (e) => {
  const t = Gm(), r = Xm(), o = Km();
  return e.root.className = K(vl.root, t, !e.action && o.rootWithoutAction, e.root.className), e.action && (e.action.className = K(vl.action, r, e.action.className)), e;
}, Qm = (e, t) => {
  const { action: r } = e, o = Tt((i) => i.modalType), n = Ym();
  return {
    components: {
      root: "h2",
      action: "div"
    },
    root: ye(ze("h2", {
      ref: t,
      id: Tt((i) => i.dialogTitleId),
      ...e
    }), {
      elementType: "h2"
    }),
    action: Pe(r, {
      renderByDefault: o === "non-modal",
      defaultProps: {
        children: /* @__PURE__ */ k.createElement(Cn, {
          disableButtonEnhancement: !0,
          action: "close"
        }, /* @__PURE__ */ k.createElement("button", {
          type: "button",
          className: n,
          // TODO: find a better way to add internal labels
          "aria-label": "close"
        }, /* @__PURE__ */ k.createElement(pp, null)))
      },
      elementType: "div"
    })
  };
}, Zm = (e) => (Ee(e), /* @__PURE__ */ Ke(Af, {
  children: [
    /* @__PURE__ */ Y(e.root, {
      children: e.root.children
    }),
    e.action && /* @__PURE__ */ Y(e.action, {})
  ]
})), Uu = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = Qm(e, t);
  return Jm(r), Ae("useDialogTitleStyles_unstable")(r), Zm(r);
});
Uu.displayName = "DialogTitle";
const e_ = (e, t) => {
  const r = Tt((f) => f.modalType), o = Tt((f) => f.isNestedDialog), n = Cm(), i = Tt((f) => f.modalAttributes), a = Tt((f) => f.dialogRef), s = Tt((f) => f.requestOpenChange), l = Tt((f) => f.dialogTitleId), c = Pt((f) => {
    if (lh(e.backdrop)) {
      var h, v;
      (h = (v = e.backdrop).onClick) === null || h === void 0 || h.call(v, f);
    }
    r === "modal" && !f.isDefaultPrevented() && s({
      event: f,
      open: !1,
      type: "backdropClick"
    });
  }), u = Pt((f) => {
    var h;
    (h = e.onKeyDown) === null || h === void 0 || h.call(e, f), f.key === ng && !f.isDefaultPrevented() && (s({
      event: f,
      open: !1,
      type: "escapeKeyDown"
    }), f.preventDefault());
  }), d = Pe(e.backdrop, {
    renderByDefault: r !== "non-modal",
    defaultProps: {
      "aria-hidden": "true"
    },
    elementType: "div"
  });
  return d && (d.onClick = c), {
    components: {
      backdrop: "div",
      root: "div"
    },
    backdrop: d,
    isNestedDialog: o,
    transitionStatus: n,
    mountNode: e.mountNode,
    root: ye(ze("div", {
      tabIndex: -1,
      "aria-modal": r !== "non-modal",
      role: r === "alert" ? "alertdialog" : "dialog",
      "aria-labelledby": e["aria-label"] ? void 0 : l,
      ...e,
      ...i,
      onKeyDown: u,
      // FIXME:
      // `DialogSurfaceElement` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: On(t, a)
    }), {
      elementType: "div"
    })
  };
}, t_ = (e, t) => (Ee(e), /* @__PURE__ */ Ke(Pu, {
  mountNode: e.mountNode,
  children: [
    e.backdrop && /* @__PURE__ */ Y(e.backdrop, {}),
    /* @__PURE__ */ Y(Iu, {
      value: t.dialogSurface,
      children: /* @__PURE__ */ Y(e.root, {})
    })
  ]
})), hl = {
  root: "fui-DialogSurface",
  backdrop: "fui-DialogSurface__backdrop"
}, r_ = /* @__PURE__ */ Ie("rhhzfde", "r1n1tr5u", {
  r: [".rhhzfde{top:0;right:0;bottom:0;left:0;padding-top:24px;padding-right:24px;padding-bottom:24px;padding-left:24px;margin-top:auto;margin-right:auto;margin-bottom:auto;margin-left:auto;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;overflow-x:unset;overflow-y:unset;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-color:var(--colorTransparentStroke);border-right-color:var(--colorTransparentStroke);border-bottom-color:var(--colorTransparentStroke);border-left-color:var(--colorTransparentStroke);border-bottom-right-radius:var(--borderRadiusXLarge);border-bottom-left-radius:var(--borderRadiusXLarge);border-top-right-radius:var(--borderRadiusXLarge);border-top-left-radius:var(--borderRadiusXLarge);display:block;-webkit-user-select:unset;-moz-user-select:unset;-ms-user-select:unset;user-select:unset;visibility:unset;position:fixed;height:fit-content;max-width:600px;max-height:100vh;box-sizing:border-box;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);}", ".rhhzfde:focus{outline-style:none;}", ".rhhzfde:focus-visible{outline-style:none;}", ".rhhzfde[data-fui-focus-visible]{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;}", '.rhhzfde[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;border-bottom-right-radius:var(--borderRadiusMedium);border-bottom-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);top:calc(2px * -1);right:calc(2px * -1);bottom:calc(2px * -1);left:calc(2px * -1);}', ".r1n1tr5u{top:0;left:0;bottom:0;right:0;padding-top:24px;padding-left:24px;padding-bottom:24px;padding-right:24px;margin-top:auto;margin-left:auto;margin-bottom:auto;margin-right:auto;border-top-style:solid;border-left-style:solid;border-bottom-style:solid;border-right-style:solid;overflow-x:unset;overflow-y:unset;border-top-width:1px;border-left-width:1px;border-bottom-width:1px;border-right-width:1px;border-top-color:var(--colorTransparentStroke);border-left-color:var(--colorTransparentStroke);border-bottom-color:var(--colorTransparentStroke);border-right-color:var(--colorTransparentStroke);border-bottom-left-radius:var(--borderRadiusXLarge);border-bottom-right-radius:var(--borderRadiusXLarge);border-top-left-radius:var(--borderRadiusXLarge);border-top-right-radius:var(--borderRadiusXLarge);display:block;-webkit-user-select:unset;-moz-user-select:unset;-ms-user-select:unset;user-select:unset;visibility:unset;position:fixed;height:fit-content;max-width:600px;max-height:100vh;box-sizing:border-box;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);}", ".r1n1tr5u:focus{outline-style:none;}", ".r1n1tr5u:focus-visible{outline-style:none;}", ".r1n1tr5u[data-fui-focus-visible]{border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;}", '.r1n1tr5u[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-left-style:solid;border-bottom-style:solid;border-right-style:solid;border-top-width:2px;border-left-width:2px;border-bottom-width:2px;border-right-width:2px;border-bottom-left-radius:var(--borderRadiusMedium);border-bottom-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);top:calc(2px * -1);left:calc(2px * -1);bottom:calc(2px * -1);right:calc(2px * -1);}'],
  s: ["@media (forced-colors: active){.rhhzfde[data-fui-focus-visible]::after{border-top-color:Highlight;border-right-color:Highlight;border-bottom-color:Highlight;border-left-color:Highlight;}}", "@media screen and (max-width: 480px){.rhhzfde{max-width:100vw;}}", "@media (forced-colors: active){.r1n1tr5u[data-fui-focus-visible]::after{border-top-color:Highlight;border-left-color:Highlight;border-bottom-color:Highlight;border-right-color:Highlight;}}", "@media screen and (max-width: 480px){.r1n1tr5u{max-width:100vw;}}"]
}), o_ = /* @__PURE__ */ J({
  animated: {
    abs64n: "fk73vx1",
    E5pizo: "f1yzz98r",
    Bz10aip: "f15ofi6c"
  },
  static: {
    E5pizo: "f10nrhrw"
  },
  unmounted: {},
  entering: {
    B3o57yi: "fc397y7",
    Bmy1vo4: "f1b86uth",
    Bkqvd7p: "f18ad807",
    E5pizo: "f10nrhrw",
    Bz10aip: "f186d0ee",
    abs64n: "f5p0z4x"
  },
  entered: {
    E5pizo: "f10nrhrw",
    Bz10aip: "f186d0ee",
    abs64n: "f5p0z4x"
  },
  idle: {
    E5pizo: "f10nrhrw",
    Bz10aip: "f186d0ee",
    abs64n: "f5p0z4x"
  },
  exiting: {
    B3o57yi: "fc397y7",
    Bmy1vo4: "f1b86uth",
    Bkqvd7p: "f1mfizis"
  },
  exited: {}
}, {
  d: [".fk73vx1{opacity:0;}", ".f1yzz98r{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.1);}", ".f15ofi6c{transform:scale(0.85) translateZ(0);}", ".f10nrhrw{box-shadow:var(--shadow64);}", ".fc397y7{transition-duration:var(--durationGentle);}", ".f1b86uth{transition-property:opacity,transform,box-shadow;}", ".f18ad807{transition-timing-function:var(--curveDecelerateMid);}", ".f186d0ee{transform:scale(1) translateZ(0);}", ".f5p0z4x{opacity:1;}", ".f1mfizis{transition-timing-function:var(--curveAccelerateMin);}"]
}), n_ = /* @__PURE__ */ Ie("raidwwn", "r17vltcu", [".raidwwn{top:0px;right:0px;bottom:0px;left:0px;background-color:rgba(0, 0, 0, 0.4);position:fixed;transition-duration:var(--durationGentle);transition-timing-function:var(--curveLinear);transition-property:opacity;will-change:opacity;opacity:0;}", ".r17vltcu{top:0px;left:0px;bottom:0px;right:0px;background-color:rgba(0, 0, 0, 0.4);position:fixed;transition-duration:var(--durationGentle);transition-timing-function:var(--curveLinear);transition-property:opacity;will-change:opacity;opacity:0;}"]), i_ = /* @__PURE__ */ J({
  nestedDialogBackdrop: {
    De3pzq: "f1c21dwh"
  },
  unmounted: {},
  entering: {
    abs64n: "f5p0z4x"
  },
  entered: {
    abs64n: "f5p0z4x"
  },
  idle: {
    abs64n: "f5p0z4x"
  },
  exiting: {
    Bkqvd7p: "f1mfizis"
  },
  exited: {}
}, {
  d: [".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f5p0z4x{opacity:1;}", ".f1mfizis{transition-timing-function:var(--curveAccelerateMin);}"]
}), a_ = (e) => {
  const {
    isNestedDialog: t,
    root: r,
    backdrop: o,
    transitionStatus: n
  } = e, i = r_(), a = o_(), s = n_(), l = i_();
  return r.className = K(hl.root, i, n ? a.animated : a.static, n && a[n], r.className), o && (o.className = K(hl.backdrop, s, t && l.nestedDialogBackdrop, n && l[n], o.className)), e;
};
function s_(e) {
  return {
    dialogSurface: !0
  };
}
const Gu = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = e_(e, t), o = s_();
  return a_(r), Ae("useDialogSurfaceStyles_unstable")(r), t_(r, o);
});
Gu.displayName = "DialogSurface";
const l_ = (e, t) => {
  var r;
  return {
    components: {
      root: "div"
    },
    root: ye(ze((r = e.as) !== null && r !== void 0 ? r : "div", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      ...e
    }), {
      elementType: "div"
    })
  };
}, c_ = (e) => (Ee(e), /* @__PURE__ */ Y(e.root, {})), u_ = {
  root: "fui-DialogContent"
}, d_ = /* @__PURE__ */ Ie("r1e0mpcm", "r1equu0b", [".r1e0mpcm{padding-top:var(--strokeWidthThick);padding-right:var(--strokeWidthThick);padding-bottom:var(--strokeWidthThick);padding-left:var(--strokeWidthThick);margin-top:calc(var(--strokeWidthThick) * -1);margin-right:calc(var(--strokeWidthThick) * -1);margin-bottom:calc(var(--strokeWidthThick) * -1);margin-left:calc(var(--strokeWidthThick) * -1);font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);overflow-y:auto;min-height:32px;box-sizing:border-box;grid-row-start:2;grid-row-end:2;grid-column-start:1;grid-column-end:4;}", ".r1equu0b{padding-top:var(--strokeWidthThick);padding-left:var(--strokeWidthThick);padding-bottom:var(--strokeWidthThick);padding-right:var(--strokeWidthThick);margin-top:calc(var(--strokeWidthThick) * -1);margin-left:calc(var(--strokeWidthThick) * -1);margin-bottom:calc(var(--strokeWidthThick) * -1);margin-right:calc(var(--strokeWidthThick) * -1);font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);overflow-y:auto;min-height:32px;box-sizing:border-box;grid-row-start:2;grid-row-end:2;grid-column-start:1;grid-column-end:4;}"]), f_ = (e) => {
  const t = d_();
  return e.root.className = K(u_.root, t, e.root.className), e;
}, Ku = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = l_(e, t);
  return f_(r), Ae("useDialogContentStyles_unstable")(r), c_(r);
});
Ku.displayName = "DialogContent";
const Xu = k.createContext(void 0), v_ = {
  size: "medium",
  noNativeElements: !1,
  sortable: !1
}, h_ = Xu.Provider, Cr = () => {
  var e;
  return (e = k.useContext(Xu)) !== null && e !== void 0 ? e : v_;
}, p_ = (e, t) => {
  const { noNativeElements: r, size: o } = Cr();
  var n;
  const i = ((n = e.as) !== null && n !== void 0 ? n : r) ? "div" : "td";
  return {
    components: {
      root: i
    },
    root: ye(ze(i, {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      role: i === "div" ? "cell" : void 0,
      ...e
    }), {
      elementType: i
    }),
    noNativeElements: r,
    size: o
  };
}, b_ = (e) => (Ee(e), /* @__PURE__ */ Y(e.root, {})), g_ = "fui-TableCell", m_ = {
  root: g_
}, __ = /* @__PURE__ */ J({
  root: {
    mc9l5x: "f15pt5es",
    ha4doy: "fmrv4ls"
  },
  medium: {
    Bqenvij: "f1ft4266"
  },
  small: {
    Bqenvij: "fbsu25e"
  },
  "extra-small": {
    Bqenvij: "frvgh55"
  }
}, {
  d: [".f15pt5es{display:table-cell;}", ".fmrv4ls{vertical-align:middle;}", ".f1ft4266{height:44px;}", ".fbsu25e{height:34px;}", ".frvgh55{height:24px;}"]
}), y_ = /* @__PURE__ */ J({
  root: {
    mc9l5x: "f22iagw",
    Bf4jedk: "f10tiqix",
    Bt984gj: "f122n59",
    Bh6795r: "fqerorx",
    Bnnss6s: "f1neuvcm",
    xawz: "fkjuxzh"
  },
  medium: {
    sshi5w: "f5pgtk9"
  },
  small: {
    sshi5w: "fcep9tg"
  },
  "extra-small": {
    sshi5w: "f1pha7fy"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f10tiqix{min-width:0px;}", ".f122n59{align-items:center;}", ".fqerorx{flex-grow:1;}", ".f1neuvcm{flex-shrink:1;}", ".fkjuxzh{flex-basis:0px;}", ".f5pgtk9{min-height:44px;}", ".fcep9tg{min-height:34px;}", ".f1pha7fy{min-height:24px;}"]
}), w_ = /* @__PURE__ */ J({
  root: {
    qhf8xq: "f10pi13n",
    z8tnut: "f1nbblvp",
    z189sj: ["f1vdfbxk", "f1f5gg8d"],
    Byoj8tv: "f1ov4xf1",
    uwmqm3: ["f1f5gg8d", "f1vdfbxk"],
    Bn4voq9: "fz36nt7",
    g9k6zt: "f9znhxp",
    Bfpq7zp: "fqrak0z",
    kdpuga: ["f1o2ludy", "f1kjnpwc"],
    Bw81rd7: ["f1kjnpwc", "f1o2ludy"],
    B6xbmo0: ["fxmnebo", "f1witrsb"],
    dm238s: ["f1witrsb", "fxmnebo"]
  }
}, {
  d: [".f10pi13n{position:relative;}", ".f1nbblvp{padding-top:0px;}", ".f1vdfbxk{padding-right:var(--spacingHorizontalS);}", ".f1f5gg8d{padding-left:var(--spacingHorizontalS);}", ".f1ov4xf1{padding-bottom:0px;}", ".fz36nt7[data-fui-focus-visible]{outline-width:2px;}", ".f9znhxp[data-fui-focus-visible]{outline-style:solid;}", ".fqrak0z[data-fui-focus-visible]{outline-color:var(--colorStrokeFocus2);}", ".f1o2ludy[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f1kjnpwc[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusMedium);}", ".fxmnebo[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusMedium);}", ".f1witrsb[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusMedium);}"]
}), k_ = (e) => {
  const t = w_(), r = {
    table: __(),
    flex: y_()
  };
  return e.root.className = K(m_.root, t.root, e.noNativeElements ? r.flex.root : r.table.root, e.noNativeElements ? r.flex[e.size] : r.table[e.size], e.root.className), e;
}, Wr = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = p_(e, t);
  return k_(r), Ae("useTableCellStyles_unstable")(r), b_(r);
});
Wr.displayName = "TableCell";
const Yu = k.createContext(void 0), x_ = "", E_ = Yu.Provider, S_ = () => k.useContext(Yu) === x_, B_ = (e, t) => {
  const { noNativeElements: r, size: o } = Cr();
  var n;
  const i = ((n = e.as) !== null && n !== void 0 ? n : r) ? "div" : "tr", a = Nu(), s = Fa(), l = S_();
  var c;
  return {
    components: {
      root: i
    },
    root: ye(ze(i, {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: On(t, a, s),
      role: i === "div" ? "row" : void 0,
      ...e
    }), {
      elementType: i
    }),
    size: o,
    noNativeElements: r,
    appearance: (c = e.appearance) !== null && c !== void 0 ? c : "none",
    isHeaderRow: l
  };
}, T_ = (e) => (Ee(e), /* @__PURE__ */ Y(e.root, {})), N_ = "fui-TableRow", O_ = {
  root: N_
}, P_ = /* @__PURE__ */ J({
  root: {
    mc9l5x: "f1u0rzck"
  }
}, {
  d: [".f1u0rzck{display:table-row;}"]
}), C_ = /* @__PURE__ */ J({
  root: {
    mc9l5x: "f22iagw",
    Bt984gj: "f122n59"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f122n59{align-items:center;}"]
}), R_ = /* @__PURE__ */ J({
  root: {
    sj55zd: "f19n0e5",
    B7ck84d: "f1ewtqcl",
    Bconypa: "f1jazu75",
    B6guboy: "f1xeqee6",
    Bn4voq9: "fz36nt7",
    g9k6zt: "f9znhxp",
    Bfpq7zp: "fqrak0z",
    kdpuga: ["f1o2ludy", "f1kjnpwc"],
    Bw81rd7: ["f1kjnpwc", "f1o2ludy"],
    B6xbmo0: ["fxmnebo", "f1witrsb"],
    dm238s: ["f1witrsb", "fxmnebo"]
  },
  rootInteractive: {
    ecr2s2: "f1wfn5kd",
    lj723h: "f1g4hkjv",
    B43xm9u: "f15ngxrw",
    i921ia: "fjbbrdp",
    Jwef8y: "f1t94bn6",
    Bi91k9c: "feu1g3u",
    Bpt6rm4: "f1uorfem",
    ff6mpl: "fw60kww",
    ze5xyy: "f4xjyn1",
    pgvf35: "ff1wgvm",
    Bh7lczh: ["fiob0tu", "f1x4h75k"],
    dpv3f4: "f1j6scgf",
    Bpnjhaq: ["f1x4h75k", "fiob0tu"]
  },
  medium: {
    Bn0qgzm: "f1vxd6vx",
    oivjwe: "fg706s2",
    B9xav0g: "frpde29"
  },
  small: {
    Bn0qgzm: "f1vxd6vx",
    oivjwe: "fg706s2",
    B9xav0g: "frpde29"
  },
  "extra-small": {
    Be2twd7: "fy9rknc"
  },
  brand: {
    De3pzq: "f16xkysk",
    g2u3we: "f1bh3yvw",
    h3c5rm: ["fmi79ni", "f11fozsx"],
    B9xav0g: "fnzw4c6",
    zhjwy3: ["f11fozsx", "fmi79ni"],
    ecr2s2: "f7tkmfy",
    lj723h: "f1r2dosr",
    gwxt9v: "fqlf3fd",
    v3aym: ["f9dpb3h", "fw2muls"],
    Bc736ss: "f1yat0gj",
    Bk6ri7n: ["fw2muls", "f9dpb3h"],
    Bk5ld8o: "f7nae3y",
    c4eypz: ["fkbere7", "fa97sf3"],
    felo30: "fmtyzcc",
    Eshu5l: ["fa97sf3", "fkbere7"],
    Bjwas2f: "fb6zhgp",
    Bn1d65q: ["fyowp6c", "fz08sq8"],
    Bxeuatn: "f9dii88",
    n51gp8: ["fz08sq8", "fyowp6c"],
    Beo2b4z: ["f1afxoft", "flqq2yx"],
    h6lo6r: ["flqq2yx", "f1afxoft"],
    Btyw6ap: ["f1b5xrmd", "f1831rx6"],
    w1pwid: ["f1831rx6", "f1b5xrmd"],
    Brwvgy3: "fd94n53",
    yadkgm: "f1e0wld5"
  },
  neutral: {
    gwxt9v: "fqlf3fd",
    v3aym: ["f9dpb3h", "fw2muls"],
    Bc736ss: "f1yat0gj",
    Bk6ri7n: ["fw2muls", "f9dpb3h"],
    Bk5ld8o: "f7nae3y",
    c4eypz: ["fkbere7", "fa97sf3"],
    felo30: "fmtyzcc",
    Eshu5l: ["fa97sf3", "fkbere7"],
    Bjwas2f: "fb6zhgp",
    Bn1d65q: ["fyowp6c", "fz08sq8"],
    Bxeuatn: "f9dii88",
    n51gp8: ["fz08sq8", "fyowp6c"],
    Beo2b4z: ["f1afxoft", "flqq2yx"],
    h6lo6r: ["flqq2yx", "f1afxoft"],
    Btyw6ap: ["f1b5xrmd", "f1831rx6"],
    w1pwid: ["f1831rx6", "f1b5xrmd"],
    Brwvgy3: "fd94n53",
    yadkgm: "f1e0wld5",
    De3pzq: "fq5gl1p",
    sj55zd: "f1cgsbmv",
    Jwef8y: "f1uqaxdt",
    ecr2s2: "fa9o754",
    g2u3we: "frmsihh",
    h3c5rm: ["frttxa5", "f11o2r7f"],
    B9xav0g: "fem5et0",
    zhjwy3: ["f11o2r7f", "frttxa5"]
  },
  none: {}
}, {
  d: [".f19n0e5{color:var(--colorNeutralForeground1);}", ".f1ewtqcl{box-sizing:border-box;}", ".f1jazu75[data-fui-focus-within]:focus-within .fui-TableSelectionCell{opacity:1;}", ".f1xeqee6[data-fui-focus-within]:focus-within .fui-TableCellActions{opacity:1;}", ".fz36nt7[data-fui-focus-visible]{outline-width:2px;}", ".f9znhxp[data-fui-focus-visible]{outline-style:solid;}", ".fqrak0z[data-fui-focus-visible]{outline-color:var(--colorStrokeFocus2);}", ".f1o2ludy[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f1kjnpwc[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusMedium);}", ".fxmnebo[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusMedium);}", ".f1witrsb[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusMedium);}", ".f1vxd6vx{border-bottom-width:var(--strokeWidthThin);}", ".fg706s2{border-bottom-style:solid;}", ".frpde29{border-bottom-color:var(--colorNeutralStroke2);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".f16xkysk{background-color:var(--colorBrandBackground2);}", ".f1bh3yvw{border-top-color:var(--colorTransparentStrokeInteractive);}", ".fmi79ni{border-right-color:var(--colorTransparentStrokeInteractive);}", ".f11fozsx{border-left-color:var(--colorTransparentStrokeInteractive);}", ".fnzw4c6{border-bottom-color:var(--colorTransparentStrokeInteractive);}", ".fq5gl1p{background-color:var(--colorSubtleBackgroundSelected);}", ".f1cgsbmv{color:var(--colorNeutralForeground1Hover);}", ".frmsihh{border-top-color:var(--colorNeutralStrokeOnBrand);}", ".frttxa5{border-right-color:var(--colorNeutralStrokeOnBrand);}", ".f11o2r7f{border-left-color:var(--colorNeutralStrokeOnBrand);}", ".fem5et0{border-bottom-color:var(--colorNeutralStrokeOnBrand);}"],
  a: [".f1wfn5kd:active{background-color:var(--colorSubtleBackgroundPressed);}", ".f1g4hkjv:active{color:var(--colorNeutralForeground1Pressed);}", ".f15ngxrw:active .fui-TableCellActions{opacity:1;}", ".fjbbrdp:active .fui-TableSelectionCell{opacity:1;}", ".f7tkmfy:active{background-color:var(--colorBrandBackground2);}", ".f1r2dosr:active{color:var(--colorNeutralForeground1);}", ".fa9o754:active{background-color:var(--colorSubtleBackgroundSelected);}"],
  h: [".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}", ".feu1g3u:hover{color:var(--colorNeutralForeground1Hover);}", ".f1uorfem:hover .fui-TableCellActions{opacity:1;}", ".fw60kww:hover .fui-TableSelectionCell{opacity:1;}", ".f1uqaxdt:hover{background-color:var(--colorSubtleBackgroundSelected);}"],
  m: [["@media (forced-colors: active){.f4xjyn1:hover{color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.ff1wgvm:hover{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1x4h75k:hover{border-left-color:Highlight;}.fiob0tu:hover{border-right-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1j6scgf:hover{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fqlf3fd{border-top-width:2px;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f9dpb3h{border-right-width:2px;}.fw2muls{border-left-width:2px;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1yat0gj{border-bottom-width:2px;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f7nae3y{border-top-style:solid;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fa97sf3{border-left-style:solid;}.fkbere7{border-right-style:solid;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fmtyzcc{border-bottom-style:solid;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fb6zhgp{border-top-color:transparent;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fyowp6c{border-right-color:transparent;}.fz08sq8{border-left-color:transparent;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f9dii88{border-bottom-color:transparent;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1afxoft{border-bottom-right-radius:var(--borderRadiusMedium);}.flqq2yx{border-bottom-left-radius:var(--borderRadiusMedium);}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1831rx6{border-top-left-radius:var(--borderRadiusMedium);}.f1b5xrmd{border-top-right-radius:var(--borderRadiusMedium);}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fd94n53{box-sizing:border-box;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1e0wld5:focus-visible{outline-offset:-4px;}}", {
    m: "(forced-colors: active)"
  }]]
}), D_ = (e) => {
  const t = R_(), r = {
    table: P_(),
    flex: C_()
  };
  return e.root.className = K(O_.root, t.root, !e.isHeaderRow && t.rootInteractive, t[e.size], e.noNativeElements ? r.flex.root : r.table.root, t[e.appearance], e.root.className), e;
}, ea = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = B_(e, t);
  return D_(r), Ae("useTableRowStyles_unstable")(r), T_(r);
});
ea.displayName = "TableRow";
const z_ = (e, t) => {
  const { noNativeElements: r } = Cr();
  var o;
  const n = ((o = e.as) !== null && o !== void 0 ? o : r) ? "div" : "tbody";
  return {
    components: {
      root: n
    },
    root: ye(ze(n, {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      role: n === "div" ? "rowgroup" : void 0,
      ...e
    }), {
      elementType: n
    }),
    noNativeElements: r
  };
}, A_ = (e) => (Ee(e), /* @__PURE__ */ Y(e.root, {})), F_ = /* @__PURE__ */ J({
  root: {
    mc9l5x: "f1tp1avn"
  }
}, {
  d: [".f1tp1avn{display:table-row-group;}"]
}), j_ = /* @__PURE__ */ J({
  root: {
    mc9l5x: "ftgm304"
  }
}, {
  d: [".ftgm304{display:block;}"]
}), I_ = "fui-TableBody", M_ = (e) => {
  const t = {
    table: F_(),
    flex: j_()
  };
  return e.root.className = K(I_, e.noNativeElements ? t.flex.root : t.table.root, e.root.className), e;
}, Ju = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = z_(e, t);
  return M_(r), Ae("useTableBodyStyles_unstable")(r), A_(r);
});
Ju.displayName = "TableBody";
const q_ = (e, t) => {
  var r;
  const o = ((r = e.as) !== null && r !== void 0 ? r : e.noNativeElements) ? "div" : "table";
  var n, i, a;
  return {
    components: {
      root: o
    },
    root: ye(ze(o, {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      role: o === "div" ? "table" : void 0,
      ...e
    }), {
      elementType: o
    }),
    size: (n = e.size) !== null && n !== void 0 ? n : "medium",
    noNativeElements: (i = e.noNativeElements) !== null && i !== void 0 ? i : !1,
    sortable: (a = e.sortable) !== null && a !== void 0 ? a : !1
  };
}, L_ = (e, t) => (Ee(e), /* @__PURE__ */ Y(h_, {
  value: t.table,
  children: /* @__PURE__ */ Y(e.root, {})
})), V_ = "fui-Table", H_ = /* @__PURE__ */ J({
  root: {
    mc9l5x: "f1w4nmp0",
    ha4doy: "fmrv4ls",
    a9b677: "fly5x3f",
    B73mfa3: "f14m3nip"
  }
}, {
  d: [".f1w4nmp0{display:table;}", ".fmrv4ls{vertical-align:middle;}", ".fly5x3f{width:100%;}", ".f14m3nip{table-layout:fixed;}"]
}), $_ = /* @__PURE__ */ J({
  root: {
    mc9l5x: "ftgm304"
  }
}, {
  d: [".ftgm304{display:block;}"]
}), W_ = /* @__PURE__ */ J({
  root: {
    po53p8: "fgkb47j",
    De3pzq: "fhovq9v"
  }
}, {
  d: [".fgkb47j{border-collapse:collapse;}", ".fhovq9v{background-color:var(--colorSubtleBackground);}"]
}), U_ = (e) => {
  const t = W_(), r = {
    table: H_(),
    flex: $_()
  };
  return e.root.className = K(V_, t.root, e.noNativeElements ? r.flex.root : r.table.root, e.root.className), e;
};
function G_(e) {
  const { size: t, noNativeElements: r, sortable: o } = e;
  return {
    table: k.useMemo(() => ({
      noNativeElements: r,
      size: t,
      sortable: o
    }), [
      r,
      t,
      o
    ])
  };
}
const Qu = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = q_(e, t);
  return U_(r), Ae("useTableStyles_unstable")(r), L_(r, G_(r));
});
Qu.displayName = "Table";
const K_ = (e, t) => {
  const { noNativeElements: r } = Cr();
  var o;
  const n = ((o = e.as) !== null && o !== void 0 ? o : r) ? "div" : "thead";
  return {
    components: {
      root: n
    },
    root: ye(ze(n, {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      role: n === "div" ? "rowgroup" : void 0,
      ...e
    }), {
      elementType: n
    }),
    noNativeElements: r
  };
}, X_ = (e) => (Ee(e), /* @__PURE__ */ Y(E_, {
  value: "",
  children: /* @__PURE__ */ Y(e.root, {})
})), Y_ = "fui-TableHeader", J_ = /* @__PURE__ */ J({
  root: {
    mc9l5x: "ftgm304"
  }
}, {
  d: [".ftgm304{display:block;}"]
}), Q_ = /* @__PURE__ */ J({
  root: {
    mc9l5x: "f1tp1avn"
  }
}, {
  d: [".f1tp1avn{display:table-row-group;}"]
}), Z_ = (e) => {
  const t = {
    table: Q_(),
    flex: J_()
  };
  return e.root.className = K(Y_, e.noNativeElements ? t.flex.root : t.table.root, e.root.className), e;
}, Zu = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = K_(e, t);
  return Z_(r), Ae("useTableHeaderStyles_unstable")(r), X_(r);
});
Zu.displayName = "TableHeader";
const ey = {
  ascending: /* @__PURE__ */ k.createElement(dp, {
    fontSize: 12
  }),
  descending: /* @__PURE__ */ k.createElement(up, {
    fontSize: 12
  })
}, ty = (e, t) => {
  const { noNativeElements: r, sortable: o } = Cr(), { sortable: n = o } = e;
  var i;
  const a = ((i = e.as) !== null && i !== void 0 ? i : r) ? "div" : "th", s = ye(e.button, {
    elementType: "div",
    defaultProps: {
      as: "div",
      ...!n && {
        role: "presentation",
        tabIndex: void 0
      }
    }
  });
  var l;
  return {
    components: {
      root: a,
      button: "div",
      sortIcon: "span",
      aside: "span"
    },
    root: ye(ze(a, {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: On(t, Fa()),
      role: a === "div" ? "columnheader" : void 0,
      "aria-sort": n ? (l = e.sortDirection) !== null && l !== void 0 ? l : "none" : void 0,
      ...e
    }), {
      elementType: a
    }),
    aside: Pe(e.aside, {
      elementType: "span"
    }),
    sortIcon: Pe(e.sortIcon, {
      renderByDefault: !!e.sortDirection,
      defaultProps: {
        children: e.sortDirection ? ey[e.sortDirection] : void 0
      },
      elementType: "span"
    }),
    button: ja(s.as, s),
    sortable: n,
    noNativeElements: r
  };
}, ry = (e) => (Ee(e), /* @__PURE__ */ Ke(e.root, {
  children: [
    /* @__PURE__ */ Ke(e.button, {
      children: [
        e.root.children,
        e.sortIcon && /* @__PURE__ */ Y(e.sortIcon, {})
      ]
    }),
    e.aside && /* @__PURE__ */ Y(e.aside, {})
  ]
})), zo = {
  root: "fui-TableHeaderCell",
  button: "fui-TableHeaderCell__button",
  sortIcon: "fui-TableHeaderCell__sortIcon",
  aside: "fui-TableHeaderCell__aside"
}, oy = /* @__PURE__ */ J({
  root: {
    mc9l5x: "f15pt5es",
    ha4doy: "fmrv4ls"
  }
}, {
  d: [".f15pt5es{display:table-cell;}", ".fmrv4ls{vertical-align:middle;}"]
}), ny = /* @__PURE__ */ J({
  root: {
    mc9l5x: "f22iagw",
    Bh6795r: "fqerorx",
    Bnnss6s: "f1neuvcm",
    xawz: "fkjuxzh",
    Bf4jedk: "f10tiqix"
  }
}, {
  d: [".f22iagw{display:flex;}", ".fqerorx{flex-grow:1;}", ".f1neuvcm{flex-shrink:1;}", ".fkjuxzh{flex-basis:0px;}", ".f10tiqix{min-width:0px;}"]
}), iy = /* @__PURE__ */ J({
  root: {
    Bhrd7zp: "figsok6",
    z8tnut: "f1nbblvp",
    z189sj: ["f1vdfbxk", "f1f5gg8d"],
    Byoj8tv: "f1ov4xf1",
    uwmqm3: ["f1f5gg8d", "f1vdfbxk"],
    B3nxjsc: "fhix6mv",
    Bmvh20x: "fha7anx",
    robkg1: "f1fmzww4",
    pehzd3: ["fs9qmxf", "f187m4uq"],
    B8osjzx: ["f187m4uq", "fs9qmxf"],
    u7xebq: ["f145mzao", "f1uha7eq"],
    Blsv9te: ["f1uha7eq", "f145mzao"],
    qhf8xq: "f10pi13n"
  },
  rootInteractive: {
    Jwef8y: "f1t94bn6",
    ecr2s2: "f1wfn5kd"
  },
  resetButton: {
    B3rzk8w: "fq6nmtn",
    B7ck84d: "f1e4lqlz",
    De3pzq: "f1u2r49w",
    sj55zd: "f1ym3bx4",
    Bahqtrf: "f1mo0ibp",
    Be2twd7: "fjoy568",
    Bg96gwp: "fytdu2e",
    B68tc82: "f1mtd64y",
    Bmxbyg5: "f1y7q3j9",
    z8tnut: "f1g0x7ka",
    z189sj: ["fhxju0i", "f1cnd47f"],
    Byoj8tv: "f1qch9an",
    uwmqm3: ["f1cnd47f", "fhxju0i"],
    icvyot: "f1ern45e",
    vrafjx: ["f1n71otn", "f1deefiw"],
    oivjwe: "f1h8hb77",
    wvpqe5: ["f1deefiw", "f1n71otn"],
    fsow6f: "fgusgyc"
  },
  button: {
    qhf8xq: "f10pi13n",
    a9b677: "fly5x3f",
    mc9l5x: "f22iagw",
    Bh6795r: "fqerorx",
    Bqenvij: "f1l02sjl",
    Bt984gj: "f122n59",
    i8kkvl: "f1ufnopg",
    Belr9w4: "f14sijuj",
    sshi5w: "f1nxs5xn",
    Bnnss6s: "f1neuvcm",
    xawz: "fkjuxzh",
    oeaueh: "f1s6fcnf"
  },
  sortable: {
    Bceei9c: "f1k6fduh"
  },
  sortIcon: {
    mc9l5x: "f22iagw",
    Bt984gj: "f122n59",
    z8tnut: "fclwglc"
  },
  resizeHandle: {}
}, {
  d: [".figsok6{font-weight:var(--fontWeightRegular);}", ".f1nbblvp{padding-top:0px;}", ".f1vdfbxk{padding-right:var(--spacingHorizontalS);}", ".f1f5gg8d{padding-left:var(--spacingHorizontalS);}", ".f1ov4xf1{padding-bottom:0px;}", ".fhix6mv[data-fui-focus-within]:focus-within{outline-width:2px;}", ".fha7anx[data-fui-focus-within]:focus-within{outline-style:solid;}", ".f1fmzww4[data-fui-focus-within]:focus-within{outline-color:var(--colorStrokeFocus2);}", ".fs9qmxf[data-fui-focus-within]:focus-within{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f187m4uq[data-fui-focus-within]:focus-within{border-bottom-left-radius:var(--borderRadiusMedium);}", ".f145mzao[data-fui-focus-within]:focus-within{border-top-right-radius:var(--borderRadiusMedium);}", ".f1uha7eq[data-fui-focus-within]:focus-within{border-top-left-radius:var(--borderRadiusMedium);}", ".f10pi13n{position:relative;}", ".fq6nmtn{resize:horizontal;}", ".f1e4lqlz{box-sizing:content-box;}", ".f1u2r49w{background-color:inherit;}", ".f1ym3bx4{color:inherit;}", ".f1mo0ibp{font-family:inherit;}", ".fjoy568{font-size:inherit;}", ".fytdu2e{line-height:normal;}", ".f1mtd64y{overflow-x:visible;}", ".f1y7q3j9{overflow-y:visible;}", ".f1g0x7ka{padding-top:0;}", ".fhxju0i{padding-right:0;}", ".f1cnd47f{padding-left:0;}", ".f1qch9an{padding-bottom:0;}", ".f1ern45e{border-top-style:none;}", ".f1n71otn{border-right-style:none;}", ".f1deefiw{border-left-style:none;}", ".f1h8hb77{border-bottom-style:none;}", ".fgusgyc{text-align:unset;}", ".fly5x3f{width:100%;}", ".f22iagw{display:flex;}", ".fqerorx{flex-grow:1;}", ".f1l02sjl{height:100%;}", ".f122n59{align-items:center;}", ".f1ufnopg{column-gap:var(--spacingHorizontalXS);}", ".f14sijuj{row-gap:var(--spacingHorizontalXS);}", ".f1nxs5xn{min-height:32px;}", ".f1neuvcm{flex-shrink:1;}", ".fkjuxzh{flex-basis:0px;}", ".f1s6fcnf{outline-style:none;}", ".f1k6fduh{cursor:pointer;}", ".fclwglc{padding-top:var(--spacingVerticalXXS);}"],
  h: [".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}"],
  a: [".f1wfn5kd:active{background-color:var(--colorSubtleBackgroundPressed);}"]
}), ay = (e) => {
  const t = iy(), r = {
    table: oy(),
    flex: ny()
  };
  return e.root.className = K(zo.root, t.root, e.sortable && t.rootInteractive, e.noNativeElements ? r.flex.root : r.table.root, e.root.className), e.button.className = K(zo.button, t.resetButton, t.button, e.sortable && t.sortable, e.button.className), e.sortIcon && (e.sortIcon.className = K(zo.sortIcon, t.sortIcon, e.sortIcon.className)), e.aside && (e.aside.className = K(zo.aside, t.resizeHandle, e.aside.className)), e;
}, ta = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = ty(e, t);
  return ay(r), Ae("useTableHeaderCellStyles_unstable")(r), ry(r);
});
ta.displayName = "TableHeaderCell";
const sy = {
  medium: 32,
  small: 24,
  "extra-small": 20
}, ly = (e, t) => {
  const { size: r } = Cr();
  return {
    components: {
      root: "div",
      main: "span",
      description: "span",
      content: "div",
      media: "span"
    },
    root: ye(ze("div", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      ...e
    }), {
      elementType: "div"
    }),
    appearance: e.appearance,
    truncate: e.truncate,
    main: Pe(e.main, {
      renderByDefault: !0,
      elementType: "span"
    }),
    media: Pe(e.media, {
      elementType: "span"
    }),
    description: Pe(e.description, {
      elementType: "span"
    }),
    content: Pe(e.content, {
      renderByDefault: !!e.description || !!e.children,
      elementType: "div"
    }),
    avatarSize: sy[r],
    size: r
  };
}, cy = (e, t) => (Ee(e), /* @__PURE__ */ Ke(e.root, {
  children: [
    e.media && /* @__PURE__ */ Y(ag, {
      value: t.avatar,
      children: /* @__PURE__ */ Y(e.media, {})
    }),
    e.content && /* @__PURE__ */ Ke(e.content, {
      children: [
        e.main && /* @__PURE__ */ Y(e.main, {
          children: e.root.children
        }),
        e.description && /* @__PURE__ */ Y(e.description, {})
      ]
    })
  ]
})), Ir = {
  root: "fui-TableCellLayout",
  media: "fui-TableCellLayout__media",
  main: "fui-TableCellLayout__main",
  description: "fui-TableCellLayout__description",
  content: "fui-TableCellLayout__content"
}, uy = /* @__PURE__ */ J({
  root: {
    mc9l5x: "f22iagw",
    Bt984gj: "f122n59",
    i8kkvl: "fsnqrgy",
    Belr9w4: "fylz90v",
    Bh6795r: "fqerorx",
    Bnnss6s: "f1neuvcm",
    xawz: "fkjuxzh"
  },
  rootTruncate: {
    B68tc82: "f1p9o1ba"
  },
  content: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62"
  },
  contentTruncate: {
    B68tc82: "f1p9o1ba"
  },
  media: {
    mc9l5x: "f22iagw",
    Bt984gj: "f122n59"
  },
  mediaExtraSmall: {
    Be2twd7: "f4ybsrx"
  },
  mediaSmallAndMedium: {
    Be2twd7: "fe5j1ua"
  },
  mediaPrimary: {
    Be2twd7: "f1rt2boy"
  },
  mainPrimary: {
    Bhrd7zp: "fl43uef"
  },
  mainTruncate: {
    B68tc82: "f1p9o1ba",
    Huce71: "fz5stix",
    ygn44y: "f1cmbuwj"
  },
  description: {
    sj55zd: "fkfq4zb",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fy9rknc",
    Bhrd7zp: "figsok6",
    Bg96gwp: "fwrc4pm"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f122n59{align-items:center;}", ".fsnqrgy{column-gap:var(--spacingHorizontalS);}", ".fylz90v{row-gap:var(--spacingHorizontalS);}", ".fqerorx{flex-grow:1;}", ".f1neuvcm{flex-shrink:1;}", ".fkjuxzh{flex-basis:0px;}", ".f1p9o1ba{overflow-x:hidden;}", ".f1vx9l62{flex-direction:column;}", ".f4ybsrx{font-size:16px;}", ".fe5j1ua{font-size:20px;}", ".f1rt2boy{font-size:24px;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".fz5stix{white-space:nowrap;}", ".f1cmbuwj{text-overflow:ellipsis;}", ".fkfq4zb{color:var(--colorNeutralForeground2);}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}"]
}), dy = (e) => {
  const t = uy(), {
    truncate: r
  } = e;
  e.root.className = K(Ir.root, t.root, r && t.rootTruncate, e.root.className);
  const o = e.appearance === "primary";
  if (e.media) {
    const n = {
      small: t.mediaSmallAndMedium,
      medium: t.mediaSmallAndMedium,
      "extra-small": t.mediaExtraSmall
    };
    e.media.className = K(Ir.media, t.media, n[e.size], o && t.mediaPrimary, e.media.className);
  }
  return e.main && (e.main.className = K(Ir.main, r && t.mainTruncate, o && t.mainPrimary, e.main.className)), e.description && (e.description.className = K(Ir.description, t.description, e.description.className)), e.content && (e.content.className = K(Ir.content, t.content, r && t.contentTruncate, e.content.className)), e;
};
function fy(e) {
  const { avatarSize: t } = e;
  return {
    avatar: k.useMemo(() => ({
      size: t
    }), [
      t
    ])
  };
}
const Ur = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = ly(e, t);
  return dy(r), Ae("useTableCellLayoutStyles_unstable")(r), cy(r, fy(r));
});
Ur.displayName = "TableCellLayout";
const vy = (e, { referenceLabel: t, referenceId: r }, o) => {
  const { checkbox: n = {}, onSelectionChange: i, floatingAction: a, onClick: s, onKeyDown: l } = e, { findAllFocusable: c } = Su(), u = k.useRef(null), [d, f] = fo({
    state: e.selected,
    defaultState: e.defaultSelected,
    initialState: !1
  }), h = [
    e.selected,
    e.defaultSelected,
    i
  ].some((E) => typeof E < "u"), [v, p] = k.useState(!1), g = k.useCallback((E) => {
    if (!o.current)
      return !1;
    const S = c(o.current), C = E.target, I = S.some((se) => se.contains(C)), H = (u == null ? void 0 : u.current) === C;
    return I && !H;
  }, [
    o,
    c
  ]), b = k.useCallback((E) => {
    if (g(E))
      return;
    const S = !d;
    f(S), i && i(E, {
      selected: S
    });
  }, [
    i,
    d,
    f,
    g
  ]), y = k.useCallback((E) => {
    [
      $o
    ].includes(E.key) && (E.preventDefault(), b(E));
  }, [
    b
  ]), m = k.useMemo(() => {
    if (!h || a)
      return;
    const E = {};
    return r ? E["aria-labelledby"] = r : t && (E["aria-label"] = t), Pe(n, {
      defaultProps: {
        ref: u,
        type: "checkbox",
        checked: d,
        onChange: (S) => b(S),
        onFocus: () => p(!0),
        onBlur: () => p(!1),
        ...E
      },
      elementType: "input"
    });
  }, [
    n,
    a,
    d,
    h,
    b,
    r,
    t
  ]), w = k.useMemo(() => {
    if (a)
      return Pe(a, {
        defaultProps: {
          ref: u
        },
        elementType: "div"
      });
  }, [
    a
  ]), _ = k.useMemo(() => h ? {
    onClick: Ps(s, b),
    onKeyDown: Ps(l, y)
  } : null, [
    h,
    b,
    s,
    l,
    y
  ]);
  return {
    selected: d,
    selectable: h,
    selectFocused: v,
    selectableCardProps: _,
    checkboxSlot: m,
    floatingActionSlot: w
  };
}, hy = k.createContext(void 0), pl = {
  selectableA11yProps: {
    referenceId: void 0,
    setReferenceId() {
    },
    referenceLabel: void 0,
    setReferenceLabel() {
    }
  }
}, py = hy.Provider, by = {
  off: void 0,
  "no-tab": "limited-trap-focus",
  "tab-exit": "limited",
  "tab-only": "unlimited"
}, gy = ({ focusMode: e = "off", ...t }) => {
  const r = [
    "onClick",
    "onDoubleClick",
    "onMouseUp",
    "onMouseDown",
    "onPointerUp",
    "onPointerDown",
    "onTouchStart",
    "onTouchEnd",
    "onDragStart",
    "onDragEnd"
  ].some((i) => t[i]), n = {
    ...Eu({
      tabBehavior: by[r ? "no-tab" : e]
    }),
    tabIndex: 0
  };
  return {
    interactive: r,
    focusAttributes: !r && e === "off" ? null : n
  };
}, my = (e, t) => {
  const { appearance: r = "filled", orientation: o = "vertical", size: n = "medium" } = e, [i, a] = k.useState(pl.selectableA11yProps.referenceId), [s, l] = k.useState(pl.selectableA11yProps.referenceId), c = Fa(), { selectable: u, selected: d, selectableCardProps: f, selectFocused: h, checkboxSlot: v, floatingActionSlot: p } = vy(e, {
    referenceId: i,
    referenceLabel: s
  }, c), g = On(c, t), { interactive: b, focusAttributes: y } = gy(e);
  return {
    appearance: r,
    orientation: o,
    size: n,
    interactive: b,
    selectable: u,
    selectFocused: h,
    selected: d,
    selectableA11yProps: {
      setReferenceId: a,
      referenceId: i,
      referenceLabel: s,
      setReferenceLabel: l
    },
    components: {
      root: "div",
      floatingAction: "div",
      checkbox: "input"
    },
    root: ye(ze("div", {
      ref: g,
      role: "group",
      ...u ? null : y,
      ...e,
      ...f
    }), {
      elementType: "div"
    }),
    floatingAction: p,
    checkbox: v
  };
}, _y = (e, t) => (Ee(e), /* @__PURE__ */ Y(e.root, {
  children: /* @__PURE__ */ Ke(py, {
    value: t,
    children: [
      e.checkbox ? /* @__PURE__ */ Y(e.checkbox, {}) : null,
      e.floatingAction ? /* @__PURE__ */ Y(e.floatingAction, {}) : null,
      e.root.children
    ]
  })
})), gi = {
  root: "fui-Card",
  floatingAction: "fui-Card__floatingAction",
  checkbox: "fui-Card__checkbox"
}, yy = /* @__PURE__ */ J({
  root: {
    B68tc82: "f1p9o1ba",
    Bmxbyg5: "f1sil6mw",
    Bbmb7ep: ["fifeqxg", "f899z7z"],
    Beyfa6y: ["f899z7z", "fifeqxg"],
    B7oj6ja: ["f4h3tyx", "f18ur2pz"],
    Btl43ni: ["f18ur2pz", "f4h3tyx"],
    z8tnut: "f1lplnzb",
    z189sj: ["f10m5gbb", "f1k04kkk"],
    Byoj8tv: "fhftqfp",
    uwmqm3: ["f1k04kkk", "f10m5gbb"],
    i8kkvl: "fxsr4vj",
    Belr9w4: "fcvsdzp",
    mc9l5x: "f22iagw",
    qhf8xq: "f10pi13n",
    B7ck84d: "f1ewtqcl",
    sj55zd: "f19n0e5",
    E3zdtr: "f1mdlcz9",
    bn5sak: "frwkxtg",
    Eqx8gd: ["f1n6gb5g", "f15yvnhg"],
    B1piin3: ["f15yvnhg", "f1n6gb5g"],
    By385i5: "fo72kxq",
    Bsft5z2: "f13zj6fq",
    B80jsxd: "f1nwj1ja",
    Bm2nyyq: "f8rth92",
    Barhvk9: ["flthirb", "ftkbnf5"],
    Bw17bha: "f1lh990p",
    vfts7: ["ftkbnf5", "flthirb"],
    xrcqlc: "f6czdpx",
    Ihftqj: ["f13hvwk3", "f1en4csx"],
    Bcgy8vk: "f1i1u9k0",
    Bhxzhr1: ["f1en4csx", "f13hvwk3"],
    B3778ie: ["f1qnomq5", "f2fl922"],
    d9w3h3: ["f2fl922", "f1qnomq5"],
    Bl18szs: ["f1anhtl", "f1n2zcl3"],
    B4j8arr: ["f1n2zcl3", "f1anhtl"],
    B2jhnfs: "f16v3d5c"
  },
  focused: {
    Brovlpu: "ftqa4ok",
    B486eqv: "f2hkw1w",
    B8q5s1w: "f8hki3x",
    Bci5o5g: ["f1d2448m", "ffh67wi"],
    n8qw10: "f1bjia2o",
    Bdrgwmp: ["ffh67wi", "f1d2448m"],
    Bb7d1vk: "f226i61",
    zhwhgb: ["f13kzufm", "fsx75g8"],
    dhy2o1: "flujwa2",
    Gfyso: ["fsx75g8", "f13kzufm"],
    Bm4h7ae: "f15bsgw9",
    B7ys5i9: "f14e48fq",
    Busjfv9: "f18yb2kv",
    Bhk32uz: "fd6o370",
    Bf4ptjt: "fh1cnn4",
    kclons: ["fy7oxxb", "f184ne2d"],
    Bhdgwq3: "fpukqih",
    Blkhhs4: ["f184ne2d", "fy7oxxb"],
    Bqtpl0w: "f99gebs",
    clg4pj: ["f13b0oaq", "f8t2bz6"],
    hgwjuy: "f1jvq617",
    Bonggc9: ["f8t2bz6", "f13b0oaq"],
    B1tsrr9: ["f11unbnk", "fbd201q"],
    Dah5zi: ["fbd201q", "f11unbnk"],
    Bkh64rk: ["f12nqxso", "f1uguk4w"],
    qqdqy8: ["f1uguk4w", "f12nqxso"],
    B6dhp37: "f1dvezut",
    i03rao: ["fd0oaoj", "f1cwg4i8"],
    Boxcth7: "fjvm52t",
    Bsom6fd: ["f1cwg4i8", "fd0oaoj"],
    J0r882: "f15fr7a0",
    Bule8hv: ["fwsq40z", "fy0y4wt"],
    Bjwuhne: "f34ld9f",
    Ghsupd: ["fy0y4wt", "fwsq40z"]
  },
  selectableFocused: {
    Brovlpu: "ftqa4ok",
    B486eqv: "f2hkw1w",
    Bssx7fj: "f1b1k54r",
    uh7if5: ["f4ne723", "fqqcjud"],
    clntm0: "fh7aioi",
    Dlk2r6: ["fqqcjud", "f4ne723"],
    Bm3wd5j: "f1k55ka9",
    Bbrhkcr: ["fgclinu", "f16pcs8n"],
    f1oku: "fycbxed",
    aywvf2: ["f16pcs8n", "fgclinu"],
    B2j2mmj: "ffht0p2",
    wigs8: "f1p0ul1q",
    pbfy6t: "f1c901ms",
    B0v4ure: "f1alokd7",
    ghq09: "f78i1la",
    B24cy0v: ["f1kvsw7t", "f1bw8brt"],
    Bwckmig: "f8k7e5g",
    Bvwlmkc: ["f1bw8brt", "f1kvsw7t"],
    Bbgo44z: "f125hn41",
    Bil7v7r: ["fgxkx34", "f1v56tyl"],
    skfxo0: "fdxas6f",
    jo1ztg: ["f1v56tyl", "fgxkx34"],
    Ba3ybja: ["fxwickw", "f1ia5cve"],
    az1dzo: ["f1ia5cve", "fxwickw"],
    vppk2z: ["f194aguw", "fqicc6c"],
    B6352mv: ["fqicc6c", "f194aguw"],
    nr063g: "fq4eyks",
    Blmvk6g: ["f1ya6x16", "ftuszwa"],
    Bsiemmq: "f1e2iu44",
    B98u21t: ["ftuszwa", "f1ya6x16"],
    B2pnrqr: "f1amxum7",
    B29w5g4: ["f1cec8w7", "f554mv0"],
    Bhhzhcn: "f1sj6kbr",
    Bec0n69: ["f554mv0", "f1cec8w7"]
  },
  orientationHorizontal: {
    Beiy3e4: "f1063pyq",
    Bt984gj: "f122n59",
    Bnoktp0: "fpfyeui",
    Idhjb2: "fwi74qw",
    ihgzqh: ["ffcmwrh", "f6ppoih"],
    Bgp6ld0: ["f1dc9p14", "fd933vt"],
    Bbucpmy: "f18esqgw"
  },
  orientationVertical: {
    Beiy3e4: "f1vx9l62",
    Bt4kzjz: ["fobhde4", "fx5r7kn"],
    B1ou843: ["fx5r7kn", "fobhde4"],
    y1433z: "f19chtn8",
    B7egwnw: "fuvs6re",
    B49b4xf: "fy4glsf"
  },
  sizeSmall: {
    B7balbw: "f1pi9uxy",
    B1h88n7: "f1h1zgly"
  },
  sizeMedium: {
    B7balbw: "frsmuga",
    B1h88n7: "fuldkky"
  },
  sizeLarge: {
    B7balbw: "f1qua4xo",
    B1h88n7: "fimkt6v"
  },
  filled: {
    De3pzq: "fxugw4r",
    E5pizo: "f1whvlc6",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"]
  },
  filledInteractive: {
    Bceei9c: "f1k6fduh",
    De3pzq: "fxugw4r",
    E5pizo: "f1whvlc6",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"],
    Jwef8y: "f1knas48",
    Bvxd0ez: "f1m145df",
    ecr2s2: "fb40n2d"
  },
  filledInteractiveSelected: {
    De3pzq: "f1nfm20t",
    B0n5ga8: "f16eln5f",
    s924m2: ["fa2okxs", "fg4zq3l"],
    B1q35kw: "ff6932p",
    Gp14am: ["fg4zq3l", "fa2okxs"],
    Jwef8y: "f1kz6goq"
  },
  filledAlternative: {
    De3pzq: "f1dmdbja",
    E5pizo: "f1whvlc6",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"]
  },
  filledAlternativeInteractive: {
    Bceei9c: "f1k6fduh",
    De3pzq: "f1dmdbja",
    E5pizo: "f1whvlc6",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"],
    Jwef8y: "f1uvynv3",
    Bvxd0ez: "f1m145df",
    ecr2s2: "f1yhgkbh"
  },
  filledAlternativeInteractiveSelected: {
    De3pzq: "fjxa0vh",
    B0n5ga8: "f16eln5f",
    s924m2: ["fa2okxs", "fg4zq3l"],
    B1q35kw: "ff6932p",
    Gp14am: ["fg4zq3l", "fa2okxs"],
    Jwef8y: "fehi0vp"
  },
  outline: {
    De3pzq: "f1c21dwh",
    E5pizo: "f1couhl3",
    B0n5ga8: "ft83z1f",
    s924m2: ["f1g4150c", "f192dr6e"],
    B1q35kw: "f1qnawh6",
    Gp14am: ["f192dr6e", "f1g4150c"]
  },
  outlineInteractive: {
    Bceei9c: "f1k6fduh",
    De3pzq: "f1c21dwh",
    E5pizo: "f1couhl3",
    B0n5ga8: "ft83z1f",
    s924m2: ["f1g4150c", "f192dr6e"],
    B1q35kw: "f1qnawh6",
    Gp14am: ["f192dr6e", "f1g4150c"],
    Jwef8y: "fjxutwb",
    Be0v6ae: "f1llr77y",
    B5kxglz: ["fzk0khw", "fjj8tog"],
    B3pwyw6: "fb1u8ub",
    Bymgtzf: ["fjj8tog", "fzk0khw"],
    ecr2s2: "fophhak",
    dmfk: "f1uohb70",
    B4ofi8: ["f1jm7v1n", "f1bus3rq"],
    jgq6uv: "f1fbu7rr",
    Baxewws: ["f1bus3rq", "f1jm7v1n"]
  },
  outlineInteractiveSelected: {
    De3pzq: "f1q9pm1r",
    B0n5ga8: "f16eln5f",
    s924m2: ["fa2okxs", "fg4zq3l"],
    B1q35kw: "ff6932p",
    Gp14am: ["fg4zq3l", "fa2okxs"],
    Jwef8y: "fg59vm4"
  },
  subtle: {
    De3pzq: "fhovq9v",
    E5pizo: "f1couhl3",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"]
  },
  subtleInteractive: {
    Bceei9c: "f1k6fduh",
    De3pzq: "fhovq9v",
    E5pizo: "f1couhl3",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"],
    Jwef8y: "f1t94bn6",
    ecr2s2: "f1wfn5kd"
  },
  subtleInteractiveSelected: {
    De3pzq: "fq5gl1p",
    B0n5ga8: "f16eln5f",
    s924m2: ["fa2okxs", "fg4zq3l"],
    B1q35kw: "ff6932p",
    Gp14am: ["fg4zq3l", "fa2okxs"],
    Jwef8y: "f1uqaxdt"
  },
  highContrastSelected: {
    ycbfsm: "fkc42ay",
    Bsw6fvg: "f1rirnrt",
    Bbusuzp: "f1lkg8j3",
    xgfqdd: "f1nkj0oa",
    Bmmdzwq: "fey3rwa",
    zkpvhj: ["f5jhx11", "fff9uym"],
    B20bydw: "fm7n0jy",
    Bwwwggl: ["fff9uym", "f5jhx11"]
  },
  highContrastInteractive: {
    h1vhog: "fpfvv3l",
    kslmdy: "f1oamsm6",
    Baaf6ca: "f1il21bs",
    x9zz3d: "fnn5dk0",
    Bmmdzwq: "fey3rwa",
    zkpvhj: ["f5jhx11", "fff9uym"],
    B20bydw: "fm7n0jy",
    Bwwwggl: ["fff9uym", "f5jhx11"]
  },
  select: {
    qhf8xq: "f1euv43f",
    Bhzewxz: "fqclxi7",
    j35jbq: ["fiv86kb", "f36uhnt"],
    Bj3rh1h: "f19g0ac"
  },
  hiddenCheckbox: {
    B68tc82: "f1p9o1ba",
    Bmxbyg5: "f1sil6mw",
    a9b677: "frkrog8",
    Bqenvij: "f1mpe4l3",
    qhf8xq: "f1euv43f",
    Bh84pgu: "fmf1zke",
    Bgl5zvf: "f1wch0ki",
    Huce71: "fz5stix"
  }
}, {
  d: [".f1p9o1ba{overflow-x:hidden;}", ".f1sil6mw{overflow-y:hidden;}", ".fifeqxg{border-bottom-right-radius:var(--fui-Card--border-radius);}", ".f899z7z{border-bottom-left-radius:var(--fui-Card--border-radius);}", ".f4h3tyx{border-top-right-radius:var(--fui-Card--border-radius);}", ".f18ur2pz{border-top-left-radius:var(--fui-Card--border-radius);}", ".f1lplnzb{padding-top:var(--fui-Card--size);}", ".f10m5gbb{padding-right:var(--fui-Card--size);}", ".f1k04kkk{padding-left:var(--fui-Card--size);}", ".fhftqfp{padding-bottom:var(--fui-Card--size);}", ".fxsr4vj{column-gap:var(--fui-Card--size);}", ".fcvsdzp{row-gap:var(--fui-Card--size);}", ".f22iagw{display:flex;}", ".f10pi13n{position:relative;}", ".f1ewtqcl{box-sizing:border-box;}", ".f19n0e5{color:var(--colorNeutralForeground1);}", ".f1mdlcz9::after{position:absolute;}", ".frwkxtg::after{top:0;}", ".f1n6gb5g::after{left:0;}", ".f15yvnhg::after{right:0;}", ".fo72kxq::after{bottom:0;}", '.f13zj6fq::after{content:"";}', ".f1nwj1ja::after{pointer-events:none;}", ".f8rth92::after{border-top-style:solid;}", ".flthirb::after{border-right-style:solid;}", ".ftkbnf5::after{border-left-style:solid;}", ".f1lh990p::after{border-bottom-style:solid;}", ".f6czdpx::after{border-top-width:var(--strokeWidthThin);}", ".f13hvwk3::after{border-right-width:var(--strokeWidthThin);}", ".f1en4csx::after{border-left-width:var(--strokeWidthThin);}", ".f1i1u9k0::after{border-bottom-width:var(--strokeWidthThin);}", ".f1qnomq5::after{border-bottom-right-radius:var(--fui-Card--border-radius);}", ".f2fl922::after{border-bottom-left-radius:var(--fui-Card--border-radius);}", ".f1anhtl::after{border-top-right-radius:var(--fui-Card--border-radius);}", ".f1n2zcl3::after{border-top-left-radius:var(--fui-Card--border-radius);}", ".f16v3d5c>.fui-CardHeader,.f16v3d5c>.fui-CardFooter{flex-shrink:0;}", ".f8hki3x[data-fui-focus-visible]{border-top-color:transparent;}", ".f1d2448m[data-fui-focus-visible]{border-right-color:transparent;}", ".ffh67wi[data-fui-focus-visible]{border-left-color:transparent;}", ".f1bjia2o[data-fui-focus-visible]{border-bottom-color:transparent;}", '.f15bsgw9[data-fui-focus-visible]::after{content:"";}', ".f14e48fq[data-fui-focus-visible]::after{position:absolute;}", ".f18yb2kv[data-fui-focus-visible]::after{pointer-events:none;}", ".fd6o370[data-fui-focus-visible]::after{z-index:1;}", ".fh1cnn4[data-fui-focus-visible]::after{border-top-style:solid;}", ".fy7oxxb[data-fui-focus-visible]::after{border-right-style:solid;}", ".f184ne2d[data-fui-focus-visible]::after{border-left-style:solid;}", ".fpukqih[data-fui-focus-visible]::after{border-bottom-style:solid;}", ".f99gebs[data-fui-focus-visible]::after{border-top-width:var(--strokeWidthThick);}", ".f13b0oaq[data-fui-focus-visible]::after{border-right-width:var(--strokeWidthThick);}", ".f8t2bz6[data-fui-focus-visible]::after{border-left-width:var(--strokeWidthThick);}", ".f1jvq617[data-fui-focus-visible]::after{border-bottom-width:var(--strokeWidthThick);}", ".f11unbnk[data-fui-focus-visible]::after{border-bottom-right-radius:var(--fui-Card--border-radius);}", ".fbd201q[data-fui-focus-visible]::after{border-bottom-left-radius:var(--fui-Card--border-radius);}", ".f12nqxso[data-fui-focus-visible]::after{border-top-right-radius:var(--fui-Card--border-radius);}", ".f1uguk4w[data-fui-focus-visible]::after{border-top-left-radius:var(--fui-Card--border-radius);}", ".f1dvezut[data-fui-focus-visible]::after{border-top-color:var(--colorStrokeFocus2);}", ".fd0oaoj[data-fui-focus-visible]::after{border-right-color:var(--colorStrokeFocus2);}", ".f1cwg4i8[data-fui-focus-visible]::after{border-left-color:var(--colorStrokeFocus2);}", ".fjvm52t[data-fui-focus-visible]::after{border-bottom-color:var(--colorStrokeFocus2);}", ".f15fr7a0[data-fui-focus-visible]::after{top:calc(0px - var(--strokeWidthThick) - -2px);}", ".fwsq40z[data-fui-focus-visible]::after{right:calc(0px - var(--strokeWidthThick) - -2px);}", ".fy0y4wt[data-fui-focus-visible]::after{left:calc(0px - var(--strokeWidthThick) - -2px);}", ".f34ld9f[data-fui-focus-visible]::after{bottom:calc(0px - var(--strokeWidthThick) - -2px);}", ".f1b1k54r[data-fui-focus-within]:focus-within{border-top-color:transparent;}", ".f4ne723[data-fui-focus-within]:focus-within{border-right-color:transparent;}", ".fqqcjud[data-fui-focus-within]:focus-within{border-left-color:transparent;}", ".fh7aioi[data-fui-focus-within]:focus-within{border-bottom-color:transparent;}", '.ffht0p2[data-fui-focus-within]:focus-within::after{content:"";}', ".f1p0ul1q[data-fui-focus-within]:focus-within::after{position:absolute;}", ".f1c901ms[data-fui-focus-within]:focus-within::after{pointer-events:none;}", ".f1alokd7[data-fui-focus-within]:focus-within::after{z-index:1;}", ".f78i1la[data-fui-focus-within]:focus-within::after{border-top-style:solid;}", ".f1kvsw7t[data-fui-focus-within]:focus-within::after{border-right-style:solid;}", ".f1bw8brt[data-fui-focus-within]:focus-within::after{border-left-style:solid;}", ".f8k7e5g[data-fui-focus-within]:focus-within::after{border-bottom-style:solid;}", ".f125hn41[data-fui-focus-within]:focus-within::after{border-top-width:var(--strokeWidthThick);}", ".fgxkx34[data-fui-focus-within]:focus-within::after{border-right-width:var(--strokeWidthThick);}", ".f1v56tyl[data-fui-focus-within]:focus-within::after{border-left-width:var(--strokeWidthThick);}", ".fdxas6f[data-fui-focus-within]:focus-within::after{border-bottom-width:var(--strokeWidthThick);}", ".fxwickw[data-fui-focus-within]:focus-within::after{border-bottom-right-radius:var(--fui-Card--border-radius);}", ".f1ia5cve[data-fui-focus-within]:focus-within::after{border-bottom-left-radius:var(--fui-Card--border-radius);}", ".f194aguw[data-fui-focus-within]:focus-within::after{border-top-right-radius:var(--fui-Card--border-radius);}", ".fqicc6c[data-fui-focus-within]:focus-within::after{border-top-left-radius:var(--fui-Card--border-radius);}", ".fq4eyks[data-fui-focus-within]:focus-within::after{border-top-color:var(--colorStrokeFocus2);}", ".f1ya6x16[data-fui-focus-within]:focus-within::after{border-right-color:var(--colorStrokeFocus2);}", ".ftuszwa[data-fui-focus-within]:focus-within::after{border-left-color:var(--colorStrokeFocus2);}", ".f1e2iu44[data-fui-focus-within]:focus-within::after{border-bottom-color:var(--colorStrokeFocus2);}", ".f1amxum7[data-fui-focus-within]:focus-within::after{top:calc(0px - var(--strokeWidthThick) - -2px);}", ".f1cec8w7[data-fui-focus-within]:focus-within::after{right:calc(0px - var(--strokeWidthThick) - -2px);}", ".f554mv0[data-fui-focus-within]:focus-within::after{left:calc(0px - var(--strokeWidthThick) - -2px);}", ".f1sj6kbr[data-fui-focus-within]:focus-within::after{bottom:calc(0px - var(--strokeWidthThick) - -2px);}", ".f1063pyq{flex-direction:row;}", ".f122n59{align-items:center;}", ".fpfyeui>.fui-CardPreview{margin-top:calc(var(--fui-Card--size) * -1);}", ".fwi74qw>.fui-CardPreview{margin-bottom:calc(var(--fui-Card--size) * -1);}", '.ffcmwrh>:not([aria-hidden="true"]).fui-CardPreview:first-of-type{margin-left:calc(var(--fui-Card--size) * -1);}', '.f6ppoih>:not([aria-hidden="true"]).fui-CardPreview:first-of-type{margin-right:calc(var(--fui-Card--size) * -1);}', '.f1dc9p14>:not([aria-hidden="true"]).fui-CardPreview:last-of-type{margin-right:calc(var(--fui-Card--size) * -1);}', '.fd933vt>:not([aria-hidden="true"]).fui-CardPreview:last-of-type{margin-left:calc(var(--fui-Card--size) * -1);}', ".f18esqgw>.fui-CardHeader:last-of-type,.f18esqgw>.fui-CardFooter:last-of-type{flex-grow:1;}", ".f1vx9l62{flex-direction:column;}", ".fobhde4>.fui-CardPreview{margin-left:calc(var(--fui-Card--size) * -1);}", ".fx5r7kn>.fui-CardPreview{margin-right:calc(var(--fui-Card--size) * -1);}", '.f19chtn8>:not([aria-hidden="true"]).fui-CardPreview:first-of-type{margin-top:calc(var(--fui-Card--size) * -1);}', ".fuvs6re>.fui-Card__floatingAction+.fui-CardPreview{margin-top:calc(var(--fui-Card--size) * -1);}", '.fy4glsf>:not([aria-hidden="true"]).fui-CardPreview:last-of-type{margin-bottom:calc(var(--fui-Card--size) * -1);}', ".f1pi9uxy{--fui-Card--size:8px;}", ".f1h1zgly{--fui-Card--border-radius:var(--borderRadiusSmall);}", ".frsmuga{--fui-Card--size:12px;}", ".fuldkky{--fui-Card--border-radius:var(--borderRadiusMedium);}", ".f1qua4xo{--fui-Card--size:16px;}", ".fimkt6v{--fui-Card--border-radius:var(--borderRadiusLarge);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f1whvlc6{box-shadow:var(--shadow4);}", ".f16gxe2i::after{border-top-color:var(--colorTransparentStroke);}", ".fpgykix::after{border-right-color:var(--colorTransparentStroke);}", ".fzybk4o::after{border-left-color:var(--colorTransparentStroke);}", ".f1osi826::after{border-bottom-color:var(--colorTransparentStroke);}", ".f1k6fduh{cursor:pointer;}", ".f1nfm20t{background-color:var(--colorNeutralBackground1Selected);}", ".f16eln5f::after{border-top-color:var(--colorNeutralStroke1Selected);}", ".fa2okxs::after{border-right-color:var(--colorNeutralStroke1Selected);}", ".fg4zq3l::after{border-left-color:var(--colorNeutralStroke1Selected);}", ".ff6932p::after{border-bottom-color:var(--colorNeutralStroke1Selected);}", ".f1dmdbja{background-color:var(--colorNeutralBackground2);}", ".fjxa0vh{background-color:var(--colorNeutralBackground2Selected);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f1couhl3{box-shadow:none;}", ".ft83z1f::after{border-top-color:var(--colorNeutralStroke1);}", ".f1g4150c::after{border-right-color:var(--colorNeutralStroke1);}", ".f192dr6e::after{border-left-color:var(--colorNeutralStroke1);}", ".f1qnawh6::after{border-bottom-color:var(--colorNeutralStroke1);}", ".f1q9pm1r{background-color:var(--colorTransparentBackgroundSelected);}", ".fhovq9v{background-color:var(--colorSubtleBackground);}", ".fq5gl1p{background-color:var(--colorSubtleBackgroundSelected);}", ".f1euv43f{position:absolute;}", ".fqclxi7{top:4px;}", ".fiv86kb{right:4px;}", ".f36uhnt{left:4px;}", ".f19g0ac{z-index:1;}", ".frkrog8{width:1px;}", ".f1mpe4l3{height:1px;}", ".fmf1zke{clip:rect(0 0 0 0);}", ".f1wch0ki{clip-path:inset(50%);}", ".fz5stix{white-space:nowrap;}"],
  f: [".ftqa4ok:focus{outline-style:none;}"],
  i: [".f2hkw1w:focus-visible{outline-style:none;}"],
  m: [["@media (forced-colors: active){.f226i61[data-fui-focus-visible]::after{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f13kzufm[data-fui-focus-visible]::after{border-right-color:Highlight;}.fsx75g8[data-fui-focus-visible]::after{border-left-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.flujwa2[data-fui-focus-visible]::after{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1k55ka9[data-fui-focus-within]:focus-within::after{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f16pcs8n[data-fui-focus-within]:focus-within::after{border-left-color:Highlight;}.fgclinu[data-fui-focus-within]:focus-within::after{border-right-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fycbxed[data-fui-focus-within]:focus-within::after{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fkc42ay{forced-color-adjust:none;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1rirnrt{background-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1lkg8j3{color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1nkj0oa .fui-CardPreview,.f1nkj0oa .fui-CardFooter{forced-color-adjust:auto;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fey3rwa::after{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f5jhx11::after{border-right-color:Highlight;}.fff9uym::after{border-left-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fm7n0jy::after{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fpfvv3l:hover,.fpfvv3l :active{forced-color-adjust:none;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1oamsm6:hover,.f1oamsm6 :active{background-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1il21bs:hover,.f1il21bs :active{color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fnn5dk0:hover .fui-CardPreview,.fnn5dk0 :active .fui-CardPreview,.fnn5dk0:hover .fui-CardFooter,.fnn5dk0 :active .fui-CardFooter{forced-color-adjust:auto;}}", {
    m: "(forced-colors: active)"
  }]],
  h: [".f1knas48:hover{background-color:var(--colorNeutralBackground1Hover);}", ".f1m145df:hover{box-shadow:var(--shadow8);}", ".f1kz6goq:hover{background-color:var(--colorNeutralBackground1Selected);}", ".f1uvynv3:hover{background-color:var(--colorNeutralBackground2Hover);}", ".fehi0vp:hover{background-color:var(--colorNeutralBackground2Selected);}", ".fjxutwb:hover{background-color:var(--colorTransparentBackgroundHover);}", ".f1llr77y:hover::after{border-top-color:var(--colorNeutralStroke1Hover);}", ".fzk0khw:hover::after{border-right-color:var(--colorNeutralStroke1Hover);}", ".fjj8tog:hover::after{border-left-color:var(--colorNeutralStroke1Hover);}", ".fb1u8ub:hover::after{border-bottom-color:var(--colorNeutralStroke1Hover);}", ".fg59vm4:hover{background-color:var(--colorTransparentBackgroundSelected);}", ".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}", ".f1uqaxdt:hover{background-color:var(--colorSubtleBackgroundSelected);}"],
  a: [".fb40n2d:active{background-color:var(--colorNeutralBackground1Pressed);}", ".f1yhgkbh:active{background-color:var(--colorNeutralBackground2Pressed);}", ".fophhak:active{background-color:var(--colorTransparentBackgroundPressed);}", ".f1uohb70:active::after{border-top-color:var(--colorNeutralStroke1Pressed);}", ".f1jm7v1n:active::after{border-right-color:var(--colorNeutralStroke1Pressed);}", ".f1bus3rq:active::after{border-left-color:var(--colorNeutralStroke1Pressed);}", ".f1fbu7rr:active::after{border-bottom-color:var(--colorNeutralStroke1Pressed);}", ".f1wfn5kd:active{background-color:var(--colorSubtleBackgroundPressed);}"]
}), wy = (e) => {
  const t = yy(), r = {
    horizontal: t.orientationHorizontal,
    vertical: t.orientationVertical
  }, o = {
    small: t.sizeSmall,
    medium: t.sizeMedium,
    large: t.sizeLarge
  }, n = {
    filled: t.filled,
    "filled-alternative": t.filledAlternative,
    outline: t.outline,
    subtle: t.subtle
  }, i = {
    filled: t.filledInteractiveSelected,
    "filled-alternative": t.filledAlternativeInteractiveSelected,
    outline: t.outlineInteractiveSelected,
    subtle: t.subtleInteractiveSelected
  }, a = {
    filled: t.filledInteractive,
    "filled-alternative": t.filledAlternativeInteractive,
    outline: t.outlineInteractive,
    subtle: t.subtleInteractive
  }, s = e.interactive || e.selectable, l = k.useMemo(() => e.selectable ? e.selectFocused ? t.selectableFocused : "" : t.focused, [e.selectFocused, e.selectable, t.focused, t.selectableFocused]);
  return e.root.className = K(
    gi.root,
    t.root,
    r[e.orientation],
    o[e.size],
    n[e.appearance],
    s && a[e.appearance],
    e.selected && i[e.appearance],
    // Focus overrides
    l,
    // High contrast overrides
    s && t.highContrastInteractive,
    e.selected && t.highContrastSelected,
    e.root.className
  ), e.floatingAction && (e.floatingAction.className = K(gi.floatingAction, t.select, e.floatingAction.className)), e.checkbox && (e.checkbox.className = K(gi.checkbox, t.hiddenCheckbox, e.checkbox.className)), e;
};
function ky({ selectableA11yProps: e }) {
  return {
    selectableA11yProps: e
  };
}
const ed = /* @__PURE__ */ k.forwardRef((e, t) => {
  const r = my(e, t), o = ky(r);
  return wy(r), _y(r, o);
});
ed.displayName = "Card";
var xy = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function(t, r) {
    return "Cannot apply '" + t + "' to '" + r.toString() + "': Field not found.";
  },
  /*
  2(prop) {
      return `invalid decorator for '${prop.toString()}'`
  },
  3(prop) {
      return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
  },
  4(prop) {
      return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
  },
  */
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function(t, r) {
    return "[mobx.array] Index out of bounds, " + t + " is larger than " + r;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function(t) {
    return "Cannot initialize from classes that inherit from Map: " + t.constructor.name;
  },
  20: function(t) {
    return "Cannot initialize map from " + t;
  },
  21: function(t) {
    return "Cannot convert to map from '" + t + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function(t) {
    return "Cannot obtain administration from " + t;
  },
  25: function(t, r) {
    return "the entry '" + t + "' does not exist in the observable map '" + r + "'";
  },
  26: "please specify a property",
  27: function(t, r) {
    return "no observable property '" + t.toString() + "' found on the observable object '" + r + "'";
  },
  28: function(t) {
    return "Cannot obtain atom from " + t;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function(t, r) {
    return "Cycle detected in computation " + t + ": " + r;
  },
  33: function(t) {
    return "The setter of computed value '" + t + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function(t) {
    return "[ComputedValue '" + t + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function(t) {
    return "[mobx] `observableArray." + t + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + t + "()` instead";
  },
  38: "'ownKeys()' can only be used on observable objects",
  39: "'defineProperty()' can only be used on observable objects"
}, Ey = process.env.NODE_ENV !== "production" ? xy : {};
function A(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    r[o - 1] = arguments[o];
  if (process.env.NODE_ENV !== "production") {
    var n = typeof e == "string" ? e : Ey[e];
    throw typeof n == "function" && (n = n.apply(null, r)), new Error("[MobX] " + n);
  }
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (r.length ? " " + r.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var Sy = {};
function La() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : Sy;
}
var td = Object.assign, ln = Object.getOwnPropertyDescriptor, wt = Object.defineProperty, Rn = Object.prototype, cn = [];
Object.freeze(cn);
var rd = {};
Object.freeze(rd);
var By = typeof Proxy < "u", Ty = /* @__PURE__ */ Object.toString();
function od() {
  By || A(process.env.NODE_ENV !== "production" ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
}
function Mr(e) {
  process.env.NODE_ENV !== "production" && O.verifyProxies && A("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + e);
}
function vt() {
  return ++O.mobxGuid;
}
function Va(e) {
  var t = !1;
  return function() {
    if (!t)
      return t = !0, e.apply(this, arguments);
  };
}
var mr = function() {
};
function Te(e) {
  return typeof e == "function";
}
function ir(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Dn(e) {
  return e !== null && typeof e == "object";
}
function $e(e) {
  if (!Dn(e))
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null)
    return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === Ty;
}
function nd(e) {
  var t = e == null ? void 0 : e.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function po(e, t, r) {
  wt(e, t, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: r
  });
}
function id(e, t, r) {
  wt(e, t, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: r
  });
}
function fr(e, t) {
  var r = "isMobX" + e;
  return t.prototype[r] = !0, function(o) {
    return Dn(o) && o[r] === !0;
  };
}
function Rr(e) {
  return e instanceof Map;
}
function bo(e) {
  return e instanceof Set;
}
var ad = typeof Object.getOwnPropertySymbols < "u";
function Ny(e) {
  var t = Object.keys(e);
  if (!ad)
    return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length ? [].concat(t, r.filter(function(o) {
    return Rn.propertyIsEnumerable.call(e, o);
  })) : t;
}
var Br = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : ad ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function ra(e) {
  return typeof e == "string" ? e : typeof e == "symbol" ? e.toString() : new String(e).toString();
}
function sd(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function ot(e, t) {
  return Rn.hasOwnProperty.call(e, t);
}
var Oy = Object.getOwnPropertyDescriptors || function(t) {
  var r = {};
  return Br(t).forEach(function(o) {
    r[o] = ln(t, o);
  }), r;
};
function bl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var o = t[r];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Ry(o.key), o);
  }
}
function Ha(e, t, r) {
  return t && bl(e.prototype, t), r && bl(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function zt() {
  return zt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, zt.apply(this, arguments);
}
function ld(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, oa(e, t);
}
function oa(e, t) {
  return oa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, n) {
    return o.__proto__ = n, o;
  }, oa(e, t);
}
function Wo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Py(e, t) {
  if (e) {
    if (typeof e == "string")
      return gl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return gl(e, t);
  }
}
function gl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, o = new Array(t); r < t; r++)
    o[r] = e[r];
  return o;
}
function _r(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Py(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var o = 0;
    return function() {
      return o >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[o++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cy(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(e, t || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ry(e) {
  var t = Cy(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Ve = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function kt(e) {
  function t(r, o) {
    if (go(o))
      return e.decorate_20223_(r, o);
    Dr(r, o, e);
  }
  return Object.assign(t, e);
}
function Dr(e, t, r) {
  if (ot(e, Ve) || po(e, Ve, zt({}, e[Ve])), process.env.NODE_ENV !== "production" && dn(r) && !ot(e[Ve], t)) {
    var o = e.constructor.name + ".prototype." + t.toString();
    A("'" + o + "' is decorated with 'override', but no such decorated member was found on prototype.");
  }
  Dy(e, r, t), dn(r) || (e[Ve][t] = r);
}
function Dy(e, t, r) {
  if (process.env.NODE_ENV !== "production" && !dn(t) && ot(e[Ve], r)) {
    var o = e.constructor.name + ".prototype." + r.toString(), n = e[Ve][r].annotationType_, i = t.annotationType_;
    A("Cannot apply '@" + i + "' to '" + o + "':" + (`
The field is already decorated with '@` + n + "'.") + `
Re-decorating fields is not allowed.
Use '@override' decorator for methods overridden by subclass.`);
  }
}
function zy(e) {
  return ot(e, Ve) || po(e, Ve, zt({}, e[Ve])), e[Ve];
}
function go(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
function zn(e, t) {
  process.env.NODE_ENV !== "production" && !t.includes(e.kind) && A("The decorator applied to '" + String(e.name) + "' cannot be used on a " + e.kind + " element");
}
var W = /* @__PURE__ */ Symbol("mobx administration"), mo = /* @__PURE__ */ function() {
  function e(r) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "Atom@" + vt() : "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = ae.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = r;
  }
  var t = e.prototype;
  return t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(o) {
      return o();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(o) {
      return o();
    });
  }, t.reportObserved = function() {
    return Td(this);
  }, t.reportChanged = function() {
    et(), Nd(this), tt();
  }, t.toString = function() {
    return this.name_;
  }, e;
}(), $a = /* @__PURE__ */ fr("Atom", mo);
function cd(e, t, r) {
  t === void 0 && (t = mr), r === void 0 && (r = mr);
  var o = new mo(e);
  return t !== mr && K1(o, t), r !== mr && Ad(o, r), o;
}
function Ay(e, t) {
  return e === t;
}
function Fy(e, t) {
  return Ja(e, t);
}
function jy(e, t) {
  return Ja(e, t, 1);
}
function Iy(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var un = {
  identity: Ay,
  structural: Fy,
  default: Iy,
  shallow: jy
};
function ar(e, t, r) {
  return ao(e) ? e : Array.isArray(e) ? Oe.array(e, {
    name: r
  }) : $e(e) ? Oe.object(e, void 0, {
    name: r
  }) : Rr(e) ? Oe.map(e, {
    name: r
  }) : bo(e) ? Oe.set(e, {
    name: r
  }) : typeof e == "function" && !yo(e) && !io(e) ? nd(e) ? Tr(e) : no(r, e) : e;
}
function My(e, t, r) {
  if (e == null || ur(e) || xo(e) || jt(e) || zr(e))
    return e;
  if (Array.isArray(e))
    return Oe.array(e, {
      name: r,
      deep: !1
    });
  if ($e(e))
    return Oe.object(e, void 0, {
      name: r,
      deep: !1
    });
  if (Rr(e))
    return Oe.map(e, {
      name: r,
      deep: !1
    });
  if (bo(e))
    return Oe.set(e, {
      name: r,
      deep: !1
    });
  process.env.NODE_ENV !== "production" && A("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function An(e) {
  return e;
}
function qy(e, t) {
  return process.env.NODE_ENV !== "production" && ao(e) && A("observable.struct should not be used with observable values"), Ja(e, t) ? t : e;
}
var Ly = "override";
function dn(e) {
  return e.annotationType_ === Ly;
}
function _o(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Vy,
    extend_: Hy,
    decorate_20223_: $y
  };
}
function Vy(e, t, r, o) {
  var n;
  if ((n = this.options_) != null && n.bound)
    return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (o === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (yo(r.value))
    return 1;
  var i = ud(e, this, t, r, !1);
  return wt(o, t, i), 2;
}
function Hy(e, t, r, o) {
  var n = ud(e, this, t, r);
  return e.defineProperty_(t, n, o);
}
function $y(e, t) {
  process.env.NODE_ENV !== "production" && zn(t, ["method", "field"]);
  var r = t.kind, o = t.name, n = t.addInitializer, i = this, a = function(c) {
    var u, d, f, h;
    return sr((u = (d = i.options_) == null ? void 0 : d.name) != null ? u : o.toString(), c, (f = (h = i.options_) == null ? void 0 : h.autoAction) != null ? f : !1);
  };
  if (r == "field") {
    n(function() {
      Dr(this, o, i);
    });
    return;
  }
  if (r == "method") {
    var s;
    return yo(e) || (e = a(e)), (s = this.options_) != null && s.bound && n(function() {
      var l = this, c = l[o].bind(l);
      c.isMobxAction = !0, l[o] = c;
    }), e;
  }
  A("Cannot apply '" + i.annotationType_ + "' to '" + String(o) + "' (kind: " + r + "):" + (`
'` + i.annotationType_ + "' can only be used on properties with a function value."));
}
function Wy(e, t, r, o) {
  var n = t.annotationType_, i = o.value;
  process.env.NODE_ENV !== "production" && !Te(i) && A("Cannot apply '" + n + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + n + "' can only be used on properties with a function value."));
}
function ud(e, t, r, o, n) {
  var i, a, s, l, c, u, d;
  n === void 0 && (n = O.safeDescriptors), Wy(e, t, r, o);
  var f = o.value;
  if ((i = t.options_) != null && i.bound) {
    var h;
    f = f.bind((h = e.proxy_) != null ? h : e.target_);
  }
  return {
    value: sr(
      (a = (s = t.options_) == null ? void 0 : s.name) != null ? a : r.toString(),
      f,
      (l = (c = t.options_) == null ? void 0 : c.autoAction) != null ? l : !1,
      // https://github.com/mobxjs/mobx/discussions/3140
      (u = t.options_) != null && u.bound ? (d = e.proxy_) != null ? d : e.target_ : void 0
    ),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: n ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !n
  };
}
function dd(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Uy,
    extend_: Gy,
    decorate_20223_: Ky
  };
}
function Uy(e, t, r, o) {
  var n;
  if (o === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if ((n = this.options_) != null && n.bound && (!ot(e.target_, t) || !io(e.target_[t])) && this.extend_(e, t, r, !1) === null)
    return 0;
  if (io(r.value))
    return 1;
  var i = fd(e, this, t, r, !1, !1);
  return wt(o, t, i), 2;
}
function Gy(e, t, r, o) {
  var n, i = fd(e, this, t, r, (n = this.options_) == null ? void 0 : n.bound);
  return e.defineProperty_(t, i, o);
}
function Ky(e, t) {
  var r;
  process.env.NODE_ENV !== "production" && zn(t, ["method"]);
  var o = t.name, n = t.addInitializer;
  return io(e) || (e = Tr(e)), (r = this.options_) != null && r.bound && n(function() {
    var i = this, a = i[o].bind(i);
    a.isMobXFlow = !0, i[o] = a;
  }), e;
}
function Xy(e, t, r, o) {
  var n = t.annotationType_, i = o.value;
  process.env.NODE_ENV !== "production" && !Te(i) && A("Cannot apply '" + n + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + n + "' can only be used on properties with a generator function value."));
}
function fd(e, t, r, o, n, i) {
  i === void 0 && (i = O.safeDescriptors), Xy(e, t, r, o);
  var a = o.value;
  if (io(a) || (a = Tr(a)), n) {
    var s;
    a = a.bind((s = e.proxy_) != null ? s : e.target_), a.isMobXFlow = !0;
  }
  return {
    value: a,
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: i ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !i
  };
}
function Wa(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Yy,
    extend_: Jy,
    decorate_20223_: Qy
  };
}
function Yy(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Jy(e, t, r, o) {
  return Zy(e, this, t, r), e.defineComputedProperty_(t, zt({}, this.options_, {
    get: r.get,
    set: r.set
  }), o);
}
function Qy(e, t) {
  process.env.NODE_ENV !== "production" && zn(t, ["getter"]);
  var r = this, o = t.name, n = t.addInitializer;
  return n(function() {
    var i = hr(this)[W], a = zt({}, r.options_, {
      get: e,
      context: this
    });
    a.name || (a.name = process.env.NODE_ENV !== "production" ? i.name_ + "." + o.toString() : "ObservableObject." + o.toString()), i.values_.set(o, new lr(a));
  }), function() {
    return this[W].getObservablePropValue_(o);
  };
}
function Zy(e, t, r, o) {
  var n = t.annotationType_, i = o.get;
  process.env.NODE_ENV !== "production" && !i && A("Cannot apply '" + n + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + n + "' can only be used on getter(+setter) properties."));
}
function Fn(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: e1,
    extend_: t1,
    decorate_20223_: r1
  };
}
function e1(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function t1(e, t, r, o) {
  var n, i;
  return o1(e, this, t, r), e.defineObservableProperty_(t, r.value, (n = (i = this.options_) == null ? void 0 : i.enhancer) != null ? n : ar, o);
}
function r1(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (t.kind === "field")
      throw A("Please use `@observable accessor " + String(t.name) + "` instead of `@observable " + String(t.name) + "`");
    zn(t, ["accessor"]);
  }
  var r = this, o = t.kind, n = t.name, i = /* @__PURE__ */ new WeakSet();
  function a(s, l) {
    var c, u, d = hr(s)[W], f = new or(l, (c = (u = r.options_) == null ? void 0 : u.enhancer) != null ? c : ar, process.env.NODE_ENV !== "production" ? d.name_ + "." + n.toString() : "ObservableObject." + n.toString(), !1);
    d.values_.set(n, f), i.add(s);
  }
  if (o == "accessor")
    return {
      get: function() {
        return i.has(this) || a(this, e.get.call(this)), this[W].getObservablePropValue_(n);
      },
      set: function(l) {
        return i.has(this) || a(this, l), this[W].setObservablePropValue_(n, l);
      },
      init: function(l) {
        return i.has(this) || a(this, l), l;
      }
    };
}
function o1(e, t, r, o) {
  var n = t.annotationType_;
  process.env.NODE_ENV !== "production" && !("value" in o) && A("Cannot apply '" + n + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + n + "' cannot be used on getter/setter properties"));
}
var n1 = "true", i1 = /* @__PURE__ */ vd();
function vd(e) {
  return {
    annotationType_: n1,
    options_: e,
    make_: a1,
    extend_: s1,
    decorate_20223_: l1
  };
}
function a1(e, t, r, o) {
  var n, i;
  if (r.get)
    return jn.make_(e, t, r, o);
  if (r.set) {
    var a = sr(t.toString(), r.set);
    return o === e.target_ ? e.defineProperty_(t, {
      configurable: O.safeDescriptors ? e.isPlainObject_ : !0,
      set: a
    }) === null ? 0 : 2 : (wt(o, t, {
      configurable: !0,
      set: a
    }), 2);
  }
  if (o !== e.target_ && typeof r.value == "function") {
    var s;
    if (nd(r.value)) {
      var l, c = (l = this.options_) != null && l.autoBind ? Tr.bound : Tr;
      return c.make_(e, t, r, o);
    }
    var u = (s = this.options_) != null && s.autoBind ? no.bound : no;
    return u.make_(e, t, r, o);
  }
  var d = ((n = this.options_) == null ? void 0 : n.deep) === !1 ? Oe.ref : Oe;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, o);
}
function s1(e, t, r, o) {
  var n, i;
  if (r.get)
    return jn.extend_(e, t, r, o);
  if (r.set)
    return e.defineProperty_(t, {
      configurable: O.safeDescriptors ? e.isPlainObject_ : !0,
      set: sr(t.toString(), r.set)
    }, o);
  if (typeof r.value == "function" && (n = this.options_) != null && n.autoBind) {
    var a;
    r.value = r.value.bind((a = e.proxy_) != null ? a : e.target_);
  }
  var s = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? Oe.ref : Oe;
  return s.extend_(e, t, r, o);
}
function l1(e, t) {
  A("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var c1 = "observable", u1 = "observable.ref", d1 = "observable.shallow", f1 = "observable.struct", hd = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(hd);
function Ao(e) {
  return e || hd;
}
var na = /* @__PURE__ */ Fn(c1), v1 = /* @__PURE__ */ Fn(u1, {
  enhancer: An
}), h1 = /* @__PURE__ */ Fn(d1, {
  enhancer: My
}), p1 = /* @__PURE__ */ Fn(f1, {
  enhancer: qy
}), pd = /* @__PURE__ */ kt(na);
function Fo(e) {
  return e.deep === !0 ? ar : e.deep === !1 ? An : g1(e.defaultDecorator);
}
function b1(e) {
  var t;
  return e ? (t = e.defaultDecorator) != null ? t : vd(e) : void 0;
}
function g1(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : ar;
}
function bd(e, t, r) {
  if (go(t))
    return na.decorate_20223_(e, t);
  if (ir(t)) {
    Dr(e, t, na);
    return;
  }
  return ao(e) ? e : $e(e) ? Oe.object(e, t, r) : Array.isArray(e) ? Oe.array(e, t) : Rr(e) ? Oe.map(e, t) : bo(e) ? Oe.set(e, t) : typeof e == "object" && e !== null ? e : Oe.box(e, t);
}
td(bd, pd);
var m1 = {
  box: function(t, r) {
    var o = Ao(r);
    return new or(t, Fo(o), o.name, !0, o.equals);
  },
  array: function(t, r) {
    var o = Ao(r);
    return (O.useProxies === !1 || o.proxy === !1 ? _0 : c0)(t, Fo(o), o.name);
  },
  map: function(t, r) {
    var o = Ao(r);
    return new Wd(t, Fo(o), o.name);
  },
  set: function(t, r) {
    var o = Ao(r);
    return new Kd(t, Fo(o), o.name);
  },
  object: function(t, r, o) {
    return Wt(function() {
      return jd(O.useProxies === !1 || (o == null ? void 0 : o.proxy) === !1 ? hr({}, o) : i0({}, o), t, r);
    });
  },
  ref: /* @__PURE__ */ kt(v1),
  shallow: /* @__PURE__ */ kt(h1),
  deep: pd,
  struct: /* @__PURE__ */ kt(p1)
}, Oe = /* @__PURE__ */ td(bd, m1), gd = "computed", _1 = "computed.struct", ia = /* @__PURE__ */ Wa(gd), y1 = /* @__PURE__ */ Wa(_1, {
  equals: un.structural
}), jn = function(t, r) {
  if (go(r))
    return ia.decorate_20223_(t, r);
  if (ir(r))
    return Dr(t, r, ia);
  if ($e(t))
    return kt(Wa(gd, t));
  process.env.NODE_ENV !== "production" && (Te(t) || A("First argument to `computed` should be an expression."), Te(r) && A("A setter as second argument is no longer supported, use `{ set: fn }` option instead"));
  var o = $e(r) ? r : {};
  return o.get = t, o.name || (o.name = t.name || ""), new lr(o);
};
Object.assign(jn, ia);
jn.struct = /* @__PURE__ */ kt(y1);
var ml, _l, fn = 0, w1 = 1, k1 = (ml = (_l = /* @__PURE__ */ ln(function() {
}, "name")) == null ? void 0 : _l.configurable) != null ? ml : !1, yl = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function sr(e, t, r, o) {
  r === void 0 && (r = !1), process.env.NODE_ENV !== "production" && (Te(t) || A("`action` can only be invoked on functions"), (typeof e != "string" || !e) && A("actions should have valid names, got: '" + e + "'"));
  function n() {
    return md(e, r, t, o || this, arguments);
  }
  return n.isMobxAction = !0, n.toString = function() {
    return t.toString();
  }, k1 && (yl.value = e, wt(n, "name", yl)), n;
}
function md(e, t, r, o, n) {
  var i = x1(e, t, o, n);
  try {
    return r.apply(o, n);
  } catch (a) {
    throw i.error_ = a, a;
  } finally {
    E1(i);
  }
}
function x1(e, t, r, o) {
  var n = process.env.NODE_ENV !== "production" && De() && !!e, i = 0;
  if (process.env.NODE_ENV !== "production" && n) {
    i = Date.now();
    var a = o ? Array.from(o) : cn;
    We({
      type: Ga,
      name: e,
      object: r,
      arguments: a
    });
  }
  var s = O.trackingDerivation, l = !t || !s;
  et();
  var c = O.allowStateChanges;
  l && (vr(), c = In(!0));
  var u = Ua(!0), d = {
    runAsAction_: l,
    prevDerivation_: s,
    prevAllowStateChanges_: c,
    prevAllowStateReads_: u,
    notifySpy_: n,
    startTime_: i,
    actionId_: w1++,
    parentActionId_: fn
  };
  return fn = d.actionId_, d;
}
function E1(e) {
  fn !== e.actionId_ && A(30), fn = e.parentActionId_, e.error_ !== void 0 && (O.suppressReactionErrors = !0), Mn(e.prevAllowStateChanges_), Yr(e.prevAllowStateReads_), tt(), e.runAsAction_ && Rt(e.prevDerivation_), process.env.NODE_ENV !== "production" && e.notifySpy_ && Ue({
    time: Date.now() - e.startTime_
  }), O.suppressReactionErrors = !1;
}
function S1(e, t) {
  var r = In(e);
  try {
    return t();
  } finally {
    Mn(r);
  }
}
function In(e) {
  var t = O.allowStateChanges;
  return O.allowStateChanges = e, t;
}
function Mn(e) {
  O.allowStateChanges = e;
}
var _d, B1 = "create";
_d = Symbol.toPrimitive;
var or = /* @__PURE__ */ function(e) {
  ld(t, e);
  function t(o, n, i, a, s) {
    var l;
    return i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableValue@" + vt() : "ObservableValue"), a === void 0 && (a = !0), s === void 0 && (s = un.default), l = e.call(this, i) || this, l.enhancer = void 0, l.name_ = void 0, l.equals = void 0, l.hasUnreportedChange_ = !1, l.interceptors_ = void 0, l.changeListeners_ = void 0, l.value_ = void 0, l.dehancer = void 0, l.enhancer = n, l.name_ = i, l.equals = s, l.value_ = n(o, void 0, i), process.env.NODE_ENV !== "production" && a && De() && cr({
      type: B1,
      object: Wo(l),
      observableKind: "value",
      debugObjectName: l.name_,
      newValue: "" + l.value_
    }), l;
  }
  var r = t.prototype;
  return r.dehanceValue = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, r.set = function(n) {
    var i = this.value_;
    if (n = this.prepareNewValue_(n), n !== O.UNCHANGED) {
      var a = De();
      process.env.NODE_ENV !== "production" && a && We({
        type: lt,
        object: this,
        observableKind: "value",
        debugObjectName: this.name_,
        newValue: n,
        oldValue: i
      }), this.setNewValue_(n), process.env.NODE_ENV !== "production" && a && Ue();
    }
  }, r.prepareNewValue_ = function(n) {
    if (mt(this), Qe(this)) {
      var i = Ze(this, {
        object: this,
        type: lt,
        newValue: n
      });
      if (!i)
        return O.UNCHANGED;
      n = i.newValue;
    }
    return n = this.enhancer(n, this.value_, this.name_), this.equals(this.value_, n) ? O.UNCHANGED : n;
  }, r.setNewValue_ = function(n) {
    var i = this.value_;
    this.value_ = n, this.reportChanged(), ut(this) && dt(this, {
      type: lt,
      object: this,
      newValue: n,
      oldValue: i
    });
  }, r.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, r.intercept_ = function(n) {
    return wo(this, n);
  }, r.observe_ = function(n, i) {
    return i && n({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: lt,
      newValue: this.value_,
      oldValue: void 0
    }), ko(this, n);
  }, r.raw = function() {
    return this.value_;
  }, r.toJSON = function() {
    return this.get();
  }, r.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, r.valueOf = function() {
    return sd(this.get());
  }, r[_d] = function() {
    return this.valueOf();
  }, t;
}(mo), yd;
yd = Symbol.toPrimitive;
var lr = /* @__PURE__ */ function() {
  function e(r) {
    this.dependenciesState_ = ae.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = ae.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new vn(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = nt.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, r.get || A(31), this.derivation = r.get, this.name_ = r.name || (process.env.NODE_ENV !== "production" ? "ComputedValue@" + vt() : "ComputedValue"), r.set && (this.setter_ = sr(process.env.NODE_ENV !== "production" ? this.name_ + "-setter" : "ComputedValue-setter", r.set)), this.equals_ = r.equals || (r.compareStructural || r.struct ? un.structural : un.default), this.scope_ = r.context, this.requiresReaction_ = r.requiresReaction, this.keepAlive_ = !!r.keepAlive;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    z1(this);
  }, t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(o) {
      return o();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(o) {
      return o();
    });
  }, t.get = function() {
    if (this.isComputing_ && A(32, this.name_, this.derivation), O.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      aa(this) && (this.warnAboutUntrackedRead_(), et(), this.value_ = this.computeValue_(!1), tt());
    else if (Td(this), aa(this)) {
      var o = O.trackingContext;
      this.keepAlive_ && !o && (O.trackingContext = this), this.trackAndCompute() && D1(this), O.trackingContext = o;
    }
    var n = this.value_;
    if (Uo(n))
      throw n.cause;
    return n;
  }, t.set = function(o) {
    if (this.setter_) {
      this.isRunningSetter_ && A(33, this.name_), this.isRunningSetter_ = !0;
      try {
        this.setter_.call(this.scope_, o);
      } finally {
        this.isRunningSetter_ = !1;
      }
    } else
      A(34, this.name_);
  }, t.trackAndCompute = function() {
    var o = this.value_, n = (
      /* see #1208 */
      this.dependenciesState_ === ae.NOT_TRACKING_
    ), i = this.computeValue_(!0), a = n || Uo(o) || Uo(i) || !this.equals_(o, i);
    return a && (this.value_ = i, process.env.NODE_ENV !== "production" && De() && cr({
      observableKind: "computed",
      debugObjectName: this.name_,
      object: this.scope_,
      type: "update",
      oldValue: o,
      newValue: i
    })), a;
  }, t.computeValue_ = function(o) {
    this.isComputing_ = !0;
    var n = In(!1), i;
    if (o)
      i = wd(this, this.derivation, this.scope_);
    else if (O.disableErrorBoundaries === !0)
      i = this.derivation.call(this.scope_);
    else
      try {
        i = this.derivation.call(this.scope_);
      } catch (a) {
        i = new vn(a);
      }
    return Mn(n), this.isComputing_ = !1, i;
  }, t.suspend_ = function() {
    this.keepAlive_ || (sa(this), this.value_ = void 0, process.env.NODE_ENV !== "production" && this.isTracing_ !== nt.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access."));
  }, t.observe_ = function(o, n) {
    var i = this, a = !0, s = void 0;
    return H1(function() {
      var l = i.get();
      if (!a || n) {
        var c = vr();
        o({
          observableKind: "computed",
          debugObjectName: i.name_,
          type: lt,
          object: i,
          newValue: l,
          oldValue: s
        }), Rt(c);
      }
      a = !1, s = l;
    });
  }, t.warnAboutUntrackedRead_ = function() {
    process.env.NODE_ENV !== "production" && (this.isTracing_ !== nt.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."), (typeof this.requiresReaction_ == "boolean" ? this.requiresReaction_ : O.computedRequiresReaction) && console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."));
  }, t.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, t.valueOf = function() {
    return sd(this.get());
  }, t[yd] = function() {
    return this.valueOf();
  }, e;
}(), qn = /* @__PURE__ */ fr("ComputedValue", lr), ae;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(ae || (ae = {}));
var nt;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(nt || (nt = {}));
var vn = function(t) {
  this.cause = void 0, this.cause = t;
};
function Uo(e) {
  return e instanceof vn;
}
function aa(e) {
  switch (e.dependenciesState_) {
    case ae.UP_TO_DATE_:
      return !1;
    case ae.NOT_TRACKING_:
    case ae.STALE_:
      return !0;
    case ae.POSSIBLY_STALE_: {
      for (var t = Ua(!0), r = vr(), o = e.observing_, n = o.length, i = 0; i < n; i++) {
        var a = o[i];
        if (qn(a)) {
          if (O.disableErrorBoundaries)
            a.get();
          else
            try {
              a.get();
            } catch {
              return Rt(r), Yr(t), !0;
            }
          if (e.dependenciesState_ === ae.STALE_)
            return Rt(r), Yr(t), !0;
        }
      }
      return xd(e), Rt(r), Yr(t), !1;
    }
  }
}
function mt(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = e.observers_.size > 0;
    !O.allowStateChanges && (t || O.enforceActions === "always") && console.warn("[MobX] " + (O.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + e.name_);
  }
}
function T1(e) {
  process.env.NODE_ENV !== "production" && !O.allowStateReads && O.observableRequiresReaction && console.warn("[mobx] Observable '" + e.name_ + "' being read outside a reactive context.");
}
function wd(e, t, r) {
  var o = Ua(!0);
  xd(e), e.newObserving_ = new Array(e.observing_.length + 100), e.unboundDepsCount_ = 0, e.runId_ = ++O.runId;
  var n = O.trackingDerivation;
  O.trackingDerivation = e, O.inBatch++;
  var i;
  if (O.disableErrorBoundaries === !0)
    i = t.call(r);
  else
    try {
      i = t.call(r);
    } catch (a) {
      i = new vn(a);
    }
  return O.inBatch--, O.trackingDerivation = n, O1(e), N1(e), Yr(o), i;
}
function N1(e) {
  process.env.NODE_ENV !== "production" && e.observing_.length === 0 && (typeof e.requiresObservable_ == "boolean" ? e.requiresObservable_ : O.reactionRequiresObservable) && console.warn("[mobx] Derivation '" + e.name_ + "' is created/updated without reading any observable value.");
}
function O1(e) {
  for (var t = e.observing_, r = e.observing_ = e.newObserving_, o = ae.UP_TO_DATE_, n = 0, i = e.unboundDepsCount_, a = 0; a < i; a++) {
    var s = r[a];
    s.diffValue_ === 0 && (s.diffValue_ = 1, n !== a && (r[n] = s), n++), s.dependenciesState_ > o && (o = s.dependenciesState_);
  }
  for (r.length = n, e.newObserving_ = null, i = t.length; i--; ) {
    var l = t[i];
    l.diffValue_ === 0 && Sd(l, e), l.diffValue_ = 0;
  }
  for (; n--; ) {
    var c = r[n];
    c.diffValue_ === 1 && (c.diffValue_ = 0, R1(c, e));
  }
  o !== ae.UP_TO_DATE_ && (e.dependenciesState_ = o, e.onBecomeStale_());
}
function sa(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; )
    Sd(t[r], e);
  e.dependenciesState_ = ae.NOT_TRACKING_;
}
function kd(e) {
  var t = vr();
  try {
    return e();
  } finally {
    Rt(t);
  }
}
function vr() {
  var e = O.trackingDerivation;
  return O.trackingDerivation = null, e;
}
function Rt(e) {
  O.trackingDerivation = e;
}
function Ua(e) {
  var t = O.allowStateReads;
  return O.allowStateReads = e, t;
}
function Yr(e) {
  O.allowStateReads = e;
}
function xd(e) {
  if (e.dependenciesState_ !== ae.UP_TO_DATE_) {
    e.dependenciesState_ = ae.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; )
      t[r].lowestObserverState_ = ae.UP_TO_DATE_;
  }
}
var Go = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0;
}, Ko = !0, Ed = !1, O = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ La();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Ko = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new Go().version && (Ko = !1), Ko ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new Go()) : (setTimeout(function() {
    Ed || A(35);
  }, 1), new Go());
}();
function P1() {
  if ((O.pendingReactions.length || O.inBatch || O.isRunningReactions) && A(36), Ed = !0, Ko) {
    var e = La();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), O = new Go();
  }
}
function C1() {
  return O;
}
function R1(e, t) {
  e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
}
function Sd(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && Bd(e);
}
function Bd(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, O.pendingUnobservations.push(e));
}
function et() {
  O.inBatch++;
}
function tt() {
  if (--O.inBatch === 0) {
    Cd();
    for (var e = O.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      r.isPendingUnobservation_ = !1, r.observers_.size === 0 && (r.isBeingObserved_ && (r.isBeingObserved_ = !1, r.onBUO()), r instanceof lr && r.suspend_());
    }
    O.pendingUnobservations = [];
  }
}
function Td(e) {
  T1(e);
  var t = O.trackingDerivation;
  return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved_ && O.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && O.inBatch > 0 && Bd(e), !1);
}
function Nd(e) {
  e.lowestObserverState_ !== ae.STALE_ && (e.lowestObserverState_ = ae.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === ae.UP_TO_DATE_ && (process.env.NODE_ENV !== "production" && t.isTracing_ !== nt.NONE && Od(t, e), t.onBecomeStale_()), t.dependenciesState_ = ae.STALE_;
  }));
}
function D1(e) {
  e.lowestObserverState_ !== ae.STALE_ && (e.lowestObserverState_ = ae.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === ae.POSSIBLY_STALE_ ? (t.dependenciesState_ = ae.STALE_, process.env.NODE_ENV !== "production" && t.isTracing_ !== nt.NONE && Od(t, e)) : t.dependenciesState_ === ae.UP_TO_DATE_ && (e.lowestObserverState_ = ae.UP_TO_DATE_);
  }));
}
function z1(e) {
  e.lowestObserverState_ === ae.UP_TO_DATE_ && (e.lowestObserverState_ = ae.POSSIBLY_STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === ae.UP_TO_DATE_ && (t.dependenciesState_ = ae.POSSIBLY_STALE_, t.onBecomeStale_());
  }));
}
function Od(e, t) {
  if (console.log("[mobx.trace] '" + e.name_ + "' is invalidated due to a change in: '" + t.name_ + "'"), e.isTracing_ === nt.BREAK) {
    var r = [];
    Pd(Id(e), r, 1), new Function(`debugger;
/*
Tracing '` + e.name_ + `'

You are entering this break point because derivation '` + e.name_ + "' is being traced and '" + t.name_ + `' is now forcing it to update.
Just follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update
The stackframe you are looking for is at least ~6-8 stack-frames up.

` + (e instanceof lr ? e.derivation.toString().replace(/[*]\//g, "/") : "") + `

The dependencies for this derivation are:

` + r.join(`
`) + `
*/
    `)();
  }
}
function Pd(e, t, r) {
  if (t.length >= 1e3) {
    t.push("(and many more)");
    return;
  }
  t.push("" + "	".repeat(r - 1) + e.name), e.dependencies && e.dependencies.forEach(function(o) {
    return Pd(o, t, r + 1);
  });
}
var oo = /* @__PURE__ */ function() {
  function e(r, o, n, i) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "Reaction@" + vt() : "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = ae.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = nt.NONE, this.name_ = r, this.onInvalidate_ = o, this.errorHandler_ = n, this.requiresObservable_ = i;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    this.schedule_();
  }, t.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, O.pendingReactions.push(this), Cd());
  }, t.isScheduled = function() {
    return this.isScheduled_;
  }, t.runReaction_ = function() {
    if (!this.isDisposed_) {
      et(), this.isScheduled_ = !1;
      var o = O.trackingContext;
      if (O.trackingContext = this, aa(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_(), process.env.NODE_ENV !== "production" && this.isTrackPending_ && De() && cr({
            name: this.name_,
            type: "scheduled-reaction"
          });
        } catch (n) {
          this.reportExceptionInDerivation_(n);
        }
      }
      O.trackingContext = o, tt();
    }
  }, t.track = function(o) {
    if (!this.isDisposed_) {
      et();
      var n = De(), i;
      process.env.NODE_ENV !== "production" && n && (i = Date.now(), We({
        name: this.name_,
        type: "reaction"
      })), this.isRunning_ = !0;
      var a = O.trackingContext;
      O.trackingContext = this;
      var s = wd(this, o, void 0);
      O.trackingContext = a, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && sa(this), Uo(s) && this.reportExceptionInDerivation_(s.cause), process.env.NODE_ENV !== "production" && n && Ue({
        time: Date.now() - i
      }), tt();
    }
  }, t.reportExceptionInDerivation_ = function(o) {
    var n = this;
    if (this.errorHandler_) {
      this.errorHandler_(o, this);
      return;
    }
    if (O.disableErrorBoundaries)
      throw o;
    var i = process.env.NODE_ENV !== "production" ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
    O.suppressReactionErrors ? process.env.NODE_ENV !== "production" && console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)") : console.error(i, o), process.env.NODE_ENV !== "production" && De() && cr({
      type: "error",
      name: this.name_,
      message: i,
      error: "" + o
    }), O.globalReactionErrorHandlers.forEach(function(a) {
      return a(o, n);
    });
  }, t.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (et(), sa(this), tt()));
  }, t.getDisposer_ = function(o) {
    var n = this, i = function a() {
      n.dispose(), o == null || o.removeEventListener == null || o.removeEventListener("abort", a);
    };
    return o == null || o.addEventListener == null || o.addEventListener("abort", i), i[W] = this, i;
  }, t.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, t.trace = function(o) {
    o === void 0 && (o = !1), r0(this, o);
  }, e;
}(), wl = 100, la = function(t) {
  return t();
};
function Cd() {
  O.inBatch > 0 || O.isRunningReactions || la(A1);
}
function A1() {
  O.isRunningReactions = !0;
  for (var e = O.pendingReactions, t = 0; e.length > 0; ) {
    ++t === wl && (console.error(process.env.NODE_ENV !== "production" ? "Reaction doesn't converge to a stable state after " + wl + " iterations." + (" Probably there is a cycle in the reactive function: " + e[0]) : "[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), o = 0, n = r.length; o < n; o++)
      r[o].runReaction_();
  }
  O.isRunningReactions = !1;
}
var hn = /* @__PURE__ */ fr("Reaction", oo);
function F1(e) {
  var t = la;
  la = function(o) {
    return e(function() {
      return t(o);
    });
  };
}
function De() {
  return process.env.NODE_ENV !== "production" && !!O.spyListeners.length;
}
function cr(e) {
  if (process.env.NODE_ENV !== "production" && O.spyListeners.length)
    for (var t = O.spyListeners, r = 0, o = t.length; r < o; r++)
      t[r](e);
}
function We(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = zt({}, e, {
      spyReportStart: !0
    });
    cr(t);
  }
}
var j1 = {
  type: "report-end",
  spyReportEnd: !0
};
function Ue(e) {
  process.env.NODE_ENV !== "production" && cr(e ? zt({}, e, {
    type: "report-end",
    spyReportEnd: !0
  }) : j1);
}
function I1(e) {
  return process.env.NODE_ENV === "production" ? (console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  }) : (O.spyListeners.push(e), Va(function() {
    O.spyListeners = O.spyListeners.filter(function(t) {
      return t !== e;
    });
  }));
}
var Ga = "action", M1 = "action.bound", Rd = "autoAction", q1 = "autoAction.bound", Dd = "<unnamed action>", ca = /* @__PURE__ */ _o(Ga), L1 = /* @__PURE__ */ _o(M1, {
  bound: !0
}), ua = /* @__PURE__ */ _o(Rd, {
  autoAction: !0
}), V1 = /* @__PURE__ */ _o(q1, {
  autoAction: !0,
  bound: !0
});
function zd(e) {
  var t = function(o, n) {
    if (Te(o))
      return sr(o.name || Dd, o, e);
    if (Te(n))
      return sr(o, n, e);
    if (go(n))
      return (e ? ua : ca).decorate_20223_(o, n);
    if (ir(n))
      return Dr(o, n, e ? ua : ca);
    if (ir(o))
      return kt(_o(e ? Rd : Ga, {
        name: o,
        autoAction: e
      }));
    process.env.NODE_ENV !== "production" && A("Invalid arguments for `action`");
  };
  return t;
}
var yr = /* @__PURE__ */ zd(!1);
Object.assign(yr, ca);
var no = /* @__PURE__ */ zd(!0);
Object.assign(no, ua);
yr.bound = /* @__PURE__ */ kt(L1);
no.bound = /* @__PURE__ */ kt(V1);
function mi(e) {
  return md(e.name || Dd, !1, e, this, void 0);
}
function yo(e) {
  return Te(e) && e.isMobxAction === !0;
}
function H1(e, t) {
  var r, o, n, i, a;
  t === void 0 && (t = rd), process.env.NODE_ENV !== "production" && (Te(e) || A("Autorun expects a function as first argument"), yo(e) && A("Autorun does not accept actions since actions are untrackable"));
  var s = (r = (o = t) == null ? void 0 : o.name) != null ? r : process.env.NODE_ENV !== "production" ? e.name || "Autorun@" + vt() : "Autorun", l = !t.scheduler && !t.delay, c;
  if (l)
    c = new oo(s, function() {
      this.track(f);
    }, t.onError, t.requiresObservable);
  else {
    var u = W1(t), d = !1;
    c = new oo(s, function() {
      d || (d = !0, u(function() {
        d = !1, c.isDisposed_ || c.track(f);
      }));
    }, t.onError, t.requiresObservable);
  }
  function f() {
    e(c);
  }
  return (n = t) != null && (i = n.signal) != null && i.aborted || c.schedule_(), c.getDisposer_((a = t) == null ? void 0 : a.signal);
}
var $1 = function(t) {
  return t();
};
function W1(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(t) {
    return setTimeout(t, e.delay);
  } : $1;
}
var U1 = "onBO", G1 = "onBUO";
function K1(e, t, r) {
  return Fd(U1, e, t, r);
}
function Ad(e, t, r) {
  return Fd(G1, e, t, r);
}
function Fd(e, t, r, o) {
  var n = typeof o == "function" ? Ht(t, r) : Ht(t), i = Te(o) ? o : r, a = e + "L";
  return n[a] ? n[a].add(i) : n[a] = /* @__PURE__ */ new Set([i]), function() {
    var s = n[a];
    s && (s.delete(i), s.size === 0 && delete n[a]);
  };
}
var X1 = "never", jo = "always", Y1 = "observed";
function J1(e) {
  e.isolateGlobalState === !0 && P1();
  var t = e.useProxies, r = e.enforceActions;
  if (t !== void 0 && (O.useProxies = t === jo ? !0 : t === X1 ? !1 : typeof Proxy < "u"), t === "ifavailable" && (O.verifyProxies = !0), r !== void 0) {
    var o = r === jo ? jo : r === Y1;
    O.enforceActions = o, O.allowStateChanges = !(o === !0 || o === jo);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(n) {
    n in e && (O[n] = !!e[n]);
  }), O.allowStateReads = !O.observableRequiresReaction, process.env.NODE_ENV !== "production" && O.disableErrorBoundaries === !0 && console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."), e.reactionScheduler && F1(e.reactionScheduler);
}
function jd(e, t, r, o) {
  process.env.NODE_ENV !== "production" && (arguments.length > 4 && A("'extendObservable' expected 2-4 arguments"), typeof e != "object" && A("'extendObservable' expects an object as first argument"), jt(e) && A("'extendObservable' should not be used on maps, use map.merge instead"), $e(t) || A("'extendObservable' only accepts plain objects as second argument"), (ao(t) || ao(r)) && A("Extending an object with another observable (object) is not supported"));
  var n = Oy(t);
  return Wt(function() {
    var i = hr(e, o)[W];
    Br(n).forEach(function(a) {
      i.extend_(
        a,
        n[a],
        // must pass "undefined" for { key: undefined }
        r && a in r ? r[a] : !0
      );
    });
  }), e;
}
function Id(e, t) {
  return Md(Ht(e, t));
}
function Md(e) {
  var t = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (t.dependencies = Q1(e.observing_).map(Md)), t;
}
function Q1(e) {
  return Array.from(new Set(e));
}
var Z1 = 0;
function qd() {
  this.message = "FLOW_CANCELLED";
}
qd.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var _i = /* @__PURE__ */ dd("flow"), e0 = /* @__PURE__ */ dd("flow.bound", {
  bound: !0
}), Tr = /* @__PURE__ */ Object.assign(function(t, r) {
  if (go(r))
    return _i.decorate_20223_(t, r);
  if (ir(r))
    return Dr(t, r, _i);
  process.env.NODE_ENV !== "production" && arguments.length !== 1 && A("Flow expects single argument with generator function");
  var o = t, n = o.name || "<unnamed flow>", i = function() {
    var s = this, l = arguments, c = ++Z1, u = yr(n + " - runid: " + c + " - init", o).apply(s, l), d, f = void 0, h = new Promise(function(v, p) {
      var g = 0;
      d = p;
      function b(w) {
        f = void 0;
        var _;
        try {
          _ = yr(n + " - runid: " + c + " - yield " + g++, u.next).call(u, w);
        } catch (E) {
          return p(E);
        }
        m(_);
      }
      function y(w) {
        f = void 0;
        var _;
        try {
          _ = yr(n + " - runid: " + c + " - yield " + g++, u.throw).call(u, w);
        } catch (E) {
          return p(E);
        }
        m(_);
      }
      function m(w) {
        if (Te(w == null ? void 0 : w.then)) {
          w.then(m, p);
          return;
        }
        return w.done ? v(w.value) : (f = Promise.resolve(w.value), f.then(b, y));
      }
      b(void 0);
    });
    return h.cancel = yr(n + " - runid: " + c + " - cancel", function() {
      try {
        f && kl(f);
        var v = u.return(void 0), p = Promise.resolve(v.value);
        p.then(mr, mr), kl(p), d(new qd());
      } catch (g) {
        d(g);
      }
    }), h;
  };
  return i.isMobXFlow = !0, i;
}, _i);
Tr.bound = /* @__PURE__ */ kt(e0);
function kl(e) {
  Te(e.cancel) && e.cancel();
}
function io(e) {
  return (e == null ? void 0 : e.isMobXFlow) === !0;
}
function t0(e, t) {
  return e ? t !== void 0 ? process.env.NODE_ENV !== "production" && (jt(e) || xo(e)) ? A("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.") : ur(e) ? e[W].values_.has(t) : !1 : ur(e) || !!e[W] || $a(e) || hn(e) || qn(e) : !1;
}
function ao(e) {
  return process.env.NODE_ENV !== "production" && arguments.length !== 1 && A("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property"), t0(e);
}
function r0() {
  if (process.env.NODE_ENV !== "production") {
    for (var e = !1, t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    typeof r[r.length - 1] == "boolean" && (e = r.pop());
    var n = o0(r);
    if (!n)
      return A("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    n.isTracing_ === nt.NONE && console.log("[mobx.trace] '" + n.name_ + "' tracing enabled"), n.isTracing_ = e ? nt.BREAK : nt.LOG;
  }
}
function o0(e) {
  switch (e.length) {
    case 0:
      return O.trackingDerivation;
    case 1:
      return Ht(e[0]);
    case 2:
      return Ht(e[0], e[1]);
  }
}
function Nt(e, t) {
  t === void 0 && (t = void 0), et();
  try {
    return e.apply(t);
  } finally {
    tt();
  }
}
function Gt(e) {
  return e[W];
}
var n0 = {
  has: function(t, r) {
    return process.env.NODE_ENV !== "production" && O.trackingDerivation && Mr("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead."), Gt(t).has_(r);
  },
  get: function(t, r) {
    return Gt(t).get_(r);
  },
  set: function(t, r, o) {
    var n;
    return ir(r) ? (process.env.NODE_ENV !== "production" && !Gt(t).values_.has(r) && Mr("add a new observable property through direct assignment. Use 'set' from 'mobx' instead."), (n = Gt(t).set_(r, o, !0)) != null ? n : !0) : !1;
  },
  deleteProperty: function(t, r) {
    var o;
    return process.env.NODE_ENV !== "production" && Mr("delete properties from an observable object. Use 'remove' from 'mobx' instead."), ir(r) ? (o = Gt(t).delete_(r, !0)) != null ? o : !0 : !1;
  },
  defineProperty: function(t, r, o) {
    var n;
    return process.env.NODE_ENV !== "production" && Mr("define property on an observable object. Use 'defineProperty' from 'mobx' instead."), (n = Gt(t).defineProperty_(r, o)) != null ? n : !0;
  },
  ownKeys: function(t) {
    return process.env.NODE_ENV !== "production" && O.trackingDerivation && Mr("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead."), Gt(t).ownKeys_();
  },
  preventExtensions: function(t) {
    A(13);
  }
};
function i0(e, t) {
  var r, o;
  return od(), e = hr(e, t), (o = (r = e[W]).proxy_) != null ? o : r.proxy_ = new Proxy(e, n0);
}
function Qe(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function wo(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return r.push(t), Va(function() {
    var o = r.indexOf(t);
    o !== -1 && r.splice(o, 1);
  });
}
function Ze(e, t) {
  var r = vr();
  try {
    for (var o = [].concat(e.interceptors_ || []), n = 0, i = o.length; n < i && (t = o[n](t), t && !t.type && A(14), !!t); n++)
      ;
    return t;
  } finally {
    Rt(r);
  }
}
function ut(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function ko(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return r.push(t), Va(function() {
    var o = r.indexOf(t);
    o !== -1 && r.splice(o, 1);
  });
}
function dt(e, t) {
  var r = vr(), o = e.changeListeners_;
  if (o) {
    o = o.slice();
    for (var n = 0, i = o.length; n < i; n++)
      o[n](t);
    Rt(r);
  }
}
function a0(e, t, r) {
  return Wt(function() {
    var o, n = hr(e, r)[W];
    process.env.NODE_ENV !== "production" && t && e[Ve] && A("makeObservable second arg must be nullish when using decorators. Mixing @decorator syntax with annotations is not supported."), (o = t) != null || (t = zy(e)), Br(t).forEach(function(i) {
      return n.make_(i, t[i]);
    });
  }), e;
}
var yi = /* @__PURE__ */ Symbol("mobx-keys");
function Ld(e, t, r) {
  return process.env.NODE_ENV !== "production" && (!$e(e) && !$e(Object.getPrototypeOf(e)) && A("'makeAutoObservable' can only be used for classes that don't have a superclass"), ur(e) && A("makeAutoObservable can only be used on objects not already made observable")), $e(e) ? jd(e, e, t, r) : (Wt(function() {
    var o = hr(e, r)[W];
    if (!e[yi]) {
      var n = Object.getPrototypeOf(e), i = new Set([].concat(Br(e), Br(n)));
      i.delete("constructor"), i.delete(W), po(n, yi, i);
    }
    e[yi].forEach(function(a) {
      return o.make_(
        a,
        // must pass "undefined" for { key: undefined }
        t && a in t ? t[a] : !0
      );
    });
  }), e);
}
var xl = "splice", lt = "update", s0 = 1e4, l0 = {
  get: function(t, r) {
    var o = t[W];
    return r === W ? o : r === "length" ? o.getArrayLength_() : typeof r == "string" && !isNaN(r) ? o.get_(parseInt(r)) : ot(pn, r) ? pn[r] : t[r];
  },
  set: function(t, r, o) {
    var n = t[W];
    return r === "length" && n.setArrayLength_(o), typeof r == "symbol" || isNaN(r) ? t[r] = o : n.set_(parseInt(r), o), !0;
  },
  preventExtensions: function() {
    A(15);
  }
}, Ka = /* @__PURE__ */ function() {
  function e(r, o, n, i) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "ObservableArray@" + vt() : "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = n, this.legacyMode_ = i, this.atom_ = new mo(r), this.enhancer_ = function(a, s) {
      return o(a, s, process.env.NODE_ENV !== "production" ? r + "[..]" : "ObservableArray[..]");
    };
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, t.dehanceValues_ = function(o) {
    return this.dehancer !== void 0 && o.length > 0 ? o.map(this.dehancer) : o;
  }, t.intercept_ = function(o) {
    return wo(this, o);
  }, t.observe_ = function(o, n) {
    return n === void 0 && (n = !1), n && o({
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: "splice",
      index: 0,
      added: this.values_.slice(),
      addedCount: this.values_.length,
      removed: [],
      removedCount: 0
    }), ko(this, o);
  }, t.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, t.setArrayLength_ = function(o) {
    (typeof o != "number" || isNaN(o) || o < 0) && A("Out of range: " + o);
    var n = this.values_.length;
    if (o !== n)
      if (o > n) {
        for (var i = new Array(o - n), a = 0; a < o - n; a++)
          i[a] = void 0;
        this.spliceWithArray_(n, 0, i);
      } else
        this.spliceWithArray_(o, n - o);
  }, t.updateArrayLength_ = function(o, n) {
    o !== this.lastKnownLength_ && A(16), this.lastKnownLength_ += n, this.legacyMode_ && n > 0 && Jd(o + n + 1);
  }, t.spliceWithArray_ = function(o, n, i) {
    var a = this;
    mt(this.atom_);
    var s = this.values_.length;
    if (o === void 0 ? o = 0 : o > s ? o = s : o < 0 && (o = Math.max(0, s + o)), arguments.length === 1 ? n = s - o : n == null ? n = 0 : n = Math.max(0, Math.min(n, s - o)), i === void 0 && (i = cn), Qe(this)) {
      var l = Ze(this, {
        object: this.proxy_,
        type: xl,
        index: o,
        removedCount: n,
        added: i
      });
      if (!l)
        return cn;
      n = l.removedCount, i = l.added;
    }
    if (i = i.length === 0 ? i : i.map(function(d) {
      return a.enhancer_(d, void 0);
    }), this.legacyMode_ || process.env.NODE_ENV !== "production") {
      var c = i.length - n;
      this.updateArrayLength_(s, c);
    }
    var u = this.spliceItemsIntoValues_(o, n, i);
    return (n !== 0 || i.length !== 0) && this.notifyArraySplice_(o, i, u), this.dehanceValues_(u);
  }, t.spliceItemsIntoValues_ = function(o, n, i) {
    if (i.length < s0) {
      var a;
      return (a = this.values_).splice.apply(a, [o, n].concat(i));
    } else {
      var s = this.values_.slice(o, o + n), l = this.values_.slice(o + n);
      this.values_.length += i.length - n;
      for (var c = 0; c < i.length; c++)
        this.values_[o + c] = i[c];
      for (var u = 0; u < l.length; u++)
        this.values_[o + i.length + u] = l[u];
      return s;
    }
  }, t.notifyArrayChildUpdate_ = function(o, n, i) {
    var a = !this.owned_ && De(), s = ut(this), l = s || a ? {
      observableKind: "array",
      object: this.proxy_,
      type: lt,
      debugObjectName: this.atom_.name_,
      index: o,
      newValue: n,
      oldValue: i
    } : null;
    process.env.NODE_ENV !== "production" && a && We(l), this.atom_.reportChanged(), s && dt(this, l), process.env.NODE_ENV !== "production" && a && Ue();
  }, t.notifyArraySplice_ = function(o, n, i) {
    var a = !this.owned_ && De(), s = ut(this), l = s || a ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: xl,
      index: o,
      removed: i,
      added: n,
      removedCount: i.length,
      addedCount: n.length
    } : null;
    process.env.NODE_ENV !== "production" && a && We(l), this.atom_.reportChanged(), s && dt(this, l), process.env.NODE_ENV !== "production" && a && Ue();
  }, t.get_ = function(o) {
    if (this.legacyMode_ && o >= this.values_.length) {
      console.warn(process.env.NODE_ENV !== "production" ? "[mobx.array] Attempt to read an array index (" + o + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX" : "[mobx] Out of bounds read: " + o);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[o]);
  }, t.set_ = function(o, n) {
    var i = this.values_;
    if (this.legacyMode_ && o > i.length && A(17, o, i.length), o < i.length) {
      mt(this.atom_);
      var a = i[o];
      if (Qe(this)) {
        var s = Ze(this, {
          type: lt,
          object: this.proxy_,
          index: o,
          newValue: n
        });
        if (!s)
          return;
        n = s.newValue;
      }
      n = this.enhancer_(n, a);
      var l = n !== a;
      l && (i[o] = n, this.notifyArrayChildUpdate_(o, n, a));
    } else {
      for (var c = new Array(o + 1 - i.length), u = 0; u < c.length - 1; u++)
        c[u] = void 0;
      c[c.length - 1] = n, this.spliceWithArray_(i.length, 0, c);
    }
  }, e;
}();
function c0(e, t, r, o) {
  return r === void 0 && (r = process.env.NODE_ENV !== "production" ? "ObservableArray@" + vt() : "ObservableArray"), o === void 0 && (o = !1), od(), Wt(function() {
    var n = new Ka(r, t, o, !1);
    id(n.values_, W, n);
    var i = new Proxy(n.values_, l0);
    return n.proxy_ = i, e && e.length && n.spliceWithArray_(0, 0, e), i;
  });
}
var pn = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(t) {
    var r = this[W];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  // Used by JSON.stringify
  toJSON: function() {
    return this.slice();
  },
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function(t, r) {
    for (var o = arguments.length, n = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++)
      n[i - 2] = arguments[i];
    var a = this[W];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return a.spliceWithArray_(t);
      case 2:
        return a.spliceWithArray_(t, r);
    }
    return a.spliceWithArray_(t, r, n);
  },
  spliceWithArray: function(t, r, o) {
    return this[W].spliceWithArray_(t, r, o);
  },
  push: function() {
    for (var t = this[W], r = arguments.length, o = new Array(r), n = 0; n < r; n++)
      o[n] = arguments[n];
    return t.spliceWithArray_(t.values_.length, 0, o), t.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[W].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var t = this[W], r = arguments.length, o = new Array(r), n = 0; n < r; n++)
      o[n] = arguments[n];
    return t.spliceWithArray_(0, 0, o), t.values_.length;
  },
  reverse: function() {
    return O.trackingDerivation && A(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    O.trackingDerivation && A(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function(t) {
    var r = this[W], o = r.dehanceValues_(r.values_).indexOf(t);
    return o > -1 ? (this.splice(o, 1), !0) : !1;
  }
};
pe("at", Xe);
pe("concat", Xe);
pe("flat", Xe);
pe("includes", Xe);
pe("indexOf", Xe);
pe("join", Xe);
pe("lastIndexOf", Xe);
pe("slice", Xe);
pe("toString", Xe);
pe("toLocaleString", Xe);
pe("toSorted", Xe);
pe("toSpliced", Xe);
pe("with", Xe);
pe("every", ht);
pe("filter", ht);
pe("find", ht);
pe("findIndex", ht);
pe("findLast", ht);
pe("findLastIndex", ht);
pe("flatMap", ht);
pe("forEach", ht);
pe("map", ht);
pe("some", ht);
pe("toReversed", ht);
pe("reduce", Vd);
pe("reduceRight", Vd);
function pe(e, t) {
  typeof Array.prototype[e] == "function" && (pn[e] = t(e));
}
function Xe(e) {
  return function() {
    var t = this[W];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function ht(e) {
  return function(t, r) {
    var o = this, n = this[W];
    n.atom_.reportObserved();
    var i = n.dehanceValues_(n.values_);
    return i[e](function(a, s) {
      return t.call(r, a, s, o);
    });
  };
}
function Vd(e) {
  return function() {
    var t = this, r = this[W];
    r.atom_.reportObserved();
    var o = r.dehanceValues_(r.values_), n = arguments[0];
    return arguments[0] = function(i, a, s) {
      return n(i, a, s, t);
    }, o[e].apply(o, arguments);
  };
}
var u0 = /* @__PURE__ */ fr("ObservableArrayAdministration", Ka);
function xo(e) {
  return Dn(e) && u0(e[W]);
}
var Hd, $d, d0 = {}, qt = "add", bn = "delete";
Hd = Symbol.iterator;
$d = Symbol.toStringTag;
var Wd = /* @__PURE__ */ function() {
  function e(r, o, n) {
    var i = this;
    o === void 0 && (o = ar), n === void 0 && (n = process.env.NODE_ENV !== "production" ? "ObservableMap@" + vt() : "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[W] = d0, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = o, this.name_ = n, Te(Map) || A(18), Wt(function() {
      i.keysAtom_ = cd(process.env.NODE_ENV !== "production" ? i.name_ + ".keys()" : "ObservableMap.keys()"), i.data_ = /* @__PURE__ */ new Map(), i.hasMap_ = /* @__PURE__ */ new Map(), r && i.merge(r);
    });
  }
  var t = e.prototype;
  return t.has_ = function(o) {
    return this.data_.has(o);
  }, t.has = function(o) {
    var n = this;
    if (!O.trackingDerivation)
      return this.has_(o);
    var i = this.hasMap_.get(o);
    if (!i) {
      var a = i = new or(this.has_(o), An, process.env.NODE_ENV !== "production" ? this.name_ + "." + ra(o) + "?" : "ObservableMap.key?", !1);
      this.hasMap_.set(o, a), Ad(a, function() {
        return n.hasMap_.delete(o);
      });
    }
    return i.get();
  }, t.set = function(o, n) {
    var i = this.has_(o);
    if (Qe(this)) {
      var a = Ze(this, {
        type: i ? lt : qt,
        object: this,
        newValue: n,
        name: o
      });
      if (!a)
        return this;
      n = a.newValue;
    }
    return i ? this.updateValue_(o, n) : this.addValue_(o, n), this;
  }, t.delete = function(o) {
    var n = this;
    if (mt(this.keysAtom_), Qe(this)) {
      var i = Ze(this, {
        type: bn,
        object: this,
        name: o
      });
      if (!i)
        return !1;
    }
    if (this.has_(o)) {
      var a = De(), s = ut(this), l = s || a ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: bn,
        object: this,
        oldValue: this.data_.get(o).value_,
        name: o
      } : null;
      return process.env.NODE_ENV !== "production" && a && We(l), Nt(function() {
        var c;
        n.keysAtom_.reportChanged(), (c = n.hasMap_.get(o)) == null || c.setNewValue_(!1);
        var u = n.data_.get(o);
        u.setNewValue_(void 0), n.data_.delete(o);
      }), s && dt(this, l), process.env.NODE_ENV !== "production" && a && Ue(), !0;
    }
    return !1;
  }, t.updateValue_ = function(o, n) {
    var i = this.data_.get(o);
    if (n = i.prepareNewValue_(n), n !== O.UNCHANGED) {
      var a = De(), s = ut(this), l = s || a ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: lt,
        object: this,
        oldValue: i.value_,
        name: o,
        newValue: n
      } : null;
      process.env.NODE_ENV !== "production" && a && We(l), i.setNewValue_(n), s && dt(this, l), process.env.NODE_ENV !== "production" && a && Ue();
    }
  }, t.addValue_ = function(o, n) {
    var i = this;
    mt(this.keysAtom_), Nt(function() {
      var c, u = new or(n, i.enhancer_, process.env.NODE_ENV !== "production" ? i.name_ + "." + ra(o) : "ObservableMap.key", !1);
      i.data_.set(o, u), n = u.value_, (c = i.hasMap_.get(o)) == null || c.setNewValue_(!0), i.keysAtom_.reportChanged();
    });
    var a = De(), s = ut(this), l = s || a ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: qt,
      object: this,
      name: o,
      newValue: n
    } : null;
    process.env.NODE_ENV !== "production" && a && We(l), s && dt(this, l), process.env.NODE_ENV !== "production" && a && Ue();
  }, t.get = function(o) {
    return this.has(o) ? this.dehanceValue_(this.data_.get(o).get()) : this.dehanceValue_(void 0);
  }, t.dehanceValue_ = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, t.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, t.values = function() {
    var o = this, n = this.keys();
    return so({
      next: function() {
        var a = n.next(), s = a.done, l = a.value;
        return {
          done: s,
          value: s ? void 0 : o.get(l)
        };
      }
    });
  }, t.entries = function() {
    var o = this, n = this.keys();
    return so({
      next: function() {
        var a = n.next(), s = a.done, l = a.value;
        return {
          done: s,
          value: s ? void 0 : [l, o.get(l)]
        };
      }
    });
  }, t[Hd] = function() {
    return this.entries();
  }, t.forEach = function(o, n) {
    for (var i = _r(this), a; !(a = i()).done; ) {
      var s = a.value, l = s[0], c = s[1];
      o.call(n, c, l, this);
    }
  }, t.merge = function(o) {
    var n = this;
    return jt(o) && (o = new Map(o)), Nt(function() {
      $e(o) ? Ny(o).forEach(function(i) {
        return n.set(i, o[i]);
      }) : Array.isArray(o) ? o.forEach(function(i) {
        var a = i[0], s = i[1];
        return n.set(a, s);
      }) : Rr(o) ? (o.constructor !== Map && A(19, o), o.forEach(function(i, a) {
        return n.set(a, i);
      })) : o != null && A(20, o);
    }), this;
  }, t.clear = function() {
    var o = this;
    Nt(function() {
      kd(function() {
        for (var n = _r(o.keys()), i; !(i = n()).done; ) {
          var a = i.value;
          o.delete(a);
        }
      });
    });
  }, t.replace = function(o) {
    var n = this;
    return Nt(function() {
      for (var i = f0(o), a = /* @__PURE__ */ new Map(), s = !1, l = _r(n.data_.keys()), c; !(c = l()).done; ) {
        var u = c.value;
        if (!i.has(u)) {
          var d = n.delete(u);
          if (d)
            s = !0;
          else {
            var f = n.data_.get(u);
            a.set(u, f);
          }
        }
      }
      for (var h = _r(i.entries()), v; !(v = h()).done; ) {
        var p = v.value, g = p[0], b = p[1], y = n.data_.has(g);
        if (n.set(g, b), n.data_.has(g)) {
          var m = n.data_.get(g);
          a.set(g, m), y || (s = !0);
        }
      }
      if (!s)
        if (n.data_.size !== a.size)
          n.keysAtom_.reportChanged();
        else
          for (var w = n.data_.keys(), _ = a.keys(), E = w.next(), S = _.next(); !E.done; ) {
            if (E.value !== S.value) {
              n.keysAtom_.reportChanged();
              break;
            }
            E = w.next(), S = _.next();
          }
      n.data_ = a;
    }), this;
  }, t.toString = function() {
    return "[object ObservableMap]";
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.observe_ = function(o, n) {
    return process.env.NODE_ENV !== "production" && n === !0 && A("`observe` doesn't support fireImmediately=true in combination with maps."), ko(this, o);
  }, t.intercept_ = function(o) {
    return wo(this, o);
  }, Ha(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: $d,
    get: function() {
      return "Map";
    }
  }]), e;
}(), jt = /* @__PURE__ */ fr("ObservableMap", Wd);
function f0(e) {
  if (Rr(e) || jt(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if ($e(e)) {
    var t = /* @__PURE__ */ new Map();
    for (var r in e)
      t.set(r, e[r]);
    return t;
  } else
    return A(21, e);
}
var Ud, Gd, v0 = {};
Ud = Symbol.iterator;
Gd = Symbol.toStringTag;
var Kd = /* @__PURE__ */ function() {
  function e(r, o, n) {
    var i = this;
    o === void 0 && (o = ar), n === void 0 && (n = process.env.NODE_ENV !== "production" ? "ObservableSet@" + vt() : "ObservableSet"), this.name_ = void 0, this[W] = v0, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = n, Te(Set) || A(22), this.enhancer_ = function(a, s) {
      return o(a, s, n);
    }, Wt(function() {
      i.atom_ = cd(i.name_), r && i.replace(r);
    });
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, t.clear = function() {
    var o = this;
    Nt(function() {
      kd(function() {
        for (var n = _r(o.data_.values()), i; !(i = n()).done; ) {
          var a = i.value;
          o.delete(a);
        }
      });
    });
  }, t.forEach = function(o, n) {
    for (var i = _r(this), a; !(a = i()).done; ) {
      var s = a.value;
      o.call(n, s, s, this);
    }
  }, t.add = function(o) {
    var n = this;
    if (mt(this.atom_), Qe(this)) {
      var i = Ze(this, {
        type: qt,
        object: this,
        newValue: o
      });
      if (!i)
        return this;
    }
    if (!this.has(o)) {
      Nt(function() {
        n.data_.add(n.enhancer_(o, void 0)), n.atom_.reportChanged();
      });
      var a = process.env.NODE_ENV !== "production" && De(), s = ut(this), l = s || a ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: qt,
        object: this,
        newValue: o
      } : null;
      a && process.env.NODE_ENV !== "production" && We(l), s && dt(this, l), a && process.env.NODE_ENV !== "production" && Ue();
    }
    return this;
  }, t.delete = function(o) {
    var n = this;
    if (Qe(this)) {
      var i = Ze(this, {
        type: bn,
        object: this,
        oldValue: o
      });
      if (!i)
        return !1;
    }
    if (this.has(o)) {
      var a = process.env.NODE_ENV !== "production" && De(), s = ut(this), l = s || a ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: bn,
        object: this,
        oldValue: o
      } : null;
      return a && process.env.NODE_ENV !== "production" && We(l), Nt(function() {
        n.atom_.reportChanged(), n.data_.delete(o);
      }), s && dt(this, l), a && process.env.NODE_ENV !== "production" && Ue(), !0;
    }
    return !1;
  }, t.has = function(o) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(o));
  }, t.entries = function() {
    var o = 0, n = Array.from(this.keys()), i = Array.from(this.values());
    return so({
      next: function() {
        var s = o;
        return o += 1, s < i.length ? {
          value: [n[s], i[s]],
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.keys = function() {
    return this.values();
  }, t.values = function() {
    this.atom_.reportObserved();
    var o = this, n = 0, i = Array.from(this.data_.values());
    return so({
      next: function() {
        return n < i.length ? {
          value: o.dehanceValue_(i[n++]),
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.replace = function(o) {
    var n = this;
    return zr(o) && (o = new Set(o)), Nt(function() {
      Array.isArray(o) ? (n.clear(), o.forEach(function(i) {
        return n.add(i);
      })) : bo(o) ? (n.clear(), o.forEach(function(i) {
        return n.add(i);
      })) : o != null && A("Cannot initialize set from " + o);
    }), this;
  }, t.observe_ = function(o, n) {
    return process.env.NODE_ENV !== "production" && n === !0 && A("`observe` doesn't support fireImmediately=true in combination with sets."), ko(this, o);
  }, t.intercept_ = function(o) {
    return wo(this, o);
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.toString = function() {
    return "[object ObservableSet]";
  }, t[Ud] = function() {
    return this.values();
  }, Ha(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Gd,
    get: function() {
      return "Set";
    }
  }]), e;
}(), zr = /* @__PURE__ */ fr("ObservableSet", Kd), El = /* @__PURE__ */ Object.create(null), Sl = "remove", da = /* @__PURE__ */ function() {
  function e(r, o, n, i) {
    o === void 0 && (o = /* @__PURE__ */ new Map()), i === void 0 && (i = i1), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = r, this.values_ = o, this.name_ = n, this.defaultAnnotation_ = i, this.keysAtom_ = new mo(process.env.NODE_ENV !== "production" ? this.name_ + ".keys" : "ObservableObject.keys"), this.isPlainObject_ = $e(this.target_), process.env.NODE_ENV !== "production" && !Qd(this.defaultAnnotation_) && A("defaultAnnotation must be valid annotation"), process.env.NODE_ENV !== "production" && (this.appliedAnnotations_ = {});
  }
  var t = e.prototype;
  return t.getObservablePropValue_ = function(o) {
    return this.values_.get(o).get();
  }, t.setObservablePropValue_ = function(o, n) {
    var i = this.values_.get(o);
    if (i instanceof lr)
      return i.set(n), !0;
    if (Qe(this)) {
      var a = Ze(this, {
        type: lt,
        object: this.proxy_ || this.target_,
        name: o,
        newValue: n
      });
      if (!a)
        return null;
      n = a.newValue;
    }
    if (n = i.prepareNewValue_(n), n !== O.UNCHANGED) {
      var s = ut(this), l = process.env.NODE_ENV !== "production" && De(), c = s || l ? {
        type: lt,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: i.value_,
        name: o,
        newValue: n
      } : null;
      process.env.NODE_ENV !== "production" && l && We(c), i.setNewValue_(n), s && dt(this, c), process.env.NODE_ENV !== "production" && l && Ue();
    }
    return !0;
  }, t.get_ = function(o) {
    return O.trackingDerivation && !ot(this.target_, o) && this.has_(o), this.target_[o];
  }, t.set_ = function(o, n, i) {
    return i === void 0 && (i = !1), ot(this.target_, o) ? this.values_.has(o) ? this.setObservablePropValue_(o, n) : i ? Reflect.set(this.target_, o, n) : (this.target_[o] = n, !0) : this.extend_(o, {
      value: n,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, i);
  }, t.has_ = function(o) {
    if (!O.trackingDerivation)
      return o in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var n = this.pendingKeys_.get(o);
    return n || (n = new or(o in this.target_, An, process.env.NODE_ENV !== "production" ? this.name_ + "." + ra(o) + "?" : "ObservableObject.key?", !1), this.pendingKeys_.set(o, n)), n.get();
  }, t.make_ = function(o, n) {
    if (n === !0 && (n = this.defaultAnnotation_), n !== !1) {
      if (Nl(this, n, o), !(o in this.target_)) {
        var i;
        if ((i = this.target_[Ve]) != null && i[o])
          return;
        A(1, n.annotationType_, this.name_ + "." + o.toString());
      }
      for (var a = this.target_; a && a !== Rn; ) {
        var s = ln(a, o);
        if (s) {
          var l = n.make_(this, o, s, a);
          if (l === 0)
            return;
          if (l === 1)
            break;
        }
        a = Object.getPrototypeOf(a);
      }
      Tl(this, n, o);
    }
  }, t.extend_ = function(o, n, i, a) {
    if (a === void 0 && (a = !1), i === !0 && (i = this.defaultAnnotation_), i === !1)
      return this.defineProperty_(o, n, a);
    Nl(this, i, o);
    var s = i.extend_(this, o, n, a);
    return s && Tl(this, i, o), s;
  }, t.defineProperty_ = function(o, n, i) {
    i === void 0 && (i = !1), mt(this.keysAtom_);
    try {
      et();
      var a = this.delete_(o);
      if (!a)
        return a;
      if (Qe(this)) {
        var s = Ze(this, {
          object: this.proxy_ || this.target_,
          name: o,
          type: qt,
          newValue: n.value
        });
        if (!s)
          return null;
        var l = s.newValue;
        n.value !== l && (n = zt({}, n, {
          value: l
        }));
      }
      if (i) {
        if (!Reflect.defineProperty(this.target_, o, n))
          return !1;
      } else
        wt(this.target_, o, n);
      this.notifyPropertyAddition_(o, n.value);
    } finally {
      tt();
    }
    return !0;
  }, t.defineObservableProperty_ = function(o, n, i, a) {
    a === void 0 && (a = !1), mt(this.keysAtom_);
    try {
      et();
      var s = this.delete_(o);
      if (!s)
        return s;
      if (Qe(this)) {
        var l = Ze(this, {
          object: this.proxy_ || this.target_,
          name: o,
          type: qt,
          newValue: n
        });
        if (!l)
          return null;
        n = l.newValue;
      }
      var c = Bl(o), u = {
        configurable: O.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: c.get,
        set: c.set
      };
      if (a) {
        if (!Reflect.defineProperty(this.target_, o, u))
          return !1;
      } else
        wt(this.target_, o, u);
      var d = new or(n, i, process.env.NODE_ENV !== "production" ? this.name_ + "." + o.toString() : "ObservableObject.key", !1);
      this.values_.set(o, d), this.notifyPropertyAddition_(o, d.value_);
    } finally {
      tt();
    }
    return !0;
  }, t.defineComputedProperty_ = function(o, n, i) {
    i === void 0 && (i = !1), mt(this.keysAtom_);
    try {
      et();
      var a = this.delete_(o);
      if (!a)
        return a;
      if (Qe(this)) {
        var s = Ze(this, {
          object: this.proxy_ || this.target_,
          name: o,
          type: qt,
          newValue: void 0
        });
        if (!s)
          return null;
      }
      n.name || (n.name = process.env.NODE_ENV !== "production" ? this.name_ + "." + o.toString() : "ObservableObject.key"), n.context = this.proxy_ || this.target_;
      var l = Bl(o), c = {
        configurable: O.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: l.get,
        set: l.set
      };
      if (i) {
        if (!Reflect.defineProperty(this.target_, o, c))
          return !1;
      } else
        wt(this.target_, o, c);
      this.values_.set(o, new lr(n)), this.notifyPropertyAddition_(o, void 0);
    } finally {
      tt();
    }
    return !0;
  }, t.delete_ = function(o, n) {
    if (n === void 0 && (n = !1), mt(this.keysAtom_), !ot(this.target_, o))
      return !0;
    if (Qe(this)) {
      var i = Ze(this, {
        object: this.proxy_ || this.target_,
        name: o,
        type: Sl
      });
      if (!i)
        return null;
    }
    try {
      var a, s;
      et();
      var l = ut(this), c = process.env.NODE_ENV !== "production" && De(), u = this.values_.get(o), d = void 0;
      if (!u && (l || c)) {
        var f;
        d = (f = ln(this.target_, o)) == null ? void 0 : f.value;
      }
      if (n) {
        if (!Reflect.deleteProperty(this.target_, o))
          return !1;
      } else
        delete this.target_[o];
      if (process.env.NODE_ENV !== "production" && delete this.appliedAnnotations_[o], u && (this.values_.delete(o), u instanceof or && (d = u.value_), Nd(u)), this.keysAtom_.reportChanged(), (a = this.pendingKeys_) == null || (s = a.get(o)) == null || s.set(o in this.target_), l || c) {
        var h = {
          type: Sl,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: d,
          name: o
        };
        process.env.NODE_ENV !== "production" && c && We(h), l && dt(this, h), process.env.NODE_ENV !== "production" && c && Ue();
      }
    } finally {
      tt();
    }
    return !0;
  }, t.observe_ = function(o, n) {
    return process.env.NODE_ENV !== "production" && n === !0 && A("`observe` doesn't support the fire immediately property for observable objects."), ko(this, o);
  }, t.intercept_ = function(o) {
    return wo(this, o);
  }, t.notifyPropertyAddition_ = function(o, n) {
    var i, a, s = ut(this), l = process.env.NODE_ENV !== "production" && De();
    if (s || l) {
      var c = s || l ? {
        type: qt,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: o,
        newValue: n
      } : null;
      process.env.NODE_ENV !== "production" && l && We(c), s && dt(this, c), process.env.NODE_ENV !== "production" && l && Ue();
    }
    (i = this.pendingKeys_) == null || (a = i.get(o)) == null || a.set(!0), this.keysAtom_.reportChanged();
  }, t.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), Br(this.target_);
  }, t.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function hr(e, t) {
  var r;
  if (process.env.NODE_ENV !== "production" && t && ur(e) && A("Options can't be provided for already observable objects."), ot(e, W))
    return process.env.NODE_ENV !== "production" && !(Ya(e) instanceof da) && A("Cannot convert '" + gn(e) + `' into observable object:
The target is already observable of different type.
Extending builtins is not supported.`), e;
  process.env.NODE_ENV !== "production" && !Object.isExtensible(e) && A("Cannot make the designated object observable; it is not extensible");
  var o = (r = t == null ? void 0 : t.name) != null ? r : process.env.NODE_ENV !== "production" ? ($e(e) ? "ObservableObject" : e.constructor.name) + "@" + vt() : "ObservableObject", n = new da(e, /* @__PURE__ */ new Map(), String(o), b1(t));
  return po(e, W, n), e;
}
var h0 = /* @__PURE__ */ fr("ObservableObjectAdministration", da);
function Bl(e) {
  return El[e] || (El[e] = {
    get: function() {
      return this[W].getObservablePropValue_(e);
    },
    set: function(r) {
      return this[W].setObservablePropValue_(e, r);
    }
  });
}
function ur(e) {
  return Dn(e) ? h0(e[W]) : !1;
}
function Tl(e, t, r) {
  var o;
  process.env.NODE_ENV !== "production" && (e.appliedAnnotations_[r] = t), (o = e.target_[Ve]) == null || delete o[r];
}
function Nl(e, t, r) {
  if (process.env.NODE_ENV !== "production" && !Qd(t) && A("Cannot annotate '" + e.name_ + "." + r.toString() + "': Invalid annotation."), process.env.NODE_ENV !== "production" && !dn(t) && ot(e.appliedAnnotations_, r)) {
    var o = e.name_ + "." + r.toString(), n = e.appliedAnnotations_[r].annotationType_, i = t.annotationType_;
    A("Cannot apply '" + i + "' to '" + o + "':" + (`
The field is already annotated with '` + n + "'.") + `
Re-annotating fields is not allowed.
Use 'override' annotation for methods overridden by subclass.`);
  }
}
var p0 = /* @__PURE__ */ Yd(0), b0 = /* @__PURE__ */ function() {
  var e = !1, t = {};
  return Object.defineProperty(t, "0", {
    set: function() {
      e = !0;
    }
  }), Object.create(t)[0] = 1, e === !1;
}(), wi = 0, Xd = function() {
};
function g0(e, t) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t;
}
g0(Xd, Array.prototype);
var Xa = /* @__PURE__ */ function(e, t, r) {
  ld(o, e);
  function o(i, a, s, l) {
    var c;
    return s === void 0 && (s = process.env.NODE_ENV !== "production" ? "ObservableArray@" + vt() : "ObservableArray"), l === void 0 && (l = !1), c = e.call(this) || this, Wt(function() {
      var u = new Ka(s, a, l, !0);
      u.proxy_ = Wo(c), id(Wo(c), W, u), i && i.length && c.spliceWithArray(0, 0, i), b0 && Object.defineProperty(Wo(c), "0", p0);
    }), c;
  }
  var n = o.prototype;
  return n.concat = function() {
    this[W].atom_.reportObserved();
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      s.map(function(c) {
        return xo(c) ? c.slice() : c;
      })
    );
  }, n[r] = function() {
    var i = this, a = 0;
    return so({
      next: function() {
        return a < i.length ? {
          value: i[a++],
          done: !1
        } : {
          done: !0,
          value: void 0
        };
      }
    });
  }, Ha(o, [{
    key: "length",
    get: function() {
      return this[W].getArrayLength_();
    },
    set: function(a) {
      this[W].setArrayLength_(a);
    }
  }, {
    key: t,
    get: function() {
      return "Array";
    }
  }]), o;
}(Xd, Symbol.toStringTag, Symbol.iterator);
Object.entries(pn).forEach(function(e) {
  var t = e[0], r = e[1];
  t !== "concat" && po(Xa.prototype, t, r);
});
function Yd(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[W].get_(e);
    },
    set: function(r) {
      this[W].set_(e, r);
    }
  };
}
function m0(e) {
  wt(Xa.prototype, "" + e, Yd(e));
}
function Jd(e) {
  if (e > wi) {
    for (var t = wi; t < e + 100; t++)
      m0(t);
    wi = e;
  }
}
Jd(1e3);
function _0(e, t, r) {
  return new Xa(e, t, r);
}
function Ht(e, t) {
  if (typeof e == "object" && e !== null) {
    if (xo(e))
      return t !== void 0 && A(23), e[W].atom_;
    if (zr(e))
      return e.atom_;
    if (jt(e)) {
      if (t === void 0)
        return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return r || A(25, t, gn(e)), r;
    }
    if (ur(e)) {
      if (!t)
        return A(26);
      var o = e[W].values_.get(t);
      return o || A(27, t, gn(e)), o;
    }
    if ($a(e) || qn(e) || hn(e))
      return e;
  } else if (Te(e) && hn(e[W]))
    return e[W];
  A(28);
}
function Ya(e, t) {
  if (e || A(29), t !== void 0)
    return Ya(Ht(e, t));
  if ($a(e) || qn(e) || hn(e) || jt(e) || zr(e))
    return e;
  if (e[W])
    return e[W];
  A(24, e);
}
function gn(e, t) {
  var r;
  if (t !== void 0)
    r = Ht(e, t);
  else {
    if (yo(e))
      return e.name;
    ur(e) || jt(e) || zr(e) ? r = Ya(e) : r = Ht(e);
  }
  return r.name_;
}
function Wt(e) {
  var t = vr(), r = In(!0);
  et();
  try {
    return e();
  } finally {
    tt(), Mn(r), Rt(t);
  }
}
var Ol = Rn.toString;
function Ja(e, t, r) {
  return r === void 0 && (r = -1), fa(e, t, r);
}
function fa(e, t, r, o, n) {
  if (e === t)
    return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null)
    return !1;
  if (e !== e)
    return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object")
    return !1;
  var a = Ol.call(e);
  if (a !== Ol.call(t))
    return !1;
  switch (a) {
    case "[object RegExp]":
    case "[object String]":
      return "" + e == "" + t;
    case "[object Number]":
      return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +t;
    case "[object Symbol]":
      return typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
    case "[object Map]":
    case "[object Set]":
      r >= 0 && r++;
      break;
  }
  e = Pl(e), t = Pl(t);
  var s = a === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object")
      return !1;
    var l = e.constructor, c = t.constructor;
    if (l !== c && !(Te(l) && l instanceof l && Te(c) && c instanceof c) && "constructor" in e && "constructor" in t)
      return !1;
  }
  if (r === 0)
    return !1;
  r < 0 && (r = -1), o = o || [], n = n || [];
  for (var u = o.length; u--; )
    if (o[u] === e)
      return n[u] === t;
  if (o.push(e), n.push(t), s) {
    if (u = e.length, u !== t.length)
      return !1;
    for (; u--; )
      if (!fa(e[u], t[u], r - 1, o, n))
        return !1;
  } else {
    var d = Object.keys(e), f;
    if (u = d.length, Object.keys(t).length !== u)
      return !1;
    for (; u--; )
      if (f = d[u], !(ot(t, f) && fa(e[f], t[f], r - 1, o, n)))
        return !1;
  }
  return o.pop(), n.pop(), !0;
}
function Pl(e) {
  return xo(e) ? e.slice() : Rr(e) || jt(e) || bo(e) || zr(e) ? Array.from(e.entries()) : e;
}
function so(e) {
  return e[Symbol.iterator] = y0, e;
}
function y0() {
  return this;
}
function Qd(e) {
  return (
    // Can be function
    e instanceof Object && typeof e.annotationType_ == "string" && Te(e.make_) && Te(e.extend_)
  );
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var t = La();
  typeof t[e] > "u" && A("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: I1,
  extras: {
    getDebugName: gn
  },
  $mobx: W
});
function Zd(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: w0 } = Object.prototype, { getPrototypeOf: Qa } = Object, Ln = /* @__PURE__ */ ((e) => (t) => {
  const r = w0.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), St = (e) => (e = e.toLowerCase(), (t) => Ln(t) === e), Vn = (e) => (t) => typeof t === e, { isArray: Ar } = Array, lo = Vn("undefined");
function k0(e) {
  return e !== null && !lo(e) && e.constructor !== null && !lo(e.constructor) && it(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ef = St("ArrayBuffer");
function x0(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ef(e.buffer), t;
}
const E0 = Vn("string"), it = Vn("function"), tf = Vn("number"), Hn = (e) => e !== null && typeof e == "object", S0 = (e) => e === !0 || e === !1, Xo = (e) => {
  if (Ln(e) !== "object")
    return !1;
  const t = Qa(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, B0 = St("Date"), T0 = St("File"), N0 = St("Blob"), O0 = St("FileList"), P0 = (e) => Hn(e) && it(e.pipe), C0 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || it(e.append) && ((t = Ln(e)) === "formdata" || // detect form-data instance
  t === "object" && it(e.toString) && e.toString() === "[object FormData]"));
}, R0 = St("URLSearchParams"), D0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Eo(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, n;
  if (typeof e != "object" && (e = [e]), Ar(e))
    for (o = 0, n = e.length; o < n; o++)
      t.call(null, e[o], o, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (o = 0; o < a; o++)
      s = i[o], t.call(null, e[s], s, e);
  }
}
function rf(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let o = r.length, n;
  for (; o-- > 0; )
    if (n = r[o], t === n.toLowerCase())
      return n;
  return null;
}
const of = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, nf = (e) => !lo(e) && e !== of;
function va() {
  const { caseless: e } = nf(this) && this || {}, t = {}, r = (o, n) => {
    const i = e && rf(t, n) || n;
    Xo(t[i]) && Xo(o) ? t[i] = va(t[i], o) : Xo(o) ? t[i] = va({}, o) : Ar(o) ? t[i] = o.slice() : t[i] = o;
  };
  for (let o = 0, n = arguments.length; o < n; o++)
    arguments[o] && Eo(arguments[o], r);
  return t;
}
const z0 = (e, t, r, { allOwnKeys: o } = {}) => (Eo(t, (n, i) => {
  r && it(n) ? e[i] = Zd(n, r) : e[i] = n;
}, { allOwnKeys: o }), e), A0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), F0 = (e, t, r, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, j0 = (e, t, r, o) => {
  let n, i, a;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (n = Object.getOwnPropertyNames(e), i = n.length; i-- > 0; )
      a = n[i], (!o || o(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = r !== !1 && Qa(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, I0 = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const o = e.indexOf(t, r);
  return o !== -1 && o === r;
}, M0 = (e) => {
  if (!e)
    return null;
  if (Ar(e))
    return e;
  let t = e.length;
  if (!tf(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, q0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Qa(Uint8Array)), L0 = (e, t) => {
  const o = (e && e[Symbol.iterator]).call(e);
  let n;
  for (; (n = o.next()) && !n.done; ) {
    const i = n.value;
    t.call(e, i[0], i[1]);
  }
}, V0 = (e, t) => {
  let r;
  const o = [];
  for (; (r = e.exec(t)) !== null; )
    o.push(r);
  return o;
}, H0 = St("HTMLFormElement"), $0 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, o, n) {
    return o.toUpperCase() + n;
  }
), Cl = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), W0 = St("RegExp"), af = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), o = {};
  Eo(r, (n, i) => {
    let a;
    (a = t(n, i, e)) !== !1 && (o[i] = a || n);
  }), Object.defineProperties(e, o);
}, U0 = (e) => {
  af(e, (t, r) => {
    if (it(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const o = e[r];
    if (it(o)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, G0 = (e, t) => {
  const r = {}, o = (n) => {
    n.forEach((i) => {
      r[i] = !0;
    });
  };
  return Ar(e) ? o(e) : o(String(e).split(t)), r;
}, K0 = () => {
}, X0 = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ki = "abcdefghijklmnopqrstuvwxyz", Rl = "0123456789", sf = {
  DIGIT: Rl,
  ALPHA: ki,
  ALPHA_DIGIT: ki + ki.toUpperCase() + Rl
}, Y0 = (e = 16, t = sf.ALPHA_DIGIT) => {
  let r = "";
  const { length: o } = t;
  for (; e--; )
    r += t[Math.random() * o | 0];
  return r;
};
function J0(e) {
  return !!(e && it(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Q0 = (e) => {
  const t = new Array(10), r = (o, n) => {
    if (Hn(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[n] = o;
        const i = Ar(o) ? [] : {};
        return Eo(o, (a, s) => {
          const l = r(a, n + 1);
          !lo(l) && (i[s] = l);
        }), t[n] = void 0, i;
      }
    }
    return o;
  };
  return r(e, 0);
}, Z0 = St("AsyncFunction"), ew = (e) => e && (Hn(e) || it(e)) && it(e.then) && it(e.catch), B = {
  isArray: Ar,
  isArrayBuffer: ef,
  isBuffer: k0,
  isFormData: C0,
  isArrayBufferView: x0,
  isString: E0,
  isNumber: tf,
  isBoolean: S0,
  isObject: Hn,
  isPlainObject: Xo,
  isUndefined: lo,
  isDate: B0,
  isFile: T0,
  isBlob: N0,
  isRegExp: W0,
  isFunction: it,
  isStream: P0,
  isURLSearchParams: R0,
  isTypedArray: q0,
  isFileList: O0,
  forEach: Eo,
  merge: va,
  extend: z0,
  trim: D0,
  stripBOM: A0,
  inherits: F0,
  toFlatObject: j0,
  kindOf: Ln,
  kindOfTest: St,
  endsWith: I0,
  toArray: M0,
  forEachEntry: L0,
  matchAll: V0,
  isHTMLForm: H0,
  hasOwnProperty: Cl,
  hasOwnProp: Cl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: af,
  freezeMethods: U0,
  toObjectSet: G0,
  toCamelCase: $0,
  noop: K0,
  toFiniteNumber: X0,
  findKey: rf,
  global: of,
  isContextDefined: nf,
  ALPHABET: sf,
  generateString: Y0,
  isSpecCompliantForm: J0,
  toJSONObject: Q0,
  isAsyncFn: Z0,
  isThenable: ew
};
function ne(e, t, r, o, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), o && (this.request = o), n && (this.response = n);
}
B.inherits(ne, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: B.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const lf = ne.prototype, cf = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  cf[e] = { value: e };
});
Object.defineProperties(ne, cf);
Object.defineProperty(lf, "isAxiosError", { value: !0 });
ne.from = (e, t, r, o, n, i) => {
  const a = Object.create(lf);
  return B.toFlatObject(e, a, function(l) {
    return l !== Error.prototype;
  }, (s) => s !== "isAxiosError"), ne.call(a, e.message, t, r, o, n), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const tw = null;
function ha(e) {
  return B.isPlainObject(e) || B.isArray(e);
}
function uf(e) {
  return B.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Dl(e, t, r) {
  return e ? e.concat(t).map(function(n, i) {
    return n = uf(n), !r && i ? "[" + n + "]" : n;
  }).join(r ? "." : "") : t;
}
function rw(e) {
  return B.isArray(e) && !e.some(ha);
}
const ow = B.toFlatObject(B, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function $n(e, t, r) {
  if (!B.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = B.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, g) {
    return !B.isUndefined(g[p]);
  });
  const o = r.metaTokens, n = r.visitor || u, i = r.dots, a = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && B.isSpecCompliantForm(t);
  if (!B.isFunction(n))
    throw new TypeError("visitor must be a function");
  function c(v) {
    if (v === null)
      return "";
    if (B.isDate(v))
      return v.toISOString();
    if (!l && B.isBlob(v))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(v) || B.isTypedArray(v) ? l && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function u(v, p, g) {
    let b = v;
    if (v && !g && typeof v == "object") {
      if (B.endsWith(p, "{}"))
        p = o ? p : p.slice(0, -2), v = JSON.stringify(v);
      else if (B.isArray(v) && rw(v) || (B.isFileList(v) || B.endsWith(p, "[]")) && (b = B.toArray(v)))
        return p = uf(p), b.forEach(function(m, w) {
          !(B.isUndefined(m) || m === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Dl([p], w, i) : a === null ? p : p + "[]",
            c(m)
          );
        }), !1;
    }
    return ha(v) ? !0 : (t.append(Dl(g, p, i), c(v)), !1);
  }
  const d = [], f = Object.assign(ow, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: ha
  });
  function h(v, p) {
    if (!B.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      d.push(v), B.forEach(v, function(b, y) {
        (!(B.isUndefined(b) || b === null) && n.call(
          t,
          b,
          B.isString(y) ? y.trim() : y,
          p,
          f
        )) === !0 && h(b, p ? p.concat(y) : [y]);
      }), d.pop();
    }
  }
  if (!B.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function zl(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(o) {
    return t[o];
  });
}
function Za(e, t) {
  this._pairs = [], e && $n(e, this, t);
}
const df = Za.prototype;
df.append = function(t, r) {
  this._pairs.push([t, r]);
};
df.toString = function(t) {
  const r = t ? function(o) {
    return t.call(this, o, zl);
  } : zl;
  return this._pairs.map(function(n) {
    return r(n[0]) + "=" + r(n[1]);
  }, "").join("&");
};
function nw(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ff(e, t, r) {
  if (!t)
    return e;
  const o = r && r.encode || nw, n = r && r.serialize;
  let i;
  if (n ? i = n(t, r) : i = B.isURLSearchParams(t) ? t.toString() : new Za(t, r).toString(o), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Al {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, o) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    B.forEach(this.handlers, function(o) {
      o !== null && t(o);
    });
  }
}
const vf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, iw = typeof URLSearchParams < "u" ? URLSearchParams : Za, aw = typeof FormData < "u" ? FormData : null, sw = typeof Blob < "u" ? Blob : null, lw = {
  isBrowser: !0,
  classes: {
    URLSearchParams: iw,
    FormData: aw,
    Blob: sw
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, hf = typeof window < "u" && typeof document < "u", cw = ((e) => hf && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), uw = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", dw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: hf,
  hasStandardBrowserEnv: cw,
  hasStandardBrowserWebWorkerEnv: uw
}, Symbol.toStringTag, { value: "Module" })), _t = {
  ...dw,
  ...lw
};
function fw(e, t) {
  return $n(e, new _t.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, n, i) {
      return _t.isNode && B.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function vw(e) {
  return B.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function hw(e) {
  const t = {}, r = Object.keys(e);
  let o;
  const n = r.length;
  let i;
  for (o = 0; o < n; o++)
    i = r[o], t[i] = e[i];
  return t;
}
function pf(e) {
  function t(r, o, n, i) {
    let a = r[i++];
    if (a === "__proto__")
      return !0;
    const s = Number.isFinite(+a), l = i >= r.length;
    return a = !a && B.isArray(n) ? n.length : a, l ? (B.hasOwnProp(n, a) ? n[a] = [n[a], o] : n[a] = o, !s) : ((!n[a] || !B.isObject(n[a])) && (n[a] = []), t(r, o, n[a], i) && B.isArray(n[a]) && (n[a] = hw(n[a])), !s);
  }
  if (B.isFormData(e) && B.isFunction(e.entries)) {
    const r = {};
    return B.forEachEntry(e, (o, n) => {
      t(vw(o), n, r, 0);
    }), r;
  }
  return null;
}
function pw(e, t, r) {
  if (B.isString(e))
    try {
      return (t || JSON.parse)(e), B.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(e);
}
const es = {
  transitional: vf,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const o = r.getContentType() || "", n = o.indexOf("application/json") > -1, i = B.isObject(t);
    if (i && B.isHTMLForm(t) && (t = new FormData(t)), B.isFormData(t))
      return n ? JSON.stringify(pf(t)) : t;
    if (B.isArrayBuffer(t) || B.isBuffer(t) || B.isStream(t) || B.isFile(t) || B.isBlob(t))
      return t;
    if (B.isArrayBufferView(t))
      return t.buffer;
    if (B.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return fw(t, this.formSerializer).toString();
      if ((s = B.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return $n(
          s ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || n ? (r.setContentType("application/json", !1), pw(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || es.transitional, o = r && r.forcedJSONParsing, n = this.responseType === "json";
    if (t && B.isString(t) && (o && !this.responseType || n)) {
      const a = !(r && r.silentJSONParsing) && n;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? ne.from(s, ne.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: _t.classes.FormData,
    Blob: _t.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
B.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  es.headers[e] = {};
});
const ts = es, bw = B.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), gw = (e) => {
  const t = {};
  let r, o, n;
  return e && e.split(`
`).forEach(function(a) {
    n = a.indexOf(":"), r = a.substring(0, n).trim().toLowerCase(), o = a.substring(n + 1).trim(), !(!r || t[r] && bw[r]) && (r === "set-cookie" ? t[r] ? t[r].push(o) : t[r] = [o] : t[r] = t[r] ? t[r] + ", " + o : o);
  }), t;
}, Fl = Symbol("internals");
function qr(e) {
  return e && String(e).trim().toLowerCase();
}
function Yo(e) {
  return e === !1 || e == null ? e : B.isArray(e) ? e.map(Yo) : String(e);
}
function mw(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const _w = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function xi(e, t, r, o, n) {
  if (B.isFunction(o))
    return o.call(this, t, r);
  if (n && (t = r), !!B.isString(t)) {
    if (B.isString(o))
      return t.indexOf(o) !== -1;
    if (B.isRegExp(o))
      return o.test(t);
  }
}
function yw(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, o) => r.toUpperCase() + o);
}
function ww(e, t) {
  const r = B.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + r, {
      value: function(n, i, a) {
        return this[o].call(this, t, n, i, a);
      },
      configurable: !0
    });
  });
}
class Wn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, o) {
    const n = this;
    function i(s, l, c) {
      const u = qr(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = B.findKey(n, u);
      (!d || n[d] === void 0 || c === !0 || c === void 0 && n[d] !== !1) && (n[d || l] = Yo(s));
    }
    const a = (s, l) => B.forEach(s, (c, u) => i(c, u, l));
    return B.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : B.isString(t) && (t = t.trim()) && !_w(t) ? a(gw(t), r) : t != null && i(r, t, o), this;
  }
  get(t, r) {
    if (t = qr(t), t) {
      const o = B.findKey(this, t);
      if (o) {
        const n = this[o];
        if (!r)
          return n;
        if (r === !0)
          return mw(n);
        if (B.isFunction(r))
          return r.call(this, n, o);
        if (B.isRegExp(r))
          return r.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = qr(t), t) {
      const o = B.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!r || xi(this, this[o], o, r)));
    }
    return !1;
  }
  delete(t, r) {
    const o = this;
    let n = !1;
    function i(a) {
      if (a = qr(a), a) {
        const s = B.findKey(o, a);
        s && (!r || xi(o, o[s], s, r)) && (delete o[s], n = !0);
      }
    }
    return B.isArray(t) ? t.forEach(i) : i(t), n;
  }
  clear(t) {
    const r = Object.keys(this);
    let o = r.length, n = !1;
    for (; o--; ) {
      const i = r[o];
      (!t || xi(this, this[i], i, t, !0)) && (delete this[i], n = !0);
    }
    return n;
  }
  normalize(t) {
    const r = this, o = {};
    return B.forEach(this, (n, i) => {
      const a = B.findKey(o, i);
      if (a) {
        r[a] = Yo(n), delete r[i];
        return;
      }
      const s = t ? yw(i) : String(i).trim();
      s !== i && delete r[i], r[s] = Yo(n), o[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return B.forEach(this, (o, n) => {
      o != null && o !== !1 && (r[n] = t && B.isArray(o) ? o.join(", ") : o);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const o = new this(t);
    return r.forEach((n) => o.set(n)), o;
  }
  static accessor(t) {
    const o = (this[Fl] = this[Fl] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function i(a) {
      const s = qr(a);
      o[s] || (ww(n, a), o[s] = !0);
    }
    return B.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Wn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
B.reduceDescriptors(Wn.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(o) {
      this[r] = o;
    }
  };
});
B.freezeMethods(Wn);
const Dt = Wn;
function Ei(e, t) {
  const r = this || ts, o = t || r, n = Dt.from(o.headers);
  let i = o.data;
  return B.forEach(e, function(s) {
    i = s.call(r, i, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), i;
}
function bf(e) {
  return !!(e && e.__CANCEL__);
}
function So(e, t, r) {
  ne.call(this, e ?? "canceled", ne.ERR_CANCELED, t, r), this.name = "CanceledError";
}
B.inherits(So, ne, {
  __CANCEL__: !0
});
function kw(e, t, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? e(r) : t(new ne(
    "Request failed with status code " + r.status,
    [ne.ERR_BAD_REQUEST, ne.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const xw = _t.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, o, n, i) {
      const a = [e + "=" + encodeURIComponent(t)];
      B.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), B.isString(o) && a.push("path=" + o), B.isString(n) && a.push("domain=" + n), i === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Ew(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Sw(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function gf(e, t) {
  return e && !Ew(t) ? Sw(e, t) : t;
}
const Bw = _t.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let o;
    function n(i) {
      let a = i;
      return t && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return o = n(window.location.href), function(a) {
      const s = B.isString(a) ? n(a) : a;
      return s.protocol === o.protocol && s.host === o.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function Tw(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Nw(e, t) {
  e = e || 10;
  const r = new Array(e), o = new Array(e);
  let n = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = o[i];
    a || (a = c), r[n] = l, o[n] = c;
    let d = i, f = 0;
    for (; d !== n; )
      f += r[d++], d = d % e;
    if (n = (n + 1) % e, n === i && (i = (i + 1) % e), c - a < t)
      return;
    const h = u && c - u;
    return h ? Math.round(f * 1e3 / h) : void 0;
  };
}
function jl(e, t) {
  let r = 0;
  const o = Nw(50, 250);
  return (n) => {
    const i = n.loaded, a = n.lengthComputable ? n.total : void 0, s = i - r, l = o(s), c = i <= a;
    r = i;
    const u = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: l || void 0,
      estimated: l && a && c ? (a - i) / l : void 0,
      event: n
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const Ow = typeof XMLHttpRequest < "u", Pw = Ow && function(e) {
  return new Promise(function(r, o) {
    let n = e.data;
    const i = Dt.from(e.headers).normalize();
    let { responseType: a, withXSRFToken: s } = e, l;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    let u;
    if (B.isFormData(n)) {
      if (_t.hasStandardBrowserEnv || _t.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((u = i.getContentType()) !== !1) {
        const [p, ...g] = u ? u.split(";").map((b) => b.trim()).filter(Boolean) : [];
        i.setContentType([p || "multipart/form-data", ...g].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(p + ":" + g));
    }
    const f = gf(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), ff(f, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function h() {
      if (!d)
        return;
      const p = Dt.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), b = {
        data: !a || a === "text" || a === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: p,
        config: e,
        request: d
      };
      kw(function(m) {
        r(m), c();
      }, function(m) {
        o(m), c();
      }, b), d = null;
    }
    if ("onloadend" in d ? d.onloadend = h : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, d.onabort = function() {
      d && (o(new ne("Request aborted", ne.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      o(new ne("Network Error", ne.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const b = e.transitional || vf;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), o(new ne(
        g,
        b.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
        e,
        d
      )), d = null;
    }, _t.hasStandardBrowserEnv && (s && B.isFunction(s) && (s = s(e)), s || s !== !1 && Bw(f))) {
      const p = e.xsrfHeaderName && e.xsrfCookieName && xw.read(e.xsrfCookieName);
      p && i.set(e.xsrfHeaderName, p);
    }
    n === void 0 && i.setContentType(null), "setRequestHeader" in d && B.forEach(i.toJSON(), function(g, b) {
      d.setRequestHeader(b, g);
    }), B.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), a && a !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", jl(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", jl(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (p) => {
      d && (o(!p || p.type ? new So(null, e, d) : p), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const v = Tw(f);
    if (v && _t.protocols.indexOf(v) === -1) {
      o(new ne("Unsupported protocol " + v + ":", ne.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(n || null);
  });
}, pa = {
  http: tw,
  xhr: Pw
};
B.forEach(pa, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Il = (e) => `- ${e}`, Cw = (e) => B.isFunction(e) || e === null || e === !1, mf = {
  getAdapter: (e) => {
    e = B.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, o;
    const n = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let a;
      if (o = r, !Cw(r) && (o = pa[(a = String(r)).toLowerCase()], o === void 0))
        throw new ne(`Unknown adapter '${a}'`);
      if (o)
        break;
      n[a || "#" + i] = o;
    }
    if (!o) {
      const i = Object.entries(n).map(
        ([s, l]) => `adapter ${s} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? i.length > 1 ? `since :
` + i.map(Il).join(`
`) : " " + Il(i[0]) : "as no adapter specified";
      throw new ne(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: pa
};
function Si(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new So(null, e);
}
function Ml(e) {
  return Si(e), e.headers = Dt.from(e.headers), e.data = Ei.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), mf.getAdapter(e.adapter || ts.adapter)(e).then(function(o) {
    return Si(e), o.data = Ei.call(
      e,
      e.transformResponse,
      o
    ), o.headers = Dt.from(o.headers), o;
  }, function(o) {
    return bf(o) || (Si(e), o && o.response && (o.response.data = Ei.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = Dt.from(o.response.headers))), Promise.reject(o);
  });
}
const ql = (e) => e instanceof Dt ? { ...e } : e;
function Nr(e, t) {
  t = t || {};
  const r = {};
  function o(c, u, d) {
    return B.isPlainObject(c) && B.isPlainObject(u) ? B.merge.call({ caseless: d }, c, u) : B.isPlainObject(u) ? B.merge({}, u) : B.isArray(u) ? u.slice() : u;
  }
  function n(c, u, d) {
    if (B.isUndefined(u)) {
      if (!B.isUndefined(c))
        return o(void 0, c, d);
    } else
      return o(c, u, d);
  }
  function i(c, u) {
    if (!B.isUndefined(u))
      return o(void 0, u);
  }
  function a(c, u) {
    if (B.isUndefined(u)) {
      if (!B.isUndefined(c))
        return o(void 0, c);
    } else
      return o(void 0, u);
  }
  function s(c, u, d) {
    if (d in t)
      return o(c, u);
    if (d in e)
      return o(void 0, c);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (c, u) => n(ql(c), ql(u), !0)
  };
  return B.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = l[u] || n, f = d(e[u], t[u], u);
    B.isUndefined(f) && d !== s || (r[u] = f);
  }), r;
}
const _f = "1.6.8", rs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  rs[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ll = {};
rs.transitional = function(t, r, o) {
  function n(i, a) {
    return "[Axios v" + _f + "] Transitional option '" + i + "'" + a + (o ? ". " + o : "");
  }
  return (i, a, s) => {
    if (t === !1)
      throw new ne(
        n(a, " has been removed" + (r ? " in " + r : "")),
        ne.ERR_DEPRECATED
      );
    return r && !Ll[a] && (Ll[a] = !0, console.warn(
      n(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, a, s) : !0;
  };
};
function Rw(e, t, r) {
  if (typeof e != "object")
    throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let n = o.length;
  for (; n-- > 0; ) {
    const i = o[n], a = t[i];
    if (a) {
      const s = e[i], l = s === void 0 || a(s, i, e);
      if (l !== !0)
        throw new ne("option " + i + " must be " + l, ne.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ne("Unknown option " + i, ne.ERR_BAD_OPTION);
  }
}
const ba = {
  assertOptions: Rw,
  validators: rs
}, Mt = ba.validators;
class mn {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Al(),
      response: new Al()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (o) {
      if (o instanceof Error) {
        let n;
        Error.captureStackTrace ? Error.captureStackTrace(n = {}) : n = new Error();
        const i = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        o.stack ? i && !String(o.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + i) : o.stack = i;
      }
      throw o;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Nr(this.defaults, r);
    const { transitional: o, paramsSerializer: n, headers: i } = r;
    o !== void 0 && ba.assertOptions(o, {
      silentJSONParsing: Mt.transitional(Mt.boolean),
      forcedJSONParsing: Mt.transitional(Mt.boolean),
      clarifyTimeoutError: Mt.transitional(Mt.boolean)
    }, !1), n != null && (B.isFunction(n) ? r.paramsSerializer = {
      serialize: n
    } : ba.assertOptions(n, {
      encode: Mt.function,
      serialize: Mt.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = i && B.merge(
      i.common,
      i[r.method]
    );
    i && B.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete i[v];
      }
    ), r.headers = Dt.concat(a, i);
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(r) === !1 || (l = l && p.synchronous, s.unshift(p.fulfilled, p.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(p) {
      c.push(p.fulfilled, p.rejected);
    });
    let u, d = 0, f;
    if (!l) {
      const v = [Ml.bind(this), void 0];
      for (v.unshift.apply(v, s), v.push.apply(v, c), f = v.length, u = Promise.resolve(r); d < f; )
        u = u.then(v[d++], v[d++]);
      return u;
    }
    f = s.length;
    let h = r;
    for (d = 0; d < f; ) {
      const v = s[d++], p = s[d++];
      try {
        h = v(h);
      } catch (g) {
        p.call(this, g);
        break;
      }
    }
    try {
      u = Ml.call(this, h);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, f = c.length; d < f; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = Nr(this.defaults, t);
    const r = gf(t.baseURL, t.url);
    return ff(r, t.params, t.paramsSerializer);
  }
}
B.forEach(["delete", "get", "head", "options"], function(t) {
  mn.prototype[t] = function(r, o) {
    return this.request(Nr(o || {}, {
      method: t,
      url: r,
      data: (o || {}).data
    }));
  };
});
B.forEach(["post", "put", "patch"], function(t) {
  function r(o) {
    return function(i, a, s) {
      return this.request(Nr(s || {}, {
        method: t,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  mn.prototype[t] = r(), mn.prototype[t + "Form"] = r(!0);
});
const Jo = mn;
class os {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const o = this;
    this.promise.then((n) => {
      if (!o._listeners)
        return;
      let i = o._listeners.length;
      for (; i-- > 0; )
        o._listeners[i](n);
      o._listeners = null;
    }), this.promise.then = (n) => {
      let i;
      const a = new Promise((s) => {
        o.subscribe(s), i = s;
      }).then(n);
      return a.cancel = function() {
        o.unsubscribe(i);
      }, a;
    }, t(function(i, a, s) {
      o.reason || (o.reason = new So(i, a, s), r(o.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new os(function(n) {
        t = n;
      }),
      cancel: t
    };
  }
}
const Dw = os;
function zw(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Aw(e) {
  return B.isObject(e) && e.isAxiosError === !0;
}
const ga = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ga).forEach(([e, t]) => {
  ga[t] = e;
});
const Fw = ga;
function yf(e) {
  const t = new Jo(e), r = Zd(Jo.prototype.request, t);
  return B.extend(r, Jo.prototype, t, { allOwnKeys: !0 }), B.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(n) {
    return yf(Nr(e, n));
  }, r;
}
const ge = yf(ts);
ge.Axios = Jo;
ge.CanceledError = So;
ge.CancelToken = Dw;
ge.isCancel = bf;
ge.VERSION = _f;
ge.toFormData = $n;
ge.AxiosError = ne;
ge.Cancel = ge.CanceledError;
ge.all = function(t) {
  return Promise.all(t);
};
ge.spread = zw;
ge.isAxiosError = Aw;
ge.mergeConfig = Nr;
ge.AxiosHeaders = Dt;
ge.formToJSON = (e) => pf(B.isHTMLForm(e) ? new FormData(e) : e);
ge.getAdapter = mf.getAdapter;
ge.HttpStatusCode = Fw;
ge.default = ge;
ge.defaults.baseURL = "http://localhost:3000";
const Gr = (e) => e.data, Lr = {
  get: (e) => ge.get(e).then(Gr),
  post: (e, t) => ge.post(e, t).then(Gr),
  put: (e, t) => ge.put(e, t).then(Gr),
  del: (e) => ge.delete(e).then(Gr)
}, jw = {
  list: () => ge.get("/tasks").then(Gr),
  details: (e) => Lr.get(`/tasks/${e}`),
  create: (e) => Lr.post("/tasks", e),
  update: (e) => Lr.put(`/tasks/${e.id}`, e),
  delete: (e) => Lr.del(`/tasks/${e}`),
  attend: (e) => Lr.post(`/tasks/${e}/attend`, {})
}, Vr = {
  Tasks: jw
};
class Iw {
  constructor() {
    this.tasks = [], this.selectedTask = void 0, this.loadTasks = async () => {
      try {
        this.tasks = await Vr.Tasks.list();
      } catch (t) {
        console.log(t);
      }
    }, this.loadTask = async (t) => {
      let r = this.getTask(t);
      if (r)
        return this.selectedTask = r, r;
      try {
        return r = await Vr.Tasks.details(t), this.setTask(r), mi(() => {
          this.selectedTask = r;
        }), r;
      } catch (o) {
        console.log(o);
      }
    }, this.setTask = (t) => {
      this.tasks.push(t);
    }, this.getTask = (t) => this.tasks.find((r) => r.id === t), this.createTask = async (t) => {
      try {
        await Vr.Tasks.create(t), this.setTask(t);
      } catch (r) {
        console.log(r);
      }
    }, this.updateTask = async (t) => {
      try {
        await Vr.Tasks.update(t), mi(() => {
          if (t.id) {
            const r = this.tasks.findIndex((o) => o.id === t.id);
            r !== -1 && (this.tasks[r] = { ...this.tasks[r], ...t });
          }
        });
      } catch (r) {
        console.log(r);
      }
    }, this.deleteTask = async (t) => {
      try {
        await Vr.Tasks.delete(t), mi(() => {
          const r = this.tasks.findIndex((o) => o.id === t);
          r !== -1 && this.tasks.splice(r, 1);
        });
      } catch (r) {
        console.log(r);
      }
    }, Ld(this), this.loadTasks();
  }
}
class Mw {
  constructor() {
    this.dislogIsVisible = !1, this.setDialogIsVisible = (t) => {
      this.dislogIsVisible = t;
    }, Ld(this);
  }
}
const qw = {
  taskStore: new Iw(),
  dialogStore: new Mw()
}, Lw = tc(qw);
function ns() {
  return rc(Lw);
}
const _k = (e) => {
  const t = Xb(), { dialogStore: r } = ns();
  return /* @__PURE__ */ bt(Rf, { children: [
    /* @__PURE__ */ Z("h2", { children: "Task List" }),
    /* @__PURE__ */ Z("div", { children: /* @__PURE__ */ Z(
      Vt,
      {
        appearance: "primary",
        ...t,
        onClick: () => {
          r.setDialogIsVisible(!0);
        },
        children: "Create"
      }
    ) })
  ] });
};
if (!Zt)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!a0)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Vw(e) {
  e();
}
function Hw(e) {
  e || (e = Vw, process.env.NODE_ENV !== "production" && console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native")), J1({ reactionScheduler: e });
}
function $w(e) {
  return Id(e);
}
var Ww = 1e4, Uw = 1e4, Gw = (
  /** @class */
  function() {
    function e(t) {
      var r = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
      }), Object.defineProperty(this, "registrations", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /* @__PURE__ */ new Map()
      }), Object.defineProperty(this, "sweepTimeout", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "sweep", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: function(o) {
          o === void 0 && (o = Ww), clearTimeout(r.sweepTimeout), r.sweepTimeout = void 0;
          var n = Date.now();
          r.registrations.forEach(function(i, a) {
            n - i.registeredAt >= o && (r.finalize(i.value), r.registrations.delete(a));
          }), r.registrations.size > 0 && r.scheduleSweep();
        }
      }), Object.defineProperty(this, "finalizeAllImmediately", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: function() {
          r.sweep(0);
        }
      });
    }
    return Object.defineProperty(e.prototype, "register", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function(t, r, o) {
        this.registrations.set(o, {
          value: r,
          registeredAt: Date.now()
        }), this.scheduleSweep();
      }
    }), Object.defineProperty(e.prototype, "unregister", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function(t) {
        this.registrations.delete(t);
      }
    }), Object.defineProperty(e.prototype, "scheduleSweep", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function() {
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, Uw));
      }
    }), e;
  }()
), Kw = typeof FinalizationRegistry < "u" ? FinalizationRegistry : Gw, co = new Kw(function(e) {
  var t;
  (t = e.reaction) === null || t === void 0 || t.dispose(), e.reaction = null;
}), ma = { exports: {} }, Bi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vl;
function Xw() {
  if (Vl)
    return Bi;
  Vl = 1;
  var e = gt;
  function t(d, f) {
    return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(d, f) {
    var h = f(), v = o({ inst: { value: h, getSnapshot: f } }), p = v[0].inst, g = v[1];
    return i(function() {
      p.value = h, p.getSnapshot = f, l(p) && g({ inst: p });
    }, [d, h, f]), n(function() {
      return l(p) && g({ inst: p }), d(function() {
        l(p) && g({ inst: p });
      });
    }, [d]), a(h), h;
  }
  function l(d) {
    var f = d.getSnapshot;
    d = d.value;
    try {
      var h = f();
      return !r(d, h);
    } catch {
      return !0;
    }
  }
  function c(d, f) {
    return f();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : s;
  return Bi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Bi;
}
var Ti = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hl;
function Yw() {
  return Hl || (Hl = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = gt, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(m) {
      {
        for (var w = arguments.length, _ = new Array(w > 1 ? w - 1 : 0), E = 1; E < w; E++)
          _[E - 1] = arguments[E];
        o("error", m, _);
      }
    }
    function o(m, w, _) {
      {
        var E = t.ReactDebugCurrentFrame, S = E.getStackAddendum();
        S !== "" && (w += "%s", _ = _.concat([S]));
        var C = _.map(function(I) {
          return String(I);
        });
        C.unshift("Warning: " + w), Function.prototype.apply.call(console[m], console, C);
      }
    }
    function n(m, w) {
      return m === w && (m !== 0 || 1 / m === 1 / w) || m !== m && w !== w;
    }
    var i = typeof Object.is == "function" ? Object.is : n, a = e.useState, s = e.useEffect, l = e.useLayoutEffect, c = e.useDebugValue, u = !1, d = !1;
    function f(m, w, _) {
      u || e.startTransition !== void 0 && (u = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var E = w();
      if (!d) {
        var S = w();
        i(E, S) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var C = a({
        inst: {
          value: E,
          getSnapshot: w
        }
      }), I = C[0].inst, H = C[1];
      return l(function() {
        I.value = E, I.getSnapshot = w, h(I) && H({
          inst: I
        });
      }, [m, E, w]), s(function() {
        h(I) && H({
          inst: I
        });
        var se = function() {
          h(I) && H({
            inst: I
          });
        };
        return m(se);
      }, [m]), c(E), E;
    }
    function h(m) {
      var w = m.getSnapshot, _ = m.value;
      try {
        var E = w();
        return !i(_, E);
      } catch {
        return !0;
      }
    }
    function v(m, w, _) {
      return w();
    }
    var p = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !p, b = g ? v : f, y = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b;
    Ti.useSyncExternalStore = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ti;
}
process.env.NODE_ENV === "production" ? ma.exports = Xw() : ma.exports = Yw();
var Jw = ma.exports;
function $l(e) {
  e.reaction = new oo("observer".concat(e.name), function() {
    var t;
    e.stateVersion = Symbol(), (t = e.onStoreChange) === null || t === void 0 || t.call(e);
  });
}
function Qw(e, t) {
  t === void 0 && (t = "observed");
  var r = gt.useRef(null);
  if (!r.current) {
    var o = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function(s) {
        return co.unregister(o), o.onStoreChange = s, o.reaction || ($l(o), o.stateVersion = Symbol()), function() {
          var l;
          o.onStoreChange = null, (l = o.reaction) === null || l === void 0 || l.dispose(), o.reaction = null;
        };
      },
      getSnapshot: function() {
        return o.stateVersion;
      }
    };
    r.current = o;
  }
  var n = r.current;
  n.reaction || ($l(n), co.register(r, n, n)), gt.useDebugValue(n.reaction, $w), Jw.useSyncExternalStore(
    // Both of these must be stable, otherwise it would keep resubscribing every render.
    n.subscribe,
    n.getSnapshot,
    n.getSnapshot
  );
  var i, a;
  if (n.reaction.track(function() {
    try {
      i = e();
    } catch (s) {
      a = s;
    }
  }), a)
    throw a;
  return i;
}
var Ni, Oi, Wl = !0, wf = typeof Symbol == "function" && Symbol.for, Zw = (Oi = (Ni = Object.getOwnPropertyDescriptor(function() {
}, "name")) === null || Ni === void 0 ? void 0 : Ni.configurable) !== null && Oi !== void 0 ? Oi : !1, Ul = wf ? Symbol.for("react.forward_ref") : typeof Di == "function" && Di(function(e) {
  return null;
}).$$typeof, Gl = wf ? Symbol.for("react.memo") : typeof zi == "function" && zi(function(e) {
  return null;
}).$$typeof;
function kf(e, t) {
  var r;
  if (process.env.NODE_ENV !== "production" && Wl && t && (Wl = !1, console.warn("[mobx-react-lite] `observer(fn, { forwardRef: true })` is deprecated, use `observer(React.forwardRef(fn))`")), Gl && e.$$typeof === Gl)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var o = (r = t == null ? void 0 : t.forwardRef) !== null && r !== void 0 ? r : !1, n = e, i = e.displayName || e.name;
  if (Ul && e.$$typeof === Ul && (o = !0, n = e.render, typeof n != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var a = function(s, l) {
    return Qw(function() {
      return n(s, l);
    }, i);
  };
  return a.displayName = e.displayName, Zw && Object.defineProperty(a, "name", {
    value: e.name,
    writable: !0,
    configurable: !0
  }), e.contextTypes && (a.contextTypes = e.contextTypes), o && (a = Di(a)), a = zi(a), tk(e, a), process.env.NODE_ENV !== "production" && Object.defineProperty(a, "contextTypes", {
    set: function() {
      var s, l;
      throw new Error("[mobx-react-lite] `".concat(this.displayName || ((s = this.type) === null || s === void 0 ? void 0 : s.displayName) || ((l = this.type) === null || l === void 0 ? void 0 : l.name) || "Component", ".contextTypes` must be set before applying `observer`."));
    }
  }), a;
}
var ek = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function tk(e, t) {
  Object.keys(e).forEach(function(r) {
    ek[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
process.env.NODE_ENV;
var Pi;
Hw(If);
Pi = co.finalizeAllImmediately;
const rk = (e) => {
  const { open: t, onOpenChange: r, title: o, action: n, actionText: i, children: a, showActionButtons: s } = e;
  return /* @__PURE__ */ Z("div", { children: /* @__PURE__ */ Z(
    Hu,
    {
      open: t,
      onOpenChange: (c, u) => {
        r(c, u);
      },
      children: /* @__PURE__ */ Z(Gu, { children: /* @__PURE__ */ bt(Wu, { children: [
        /* @__PURE__ */ Z(Uu, { children: o }),
        /* @__PURE__ */ Z(Ku, { children: a }),
        s && /* @__PURE__ */ bt($u, { children: [
          /* @__PURE__ */ Z(Cn, { disableButtonEnhancement: !0, children: /* @__PURE__ */ Z(Vt, { appearance: "secondary", children: "Close" }) }),
          /* @__PURE__ */ Z(Vt, { appearance: "primary", onClick: n, children: i })
        ] })
      ] }) })
    }
  ) });
}, ok = () => Math.random().toString(36).substr(2, 9);
function nk(e, t) {
  if (Kl(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length)
    return !1;
  for (var n = 0; n < r.length; n++)
    if (!Object.hasOwnProperty.call(t, r[n]) || !Kl(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
function Kl(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Xl = /* @__PURE__ */ Symbol("patchMixins"), xf = /* @__PURE__ */ Symbol("patchedDefinition");
function ik(e, t) {
  var r = e[Xl] = e[Xl] || {}, o = r[t] = r[t] || {};
  return o.locks = o.locks || 0, o.methods = o.methods || [], o;
}
function Yl(e, t) {
  for (var r = this, o = arguments.length, n = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++)
    n[i - 2] = arguments[i];
  t.locks++;
  try {
    var a;
    return e != null && (a = e.apply(this, n)), a;
  } finally {
    t.locks--, t.locks === 0 && t.methods.forEach(function(s) {
      s.apply(r, n);
    });
  }
}
function Jl(e, t) {
  var r = function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    Yl.call.apply(Yl, [this, e, t].concat(i));
  };
  return r;
}
function ak(e, t, r) {
  var o = ik(e, t);
  o.methods.indexOf(r) < 0 && o.methods.push(r);
  var n = Object.getOwnPropertyDescriptor(e, t);
  if (!(n && n[xf])) {
    var i = e[t], a = Ef(e, t, n ? n.enumerable : void 0, o, i);
    Object.defineProperty(e, t, a);
  }
}
function Ef(e, t, r, o, n) {
  var i, a = Jl(n, o);
  return i = {}, i[xf] = !0, i.get = function() {
    return a;
  }, i.set = function(l) {
    if (this === e)
      a = Jl(l, o);
    else {
      var c = Ef(this, t, r, o, l);
      Object.defineProperty(this, t, c);
    }
  }, i.configurable = !0, i.enumerable = r, i;
}
var Ql = /* @__PURE__ */ Symbol("ObserverAdministration"), Zl = /* @__PURE__ */ Symbol("isMobXReactObserver"), Sf;
process.env.NODE_ENV !== "production" && (Sf = {
  props: /* @__PURE__ */ Ci("props"),
  state: /* @__PURE__ */ Ci("state"),
  context: /* @__PURE__ */ Ci("context")
});
function uo(e) {
  var t;
  return (t = e[Ql]) != null ? t : e[Ql] = {
    reaction: null,
    mounted: !1,
    reactionInvalidatedBeforeMount: !1,
    forceUpdate: null,
    name: Qo(e.constructor),
    state: void 0,
    props: void 0,
    context: void 0
  };
}
function sk(e) {
  var t = e.prototype;
  if (e[Zl]) {
    var r = Qo(e);
    throw new Error("The provided component class (" + r + ") has already been declared as an observer component.");
  } else
    e[Zl] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== nc) {
    if (!t.shouldComponentUpdate)
      t.shouldComponentUpdate = ec;
    else if (t.shouldComponentUpdate !== ec)
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  }
  process.env.NODE_ENV !== "production" && Object.defineProperties(t, Sf);
  var o = t.render;
  if (typeof o != "function") {
    var n = Qo(e);
    throw new Error("[mobx-react] class component (" + n + ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.");
  }
  t.render = function() {
    return Object.defineProperty(this, "render", {
      // There is no safe way to replace render, therefore it's forbidden.
      configurable: !1,
      writable: !1,
      value: lk.call(this, o)
    }), this.render();
  };
  var i = t.componentDidMount;
  return t.componentDidMount = function() {
    var a = this;
    if (process.env.NODE_ENV !== "production" && this.componentDidMount !== Object.getPrototypeOf(this).componentDidMount) {
      var s = Qo(e);
      throw new Error("[mobx-react] `observer(" + s + ").componentDidMount` must be defined on prototype.\n`componentDidMount = () => {}` or `componentDidMount = function() {}` is not supported.");
    }
    var l = uo(this);
    return l.mounted = !0, co.unregister(this), l.forceUpdate = function() {
      return a.forceUpdate();
    }, (!l.reaction || l.reactionInvalidatedBeforeMount) && l.forceUpdate(), i == null ? void 0 : i.apply(this, arguments);
  }, ak(t, "componentWillUnmount", function() {
    var a, s = uo(this);
    (a = s.reaction) == null || a.dispose(), s.reaction = null, s.forceUpdate = null, s.mounted = !1, s.reactionInvalidatedBeforeMount = !1;
  }), e;
}
function Qo(e) {
  return e.displayName || e.name || "<component>";
}
function lk(e) {
  var t = e.bind(this), r = uo(this);
  function o() {
    r.reaction || (r.reaction = ck(r), r.mounted || co.register(this, r, this));
    var n = void 0, i = void 0;
    if (r.reaction.track(function() {
      try {
        i = S1(!1, t);
      } catch (a) {
        n = a;
      }
    }), n)
      throw n;
    return i;
  }
  return o;
}
function ck(e) {
  return new oo(e.name + ".render()", function() {
    if (!e.mounted) {
      e.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      e.forceUpdate == null || e.forceUpdate();
    } catch {
      var t;
      (t = e.reaction) == null || t.dispose(), e.reaction = null;
    }
  });
}
function ec(e, t) {
  return this.state !== t ? !0 : !nk(this.props, e);
}
function Ci(e) {
  return {
    configurable: !0,
    enumerable: !0,
    get: function() {
      var r = uo(this), o = C1().trackingDerivation;
      if (o && o !== r.reaction)
        throw new Error('[mobx-react] Cannot read "' + r.name + "." + e + `" in a reactive context, as it isn't observable.
                    Please use component lifecycle method to copy the value into a local observable first.
                    See https://github.com/mobxjs/mobx/blob/main/packages/mobx-react/README.md#note-on-using-props-and-state-in-derivations`);
      return r[e];
    },
    set: function(r) {
      uo(this)[e] = r;
    }
  };
}
function uk(e, t) {
  if (t && t.kind !== "class")
    throw new Error("The @observer decorator can be used on classes only");
  return e.isMobxInjector === !0 && console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"), Object.prototype.isPrototypeOf.call(oc, e) || Object.prototype.isPrototypeOf.call(nc, e) ? sk(e) : kf(e);
}
gt.version.split(".")[0];
if (!oc)
  throw new Error("mobx-react requires React to be available");
if (!Oe)
  throw new Error("mobx-react requires mobx to be available");
class Ri {
  constructor(t) {
    this.id = "", this.title = "", this.description = "", t && (this.id = t.id, this.title = t.title, this.description = t.description);
  }
}
const dk = sh({
  display: "flex",
  flexDirection: "column",
  rowGap: Yb.spacingVerticalL
}), fk = ah({
  wrapper: {
    columnGap: "5px",
    display: "flex"
  }
}), vk = uk((e) => {
  const { id: t, onClearTaskId: r } = e, [o, n] = Zt(""), [i, a] = Zt(""), [s, l] = Zt(!0), [c, u] = Zt(!0), d = fk(), { taskStore: f, dialogStore: h } = ns(), { loadTask: v, createTask: p, updateTask: g } = f, [b, y] = Zt(new Ri());
  Ff(() => {
    t ? v(t).then((S) => {
      S && (y(new Ri(S)), n(S.title), a(S.description));
    }) : (y(new Ri()), n(""), a(""));
  }, [t, v]);
  function m() {
    if (!o.trim() || !i.trim()) {
      l(!!o.trim()), u(!!i.trim());
      return;
    }
    if (b.id) {
      let S = {
        id: b.id,
        title: o,
        description: i
      };
      g(S).then(() => w());
    } else {
      let S = {
        id: ok(),
        title: o,
        description: i
      };
      p(S).then(() => w());
    }
  }
  const w = () => {
    h.setDialogIsVisible(!1), r();
  }, _ = (S) => {
    const C = S.target.value;
    n(C), l(!!C.trim());
  }, E = (S) => {
    const C = S.target.value;
    a(C), u(!!C.trim());
  };
  return /* @__PURE__ */ bt("div", { className: dk(), children: [
    /* @__PURE__ */ Z(Yi, { label: "Title", required: !0, validationState: s ? "none" : "error", validationMessage: s ? null : "Title is required", children: /* @__PURE__ */ Z(Au, { type: "text", onChange: _, value: o }) }),
    /* @__PURE__ */ Z(Yi, { label: "Description", required: !0, validationState: c ? "none" : "error", validationMessage: c ? null : "Description is required", children: /* @__PURE__ */ Z(Fu, { onChange: E, value: i }) }),
    /* @__PURE__ */ bt("p", { className: d.wrapper, children: [
      /* @__PURE__ */ Z(Vt, { appearance: "secondary", onClick: w, children: "Close" }),
      /* @__PURE__ */ Z(Vt, { appearance: "primary", onClick: m, children: "Save" })
    ] })
  ] });
}), hk = [
  { columnKey: "id", label: "ID" },
  { columnKey: "title", label: "Title" },
  { columnKey: "description", label: "Description" },
  { columnKey: "actions", label: "Actions" }
], yk = kf((e) => {
  const t = Hb({ axis: "grid" }), r = Eu({
    tabBehavior: "limited-trap-focus"
  }), { taskStore: o, dialogStore: n } = ns(), [i, a] = Zt(""), s = (u) => {
    a(u), n.setDialogIsVisible(!0);
  }, l = () => {
    n.setDialogIsVisible(!1);
  }, c = () => {
    a((u) => "");
  };
  return /* @__PURE__ */ bt(ed, { children: [
    /* @__PURE__ */ Z("div", { children: n.dislogIsVisible && /* @__PURE__ */ Z(
      rk,
      {
        open: n.dislogIsVisible,
        onOpenChange: l,
        title: "Add Task",
        action: () => console.log("Action clicked"),
        actionText: "Save",
        showActionButtons: !1,
        children: /* @__PURE__ */ Z(vk, { id: i, onClearTaskId: c })
      }
    ) }),
    /* @__PURE__ */ bt(
      Qu,
      {
        ...t,
        role: "grid",
        "aria-label": "Table with grid keyboard navigation",
        children: [
          /* @__PURE__ */ Z(Zu, { children: /* @__PURE__ */ bt(ea, { children: [
            hk.map((u) => /* @__PURE__ */ Z(ta, { children: u.label }, u.columnKey)),
            /* @__PURE__ */ Z(ta, {})
          ] }) }),
          /* @__PURE__ */ Z(Ju, { children: o.tasks.map((u) => /* @__PURE__ */ bt(ea, { children: [
            /* @__PURE__ */ Z(Wr, { tabIndex: 0, role: "gridcell", children: /* @__PURE__ */ Z(Ur, { children: u.id }) }),
            /* @__PURE__ */ Z(Wr, { tabIndex: 0, role: "gridcell", children: /* @__PURE__ */ Z(Ur, { children: u.title }) }),
            /* @__PURE__ */ Z(Wr, { tabIndex: 0, role: "gridcell", children: /* @__PURE__ */ Z(Ur, { children: u.description }) }),
            /* @__PURE__ */ Z(Wr, { role: "gridcell", tabIndex: 0, ...r, children: /* @__PURE__ */ bt(Ur, { children: [
              /* @__PURE__ */ Z(Vt, { icon: /* @__PURE__ */ Z(vp, {}), "aria-label": "Edit", onClick: () => s(u.id) }),
              /* @__PURE__ */ Z(Vt, { icon: /* @__PURE__ */ Z(fp, {}), "aria-label": "Delete", onClick: () => o.deleteTask(u.id) })
            ] }) })
          ] }, u.id)) })
        ]
      }
    )
  ] });
});
export {
  _k as MainHeader,
  vk as TaskForm,
  yk as TaskList,
  mk as TaskManagerFeatures
};
