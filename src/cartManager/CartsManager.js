import fs from "fs";
import ProductManager from "../productManager/ProductManager.js";
class CartManager {
	constructor(path) {
		this.path = path;
		this.carts = [];
		this.id = 0;
	}

	async loadCart() {
		if (fs.existsSync(this.path)) {
			const jsonCart = await fs.readFileSync(this.path, "utf8");
			this.carts = JSON.parse(jsonCart);
		} else {
			this.carts = [];
		}
		const newId =
			this.carts.length != 0 ? this.carts[this.carts.length - 1].id + 1 : 1;
		this.carts.id = newId;
	}

	findCartIndex = (cartId) => {
		return carts.findIndex((cart) => cart.id === cartId);
	};

	async saveCart() {
		await fs.writeFileSync(this.path, JSON.stringify(this.carts));
	}

	async addCart() {
		await this.loadCart();
		const newCart = {
			id: this.id++,
			products: [],
		};
		carts.push(newCart);
		await this.saveCart();
		return newCart;
	}

	async getCartByID(cartId) {
		const existingCartIndex = this.findCartIndex(cartId);
		if (existingCartIndex !== -1) {
			return carts[existingCartIndex];
		} else {
			false;
		}
	}

	async addProductToCart(cartId, productId, quantity) {
		const existingCartIndex = findCartIndex(cartId);
		if (existingCartIndex === -1) {
			return false;
		}
		//buscas el producto en productManager
		const product = ProductManager.getProductById(productId);
		if (!product) {
			return false;
		}

		const cart = this.carts[existingCartIndex];
		const existingProductIndex = cart.products.findIndex(
			(prod) => prod.id === productId
		);

		if (existingProductIndex !== -1) {
			// El producto ya está en el carrito, actualiza la cantidad
			cart.items[existingProductIndex].quantity += quantity;
		} else {
			// Agrega el nuevo producto al carrito
			const newProduct = {
				id: productId,
				quantity: quantity,
			};
			carts.products.push(newProduct);
		}
		await this.saveCart();
	}
}
export default CartManager;
