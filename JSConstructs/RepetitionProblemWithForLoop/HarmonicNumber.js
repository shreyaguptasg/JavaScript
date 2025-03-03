// Get command-line argument
const n = parseInt(process.argv[2]);

// Check if the argument is valid
if (isNaN(n) || n <= 0) {
    console.log("Please provide a valid positive integer as an argument.");
    process.exit(1);
}

let harmonicNumber = 0;
for (let i = 1; i <= n; i++) {
    harmonicNumber += 1 / i;
}

console.log(`The ${n}th Harmonic Number (H_${n}) is: ${harmonicNumber}`);
