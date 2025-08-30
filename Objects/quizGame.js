let questions = [];

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