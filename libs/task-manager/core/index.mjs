import { createContext as di, useContext as hi } from "react";
var pi = {
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
}, _i = process.env.NODE_ENV !== "production" ? pi : {};
function p(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  if (process.env.NODE_ENV !== "production") {
    var i = typeof e == "string" ? e : _i[e];
    throw typeof i == "function" && (i = i.apply(null, r)), new Error("[MobX] " + i);
  }
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (r.length ? " " + r.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var vi = {};
function Jn() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : vi;
}
var Wn = Object.assign, st = Object.getOwnPropertyDescriptor, X = Object.defineProperty, bt = Object.prototype, at = [];
Object.freeze(at);
var Xn = {};
Object.freeze(Xn);
var bi = typeof Proxy < "u", mi = /* @__PURE__ */ Object.toString();
function Yn() {
  bi || p(process.env.NODE_ENV !== "production" ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
}
function je(e) {
  process.env.NODE_ENV !== "production" && h.verifyProxies && p("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + e);
}
function H() {
  return ++h.mobxGuid;
}
function nn(e) {
  var t = !1;
  return function() {
    if (!t)
      return t = !0, e.apply(this, arguments);
  };
}
var Oe = function() {
};
function S(e) {
  return typeof e == "function";
}
function de(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function mt(e) {
  return e !== null && typeof e == "object";
}
function j(e) {
  if (!mt(e))
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null)
    return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === mi;
}
function Zn(e) {
  var t = e == null ? void 0 : e.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function yt(e, t, r) {
  X(e, t, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: r
  });
}
function Qn(e, t, r) {
  X(e, t, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: r
  });
}
function me(e, t) {
  var r = "isMobX" + e;
  return t.prototype[r] = !0, function(n) {
    return mt(n) && n[r] === !0;
  };
}
function Se(e) {
  return e instanceof Map;
}
function qe(e) {
  return e instanceof Set;
}
var er = typeof Object.getOwnPropertySymbols < "u";
function yi(e) {
  var t = Object.keys(e);
  if (!er)
    return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length ? [].concat(t, r.filter(function(n) {
    return bt.propertyIsEnumerable.call(e, n);
  })) : t;
}
var Ue = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : er ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function Ft(e) {
  return typeof e == "string" ? e : typeof e == "symbol" ? e.toString() : new String(e).toString();
}
function tr(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function q(e, t) {
  return bt.hasOwnProperty.call(e, t);
}
var gi = Object.getOwnPropertyDescriptors || function(t) {
  var r = {};
  return Ue(t).forEach(function(n) {
    r[n] = st(t, n);
  }), r;
};
function En(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ai(n.key), n);
  }
}
function rn(e, t, r) {
  return t && En(e.prototype, t), r && En(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ae() {
  return ae = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ae.apply(this, arguments);
}
function nr(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, It(e, t);
}
function It(e, t) {
  return It = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, It(e, t);
}
function tt(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Oi(e, t) {
  if (e) {
    if (typeof e == "string")
      return An(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return An(e, t);
  }
}
function An(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Ee(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Oi(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[n++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ei(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ai(e) {
  var t = Ei(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Q = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function Y(e) {
  function t(r, n) {
    if (Ke(n))
      return e.decorate_20223_(r, n);
    De(r, n, e);
  }
  return Object.assign(t, e);
}
function De(e, t, r) {
  if (q(e, Q) || yt(e, Q, ae({}, e[Q])), process.env.NODE_ENV !== "production" && ct(r) && !q(e[Q], t)) {
    var n = e.constructor.name + ".prototype." + t.toString();
    p("'" + n + "' is decorated with 'override', but no such decorated member was found on prototype.");
  }
  Ni(e, r, t), ct(r) || (e[Q][t] = r);
}
function Ni(e, t, r) {
  if (process.env.NODE_ENV !== "production" && !ct(t) && q(e[Q], r)) {
    var n = e.constructor.name + ".prototype." + r.toString(), i = e[Q][r].annotationType_, o = t.annotationType_;
    p("Cannot apply '@" + o + "' to '" + n + "':" + (`
The field is already decorated with '@` + i + "'.") + `
Re-decorating fields is not allowed.
Use '@override' decorator for methods overridden by subclass.`);
  }
}
function Ke(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
function gt(e, t) {
  process.env.NODE_ENV !== "production" && !t.includes(e.kind) && p("The decorator applied to '" + String(e.name) + "' cannot be used on a " + e.kind + " element");
}
var m = /* @__PURE__ */ Symbol("mobx administration"), ze = /* @__PURE__ */ function() {
  function e(r) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "Atom@" + H() : "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = g.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = r;
  }
  var t = e.prototype;
  return t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(n) {
      return n();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(n) {
      return n();
    });
  }, t.reportObserved = function() {
    return gr(this);
  }, t.reportChanged = function() {
    M(), Or(this), k();
  }, t.toString = function() {
    return this.name_;
  }, e;
}(), on = /* @__PURE__ */ me("Atom", ze);
function rr(e, t, r) {
  t === void 0 && (t = Oe), r === void 0 && (r = Oe);
  var n = new ze(e);
  return t !== Oe && Lo(n, t), r !== Oe && Tr(n, r), n;
}
function wi(e, t) {
  return e === t;
}
function Si(e, t) {
  return pn(e, t);
}
function Di(e, t) {
  return pn(e, t, 1);
}
function Ti(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var ut = {
  identity: wi,
  structural: Si,
  default: Ti,
  shallow: Di
};
function he(e, t, r) {
  return Fe(e) ? e : Array.isArray(e) ? D.array(e, {
    name: r
  }) : j(e) ? D.object(e, void 0, {
    name: r
  }) : Se(e) ? D.map(e, {
    name: r
  }) : qe(e) ? D.set(e, {
    name: r
  }) : typeof e == "function" && !Ge(e) && !ke(e) ? Zn(e) ? Ne(e) : Me(r, e) : e;
}
function Ri(e, t, r) {
  if (e == null || be(e) || Xe(e) || re(e) || Te(e))
    return e;
  if (Array.isArray(e))
    return D.array(e, {
      name: r,
      deep: !1
    });
  if (j(e))
    return D.object(e, void 0, {
      name: r,
      deep: !1
    });
  if (Se(e))
    return D.map(e, {
      name: r,
      deep: !1
    });
  if (qe(e))
    return D.set(e, {
      name: r,
      deep: !1
    });
  process.env.NODE_ENV !== "production" && p("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function Ot(e) {
  return e;
}
function xi(e, t) {
  return process.env.NODE_ENV !== "production" && Fe(e) && p("observable.struct should not be used with observable values"), pn(e, t) ? t : e;
}
var ji = "override";
function ct(e) {
  return e.annotationType_ === ji;
}
function He(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Pi,
    extend_: Vi,
    decorate_20223_: Ci
  };
}
function Pi(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound)
    return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Ge(r.value))
    return 1;
  var o = ir(e, this, t, r, !1);
  return X(n, t, o), 2;
}
function Vi(e, t, r, n) {
  var i = ir(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function Ci(e, t) {
  process.env.NODE_ENV !== "production" && gt(t, ["method", "field"]);
  var r = t.kind, n = t.name, i = t.addInitializer, o = this, s = function(c) {
    var l, f, b, E;
    return pe((l = (f = o.options_) == null ? void 0 : f.name) != null ? l : n.toString(), c, (b = (E = o.options_) == null ? void 0 : E.autoAction) != null ? b : !1);
  };
  if (r == "field") {
    i(function() {
      De(this, n, o);
    });
    return;
  }
  if (r == "method") {
    var a;
    return Ge(e) || (e = s(e)), (a = this.options_) != null && a.bound && i(function() {
      var u = this, c = u[n].bind(u);
      c.isMobxAction = !0, u[n] = c;
    }), e;
  }
  p("Cannot apply '" + o.annotationType_ + "' to '" + String(n) + "' (kind: " + r + "):" + (`
'` + o.annotationType_ + "' can only be used on properties with a function value."));
}
function Bi(e, t, r, n) {
  var i = t.annotationType_, o = n.value;
  process.env.NODE_ENV !== "production" && !S(o) && p("Cannot apply '" + i + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + i + "' can only be used on properties with a function value."));
}
function ir(e, t, r, n, i) {
  var o, s, a, u, c, l, f;
  i === void 0 && (i = h.safeDescriptors), Bi(e, t, r, n);
  var b = n.value;
  if ((o = t.options_) != null && o.bound) {
    var E;
    b = b.bind((E = e.proxy_) != null ? E : e.target_);
  }
  return {
    value: pe(
      (s = (a = t.options_) == null ? void 0 : a.name) != null ? s : r.toString(),
      b,
      (u = (c = t.options_) == null ? void 0 : c.autoAction) != null ? u : !1,
      // https://github.com/mobxjs/mobx/discussions/3140
      (l = t.options_) != null && l.bound ? (f = e.proxy_) != null ? f : e.target_ : void 0
    ),
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
function or(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Li,
    extend_: Ui,
    decorate_20223_: Mi
  };
}
function Li(e, t, r, n) {
  var i;
  if (n === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if ((i = this.options_) != null && i.bound && (!q(e.target_, t) || !ke(e.target_[t])) && this.extend_(e, t, r, !1) === null)
    return 0;
  if (ke(r.value))
    return 1;
  var o = sr(e, this, t, r, !1, !1);
  return X(n, t, o), 2;
}
function Ui(e, t, r, n) {
  var i, o = sr(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, o, n);
}
function Mi(e, t) {
  var r;
  process.env.NODE_ENV !== "production" && gt(t, ["method"]);
  var n = t.name, i = t.addInitializer;
  return ke(e) || (e = Ne(e)), (r = this.options_) != null && r.bound && i(function() {
    var o = this, s = o[n].bind(o);
    s.isMobXFlow = !0, o[n] = s;
  }), e;
}
function ki(e, t, r, n) {
  var i = t.annotationType_, o = n.value;
  process.env.NODE_ENV !== "production" && !S(o) && p("Cannot apply '" + i + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + i + "' can only be used on properties with a generator function value."));
}
function sr(e, t, r, n, i, o) {
  o === void 0 && (o = h.safeDescriptors), ki(e, t, r, n);
  var s = n.value;
  if (ke(s) || (s = Ne(s)), i) {
    var a;
    s = s.bind((a = e.proxy_) != null ? a : e.target_), s.isMobXFlow = !0;
  }
  return {
    value: s,
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: o ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !o
  };
}
function sn(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Fi,
    extend_: Ii,
    decorate_20223_: $i
  };
}
function Fi(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Ii(e, t, r, n) {
  return qi(e, this, t, r), e.defineComputedProperty_(t, ae({}, this.options_, {
    get: r.get,
    set: r.set
  }), n);
}
function $i(e, t) {
  process.env.NODE_ENV !== "production" && gt(t, ["getter"]);
  var r = this, n = t.name, i = t.addInitializer;
  return i(function() {
    var o = Re(this)[m], s = ae({}, r.options_, {
      get: e,
      context: this
    });
    s.name || (s.name = process.env.NODE_ENV !== "production" ? o.name_ + "." + n.toString() : "ObservableObject." + n.toString()), o.values_.set(n, new _e(s));
  }), function() {
    return this[m].getObservablePropValue_(n);
  };
}
function qi(e, t, r, n) {
  var i = t.annotationType_, o = n.get;
  process.env.NODE_ENV !== "production" && !o && p("Cannot apply '" + i + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + i + "' can only be used on getter(+setter) properties."));
}
function Et(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Ki,
    extend_: zi,
    decorate_20223_: Hi
  };
}
function Ki(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function zi(e, t, r, n) {
  var i, o;
  return Gi(e, this, t, r), e.defineObservableProperty_(t, r.value, (i = (o = this.options_) == null ? void 0 : o.enhancer) != null ? i : he, n);
}
function Hi(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (t.kind === "field")
      throw p("Please use `@observable accessor " + String(t.name) + "` instead of `@observable " + String(t.name) + "`");
    gt(t, ["accessor"]);
  }
  var r = this, n = t.kind, i = t.name, o = /* @__PURE__ */ new WeakSet();
  function s(a, u) {
    var c, l, f = Re(a)[m], b = new fe(u, (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : he, process.env.NODE_ENV !== "production" ? f.name_ + "." + i.toString() : "ObservableObject." + i.toString(), !1);
    f.values_.set(i, b), o.add(a);
  }
  if (n == "accessor")
    return {
      get: function() {
        return o.has(this) || s(this, e.get.call(this)), this[m].getObservablePropValue_(i);
      },
      set: function(u) {
        return o.has(this) || s(this, u), this[m].setObservablePropValue_(i, u);
      },
      init: function(u) {
        return o.has(this) || s(this, u), u;
      }
    };
}
function Gi(e, t, r, n) {
  var i = t.annotationType_;
  process.env.NODE_ENV !== "production" && !("value" in n) && p("Cannot apply '" + i + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + i + "' cannot be used on getter/setter properties"));
}
var Ji = "true", Wi = /* @__PURE__ */ ar();
function ar(e) {
  return {
    annotationType_: Ji,
    options_: e,
    make_: Xi,
    extend_: Yi,
    decorate_20223_: Zi
  };
}
function Xi(e, t, r, n) {
  var i, o;
  if (r.get)
    return At.make_(e, t, r, n);
  if (r.set) {
    var s = pe(t.toString(), r.set);
    return n === e.target_ ? e.defineProperty_(t, {
      configurable: h.safeDescriptors ? e.isPlainObject_ : !0,
      set: s
    }) === null ? 0 : 2 : (X(n, t, {
      configurable: !0,
      set: s
    }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var a;
    if (Zn(r.value)) {
      var u, c = (u = this.options_) != null && u.autoBind ? Ne.bound : Ne;
      return c.make_(e, t, r, n);
    }
    var l = (a = this.options_) != null && a.autoBind ? Me.bound : Me;
    return l.make_(e, t, r, n);
  }
  var f = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? D.ref : D;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var b;
    r.value = r.value.bind((b = e.proxy_) != null ? b : e.target_);
  }
  return f.make_(e, t, r, n);
}
function Yi(e, t, r, n) {
  var i, o;
  if (r.get)
    return At.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(t, {
      configurable: h.safeDescriptors ? e.isPlainObject_ : !0,
      set: pe(t.toString(), r.set)
    }, n);
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var s;
    r.value = r.value.bind((s = e.proxy_) != null ? s : e.target_);
  }
  var a = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? D.ref : D;
  return a.extend_(e, t, r, n);
}
function Zi(e, t) {
  p("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Qi = "observable", eo = "observable.ref", to = "observable.shallow", no = "observable.struct", ur = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(ur);
function Qe(e) {
  return e || ur;
}
var $t = /* @__PURE__ */ Et(Qi), ro = /* @__PURE__ */ Et(eo, {
  enhancer: Ot
}), io = /* @__PURE__ */ Et(to, {
  enhancer: Ri
}), oo = /* @__PURE__ */ Et(no, {
  enhancer: xi
}), cr = /* @__PURE__ */ Y($t);
function et(e) {
  return e.deep === !0 ? he : e.deep === !1 ? Ot : ao(e.defaultDecorator);
}
function so(e) {
  var t;
  return e ? (t = e.defaultDecorator) != null ? t : ar(e) : void 0;
}
function ao(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : he;
}
function lr(e, t, r) {
  if (Ke(t))
    return $t.decorate_20223_(e, t);
  if (de(t)) {
    De(e, t, $t);
    return;
  }
  return Fe(e) ? e : j(e) ? D.object(e, t, r) : Array.isArray(e) ? D.array(e, t) : Se(e) ? D.map(e, t) : qe(e) ? D.set(e, t) : typeof e == "object" && e !== null ? e : D.box(e, t);
}
Wn(lr, cr);
var uo = {
  box: function(t, r) {
    var n = Qe(r);
    return new fe(t, et(n), n.name, !0, n.equals);
  },
  array: function(t, r) {
    var n = Qe(r);
    return (h.useProxies === !1 || n.proxy === !1 ? is : Jo)(t, et(n), n.name);
  },
  map: function(t, r) {
    var n = Qe(r);
    return new Ur(t, et(n), n.name);
  },
  set: function(t, r) {
    var n = Qe(r);
    return new Fr(t, et(n), n.name);
  },
  object: function(t, r, n) {
    return ge(function() {
      return xr(h.useProxies === !1 || (n == null ? void 0 : n.proxy) === !1 ? Re({}, n) : zo({}, n), t, r);
    });
  },
  ref: /* @__PURE__ */ Y(ro),
  shallow: /* @__PURE__ */ Y(io),
  deep: cr,
  struct: /* @__PURE__ */ Y(oo)
}, D = /* @__PURE__ */ Wn(lr, uo), fr = "computed", co = "computed.struct", qt = /* @__PURE__ */ sn(fr), lo = /* @__PURE__ */ sn(co, {
  equals: ut.structural
}), At = function(t, r) {
  if (Ke(r))
    return qt.decorate_20223_(t, r);
  if (de(r))
    return De(t, r, qt);
  if (j(t))
    return Y(sn(fr, t));
  process.env.NODE_ENV !== "production" && (S(t) || p("First argument to `computed` should be an expression."), S(r) && p("A setter as second argument is no longer supported, use `{ set: fn }` option instead"));
  var n = j(r) ? r : {};
  return n.get = t, n.name || (n.name = t.name || ""), new _e(n);
};
Object.assign(At, qt);
At.struct = /* @__PURE__ */ Y(lo);
var Nn, wn, lt = 0, fo = 1, ho = (Nn = (wn = /* @__PURE__ */ st(function() {
}, "name")) == null ? void 0 : wn.configurable) != null ? Nn : !1, Sn = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function pe(e, t, r, n) {
  r === void 0 && (r = !1), process.env.NODE_ENV !== "production" && (S(t) || p("`action` can only be invoked on functions"), (typeof e != "string" || !e) && p("actions should have valid names, got: '" + e + "'"));
  function i() {
    return dr(e, r, t, n || this, arguments);
  }
  return i.isMobxAction = !0, i.toString = function() {
    return t.toString();
  }, ho && (Sn.value = e, X(i, "name", Sn)), i;
}
function dr(e, t, r, n, i) {
  var o = po(e, t, n, i);
  try {
    return r.apply(n, i);
  } catch (s) {
    throw o.error_ = s, s;
  } finally {
    _o(o);
  }
}
function po(e, t, r, n) {
  var i = process.env.NODE_ENV !== "production" && T() && !!e, o = 0;
  if (process.env.NODE_ENV !== "production" && i) {
    o = Date.now();
    var s = n ? Array.from(n) : at;
    P({
      type: ln,
      name: e,
      object: r,
      arguments: s
    });
  }
  var a = h.trackingDerivation, u = !t || !a;
  M();
  var c = h.allowStateChanges;
  u && (ye(), c = an(!0));
  var l = cn(!0), f = {
    runAsAction_: u,
    prevDerivation_: a,
    prevAllowStateChanges_: c,
    prevAllowStateReads_: l,
    notifySpy_: i,
    startTime_: o,
    actionId_: fo++,
    parentActionId_: lt
  };
  return lt = f.actionId_, f;
}
function _o(e) {
  lt !== e.actionId_ && p(30), lt = e.parentActionId_, e.error_ !== void 0 && (h.suppressReactionErrors = !0), un(e.prevAllowStateChanges_), Le(e.prevAllowStateReads_), k(), e.runAsAction_ && te(e.prevDerivation_), process.env.NODE_ENV !== "production" && e.notifySpy_ && V({
    time: Date.now() - e.startTime_
  }), h.suppressReactionErrors = !1;
}
function an(e) {
  var t = h.allowStateChanges;
  return h.allowStateChanges = e, t;
}
function un(e) {
  h.allowStateChanges = e;
}
var hr, vo = "create";
hr = Symbol.toPrimitive;
var fe = /* @__PURE__ */ function(e) {
  nr(t, e);
  function t(n, i, o, s, a) {
    var u;
    return o === void 0 && (o = process.env.NODE_ENV !== "production" ? "ObservableValue@" + H() : "ObservableValue"), s === void 0 && (s = !0), a === void 0 && (a = ut.default), u = e.call(this, o) || this, u.enhancer = void 0, u.name_ = void 0, u.equals = void 0, u.hasUnreportedChange_ = !1, u.interceptors_ = void 0, u.changeListeners_ = void 0, u.value_ = void 0, u.dehancer = void 0, u.enhancer = i, u.name_ = o, u.equals = a, u.value_ = i(n, void 0, o), process.env.NODE_ENV !== "production" && s && T() && ve({
      type: vo,
      object: tt(u),
      observableKind: "value",
      debugObjectName: u.name_,
      newValue: "" + u.value_
    }), u;
  }
  var r = t.prototype;
  return r.dehanceValue = function(i) {
    return this.dehancer !== void 0 ? this.dehancer(i) : i;
  }, r.set = function(i) {
    var o = this.value_;
    if (i = this.prepareNewValue_(i), i !== h.UNCHANGED) {
      var s = T();
      process.env.NODE_ENV !== "production" && s && P({
        type: $,
        object: this,
        observableKind: "value",
        debugObjectName: this.name_,
        newValue: i,
        oldValue: o
      }), this.setNewValue_(i), process.env.NODE_ENV !== "production" && s && V();
    }
  }, r.prepareNewValue_ = function(i) {
    if (J(this), L(this)) {
      var o = U(this, {
        object: this,
        type: $,
        newValue: i
      });
      if (!o)
        return h.UNCHANGED;
      i = o.newValue;
    }
    return i = this.enhancer(i, this.value_, this.name_), this.equals(this.value_, i) ? h.UNCHANGED : i;
  }, r.setNewValue_ = function(i) {
    var o = this.value_;
    this.value_ = i, this.reportChanged(), K(this) && z(this, {
      type: $,
      object: this,
      newValue: i,
      oldValue: o
    });
  }, r.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, r.intercept_ = function(i) {
    return Je(this, i);
  }, r.observe_ = function(i, o) {
    return o && i({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: $,
      newValue: this.value_,
      oldValue: void 0
    }), We(this, i);
  }, r.raw = function() {
    return this.value_;
  }, r.toJSON = function() {
    return this.get();
  }, r.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, r.valueOf = function() {
    return tr(this.get());
  }, r[hr] = function() {
    return this.valueOf();
  }, t;
}(ze), pr;
pr = Symbol.toPrimitive;
var _e = /* @__PURE__ */ function() {
  function e(r) {
    this.dependenciesState_ = g.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = g.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new ft(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = F.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, r.get || p(31), this.derivation = r.get, this.name_ = r.name || (process.env.NODE_ENV !== "production" ? "ComputedValue@" + H() : "ComputedValue"), r.set && (this.setter_ = pe(process.env.NODE_ENV !== "production" ? this.name_ + "-setter" : "ComputedValue-setter", r.set)), this.equals_ = r.equals || (r.compareStructural || r.struct ? ut.structural : ut.default), this.scope_ = r.context, this.requiresReaction_ = r.requiresReaction, this.keepAlive_ = !!r.keepAlive;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    Eo(this);
  }, t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(n) {
      return n();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(n) {
      return n();
    });
  }, t.get = function() {
    if (this.isComputing_ && p(32, this.name_, this.derivation), h.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      Kt(this) && (this.warnAboutUntrackedRead_(), M(), this.value_ = this.computeValue_(!1), k());
    else if (gr(this), Kt(this)) {
      var n = h.trackingContext;
      this.keepAlive_ && !n && (h.trackingContext = this), this.trackAndCompute() && Oo(this), h.trackingContext = n;
    }
    var i = this.value_;
    if (nt(i))
      throw i.cause;
    return i;
  }, t.set = function(n) {
    if (this.setter_) {
      this.isRunningSetter_ && p(33, this.name_), this.isRunningSetter_ = !0;
      try {
        this.setter_.call(this.scope_, n);
      } finally {
        this.isRunningSetter_ = !1;
      }
    } else
      p(34, this.name_);
  }, t.trackAndCompute = function() {
    var n = this.value_, i = (
      /* see #1208 */
      this.dependenciesState_ === g.NOT_TRACKING_
    ), o = this.computeValue_(!0), s = i || nt(n) || nt(o) || !this.equals_(n, o);
    return s && (this.value_ = o, process.env.NODE_ENV !== "production" && T() && ve({
      observableKind: "computed",
      debugObjectName: this.name_,
      object: this.scope_,
      type: "update",
      oldValue: n,
      newValue: o
    })), s;
  }, t.computeValue_ = function(n) {
    this.isComputing_ = !0;
    var i = an(!1), o;
    if (n)
      o = _r(this, this.derivation, this.scope_);
    else if (h.disableErrorBoundaries === !0)
      o = this.derivation.call(this.scope_);
    else
      try {
        o = this.derivation.call(this.scope_);
      } catch (s) {
        o = new ft(s);
      }
    return un(i), this.isComputing_ = !1, o;
  }, t.suspend_ = function() {
    this.keepAlive_ || (zt(this), this.value_ = void 0, process.env.NODE_ENV !== "production" && this.isTracing_ !== F.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access."));
  }, t.observe_ = function(n, i) {
    var o = this, s = !0, a = void 0;
    return jo(function() {
      var u = o.get();
      if (!s || i) {
        var c = ye();
        n({
          observableKind: "computed",
          debugObjectName: o.name_,
          type: $,
          object: o,
          newValue: u,
          oldValue: a
        }), te(c);
      }
      s = !1, a = u;
    });
  }, t.warnAboutUntrackedRead_ = function() {
    process.env.NODE_ENV !== "production" && (this.isTracing_ !== F.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."), (typeof this.requiresReaction_ == "boolean" ? this.requiresReaction_ : h.computedRequiresReaction) && console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."));
  }, t.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, t.valueOf = function() {
    return tr(this.get());
  }, t[pr] = function() {
    return this.valueOf();
  }, e;
}(), Nt = /* @__PURE__ */ me("ComputedValue", _e), g;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(g || (g = {}));
var F;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(F || (F = {}));
var ft = function(t) {
  this.cause = void 0, this.cause = t;
};
function nt(e) {
  return e instanceof ft;
}
function Kt(e) {
  switch (e.dependenciesState_) {
    case g.UP_TO_DATE_:
      return !1;
    case g.NOT_TRACKING_:
    case g.STALE_:
      return !0;
    case g.POSSIBLY_STALE_: {
      for (var t = cn(!0), r = ye(), n = e.observing_, i = n.length, o = 0; o < i; o++) {
        var s = n[o];
        if (Nt(s)) {
          if (h.disableErrorBoundaries)
            s.get();
          else
            try {
              s.get();
            } catch {
              return te(r), Le(t), !0;
            }
          if (e.dependenciesState_ === g.STALE_)
            return te(r), Le(t), !0;
        }
      }
      return br(e), te(r), Le(t), !1;
    }
  }
}
function J(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = e.observers_.size > 0;
    !h.allowStateChanges && (t || h.enforceActions === "always") && console.warn("[MobX] " + (h.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + e.name_);
  }
}
function bo(e) {
  process.env.NODE_ENV !== "production" && !h.allowStateReads && h.observableRequiresReaction && console.warn("[mobx] Observable '" + e.name_ + "' being read outside a reactive context.");
}
function _r(e, t, r) {
  var n = cn(!0);
  br(e), e.newObserving_ = new Array(e.observing_.length + 100), e.unboundDepsCount_ = 0, e.runId_ = ++h.runId;
  var i = h.trackingDerivation;
  h.trackingDerivation = e, h.inBatch++;
  var o;
  if (h.disableErrorBoundaries === !0)
    o = t.call(r);
  else
    try {
      o = t.call(r);
    } catch (s) {
      o = new ft(s);
    }
  return h.inBatch--, h.trackingDerivation = i, yo(e), mo(e), Le(n), o;
}
function mo(e) {
  process.env.NODE_ENV !== "production" && e.observing_.length === 0 && (typeof e.requiresObservable_ == "boolean" ? e.requiresObservable_ : h.reactionRequiresObservable) && console.warn("[mobx] Derivation '" + e.name_ + "' is created/updated without reading any observable value.");
}
function yo(e) {
  for (var t = e.observing_, r = e.observing_ = e.newObserving_, n = g.UP_TO_DATE_, i = 0, o = e.unboundDepsCount_, s = 0; s < o; s++) {
    var a = r[s];
    a.diffValue_ === 0 && (a.diffValue_ = 1, i !== s && (r[i] = a), i++), a.dependenciesState_ > n && (n = a.dependenciesState_);
  }
  for (r.length = i, e.newObserving_ = null, o = t.length; o--; ) {
    var u = t[o];
    u.diffValue_ === 0 && mr(u, e), u.diffValue_ = 0;
  }
  for (; i--; ) {
    var c = r[i];
    c.diffValue_ === 1 && (c.diffValue_ = 0, go(c, e));
  }
  n !== g.UP_TO_DATE_ && (e.dependenciesState_ = n, e.onBecomeStale_());
}
function zt(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; )
    mr(t[r], e);
  e.dependenciesState_ = g.NOT_TRACKING_;
}
function vr(e) {
  var t = ye();
  try {
    return e();
  } finally {
    te(t);
  }
}
function ye() {
  var e = h.trackingDerivation;
  return h.trackingDerivation = null, e;
}
function te(e) {
  h.trackingDerivation = e;
}
function cn(e) {
  var t = h.allowStateReads;
  return h.allowStateReads = e, t;
}
function Le(e) {
  h.allowStateReads = e;
}
function br(e) {
  if (e.dependenciesState_ !== g.UP_TO_DATE_) {
    e.dependenciesState_ = g.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; )
      t[r].lowestObserverState_ = g.UP_TO_DATE_;
  }
}
var xt = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0;
}, jt = !0, h = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ Jn();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (jt = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new xt().version && (jt = !1), jt ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new xt()) : (setTimeout(function() {
    p(35);
  }, 1), new xt());
}();
function go(e, t) {
  e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
}
function mr(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && yr(e);
}
function yr(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, h.pendingUnobservations.push(e));
}
function M() {
  h.inBatch++;
}
function k() {
  if (--h.inBatch === 0) {
    Nr();
    for (var e = h.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      r.isPendingUnobservation_ = !1, r.observers_.size === 0 && (r.isBeingObserved_ && (r.isBeingObserved_ = !1, r.onBUO()), r instanceof _e && r.suspend_());
    }
    h.pendingUnobservations = [];
  }
}
function gr(e) {
  bo(e);
  var t = h.trackingDerivation;
  return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved_ && h.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && h.inBatch > 0 && yr(e), !1);
}
function Or(e) {
  e.lowestObserverState_ !== g.STALE_ && (e.lowestObserverState_ = g.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === g.UP_TO_DATE_ && (process.env.NODE_ENV !== "production" && t.isTracing_ !== F.NONE && Er(t, e), t.onBecomeStale_()), t.dependenciesState_ = g.STALE_;
  }));
}
function Oo(e) {
  e.lowestObserverState_ !== g.STALE_ && (e.lowestObserverState_ = g.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === g.POSSIBLY_STALE_ ? (t.dependenciesState_ = g.STALE_, process.env.NODE_ENV !== "production" && t.isTracing_ !== F.NONE && Er(t, e)) : t.dependenciesState_ === g.UP_TO_DATE_ && (e.lowestObserverState_ = g.UP_TO_DATE_);
  }));
}
function Eo(e) {
  e.lowestObserverState_ === g.UP_TO_DATE_ && (e.lowestObserverState_ = g.POSSIBLY_STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === g.UP_TO_DATE_ && (t.dependenciesState_ = g.POSSIBLY_STALE_, t.onBecomeStale_());
  }));
}
function Er(e, t) {
  if (console.log("[mobx.trace] '" + e.name_ + "' is invalidated due to a change in: '" + t.name_ + "'"), e.isTracing_ === F.BREAK) {
    var r = [];
    Ar(Uo(e), r, 1), new Function(`debugger;
/*
Tracing '` + e.name_ + `'

You are entering this break point because derivation '` + e.name_ + "' is being traced and '" + t.name_ + `' is now forcing it to update.
Just follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update
The stackframe you are looking for is at least ~6-8 stack-frames up.

` + (e instanceof _e ? e.derivation.toString().replace(/[*]\//g, "/") : "") + `

The dependencies for this derivation are:

` + r.join(`
`) + `
*/
    `)();
  }
}
function Ar(e, t, r) {
  if (t.length >= 1e3) {
    t.push("(and many more)");
    return;
  }
  t.push("" + "	".repeat(r - 1) + e.name), e.dependencies && e.dependencies.forEach(function(n) {
    return Ar(n, t, r + 1);
  });
}
var Ht = /* @__PURE__ */ function() {
  function e(r, n, i, o) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "Reaction@" + H() : "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = g.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = F.NONE, this.name_ = r, this.onInvalidate_ = n, this.errorHandler_ = i, this.requiresObservable_ = o;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    this.schedule_();
  }, t.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, h.pendingReactions.push(this), Nr());
  }, t.isScheduled = function() {
    return this.isScheduled_;
  }, t.runReaction_ = function() {
    if (!this.isDisposed_) {
      M(), this.isScheduled_ = !1;
      var n = h.trackingContext;
      if (h.trackingContext = this, Kt(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_(), process.env.NODE_ENV !== "production" && this.isTrackPending_ && T() && ve({
            name: this.name_,
            type: "scheduled-reaction"
          });
        } catch (i) {
          this.reportExceptionInDerivation_(i);
        }
      }
      h.trackingContext = n, k();
    }
  }, t.track = function(n) {
    if (!this.isDisposed_) {
      M();
      var i = T(), o;
      process.env.NODE_ENV !== "production" && i && (o = Date.now(), P({
        name: this.name_,
        type: "reaction"
      })), this.isRunning_ = !0;
      var s = h.trackingContext;
      h.trackingContext = this;
      var a = _r(this, n, void 0);
      h.trackingContext = s, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && zt(this), nt(a) && this.reportExceptionInDerivation_(a.cause), process.env.NODE_ENV !== "production" && i && V({
        time: Date.now() - o
      }), k();
    }
  }, t.reportExceptionInDerivation_ = function(n) {
    var i = this;
    if (this.errorHandler_) {
      this.errorHandler_(n, this);
      return;
    }
    if (h.disableErrorBoundaries)
      throw n;
    var o = process.env.NODE_ENV !== "production" ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
    h.suppressReactionErrors ? process.env.NODE_ENV !== "production" && console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)") : console.error(o, n), process.env.NODE_ENV !== "production" && T() && ve({
      type: "error",
      name: this.name_,
      message: o,
      error: "" + n
    }), h.globalReactionErrorHandlers.forEach(function(s) {
      return s(n, i);
    });
  }, t.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (M(), zt(this), k()));
  }, t.getDisposer_ = function(n) {
    var i = this, o = function s() {
      i.dispose(), n == null || n.removeEventListener == null || n.removeEventListener("abort", s);
    };
    return n == null || n.addEventListener == null || n.addEventListener("abort", o), o[m] = this, o;
  }, t.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, t.trace = function(n) {
    n === void 0 && (n = !1), $o(this, n);
  }, e;
}(), Dn = 100, Ao = function(t) {
  return t();
};
function Nr() {
  h.inBatch > 0 || h.isRunningReactions || Ao(No);
}
function No() {
  h.isRunningReactions = !0;
  for (var e = h.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Dn && (console.error(process.env.NODE_ENV !== "production" ? "Reaction doesn't converge to a stable state after " + Dn + " iterations." + (" Probably there is a cycle in the reactive function: " + e[0]) : "[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++)
      r[n].runReaction_();
  }
  h.isRunningReactions = !1;
}
var dt = /* @__PURE__ */ me("Reaction", Ht);
function T() {
  return process.env.NODE_ENV !== "production" && !!h.spyListeners.length;
}
function ve(e) {
  if (process.env.NODE_ENV !== "production" && h.spyListeners.length)
    for (var t = h.spyListeners, r = 0, n = t.length; r < n; r++)
      t[r](e);
}
function P(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = ae({}, e, {
      spyReportStart: !0
    });
    ve(t);
  }
}
var wo = {
  type: "report-end",
  spyReportEnd: !0
};
function V(e) {
  process.env.NODE_ENV !== "production" && ve(e ? ae({}, e, {
    type: "report-end",
    spyReportEnd: !0
  }) : wo);
}
function So(e) {
  return process.env.NODE_ENV === "production" ? (console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  }) : (h.spyListeners.push(e), nn(function() {
    h.spyListeners = h.spyListeners.filter(function(t) {
      return t !== e;
    });
  }));
}
var ln = "action", Do = "action.bound", wr = "autoAction", To = "autoAction.bound", Sr = "<unnamed action>", Gt = /* @__PURE__ */ He(ln), Ro = /* @__PURE__ */ He(Do, {
  bound: !0
}), Jt = /* @__PURE__ */ He(wr, {
  autoAction: !0
}), xo = /* @__PURE__ */ He(To, {
  autoAction: !0,
  bound: !0
});
function Dr(e) {
  var t = function(n, i) {
    if (S(n))
      return pe(n.name || Sr, n, e);
    if (S(i))
      return pe(n, i, e);
    if (Ke(i))
      return (e ? Jt : Gt).decorate_20223_(n, i);
    if (de(i))
      return De(n, i, e ? Jt : Gt);
    if (de(n))
      return Y(He(e ? wr : ln, {
        name: n,
        autoAction: e
      }));
    process.env.NODE_ENV !== "production" && p("Invalid arguments for `action`");
  };
  return t;
}
var Ae = /* @__PURE__ */ Dr(!1);
Object.assign(Ae, Gt);
var Me = /* @__PURE__ */ Dr(!0);
Object.assign(Me, Jt);
Ae.bound = /* @__PURE__ */ Y(Ro);
Me.bound = /* @__PURE__ */ Y(xo);
function Pt(e) {
  return dr(e.name || Sr, !1, e, this, void 0);
}
function Ge(e) {
  return S(e) && e.isMobxAction === !0;
}
function jo(e, t) {
  var r, n, i, o, s;
  t === void 0 && (t = Xn), process.env.NODE_ENV !== "production" && (S(e) || p("Autorun expects a function as first argument"), Ge(e) && p("Autorun does not accept actions since actions are untrackable"));
  var a = (r = (n = t) == null ? void 0 : n.name) != null ? r : process.env.NODE_ENV !== "production" ? e.name || "Autorun@" + H() : "Autorun", u = !t.scheduler && !t.delay, c;
  if (u)
    c = new Ht(a, function() {
      this.track(b);
    }, t.onError, t.requiresObservable);
  else {
    var l = Vo(t), f = !1;
    c = new Ht(a, function() {
      f || (f = !0, l(function() {
        f = !1, c.isDisposed_ || c.track(b);
      }));
    }, t.onError, t.requiresObservable);
  }
  function b() {
    e(c);
  }
  return (i = t) != null && (o = i.signal) != null && o.aborted || c.schedule_(), c.getDisposer_((s = t) == null ? void 0 : s.signal);
}
var Po = function(t) {
  return t();
};
function Vo(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(t) {
    return setTimeout(t, e.delay);
  } : Po;
}
var Co = "onBO", Bo = "onBUO";
function Lo(e, t, r) {
  return Rr(Co, e, t, r);
}
function Tr(e, t, r) {
  return Rr(Bo, e, t, r);
}
function Rr(e, t, r, n) {
  var i = typeof n == "function" ? ue(t, r) : ue(t), o = S(n) ? n : r, s = e + "L";
  return i[s] ? i[s].add(o) : i[s] = /* @__PURE__ */ new Set([o]), function() {
    var a = i[s];
    a && (a.delete(o), a.size === 0 && delete i[s]);
  };
}
function xr(e, t, r, n) {
  process.env.NODE_ENV !== "production" && (arguments.length > 4 && p("'extendObservable' expected 2-4 arguments"), typeof e != "object" && p("'extendObservable' expects an object as first argument"), re(e) && p("'extendObservable' should not be used on maps, use map.merge instead"), j(t) || p("'extendObservable' only accepts plain objects as second argument"), (Fe(t) || Fe(r)) && p("Extending an object with another observable (object) is not supported"));
  var i = gi(t);
  return ge(function() {
    var o = Re(e, n)[m];
    Ue(i).forEach(function(s) {
      o.extend_(
        s,
        i[s],
        // must pass "undefined" for { key: undefined }
        r && s in r ? r[s] : !0
      );
    });
  }), e;
}
function Uo(e, t) {
  return jr(ue(e, t));
}
function jr(e) {
  var t = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (t.dependencies = Mo(e.observing_).map(jr)), t;
}
function Mo(e) {
  return Array.from(new Set(e));
}
var ko = 0;
function Pr() {
  this.message = "FLOW_CANCELLED";
}
Pr.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var Vt = /* @__PURE__ */ or("flow"), Fo = /* @__PURE__ */ or("flow.bound", {
  bound: !0
}), Ne = /* @__PURE__ */ Object.assign(function(t, r) {
  if (Ke(r))
    return Vt.decorate_20223_(t, r);
  if (de(r))
    return De(t, r, Vt);
  process.env.NODE_ENV !== "production" && arguments.length !== 1 && p("Flow expects single argument with generator function");
  var n = t, i = n.name || "<unnamed flow>", o = function() {
    var a = this, u = arguments, c = ++ko, l = Ae(i + " - runid: " + c + " - init", n).apply(a, u), f, b = void 0, E = new Promise(function(v, _) {
      var O = 0;
      f = _;
      function w(R) {
        b = void 0;
        var ie;
        try {
          ie = Ae(i + " - runid: " + c + " - yield " + O++, l.next).call(l, R);
        } catch (ce) {
          return _(ce);
        }
        x(ie);
      }
      function B(R) {
        b = void 0;
        var ie;
        try {
          ie = Ae(i + " - runid: " + c + " - yield " + O++, l.throw).call(l, R);
        } catch (ce) {
          return _(ce);
        }
        x(ie);
      }
      function x(R) {
        if (S(R == null ? void 0 : R.then)) {
          R.then(x, _);
          return;
        }
        return R.done ? v(R.value) : (b = Promise.resolve(R.value), b.then(w, B));
      }
      w(void 0);
    });
    return E.cancel = Ae(i + " - runid: " + c + " - cancel", function() {
      try {
        b && Tn(b);
        var v = l.return(void 0), _ = Promise.resolve(v.value);
        _.then(Oe, Oe), Tn(_), f(new Pr());
      } catch (O) {
        f(O);
      }
    }), E;
  };
  return o.isMobXFlow = !0, o;
}, Vt);
Ne.bound = /* @__PURE__ */ Y(Fo);
function Tn(e) {
  S(e.cancel) && e.cancel();
}
function ke(e) {
  return (e == null ? void 0 : e.isMobXFlow) === !0;
}
function Io(e, t) {
  return e ? t !== void 0 ? process.env.NODE_ENV !== "production" && (re(e) || Xe(e)) ? p("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.") : be(e) ? e[m].values_.has(t) : !1 : be(e) || !!e[m] || on(e) || dt(e) || Nt(e) : !1;
}
function Fe(e) {
  return process.env.NODE_ENV !== "production" && arguments.length !== 1 && p("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property"), Io(e);
}
function $o() {
  if (process.env.NODE_ENV !== "production") {
    for (var e = !1, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    typeof r[r.length - 1] == "boolean" && (e = r.pop());
    var i = qo(r);
    if (!i)
      return p("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    i.isTracing_ === F.NONE && console.log("[mobx.trace] '" + i.name_ + "' tracing enabled"), i.isTracing_ = e ? F.BREAK : F.LOG;
  }
}
function qo(e) {
  switch (e.length) {
    case 0:
      return h.trackingDerivation;
    case 1:
      return ue(e[0]);
    case 2:
      return ue(e[0], e[1]);
  }
}
function ee(e, t) {
  t === void 0 && (t = void 0), M();
  try {
    return e.apply(t);
  } finally {
    k();
  }
}
function le(e) {
  return e[m];
}
var Ko = {
  has: function(t, r) {
    return process.env.NODE_ENV !== "production" && h.trackingDerivation && je("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead."), le(t).has_(r);
  },
  get: function(t, r) {
    return le(t).get_(r);
  },
  set: function(t, r, n) {
    var i;
    return de(r) ? (process.env.NODE_ENV !== "production" && !le(t).values_.has(r) && je("add a new observable property through direct assignment. Use 'set' from 'mobx' instead."), (i = le(t).set_(r, n, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function(t, r) {
    var n;
    return process.env.NODE_ENV !== "production" && je("delete properties from an observable object. Use 'remove' from 'mobx' instead."), de(r) ? (n = le(t).delete_(r, !0)) != null ? n : !0 : !1;
  },
  defineProperty: function(t, r, n) {
    var i;
    return process.env.NODE_ENV !== "production" && je("define property on an observable object. Use 'defineProperty' from 'mobx' instead."), (i = le(t).defineProperty_(r, n)) != null ? i : !0;
  },
  ownKeys: function(t) {
    return process.env.NODE_ENV !== "production" && h.trackingDerivation && je("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead."), le(t).ownKeys_();
  },
  preventExtensions: function(t) {
    p(13);
  }
};
function zo(e, t) {
  var r, n;
  return Yn(), e = Re(e, t), (n = (r = e[m]).proxy_) != null ? n : r.proxy_ = new Proxy(e, Ko);
}
function L(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Je(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return r.push(t), nn(function() {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  });
}
function U(e, t) {
  var r = ye();
  try {
    for (var n = [].concat(e.interceptors_ || []), i = 0, o = n.length; i < o && (t = n[i](t), t && !t.type && p(14), !!t); i++)
      ;
    return t;
  } finally {
    te(r);
  }
}
function K(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function We(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return r.push(t), nn(function() {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  });
}
function z(e, t) {
  var r = ye(), n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, o = n.length; i < o; i++)
      n[i](t);
    te(r);
  }
}
var Ct = /* @__PURE__ */ Symbol("mobx-keys");
function Vr(e, t, r) {
  return process.env.NODE_ENV !== "production" && (!j(e) && !j(Object.getPrototypeOf(e)) && p("'makeAutoObservable' can only be used for classes that don't have a superclass"), be(e) && p("makeAutoObservable can only be used on objects not already made observable")), j(e) ? xr(e, e, t, r) : (ge(function() {
    var n = Re(e, r)[m];
    if (!e[Ct]) {
      var i = Object.getPrototypeOf(e), o = new Set([].concat(Ue(e), Ue(i)));
      o.delete("constructor"), o.delete(m), yt(i, Ct, o);
    }
    e[Ct].forEach(function(s) {
      return n.make_(
        s,
        // must pass "undefined" for { key: undefined }
        t && s in t ? t[s] : !0
      );
    });
  }), e);
}
var Rn = "splice", $ = "update", Ho = 1e4, Go = {
  get: function(t, r) {
    var n = t[m];
    return r === m ? n : r === "length" ? n.getArrayLength_() : typeof r == "string" && !isNaN(r) ? n.get_(parseInt(r)) : q(ht, r) ? ht[r] : t[r];
  },
  set: function(t, r, n) {
    var i = t[m];
    return r === "length" && i.setArrayLength_(n), typeof r == "symbol" || isNaN(r) ? t[r] = n : i.set_(parseInt(r), n), !0;
  },
  preventExtensions: function() {
    p(15);
  }
}, fn = /* @__PURE__ */ function() {
  function e(r, n, i, o) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "ObservableArray@" + H() : "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = i, this.legacyMode_ = o, this.atom_ = new ze(r), this.enhancer_ = function(s, a) {
      return n(s, a, process.env.NODE_ENV !== "production" ? r + "[..]" : "ObservableArray[..]");
    };
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.dehanceValues_ = function(n) {
    return this.dehancer !== void 0 && n.length > 0 ? n.map(this.dehancer) : n;
  }, t.intercept_ = function(n) {
    return Je(this, n);
  }, t.observe_ = function(n, i) {
    return i === void 0 && (i = !1), i && n({
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: "splice",
      index: 0,
      added: this.values_.slice(),
      addedCount: this.values_.length,
      removed: [],
      removedCount: 0
    }), We(this, n);
  }, t.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, t.setArrayLength_ = function(n) {
    (typeof n != "number" || isNaN(n) || n < 0) && p("Out of range: " + n);
    var i = this.values_.length;
    if (n !== i)
      if (n > i) {
        for (var o = new Array(n - i), s = 0; s < n - i; s++)
          o[s] = void 0;
        this.spliceWithArray_(i, 0, o);
      } else
        this.spliceWithArray_(n, i - n);
  }, t.updateArrayLength_ = function(n, i) {
    n !== this.lastKnownLength_ && p(16), this.lastKnownLength_ += i, this.legacyMode_ && i > 0 && qr(n + i + 1);
  }, t.spliceWithArray_ = function(n, i, o) {
    var s = this;
    J(this.atom_);
    var a = this.values_.length;
    if (n === void 0 ? n = 0 : n > a ? n = a : n < 0 && (n = Math.max(0, a + n)), arguments.length === 1 ? i = a - n : i == null ? i = 0 : i = Math.max(0, Math.min(i, a - n)), o === void 0 && (o = at), L(this)) {
      var u = U(this, {
        object: this.proxy_,
        type: Rn,
        index: n,
        removedCount: i,
        added: o
      });
      if (!u)
        return at;
      i = u.removedCount, o = u.added;
    }
    if (o = o.length === 0 ? o : o.map(function(f) {
      return s.enhancer_(f, void 0);
    }), this.legacyMode_ || process.env.NODE_ENV !== "production") {
      var c = o.length - i;
      this.updateArrayLength_(a, c);
    }
    var l = this.spliceItemsIntoValues_(n, i, o);
    return (i !== 0 || o.length !== 0) && this.notifyArraySplice_(n, o, l), this.dehanceValues_(l);
  }, t.spliceItemsIntoValues_ = function(n, i, o) {
    if (o.length < Ho) {
      var s;
      return (s = this.values_).splice.apply(s, [n, i].concat(o));
    } else {
      var a = this.values_.slice(n, n + i), u = this.values_.slice(n + i);
      this.values_.length += o.length - i;
      for (var c = 0; c < o.length; c++)
        this.values_[n + c] = o[c];
      for (var l = 0; l < u.length; l++)
        this.values_[n + o.length + l] = u[l];
      return a;
    }
  }, t.notifyArrayChildUpdate_ = function(n, i, o) {
    var s = !this.owned_ && T(), a = K(this), u = a || s ? {
      observableKind: "array",
      object: this.proxy_,
      type: $,
      debugObjectName: this.atom_.name_,
      index: n,
      newValue: i,
      oldValue: o
    } : null;
    process.env.NODE_ENV !== "production" && s && P(u), this.atom_.reportChanged(), a && z(this, u), process.env.NODE_ENV !== "production" && s && V();
  }, t.notifyArraySplice_ = function(n, i, o) {
    var s = !this.owned_ && T(), a = K(this), u = a || s ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: Rn,
      index: n,
      removed: o,
      added: i,
      removedCount: o.length,
      addedCount: i.length
    } : null;
    process.env.NODE_ENV !== "production" && s && P(u), this.atom_.reportChanged(), a && z(this, u), process.env.NODE_ENV !== "production" && s && V();
  }, t.get_ = function(n) {
    if (this.legacyMode_ && n >= this.values_.length) {
      console.warn(process.env.NODE_ENV !== "production" ? "[mobx.array] Attempt to read an array index (" + n + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX" : "[mobx] Out of bounds read: " + n);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]);
  }, t.set_ = function(n, i) {
    var o = this.values_;
    if (this.legacyMode_ && n > o.length && p(17, n, o.length), n < o.length) {
      J(this.atom_);
      var s = o[n];
      if (L(this)) {
        var a = U(this, {
          type: $,
          object: this.proxy_,
          index: n,
          newValue: i
        });
        if (!a)
          return;
        i = a.newValue;
      }
      i = this.enhancer_(i, s);
      var u = i !== s;
      u && (o[n] = i, this.notifyArrayChildUpdate_(n, i, s));
    } else {
      for (var c = new Array(n + 1 - o.length), l = 0; l < c.length - 1; l++)
        c[l] = void 0;
      c[c.length - 1] = i, this.spliceWithArray_(o.length, 0, c);
    }
  }, e;
}();
function Jo(e, t, r, n) {
  return r === void 0 && (r = process.env.NODE_ENV !== "production" ? "ObservableArray@" + H() : "ObservableArray"), n === void 0 && (n = !1), Yn(), ge(function() {
    var i = new fn(r, t, n, !1);
    Qn(i.values_, m, i);
    var o = new Proxy(i.values_, Go);
    return i.proxy_ = o, e && e.length && i.spliceWithArray_(0, 0, e), o;
  });
}
var ht = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(t) {
    var r = this[m];
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
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      i[o - 2] = arguments[o];
    var s = this[m];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return s.spliceWithArray_(t);
      case 2:
        return s.spliceWithArray_(t, r);
    }
    return s.spliceWithArray_(t, r, i);
  },
  spliceWithArray: function(t, r, n) {
    return this[m].spliceWithArray_(t, r, n);
  },
  push: function() {
    for (var t = this[m], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return t.spliceWithArray_(t.values_.length, 0, n), t.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[m].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var t = this[m], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return t.spliceWithArray_(0, 0, n), t.values_.length;
  },
  reverse: function() {
    return h.trackingDerivation && p(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    h.trackingDerivation && p(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function(t) {
    var r = this[m], n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  }
};
A("at", C);
A("concat", C);
A("flat", C);
A("includes", C);
A("indexOf", C);
A("join", C);
A("lastIndexOf", C);
A("slice", C);
A("toString", C);
A("toLocaleString", C);
A("toSorted", C);
A("toSpliced", C);
A("with", C);
A("every", G);
A("filter", G);
A("find", G);
A("findIndex", G);
A("findLast", G);
A("findLastIndex", G);
A("flatMap", G);
A("forEach", G);
A("map", G);
A("some", G);
A("toReversed", G);
A("reduce", Cr);
A("reduceRight", Cr);
function A(e, t) {
  typeof Array.prototype[e] == "function" && (ht[e] = t(e));
}
function C(e) {
  return function() {
    var t = this[m];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function G(e) {
  return function(t, r) {
    var n = this, i = this[m];
    i.atom_.reportObserved();
    var o = i.dehanceValues_(i.values_);
    return o[e](function(s, a) {
      return t.call(r, s, a, n);
    });
  };
}
function Cr(e) {
  return function() {
    var t = this, r = this[m];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_), i = arguments[0];
    return arguments[0] = function(o, s, a) {
      return i(o, s, a, t);
    }, n[e].apply(n, arguments);
  };
}
var Wo = /* @__PURE__ */ me("ObservableArrayAdministration", fn);
function Xe(e) {
  return mt(e) && Wo(e[m]);
}
var Br, Lr, Xo = {}, se = "add", pt = "delete";
Br = Symbol.iterator;
Lr = Symbol.toStringTag;
var Ur = /* @__PURE__ */ function() {
  function e(r, n, i) {
    var o = this;
    n === void 0 && (n = he), i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableMap@" + H() : "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[m] = Xo, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = n, this.name_ = i, S(Map) || p(18), ge(function() {
      o.keysAtom_ = rr(process.env.NODE_ENV !== "production" ? o.name_ + ".keys()" : "ObservableMap.keys()"), o.data_ = /* @__PURE__ */ new Map(), o.hasMap_ = /* @__PURE__ */ new Map(), r && o.merge(r);
    });
  }
  var t = e.prototype;
  return t.has_ = function(n) {
    return this.data_.has(n);
  }, t.has = function(n) {
    var i = this;
    if (!h.trackingDerivation)
      return this.has_(n);
    var o = this.hasMap_.get(n);
    if (!o) {
      var s = o = new fe(this.has_(n), Ot, process.env.NODE_ENV !== "production" ? this.name_ + "." + Ft(n) + "?" : "ObservableMap.key?", !1);
      this.hasMap_.set(n, s), Tr(s, function() {
        return i.hasMap_.delete(n);
      });
    }
    return o.get();
  }, t.set = function(n, i) {
    var o = this.has_(n);
    if (L(this)) {
      var s = U(this, {
        type: o ? $ : se,
        object: this,
        newValue: i,
        name: n
      });
      if (!s)
        return this;
      i = s.newValue;
    }
    return o ? this.updateValue_(n, i) : this.addValue_(n, i), this;
  }, t.delete = function(n) {
    var i = this;
    if (J(this.keysAtom_), L(this)) {
      var o = U(this, {
        type: pt,
        object: this,
        name: n
      });
      if (!o)
        return !1;
    }
    if (this.has_(n)) {
      var s = T(), a = K(this), u = a || s ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: pt,
        object: this,
        oldValue: this.data_.get(n).value_,
        name: n
      } : null;
      return process.env.NODE_ENV !== "production" && s && P(u), ee(function() {
        var c;
        i.keysAtom_.reportChanged(), (c = i.hasMap_.get(n)) == null || c.setNewValue_(!1);
        var l = i.data_.get(n);
        l.setNewValue_(void 0), i.data_.delete(n);
      }), a && z(this, u), process.env.NODE_ENV !== "production" && s && V(), !0;
    }
    return !1;
  }, t.updateValue_ = function(n, i) {
    var o = this.data_.get(n);
    if (i = o.prepareNewValue_(i), i !== h.UNCHANGED) {
      var s = T(), a = K(this), u = a || s ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: $,
        object: this,
        oldValue: o.value_,
        name: n,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && s && P(u), o.setNewValue_(i), a && z(this, u), process.env.NODE_ENV !== "production" && s && V();
    }
  }, t.addValue_ = function(n, i) {
    var o = this;
    J(this.keysAtom_), ee(function() {
      var c, l = new fe(i, o.enhancer_, process.env.NODE_ENV !== "production" ? o.name_ + "." + Ft(n) : "ObservableMap.key", !1);
      o.data_.set(n, l), i = l.value_, (c = o.hasMap_.get(n)) == null || c.setNewValue_(!0), o.keysAtom_.reportChanged();
    });
    var s = T(), a = K(this), u = a || s ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: se,
      object: this,
      name: n,
      newValue: i
    } : null;
    process.env.NODE_ENV !== "production" && s && P(u), a && z(this, u), process.env.NODE_ENV !== "production" && s && V();
  }, t.get = function(n) {
    return this.has(n) ? this.dehanceValue_(this.data_.get(n).get()) : this.dehanceValue_(void 0);
  }, t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, t.values = function() {
    var n = this, i = this.keys();
    return Ie({
      next: function() {
        var s = i.next(), a = s.done, u = s.value;
        return {
          done: a,
          value: a ? void 0 : n.get(u)
        };
      }
    });
  }, t.entries = function() {
    var n = this, i = this.keys();
    return Ie({
      next: function() {
        var s = i.next(), a = s.done, u = s.value;
        return {
          done: a,
          value: a ? void 0 : [u, n.get(u)]
        };
      }
    });
  }, t[Br] = function() {
    return this.entries();
  }, t.forEach = function(n, i) {
    for (var o = Ee(this), s; !(s = o()).done; ) {
      var a = s.value, u = a[0], c = a[1];
      n.call(i, c, u, this);
    }
  }, t.merge = function(n) {
    var i = this;
    return re(n) && (n = new Map(n)), ee(function() {
      j(n) ? yi(n).forEach(function(o) {
        return i.set(o, n[o]);
      }) : Array.isArray(n) ? n.forEach(function(o) {
        var s = o[0], a = o[1];
        return i.set(s, a);
      }) : Se(n) ? (n.constructor !== Map && p(19, n), n.forEach(function(o, s) {
        return i.set(s, o);
      })) : n != null && p(20, n);
    }), this;
  }, t.clear = function() {
    var n = this;
    ee(function() {
      vr(function() {
        for (var i = Ee(n.keys()), o; !(o = i()).done; ) {
          var s = o.value;
          n.delete(s);
        }
      });
    });
  }, t.replace = function(n) {
    var i = this;
    return ee(function() {
      for (var o = Yo(n), s = /* @__PURE__ */ new Map(), a = !1, u = Ee(i.data_.keys()), c; !(c = u()).done; ) {
        var l = c.value;
        if (!o.has(l)) {
          var f = i.delete(l);
          if (f)
            a = !0;
          else {
            var b = i.data_.get(l);
            s.set(l, b);
          }
        }
      }
      for (var E = Ee(o.entries()), v; !(v = E()).done; ) {
        var _ = v.value, O = _[0], w = _[1], B = i.data_.has(O);
        if (i.set(O, w), i.data_.has(O)) {
          var x = i.data_.get(O);
          s.set(O, x), B || (a = !0);
        }
      }
      if (!a)
        if (i.data_.size !== s.size)
          i.keysAtom_.reportChanged();
        else
          for (var R = i.data_.keys(), ie = s.keys(), ce = R.next(), On = ie.next(); !ce.done; ) {
            if (ce.value !== On.value) {
              i.keysAtom_.reportChanged();
              break;
            }
            ce = R.next(), On = ie.next();
          }
      i.data_ = s;
    }), this;
  }, t.toString = function() {
    return "[object ObservableMap]";
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.observe_ = function(n, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && p("`observe` doesn't support fireImmediately=true in combination with maps."), We(this, n);
  }, t.intercept_ = function(n) {
    return Je(this, n);
  }, rn(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Lr,
    get: function() {
      return "Map";
    }
  }]), e;
}(), re = /* @__PURE__ */ me("ObservableMap", Ur);
function Yo(e) {
  if (Se(e) || re(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if (j(e)) {
    var t = /* @__PURE__ */ new Map();
    for (var r in e)
      t.set(r, e[r]);
    return t;
  } else
    return p(21, e);
}
var Mr, kr, Zo = {};
Mr = Symbol.iterator;
kr = Symbol.toStringTag;
var Fr = /* @__PURE__ */ function() {
  function e(r, n, i) {
    var o = this;
    n === void 0 && (n = he), i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableSet@" + H() : "ObservableSet"), this.name_ = void 0, this[m] = Zo, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = i, S(Set) || p(22), this.enhancer_ = function(s, a) {
      return n(s, a, i);
    }, ge(function() {
      o.atom_ = rr(o.name_), r && o.replace(r);
    });
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.clear = function() {
    var n = this;
    ee(function() {
      vr(function() {
        for (var i = Ee(n.data_.values()), o; !(o = i()).done; ) {
          var s = o.value;
          n.delete(s);
        }
      });
    });
  }, t.forEach = function(n, i) {
    for (var o = Ee(this), s; !(s = o()).done; ) {
      var a = s.value;
      n.call(i, a, a, this);
    }
  }, t.add = function(n) {
    var i = this;
    if (J(this.atom_), L(this)) {
      var o = U(this, {
        type: se,
        object: this,
        newValue: n
      });
      if (!o)
        return this;
    }
    if (!this.has(n)) {
      ee(function() {
        i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged();
      });
      var s = process.env.NODE_ENV !== "production" && T(), a = K(this), u = a || s ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: se,
        object: this,
        newValue: n
      } : null;
      s && process.env.NODE_ENV !== "production" && P(u), a && z(this, u), s && process.env.NODE_ENV !== "production" && V();
    }
    return this;
  }, t.delete = function(n) {
    var i = this;
    if (L(this)) {
      var o = U(this, {
        type: pt,
        object: this,
        oldValue: n
      });
      if (!o)
        return !1;
    }
    if (this.has(n)) {
      var s = process.env.NODE_ENV !== "production" && T(), a = K(this), u = a || s ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: pt,
        object: this,
        oldValue: n
      } : null;
      return s && process.env.NODE_ENV !== "production" && P(u), ee(function() {
        i.atom_.reportChanged(), i.data_.delete(n);
      }), a && z(this, u), s && process.env.NODE_ENV !== "production" && V(), !0;
    }
    return !1;
  }, t.has = function(n) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(n));
  }, t.entries = function() {
    var n = 0, i = Array.from(this.keys()), o = Array.from(this.values());
    return Ie({
      next: function() {
        var a = n;
        return n += 1, a < o.length ? {
          value: [i[a], o[a]],
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
    var n = this, i = 0, o = Array.from(this.data_.values());
    return Ie({
      next: function() {
        return i < o.length ? {
          value: n.dehanceValue_(o[i++]),
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.replace = function(n) {
    var i = this;
    return Te(n) && (n = new Set(n)), ee(function() {
      Array.isArray(n) ? (i.clear(), n.forEach(function(o) {
        return i.add(o);
      })) : qe(n) ? (i.clear(), n.forEach(function(o) {
        return i.add(o);
      })) : n != null && p("Cannot initialize set from " + n);
    }), this;
  }, t.observe_ = function(n, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && p("`observe` doesn't support fireImmediately=true in combination with sets."), We(this, n);
  }, t.intercept_ = function(n) {
    return Je(this, n);
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.toString = function() {
    return "[object ObservableSet]";
  }, t[Mr] = function() {
    return this.values();
  }, rn(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: kr,
    get: function() {
      return "Set";
    }
  }]), e;
}(), Te = /* @__PURE__ */ me("ObservableSet", Fr), xn = /* @__PURE__ */ Object.create(null), jn = "remove", Wt = /* @__PURE__ */ function() {
  function e(r, n, i, o) {
    n === void 0 && (n = /* @__PURE__ */ new Map()), o === void 0 && (o = Wi), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = r, this.values_ = n, this.name_ = i, this.defaultAnnotation_ = o, this.keysAtom_ = new ze(process.env.NODE_ENV !== "production" ? this.name_ + ".keys" : "ObservableObject.keys"), this.isPlainObject_ = j(this.target_), process.env.NODE_ENV !== "production" && !Kr(this.defaultAnnotation_) && p("defaultAnnotation must be valid annotation"), process.env.NODE_ENV !== "production" && (this.appliedAnnotations_ = {});
  }
  var t = e.prototype;
  return t.getObservablePropValue_ = function(n) {
    return this.values_.get(n).get();
  }, t.setObservablePropValue_ = function(n, i) {
    var o = this.values_.get(n);
    if (o instanceof _e)
      return o.set(i), !0;
    if (L(this)) {
      var s = U(this, {
        type: $,
        object: this.proxy_ || this.target_,
        name: n,
        newValue: i
      });
      if (!s)
        return null;
      i = s.newValue;
    }
    if (i = o.prepareNewValue_(i), i !== h.UNCHANGED) {
      var a = K(this), u = process.env.NODE_ENV !== "production" && T(), c = a || u ? {
        type: $,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: o.value_,
        name: n,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && u && P(c), o.setNewValue_(i), a && z(this, c), process.env.NODE_ENV !== "production" && u && V();
    }
    return !0;
  }, t.get_ = function(n) {
    return h.trackingDerivation && !q(this.target_, n) && this.has_(n), this.target_[n];
  }, t.set_ = function(n, i, o) {
    return o === void 0 && (o = !1), q(this.target_, n) ? this.values_.has(n) ? this.setObservablePropValue_(n, i) : o ? Reflect.set(this.target_, n, i) : (this.target_[n] = i, !0) : this.extend_(n, {
      value: i,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, o);
  }, t.has_ = function(n) {
    if (!h.trackingDerivation)
      return n in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var i = this.pendingKeys_.get(n);
    return i || (i = new fe(n in this.target_, Ot, process.env.NODE_ENV !== "production" ? this.name_ + "." + Ft(n) + "?" : "ObservableObject.key?", !1), this.pendingKeys_.set(n, i)), i.get();
  }, t.make_ = function(n, i) {
    if (i === !0 && (i = this.defaultAnnotation_), i !== !1) {
      if (Cn(this, i, n), !(n in this.target_)) {
        var o;
        if ((o = this.target_[Q]) != null && o[n])
          return;
        p(1, i.annotationType_, this.name_ + "." + n.toString());
      }
      for (var s = this.target_; s && s !== bt; ) {
        var a = st(s, n);
        if (a) {
          var u = i.make_(this, n, a, s);
          if (u === 0)
            return;
          if (u === 1)
            break;
        }
        s = Object.getPrototypeOf(s);
      }
      Vn(this, i, n);
    }
  }, t.extend_ = function(n, i, o, s) {
    if (s === void 0 && (s = !1), o === !0 && (o = this.defaultAnnotation_), o === !1)
      return this.defineProperty_(n, i, s);
    Cn(this, o, n);
    var a = o.extend_(this, n, i, s);
    return a && Vn(this, o, n), a;
  }, t.defineProperty_ = function(n, i, o) {
    o === void 0 && (o = !1), J(this.keysAtom_);
    try {
      M();
      var s = this.delete_(n);
      if (!s)
        return s;
      if (L(this)) {
        var a = U(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: se,
          newValue: i.value
        });
        if (!a)
          return null;
        var u = a.newValue;
        i.value !== u && (i = ae({}, i, {
          value: u
        }));
      }
      if (o) {
        if (!Reflect.defineProperty(this.target_, n, i))
          return !1;
      } else
        X(this.target_, n, i);
      this.notifyPropertyAddition_(n, i.value);
    } finally {
      k();
    }
    return !0;
  }, t.defineObservableProperty_ = function(n, i, o, s) {
    s === void 0 && (s = !1), J(this.keysAtom_);
    try {
      M();
      var a = this.delete_(n);
      if (!a)
        return a;
      if (L(this)) {
        var u = U(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: se,
          newValue: i
        });
        if (!u)
          return null;
        i = u.newValue;
      }
      var c = Pn(n), l = {
        configurable: h.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: c.get,
        set: c.set
      };
      if (s) {
        if (!Reflect.defineProperty(this.target_, n, l))
          return !1;
      } else
        X(this.target_, n, l);
      var f = new fe(i, o, process.env.NODE_ENV !== "production" ? this.name_ + "." + n.toString() : "ObservableObject.key", !1);
      this.values_.set(n, f), this.notifyPropertyAddition_(n, f.value_);
    } finally {
      k();
    }
    return !0;
  }, t.defineComputedProperty_ = function(n, i, o) {
    o === void 0 && (o = !1), J(this.keysAtom_);
    try {
      M();
      var s = this.delete_(n);
      if (!s)
        return s;
      if (L(this)) {
        var a = U(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: se,
          newValue: void 0
        });
        if (!a)
          return null;
      }
      i.name || (i.name = process.env.NODE_ENV !== "production" ? this.name_ + "." + n.toString() : "ObservableObject.key"), i.context = this.proxy_ || this.target_;
      var u = Pn(n), c = {
        configurable: h.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: u.get,
        set: u.set
      };
      if (o) {
        if (!Reflect.defineProperty(this.target_, n, c))
          return !1;
      } else
        X(this.target_, n, c);
      this.values_.set(n, new _e(i)), this.notifyPropertyAddition_(n, void 0);
    } finally {
      k();
    }
    return !0;
  }, t.delete_ = function(n, i) {
    if (i === void 0 && (i = !1), J(this.keysAtom_), !q(this.target_, n))
      return !0;
    if (L(this)) {
      var o = U(this, {
        object: this.proxy_ || this.target_,
        name: n,
        type: jn
      });
      if (!o)
        return null;
    }
    try {
      var s, a;
      M();
      var u = K(this), c = process.env.NODE_ENV !== "production" && T(), l = this.values_.get(n), f = void 0;
      if (!l && (u || c)) {
        var b;
        f = (b = st(this.target_, n)) == null ? void 0 : b.value;
      }
      if (i) {
        if (!Reflect.deleteProperty(this.target_, n))
          return !1;
      } else
        delete this.target_[n];
      if (process.env.NODE_ENV !== "production" && delete this.appliedAnnotations_[n], l && (this.values_.delete(n), l instanceof fe && (f = l.value_), Or(l)), this.keysAtom_.reportChanged(), (s = this.pendingKeys_) == null || (a = s.get(n)) == null || a.set(n in this.target_), u || c) {
        var E = {
          type: jn,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: f,
          name: n
        };
        process.env.NODE_ENV !== "production" && c && P(E), u && z(this, E), process.env.NODE_ENV !== "production" && c && V();
      }
    } finally {
      k();
    }
    return !0;
  }, t.observe_ = function(n, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && p("`observe` doesn't support the fire immediately property for observable objects."), We(this, n);
  }, t.intercept_ = function(n) {
    return Je(this, n);
  }, t.notifyPropertyAddition_ = function(n, i) {
    var o, s, a = K(this), u = process.env.NODE_ENV !== "production" && T();
    if (a || u) {
      var c = a || u ? {
        type: se,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: n,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && u && P(c), a && z(this, c), process.env.NODE_ENV !== "production" && u && V();
    }
    (o = this.pendingKeys_) == null || (s = o.get(n)) == null || s.set(!0), this.keysAtom_.reportChanged();
  }, t.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), Ue(this.target_);
  }, t.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function Re(e, t) {
  var r;
  if (process.env.NODE_ENV !== "production" && t && be(e) && p("Options can't be provided for already observable objects."), q(e, m))
    return process.env.NODE_ENV !== "production" && !(hn(e) instanceof Wt) && p("Cannot convert '" + _t(e) + `' into observable object:
The target is already observable of different type.
Extending builtins is not supported.`), e;
  process.env.NODE_ENV !== "production" && !Object.isExtensible(e) && p("Cannot make the designated object observable; it is not extensible");
  var n = (r = t == null ? void 0 : t.name) != null ? r : process.env.NODE_ENV !== "production" ? (j(e) ? "ObservableObject" : e.constructor.name) + "@" + H() : "ObservableObject", i = new Wt(e, /* @__PURE__ */ new Map(), String(n), so(t));
  return yt(e, m, i), e;
}
var Qo = /* @__PURE__ */ me("ObservableObjectAdministration", Wt);
function Pn(e) {
  return xn[e] || (xn[e] = {
    get: function() {
      return this[m].getObservablePropValue_(e);
    },
    set: function(r) {
      return this[m].setObservablePropValue_(e, r);
    }
  });
}
function be(e) {
  return mt(e) ? Qo(e[m]) : !1;
}
function Vn(e, t, r) {
  var n;
  process.env.NODE_ENV !== "production" && (e.appliedAnnotations_[r] = t), (n = e.target_[Q]) == null || delete n[r];
}
function Cn(e, t, r) {
  if (process.env.NODE_ENV !== "production" && !Kr(t) && p("Cannot annotate '" + e.name_ + "." + r.toString() + "': Invalid annotation."), process.env.NODE_ENV !== "production" && !ct(t) && q(e.appliedAnnotations_, r)) {
    var n = e.name_ + "." + r.toString(), i = e.appliedAnnotations_[r].annotationType_, o = t.annotationType_;
    p("Cannot apply '" + o + "' to '" + n + "':" + (`
The field is already annotated with '` + i + "'.") + `
Re-annotating fields is not allowed.
Use 'override' annotation for methods overridden by subclass.`);
  }
}
var es = /* @__PURE__ */ $r(0), ts = /* @__PURE__ */ function() {
  var e = !1, t = {};
  return Object.defineProperty(t, "0", {
    set: function() {
      e = !0;
    }
  }), Object.create(t)[0] = 1, e === !1;
}(), Bt = 0, Ir = function() {
};
function ns(e, t) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t;
}
ns(Ir, Array.prototype);
var dn = /* @__PURE__ */ function(e, t, r) {
  nr(n, e);
  function n(o, s, a, u) {
    var c;
    return a === void 0 && (a = process.env.NODE_ENV !== "production" ? "ObservableArray@" + H() : "ObservableArray"), u === void 0 && (u = !1), c = e.call(this) || this, ge(function() {
      var l = new fn(a, s, u, !0);
      l.proxy_ = tt(c), Qn(tt(c), m, l), o && o.length && c.spliceWithArray(0, 0, o), ts && Object.defineProperty(tt(c), "0", es);
    }), c;
  }
  var i = n.prototype;
  return i.concat = function() {
    this[m].atom_.reportObserved();
    for (var s = arguments.length, a = new Array(s), u = 0; u < s; u++)
      a[u] = arguments[u];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      a.map(function(c) {
        return Xe(c) ? c.slice() : c;
      })
    );
  }, i[r] = function() {
    var o = this, s = 0;
    return Ie({
      next: function() {
        return s < o.length ? {
          value: o[s++],
          done: !1
        } : {
          done: !0,
          value: void 0
        };
      }
    });
  }, rn(n, [{
    key: "length",
    get: function() {
      return this[m].getArrayLength_();
    },
    set: function(s) {
      this[m].setArrayLength_(s);
    }
  }, {
    key: t,
    get: function() {
      return "Array";
    }
  }]), n;
}(Ir, Symbol.toStringTag, Symbol.iterator);
Object.entries(ht).forEach(function(e) {
  var t = e[0], r = e[1];
  t !== "concat" && yt(dn.prototype, t, r);
});
function $r(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[m].get_(e);
    },
    set: function(r) {
      this[m].set_(e, r);
    }
  };
}
function rs(e) {
  X(dn.prototype, "" + e, $r(e));
}
function qr(e) {
  if (e > Bt) {
    for (var t = Bt; t < e + 100; t++)
      rs(t);
    Bt = e;
  }
}
qr(1e3);
function is(e, t, r) {
  return new dn(e, t, r);
}
function ue(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Xe(e))
      return t !== void 0 && p(23), e[m].atom_;
    if (Te(e))
      return e.atom_;
    if (re(e)) {
      if (t === void 0)
        return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return r || p(25, t, _t(e)), r;
    }
    if (be(e)) {
      if (!t)
        return p(26);
      var n = e[m].values_.get(t);
      return n || p(27, t, _t(e)), n;
    }
    if (on(e) || Nt(e) || dt(e))
      return e;
  } else if (S(e) && dt(e[m]))
    return e[m];
  p(28);
}
function hn(e, t) {
  if (e || p(29), t !== void 0)
    return hn(ue(e, t));
  if (on(e) || Nt(e) || dt(e) || re(e) || Te(e))
    return e;
  if (e[m])
    return e[m];
  p(24, e);
}
function _t(e, t) {
  var r;
  if (t !== void 0)
    r = ue(e, t);
  else {
    if (Ge(e))
      return e.name;
    be(e) || re(e) || Te(e) ? r = hn(e) : r = ue(e);
  }
  return r.name_;
}
function ge(e) {
  var t = ye(), r = an(!0);
  M();
  try {
    return e();
  } finally {
    k(), un(r), te(t);
  }
}
var Bn = bt.toString;
function pn(e, t, r) {
  return r === void 0 && (r = -1), Xt(e, t, r);
}
function Xt(e, t, r, n, i) {
  if (e === t)
    return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null)
    return !1;
  if (e !== e)
    return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object")
    return !1;
  var s = Bn.call(e);
  if (s !== Bn.call(t))
    return !1;
  switch (s) {
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
  e = Ln(e), t = Ln(t);
  var a = s === "[object Array]";
  if (!a) {
    if (typeof e != "object" || typeof t != "object")
      return !1;
    var u = e.constructor, c = t.constructor;
    if (u !== c && !(S(u) && u instanceof u && S(c) && c instanceof c) && "constructor" in e && "constructor" in t)
      return !1;
  }
  if (r === 0)
    return !1;
  r < 0 && (r = -1), n = n || [], i = i || [];
  for (var l = n.length; l--; )
    if (n[l] === e)
      return i[l] === t;
  if (n.push(e), i.push(t), a) {
    if (l = e.length, l !== t.length)
      return !1;
    for (; l--; )
      if (!Xt(e[l], t[l], r - 1, n, i))
        return !1;
  } else {
    var f = Object.keys(e), b;
    if (l = f.length, Object.keys(t).length !== l)
      return !1;
    for (; l--; )
      if (b = f[l], !(q(t, b) && Xt(e[b], t[b], r - 1, n, i)))
        return !1;
  }
  return n.pop(), i.pop(), !0;
}
function Ln(e) {
  return Xe(e) ? e.slice() : Se(e) || re(e) || qe(e) || Te(e) ? Array.from(e.entries()) : e;
}
function Ie(e) {
  return e[Symbol.iterator] = os, e;
}
function os() {
  return this;
}
function Kr(e) {
  return (
    // Can be function
    e instanceof Object && typeof e.annotationType_ == "string" && S(e.make_) && S(e.extend_)
  );
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var t = Jn();
  typeof t[e] > "u" && p("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: So,
  extras: {
    getDebugName: _t
  },
  $mobx: m
});
function zr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ss } = Object.prototype, { getPrototypeOf: _n } = Object, wt = /* @__PURE__ */ ((e) => (t) => {
  const r = ss.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Z = (e) => (e = e.toLowerCase(), (t) => wt(t) === e), St = (e) => (t) => typeof t === e, { isArray: xe } = Array, $e = St("undefined");
function as(e) {
  return e !== null && !$e(e) && e.constructor !== null && !$e(e.constructor) && I(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Hr = Z("ArrayBuffer");
function us(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Hr(e.buffer), t;
}
const cs = St("string"), I = St("function"), Gr = St("number"), Dt = (e) => e !== null && typeof e == "object", ls = (e) => e === !0 || e === !1, rt = (e) => {
  if (wt(e) !== "object")
    return !1;
  const t = _n(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, fs = Z("Date"), ds = Z("File"), hs = Z("Blob"), ps = Z("FileList"), _s = (e) => Dt(e) && I(e.pipe), vs = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || I(e.append) && ((t = wt(e)) === "formdata" || // detect form-data instance
  t === "object" && I(e.toString) && e.toString() === "[object FormData]"));
}, bs = Z("URLSearchParams"), ms = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ye(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), xe(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = o.length;
    let a;
    for (n = 0; n < s; n++)
      a = o[n], t.call(null, e[a], a, e);
  }
}
function Jr(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const Wr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xr = (e) => !$e(e) && e !== Wr;
function Yt() {
  const { caseless: e } = Xr(this) && this || {}, t = {}, r = (n, i) => {
    const o = e && Jr(t, i) || i;
    rt(t[o]) && rt(n) ? t[o] = Yt(t[o], n) : rt(n) ? t[o] = Yt({}, n) : xe(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Ye(arguments[n], r);
  return t;
}
const ys = (e, t, r, { allOwnKeys: n } = {}) => (Ye(t, (i, o) => {
  r && I(i) ? e[o] = zr(i, r) : e[o] = i;
}, { allOwnKeys: n }), e), gs = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Os = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Es = (e, t, r, n) => {
  let i, o, s;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      s = i[o], (!n || n(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = r !== !1 && _n(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, As = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Ns = (e) => {
  if (!e)
    return null;
  if (xe(e))
    return e;
  let t = e.length;
  if (!Gr(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, ws = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && _n(Uint8Array)), Ss = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, Ds = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Ts = Z("HTMLFormElement"), Rs = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Un = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), xs = Z("RegExp"), Yr = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Ye(r, (i, o) => {
    let s;
    (s = t(i, o, e)) !== !1 && (n[o] = s || i);
  }), Object.defineProperties(e, n);
}, js = (e) => {
  Yr(e, (t, r) => {
    if (I(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (I(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Ps = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((o) => {
      r[o] = !0;
    });
  };
  return xe(e) ? n(e) : n(String(e).split(t)), r;
}, Vs = () => {
}, Cs = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Lt = "abcdefghijklmnopqrstuvwxyz", Mn = "0123456789", Zr = {
  DIGIT: Mn,
  ALPHA: Lt,
  ALPHA_DIGIT: Lt + Lt.toUpperCase() + Mn
}, Bs = (e = 16, t = Zr.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Ls(e) {
  return !!(e && I(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Us = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (Dt(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[i] = n;
        const o = xe(n) ? [] : {};
        return Ye(n, (s, a) => {
          const u = r(s, i + 1);
          !$e(u) && (o[a] = u);
        }), t[i] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, Ms = Z("AsyncFunction"), ks = (e) => e && (Dt(e) || I(e)) && I(e.then) && I(e.catch), d = {
  isArray: xe,
  isArrayBuffer: Hr,
  isBuffer: as,
  isFormData: vs,
  isArrayBufferView: us,
  isString: cs,
  isNumber: Gr,
  isBoolean: ls,
  isObject: Dt,
  isPlainObject: rt,
  isUndefined: $e,
  isDate: fs,
  isFile: ds,
  isBlob: hs,
  isRegExp: xs,
  isFunction: I,
  isStream: _s,
  isURLSearchParams: bs,
  isTypedArray: ws,
  isFileList: ps,
  forEach: Ye,
  merge: Yt,
  extend: ys,
  trim: ms,
  stripBOM: gs,
  inherits: Os,
  toFlatObject: Es,
  kindOf: wt,
  kindOfTest: Z,
  endsWith: As,
  toArray: Ns,
  forEachEntry: Ss,
  matchAll: Ds,
  isHTMLForm: Ts,
  hasOwnProperty: Un,
  hasOwnProp: Un,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Yr,
  freezeMethods: js,
  toObjectSet: Ps,
  toCamelCase: Rs,
  noop: Vs,
  toFiniteNumber: Cs,
  findKey: Jr,
  global: Wr,
  isContextDefined: Xr,
  ALPHABET: Zr,
  generateString: Bs,
  isSpecCompliantForm: Ls,
  toJSONObject: Us,
  isAsyncFn: Ms,
  isThenable: ks
};
function y(e, t, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i);
}
d.inherits(y, Error, {
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
      config: d.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Qr = y.prototype, ei = {};
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
  ei[e] = { value: e };
});
Object.defineProperties(y, ei);
Object.defineProperty(Qr, "isAxiosError", { value: !0 });
y.from = (e, t, r, n, i, o) => {
  const s = Object.create(Qr);
  return d.toFlatObject(e, s, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), y.call(s, e.message, t, r, n, i), s.cause = e, s.name = e.name, o && Object.assign(s, o), s;
};
const Fs = null;
function Zt(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function ti(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function kn(e, t, r) {
  return e ? e.concat(t).map(function(i, o) {
    return i = ti(i), !r && o ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function Is(e) {
  return d.isArray(e) && !e.some(Zt);
}
const $s = d.toFlatObject(d, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Tt(e, t, r) {
  if (!d.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = d.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(_, O) {
    return !d.isUndefined(O[_]);
  });
  const n = r.metaTokens, i = r.visitor || l, o = r.dots, s = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(t);
  if (!d.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(v) {
    if (v === null)
      return "";
    if (d.isDate(v))
      return v.toISOString();
    if (!u && d.isBlob(v))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(v) || d.isTypedArray(v) ? u && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function l(v, _, O) {
    let w = v;
    if (v && !O && typeof v == "object") {
      if (d.endsWith(_, "{}"))
        _ = n ? _ : _.slice(0, -2), v = JSON.stringify(v);
      else if (d.isArray(v) && Is(v) || (d.isFileList(v) || d.endsWith(_, "[]")) && (w = d.toArray(v)))
        return _ = ti(_), w.forEach(function(x, R) {
          !(d.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? kn([_], R, o) : s === null ? _ : _ + "[]",
            c(x)
          );
        }), !1;
    }
    return Zt(v) ? !0 : (t.append(kn(O, _, o), c(v)), !1);
  }
  const f = [], b = Object.assign($s, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: Zt
  });
  function E(v, _) {
    if (!d.isUndefined(v)) {
      if (f.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      f.push(v), d.forEach(v, function(w, B) {
        (!(d.isUndefined(w) || w === null) && i.call(
          t,
          w,
          d.isString(B) ? B.trim() : B,
          _,
          b
        )) === !0 && E(w, _ ? _.concat(B) : [B]);
      }), f.pop();
    }
  }
  if (!d.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function Fn(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function vn(e, t) {
  this._pairs = [], e && Tt(e, this, t);
}
const ni = vn.prototype;
ni.append = function(t, r) {
  this._pairs.push([t, r]);
};
ni.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Fn);
  } : Fn;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function qs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ri(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || qs, i = r && r.serialize;
  let o;
  if (i ? o = i(t, r) : o = d.isURLSearchParams(t) ? t.toString() : new vn(t, r).toString(n), o) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class In {
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
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
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
    d.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const ii = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ks = typeof URLSearchParams < "u" ? URLSearchParams : vn, zs = typeof FormData < "u" ? FormData : null, Hs = typeof Blob < "u" ? Blob : null, Gs = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ks,
    FormData: zs,
    Blob: Hs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, oi = typeof window < "u" && typeof document < "u", Js = ((e) => oi && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Ws = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: oi,
  hasStandardBrowserEnv: Js,
  hasStandardBrowserWebWorkerEnv: Ws
}, Symbol.toStringTag, { value: "Module" })), W = {
  ...Xs,
  ...Gs
};
function Ys(e, t) {
  return Tt(e, new W.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, o) {
      return W.isNode && d.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Zs(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Qs(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let o;
  for (n = 0; n < i; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function si(e) {
  function t(r, n, i, o) {
    let s = r[o++];
    if (s === "__proto__")
      return !0;
    const a = Number.isFinite(+s), u = o >= r.length;
    return s = !s && d.isArray(i) ? i.length : s, u ? (d.hasOwnProp(i, s) ? i[s] = [i[s], n] : i[s] = n, !a) : ((!i[s] || !d.isObject(i[s])) && (i[s] = []), t(r, n, i[s], o) && d.isArray(i[s]) && (i[s] = Qs(i[s])), !a);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const r = {};
    return d.forEachEntry(e, (n, i) => {
      t(Zs(n), i, r, 0);
    }), r;
  }
  return null;
}
function ea(e, t, r) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const bn = {
  transitional: ii,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, o = d.isObject(t);
    if (o && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t))
      return i ? JSON.stringify(si(t)) : t;
    if (d.isArrayBuffer(t) || d.isBuffer(t) || d.isStream(t) || d.isFile(t) || d.isBlob(t))
      return t;
    if (d.isArrayBufferView(t))
      return t.buffer;
    if (d.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Ys(t, this.formSerializer).toString();
      if ((a = d.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Tt(
          a ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return o || i ? (r.setContentType("application/json", !1), ea(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || bn.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (t && d.isString(t) && (n && !this.responseType || i)) {
      const s = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? y.from(a, y.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: W.classes.FormData,
    Blob: W.classes.Blob
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
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  bn.headers[e] = {};
});
const mn = bn, ta = d.toObjectSet([
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
]), na = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(s) {
    i = s.indexOf(":"), r = s.substring(0, i).trim().toLowerCase(), n = s.substring(i + 1).trim(), !(!r || t[r] && ta[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, $n = Symbol("internals");
function Pe(e) {
  return e && String(e).trim().toLowerCase();
}
function it(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(it) : String(e);
}
function ra(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const ia = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ut(e, t, r, n, i) {
  if (d.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!d.isString(t)) {
    if (d.isString(n))
      return t.indexOf(n) !== -1;
    if (d.isRegExp(n))
      return n.test(t);
  }
}
function oa(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function sa(e, t) {
  const r = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(i, o, s) {
        return this[n].call(this, t, i, o, s);
      },
      configurable: !0
    });
  });
}
class Rt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function o(a, u, c) {
      const l = Pe(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = d.findKey(i, l);
      (!f || i[f] === void 0 || c === !0 || c === void 0 && i[f] !== !1) && (i[f || u] = it(a));
    }
    const s = (a, u) => d.forEach(a, (c, l) => o(c, l, u));
    return d.isPlainObject(t) || t instanceof this.constructor ? s(t, r) : d.isString(t) && (t = t.trim()) && !ia(t) ? s(na(t), r) : t != null && o(r, t, n), this;
  }
  get(t, r) {
    if (t = Pe(t), t) {
      const n = d.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return ra(i);
        if (d.isFunction(r))
          return r.call(this, i, n);
        if (d.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Pe(t), t) {
      const n = d.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Ut(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function o(s) {
      if (s = Pe(s), s) {
        const a = d.findKey(n, s);
        a && (!r || Ut(n, n[a], a, r)) && (delete n[a], i = !0);
      }
    }
    return d.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || Ut(this, this[o], o, t, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return d.forEach(this, (i, o) => {
      const s = d.findKey(n, o);
      if (s) {
        r[s] = it(i), delete r[o];
        return;
      }
      const a = t ? oa(o) : String(o).trim();
      a !== o && delete r[o], r[a] = it(i), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = t && d.isArray(n) ? n.join(", ") : n);
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
    const n = new this(t);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[$n] = this[$n] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(s) {
      const a = Pe(s);
      n[a] || (sa(i, s), n[a] = !0);
    }
    return d.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Rt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(Rt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
d.freezeMethods(Rt);
const ne = Rt;
function Mt(e, t) {
  const r = this || mn, n = t || r, i = ne.from(n.headers);
  let o = n.data;
  return d.forEach(e, function(a) {
    o = a.call(r, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function ai(e) {
  return !!(e && e.__CANCEL__);
}
function Ze(e, t, r) {
  y.call(this, e ?? "canceled", y.ERR_CANCELED, t, r), this.name = "CanceledError";
}
d.inherits(Ze, y, {
  __CANCEL__: !0
});
function aa(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new y(
    "Request failed with status code " + r.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const ua = W.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, i, o) {
      const s = [e + "=" + encodeURIComponent(t)];
      d.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), d.isString(n) && s.push("path=" + n), d.isString(i) && s.push("domain=" + i), o === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function ca(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function la(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ui(e, t) {
  return e && !ca(t) ? la(e, t) : t;
}
const fa = W.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function i(o) {
      let s = o;
      return t && (r.setAttribute("href", s), s = r.href), r.setAttribute("href", s), {
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
    return n = i(window.location.href), function(s) {
      const a = d.isString(s) ? i(s) : s;
      return a.protocol === n.protocol && a.host === n.host;
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
function da(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ha(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let i = 0, o = 0, s;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const c = Date.now(), l = n[o];
    s || (s = c), r[i] = u, n[i] = c;
    let f = o, b = 0;
    for (; f !== i; )
      b += r[f++], f = f % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), c - s < t)
      return;
    const E = l && c - l;
    return E ? Math.round(b * 1e3 / E) : void 0;
  };
}
function qn(e, t) {
  let r = 0;
  const n = ha(50, 250);
  return (i) => {
    const o = i.loaded, s = i.lengthComputable ? i.total : void 0, a = o - r, u = n(a), c = o <= s;
    r = o;
    const l = {
      loaded: o,
      total: s,
      progress: s ? o / s : void 0,
      bytes: a,
      rate: u || void 0,
      estimated: u && s && c ? (s - o) / u : void 0,
      event: i
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const pa = typeof XMLHttpRequest < "u", _a = pa && function(e) {
  return new Promise(function(r, n) {
    let i = e.data;
    const o = ne.from(e.headers).normalize();
    let { responseType: s, withXSRFToken: a } = e, u;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let l;
    if (d.isFormData(i)) {
      if (W.hasStandardBrowserEnv || W.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((l = o.getContentType()) !== !1) {
        const [_, ...O] = l ? l.split(";").map((w) => w.trim()).filter(Boolean) : [];
        o.setContentType([_ || "multipart/form-data", ...O].join("; "));
      }
    }
    let f = new XMLHttpRequest();
    if (e.auth) {
      const _ = e.auth.username || "", O = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(_ + ":" + O));
    }
    const b = ui(e.baseURL, e.url);
    f.open(e.method.toUpperCase(), ri(b, e.params, e.paramsSerializer), !0), f.timeout = e.timeout;
    function E() {
      if (!f)
        return;
      const _ = ne.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), w = {
        data: !s || s === "text" || s === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: _,
        config: e,
        request: f
      };
      aa(function(x) {
        r(x), c();
      }, function(x) {
        n(x), c();
      }, w), f = null;
    }
    if ("onloadend" in f ? f.onloadend = E : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, f.onabort = function() {
      f && (n(new y("Request aborted", y.ECONNABORTED, e, f)), f = null);
    }, f.onerror = function() {
      n(new y("Network Error", y.ERR_NETWORK, e, f)), f = null;
    }, f.ontimeout = function() {
      let O = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const w = e.transitional || ii;
      e.timeoutErrorMessage && (O = e.timeoutErrorMessage), n(new y(
        O,
        w.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        f
      )), f = null;
    }, W.hasStandardBrowserEnv && (a && d.isFunction(a) && (a = a(e)), a || a !== !1 && fa(b))) {
      const _ = e.xsrfHeaderName && e.xsrfCookieName && ua.read(e.xsrfCookieName);
      _ && o.set(e.xsrfHeaderName, _);
    }
    i === void 0 && o.setContentType(null), "setRequestHeader" in f && d.forEach(o.toJSON(), function(O, w) {
      f.setRequestHeader(w, O);
    }), d.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), s && s !== "json" && (f.responseType = e.responseType), typeof e.onDownloadProgress == "function" && f.addEventListener("progress", qn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", qn(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (_) => {
      f && (n(!_ || _.type ? new Ze(null, e, f) : _), f.abort(), f = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const v = da(b);
    if (v && W.protocols.indexOf(v) === -1) {
      n(new y("Unsupported protocol " + v + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    f.send(i || null);
  });
}, Qt = {
  http: Fs,
  xhr: _a
};
d.forEach(Qt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Kn = (e) => `- ${e}`, va = (e) => d.isFunction(e) || e === null || e === !1, ci = {
  getAdapter: (e) => {
    e = d.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const i = {};
    for (let o = 0; o < t; o++) {
      r = e[o];
      let s;
      if (n = r, !va(r) && (n = Qt[(s = String(r)).toLowerCase()], n === void 0))
        throw new y(`Unknown adapter '${s}'`);
      if (n)
        break;
      i[s || "#" + o] = n;
    }
    if (!n) {
      const o = Object.entries(i).map(
        ([a, u]) => `adapter ${a} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? o.length > 1 ? `since :
` + o.map(Kn).join(`
`) : " " + Kn(o[0]) : "as no adapter specified";
      throw new y(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Qt
};
function kt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ze(null, e);
}
function zn(e) {
  return kt(e), e.headers = ne.from(e.headers), e.data = Mt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ci.getAdapter(e.adapter || mn.adapter)(e).then(function(n) {
    return kt(e), n.data = Mt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = ne.from(n.headers), n;
  }, function(n) {
    return ai(n) || (kt(e), n && n.response && (n.response.data = Mt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = ne.from(n.response.headers))), Promise.reject(n);
  });
}
const Hn = (e) => e instanceof ne ? { ...e } : e;
function we(e, t) {
  t = t || {};
  const r = {};
  function n(c, l, f) {
    return d.isPlainObject(c) && d.isPlainObject(l) ? d.merge.call({ caseless: f }, c, l) : d.isPlainObject(l) ? d.merge({}, l) : d.isArray(l) ? l.slice() : l;
  }
  function i(c, l, f) {
    if (d.isUndefined(l)) {
      if (!d.isUndefined(c))
        return n(void 0, c, f);
    } else
      return n(c, l, f);
  }
  function o(c, l) {
    if (!d.isUndefined(l))
      return n(void 0, l);
  }
  function s(c, l) {
    if (d.isUndefined(l)) {
      if (!d.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, l);
  }
  function a(c, l, f) {
    if (f in t)
      return n(c, l);
    if (f in e)
      return n(void 0, c);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (c, l) => i(Hn(c), Hn(l), !0)
  };
  return d.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const f = u[l] || i, b = f(e[l], t[l], l);
    d.isUndefined(b) && f !== a || (r[l] = b);
  }), r;
}
const li = "1.6.8", yn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  yn[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Gn = {};
yn.transitional = function(t, r, n) {
  function i(o, s) {
    return "[Axios v" + li + "] Transitional option '" + o + "'" + s + (n ? ". " + n : "");
  }
  return (o, s, a) => {
    if (t === !1)
      throw new y(
        i(s, " has been removed" + (r ? " in " + r : "")),
        y.ERR_DEPRECATED
      );
    return r && !Gn[s] && (Gn[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, s, a) : !0;
  };
};
function ba(e, t, r) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const o = n[i], s = t[o];
    if (s) {
      const a = e[o], u = a === void 0 || s(a, o, e);
      if (u !== !0)
        throw new y("option " + o + " must be " + u, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new y("Unknown option " + o, y.ERR_BAD_OPTION);
  }
}
const en = {
  assertOptions: ba,
  validators: yn
}, oe = en.validators;
class vt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new In(),
      response: new In()
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
    } catch (n) {
      if (n instanceof Error) {
        let i;
        Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error();
        const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        n.stack ? o && !String(n.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + o) : n.stack = o;
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = we(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: o } = r;
    n !== void 0 && en.assertOptions(n, {
      silentJSONParsing: oe.transitional(oe.boolean),
      forcedJSONParsing: oe.transitional(oe.boolean),
      clarifyTimeoutError: oe.transitional(oe.boolean)
    }, !1), i != null && (d.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : en.assertOptions(i, {
      encode: oe.function,
      serialize: oe.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let s = o && d.merge(
      o.common,
      o[r.method]
    );
    o && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete o[v];
      }
    ), r.headers = ne.concat(s, o);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(_) {
      typeof _.runWhen == "function" && _.runWhen(r) === !1 || (u = u && _.synchronous, a.unshift(_.fulfilled, _.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(_) {
      c.push(_.fulfilled, _.rejected);
    });
    let l, f = 0, b;
    if (!u) {
      const v = [zn.bind(this), void 0];
      for (v.unshift.apply(v, a), v.push.apply(v, c), b = v.length, l = Promise.resolve(r); f < b; )
        l = l.then(v[f++], v[f++]);
      return l;
    }
    b = a.length;
    let E = r;
    for (f = 0; f < b; ) {
      const v = a[f++], _ = a[f++];
      try {
        E = v(E);
      } catch (O) {
        _.call(this, O);
        break;
      }
    }
    try {
      l = zn.call(this, E);
    } catch (v) {
      return Promise.reject(v);
    }
    for (f = 0, b = c.length; f < b; )
      l = l.then(c[f++], c[f++]);
    return l;
  }
  getUri(t) {
    t = we(this.defaults, t);
    const r = ui(t.baseURL, t.url);
    return ri(r, t.params, t.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function(t) {
  vt.prototype[t] = function(r, n) {
    return this.request(we(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, s, a) {
      return this.request(we(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  vt.prototype[t] = r(), vt.prototype[t + "Form"] = r(!0);
});
const ot = vt;
class gn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners)
        return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let o;
      const s = new Promise((a) => {
        n.subscribe(a), o = a;
      }).then(i);
      return s.cancel = function() {
        n.unsubscribe(o);
      }, s;
    }, t(function(o, s, a) {
      n.reason || (n.reason = new Ze(o, s, a), r(n.reason));
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
      token: new gn(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const ma = gn;
function ya(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function ga(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const tn = {
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
Object.entries(tn).forEach(([e, t]) => {
  tn[t] = e;
});
const Oa = tn;
function fi(e) {
  const t = new ot(e), r = zr(ot.prototype.request, t);
  return d.extend(r, ot.prototype, t, { allOwnKeys: !0 }), d.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return fi(we(e, i));
  }, r;
}
const N = fi(mn);
N.Axios = ot;
N.CanceledError = Ze;
N.CancelToken = ma;
N.isCancel = ai;
N.VERSION = li;
N.toFormData = Tt;
N.AxiosError = y;
N.Cancel = N.CanceledError;
N.all = function(t) {
  return Promise.all(t);
};
N.spread = ya;
N.isAxiosError = ga;
N.mergeConfig = we;
N.AxiosHeaders = ne;
N.formToJSON = (e) => si(d.isHTMLForm(e) ? new FormData(e) : e);
N.getAdapter = ci.getAdapter;
N.HttpStatusCode = Oa;
N.default = N;
N.defaults.baseURL = "http://localhost:3000";
const Be = (e) => e.data, Ve = {
  get: (e) => N.get(e).then(Be),
  post: (e, t) => N.post(e, t).then(Be),
  put: (e, t) => N.put(e, t).then(Be),
  del: (e) => N.delete(e).then(Be)
}, Ea = {
  list: () => N.get("/tasks").then(Be),
  details: (e) => Ve.get(`/tasks/${e}`),
  create: (e) => Ve.post("/tasks", e),
  update: (e) => Ve.put(`/tasks/${e.id}`, e),
  delete: (e) => Ve.del(`/tasks/${e}`),
  attend: (e) => Ve.post(`/tasks/${e}/attend`, {})
}, Ce = {
  Tasks: Ea
};
class Aa {
  constructor() {
    this.tasks = [], this.selectedTask = void 0, this.loadTasks = async () => {
      try {
        this.tasks = await Ce.Tasks.list();
      } catch (t) {
        console.log(t);
      }
    }, this.loadTask = async (t) => {
      let r = this.getTask(t);
      if (r)
        return this.selectedTask = r, r;
      try {
        return r = await Ce.Tasks.details(t), this.setTask(r), Pt(() => {
          this.selectedTask = r;
        }), r;
      } catch (n) {
        console.log(n);
      }
    }, this.setTask = (t) => {
      this.tasks.push(t);
    }, this.getTask = (t) => this.tasks.find((r) => r.id === t), this.createTask = async (t) => {
      try {
        await Ce.Tasks.create(t), this.setTask(t);
      } catch (r) {
        console.log(r);
      }
    }, this.updateTask = async (t) => {
      try {
        await Ce.Tasks.update(t), Pt(() => {
          if (t.id) {
            const r = this.tasks.findIndex((n) => n.id === t.id);
            r !== -1 && (this.tasks[r] = { ...this.tasks[r], ...t });
          }
        });
      } catch (r) {
        console.log(r);
      }
    }, this.deleteTask = async (t) => {
      try {
        await Ce.Tasks.delete(t), Pt(() => {
          const r = this.tasks.findIndex((n) => n.id === t);
          r !== -1 && this.tasks.splice(r, 1);
        });
      } catch (r) {
        console.log(r);
      }
    }, Vr(this), this.loadTasks();
  }
}
class Na {
  constructor() {
    this.dislogIsVisible = !1, this.setDialogIsVisible = (t) => {
      this.dislogIsVisible = t;
    }, Vr(this);
  }
}
const wa = {
  taskStore: new Aa(),
  dialogStore: new Na()
}, Sa = di(wa);
function Ta() {
  return hi(Sa);
}
export {
  Sa as StoreContext,
  wa as store,
  Ta as useStore
};
