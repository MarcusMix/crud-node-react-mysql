import { useEffect, useState } from "react";
import "./App.css";

//axios
import axios from "axios";

//components
import Card from "./components/card/card.component";

//interface
import ICard from "./interface/ICard";

function App() {
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
		<>
			<h1>Shop</h1>
			<div className="card">
				<input
					type="text"
					name="name"
					placeholder="Nome...  "
					onChange={handleChangeValues}
				/>
				<input
					type="text"
					name="cost"
					placeholder="Preço...  "
					onChange={handleChangeValues}
				/>
				<input
					type="text"
					name="category"
					placeholder="Categoria..."
					onChange={handleChangeValues}
				/>
				<button onClick={handleClickButton}>Cadastrar</button>
			</div>
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
						<p>{game.cost}</p>
						<p>{game.category}</p>
					</Card>
				);
			})}
		</>
	);
}

export default App;
