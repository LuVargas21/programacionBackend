import express from "express";

const app = express();

// especifico la ruta.. sino es la ruta de raiz
app.get("/usuario", (req, res) => {
	res.send({
		name: "Luciana",
		surname: "Vargas",
		user_name: "luvargas",
		password: "123456",
	});
});

app.listen(8080, () => {
	console.log("hoservidor en el puerto 8080 ");
});
