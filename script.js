// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //


// Declare Variables //
var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector("#time-display");

var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");



let timeLeft = 75;
let currentQuestion = 0;



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
    let q = questionArray[currentQuestion];

    // Questions and Answers display
    askQuestion.textContent = q.question;
    btn1.textContent = q.answer1;
    btn2.textContent = q.answer2;
    btn3.textContent = q.answer3;
    btn4.textContent = q.answer4;

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
    displayCard();

}


startButton.addEventListener("click", playGame);
// startButton.addEventListener("click", setTimer);


