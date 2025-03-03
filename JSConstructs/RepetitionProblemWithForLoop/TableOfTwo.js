// Get command-line argument
const n = parseInt(process.argv[2]);

// Check if the argument is valid
if (isNaN(n) || n < 0) {
    console.log("Please provide a valid non-negative integer as an argument.");
    process.exit(1);
}

console.log(`Table of powers of 2 up to 2^${n}:`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}
