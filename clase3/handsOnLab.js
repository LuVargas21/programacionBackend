//calculadora positiva con promesas.

const suma = (nro1, nro2) => {
	return new Promise((resolve, reject) => {
		if (nro1 === 0 || nro2 === 0) reject("operacion  innecesaria");
		const suma = nro1 + nro2;
		if (suma < 0) reject("solo  devouelve valores positivos");
		resolve(suma);
	});
};

const resta = (nro1, nro2) => {
	return new Promise((resolve, reject) => {
		if (nro1 === 0 || nro2 === 0) reject("operacion invalida");
		const resta = nro1 + nro2;
		if (resta < 0)
			reject("la calculadora solo debe devolver valores positivos");
		resolve(resta);
	});
};

const multiplicar = (nro1, nro2) => {
	return new Promise((resolve, reject) => {
		if (nro1 === 0 || nro2 === 0) reject("solo valores +");
		const multiplicar = nro1 * nro2;
		resolve(multiplicar);
	});
};

const dividir = (nro1, nro2) => {
	return new Promise((resolve, reject) => {
		if (nro2 === 0) reject("no se puede dividir entre 0");
		const dividir = nro1 / nro2;
		resolve(dividir);
	});
};

const calculos = async () => {
	try {
		let nro1 = 5;
		let nro2 = 3;
		let resultSuma = await suma(nro1, nro2);
		console.log(resultSuma);
		let resultresta = await resta(nro1, nro2);
		console.log(resultresta);
		let resultmulti = await multiplicar(nro1, nro2);
		console.log(resultmulti);
		let resultdivi = await dividir(nro1, nro2);
		console.log(resultdivi);
	} catch (error) {
		console.log(error);
	}
};

calculos();

const calculoMejorado = async (nro1, nro2, operacion) => {
	const opreaciones = {
		suma: suma,
		resta: resta,
		multi: multiplicar,
		div: dividir,
	};
	console.log(await opreaciones[operacion](nro1, nro2));
};

calculoMejorado(2, 2, "suma");
