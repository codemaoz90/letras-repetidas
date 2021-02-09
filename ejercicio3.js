const nombreArray = ["A", "L", "E", "J", "A", "N", "D", "R", "O"];

let map = {};
// console.log(nombreArray[0]);
for (let i = 0; i < nombreArray.length; i++) {
	map[nombreArray[i]] ? (map[nombreArray[i]] += 1) : (map[nombreArray[i]] = 1);
}

console.log(map);
