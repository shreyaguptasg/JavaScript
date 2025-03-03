let values = Array.from({ length: 5 }, () => Math.floor(Math.random() * 900) + 100);
let min = Math.min(...values);
let max = Math.max(...values);
console.log("Values:", values);
console.log("Min:", min);
console.log("Max:", max);
