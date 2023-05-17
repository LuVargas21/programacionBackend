const { error } = require("console");
const fs = require("fs");

class Product {
	constructor() {}
}

class ProductManager {
	constructor(path) {
		this.path = path;
		this.products = [];
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
			const lastProduct = this.products[this.products.length - 1];
			product.id = lastProduct.id + 1;
		} else {
			product.id = 1;
		}

		this.products.push(product);
		this.saveProducts();
	}

	saveProducts() {
		const jsonProducts = JSON.stringify(this.products, null, "\t");
		fs.writeFile(this.path, jsonProducts, "utf-8", (error) => {
			if (error) {
				throw new Error("Error al guardar");
			} else {
				return "Se guardo de forma exitosa";
			}
		});
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
			this.products.splice(productId, 1);
			this.saveProducts();
			return `producto ${productId} eliminado`;
		} else {
			return `producto ${productId} no encontrado`;
		}
	}
}

const productManager = new ProductManager("./products.json");
productManager.addProducts(
	"producto1",
	"producto prueba",
	"200",
	"sin imagen",
	"abcc123",
	"25"
);
productManager.addProducts(
	"producto prueba2",
	"producto prueba2",
	"2002",
	"sin imagen2",
	"abc1232",
	"252"
);
productManager.addProducts(
	"producto prueba3",
	"producto prueba3",
	"2003",
	"sin imagen",
	"abcl123",
	"253"
);
productManager.addProducts(
	"producto prueba4",
	"producto prueba4",
	"2003",
	"sin imagen",
	"abcldsd123",
	"254"
);

const products = productManager.getProducts();

productManager.updateProduct(1, { code: 89 });
productManager.deleteProduct(6);
console.log(products);
