function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollUntilLimit(limit) {
    let countMap = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let maxReached = false;

    while (!maxReached) {
        let roll = rollDie();
        countMap[roll]++;

        if (countMap[roll] === limit) {
            maxReached = true;
        }
    }

    return countMap;
}

function findMinMax(countMap) {
    let maxNum = null, minNum = null;
    let maxCount = 0, minCount = Infinity;

    for (let num in countMap) {
        if (countMap[num] > maxCount) {
            maxCount = countMap[num];
            maxNum = num;
        }
        if (countMap[num] < minCount) {
            minCount = countMap[num];
            minNum = num;
        }
    }

    return { maxNum, maxCount, minNum, minCount };
}

let dieRolls = rollUntilLimit(10);
console.log("Final Dice Roll Counts:", dieRolls);

let { maxNum, maxCount, minNum, minCount } = findMinMax(dieRolls);
console.log(`Number that appeared maximum times: ${maxNum} (${maxCount} times)`);
console.log(`Number that appeared minimum times: ${minNum} (${minCount} times)`);
