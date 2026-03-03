import React from "react";
import "./menuItem.css";
import PriceMenu from "../../Atom/PriceMenu/PriceMenu";
import DescriptionMenu from "../../Atom/DescriptionMenu/DescriptionMenu";
import TitleMenu from "../../Atom/TitleMenu/TitleMenu";
import { Image } from "../../Atom/Image/Image";
import Bar from "../../Atom/Bar/Bar";
import placeholderImage from "../../../assets/react.svg";

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
                <Image className="bd-menu-item-image" src={placeholderImage} alt={title} />
                <div className={"bd-menu-item-content"}>
                    <TitleMenu>
                        {title}
                    </TitleMenu>
                    <DescriptionMenu>
                        {description}
                    </DescriptionMenu>
                </div>
                <PriceMenu>
                    {price}€
                </PriceMenu>
            </div>
            <Bar/>
        </div>
    )
};

export default MenuItem;