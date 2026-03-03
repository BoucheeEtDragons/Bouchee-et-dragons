import React from "react";
import "./menu.css";
import MenuItem from "../../Molecule/MenuItem/MenuItem";
import { TitleMenu } from "../..";

interface MenuItem {
    title: string,
    description: string,
    price: number,
}

interface Props {
    items: MenuItem[],
}

const Menu: React.FC<Props> = ({
    items,
}) => {
    return (
        <div className={"bd-menu"}>
            {items.map((item, index) => (
                <MenuItem key={index} title={item.title} description={item.description} price={item.price} />
            ))}
        </div>
    )
};

export default Menu;