import React from "react";
import "./image.css";
import clsx from "clsx";

interface Props {
    src: string,
    alt?: string,
    className?: string,
    width?: string|number,
    height?: string|number,
    [key: string]: any,
}

export const Image: React.FC<Props> = ({
    src,
    alt,
    className,
    width,
    height,
    ...props
}) => {
    return (
        <img
            className={clsx('bd-image', className)}
            src={src}
            alt={alt}
            width={width}
            height={height}
            {...props}
        />
    );
}