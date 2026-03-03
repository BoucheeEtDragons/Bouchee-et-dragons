import React from "react";
import "./menuItem.css";
import PriceMenu from "../../Atom/PriceMenu/PriceMenu";
import DescriptionMenu from "../../Atom/DescriptionMenu/DescriptionMenu";
import TitleMenu from "../../Atom/TitleMenu/TitleMenu";
import { Image } from "../../Atom/Image/Image";
import Bar from "../../Atom/Bar/Bar";
import placeholderImage from "../../../assets/burger_classic.jpeg";
import ThemeColor from "../../lib/enum/ThemeColor.ts";

interface Props {
    title: string,
    description: string,
    price: number,
    barColor?: ThemeColor,
}

const MenuItem: React.FC<Props> = ({
    title,
    description,
    price,
    barColor = ThemeColor.PRIMARY,
}) => {
    return (
        <div className={"bd-menu-item"}>
            <div className={"bd-menu-item-header"}>
                <Image
                    className="bd-menu-item-image"
                    src={placeholderImage}
                    alt={title}
                    width={80}
                    height={80}
                />
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
            <Bar height={3} color={barColor}/>
        </div>
    )
};

export default MenuItem;