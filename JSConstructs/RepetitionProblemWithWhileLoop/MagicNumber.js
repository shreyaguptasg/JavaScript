const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Think of a number between 1 and 100, and I'll guess it!");

let low = 1, high = 100;

function findMagicNumber() {
    if (low > high) {
        console.log("Something went wrong! Please start again.");
        rl.close();
        return;
    }

    let mid = Math.floor((low + high) / 2);

    rl.question(`Is your number ${mid}? (yes/lower/higher): `, (answer) => {
        answer = answer.toLowerCase();

        if (answer === "yes") {
            console.log(`Hooray! Your magic number is ${mid}.`);
            rl.close();
        } else if (answer === "lower") {
            high = mid - 1;
            findMagicNumber();
        } else if (answer === "higher") {
            low = mid + 1;
            findMagicNumber();
        } else {
            console.log("Invalid input. Please enter 'yes', 'lower', or 'higher'.");
            findMagicNumber();
        }
    });
}

findMagicNumber();
