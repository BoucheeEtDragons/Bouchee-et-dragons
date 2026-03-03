import React from "react";
import "./image.css";
import clsx from "clsx";

interface Props {
    src: string,
    alt?: string,
    className?: string,
    [key: string]: any,
}

export const Image: React.FC<Props> = ({
    src,
    alt,
    className,
    ...props
}) => {
    return (
        <img
            className={clsx('bd-image', className)}
            src={src}
            alt={alt}
            {...props}
        />
    );
}