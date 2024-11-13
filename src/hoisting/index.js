var nameOfDog; // del console.log siguiente se eleva y se muestra undefined porque aún no se ha asignado valor
console.log(nameOfDog); // undefined
var nameOfDog = 'Elmo'; // aquí se le asigna valor
console.log(nameOfDog);


nameOfCat();

function nameOfCat() {
    console.log(`El mejor gato es ${nameCat}`);
}

var nameCat = 'Puerquin el gato';