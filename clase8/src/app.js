import express from "express";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";

//inicio mi aplicacion de express
const app = express();

// esta linea de codigo hace que  reconozca el body de un post. 7

app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);

const server = app.listen(8080, () => console.log("listening on 8080!"));
