let questions = [];

let question1 = {
  category: "Math",
  question: "What is 2 + 2?",
  choices: ["1", "2", "4"],
  answer: "4"
};

let question2 = {
  category: "Geography",
  question: "Which counties capital is Kabul?",
  choices: ["Afghanistan","Japan", "India"],
  answer: "Afghanistan"
}

let question3 = {
  category: "Chemistry",
  question: "What is the formual of Water?",
  choices: ["h2o", "h", "o2"],
  answer: "h2o"
};

let question4 = {
  category: "Physics",
  question: "How do you calculate speed?",
  choices: ["D/T", "T/D", "W/D"],
  answer: "D/T"
};

let question5 = {
  category: "English",
  question: "What is the meaning of bro?",
  choices: ["brother", "mother", "father"],
  answer: "brother"
};

questions.push(question1, question2, question3, question4, question5);

function getRandomQuestion (questions) {
 let randomQuestionNum = Math.floor(Math.random() * (5 - 1 + 1) + 1);
 if(randomQuestionNum == 1){
    return question1.question;
 }
 else if(randomQuestionNum == 2){
    return question2.question;
 }
 else if(randomQuestionNum == 3){
    return question3.question;
 }
 else if(randomQuestionNum == 4){
    return question4.question;
 }
 else {
   return question5.question;
 }
}

function getRandomComputerChoice (choices){
  let choiceIndex = Math.floor(Math.random * choices.length);
  return choices[choiceIndex];
}

function getResults (randomQuestion, computersChoice){
  
}

const randomQuestion = getRandomQuestion(questions.question); 
console.log(`Question: ${randomQuestion}`);
const computerChoice = getRandomComputerChoice(questions.choices);
console.log(`Computer Answer: ${computerChoice}`);


