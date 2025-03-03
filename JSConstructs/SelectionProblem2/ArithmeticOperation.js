const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter value for a: ", (a) => {
    rl.question("Enter value for b: ", (b) => {
        rl.question("Enter value for c: ", (c) => {
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);

            let op1 = a + b * c;
            let op2 = a % b + c;
            let op3 = c + a / b;
            let op4 = a * b + c;

            let maxVal = Math.max(op1, op2, op3, op4);
            let minVal = Math.min(op1, op2, op3, op4);

            console.log(`Results:`);
            console.log(`1. a + b * c = ${op1}`);
            console.log(`2. a % b + c = ${op2}`);
            console.log(`3. c + a / b = ${op3}`);
            console.log(`4. a * b + c = ${op4}`);

            console.log(`Maximum Value: ${maxVal}`);
            console.log(`Minimum Value: ${minVal}`);

            rl.close();
        });
    });
});
