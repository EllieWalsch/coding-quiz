const startBtn = document.querySelector("#btn");
const quizContainer = document.querySelector(".quiz")

startBtn.addEventListener("click", startQuiz)

// TODO: when button is clicked, display something
function startQuiz (){
    document.querySelector(".quiz").innerHTML = "YOU CLICKED ME!";
}
