//hooks
import { useEffect, useState } from "react";

//axios
import axios from "axios";

//components
import Card from "../components/card/card.component";

//interface
import ICard from "../interface/ICard";

//icons
import { BiCategoryAlt, BiCoin } from "react-icons/bi";

//styles
import { CreateCard, Wrapper } from "./home.styles";

function Home() {
	const [values, setValues] = useState<any>();
	const [listGames, setListGames] = useState<ICard>();

	const refreshPage = () => {
		document.location.reload();
	};

	const handleChangeValues = (value: any) => {
		setValues((prevValue: any) => ({
			...prevValue,
			[value.target.name]: value.target.value,
		}));
	};

	const handleClickButton = async () => {
		refreshPage();
		await axios.post("http://localhost:4000/register", {
			name: values.name,
			cost: values.cost,
			category: values.category,
		});
	};

	useEffect(() => {
		const fetchCards = async () => {
			const cards = await axios.get(
				"http://localhost:4000/getCards"
			);
			setListGames(cards.data);
		};

		fetchCards();
	}, []);

	return (
		<Wrapper>
			<h1>Cadastro de Jogos</h1>
			<CreateCard>
				<input
					type="text"
					name="name"
					placeholder="Nome do jogo..."
					onChange={handleChangeValues}
				/>
				<input
					type="text"
					name="cost"
					placeholder="Valor...  "
					onChange={handleChangeValues}
				/>
				<input
					type="text"
					name="category"
					placeholder="Categoria..."
					onChange={handleChangeValues}
				/>
				<button onClick={handleClickButton}>Cadastrar</button>
			</CreateCard>
			{listGames?.map((game: ICard) => {
				return (
					<Card
						id={game.id}
						key={game.id}
						category={game.category}
						cost={game.cost}
						name={game.name}
						listCards={game.listCards}
						setListGames={game.setListGames}
					>
						
						<h1>{game.name}</h1>
						<p>
							<BiCoin />
							R$ 
							{game.cost}
						</p>
						<p>
							<BiCategoryAlt />
							{game.category}
						</p>
					</Card>
				);
			})}
		</Wrapper>
	);
}

export default Home;