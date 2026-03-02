import React from 'react';

declare enum ThemeColor {
    PRIMARY = "bd-primary",
    SECONDARY = "bd-secondary",
    TERTIARY = "bd-tertiary"
}

type ButtonType = 'submit' | 'reset' | 'button';

interface Props {
    color?: ThemeColor;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: ButtonType;
}
declare const Button: React.FC<Props>;

export { Button };
