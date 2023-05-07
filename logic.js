var questions = [
  {
    question: "What is a variable?",
    choices: [
      "A data structure that stores a collection of elements.",
      "A set of instructions that performs a task.",
      "A named location that stores a value.",
      "A type of function that returns a value.",
    ],
    answer: "A named location that stores a value.",
  },
  {
    question: '"Const" is a variable that:',
    choices: [
      "does not change.",
      "is a function.",
      "changes.",
      "is an instance variable.",
    ],
    answer: "does not change.",
  },
  {
    question: '"VARCHAR" is a character field that has users enter:',
    choices: ["integer", "string", "true/false", "id"],
    answer: "string",
  },
  {
    question:
      "Which of the following is an example of a relational database management system:",
    choices: ["SQL", "Javascript", "Node", "CSS"],
    answer: "SQL",
  },
  {
    question: 'What does "DOM" stand for?',
    choices: [
      "Domain",
      "Dominant",
      "Document Object Manipulation",
      "Document Object Model",
    ],
    answer: "Document Object Model",
  },
];

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

var startBtn = document.getElementById("startBtn");
var startContainer = document.getElementById("startContainer");
var questionsContainer = document.getElementById("questionsContainer");
var gameOverContainer = document.getElementById("gameOverContainer");
var highScoresContainer = document.getElementById("highScoresContainer");
var timerEl = document.getElementById("timer");
var questionDisplay = document.getElementById("questionDisplay");
var choiceBtn1 = document.getElementById("choiceBtn1");
var choiceBtn2 = document.getElementById("choiceBtn2");
var choiceBtn3 = document.getElementById("choiceBtn3");
var choiceBtn4 = document.getElementById("choiceBtn4");

var highScores = [];

var timer;
var time = 30;
var pickQuestionIndex = 0;

function startGame() {
  // Starts game, hides start screen, display question container, starts timer, calls runQuestion function
  startContainer.setAttribute("class", "hide");
  startBtn.setAttribute("class", "hide");
  questionsContainer.removeAttribute("class");
  timerEl.textContent = time;
  timer = setInterval(function () {
    time--;
    // display the time in the HTML
    timerEl.textContent = time;
    if (time === 0) {
      clearInterval(timer);
      alert("Time is up!");
      endGame();
    }
  }, 1000);
  runQuestions();
}

function runQuestions() {
  // display the question on the HTML
  var pickQuestion = questions[pickQuestionIndex];
  questionDisplay.textContent = pickQuestion.question;

  // display the choices in each appropriate button
  choiceBtn1.textContent = pickQuestion.choices[0];
  choiceBtn2.textContent = pickQuestion.choices[1];
  choiceBtn3.textContent = pickQuestion.choices[2];
  choiceBtn4.textContent = pickQuestion.choices[3];

  // add event listener to each button that will check the value (review what 'this' does) 'this' is a global event review the activities or google it

  choiceBtn1.addEventListener("click", globalThis);
  choiceBtn2.addEventListener("click", globalThis);
  choiceBtn3.addEventListener("click", globalThis);
  choiceBtn4.addEventListener("click", globalThis);
}

function checkAnswer(answer) {
  var selectedChoice = answer.target.textContent;
  var pickQuestion = questions[pickQuestionIndex];
  if (selectedChoice === pickQuestion.answer) {
    time += 5;
    alert("Correct!");
  } else {
    time -= 5;
    alert("Wrong!");
  }

  pickQuestionIndex++;
  if (pickQuestionIndex === questions.length) {
    endGame();
  } else {
    runQuestions();
  }
}

// endGame logic
function endGame() {
  clearInterval(timer);
  questionsContainer.setAttribute("class", "hide");
  gameOverContainer.removeAttribute("class");
  document.querySelector("#gameOverContainer h2").textContent =
    "Score: " + time;
}

// create a function that will run on the choice button click (event delegation)
choiceBtn1.addEventListener("click", checkAnswer);
choiceBtn2.addEventListener("click", checkAnswer);
choiceBtn3.addEventListener("click", checkAnswer);
choiceBtn4.addEventListener("click", checkAnswer);

startBtn.addEventListener("click", startGame);
