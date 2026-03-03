import ThemeColor from "../../lib/enum/ThemeColor";
import "./titleMenu.css";
import React from "react";
import {Heading} from "../Heading/Heading.tsx";

interface Props {
    color?: ThemeColor,
    children?: React.ReactNode,
}

const TitleMenu: React.FC<Props> = ({
    color = ThemeColor.PRIMARY,
    children,
}) => {
    return (
        <Heading color={color} level={3} className={`bd-title-menu ${color}`}>
            {children}
        </Heading>
    )
}

export default TitleMenu