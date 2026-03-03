import ThemeColor from "../../lib/enum/ThemeColor";
import "./link.css";
import React from "react";

interface Props {
    color?: ThemeColor;
    underline?: boolean;
    href?: string;
    target?: string;
    rel?: string;
    children?: React.ReactNode;
}

const Link: React.FC<Props> = ({
    color = ThemeColor.PRIMARY,
    underline = false,
    href,
    target,
    rel,
    children
}) => {
    return (
        <a
            className={`bd-link ${color} ${underline ? "underline" : ""}`}
            href={href}
            target={target}
            rel={rel}
        >
            {children}
        </a>
    );
};

export default Link;
