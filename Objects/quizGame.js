let questions = [];

<<<<<<< HEAD
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


=======
const question1 = {
  category: "Math",
  question: "What is 2 + 2?",
  choices: ["4", "5", "8"],
  answer: "4"
};

const question2 = {
  category: "Geography",
  question: "Which countries capital is Kabul?",
  choices: ["Korea", "Afghanistan", "Japan"],
  answer: "Afghanistan"
}

const question3 = {
  category: "Chemistry",
  question: "What is the formula of water?",
  choices: ["h2o", "co2", "o2"],
  answer: "h2o"
}

const question4 = {
  category: "Geography",
  question: "How many continents are there in the world?",
  choices: ["2", "4", "7"],
  answer: "7"
}

const question5 = {
  category: "Physics",
  question: "What is the formula of speed?",
  choices: ["t/d", "d/t", "t/s"],
  answer: "d/t"
}

questions.push(question1, question2, question3, question4, question5 );

function getRandomQuestion(questions){
  let randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices){
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults (questionObj, computerChoice){
  if (questionObj.answer == computerChoice){
    return `The computer's choice is correct!`;
  }
  else {
    return `The computer's choice is wrong. The correct answer is ${questionObj.answer}`;
  }
}


const randomQuestion = getRandomQuestion(questions); 
console.log("Question: " + randomQuestion.question);

const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Computer Choice: " + computerChoice)

console.log("Result " + getResults(randomQuestion, computerChoice));
>>>>>>> 0a33671f31d4903eaa2cae01bc564f0a1821c42c
