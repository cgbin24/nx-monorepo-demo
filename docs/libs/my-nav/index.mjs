import { jsx as w, jsxs as ue } from "react/jsx-runtime";
import * as s from "react";
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function j() {
  return j = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, j.apply(this, arguments);
}
var Y;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Y || (Y = {}));
function f(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function J(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function k(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Q(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
var G;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(G || (G = {}));
function W(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function ce(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: a = ""
  } = typeof e == "string" ? Q(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : fe(n, t) : t,
    search: de(r),
    hash: pe(a)
  };
}
function fe(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a);
  }), n.length > 1 ? n.join("/") : "/";
}
function A(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Z(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function ee(e, t, n, r) {
  r === void 0 && (r = !1);
  let a;
  typeof e == "string" ? a = Q(e) : (a = j({}, e), f(!a.pathname || !a.pathname.includes("?"), A("?", "pathname", "search", a)), f(!a.pathname || !a.pathname.includes("#"), A("#", "pathname", "hash", a)), f(!a.search || !a.search.includes("#"), A("#", "search", "hash", a)));
  let i = e === "" || a.pathname === "", o = i ? "/" : a.pathname, l;
  if (r || o == null)
    l = n;
  else {
    let p = t.length - 1;
    if (o.startsWith("..")) {
      let N = o.split("/");
      for (; N[0] === ".."; )
        N.shift(), p -= 1;
      a.pathname = N.join("/");
    }
    l = p >= 0 ? t[p] : "/";
  }
  let u = ce(a, l), c = o && o !== "/" && o.endsWith("/"), d = (i || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"), u;
}
const $ = (e) => e.join("/").replace(/\/\/+/g, "/"), de = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, pe = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, te = ["post", "put", "patch", "delete"];
new Set(te);
const he = ["get", ...te];
new Set(he);
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function M() {
  return M = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, M.apply(this, arguments);
}
const U = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (U.displayName = "DataRouter");
const ne = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (ne.displayName = "DataRouterState");
const me = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (me.displayName = "Await");
const C = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (C.displayName = "Navigation");
const K = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (K.displayName = "Location");
const R = /* @__PURE__ */ s.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (R.displayName = "Route");
const ve = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (ve.displayName = "RouteError");
function ge(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  z() || (process.env.NODE_ENV !== "production" ? f(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : f(!1));
  let {
    basename: r,
    navigator: a
  } = s.useContext(C), {
    hash: i,
    pathname: o,
    search: l
  } = _(e, {
    relative: n
  }), u = o;
  return r !== "/" && (u = o === "/" ? r : $([r, o])), a.createHref({
    pathname: u,
    search: l,
    hash: i
  });
}
function z() {
  return s.useContext(K) != null;
}
function L() {
  return z() || (process.env.NODE_ENV !== "production" ? f(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : f(!1)), s.useContext(K).location;
}
const re = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ae(e) {
  s.useContext(C).static || s.useLayoutEffect(e);
}
function Ne() {
  let {
    isDataRoute: e
  } = s.useContext(R);
  return e ? xe() : Ee();
}
function Ee() {
  z() || (process.env.NODE_ENV !== "production" ? f(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : f(!1));
  let e = s.useContext(U), {
    basename: t,
    navigator: n
  } = s.useContext(C), {
    matches: r
  } = s.useContext(R), {
    pathname: a
  } = L(), i = JSON.stringify(Z(r).map((u) => u.pathnameBase)), o = s.useRef(!1);
  return ae(() => {
    o.current = !0;
  }), s.useCallback(function(u, c) {
    if (c === void 0 && (c = {}), process.env.NODE_ENV !== "production" && J(o.current, re), !o.current)
      return;
    if (typeof u == "number") {
      n.go(u);
      return;
    }
    let d = ee(u, JSON.parse(i), a, c.relative === "path");
    e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : $([t, d.pathname])), (c.replace ? n.replace : n.push)(d, c.state, c);
  }, [t, n, i, a, e]);
}
function _(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    matches: r
  } = s.useContext(R), {
    pathname: a
  } = L(), i = JSON.stringify(Z(r).map((o) => o.pathnameBase));
  return s.useMemo(() => ee(e, JSON.parse(i), a, n === "path"), [e, i, a, n]);
}
var T;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate";
})(T || (T = {}));
var P;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId";
})(P || (P = {}));
function oe(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function ye(e) {
  let t = s.useContext(U);
  return t || (process.env.NODE_ENV !== "production" ? f(!1, oe(e)) : f(!1)), t;
}
function be(e) {
  let t = s.useContext(R);
  return t || (process.env.NODE_ENV !== "production" ? f(!1, oe(e)) : f(!1)), t;
}
function ie(e) {
  let t = be(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? f(!1, e + ' can only be used on routes that contain a unique "id"') : f(!1)), n.route.id;
}
function Ce() {
  return ie(P.UseRouteId);
}
function xe() {
  let {
    router: e
  } = ye(T.UseNavigateStable), t = ie(P.UseNavigateStable), n = s.useRef(!1);
  return ae(() => {
    n.current = !0;
  }), s.useCallback(function(a, i) {
    i === void 0 && (i = {}), process.env.NODE_ENV !== "production" && J(n.current, re), n.current && (typeof a == "number" ? e.navigate(a) : e.navigate(a, M({
      fromRouteId: t
    }, i)));
  }, [e, t]);
}
var X;
(function(e) {
  e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error";
})(X || (X = {}));
new Promise(() => {
});
/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function b() {
  return b = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, b.apply(this, arguments);
}
function q(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
const S = "get", F = "application/x-www-form-urlencoded";
function V(e) {
  return e != null && typeof e.tagName == "string";
}
function we(e) {
  return V(e) && e.tagName.toLowerCase() === "button";
}
function Re(e) {
  return V(e) && e.tagName.toLowerCase() === "form";
}
function Oe(e) {
  return V(e) && e.tagName.toLowerCase() === "input";
}
function Le(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function De(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Le(e);
}
function Se(e, t, n) {
  let r, a = null, i, o;
  if (Re(e)) {
    let l = t.submissionTrigger;
    if (t.action)
      a = t.action;
    else {
      let u = e.getAttribute("action");
      a = u ? W(u, n) : null;
    }
    r = t.method || e.getAttribute("method") || S, i = t.encType || e.getAttribute("enctype") || F, o = new FormData(e), l && l.name && o.append(l.name, l.value);
  } else if (we(e) || Oe(e) && (e.type === "submit" || e.type === "image")) {
    let l = e.form;
    if (l == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    if (t.action)
      a = t.action;
    else {
      let u = e.getAttribute("formaction") || l.getAttribute("action");
      a = u ? W(u, n) : null;
    }
    r = t.method || e.getAttribute("formmethod") || l.getAttribute("method") || S, i = t.encType || e.getAttribute("formenctype") || l.getAttribute("enctype") || F, o = new FormData(l), e.name && o.append(e.name, e.value);
  } else {
    if (V(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    if (r = t.method || S, a = t.action || null, i = t.encType || F, e instanceof FormData)
      o = e;
    else if (o = new FormData(), e instanceof URLSearchParams)
      for (let [l, u] of e)
        o.append(l, u);
    else if (e != null)
      for (let l of Object.keys(e))
        o.append(l, e[l]);
  }
  return {
    action: a,
    method: r.toLowerCase(),
    encType: i,
    formData: o
  };
}
const Pe = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], Ue = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"], _e = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];
process.env.NODE_ENV;
const Ve = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ie = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, O = /* @__PURE__ */ s.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: a,
    reloadDocument: i,
    replace: o,
    state: l,
    target: u,
    to: c,
    preventScrollReset: d
  } = t, p = q(t, Pe), {
    basename: N
  } = s.useContext(C), E, x = !1;
  if (typeof c == "string" && Ie.test(c) && (E = c, Ve))
    try {
      let h = new URL(window.location.href), y = c.startsWith("//") ? new URL(h.protocol + c) : new URL(c), D = W(y.pathname, N);
      y.origin === h.origin && D != null ? c = D + y.search + y.hash : x = !0;
    } catch {
      process.env.NODE_ENV !== "production" && J(!1, '<Link to="' + c + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let g = ge(c, {
    relative: a
  }), m = We(c, {
    replace: o,
    state: l,
    target: u,
    preventScrollReset: d,
    relative: a
  });
  function v(h) {
    r && r(h), h.defaultPrevented || m(h);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ s.createElement("a", b({}, p, {
      href: E || g,
      onClick: x || i ? r : v,
      ref: n,
      target: u
    }))
  );
});
process.env.NODE_ENV !== "production" && (O.displayName = "Link");
const Ae = /* @__PURE__ */ s.forwardRef(function(t, n) {
  let {
    "aria-current": r = "page",
    caseSensitive: a = !1,
    className: i = "",
    end: o = !1,
    style: l,
    to: u,
    children: c
  } = t, d = q(t, Ue), p = _(u, {
    relative: d.relative
  }), N = L(), E = s.useContext(ne), {
    navigator: x
  } = s.useContext(C), g = x.encodeLocation ? x.encodeLocation(p).pathname : p.pathname, m = N.pathname, v = E && E.navigation && E.navigation.location ? E.navigation.location.pathname : null;
  a || (m = m.toLowerCase(), v = v ? v.toLowerCase() : null, g = g.toLowerCase());
  let h = m === g || !o && m.startsWith(g) && m.charAt(g.length) === "/", y = v != null && (v === g || !o && v.startsWith(g) && v.charAt(g.length) === "/"), D = h ? r : void 0, I;
  typeof i == "function" ? I = i({
    isActive: h,
    isPending: y
  }) : I = [i, h ? "active" : null, y ? "pending" : null].filter(Boolean).join(" ");
  let le = typeof l == "function" ? l({
    isActive: h,
    isPending: y
  }) : l;
  return /* @__PURE__ */ s.createElement(O, b({}, d, {
    "aria-current": D,
    className: I,
    ref: n,
    style: le,
    to: u
  }), typeof c == "function" ? c({
    isActive: h,
    isPending: y
  }) : c);
});
process.env.NODE_ENV !== "production" && (Ae.displayName = "NavLink");
const Fe = /* @__PURE__ */ s.forwardRef((e, t) => /* @__PURE__ */ s.createElement(se, b({}, e, {
  ref: t
})));
process.env.NODE_ENV !== "production" && (Fe.displayName = "Form");
const se = /* @__PURE__ */ s.forwardRef((e, t) => {
  let {
    reloadDocument: n,
    replace: r,
    method: a = S,
    action: i,
    onSubmit: o,
    fetcherKey: l,
    routeId: u,
    relative: c,
    preventScrollReset: d
  } = e, p = q(e, _e), N = Me(l, u), E = a.toLowerCase() === "get" ? "get" : "post", x = Te(i, {
    relative: c
  }), g = (m) => {
    if (o && o(m), m.defaultPrevented)
      return;
    m.preventDefault();
    let v = m.nativeEvent.submitter, h = (v == null ? void 0 : v.getAttribute("formmethod")) || a;
    N(v || m.currentTarget, {
      method: h,
      replace: r,
      relative: c,
      preventScrollReset: d
    });
  };
  return /* @__PURE__ */ s.createElement("form", b({
    ref: t,
    method: E,
    action: x,
    onSubmit: n ? o : g
  }, p));
});
process.env.NODE_ENV !== "production" && (se.displayName = "FormImpl");
process.env.NODE_ENV;
var B;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher";
})(B || (B = {}));
var H;
(function(e) {
  e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(H || (H = {}));
function je(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function ke(e) {
  let t = s.useContext(U);
  return t || (process.env.NODE_ENV !== "production" ? f(!1, je(e)) : f(!1)), t;
}
function We(e, t) {
  let {
    target: n,
    replace: r,
    state: a,
    preventScrollReset: i,
    relative: o
  } = t === void 0 ? {} : t, l = Ne(), u = L(), c = _(e, {
    relative: o
  });
  return s.useCallback((d) => {
    if (De(d, n)) {
      d.preventDefault();
      let p = r !== void 0 ? r : k(u) === k(c);
      l(e, {
        replace: p,
        state: a,
        preventScrollReset: i,
        relative: o
      });
    }
  }, [u, l, c, r, a, n, e, i, o]);
}
function Me(e, t) {
  let {
    router: n
  } = ke(B.UseSubmitImpl), {
    basename: r
  } = s.useContext(C), a = Ce();
  return s.useCallback(function(i, o) {
    if (o === void 0 && (o = {}), typeof document > "u")
      throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
    let {
      action: l,
      method: u,
      encType: c,
      formData: d
    } = Se(i, o, r), p = {
      preventScrollReset: o.preventScrollReset,
      formData: d,
      formMethod: u,
      formEncType: c
    };
    e ? (t == null && (process.env.NODE_ENV !== "production" ? f(!1, "No routeId available for useFetcher()") : f(!1)), n.fetch(e, t, l, p)) : n.navigate(l, b({}, p, {
      replace: o.replace,
      fromRouteId: a
    }));
  }, [n, r, e, t, a]);
}
function Te(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    basename: r
  } = s.useContext(C), a = s.useContext(R);
  a || (process.env.NODE_ENV !== "production" ? f(!1, "useFormAction must be used inside a RouteContext") : f(!1));
  let [i] = a.matches.slice(-1), o = b({}, _(e || ".", {
    relative: n
  })), l = L();
  if (e == null && (o.search = l.search, o.hash = l.hash, i.route.index)) {
    let u = new URLSearchParams(o.search);
    u.delete("index"), o.search = u.toString() ? "?" + u.toString() : "";
  }
  return (!e || e === ".") && i.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (o.pathname = o.pathname === "/" ? r : $([r, o.pathname])), k(o);
}
function Je(e) {
  return (
    // <div className={styles['container']}>
    //   <h1>Welcome to MyNav!</h1>
    // </div>
    /* @__PURE__ */ w("nav", { children: /* @__PURE__ */ ue("ul", { children: [
      /* @__PURE__ */ w("li", { children: /* @__PURE__ */ w(O, { to: "/", children: "Home" }) }),
      /* @__PURE__ */ w("li", { children: /* @__PURE__ */ w(O, { to: "/demo1", children: "App 1" }) }),
      /* @__PURE__ */ w("li", { children: /* @__PURE__ */ w(O, { to: "/demo2", children: "App 2" }) })
    ] }) })
  );
}
export {
  Je as MyNav
};
