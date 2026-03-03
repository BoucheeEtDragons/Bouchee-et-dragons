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
  Button: () => Button_default,
  Field: () => Field_default,
  Label: () => Label_default
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

// src/Atom/Field/Field.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Field = ({
  color = ThemeColor_default.PRIMARY,
  placeholder,
  value,
  onChange,
  disabled = false,
  name,
  type = "text"
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: `bd-field ${color}`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "input",
    {
      className: "bd-field-input",
      type,
      placeholder,
      value,
      onChange,
      disabled,
      name
    }
  ) });
};
var Field_default = Field;

// src/Atom/Label/Label.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Label = ({
  color = ThemeColor_default.TERTIARY,
  children,
  htmlFor
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "label",
    {
      className: `bd-label ${color}`,
      htmlFor,
      children
    }
  );
};
var Label_default = Label;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Field,
  Label
});
//# sourceMappingURL=index.cjs.map