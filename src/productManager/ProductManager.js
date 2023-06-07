import fs from "fs";
import Product from "./Product.js";

class ProductManager {
	constructor(path) {
		this.path = path;
		this.products = [];
		this.loadProducts();
	}

	async loadProducts() {
		try {
			const jsonProducts = fs.readFileSync(this.path, "utf8");
			this.products = JSON.parse(jsonProducts);
		} catch (error) {
			throw new Error("Error al cargar los productos");
		}
	}

	validarCamposNulo(
		title,
		description,
		price,
		thumbnail,
		code,
		stock,
		category
	) {
		if (
			!title ||
			!description ||
			!price ||
			!thumbnail ||
			!code ||
			!stock ||
			!category
		) {
			throw new Error("Debe completar todos los campos para continuar");
		}
	}

	async addProducts(
		title,
		description,
		price,
		thumbnail,
		code,
		stock,
		category,
		status
	) {
		try {
			console.log("paso23");
			for (const product of this.products) {
				if (product.code === code) {
					console.log("error almacenando producto");
					throw new Error("el codigo " + code + " esta repetido");
				}
			}

			const product = new Product();
			product.title = title;
			product.description = description;
			product.price = price;
			product.thumbnail = thumbnail;
			product.code = code;
			product.stock = stock;
			product.category = category;
			product.status = status;
			console.log("paso24");
			console.log("paso24", product);

			const newId =
				this.products.length != 0
					? this.products[this.products.length - 1].id + 1
					: 1;
			product.id = newId;
			console.log("paso2");

			this.products.push(product);
			return await this.saveProducts();
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async saveProducts() {
		try {
			const jsonProducts = JSON.stringify(this.products, null, "\t");
			console.log("jsonProducts", jsonProducts);
			fs.writeFileSync(this.path, jsonProducts, "utf-8");
			console.log("this.path", this.path);

			return "Se guardo de forma exitosa4";
		} catch (error) {
			throw new Error("Error al guardar");
		}
	}

	async getProducts(limit) {
		if (limit) {
			return this.products.slice(0, limit);
		} else {
			return this.products;
		}
	}

	async getProductById(id) {
		const idParam = parseInt(id, 10);
		return this.products.find((product) => product.id === idParam);
	}

	async updateProductByField(productId, updateField) {
		const productUpdate = this.products.findIndex(
			(product) => product.id === productId
		);

		if (productUpdate !== -1) {
			const updateProduct = { ...productUpdate, ...updateField };
			const indexProduct = this.products.findIndex(
				(product) => product.id === productId
			);
			this.products[indexProduct] = updateProduct;
			await this.saveProducts();
			console.log("Producto actualizado");
		} else {
			throw new Error("Error al actualizar, verificar!");
		}
	}

	async updateProduct(productToUpdate) {
		const productIndex = this.products.findIndex(
			(p) => p.id === productToUpdate.id
		);

		if (productIndex !== -1) {
			this.products[productIndex] = productToUpdate;
			await this.saveProducts();
			console.log("Producto actualizado");
			return productToUpdate;
		} else {
			return false;
		}
	}

	async deleteProduct(productId) {
		const idParam = parseInt(productId, 10);
		const productIndex = this.products.findIndex((p) => p.id === idParam);
		if (productIndex !== -1) {
			this.products.splice(productIndex, 1);
			await this.saveProducts();
			return `producto ${productId} eliminado`;
		} else {
			return false;
		}
	}
}

export default ProductManager;
