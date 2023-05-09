const objetoEjemplo = {
	id: 1,
	nombre: "David",
	apellido: "Quezada",
	pais: "chile",
	saludo: "hola",
};

// console.log(Object.keys(objetoEjemplo));  //las key van a devoler lo que esta a la izquierda
// console.log(Object.values(objetoEjemplo)); // los values van a devolver los valores
// console.log(Object.entries(objetoEjemplo)); // entries devuelve el objeto completo

// si quisiera sacar el promedio de notas
const notas = {
	David: 10,
	Andres: 8,
	Carolina: 9,
	Pedro: 6,
};

suma = 0;
//La forma no tan buena o recomendable de resolver esto seria:
Object.keys(notas).forEach((alumno) => {
	suma += notas[alumno];
});

const promedio = suma / Object.keys(notas).length;
console.log(promedio);

//una mejor forma de resolverlo seria

// va a comenzar en 0, va a ir a la primer nota, y lo va a sumar,  luego el inicial pasa a ser 10
//pasa a la siguiente nota y la suma a 10, y asi con cada uno.
const promedioNuevo =
	Object.values(notas).reduce((inicial, actual) => inicial + actual, 0) /
	Object.values(notas).length;

console.log({ promedioNuevo });
