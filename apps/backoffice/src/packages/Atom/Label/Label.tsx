import ThemeColor from "../../lib/enum/ThemeColor";
import "./label.css";
import React from "react";

interface Props {
    color?: ThemeColor;
    children?: React.ReactNode;
    htmlFor?: string;
}

const Label: React.FC<Props> = ({
    color = ThemeColor.TERTIARY,
    children,
    htmlFor
}) => {
    return (
        <label
            className={`bd-label ${color}`}
            htmlFor={htmlFor}
        >
            {children}
        </label>
    );
};

export default Label;
