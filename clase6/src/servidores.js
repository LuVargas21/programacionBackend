const http = require("http");

// usa el modulo nativo http, solo recibe un callback que recibe request, response.
const server = http.createServer((request, response) => {
	response.end("hola bebe, este es Mi primer hola mundo desde el backend"); // con el metodo end le puedo enviar un mensaje
});

const port = 8000;
server.listen(port, () => {
	console.log(`servidor escuchando en el puerto ${port}`);
});
