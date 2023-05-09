//PROMESAS
// una promesa es un objeto especial que nos permitira encapsular una operación la cual reconoce 2 posibles situaciones.

// hacer algo si la promesa se cumple
// hacer algo si la promesa no se cumple

// Estados de una promesa
// no todas las operaciones nos dan un resultado inmediato..

const dividirFn = (dividendo, divisor) => {
	return new Promise((resolve, reject) => {
		if (divisor === 0) {
			reject("No se puede dividir en 0");
		} else {
			resolve(dividendo / divisor);
		}
	});
};

dividirFn(10, 2)
	.then((resu) => {
		console.log("todo okkkk");
		console.log(resu);
	})
	.catch((error) => {
		console.log("nos fue mal");
		console.error(error);
	});

// una vez que hicimos la primesa utilizamos THEN si la promesa se cumple y CATCH si no se cumple.

