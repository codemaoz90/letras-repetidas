window.onload = () => {
	var texto = document.getElementById("texto"),
		e1 = document.getElementById("e1"),
		e2 = document.getElementById("e2"),
		e3 = document.getElementById("e3"),
		e4 = document.getElementById("e4"),
		e5 = document.getElementById("e5");

	e1.addEventListener("click", ejercicio1);
	e2.addEventListener("click", ejercicio2);
	e3.addEventListener("click", ejercicio3);
	e4.addEventListener("click", ejercicio4);
	e5.addEventListener("click", nivel2);

	function ejercicio1() {
		let nombre = ["M", "A", "N", "U", "E", "L"];

		for (let index = 0; index < nombre.length; index++) {
			console.log(nombre[index]);
		}
	}

	function ejercicio2() {
		const nombreArray = ["M", "A", "N", "U", "E", "L"];

		nombreArray.map((letra) => {
			letra.match(/[aeiou]/i)
				? console.log("He encontrado la VOCAL: ", letra)
				: console.log("He encontrado la CONSONANTE", letra);
		});
	}
	function ejercicio3() {
		const nombreArray = ["A", "L", "E", "J", "A", "N", "D", "R", "O"];

		let map = {};
		// console.log(nombreArray[0]);
		for (let i = 0; i < nombreArray.length; i++) {
			map[nombreArray[i]]
				? (map[nombreArray[i]] += 1)
				: (map[nombreArray[i]] = 1);
		}

		console.log(map);
	}
	function ejercicio4() {
		const miNombre = ["M", "A", "N", "U", "E", "L"];
		const miApellido = ["O", "C", "H", "O", "A"];

		const fullName = [...miNombre, " ", ...miApellido];

		console.log(fullName);
	}
	function nivel2() {
		var str =
			"Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio ( nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES ). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email";
		function extractEmails(text) {
			var email = new Map();

			var arrayEmails = text.match(
				/(?<name>[\w.]+)\@(?<domain>\w+\.\w+)(\.\w+)?/gi
			);
			arrayEmails.map((e, index) => {
				email.set(e, index);
			});
			return email;
		}
		console.log(extractEmails(str));
	}
};
