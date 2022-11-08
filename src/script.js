import { questions } from "./lib.js"
const startBtn = document.querySelector("#btn");
let questionH2 = document.getElementById("question");
let answerList = document.getElementById("list");
let timeH3 = document.querySelector("h3");
let userScore = document.getElementById("user-score");
const submitScore = document.getElementById("submit-score");
const scoreList = document.getElementById("score-list");

let timeSeconds = 50;
const interval = 1000;


// Begin on intro page
hideQuiz ();
hideScores ();


// Hide intro when quiz begins
function hideIntro () {
    document.querySelector("#header").classList.toggle("hidden");
    startQuestions();
};

// Hide quiz at the very beginning
function hideQuiz () {
    document.querySelector("#quiz").classList.toggle("hidden");
};

// Hide scores during intro and quiz
function hideScores () {
    document.querySelector("#high-score").classList.toggle("hidden");
};


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
};


// Compare user answer with correct answer
function checkAnswer(event) {
    let userAns = event.target.innerText;
    if (userAns === questions[currentQuestionIndex].answer) {
        timeSeconds = timeSeconds + 5;
    } else {
        timeSeconds = timeSeconds - 10;
    };
    // Add 1 to our currentQuestionIndex to show another question
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex ++;
        startQuestions ();
    } else {
        showScores (); 
        return timeSeconds;
    };
};


// Added a placeholder last question - fix this later
// Countdown remaining time
function startTimer() {
    const startTimerInterval = setInterval (function (){
        timeSeconds--;
        timeH3.innerHTML = `${timeSeconds} seconds remaining!`;
        if (timeSeconds <= 0) {
            clearInterval(startTimerInterval);
            showScores();
        } else if (currentQuestionIndex == 7){
            clearInterval(startTimerInterval);
            showScores ();
        };
    }, interval);
};


// Show timeSeconds as user score
function showScores () {
    document.querySelector("#high-score").style.display = "block";
    document.querySelector("#quiz").style.display = "none";
    userScore.innerText = `Your final score is ${timeSeconds}`;
};


// Add initials and score to localStorage
function handleSubmit(event) {
    event.preventDefault();
    const initials = document.querySelector("#initials").value;

    if (initials == "") {
        alert("Please enter your initials.");
        return false;

    } else {
        const userScore = {
            initials: initials,
            score: timeSeconds,
        };

        let allScores = localStorage.getItem("allScores");

        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        };

        // Push most recent user score to all scores
        allScores.push(userScore);

        // Sort all scores from high to low
        allScores.sort( (a, b) => {
            return b.score - a.score;
        });

        // When quiz is reloaded, add new score to all scores
        const newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);


        // tutorial: https://www.youtube.com/watch?v=jfOv18lCMmw&ab_channel=JamesQQuick
        scoreList.innerHTML = allScores
        .map(score => {
            return `<li class="all-scores">${score.initials} - ${score.score}</li>`;
        })
        .join("");
    };
};


startBtn.addEventListener("click", () => {    
    hideIntro ();
    startTimer();    
});
answerList.addEventListener("click", checkAnswer);
submitScore.addEventListener("click", handleSubmit);











