import React from "react";
import "./input.css";
import ThemeColor from "../../lib/enum/ThemeColor";
import type { FieldType } from "../../lib/type/FieldType";
import Field from "../../Atom/Field/Field";
import Label from "../../Atom/Label/Label";

interface Props {
  label?: string;
  labelColor?: ThemeColor;
  fieldColor?: ThemeColor;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  name?: string;
  type?: FieldType;
}

const Input: React.FC<Props> = ({
  label,
  labelColor = ThemeColor.TERTIARY,
  fieldColor = ThemeColor.PRIMARY,
  placeholder,
  value,
  onChange,
  disabled = false,
  name,
  type = "text",
}) => {
  return (
    <div className="bd-input">
      {label && (
        <Label color={labelColor} htmlFor={name}>
          {label}
        </Label>
      )}
      <Field
        color={fieldColor}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        type={type}
      />
    </div>
  );
};

export default Input;
