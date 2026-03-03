import ThemeColor from "../../lib/enum/ThemeColor";
import "./priceMenu.css";
import React from "react";

interface Props {
    color?: ThemeColor,
    children?: React.ReactNode,
}

const PriceMenu: React.FC<Props> = ({
    color = ThemeColor.PRIMARY,
    children,
}) => {
    return (
        <div className={`bd-price-menu ${color}`}>
            {children}
        </div>
    )
}

export default PriceMenu