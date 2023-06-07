import fs from "fs";
import ProductManager from "../productManager/ProductManager.js";

class CartManager {
	constructor(path) {
		this.path = path;
		this.carts = [];
		this.id = 0;
		this.loadCart();
	}

	async loadCart() {
		try {
			if (fs.existsSync(this.path)) {
				const jsonCart = await fs.readFileSync(this.path, "utf8");
				this.carts = JSON.parse(jsonCart);
			} else {
				this.carts = [];
			}
			const newId =
				this.carts.length !== 0 ? this.carts[this.carts.length - 1].id + 1 : 1;
			this.id = newId;
		} catch (error) {
			throw new Error("Error al cargar carrito");
		}
	}

	findCartIndex = (cartId) => {
		return this.carts.findIndex((cart) => cart.id === cartId);
	};

	async saveCart() {
		try {
			fs.writeFileSync(this.path, JSON.stringify(this.carts));
		} catch (error) {
			throw new Error("Error al guardar");
		}
	}

	async addCart() {
		await this.loadCart();
		const newCart = {
			id: this.id++,
			products: [],
		};
		this.carts.push(newCart);
		await this.saveCart();
		return newCart;
	}

	async getCartByID(cartId) {
		const existingCartIndex = this.findCartIndex(cartId);
		if (existingCartIndex !== -1) {
			return this.carts[existingCartIndex];
		} else {
			return null;
		}
	}

	async addProductToCart(cartId, productId, quantity) {
		const existingCartIndex = this.findCartIndex(cartId);
		if (existingCartIndex === -1) {
			return false;
		}
		const productManager = new ProductManager("./src/productManager/products.json");
		const product = await productManager.getProductById(productId);
		if (!product) {
			return false;
		}

		const cart = this.carts[existingCartIndex];
		const existingProductIndex = cart.products.findIndex(
			(prod) => prod.id === productId
		);

		if (existingProductIndex !== -1) {
			cart.products[existingProductIndex].quantity += quantity;
		} else {
			const newProduct = {
				id: productId,
				quantity: quantity,
			};
			cart.products.push(newProduct);
		}

		await this.saveCart();
	}
}

export default CartManager;
