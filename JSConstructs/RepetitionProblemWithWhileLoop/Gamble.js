function gamble() {
    let money = 100;
    let goal = 200;
    let bets = 0;
    let wins = 0;

    while (money > 0 && money < goal) {
        bets++;

        // Simulate a bet (50% chance of winning)
        if (Math.random() < 0.5) {
            money++; // Win ₹1
            wins++;
        } else {
            money--; // Lose ₹1
        }
    }

    console.log(`\nFinal Amount: ₹${money}`);
    console.log(`Total Bets Placed: ${bets}`);
    console.log(`Total Wins: ${wins}`);
    console.log(money === goal ? "🎉 Goal Reached! You won ₹200!" : "💸 You went broke!");
}

gamble();
