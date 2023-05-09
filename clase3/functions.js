//map

// como hacerlo sin map

const numeros = [1, 2, 3, 4, 5, 6];

const output = [];

for (let i = 0; i < numeros.length; i++) {
	output[i] = numeros[i] * 2;
}
console.log({ output });

//como hacerlo con map

const resultadoConMap = numeros.map((numero) => numero * 2);
console.log({ outputConMap: resultadoConMap });

// tambien puedo usar una funcion como parametro del map
function funcionDefinida(num) {
	return num * 2;
}
console.log({ outputFcn: numeros.map(funcionDefinida) });

// callback --> es una funcion pasada como parametro.

// En el caso a continuación, no sabe lo que hace la función, simplemente la ejecuta... Ojo! con lo que paso como callback porque se me va a romper todo el codiggg

const sumar = (n1, n2) => n1 + n2;
const resta = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 / n2;

const realizarOperacion = (n, n2, callback) => {
	console.log("voy a hacer algo no se que es");
	let resultado = callback(n, n2);
	//no sabe que hace.... solo ejecuta la funcion
	console.log(`el resultado de la operación es... ${resultado}`);
};

realizarOperacion(10, 5, sumar);

// nested callbacks.
// permiten ir ejecutando callbacks de manera anidada.. se ejecutan una detras de la otra.
// Se trata de evitar este tipo de callback...
