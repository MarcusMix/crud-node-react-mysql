import * as React from "react";

//material
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

//interface
import IForm from "../../interface/IForm";

//axios
import axios from "axios";

//toaster notification
import toast from "react-hot-toast";
import { ButtonCancel, ButtonDelete, ButtonStyled, Wrapper } from "./dialog.styles";

const FormDialog = (props: IForm) => {
	const [editValues, setEditValues] = React.useState({
		id: props.id,
		name: props.name,
		category: props.category,
		cost: props.cost,
	});

	const refreshPage = () => {
		document.location.reload();
	};

	const handleEditGames = () => {
		toast("Jogo editado com sucesso!", {
			icon: "✍",
		});
		axios.put("http://localhost:4000/edit", {
			id: editValues.id,
			name: editValues.name,
			category: editValues.category,
			cost: editValues.cost,
		});

		handleClose();
		refreshPage();
	};

	const handleClose = () => {
		props.setOpen!(false);
	};

	const handleChangeValues = (value: any) => {
		setEditValues((prevValues: any) => ({
			...prevValues,
			[value.target.id]: value.target.value,
		}));
	};

	const handleDeleteGames = () => {
		toast("Jogo deletado com sucesso!", {
			icon: "❌",
		});
		axios.delete(`http://localhost:4000/delete/${editValues.id}`);
		handleClose();
		refreshPage();
	};

	return (
		<Wrapper>
			<Dialog open={props.open!} onClose={handleClose}>
				<DialogTitle fontFamily={"Poppins"}>Editar</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Nome do jogo"
						defaultValue={props.name}
						onChange={handleChangeValues}
						type="text"
						fullWidth
						variant="standard"
						color="secondary"
					/>
					<TextField
						autoFocus
						margin="dense"
						id="cost"
						label="Preço"
						defaultValue={props.cost}
						onChange={handleChangeValues}
						type="text"
						fullWidth
						color="secondary"
						variant="standard"
					/>
					<TextField
						autoFocus
						margin="dense"
						id="category"
						label="Categoria do jogo"
						defaultValue={props.category}
						onChange={handleChangeValues}
						type="text"
						fullWidth
						variant="standard"
						color="secondary"
					/>
				</DialogContent>
				<DialogActions>
					<ButtonCancel
						color="secondary"
						onClick={handleClose}
					>
						Cancelar
					</ButtonCancel>
					<ButtonDelete
						color="secondary"
						onClick={handleDeleteGames}
					>
						Excluir
					</ButtonDelete>
					<ButtonStyled
						color="secondary"
						onClick={handleEditGames}
					>
						Salvar
					</ButtonStyled>
				</DialogActions>
			</Dialog>
		</Wrapper>
	);
};

export default FormDialog;
