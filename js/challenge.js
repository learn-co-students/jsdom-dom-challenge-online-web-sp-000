// As a user, I should see the timer increment every second once the page has loaded.
document.addEventListener("DOMContentLoaded", startCounter);

// grab the counter element in order to manipulate it
const counter = document.getElementById("counter");
let counterNumber = parseInt(counter.innerText, 10);
let seconds;

function startCounter () {
  seconds = setInterval(increaseCounter, 1000);
  increaseCounter();
}

function increaseCounter() {
  counterNumber++;
  counter.innerText = counterNumber.toString();
}

function decreaseCounter() {
  counterNumber--;
  counter.innerText = counterNumber.toString();
}

// As a user, I can manually increment or decrement the counter using the plus and minus buttons

// grab the plus and minus buttons
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

// Attach Event Listeners 
document.addEventListener("click", function(event) {
  if (event.target == plusButton) {
    increaseCounter();
  } else if (event.target == minusButton) {
    decreaseCounter();
  } else if (event.target == likeButton) {
    addLike();
  } else if (event.target == pauseButton) {
    pauseCounter();
  }
});

// As a user, I can 'like' an individual number of the counter. I should see count of the 
// number of 'likes' associated with that number.

// grab the heart/like button and the (ul) list of likes
const likeButton = document.getElementById("heart");
const likes = document.getElementById("likes");

let likesLi;
let likedNumbers = {};

function addLike() {
  if (Object.keys(likedNumbers).includes(counterNumber.toString())) {
    updateLike();
  } else {
    likesLi = document.createElement('li');
    addFirstLike();
  }
}

function addFirstLike() {
  likedNumbers[counterNumber] = 1;
  likesLi.id = `li-${counterNumber}`;
  likesLi.innerText = `${counterNumber} has been liked 1 time.`
  likes.appendChild(likesLi);
}

function updateLike() {
  likedNumbers[counterNumber] += 1;
  let listItem = document.getElementById(`li-${counterNumber}`);
  listItem.innerText = `${counterNumber} has been liked ${likedNumbers[counterNumber]} times.`;
}

/* As a user, I can pause the counter, which should:
  - Pause the counter
  - Disable all buttons except the pause button
  - Display the text "resume" on the pause button
When 'resume' is clicked, it should restart the counter, re-enable the buttons, and change the button text back to "pause". */

// Grab the pause button and all buttons in the window
const pauseButton = document.getElementById("pause");
const allButtons = document.getElementsByTagName("button");

function pauseCounter() {
  if (pauseButton.innerText == 'pause') {
    clearInterval(seconds);
    pauseButton.innerText = 'resume';

    for (let i = 0; i < allButtons.length; i++) {
      if (allButtons[i].id != 'pause') {
        allButtons[i].disabled = true;
      }
    }
  } else if (pauseButton.innerText == 'resume') {
    startCounter();
    pauseButton.innerText = 'pause';

    for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].disabled = false;
    }
  }  
}