import React, { useState } from "react";
import "./loginForm.css";
import Input from "../../Molecule/Input/Input";
import Button from "../../Atom/Button/Button";
import Link from "../../Atom/Link/Link";
import ThemeColor from "../../lib/enum/ThemeColor";

interface Props {
    onSubmit?: (email: string, password: string) => void;
}

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(email, password);
    };

    return (
        <form className="bd-login-form" onSubmit={handleSubmit}>
            <div className="bd-login-form__fields">
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Entrez votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    labelColor={ThemeColor.TERTIARY}
                    fieldColor={ThemeColor.PRIMARY}
                />
                <Input
                    label="Mot de passe"
                    name="password"
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    labelColor={ThemeColor.TERTIARY}
                    fieldColor={ThemeColor.PRIMARY}
                />
            </div>
            <div className="bd-login-form__forgot">
                <Link href="/forgot-password" color={ThemeColor.PRIMARY} underline>
                    Mot de passe oublié ?
                </Link>
            </div>
            <div className="bd-login-form__submit">
                <Button type="submit" color={ThemeColor.PRIMARY}>
                    Se connecter
                </Button>
            </div>
        </form>
    );
};

export default LoginForm;
