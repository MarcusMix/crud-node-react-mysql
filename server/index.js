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

// app.get("/", (req, res) => {
// 	const query =
// 		"INSERT INTO games (name, cost, category) VALUES ('Far Cry', '111', 'Ação')";

// 	db.query(query, (req, res), (error) => {
//         if(error) {
//             console.log(error)
//         }
//     });
// 	app.render("../client/index.html");
// });

app.listen(port, () => {
	console.log("app rodando na porta 4000...");
});
