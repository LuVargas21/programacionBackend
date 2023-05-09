//Dados los objetos indicados en la siguiente diapositiva:
//Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
//Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)

const objetos = [
	{
		manzanas: 3,
		peras: 2,
		carne: 1,
		jugos: 5,
		dulces: 2,
	},
	{
		manzanas: 1,
		sandias: 1,
		huevos: 6,
		jugos: 1,
		panes: 4,
	},
];

const nuevaLista = [];
suma = 0;
objetos.forEach((objeto) => {
	const keys = Object.keys(objeto);
	keys.forEach((key) => {
		if (!nuevaLista.includes(key)) nuevaLista.push(key);
	});

	suma += Object.values(objeto).reduce((a, b) => a + b, 0);
});

console.log(nuevaLista);

console.log(suma);
