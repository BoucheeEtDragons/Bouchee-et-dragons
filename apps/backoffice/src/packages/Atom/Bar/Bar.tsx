import React from "react";
import "./bar.css";
import ThemeColor from "../../lib/enum/ThemeColor";

interface Props {
    color?: ThemeColor,
    height?: number,
}

const Bar: React.FC<Props> = ({
    color = ThemeColor.PRIMARY,
    height = 2,
}) => {
    return (
        <div
            className={`bd-bar ${color}`}
            style={{
                height: height
            }}
        />
    )
};

export default Bar;