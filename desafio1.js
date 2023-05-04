// Se creará una instancia de la clase “ProductManager”
// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
// Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25
// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

class Product {
	// title, description, price, thumbnail, code, stock son atributos del producto

	constructor() {}
}
class ProductManager {
	constructor() {
		this.products = [];
	}

	addproducts(title, description, price, thumbnail, code, stock) {
		for (const product of this.products) {
			if (product.code == code) {
				return new Error("el codigo " + code + " esta repetido");
			}
		}

		// const productCode = this.products.find((x) => x.code === code);
		// if (productCode != null) {
		// 	return new Error("el codigo " + code + " esta repetido");
		// }

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
	"producto prueba",
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
	"sin imagen3",
	"abc123",
	"253"
);
const products = productManager.getProducts();
const produc = productManager.getProductById(1);
