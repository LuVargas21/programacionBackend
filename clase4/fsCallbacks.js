const fs = require("fs");

fs.readFile("./hola.txt", "utf-8", (error, contenido) => {
	if (error) {
		console.log("hubo un error");
	} else {
		console.log("todo okkk");
		console.log(contenido);
	}
});

fs.writeFile("./test_async.txt", "texto de prueba", (error) => {
	if (error) {
		console.log("hubo un error ");
		console.log(error.message);
	} else {
		console.log("escritura okkk");
	}
});

console.log("deberia ejecutarme");
