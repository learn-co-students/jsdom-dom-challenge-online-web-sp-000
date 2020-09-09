// need boolean to keep track of timer state
let active = true;
let sec = 0;

window.addEventListener('DOMContentLoaded', (event) => {startTimer();
})

let timer = document.getElementById('counter').innerHTML;
// main function
function startTimer() {
    if (active == true) {
        setTimeout(() => {
            sec++;
            console.log(sec);
        }, 1000); 
        // keep repeating at pace of 1 second
        
    }
}

// function to change states (pause/resume) by clicking
function changeState() {
    if (active == false) {
        active = true;
        startTimer();
        console.log("Timer has been started");
        document.getElementById('pause').innerHTML = "Pause"
        pause.addEventListener('pause', function(event) {
            clearInterval();
        });
    } else {
        active = false;
        console.log("Timer has paused");
        document.getElementById('pause').innerHTML = "Resume";
        pause.addEventListener('pause', function(event) {
            startTimer();
        })
    }
}
