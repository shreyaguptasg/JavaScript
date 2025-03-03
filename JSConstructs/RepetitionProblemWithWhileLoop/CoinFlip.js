function flipCoin() {
    return Math.random() < 0.5 ? "Heads" : "Tails";
}

let headsCount = 0, tailsCount = 0;

console.log("Flipping the coin until either Heads or Tails wins 11 times...\n");

while (headsCount < 11 && tailsCount < 11) {
    let result = flipCoin();
    
    if (result === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`Flip: ${result} | Heads: ${headsCount}, Tails: ${tailsCount}`);
}

console.log(`\nWinner: ${headsCount === 11 ? "Heads" : "Tails"}!`);
