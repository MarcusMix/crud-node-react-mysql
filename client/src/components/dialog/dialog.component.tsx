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

const FormDialog = (props: IForm) => {
	const [editValues, setEditValues] = React.useState({
		id: props.id,
		name: props.name,
		category: props.category,
		cost: props.cost,
	});

	const handleClose = () => {
		props.setOpen!(false);
	};

	const handleChangeValues = (value: any) => {
		setEditValues((prevValues: any) => ({
			...prevValues,
			[value.target.id]: value.target.value,
		}));
	};

	return (
		<Dialog open={props.open!} onClose={handleClose}>
			<DialogTitle>Editar</DialogTitle>
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
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancelar</Button>
				<Button onClick={handleClose}>Excluir</Button>
				<Button onClick={handleClose}>Salvar</Button>
			</DialogActions>
		</Dialog>
	);
};

export default FormDialog;
