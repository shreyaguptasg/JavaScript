const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

rl.question("Enter the start of the range: ", (start) => {
    rl.question("Enter the end of the range: ", (end) => {
        start = parseInt(start);
        end = parseInt(end);

        if (isNaN(start) || isNaN(end) || start < 2 || end < 2 || start > end) {
            console.log("Please enter valid numbers (start and end should be >= 2, and start ≤ end).");
        } else {
            console.log(`Prime numbers between ${start} and ${end}:`);
            for (let num = start; num <= end; num++) {
                if (isPrime(num)) {
                    process.stdout.write(num + " ");
                }
            }
            console.log();
        }

        rl.close();
    });
});
