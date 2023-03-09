//react
import { FC, useState } from "react";

//interface
import ICard from "../../interface/ICard";

//styles
import { CardStyled } from "./card.styles";

//components
import FormDialog from "../dialog/dialog.component";

//icons
import { BiCategoryAlt, BiCoin } from "react-icons/bi";
import { Toaster } from "react-hot-toast";

const Card: FC<ICard> = ({
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
			<CardStyled onClick={handleClickCard}>
				<Toaster />
				<h1>{name}</h1>
				<p>
					<BiCoin />
					R$
					{cost}
				</p>
				<p>
					<BiCategoryAlt />
					{category}
				</p>
			</CardStyled>
		</>
	);
};

export default Card;
