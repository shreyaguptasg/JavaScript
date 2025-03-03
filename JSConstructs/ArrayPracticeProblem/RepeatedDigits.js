function findRepeatedDigitNumbers() {
    let result = [];

    for (let i = 10; i <= 100; i++) {
        let strNum = i.toString();
        if (strNum.length === 2 && strNum[0] === strNum[1]) {
            result.push(i);
        }
    }

    return result;
}

let repeatedNumbers = findRepeatedDigitNumbers();
console.log("Numbers with repeated digits:", repeatedNumbers);
