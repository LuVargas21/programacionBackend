import fs from "fs";

class Product {
	constructor() {}
}

class ProductManager {
	constructor(path) {
		this.path = path;
		this.products = [];
	}

	async loadProducts() {
		try {
			const jsonProducts = await fs.promises.readFile(this.path, "utf8");
			this.products = JSON.parse(jsonProducts);
		} catch (error) {
			throw new Error("Error al cargar los productos");
		}
	}

	validarCamposNulo(title, description, price, thumbnail, code, stock) {
		if (!title || !description || !price || !thumbnail || !code || !stock) {
			throw new Error("Debe completar todos los campos para continuar");
		}
	}

	validarCamposVacios(title, description, price, thumbnail, code, stock) {
		if (
			title.trim() === "" ||
			description.trim() === "" ||
			thumbnail.trim() === "" ||
			price === "" ||
			code === "" ||
			stock === ""
		) {
			throw new Error("Debe completar todos los campos");
		}
	}

	validarCamposProducto(title, description, price, thumbnail, code, stock) {
		this.validarCamposNulo(title, description, price, thumbnail, code, stock);
		this.validarCamposVacios(title, description, price, thumbnail, code, stock);
	}

	async addProducts(title, description, price, thumbnail, code, stock) {
		this.validarCamposVacios(title, description, price, thumbnail, code, stock);
		this.validarCamposProducto(
			title,
			description,
			price,
			thumbnail,
			code,
			stock
		);

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

		const newId =
			this.products.length != 0
				? this.products[this.products.length - 1].id + 1
				: 1;
		product.id = newId;

		this.products.push(product);
		await this.saveProducts();
	}

	async saveProducts() {
		const jsonProducts = JSON.stringify(this.products, null, "\t");
		try {
			await fs.promises.writeFile(this.path, jsonProducts, "utf-8");
			return "Se guardo de forma exitosa";
		} catch (error) {
			throw new Error("Error al guardar");
		}
	}

	async getProducts(limit) {
		await this.loadProducts();
		if (limit) {
			return this.products.slice(0, limit);
		} else {
			return this.products;
		}
	}

	async getProductById(id) {
		await this.loadProducts();
		const idParam = parseInt(id, 10);
		const product = this.products.find((product) => product.id === idParam);

		if (product != null) {
			return product;
		} else {
			throw new Error("el producto no existe");
		}
	}

	async updateProduct(productId, updateField) {
		const productUpdate = this.products.findIndex(
			(product) => product.id === productId
		);

		if (productUpdate) {
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

	async deleteProduct(productId) {
		const productDelete = this.products.findIndex(
			(product) => product.id === productId
		);
		if (productDelete !== -1) {
			this.products.splice(productDelete, 1);
			await this.saveProducts();
			return `producto ${productId} eliminado`;
		} else {
			return `producto ${productId} no encontrado`;
		}
	}
}

export default ProductManager;
