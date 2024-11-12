const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { // función interna
        const inner = 2;
        console.log({myNumber, myGlobal});

        function child() { // función anidada
            console.log({myNumber, myGlobal, inner});
        }

        return child();
    }

    return parent();
}

myFunction(); // 0, {myNumber: 1, myGlobal: 0}, {myNumber: 1, myGlobal: 0, inner: 2}