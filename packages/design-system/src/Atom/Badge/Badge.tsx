import ThemeColor from "../../lib/enum/ThemeColor";
import "./badge.css";
import React from "react";

interface Props {
    color?: ThemeColor,
    children?: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean
}

const Badge: React.FC<Props> = ({
    color = ThemeColor.PRIMARY,
    children,
    onClick,
    disabled = false,
}) => {
    const disabledClass = disabled
        ? 'bd-badge-disabled'
        : null

    return (
        <span
            className={[
                `bd-badge`,
                color,
                disabledClass,
            ].join(" ")}
            onClick={onClick}
        >
            {children}
        </span>
    )
}

export default Badge