// EJERCICIO 2.
const nombreArray = ["M", "A", "N", "U", "E", "L"];

nombreArray.map((letra) => {
	letra.match(/[aeiou]/i)
		? console.log("He encontrado la VOCAL: ", letra)
		: console.log("He encontrado la CONSONANTE", letra);
});
