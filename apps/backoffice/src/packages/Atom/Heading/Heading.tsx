import React, {type JSX} from "react";
import type ThemeColor from "../../lib/enum/ThemeColor.ts";
import type {HeadingLevel} from "../../lib/type/HeadingLevel.ts";
import FontVariant from "../../lib/enum/FontVariant.ts";

interface Props {
    level: HeadingLevel,
    color?: ThemeColor,
    children?: React.ReactNode,
    variant?: FontVariant,
    [key: string]: any
}

export const Heading: React.FC<Props> = ({
    color,
    level,
    children,
    variant,
    ...props
}) => {
    const HeadingInner = `h${level}` as keyof JSX.IntrinsicElements;

    const classes = [
        `bd-heading`,
        color
    ]

    if( !!variant ) {
        classes.push(`bd-font-${variant}`)
    } else {
        classes.push(`bd-font-${FontVariant.TITLE}`)
    }

    return (
        <HeadingInner
            className={classes.join(' ')}
            {...props}
        >
            {children}
        </HeadingInner>
    )
}