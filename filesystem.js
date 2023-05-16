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

	// agrego un metodo que me permita  cargar los productos desde el json

	loadProducts() {
		// con el try lo primero que hace es leer el archivo JSON de forma sincronica
		try {
			const jsonProductos = fs.readFileSync("productos.json", "utf8");
			this.products = JSON.parse(jsonProductos); //convierte el json a  string
		} catch (error) {
			// si no los puede leer devuelve un error
			throw new Error("Error al cargar los productos");
		}
	}

	//funciones que validan los campos del producto

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

	// una vez que realiza las validaciones los agrega
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
		this.saveProducts();
	}

	//guarda los productos

	saveProducts() {
		const jsonProducts = JSON.stringify(this.products); //  convierte en un archivo json
		const fileProducts = "products.json";
		fs.writeFile(fileProducts, jsonProducts, "utf-8", (error) => {
			if (error) {
				throw new Error("Error al guardar");
			} else {
				console.log("Se guardo de forma exitosa");
			}
		});
	}

	//
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
