let inches = 42;
let feet = inches / 12;
console.log(`${inches} inches = ${feet} feet`);

let lengthFeet = 60, widthFeet = 40;
let lengthMeters = lengthFeet * 0.3048;
let widthMeters = widthFeet * 0.3048;
console.log(`Rectangular Plot: ${lengthFeet}ft x ${widthFeet}ft = ${lengthMeters.toFixed(3)}m x ${widthMeters.toFixed(3)}m`);

let areaSqFt = lengthFeet * widthFeet;
let totalAreaSqFt = areaSqFt * 25;
let totalAreaAcres = totalAreaSqFt / 43560;
console.log(`Total area of 25 plots = ${totalAreaAcres.toFixed(3)} acres`);
