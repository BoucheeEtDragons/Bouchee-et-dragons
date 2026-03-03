import React from "react";
import "./menu.css";
import MenuItem from "../../Molecule/MenuItem/MenuItem";
import ThemeColor from "../../lib/enum/ThemeColor.ts";

interface MenuItem {
    title: string,
    description: string,
    price: number,
}

interface Props {
    items: MenuItem[],
    color?: ThemeColor,
    children?: React.ReactNode,
}

const Menu: React.FC<Props> = ({
    items,
    color = ThemeColor.PRIMARY,
    children
}) => {
    return (
        <>
            <div className={"bd-menu"}>
                {items.map((item, index) => (
                    <MenuItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        barColor={color}
                    />
                ))}
            </div>

            <div className={"bd-menu-actions"}>
                {children}
            </div>
        </>
    )
};

export default Menu;