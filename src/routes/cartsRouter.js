import { Router } from "express";
import CartManager from "../cartManager/CartsManager.js";
const router = Router();

const cartManager = new CartManager("./src/cartManager/carts.json");

router.post("/", async (req, res) => {
	try {
		const newCart = await cartManager.addCart();
		res.status(201).send(newCart);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al crear el carrito");
	}
});

router.get("/:cid", async (req, res) => {
	try {
		const cartId = parseInt(req.params.cid);
		const cart = await cartManager.getCartByID(cartId);
		if (!cart) {
			res.status(404).send("Carrito no encontrado");
		} else {
			res.status(200).json(cart.products);
		}
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al obtener el carrito");
	}
});

router.post("/:cid/product/:pid", async (req, res) => {
	try {
		const cartId = parseInt(req.params.cid);
		const productId = parseInt(req.params.pid);
		const cart = await cartManager.addProductToCart(cartId, productId);
		res.status(200).send(cart);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error al agregar el producto al carrito");
	}
});

export default router;
