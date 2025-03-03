function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        let palindrome = getPalindrome(num);
        if (isPrime(palindrome)) {
            console.log(`${num} is a Prime number and its Palindrome ${palindrome} is also Prime!`);
        } else {
            console.log(`${num} is a Prime number but its Palindrome ${palindrome} is NOT Prime.`);
        }
    } else {
        console.log(`${num} is NOT a Prime number.`);
    }
}

let userInput = parseInt(prompt("Enter a number:"));
checkPrimeAndPalindrome(userInput);
