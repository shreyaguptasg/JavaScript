const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function primeFactorization(n) {
    let factors = [];

    // Handle factor 2 separately
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }

    // Check for odd factors from 3 to √N
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    // If N is still a prime number greater than 2
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

rl.question("Enter a number to compute its prime factors: ", (num) => {
    num = parseInt(num);

    if (isNaN(num) || num < 2) {
        console.log("Please enter a valid integer greater than or equal to 2.");
    } else {
        console.log(`Prime factors of ${num}: ${primeFactorization(num).join(", ")}`);
    }

    rl.close();
});
