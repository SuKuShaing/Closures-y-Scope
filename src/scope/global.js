// Variables

var a; // declarando
var b = 'b' // declarando e inicializando
b = 'bb' // reasignando
var a = 'aa' // redeclarando

// Global Scope
var  fruit = 'apple'; // global scope
console.log(fruit); // apple

function bestFruit() {
    console.log(fruit); // apple
}

bestFruit();



function countries() {
    countrie_1 = 'Colombia'; // global scope
    let countrie_2 = 'Chile'; // local scope
    const countrie_3 = 'Argentina'; // local scope
    var countrie_4 = 'Uruguay'; // local scope
    console.log(countrie_1);
    console.log(countrie_2);
    console.log(countrie_3);
    console.log(countrie_4);
}

countries();
console.log(countrie_1); // Colombia
console.log(countrie_2); // ReferenceError: countrie_2 is not defined
console.log(countrie_3); // ReferenceError: countrie_3 is not defined
console.log(countrie_4); // ReferenceError: countrie_4 is not defined
