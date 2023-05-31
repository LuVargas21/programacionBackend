import express from "express";
import ProductManager from "./ProductManager.js";

const app = express();
const productManager = new ProductManager("./products.json");

app.get("/products", async (req, res) => {
	try {
		const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
		const products = await productManager.getProducts(limit);
		res.json(products);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error de servidor");
	}
});

app.get("/products/:id", async (req, res) => {
	try {
		let id = req.params.id;
		const product = await productManager.getProductById(id);
		res.json(product);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error de servidor");
	}
});

app.post("/product", async (req, res) => {
	try {
		productManager.addProducts(
			"Toalla",
			"Medidas 0.70x50cm",
			45,
			"algo",
			42,
			9
		);
		productManager.addProducts("Auricular", "con cable", 15, "algo", 130, 35);
		res.status(201).send("El producto se creó de forma exitosa.");
	} catch (error) {
		console.log(error);
		res.status(404).send("Producto no encontrado");
	}
});

const port = 8080;
app.listen(port, () => {
	console.log("Express server - port 8080");
});
