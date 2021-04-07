let count = document.getElementById("counter");

function incrementCounter() {
  const newCount = parseInt(num.innerText, 10) + 1;
  count.innerText = newCount
}

function decrementCounter() {
  const newCount = parseInt(count.innerText, 10) - 1;
  count.innerText = newCount;
}

let timerInterval = setInterval(incrementCounter, 1000);

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const like = document.getElementById("like");
const pause = document.getElementById("pause");
const submit = document.getElementById("submit");

const commentForm = document.getElementById("comment-form");

const commentDiv = document.getElementById("list");
const commentBox = document.getElementById("comment-input");

function currentLikes() {
  const currentValue = num.innerText;
}

const ulElement = document.getElementsByClassName("likes")[0];

const thisLi = document.getElementById(currentValue);

if (thisLi) {
  const previousValue = thisLi.innerText.split(" ")[4];
  const newValue = parseInt(previousValue, 10) + 1;
  thisLi.innerText = currentValue + " has been liked " + newValue + " times"

} else {
  const newLi = document.createElement('li');
  newLi.setAttribute("id", currentValue)
  newLi.innerText = currentValue + " has been liked 1 time";

  ulElement.appendChild(newLi);
  }
}

form.addEventListener("submit", function(event) {
event.preventDefault();
const newComment = document.createElement("p");
newComment.innerText = commentBox.value;
commentDiv.appendChild(newComment);
commentBox.value = "";
});

function pauseEverything() {
if (pauseButton.innerText === "pause") {
  minusButton.disabled = true;
  plusButton.disabled = true;
  likeButton.disabled = true;
  submitButton.disabled = true;
  pauseButton.innerText = "resume";
  window.clearInterval(timerIntervalId);
} else if (pauseButton.innerText === "resume") {
  minusButton.disabled = false;
  plusButton.disabled = false;
  likeButton.disabled = false;
  submitButton.disabled = false;
  pauseButton.innerText = "pause";
  timerIntervalId = setInterval(incrementCounter, 1000);
}
}