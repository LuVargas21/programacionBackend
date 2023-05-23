const http = require("http");
// usa el modulo nativo http, solo recibe un callback que recibe request, response.
const server = http.createServer((req, res) => {
	res.end("hola mundo desde el backend"); // con el metodo end le puedo enviar un mensaje
});

const port = 8080

//genera el listener 
server.listen(port, () => {
	console.log(`escuchando en el puerto ${8080}`);
});
