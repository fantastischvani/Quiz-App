const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "London", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Saturn", "Mars", "Venus"],
    answer: "Mars"
  },
  {
    question: "Who wrote Hamlet?",
    options: ["Mark Twain", "Shakespeare", "Tolkien", "Hemingway"],
    answer: "Shakespeare"
  }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

const timeSpan = document.getElementById("time");
const questionDiv = document.querySelector(".question");
const optionsDiv = document.querySelector(".options");
const scoreSpan = document.getElementById("score");
const restartBtn = document.querySelector(".restart-btn");

function showQuestion() {
  const q = questions[currentQuestion];
  questionDiv.textContent = q.question;
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
    scoreSpan.textContent = score;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timeSpan.textContent = timeLeft;
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timerInterval);
  questionDiv.textContent = "Quiz Over!";
  optionsDiv.innerHTML = "";
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  timeLeft = 30;
  scoreSpan.textContent = 0;
  showQuestion();
  startTimer();
});

showQuestion();
startTimer();
