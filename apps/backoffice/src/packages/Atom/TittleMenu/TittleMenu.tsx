import ThemeColor from "../../lib/enum/ThemeColor";
import "./tittleMenu.css";
import React from "react";

interface Props {
    color?: ThemeColor,
    children?: React.ReactNode,
}

const TittleMenu: React.FC<Props> = ({
    color = ThemeColor.PRIMARY,
    children,
}) => {
    return (
        <div className={`bd-tittle-menu ${color}`}>
            {children}
        </div>
    )
}

export default TittleMenu