import ThemeColor from "../../lib/enum/ThemeColor";
import "./descriptionMenu.css";
import React from "react";

interface Props {
    color?: ThemeColor,
    children?: React.ReactNode,
}

const DescriptionMenu: React.FC<Props> = ({
    color = ThemeColor.PRIMARY,
    children,
}) => {
    return (
        <div className={`bd-description-menu ${color}`}>
            {children}
        </div>
    )
}

export default DescriptionMenu