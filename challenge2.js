class Product {
	// title, description, price, thumbnail, code, stock son atributos del producto

	constructor() {}
}
class ProductManager {
	constructor() {
		this.products = [];
	}

	validarCamposProducto(title, description, price, thumbnail, code, stock) {
		validarCamposNulo(title, description, price, thumbnail, code, stock);
		validarCamposVacios(title, description, price, thumbnail, code, stock);
	}

	validarCamposNulo(title, description, price, thumbnail, code, stock) {
		if (!title || !description || !price || !thumbnail || !code || !stock)
			throw new Error("Debe completar todos los campos para continuar");
	}

	validarCamposVacios(title, description, price, thumbnail, code, stock) {
		let tieneError =
			this.validarStringVacio(title) &&
			this.validarStringVacio(description) &&
			this.validarStringVacio(thumbnail);
		if (!tieneError) {
			throw new Error("Debe completar todos los campos para continuar");
		}
	}

	validarStringVacio(string) {
		// buscar metodo de js para validar vacios y tipos

		if (string === "" && string === " ") {
			return false;
		}
		return true;
	}

	validarString(string) {
		if (
			typeof title !== string &&
			typeof description !== string &&
			typeof description !== string &&
			typeof thumbnail !== string
		) {
			return false;
		}
		return true;
	}

	validarNumero(number) {
		if (typeof number !== number) {
			return false;
		}
		return true;
	}

	addproducts(title, description, price, thumbnail, code, stock) {
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
	"producto 1",
	"producto prueba",
	"200",
	"sin imagen",
	"abc123",
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
	"abc123",
	"253"
);
const products = productManager.getProducts();
const product = productManager.getProductById(1);

console.log(products);
