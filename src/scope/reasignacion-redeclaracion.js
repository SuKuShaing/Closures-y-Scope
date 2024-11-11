// VAR

var firstName; // undefined, se crean como undefined
firstName = 'Seba'; // 'Seba', se asigna un valor

console.log(firstName); // 'Seba'


var lastName = 'Sanhueza'; // declarada y asignada
lastName = 'Tapia'; // reasignada

console.log(lastName); // 'Tapia'


var SecondName = 'Felipe'; // declarada y asignada
var SecondName = 'Andrés'; // reasignando

console.log(SecondName); // 'Andrés'



// LET

let fruit = 'apple'; // declara y asigna
fruit = 'kiwi'; // reasigna
console.log(fruit); // 'kiwi'

// let fruit = 'banana'; // redeclaración, ERROR, ya existe



// CONST

const animal; // ERROR, no se puede declarar sin asignar
const animal_2 = 'dog'; // declara y asigna
animal_2 = 'cat'; // ERROR, no se puede reasignar
const animal_2 = 'bird'; // ERROR, no se puede redeclara


const vehicles = [];
vehicles.push('car'); // ['car']
vehicles.push('bike'); // ['car', 'bike']
console.log(vehicles); // ['car', 'bike']

vehicles.pop(); // ['car']
console.log(vehicles); // ['car']