const startBtn = document.querySelector("#btn");


startBtn.addEventListener("click", startQuiz)


function startQuiz () {
    document.querySelector("#header").style.display = "none";
    document.querySelector("#btn").style.display = "none";
    return startQuestions();
}

function startQuestions () {
    console.log("hello");
}


// TODO: display a question








