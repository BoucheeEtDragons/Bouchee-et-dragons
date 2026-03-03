import React, {type JSX} from "react";
import type ThemeColor from "../../lib/enum/ThemeColor.ts";
import type {HeadingLevel} from "../../lib/type/HeadingLevel.ts";
import FontVariant from "../../lib/enum/FontVariant.ts";
import FontWeight from "../../lib/enum/FontWeight.ts";
import "./heading.css"
import clsx from "clsx";

interface Props {
    level: HeadingLevel,
    color?: ThemeColor,
    children?: React.ReactNode,
    variant?: FontVariant,
    weight?: FontWeight,
    className?: string,
    [key: string]: any
}

export const Heading: React.FC<Props> = ({
    color,
    level,
    children,
    variant = FontVariant.TITLE,
    weight = FontWeight.NORMAL,
    className,
    ...props
}) => {
    const HeadingInner = `h${level}` as keyof JSX.IntrinsicElements;

    const classes = [
        `bd-heading`,
        color,
        `bd-font-${variant}`,
        `bd-font-weight-${weight}`
    ]

    return (
        <HeadingInner
            className={clsx(classes.join(' '), className)}
            {...props}
        >
            {children}
        </HeadingInner>
    )
}