import React from "react";
import "./container.css";

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Container: React.FC<Props> = ({ children, className = "" }) => {
    return (
        <div className={`bd-container ${className}`}>
            {children}
        </div>
    );
};

export default Container;
