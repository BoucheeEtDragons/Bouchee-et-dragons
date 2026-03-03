// src/lib/enum/ThemeColor.ts
var ThemeColor = /* @__PURE__ */ ((ThemeColor2) => {
  ThemeColor2["PRIMARY"] = "bd-primary";
  ThemeColor2["SECONDARY"] = "bd-secondary";
  ThemeColor2["TERTIARY"] = "bd-tertiary";
  return ThemeColor2;
})(ThemeColor || {});
var ThemeColor_default = ThemeColor;

// src/Atom/Button/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({
  color = ThemeColor_default.PRIMARY,
  disabled = false,
  children,
  onClick,
  type = "button"
}) => {
  return /* @__PURE__ */ jsx(
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
import { jsx as jsx2 } from "react/jsx-runtime";
var Field = ({
  color = ThemeColor_default.PRIMARY,
  placeholder,
  value,
  onChange,
  disabled = false,
  name,
  type = "text"
}) => {
  return /* @__PURE__ */ jsx2("div", { className: `bd-field ${color}`, children: /* @__PURE__ */ jsx2(
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
import { jsx as jsx3 } from "react/jsx-runtime";
var Label = ({
  color = ThemeColor_default.TERTIARY,
  children,
  htmlFor
}) => {
  return /* @__PURE__ */ jsx3(
    "label",
    {
      className: `bd-label ${color}`,
      htmlFor,
      children
    }
  );
};
var Label_default = Label;
export {
  Button_default as Button,
  Field_default as Field,
  Label_default as Label
};
//# sourceMappingURL=index.js.map