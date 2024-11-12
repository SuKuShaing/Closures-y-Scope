function greeting() {
    let userName = 'Seba';

    function displayUserName() {
        return `Hello ${userName}`;
    }

    return displayUserName; // Retorna la referencia a la función
}

const g = greeting(); // g ahora es la función displayUserName
console.log(g); // Muestra la referencia a la función, [Function: displayUserName]
console.log(g()); // Ejecuta la función y muestra "Hello Seba"