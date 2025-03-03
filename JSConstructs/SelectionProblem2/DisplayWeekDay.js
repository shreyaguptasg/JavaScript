let number = parseInt(process.argv[2]);
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
if (number >= 1 && number <= 7) {
    console.log(days[number - 1]);
} else {
    console.log("Please enter a number between 1 and 7.");
}
