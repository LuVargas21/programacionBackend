// Operaciones sincronicas y asincronicas

//cuando tenemos mas que una operacion no es suficiente con una promesa... y se necesita de un entorno completo para resolver las operaciones.

//.then sirve para encadenar  las promesas pero obliga a trabajar todo dentro de un mismo scope.

// el problema de then y catch es el encapsulamiento excesivo, y limita el acceso a resultados, variables, etc

// al declarar la funcion async, todo el cuerpo de la funcion debera ejecutarse de manera asincronica

// await servirá para esperar por el resultado de la promesa y extraer el resultado

// encerrrar el cuerpo en un bloque try {} y catch {}

//EJEMPLO CON LA MISMA FUNCION DE DIVIDIR ANTERIOR
const dividirFn = (dividendo, divisor) => {
	return new Promise((resolve, reject) => {
		if (divisor === 0) {
			reject("No se puede dividir en 0");
		} else {
			resolve(dividendo / divisor);
		}
	});
};

const divisionAsync = async () => {
	try {
		const division = await dividirFn(4, 2);
		console.log(division);
	} catch (error) {
		console.log("hubo un problema", error);
	}
};

divisionAsync();
