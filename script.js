const startBtn = document.querySelector("#btn");


startBtn.addEventListener("click", startQuiz)


function startQuiz () {
    document.querySelector("#header").style.display = "none";
    document.querySelector("#btn").style.display = "none";
    return startQuestions();


}// TODO: when button is clicked, hide the start quiz screen and begin quiz
function startQuestions () {
    console.log("hello")
}





