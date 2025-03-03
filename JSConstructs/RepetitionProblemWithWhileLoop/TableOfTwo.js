// Get command-line argument
const n = parseInt(process.argv[2]);

// Validate input
if (isNaN(n) || n < 0) {
    console.log("Please provide a valid non-negative integer as an argument.");
    process.exit(1);
}

console.log(`Powers of 2 up to 2^${n} (max 256):`);

let power = 1; // 2^0 = 1
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${power}`);

    // Stop if power exceeds 256
    if (power >= 256) {
        break;
    }

    power *= 2; // Multiply by 2 for the next power
}
