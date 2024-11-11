function greeting() {
    let userName = 'Ana'; // local scope
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName); // ReferenceError: userName is not defined