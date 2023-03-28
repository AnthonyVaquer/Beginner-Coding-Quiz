var questions = [
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


var timer;
var time = 100;
var pickQuestionIndex = 0;



function startGame() {
  //   Starts game, hides start screen, display question container, starts timer, calls runQuestion function
  startContainer.setAttribute("class", "hide");
  questionsContainer.removeAttribute("class");
  timerEl.textContent = time;
  timer = setInterval(function () {
    time--;
    // display the time in the HTML
    timerEl.textContent = time;
  }, 1000);
  runQuestions ();
}

function runQuestions () {
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

if 
// endGame logic
function endGame


// create a function that will run on the choice button click (event delegation)



startBtn.addEventListener("click", startGame);


