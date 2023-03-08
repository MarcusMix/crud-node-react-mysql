//react
import { FC, useState } from "react";

//interface
import ICard from "../../interface/ICard";

//styles
import { CardStyled } from "./card.styles";

//components
import FormDialog from "../dialog/dialog.component";

const Card: FC<ICard> = ({
	children,
	name,
	category,
	cost,
	listCards,
	setListGames,
	id,
}) => {
	const [open, setOpen] = useState(false);

	const handleClickCard = () => {
		setOpen(true);
	};

	return (
		<>
			<FormDialog
				open={open}
				setOpen={setOpen}
				name={name}
				category={category}
				cost={cost}
				listCards={listCards}
				setListGames={setListGames}
				id={id}
			/>
			<CardStyled onClick={handleClickCard}>{children}</CardStyled>
		</>
	);
};

export default Card;
