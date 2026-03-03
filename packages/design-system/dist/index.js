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
import { useId } from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Field = ({
  color = ThemeColor_default.PRIMARY,
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  name,
  type = "text"
}) => {
  const generatedId = useId();
  const id = name ?? generatedId;
  return /* @__PURE__ */ jsxs("div", { className: `bd-field ${color}`, children: [
    label && /* @__PURE__ */ jsx2("label", { htmlFor: id, className: "bd-field-label", children: label }),
    /* @__PURE__ */ jsx2(
      "input",
      {
        id,
        className: "bd-field-input",
        type,
        placeholder,
        value,
        onChange,
        disabled,
        name
      }
    )
  ] });
};
var Field_default = Field;
export {
  Button_default as Button,
  Field_default as Field
};
//# sourceMappingURL=index.js.map