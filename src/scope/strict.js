pi = 3.1416;
console.log(pi); // 3.1416


'use strict';
pi = 3.1416;
console.log(pi); // pi is not defined
/* modo estricto no permite la creación de variables sin la palabra reservada var, let o const */


function myFunction() {
    'use strict';
    return pi = 3.1416;
}
console.log(myFunction()); // pi is not defined