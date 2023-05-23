// se creara la clase "userManager" que permitira guardar usuarios en un archivo. el usuario se recibira con una contraseña  tipo string plano
//se debe guardar la contraseña hasheada con crypto. Utilizar los modulos nativos fs y crypto. El manager debe contar con los sig metodos
//*El metodo crear usuario debe recibir un obj con los campos - nombre, apellido, nombre de usuario , contraseña .
// Debe guardar un usuario en un archivo usuarios.json recordando que la contraseña es hasheada x seguridad

// el metodo validar usuario recibira el nombre del usuario que quiero validar, seguido de la contraseña,
// debe poder leer el json previamente generado con el arreglo  de usuarios y hacer la compar de contraseñas-
// Si coinciden con el usuario y la contraseña devolver ub mensaje "loguado" , sino devolver un error si el user no existe o la ocntraseña no coincide

import UserManager from "./handsOnLab/managers/userManager.js";

const userManager = new UserManager();

const env = async () => {
	//traer todos los usuarios
	let users = await userManager.getUsers();
	//console.log(users);

	let user = {
		name: "Luciana",
		surname: "Vargas",
		user_name: "luvargas",
		password: "123456",
	};
	//crea el usuario

	await userManager.createUser(user);
	users = await userManager.getUsers();
	console.log(users);

	//validar usuario
	await userManager.validateUser("luvargas", "123456");
};
env();
