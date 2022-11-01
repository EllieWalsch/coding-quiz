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

        correct : "choiceA"
    },{
        question : "Question 2?",

        choiceA : "Wrong",

        choiceB : "Correct",

        choiceC : "Wrong",

        correct : "choiceB"
    },{
        question : "Question 3?",

        choiceA : "Wrong",

        choiceB : "Wrong",

        choiceC : "Correct",

        correct : "choiceC"
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


// Replace text content with values from our questions array
function startQuestions () {
    let currentQ = questions[currentQuestionIndex];
    question.innerText = currentQ.question;
    choiceA.innerText = currentQ.choiceA;
    choiceB.innerText = currentQ.choiceB;
    choiceC.innerText = currentQ.choiceC;
}

function checkAnswer(event) {
    let userAns = event.target
    if (userAns === correct) {
        console.log("correct")
    } else {
        console.log("wrong")
    }
     
//   TODO: compare user answer with correct answer using ===
}

// TODO: check if answer is correct


startBtn.addEventListener("click", hideIntro);
choiceA.addEventListener("click", checkAnswer);
choiceB.addEventListener("click", checkAnswer);
choiceC.addEventListener("click", checkAnswer);






