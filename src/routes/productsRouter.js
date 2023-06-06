import { Router } from "express";
import ProductManager from "../productManager/ProductManager.js";
import Product from "../productManager/Product.js";

const router = Router();

const productManager = new ProductManager(
	"C:\\Users\\Luciana\\Documents\\GitHub\\programacionBackend\\src\\productManager\\products.json"
);

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

router.get("/:id", async (req, res) => {
	try {
		let id = req.params.id;
		const product = await productManager.getProductById(id);
		if (!product) {
			res.status(404).send("Producto no encontrado");
		} else {
			res.json(product);
		}
	} catch (error) {
		console.log(error);
		res.status(500).send("Error de servidor");
	}
});

router.post("/", async (req, res) => {
	try {
		const { title, description, price, thumbnail, code, stock, category, status} =
			req.body;
		const resp = await productManager.addProducts(
			title,
			description,
			price,
			thumbnail,
			code,
			stock,
			category, 
			status
		
		);
		console.log("paso");
		res.status(201).send(resp);
	} catch (error) {
		console.log(error);
		res.status(404).send("Error al crear producto");
	}
});

router.put("/", async (req, res) => {
	try {
		const { title, description, price, thumbnail, code, stock, category, status, id} =
			req.body;
		const product = new Product();
		product.title = title;
		product.description = description;
		product.price = price;
		product.thumbnail = thumbnail;
		product.code = code;
		product.stock = stock;
		product.category = category;
		product.status = status;
		product.id = id;
			
		const productUpdated = await productManager.updateProduct(product);
		if (!productUpdated) {
			res.status(404).send("Producto no encontrado");
		} else {
			res.json(productUpdated);
		}

	} catch (error) {
		console.log(error, "error en el servidor");
		res.status(500).send("error al intentar modificar el producto");
	}
});

router.delete("/:id", async (req, res) => {
	try {
		let id = req.params.id;
		const product = await productManager.deleteProduct(id);
		if (!product) {
			res.status(404).send("Producto no encontrado");
		} else {
			res.json(product);
		}
	} catch (error) {
		console.log(error, "error al eliminar ");
		res.status(500).send("error de servidor");
	}
});

export default router;
