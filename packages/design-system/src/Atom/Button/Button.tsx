import ThemeColor from "../../lib/enum/ThemeColor";
import "./button.css";
import React from "react";
import {ButtonType} from "../../lib/type/ButtonType";

interface Props {
    color?: ThemeColor,
    disabled?: boolean,
    children?: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    type?: ButtonType
}

const Button: React.FC<Props> = ({
    color = ThemeColor.PRIMARY,
    disabled = false,
    children,
    onClick,
    type = 'button'
}) => {
    return (
        <button className={`bd-button ${color}`}
                disabled={disabled}
                onClick={onClick}
                type={type}
        >
            {children}
        </button>
    )
}

export default Button