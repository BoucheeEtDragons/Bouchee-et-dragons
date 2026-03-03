import React from "react";
import "./image.css";

interface Props {
    src: string,
    alt?: string,
    [key: string]: any,
}

export const Image: React.FC<Props> = ({
    src,
    alt,
    ...props
}) => {
    return (
        <img
            className="bd-image"
            src={src}
            alt={alt}
            {...props}
        />
    );
}