// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //


// Declare Variables //
var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector("#time-display");

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");



let timeLeft = 45;
let currentQuestion = 0;
let finalScore = 0;



// Quiz Question Content //
let questionArray = [{
    question: "How do you print to the console?",
    answer1: "console.log",
    answer2: "console.tree",
    answer3: "console.frog",
    answer4: "console.print",
    correctProp: "answer1",
},

{
    question: "Which is NOT one of the primitive types?",
    answer1: "string",
    answer2: "yarn",
    answer3: "number",
    answer4: "boolean",
    correctProp: "answer2",
},

{
    question: "How do you add an item to the front of an array?",
    answer1: ".sort(item)",
    answer2: ".push(item)",
    answer3: ".unshift(item)",
    answer4: ".pop(item)",
    correctProp: "answer3",
},

{
    question: "Objects are a collection of _________?",
    answer1: "cantaloupes and pears",
    answer2: "sea-lion chairs",
    answer3: "fleece and hair",
    answer4: "key-value pairs",
    correctProp: "answer4",
}
];


// Functions //

function displayCard() {
    let q = questionArray[currentQuestion];

    // Questions and Answers display
    askQuestion.textContent = q.question;
    btn1.textContent = q.answer1;
    btn2.textContent = q.answer2;
    btn3.textContent = q.answer3;
    btn4.textContent = q.answer4;

}


// Logic for checking answers + follow up actions
function checkAnswer(choice) {

    
    let rightAnswer = questionArray[currentQuestion].correctProp; 

    if (choice == rightAnswer) {
        alert("correct!");
        console.log("Corrrrhect Answer");
        currentQuestion++;
        //check if games over yet
        if (currentQuestion >= 4) {      
            gameOver();
        } 
        displayCard();
    } else {
        alert("wrong!");
        timeLeft = timeLeft - 10;
        currentQuestion++;
        //check if games over yet
        if (currentQuestion >= 4) {      
            gameOver();
        } 
        displayCard();
    }

}


function setTimer () {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if(timeLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            gameOver();
          }
    }, 1000); 
}


function gameOver() {
    finalScore = timeLeft
    const initials = prompt("Game Over! your score is: " + finalScore + "\nPlease enter your initials");
    alert(initials);

    let playerScore = {
        initials: initials,
        score: finalScore,
    };

    // Gets the Highscore List OR make a new one if none saved yet
    let highScoreList = JSON.parse(localStorage.getItem("highScoreList")) || [];

    // Saves player's score to local storage
    highScoreList.push(playerScore);
    let saveScore = JSON.stringify(highScoreList);
    localStorage.setItem("highScoreList", saveScore);


}


function playGame() {
    setTimer();
    displayCard();

}


startButton.addEventListener("click", playGame);
// startButton.addEventListener("click", setTimer);


