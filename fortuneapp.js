let min = 1; 
let max = 5;

const botName = "FortuneBot";
const greeting = `Hello! My name is ${botName} and I am here to share your fortune!`;
console.log(greeting);

let randomNum = Math.floor(Math.random() * (max - min) + min);
console.log(`Your random fortune number is: ${Math.floor(randomNum)}`);

console.log("Generating a random fortune number between 1 and 5...");

let fortune1 = "You will find great success in your endeavors.";
let fortune2 = "A thrilling time is in your near future.";
let fortune3 = "Your hard work will soon pay off.";
let fortune4 = "An unexpected event will bring you joy.";
let fortune5 = "You will meet someone special soon.";

if (randomNum == 1) {
    console.log(fortune1);
}
else if (randomNum == 2) {
    console.log(fortune2);
}
else if (randomNum == 3) {
    console.log(fortune3);
}   
else if (randomNum == 4) {
    console.log(fortune4);
}   
else {
    console.log(fortune5);
}