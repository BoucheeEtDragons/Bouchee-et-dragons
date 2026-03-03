import React from "react";
import "./field.css";
import ThemeColor from "../../lib/enum/ThemeColor";
import type { FieldType } from "../../lib/type/FieldType";

interface Props {
  color?: ThemeColor;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  name?: string;
  type?: FieldType;
}

const Field: React.FC<Props> = ({
  color = ThemeColor.PRIMARY,
  placeholder,
  value,
  onChange,
  disabled = false,
  name,
  type = "text"
}) => {

  return (
    <div className={`bd-field ${color}`}>
      <input
        className="bd-field-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
      />
    </div>
  );
};

export default Field;