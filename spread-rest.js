const objetoEjemplo = {
	nombre: "David",
	apellido: "Quezada",
};

// const nuevoUsuario = objetoEjemplo;

// nuevoUsuario.id = 1;

// console.log(objetoEjemplo)

const nuevoUsuario = {
	id: 1,
	// nombre: objetoEjemplo.nombre,
	// apellido: objetoEjemplo.apellido
	...objetoEjemplo, // si usa el spread operator es una forma mas eficiente de copiar elementos
};

console.log({ objetoEjemplo });
console.log({ nuevoUsuario });

const { nombre, apellido, ...edadPorPais } = objetoEjemplo;
console.log({ edadPorPais });