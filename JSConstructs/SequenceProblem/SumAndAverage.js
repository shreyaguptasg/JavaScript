let numbers = [];

for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 90) + 10);
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let average = sum / numbers.length;

console.log("Random 2-digit values:", numbers);
console.log("Sum of the values:", sum);
console.log("Average of the values:", average);
