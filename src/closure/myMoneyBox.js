function moneyBox(coins) {
	let saveCoins = 0;
	saveCoins += coins;
	console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(2);
moneyBox(3);

function moneyBox() {
	let saveCoins = 0;

	function countCoins(coins) {
		saveCoins += coins;
		console.log(`MoneyBox: $${saveCoins}`);
	}

	return countCoins;
}

const myMoneyBox = moneyBox(); // esta const es la que crea el closure, y dentro de esta se guarda el valor de saveCoins y la función countCoins, por lo que se mantiene el valor de saveCoins tras cada ejecución
myMoneyBox(5); // 5
myMoneyBox(2); // 7
myMoneyBox(3); // 10

console.log("---");

const moneyBoxAna = moneyBox(); // esta const crea otro closure, con otro valor de saveCoins y otra función countCoins
moneyBoxAna(10);
moneyBoxAna(5);
moneyBoxAna(20);

// Desafío de clase
/* En este desafío tendrás que crear un closure que nos permita almacenar datos de mascotas en cualquier momento.

Los datos pueden venir de distintas maneras, pueden ser objetos, strings o arrays. En el primer llamado a la función nos servirá para crear nuestra lista en un inicio mientras que los demás llamados nos ayudará a agregar elementos al final de la lista.

Si en algún momento llamamos a la función sin pasarle ningún parámetro esta nos devolverá el array con los datos de todos las mascotas introducidas.
*/

// Input
const myPetList = createPetList();
myPetList("michi");
myPetList("firulais");
myPetList();

//Output:
["michi", "firulais"];

// Solución
export function createPetList() {
	const petList = [];

	function addPet(myPet) {
		if (myPet) {
			petList.push(myPet);
		} else {
			return petList;
		}
	}

	return addPet;
}
