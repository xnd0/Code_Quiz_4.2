
// -------------------------------------- //
// ----- Highscores Javascript Page ----- //
// -------------------------------------- //


function displayScores() {
    let scores = JSON.parse(localStorage.getItem("highScoreList"));

    for (let index = 0; index < scores.length; index++) {


        const scoreElement = document.createElement("li");
        scoreElement.textContent = scores
        scoreList.appendChild(scoreElement); 
        
    }
}



displayScores();