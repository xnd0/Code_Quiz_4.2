// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //


// Declare Variables //
var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector("#time-display");


let timeLeft = 75;


// Quiz Question Content //
questionArray = [{
    question: "What is the 1st question?",
    answer1: "1(correct)",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    correctProp: "1",
},

{
    question: "What is the 2nd question?",
    answer1: "1",
    answer2: "2(correct)",
    answer3: "3",
    answer4: "4",
    correctProp: "1",
},

{
    question: "What is the 3rd question?",
    answer1: "1",
    answer2: "2",
    answer3: "3(correct)",
    answer4: "4",
    correctProp: "3",
},

{
    question: "What is the 4th question?",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    answer4: "4(correct)",
    correctProp: "4",
},
]


// Functions //

function displayCard() {
    
}




function setTimer () {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if(timeLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
          }
    }, 100); 
}


function sendMessage() {
    alert("Game Over!");
}


function playGame() {
    setTimer();
    displayCard

}


startButton.addEventListener("click", playGame);
// startButton.addEventListener("click", setTimer);


