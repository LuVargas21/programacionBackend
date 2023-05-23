import fs from "fs";
import crypto from "crypto";

const path = "./clase5/handsOnLab/files/Users.json";

export default class UserManager {
	getUsers = async () => {
		//existe el archivo??
		if (fs.existsSync(path)) {
			console.log(path + "lo leee");
			const data = await fs.promises.readFile(path, "utf-8");
			const users = JSON.parse(data);
			return users;
		} else {
			return []; // si no existe crea o devuelve un array vacio y luego lo comienza a leer
		}
	};
	createUser = async (user) => {
		const users = await this.getUsers();
		//el salt hashea la contraseña
		user.salt = crypto.randomBytes(128).toString("base64");
		//creacion de la contraseña hasheada
		user.password = crypto
			.createHmac("sha256", user.salt)
			.update(user.password)
			.digest("hex");

		users.push(user);
		await fs.promises.writeFile(path, JSON.stringify(users, null, "\t"));
	};
	validateUser = async (userName, password) => {
		const users = await this.getUsers();
		const userIndex = users.findIndex((u) => u.user_name === userName);

		if (userIndex === -1) {
			console.log("User doesn't exist");
			return;
		}
		const user = users[userIndex];

		const newHash = crypto
			.createHmac("sha256", user.salt)
			.update(password)
			.digest("hex");

		if (newHash === user.password) {
			return "logged in";
		} else {
			throw new Error("Incorrect password");
		}
	};
}
