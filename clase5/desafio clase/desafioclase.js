//crear un proyecto de node que genere 10000 numeros aleatorios del 1 al 20.
//crear un objeto cuyas claveas sean los num salidos y el valor asociado a cada clave sera la cantidad de veces que salio dicho numero.
// representar por consola

const obj = {};

for (let index = 0; index < 10000; index++) {
	let number = Math.floor(Math.random() * 20 + 1);
	if (!obj[number]) {
		obj[number] = 1;
	} else {
		obj[number]++;
	}

	console.log(number);
}

console.log(obj);
