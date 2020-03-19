<!-- counter -->
let seconds = 0;
let counter = document.getElementById("counter");
// let startCounter = setInterval(timer, 1000);
let paused = false;
startCounter();
function startCounter() {
    setInterval(timer, 1000);
}
function timer() {
    if (!paused) {
        seconds += 1;
    }
    counter.innerText = seconds;
}
// pause button
function pause() {
    if (paused == false) {
        console.log("counter paused");
        clearInterval(startCounter);
        paused = true;
    }
    else if (paused == true) {
        console.log("counter started");
        paused = false;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("pause");
    button.addEventListener("click", pause);
})
// end of pause button code
