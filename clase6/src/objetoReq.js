//req.params
import express from "express";

const app = express();

app.get("/un-patrametro/:nombre", (req, res) => {
	console.log(req.params.nombre);
	res.send(`hola, ${req.params.nombre}`);
});

app.listen(8080, () => console.log("listening on 8080"));
