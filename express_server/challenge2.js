import { error } from "console";
import fs from "fs";

class Product {
	constructor() {}
}

class ProductManager {
	constructor(path) {
		this.path = path;
		this.products = [];
		this.loadProducts();
	}

	loadProducts() {
		try {
			const jsonProducts = fs.readFileSync(this.path, "utf8");
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
			price.trim() === "" ||
			code.trim() === "" ||
			stock.trim() === ""
		) {
			throw new Error("Debe completar todos los campos");
		}
	}

	validarCamposProducto(title, description, price, thumbnail, code, stock) {
		this.validarCamposNulo(title, description, price, thumbnail, code, stock);
		this.validarCamposVacios(title, description, price, thumbnail, code, stock);
	}

	addProducts(title, description, price, thumbnail, code, stock) {
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

		if (this.products.length != 0) {
			const newId = this.products.length
				? this.products[this.products.length - 1].id + 1
				: 1;
			// const ids = this.products.map((x) => x.id);
			// const maxId = Math.max(...ids);
			product.id = newId + 1;
		} else {
			product.id = 1;
		}

		this.products.push(product);
		this.saveProducts();
	}

	saveProducts() {
		const jsonProducts = JSON.stringify(this.products, null, "\t");
		try {
			fs.writeFileSync(this.path, jsonProducts, "utf-8");
			return "Se guardo de forma exitosa";
		} catch (error) {
			throw new Error("Error al guardar");
		}
	}

	getProducts() {
		return this.products;
	}

	getProductById(id) {
		const product = this.products.find((x) => x.id === id);
		if (product != null) {
			return product;
		} else {
			throw new Error("el producto no existe");
		}
	}

	updateProduct(productId, updateField) {
		const productUpdate = this.products.find(
			(product) => product.id === productId
		);

		if (productUpdate) {
			const updateProduct = { ...productUpdate, ...updateField };
			const indexProduct = this.products.indexOf(productUpdate);
			this.products[indexProduct] = updateProduct;
			this.saveProducts();
			console.log("Producto actualizado");
		} else {
			throw new Error("Error al actualizar, verificar!");
		}
	}

	deleteProduct(productId) {
		const productDelete = this.products.findIndex(
			(product) => product.id === productId
		);
		if (productDelete !== -1) {
			this.products.splice(productDelete, 1);
			this.saveProducts();
			return `producto ${productId} eliminado`;
		} else {
			return `producto ${productId} no encontrado`;
		}
	}
}

const productManager = new ProductManager("./products.json");

const products = productManager.getProducts();

productManager.updateProduct(1, { code: 89 });
productManager.deleteProduct(6);
console.log(products);

export default ProductManager;
