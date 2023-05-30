// aca estoy desestructurando una de las propiedades de express y llamo solo a router
import { Router } from "express";

const router = Router();
// esto seria la simulacion de la DB
const users = [];


router.get("/", (req, res) => {
	res.send({ users });
});

router.post("/", (req, res) => {
	const user = req.body;
	users.push(user);
	res.send({ status: "succes" });
});

export default router;
