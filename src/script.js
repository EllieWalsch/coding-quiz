import { questions } from "./lib.js"
const startBtn = document.querySelector("#btn");
const question = document.querySelector("#question");
const answerList = document.querySelector("#list");

// TODO: make a const for all of my classes and ids


// Hide intro when quiz begins
function hideIntro () {
    document.querySelector("#header").classList.toggle("hidden");
    document.querySelector("#btn").style.display = "none";
    startQuestions();
}

// TODO: classList.toggle for hiding and showing

// Hide quiz at the very beginning (will have to do this at high score screen as well)
function hideQuiz () {
    document.querySelector("#quiz").style.display = "none";

}

// Begin at question index 0
let currentQuestionIndex = 0;


// TODO: rework below 
// Replace text content with values from our questions array
function startQuestions () {
    document.querySelector("#quiz").style.display = "block";
    let currentQ = questions[currentQuestionIndex];
    let questionH2 = document.getElementById("question");
    questionH2.innerText = currentQ.question;
    let answerList = document.getElementById("list");
    answerList.innerText = currentQ.choices;

}


// Compare user answer with correct answer
function checkAnswer(event) {
    let userAns = event.target.innerText;
    if (userAns === questions[currentQuestionIndex].correct) {
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



// ****TODO: Put choices in a list so I don't have so many event listeners and query selectors?
hideQuiz ();
startBtn.addEventListener("click", hideIntro);
document.querySelector("#list").addEventListener("click", checkAnswer);








