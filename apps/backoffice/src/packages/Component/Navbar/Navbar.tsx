import React from "react";
import Link from "../../Atom/Link/Link";
import Button from "../../Atom/Button/Button";
import ThemeColor from "../../lib/enum/ThemeColor";
import "./navbar.css";

interface Props {
    className?: string;
}

const Navbar: React.FC<Props> = ({ className = "" }) => {
    return (
        <nav className={`bd-navbar ${className}`}>
            <span className="bd-navbar__title">🐉 Bouchée & Dragon</span>
            <div className="bd-navbar__links">
                <Link href="/menu" color={ThemeColor.WHITE} underline>
                    Menu
                </Link>
                <Link href="/login" color={ThemeColor.WHITE} underline>
                    Connexion
                </Link>
            </div>
            <Button color={ThemeColor.SECONDARY}>
                Commander
            </Button>
        </nav>
    );
};

export default Navbar;
