import React from 'react';

declare enum ThemeColor {
    PRIMARY = "bd-primary",
    SECONDARY = "bd-secondary",
    TERTIARY = "bd-tertiary"
}

type ButtonType = 'submit' | 'reset' | 'button';

interface Props$1 {
    color?: ThemeColor;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: ButtonType;
}
declare const Button: React.FC<Props$1>;

type FieldType = "text" | "email" | "password" | "number";

interface Props {
    color?: ThemeColor;
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    name?: string;
    type?: FieldType;
}
declare const Field: React.FC<Props>;

export { Button, Field };
