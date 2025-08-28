let min = 1; 
let max = 5;

const botName = "FortuneBot";
const greeting = `Hello! My name is ${botName} and I am here to share your fortune!`;
console.log(greeting);

let randomNumber = Math.floor(Math.random() * (max - min +1) + min);

console.log(`Your random fortune number is: ${Math.floor(randomNumber)}`);

console.log("Generating a random fortune number between 1 and 5...");

let fortune1 = "You will find great success in your endeavors.";
let fortune2 = "A thrilling time is in your near future.";
let fortune3 = "Your hard work will soon pay off.";
let fortune4 = "An unexpected event will bring you joy.";
let fortune5 = "You will meet someone special soon.";

let selectedFortune;
if (randomNumber == 1){
  selectedFortune = fortune1;
}
else if (randomNumber == 2){
  selectedFortune = fortune2;
}
else if (randomNumber == 3){
  selectedFortune = fortune3;
}
else if (randomNumber == 4){
  selectedFortune = fortune4;
}
else {
  selectedFortune = fortune5;
}

console.log(selectedFortune);


