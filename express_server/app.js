import express from "express";
import ProductManager from "./challenge2.js";

const app = express();
const productManager = new ProductManager();

app.get("/products", (req, res) => {
	res.send("Hello from express server");
});

const port = 8080;
app.listen(port, () => {
	console.log("Express server - port 8080");
});
