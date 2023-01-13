const quizData = [
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
let answerEls;

let current_h3 = document.createElement("h3");
current_h3.style.position = "absolute";
current_h3.style.top = "1em";
current_h3.style.left = "2em";
document.body.appendChild(current_h3);

let score_h3 = document.createElement("h3");
score_h3.style.position = "absolute";
score_h3.style.top = "1em";
score_h3.style.right = "2em";
document.body.appendChild(score_h3);

loadQuiz();

function loadQuiz() {
  if (currentQuiz > 3) {
    // condition to check end of quiz
    document.body.innerHTML = "<h2>CONGRATULATIONS!!</h2>";
    score_h3.style.position = "relative";
    score_h3.style.top = "0";
    score_h3.style.right = "0";
    document.body.appendChild(score_h3);
  }
  deselectAnswers();
  document.getElementById("question").innerText =
    quizData[currentQuiz].question;
  document.getElementById("a_text").innerText = quizData[currentQuiz].a;
  document.getElementById("b_text").innerText = quizData[currentQuiz].b;
  document.getElementById("c_text").innerText = quizData[currentQuiz].c;
  document.getElementById("d_text").innerText = quizData[currentQuiz].d;
  answerEls = quizData[currentQuiz].correct;

  current_h3.innerText = "CURRENT QUIZ: " + (currentQuiz + 1);
  score_h3.innerText = "SCORE: " + score;
}

function deselectAnswers() {
  let options = document.querySelectorAll("input[name='answer']");
  for (let i of options) i.checked = false;
  let label_text = document.getElementsByTagName("label");
  for (let i of label_text) i.style.color = "#000";
}

function getSelected() {
  let options = document.querySelectorAll("input[name='answer']");
  for (let i of options) {
    if (i.checked) {
      let selected = i.getAttribute("id");
      let label = document.querySelector(`label[for=${selected}]`);
      let ans = document.querySelector(`label[for=${answerEls}]`);
      if (selected == answerEls) {
        score++;
        label.style.color = "green";
      } else {
        label.style.color = "red";
        ans.style.color = "green";
      }
    }
  }
}

submitBtn.addEventListener("click", () => {
  getSelected();
  currentQuiz++;
  setTimeout(loadQuiz, 5000); // Don't write anything below setTimeout, as it will run immediatly not wait for time-out
});
