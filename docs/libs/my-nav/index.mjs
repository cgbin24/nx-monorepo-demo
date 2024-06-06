import { jsx as o, jsxs as e } from "react/jsx-runtime";
function c(l) {
  const n = (i) => {
    window.location.href = window.location.origin + "/apps" + i;
  };
  return (
    // <div className={styles['container']}>
    //   <h1>Welcome to MyNav!</h1>
    // </div>
    /* @__PURE__ */ o("nav", { children: /* @__PURE__ */ e("ul", { children: [
      /* @__PURE__ */ o("li", { onClick: () => n("/demo1"), children: "Home" }),
      /* @__PURE__ */ o("li", { onClick: () => n("/demo1"), children: "App 1" }),
      /* @__PURE__ */ o("li", { onClick: () => n("/demo2"), children: "App 2" })
    ] }) })
  );
}
export {
  c as MyNav
};
