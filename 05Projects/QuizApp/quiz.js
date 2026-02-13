document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-button");
  const restartBtn = document.getElementById("restart-button");
  const questionContainer = document.getElementById("question-container");
  const resultContainer = document.getElementById("result-container");
  const questionText = document.getElementById("question-text");
  const choiceList = document.getElementById("choices-list");
  const scoreDisplay = document.getElementById("score");
  const questions = [
    {
      question: "What is the Capital of Pakistan",
      choices: ["Rawalpindi", "Karachi", "Islamabad", "Lahore"],
      answer: "Islamabad",
    },
    {
      question: "Which planet is known as red planet",
      choices: ["Mars", "Jupiter", "Mercury", "Earth"],
      answer: "Mars",
    },
    {
      question: "Who wrote Hamlet",
      choices: [
        "Charles Dickens",
        "Jan Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];
  let currentQuestionIndex = 0;
  let score = 0;
  startBtn.addEventListener("click", startQuiz);
  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }
  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
  }
});
