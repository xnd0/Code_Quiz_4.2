// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //


var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector("#time-display");


let timeLeft = 75;

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


startButton.addEventListener("click", setTimer);


