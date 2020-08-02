// Action Buttons
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const commentSubmit = document.getElementById("submit");
const allButtons = [plus, minus, heart, commentSubmit];

const counter = document.getElementById("counter");
const pause = document.getElementById("pause");
const likesList = document.querySelector("ul.likes");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentsList = document.getElementById("list");

//Counter Features
let counterInterval;

function startCounter() {
  counterInterval = setInterval(increaseCounter, 1000);
}

function stopCounter() {
  clearInterval(counterInterval);
}

function increaseCounter() {
  counter.innerText = parseInt(counter.innerText) + 1;
}

function decreaseCounter() {
  counter.innerText = parseInt(counter.innerText) - 1;
}

// Pause Button Features
function pauseCounterAndDisableFeatures() {
  stopCounter();
  disableAllButtons();
  pause.innerText = "resume";
}

function resumeCounterAndEnableFeatures() {
  startCounter();
  enableAllButtons();
  pause.innerText = "pause";
}

function disableAllButtons() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].disabled = true;
  }
}

function enableAllButtons() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].disabled = false;
  }
}

// Like Button Features
function likeNumber() {
  const existingListItem = document.getElementById(counter.innerText);
  existingListItem ? likeExistingNumber(existingListItem) : likeNewNumber();
}

function likeExistingNumber(existingElement) {
  const existingLikeCount = parseInt(
    existingElement.firstElementChild.innerText
  );
  existingElement.firstElementChild.innerText = existingLikeCount + 1;
}

function likeNewNumber() {
  const newListItem = document.createElement("li");
  newListItem.innerHTML = `${
    counter.innerText
  } has been liked <span>${1}</span> time`;
  newListItem.id = counter.innerText;
  likesList.appendChild(newListItem);
}

// New Comment Feature
function addComment() {
  const newComment = document.createElement("p");
  newComment.innerText = commentInput.value;
  commentsList.appendChild(newComment);
  commentInput.value = "";
}

// Event Listeners
plus.addEventListener("click", increaseCounter);
minus.addEventListener("click", decreaseCounter);

pause.addEventListener("click", function (e) {
  pause.innerText == "pause"
    ? pauseCounterAndDisableFeatures()
    : resumeCounterAndEnableFeatures();
});

heart.addEventListener("click", likeNumber);

commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addComment();
});

document.addEventListener("DOMContentLoaded", startCounter);
