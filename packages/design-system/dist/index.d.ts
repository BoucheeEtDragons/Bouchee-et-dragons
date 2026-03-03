import React from 'react';

declare enum ThemeColor {
    PRIMARY = "bd-primary",
    SECONDARY = "bd-secondary",
    TERTIARY = "bd-tertiary"
}

type ButtonType = 'submit' | 'reset' | 'button';

interface Props$2 {
    color?: ThemeColor;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: ButtonType;
}
declare const Button: React.FC<Props$2>;

type FieldType = "text" | "email" | "password" | "number";

interface Props$1 {
    color?: ThemeColor;
    placeholder?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    name?: string;
    type?: FieldType;
}
declare const Field: React.FC<Props$1>;

interface Props {
    color?: ThemeColor;
    children?: React.ReactNode;
    htmlFor?: string;
}
declare const Label: React.FC<Props>;

export { Button, Field, Label };
