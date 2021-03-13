document.addEventListener("DOMContentLoaded", setCounter);

function setCounter () {
  let seconds = setInterval(increaseCounter, 1000);
  increaseCounter();
}

document.addEventListener("click", function(event) {
  if (event.target == plusButton) {
    increaseCounter();
  } else if (event.target == minusButton) {
    decreaseCounter();
  } else if (event.target == likeButton) {
    newLike();
  } else if (event.target == pauseButton) {
    pauseCounter();
  }
});


const counter = document.getElementById("counter");
let counterNumber = parseInt(counter.innerText, 10);

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

function increaseCounter() {
  counterNumber++;
  counter.innerText = counterNumber.toString();
}

function decreaseCounter() {
  counterNumber--;
  counter.innerText = counterNumber.toString();
}