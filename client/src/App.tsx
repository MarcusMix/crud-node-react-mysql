import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

//components
import Card from "./components/card/card.component";

function App() {
	const [values, setValues] = useState<any>();
	const [listGames, setListGames] = useState<any>();

	const handleChangeValues = (value: any) => {
		setValues((prevValue: any) => ({
			...prevValue,
			[value.target.name]: value.target.value,
		}));
	};

	const handleClickButton = async () => {
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

	console.log(listGames);
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
			{listGames?.map((game: any) => {
				return <Card/>
			})}
		</>
	);
}

export default App;
