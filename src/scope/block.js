function fruits() {
    if (true) {
        var fruit1 = 'apple'; // var is function scoped
        let fruit2 = 'banana'; // let is block scoped
        const fruit3 = 'kiwi'; // const is block scoped
        console.log(fruit2); // banana
        console.log(fruit3); // kiwi
    }
    console.log(fruit1); // apple
    console.log(fruit2); // ReferenceError: fruit2 is not defined
    console.log(fruit3); // ReferenceError: fruit3 is not defined
}

fruits();