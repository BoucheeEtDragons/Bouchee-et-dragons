import React from "react";
import "./menu.css";
import MenuItem from "../../Molecule/MenuItem/MenuItem";

interface MenuItem {
    title: string,
    description: string,
    price: number,
}

interface Props {
    items: MenuItem[],
    children?: React.ReactNode,
}

const Menu: React.FC<Props> = ({
    items,
    children
}) => {
    return (
        <>
            <div className={"bd-menu"}>
                {items.map((item, index) => (
                    <MenuItem key={index} title={item.title} description={item.description} price={item.price} />
                ))}
            </div>

            <div className={"bd-menu-actions"}>
                {children}
            </div>
        </>
    )
};

export default Menu;