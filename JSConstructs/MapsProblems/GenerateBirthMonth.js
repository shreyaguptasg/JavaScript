function generateBirthMonths(numIndividuals) {
    let birthMonthMap = {};

    for (let i = 1; i <= numIndividuals; i++) {
        let birthMonth = Math.floor(Math.random() * 12) + 1; // Random month (1-12)
        let birthYear = Math.random() < 0.5 ? 1992 : 1993; // Randomly pick 1992 or 1993

        let key = `${birthMonth}-${birthYear}`;
        if (!birthMonthMap[key]) {
            birthMonthMap[key] = [];
        }
        birthMonthMap[key].push(`Person ${i}`);
    }

    return birthMonthMap;
}

function printBirthMonthGroups(birthMonthMap) {
    console.log("Individuals grouped by birth month:");
    for (let monthYear in birthMonthMap) {
        console.log(`${monthYear}:`, birthMonthMap[monthYear]);
    }
}

let birthMonthMap = generateBirthMonths(50);
printBirthMonthGroups(birthMonthMap);
