//debeia tener instalado el express-

import express from "express";

// const app = express();

// app.get("/saludo", (request, response) => {
// 	// recibe 2 parametros, una ruta y los parametros de request response-
// 	request.send("hola mundo desde express :)");
// });
// app.listen(8080);

// ejemplo de clases.... desafio 1

const app = express();

app.get("/bienvenida", (req, res) => {
	res.send(
		'<h1 style= "color:blue";> ¡Bienvendo al servidor con express! </h1>'
	);
});

app.get("/usuario", (req, res) => {
	res.send({
		name: "lu",
		surname: "vargas",
		age: 28,
		mail: "luciana@mail.com",
	});
});

app.listen(8080, () => console.log("listening on 8080"));


// comandos npm init -y; npm i express; 