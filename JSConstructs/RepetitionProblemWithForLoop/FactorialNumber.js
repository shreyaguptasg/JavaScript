const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

rl.question("Enter a number to compute its factorial: ", (num) => {
    num = parseInt(num);

    if (isNaN(num) || num < 0) {
        console.log("Please enter a valid non-negative integer.");
    } else {
        console.log(`${num}! = ${factorial(num)}`);
    }

    rl.close();
});
