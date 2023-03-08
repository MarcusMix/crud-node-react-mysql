//server express
const express = require("express");
const app = express();
const port = 4000;

//cors
const cors = require("cors");

//mysql
const mysql = require("mysql");
const db = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "",
	database: "crudgames",
});

app.use(cors());
app.use(express.json());

//mandar dados para o db
app.post("/register", (req, res) => {
	const name = req.body.name;
	const cost = req.body.cost;
	const category = req.body.category;

	const query = "INSERT INTO games (name, cost, category) VALUES (?, ?, ?)";

	db.query(query, [name, cost, category], (error, result) => {
		if (error) {
			console.log(error);
			return;
		}

		if (result) {
			console.log("Dados mandados!");
		}
	});
});

app.get("/getCards", (req, res) => {
	const query = "SELECT * FROM games";

	db.query(query, (error, result) => {
		if (error) {
			console.log(error);
			return;
		}

		if (result) {
			res.send(result);
			console.log("getCards mandados!");
		}
	});
});

app.listen(port, () => {
	console.log("app rodando na porta 4000...");
});
