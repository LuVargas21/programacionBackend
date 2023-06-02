import express from "express";
import productsRouter from "./src/routes/productsRouter.js";
//import cartsRouter from "./src/routes/carts.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRouter);
//app.use("/api/carts", cartsRouter);

const port = 8080;
app.listen(port, () => {
	console.log("Express server - port 8080");
});
