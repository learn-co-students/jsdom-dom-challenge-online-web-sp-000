let timeOut = setInterval(counterIncreaseByOne, 1000); // takes an argument of the function counterIncreaseByOne and repeats the interval every 1 seconc
let pause = document.getElementById("pause"); // pause button
let incrementButton = document.getElementById("plus"); // plus button
let decrementButton = document.getElementById("minus"); // minus button
let heart = document.getElementById("heart"); // heart button

// right now only the pause button fully works
document.addEventListener("DOMContentLoaded", () => {
  timeOut;
});

function counterIncreaseByOne() {
  let counterIncrement = document.getElementById("counter");
  let counterCount = parseInt(counterIncrement.innerText); //parseint takes the 0 in the counterIncrement and makes it into an integer
  counterIncrement.innerText = counterCount += 1;
}

pause.addEventListener("click", (e) => {
  clearInterval(timeOut);
});
