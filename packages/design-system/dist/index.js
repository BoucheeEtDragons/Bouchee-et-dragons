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

// src/Atom/Badge/Badge.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Badge = ({
  color = ThemeColor_default.PRIMARY,
  children,
  onClick,
  disabled = false
}) => {
  const disabledClass = disabled ? "bd-badge-disabled" : null;
  return /* @__PURE__ */ jsx2(
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
export {
  Badge_default as Badge,
  Button_default as Button
};
//# sourceMappingURL=index.js.map