// As a user, I should see the timer increment every second once the page has loaded.

document.addEventListener("DOMContentLoaded", startCounter);
let seconds;

document.addEventListener("click", function(event) {
  if (event.target == plusButton) {
    incCounter();
  } else if (event.target == minusButton) {
    decCounter();
  } else if (event.target == likeButton) {
    newLike();
  } else if (event.target == pauseButton) {
    pauseCounter();
  }
});

function startCounter() {
  seconds = setInterval(incCounter, 1000);
  incCounter();
}

// As a user, I can manually increment and decrement the counter using the plus and minus buttons.

const counter = document.getElementById("counter");
let counterNumber = parseInt(counter.innerText, 10);

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

function incCounter() {
  counterNumber++;
  counter.innerText = counterNumber.toString();
}

function decCounter() {
  counterNumber--;
  counter.innerText = counterNumber.toString();
}

// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
  // PSEUDOCODE
  // Listen for like button click
  // Grab counter number on "click"
  // See if the counterNumber has already been liked
  // If no:
    // Create new list item that reads "${counterNumber} has been liked ${frequency} time", frequency being 1
  // If yes:
    // Update list item to read "${counterNumber} has been liked ${frequency} times", frequency being > 1

const likeButton = document.getElementById("heart");
const likeList = document.getElementById("likes");

let likeListItem;
let likedNumbers = {};

function newLike() {
  if (Object.keys(likedNumbers).includes(counterNumber.toString())) {
    updateLike();
  } else {
    likeListItem = document.createElement("li");
    firstTimeLike();
  }
}

function firstTimeLike() {
  likedNumbers[counterNumber] = 1;
  likeListItem.id = "li-" + counterNumber;
  likeListItem.innerText = `${counterNumber} has been liked 1 time`;
  likeList.appendChild(likeListItem);
}

function updateLike() {
  likedNumbers[counterNumber] += 1;
  let updateListItem = document.getElementById(`li-${counterNumber}`);
  updateListItem.innerText = `${counterNumber} has been liked ${likedNumbers[counterNumber]} times`;
}

// As a user, I can pause the counter, which should:
  // Pause the counter
  // Disable all buttons except the pause button
  // Display the text "resume" on the pause button
// When 'resume' is clicked, it should restart the counter, re-enable the buttons, and change the button text back to "pause".

const pauseButton = document.getElementById("pause");
const buttons = document.getElementsByTagName("button");

function pauseCounter() {
  if (pauseButton.innerText == "pause") {
    clearInterval(seconds);
    pauseButton.innerText = "resume";
  
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id != "pause") {
        buttons[i].disabled = true;
      }
    }
  } else if (pauseButton.innerText == "resume") {
    startCounter();
    pauseButton.innerText = "pause";

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
    }
  }
}

// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

const commentsForm = document.getElementById("comment-form");
const commentsList = document.getElementById("list");
let newComment;

commentsForm.addEventListener("submit", addComment);

function addComment(comment) {
  comment.preventDefault();
  
  let commentText = document.getElementById("comment-input");

  newComment = document.createElement("p");
  newComment.innerText = commentText.value;
  commentsList.appendChild(newComment);

  commentText.value = "";
}