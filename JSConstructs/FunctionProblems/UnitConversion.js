const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Temperature Conversion:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius");
rl.question("Enter your choice (1 or 2): ", (choice) => {
    switch (choice) {
        case "1":
            rl.question("Enter temperature in Celsius (0°C to 100°C): ", (degC) => {
                degC = parseFloat(degC);
                if (degC >= 0 && degC <= 100) {
                    let degF = (degC * 9 / 5) + 32;
                    console.log(`${degC}°C = ${degF.toFixed(2)}°F`);
                } else {
                    console.log("❌ Please enter a value between 0°C and 100°C.");
                }
                rl.close();
            });
            break;

        case "2":
            rl.question("Enter temperature in Fahrenheit (32°F to 212°F): ", (degF) => {
                degF = parseFloat(degF);
                if (degF >= 32 && degF <= 212) {
                    let degC = (degF - 32) * 5 / 9;
                    console.log(`${degF}°F = ${degC.toFixed(2)}°C`);
                } else {
                    console.log("❌ Please enter a value between 32°F and 212°F.");
                }
                rl.close();
            });
            break;

        default:
            console.log("❌ Invalid choice. Please enter 1 or 2.");
            rl.close();
    }
});
