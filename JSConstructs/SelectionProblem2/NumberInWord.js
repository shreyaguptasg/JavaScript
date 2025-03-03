let number = parseInt(process.argv[2]);
let words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
if (number >= 0 && number <= 9) {
    console.log(words[number]);
} else {
    console.log("Please enter a single digit number (0-9).");
}
