// setInterval  funciona parecido a setTimeOut, pero ejectuta una misma tarea cada cierto tiempo...

// setInterval(() => {
// 	console.log("Hello");
// }, 1000); esto se ejecuta infinitamente....

let contador = 0;
const intervalId = setInterval(() => {
	contador++;
	console.log({ contador });
	if (contador > 5) {
		clearInterval(intervalId);
	}
}, 1000);
