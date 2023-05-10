const fs = require("fs");

const operaciones = async () => {
	const ruta = "./newPromise.txt";
	//escribir
	try {
		await fs.promises.writeFile(ruta, "texto con promesas");
	} catch (e) {
		throw new Error("hubo error de escritura");
	}

	//leer
	try {
		const contenido = await fs.primeses.readFile(ruta, "utf8");
		console.log(contenido);
	} catch (e) {
		throw new Error("error de escritura ");
	}
};
operaciones();
