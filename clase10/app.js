import express from "express";
// import __dirname from "utils.js"
//import handlebars from "express-handlebars"
//import viewsRouter from "./routes/wiews.router.js"
import { Server } from "socket.io"; //el server se creara a partir del server http

const app = express();
const httpServer = app.listen(8080, () => console.log("Listen on port 8080")); //solo el server http

//creamos un servidor para sockets viviendo dentro de nuestro servidor principal.
const socketServer = new Server(httpServer); //socketserver sera un servidor para trabajar con sockets.

//configuamos lo referrente a plantillas.
// app.engine("handlebars", handlebars.engine());
// app.set("views", __dirname + "/views");
// app.set("view engine", "handlebars");
// app.use(express.static(__dirname + "/public")); // es importante para tener archivos js y css en plantillas
// app.use("/", viewsRouter);
