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
var submitBtn = document.getElementById("submitBtn");
var scoresBtn = document.getElementById("scores");
var highScoresList = document.getElementById("highScoresList")
choiceBtn1.addEventListener("click", checkAnswer);
choiceBtn2.addEventListener("click", checkAnswer);
choiceBtn3.addEventListener("click", checkAnswer);
choiceBtn4.addEventListener("click", checkAnswer);

// event listener to start game
startBtn.addEventListener("click", startGame);

// submit score event listener
submitBtn.addEventListener("click", submitScore);


var highScores = [];

var timer;
var time = 60;
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

choiceBtn1.addEventListener("click", checkAnswer);
choiceBtn2.addEventListener("click", checkAnswer);
choiceBtn3.addEventListener("click", checkAnswer);
choiceBtn4.addEventListener("click", checkAnswer);
}

// checks user answer and runs the next question/ends games
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
    console.log(pickQuestion);
  } else {
    runQuestions();
    console.log(pickQuestion);
  }
}


function endGame() {
  clearInterval(timer);
  // remove questions
  questionsContainer.setAttribute("class", "hide");
  // show end game form
  gameOverContainer.removeAttribute("class");
  // user score
  document.querySelector("#gameOverContainer h2").textContent =
    "Score: " + time;
}

//trying to get the high scores/local storage to work
function submitScore() {
    var initialsInput = document.querySelector("#initials");
    var initials = initialsInput.value.trim();

    if (initials !== "") {
      var score = time;
      var scoreEntry = {initials, score };
      
      highScores.push(scoreEntry);
      highScores.sort((a, b) => b.score - a.score);
      highScores = highScores.slice(0, 10);
      
      localStorage.setItem("highScores", JSON.stringify(highScores));
      
      // hide the game over container and show the high scores container
      gameOverContainer.setAttribute("class", "hide");
      highScoresContainer.removeAttribute("class");
      
      // displays the the high scores in the container
      var scoresList = document.getElementById("highScoresList");
      scoresList.innerHTML = "";
      
      for (var i = 0; i < highScores.length; i++) {
        var scoreItem = document.createElement("li");
        scoreItem.textContent = highScores[i].initials + " - " + highScores[i].score;
        scoresList.appendChild(scoreItem);
      }
    }
  }


// load the high scores from local storage
const storedScores = localStorage.getItem("highScores");
if (storedScores) {
  highScores = JSON.parse(storedScores);
}

// save high scores
// localStorage.setItem("highScores", JSON.stringify(highScores));