const startBtn = document.querySelector("#btn");
const question = document.querySelector("#question");
const choiceA = document.querySelector("#A");
const choiceB = document.querySelector("#B");
const choiceC = document.querySelector("#C");

let questions = [
    {
        question : "Question 1?",

        choiceA : "Correct",

        choiceB : "Wrong",

        choiceC : "Wrong",

        correct : "A"
    },{
        question : "Question 2?",

        choiceA : "Wrong",

        choiceB : "Correct",

        choiceC : "Wrong",

        correct : "B"
    },{
        question : "Question 3?",

        choiceA : "Wrong",

        choiceB : "Wrong",

        choiceC : "Correct",

        correct : "C"
    }
];


// Hide intro when quiz begins
function hideIntro () {
    document.querySelector("#header").style.display = "none";
    document.querySelector("#btn").style.display = "none";
    return startQuestions();
}

// Begin at question index 0
let currentQuestionIndex = 0;


// Replace text content with values from our question array
function startQuestions () {
    let q = questions[currentQuestionIndex];
    question.innerText = q.question;
    choiceA.innerText = q.choiceA;
    choiceB.innerText = q.choiceB;
    choiceC.innerText = q.choiceC;
}


// TODO: display a question to the user

startBtn.addEventListener("click", hideIntro)






