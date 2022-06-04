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



let timeLeft = 75;
let currentQuestion = 0;



// Quiz Question Content //
let questionArray = [{
    question: "What is the 1st question?",
    answer1: "1(correct)",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    correctProp: "answer1",
},

{
    question: "What is the 2nd question?",
    answer1: "1",
    answer2: "2(correct)",
    answer3: "3",
    answer4: "4",
    correctProp: "answer2",
},

{
    question: "What is the 3rd question?",
    answer1: "1",
    answer2: "2",
    answer3: "3(correct)",
    answer4: "4",
    correctProp: "answer3",
},

{
    question: "What is the 4th question?",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    answer4: "4(correct)",
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
        displayCard();
    } else {
        alert("wrong!");
        currentQuestion++;
        displayCard();
    }

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


