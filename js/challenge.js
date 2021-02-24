// As a user, I should see the timer increment every second once the page has loaded.
document.addEventListener("DOMContentLoaded", setCounter);

function setCounter () {
  let seconds = setInterval(increaseCounter, 1000);
  increaseCounter();
}

// Attach Event Listeners to to document
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

// As a user, I can manually increment or decrement the counter using the plus and minus buttons
// grab the counter element in order to manipulate it
const counter = document.getElementById("counter");
let counterNumber = parseInt(counter.innerText, 10);

// grab the plus and minus buttons
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

// As a user, I can 'like' and individual number of the counter. I should see count of the 
// number of 'likes' associated with that number.



