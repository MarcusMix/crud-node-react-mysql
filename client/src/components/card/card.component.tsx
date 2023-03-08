//react
import { FC } from "react";

//interface
import ICard from "../../interface/ICard";

//styles
import { CardStyled } from "./card.styles";

const Card: FC<ICard> = ({ category, cost, name, children }) => {
	return (
         <CardStyled>
            {children}
         </CardStyled>
    )
};

export default Card;
