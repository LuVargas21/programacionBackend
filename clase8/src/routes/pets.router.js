// aca estoy desestructurando una de las propiedades de express y llamo solo a router
import { Router } from "express";

const router = Router();
// esto seria la simulacion de la DB
const pets = [];


router.get("/", (req, res) => {
	res.send({ pets });
});

router.post("/", (req, res) => {
	const pets = req.body;
	pets.push(pets);
	res.send({ status: "succes" });
});

export default router;
// al exportarlo con el nombre x default  "router", al momento de usarlo en el app.js,
//puedo ponerle cualquier nombre, ejemplo usersRouter  