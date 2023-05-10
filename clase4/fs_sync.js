const fs = require("fs"); // importa el modulo desde node

// si yo quiero  leer un archivo

// recibe 2 parametros, uno es la ruta del archivo y el otro el encoding (caracteres que lee)...
const contenido = fs.readFileSync("hola.text", "utf8");

console.log(contenido);

fs.writeFileSync("./adios.txt", "adios coder!!! "); // crea una carpeta

