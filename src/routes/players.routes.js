import { Router } from "express";
import PlayerManager from "../managers/players.manager.js";
import uploader from "../utils/multer.js";

const router = Router();

const playerManager = new PlayerManager();

router.get("/", async (req, res) => {
	const players = await playerManager.getAllPlayers();

	res.json({ message: "get all methods", players });
});

router.get("/:id", async (req, res) => {
	const id = req.params.id;
	res.json({ message: "get all methods" });
});

router.post("/", uploader.single("image"), async (req, res) => {
	const bodyPlayer = req.body;
	const file = req.file;
	bodyPlayer.image = `http://localhost:5000/public/uploads/${file.filename}`;

	const newPlayer = await playerManager.createPlayer(bodyPlayer);
	res.json({ message: "get all methods", player: newPlayer });
});

router.put("/:id", async (req, res) => {
	const id = req.params.id;
	const bodyPlayer = req.body;
	const pUpdated = await playerManager.updatePlayer(id, bodyPlayer);
	res.json({ message: "get all methods", playerUpdated: pUpdated });
});

router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	const pDeleted = await playerManager.deletePlayerByID(id);
	res.json({ message: "get all methods", playerDeleted: pDeleted });
});

export default router;
