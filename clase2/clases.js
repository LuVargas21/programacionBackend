class Curso {
	constructor(titulo, dificultad) {
		// con this nos estanos refiriendo al objeto  y a los valores como metodo o atributo que tengo en el objeto
		this.titulo = titulo;
		this._dificultad = dificultad; // cuando se agrega un _  delante de la variable, se indica que no se deberia modificar.. solo a modo de BP
		// porque esa variable luego tendra un getter o setter

		// aca tambien puedo crear mas atributos x ejemplo... es una buea practica que todos los atributos se definan en el contstructor
		this.lecciones = [];
	}
	//HAY ATRIBUTOS QUE SE PUEDEN MOFIDICAR  ------>>>> GETTER Y SETTERS <<<<<-------
	get dificultad() {
		return this._dificultad;
	}

	set dificultad(nuevaDificultad) {
		this.dificultad = nuevaDificultad;
	}

	//hay metodos que solo son para la clase, independientemente de los objetos... y se declara con static

	static BASE_URL = "hola.com/curso/..etc";
	static saludar() {
		console.log("SALUDOSSS");
	}

	// tambien se puede añadir metodos
	agregarLeccion(leccion) {
		this.lecciones.push(leccion);
	}

	eliminarUltimaLeccion(leccion) {
		this.lecciones.pop(); // elimina SIEMPRE  el  ultimo elemento y x eso no es necesario  agregarle unn parametro
	}
}

const cursoJS = new Curso("JS", 1); // este new curso lo que hace es invocar al constructor de la clase con sus 2 parametros "titulo y dificultad"
const cursoTS = new Curso("TS", 3);

cursoJS.agregarLeccion("Intro a JS"); // aqui voy agreando informacion al array que en un principio que estaba vacio
cursoJS.agregarLeccion("Variables");
cursoJS.agregarLeccion("Tipo de datos");

//tambien se puede acceder a la propiedad de un objeto con la sintaxis de punto

//cursoJS.dificultad = 1;

// MALA PRACTICAAAA PORQUE NO ESTA DECLARADO ANTERIORMENTE... SE PUEDE HACER, PERO NO ES LO RECOMENDABLE
//NO MODIFICAR METODOS YA EXISTENTES, NI AÑADIR METODOS EN CUALQUIER PARTE.
//cursoJS.loquesea = "lo que sea";

Curso.saludar();
console.log(Curso.BASE_URL);
