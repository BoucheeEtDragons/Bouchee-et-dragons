import React from "react";
import "./bar.css";
import ThemeColor from "../../lib/enum/ThemeColor";

interface Props {
  color?: ThemeColor;
}

const Bar: React.FC<Props> = ({ color }) => {
    return (
        <div className={`bd-bar ${color}`} />
    )
};

export default Bar;