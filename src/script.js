import { questions } from "./lib.js"
const startBtn = document.querySelector("#btn");
let questionH2 = document.getElementById("question");
let answerList = document.getElementById("list");
let timeH3 = document.querySelector("h3");
let userScore = document.getElementById("high-score");
let timeSeconds = 50;
const interval = 1000;


// TODO: make a const for all of my classes and ids

// Begin on intro page
hideQuiz ();
hideScores ();

// Hide intro when quiz begins
function hideIntro () {
    document.querySelector("#header").classList.toggle("hidden");
    startQuestions();
}

// Hide quiz at the very beginning
function hideQuiz () {
    document.querySelector("#quiz").classList.toggle("hidden");
}

// Hide scores during intro and quiz
function hideScores () {
    document.querySelector("#high-score").classList.toggle("hidden");
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
        timeSeconds = timeSeconds + 5;
    } else {
        timeSeconds = timeSeconds - 10;
    }
    // Add 1 to our currentQuestionIndex to show another question
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex ++;
        startQuestions ();
    } else {
        showScores (); 
        return timeSeconds;
    }
}


// Countdown remaining time
function startTimer() {
    const startTimerInterval = setInterval (function (){
        timeSeconds--;
        timeH3.innerHTML = `${timeSeconds} seconds remaining!`;
        if (i < 0) {
            clearInterval(startTimerInterval);
            showScores();
        } else if (currentQuestionIndex === questions.length){
            clearInterval(startTimerInterval);
        }
    }, interval)
}


// Show timeSeconds as user score
function showScores () {
    document.querySelector("#high-score").style.display = "block";
    document.querySelector("#quiz").style.display = "none";
    userScore.innerText = `Your score is ${timeSeconds}`;
}

// TODO: enter initials and save score
// TODO: this will have to be a form?


startBtn.addEventListener("click", () => {    
    hideIntro ();
    startTimer();    
});
answerList.addEventListener("click", checkAnswer);










