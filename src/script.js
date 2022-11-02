import { questions } from "./lib.js"
const startBtn = document.querySelector("#btn");
let questionH2 = document.getElementById("question");
let answerList = document.getElementById("list");

// TODO: make a const for all of my classes and ids

// Begin on intro page
hideQuiz ();

// Hide intro when quiz begins
function hideIntro () {
    document.querySelector("#header").classList.toggle("hidden");
    document.querySelector("#btn").classList.toggle("hidden");
    startQuestions();
}

// TODO: classList.toggle for hiding and showing

// Hide quiz at the very beginning (will have to do this at high score screen as well)
function hideQuiz () {
    document.querySelector("#quiz").classList.toggle("hidden");
}

// Begin at question index 0
let currentQuestionIndex = 0;


// Replace text content with values from our questions array
function startQuestions () {
    document.querySelector("#quiz").style.display = "block";

    let currentQ = questions[currentQuestionIndex];

    questionH2.innerText = currentQ.question;

    answerList.innerHTML = "";

    currentQ.choices.forEach((choice) => {
        const li = document.createElement("li");
        li.innerHTML = `<button type="button">${choice}</button>`;
        answerList.appendChild(li);
    });
}


// Compare user answer with correct answer
function checkAnswer(event) {
    let userAns = event.target.innerText;
    if (userAns === questions[currentQuestionIndex].answer) {
        console.log("correct");
    } else {
        console.log("wrong");
    }
    // Add 1 to our currentQuestionIndex to show another question - TODO: if quiz is over, show high scores
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex ++;
        startQuestions ();
    } else {
        console.log("end quiz");
    }
}

function countDown () {

}

// TODO: Make a timer REWATCH 10/27 lecture
// TODO: If answer is wrong, subtract time



startBtn.addEventListener("click", hideIntro);
answerList.addEventListener("click", checkAnswer);









