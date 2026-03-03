import React from "react";
import "./menu.css";
import PriceMenu from "../../Atom/PriceMenu/PriceMenu";
import DescriptionMenu from "../../Atom/DescriptionMenu/DescriptionMenu";
import TitleMenu from "../../Atom/TitleMenu/TitleMenu";

interface Props {
    title: string,
    description: string,
    price: number,
}

const MenuItem: React.FC<Props> = ({
    title,
    description,
    price,
}) => {
    return (
        <div className={"bd-menu-item"}>
            <div className={"bd-menu-item-header"}>
                <TitleMenu>
                    {title}
                </TitleMenu>
                <PriceMenu>
                    {price}€
                </PriceMenu>
            </div>
            <DescriptionMenu>
                {description}
            </DescriptionMenu>
            
        </div>
    )
};

export default MenuItem;