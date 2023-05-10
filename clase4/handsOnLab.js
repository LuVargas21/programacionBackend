const { error } = require("console");
const fs = require("fs");
const fecha = new Date().toLocaleDateString();
const hora = new Date().toLocaleDateString();

fs.writeFile("./fyh.txt", `fecha: ${fecha} ... hora: ${hora}`, (error) => {
	if (error) return console.log(error);
	fs.readFile("fyh.txt", "utf-8", (error, result) => {
		if (error) return console.log(error);
		console.log(result);
	});
});
