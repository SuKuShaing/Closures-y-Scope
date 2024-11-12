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

console.log('---');

const moneyBoxAna = moneyBox(); // esta const crea otro closure, con otro valor de saveCoins y otra función countCoins
moneyBoxAna(10);
moneyBoxAna(5);
moneyBoxAna(20);