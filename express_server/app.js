import express from "express";
import ProductManager from "./ProductManager.js";

const app = express();
const productManager = new ProductManager("./products.json");

app.get('/products', async(req, res) => {
	const products = await productManager.getProducts();
	res.json(products);
});

app.get("/products/:id", async(req, res) => {
	let id = req.params.id;
	const product = await productManager.getProductById(id);

	res.json(product);
});

app.post("/product", async(req, res) => {
	productManager.addProducts("titulo", "la desc", 20, "dada", 41, 3);
    productManager.addProducts("titulo", "la desc", 20, "dada", 42, 3);
    res.status(201).send("El producto se creó de forma exitosa.");
});

const port = 8080;
app.listen(port, () => {
	console.log("Express server - port 8080");
});
