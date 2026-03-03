"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Badge: () => Badge_default,
  Button: () => Button_default
});
module.exports = __toCommonJS(index_exports);

// src/lib/enum/ThemeColor.ts
var ThemeColor = /* @__PURE__ */ ((ThemeColor2) => {
  ThemeColor2["PRIMARY"] = "bd-primary";
  ThemeColor2["SECONDARY"] = "bd-secondary";
  ThemeColor2["TERTIARY"] = "bd-tertiary";
  return ThemeColor2;
})(ThemeColor || {});
var ThemeColor_default = ThemeColor;

// src/Atom/Button/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({
  color = ThemeColor_default.PRIMARY,
  disabled = false,
  children,
  onClick,
  type = "button"
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      className: `bd-button ${color}`,
      disabled,
      onClick,
      type,
      children
    }
  );
};
var Button_default = Button;

// src/Atom/Badge/Badge.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Badge = ({
  color = ThemeColor_default.PRIMARY,
  children,
  onClick,
  disabled = false
}) => {
  const disabledClass = disabled ? "bd-badge-disabled" : null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "span",
    {
      className: [
        `bd-badge`,
        color,
        disabledClass
      ].join(" "),
      onClick,
      children
    }
  );
};
var Badge_default = Badge;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Badge,
  Button
});
//# sourceMappingURL=index.cjs.map