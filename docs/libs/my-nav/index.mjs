import { jsx as o, jsxs as i } from "react/jsx-runtime";
function c(e) {
  const l = (n) => {
    window.location.href = window.location.origin + "/apps" + n;
  };
  return /* @__PURE__ */ o("nav", { children: /* @__PURE__ */ i("ul", { style: { display: "flex", gap: "20px", listStyle: "none", color: "blue" }, children: [
    /* @__PURE__ */ o("li", { onClick: () => l("/demo1"), children: "Home" }),
    /* @__PURE__ */ o("li", { onClick: () => l("/demo1"), children: "App 1" }),
    /* @__PURE__ */ o("li", { onClick: () => l("/demo2"), children: "App 2" })
  ] }) });
}
export {
  c as MyNav
};
