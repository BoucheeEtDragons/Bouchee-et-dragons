import ThemeColor from "../../lib/enum/ThemeColor";
import "./titleMenu.css";
import React from "react";

interface Props {
    color?: ThemeColor,
    children?: React.ReactNode,
}

const TitleMenu: React.FC<Props> = ({
    color = ThemeColor.PRIMARY,
    children,
}) => {
    return (
        <div className={`bd-title-menu ${color}`}>
            {children}
        </div>
    )
}

export default TitleMenu