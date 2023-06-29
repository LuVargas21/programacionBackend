import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import displayRoutes from "express-routemap";
import PlayerRoutes from "./routes/players.routes.js";
import __dirname from "./utils/utils.js";

const PORT = 5000;
const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "mongoDBPlayer";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/static", express.static(`${__dirname}/public`))

const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const connection = mongoose
	.connect(MONGO_URL)
	.then((conn) => {
		console.log(
			`🚀 ~ file: app.js:18 ~ CONECT WITH MONGO URL: ${MONGO_URL.slice(
				0,
				14
			)} ****`
		);
	})
	.catch((err) => {
		console.log("🚀 ~ file: app.js:25 ~ err:", err);
	});

app.use("/api/alive", (req, res) => {
	res.json({ ok: true, message: "todo ok" });
});

app.use("/api/players", PlayerRoutes);

app.listen(PORT, () => {
	displayRoutes(app);
	console.log(`****** ENVIROMENT, ${PORT} ${process.env.NODE_ENV} ******`);
});
