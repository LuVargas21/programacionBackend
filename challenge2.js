const fs = require("fs");

class Product {
	// title, description, price, thumbnail, code, stock, path son atributos del producto

	constructor() {}
}
class ProductManager {
	constructor(path) {
		this.products = [];
		this.path = path;
	}

	validarCamposNulo(title, description, price, thumbnail, code, stock) {
		if (!title || !description || !price || !thumbnail || !code || !stock) {
			throw new Error("Debe completar todos los campos para continuar");
		}
	}

	validarCamposVacios(title, description, price, thumbnail, code, stock) {
		if (
			// la funcion .trim permite eliminar los espacios que contengan los campos.
			title.trim() === " " ||
			description.trim() === " " ||
			thumbnail.trim() === " " ||
			price.trim() === " " ||
			code.trim() === " " ||
			stock.trim() === " "
		) {
			throw new Error("Debe completar todos los campos");
		}
	}

	validarCamposProducto(title, description, price, thumbnail, code, stock) {
		this.validarCamposNulo(title, description, price, thumbnail, code, stock);
		this.validarCamposVacios(title, description, price, thumbnail, code, stock);
	}
	addproducts(title, description, price, thumbnail, code, stock) {
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
			const lastProduct = this.products[this.products.length - 1];
			product.id = lastProduct.id + 1;
		} else {
			product.id = 1;
		}

		this.products.push(product);
	}
	getProducts() {
		return this.products;
	}

	getProductById(id) {
		const product = this.products.find((x) => x.id === id);
		if (product != null) {
			return product;
		} else {
			return new Error("el producto no existe");
		}
	}
}
const productManager = new ProductManager();
productManager.addproducts(
	"producto1",
	"producto prueba",
	"200",
	"sin imagen",
	"abcc123",
	"25"
);
productManager.addproducts(
	"producto prueba2",
	"producto prueba2",
	"2002",
	"sin imagen2",
	"abc1232",
	"252"
);
productManager.addproducts(
	"producto prueba3",
	"producto prueba3",
	"2003",
	"sin imagen",
	"abcl123",
	"253"
);

const products = productManager.getProducts();
const product = productManager.getProductById(1);

console.log(products);
