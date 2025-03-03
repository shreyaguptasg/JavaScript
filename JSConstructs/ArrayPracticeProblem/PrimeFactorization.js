function primeFactors(n) {
    let factors = [];

    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }

    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

let num = parseInt(prompt("Enter a number:"));
let factorsArray = primeFactors(num);

console.log(`Prime factors of ${num} are:`, factorsArray);
