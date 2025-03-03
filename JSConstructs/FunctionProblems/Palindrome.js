function isPalindrome(num) {
    let str = num.toString();
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

function checkPalindromes(num1, num2) {
    if (isPalindrome(num1) && isPalindrome(num2)) {
        console.log(`${num1} and ${num2} are both Palindromes!`);
    } else if (isPalindrome(num1)) {
        console.log(`${num1} is a Palindrome, but ${num2} is not.`);
    } else if (isPalindrome(num2)) {
        console.log(`${num2} is a Palindrome, but ${num1} is not.`);
    } else {
        console.log(`Neither ${num1} nor ${num2} is a Palindrome.`);
    }
}

checkPalindromes(121, 454);
checkPalindromes(123, 454);
checkPalindromes(121, 789);
checkPalindromes(123, 789);
