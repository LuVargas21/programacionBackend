const valor = 1;

const resultado = valor || "defecto";
console.log({ resultado });

// en este caso son falsey values  string vacio, un 0, null, undefined

const valor2 = 1;

const resultado2 = valor2 ?? "defecto";
console.log({ resultado2 });

//nullish operator  es el ??

//variables privadas.

class Ejemplo {
	#propiedad = "papa";
	propiedad2 = "banana";

	get mostrarPropiedad() {
		return this.#propiedad;
	}
}
const ejemplo = new Ejemplo();

console.log(ejemplo.propiedad2);
console.log(ejemplo.mostrarPropiedad);

// si se agrega el # adelante de la propiedad no se puede acceder desde afuera de la clase
// pero si se puede hacer a traves de una funcion como en este caso mostrarPropiedad
