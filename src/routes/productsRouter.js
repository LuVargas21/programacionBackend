import { Router } from "express";
import ProductManager from "../productManager/ProductManager.js";

const router = Router();

const productManager = new ProductManager("./products.json");

router.get("/", async (req, res) => {
	try {
		const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
		const products = await productManager.getProducts(limit);
		res.json(products);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error de servidor");
	}
});

router.get("/products/:id", async (req, res) => {
	try {
		let id = req.params.id;
		const product = await productManager.getProductById(id);
		res.json(product);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error de servidor");
	}
});

router.post("/product", async (req, res) => {
	try {
		//const { title, description, price, thumbnail, code, stock, category } =
			req.body;
		await productManager.addProducts(
			"Auricular",
			"con cable",
			15,
			"algo",
			130,
			35,
			"electro"
		);
		res.status(201).send("El producto se creó de forma exitosa.");
	} catch (error) {
		console.log(error);
		res.status(404).send("Error al crear producto");
	}
});

export default router;
