const persona = {
	nombre: "luciana",
	//key : value
	apellido: "Vargas",
	telefono: "3517634798",
	edad: 29,
}; // al abrir y cerrar llaves se declara desde donde comienza y termina el ambito del  objeto

console.log(persona.nombre); // con el punto accedemos a la propiedad del objeto
//console.log(persona["nombre"]); //tambien se puede acceder asi.

persona.nombre = "salome"; // aca no  se esta modificando el objeto entero, solo accede y modifica una de las propiedades del obj

console.log(persona.nombre);

// OTRO EJEMPLO
const IVA_GENERAL = 1.21;
const IVA_RED = 1.1;

const item1 = {
	precio: 15,
	cantidad: 2,
	impuestos: IVA_GENERAL,
	//cuando queremos acceder a los elementos del objeto, es conveniente usar la function normal en lugar de arrow...
	calcularTotal: function () {
		return this.precio * this.cantidad * this.impuestos;
	},
};

const item2 = {
	precio: 15,
	cantidad: 2,
	impuestos: IVA_RED,
	calcularTotal: function () {
		return this.precio * this.cantidad * this.impuestos;
	},
};


//AGREGAR UN OBJETO ... ASI SERIA UN TIPO PRIMITIVO, PERO LO QUE HACE ES COPIAR LA REFERENCIA, Y APUNTA AL MISMO OBJETO
// const item3 = item2;
// item3.precio = 23;
// console.log(item3);

const factura = {
	item1, //item1: item1, // cuando la key y el value son iguales se puede omitir la key...
	item2, //item2: item2,/
	calcularTotal: function () {
		return this.item1.calcularTotal() + this.item2.calcularTotal();
	},
};

console.log(factura.calcularTotal());
