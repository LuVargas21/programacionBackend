// Challenges para practicar:🤓🤩
// 1. Defina 2 variables y asigne un valor del tipo number a elección. Y muestre por consola.
// 2.Sume las variables del enunciado y asigne los resultados a una tercera. Muestre por consola.
// 3. Crear un script que solicite al usuario el nombre de ciudades y almacenarlas en un arreglo.Luego realizar las siguientes acciones:
// 1_ Mostrar la longitud del arreglo
// 2_ Mostrar en consola los ítem de la posición primera, tercera y última.
// 3_ Añade en la última posición la ciudad de París.
// 4_ Sustituye el elemento de la segunda posición por la ciudad de Barcelona

// 4. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let number1 = 13;
let number2 = 25;

let number3 = number1 + number2;

console.log(number3);

let ciudades = [];
let ciudad;

while (ciudad !== null) {
	let ciudad = prompt("Ingresar una ciudad: ");
	if (ciudad !== null) {
		ciudades.push(ciudad);
	}
}

console.log(ciudades);
console.log("la longitud del arreglo es" + ciudades.length);
console.log("la primera ciudad es" + ciudades[0]);
console.log("la tercera ciudad es" + ciudades[2]);


//Desafio 4. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.