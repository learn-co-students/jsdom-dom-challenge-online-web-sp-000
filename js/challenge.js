let num = document.getElementById("counter");

function incrementCounter () {
  const newNum = parseInt(num.innerText, 10) + 1;
  num.innerText = newNum;
}

let timerIntervalId = setInterval(incrementCounter, 1000);

const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const likeButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const submitButton = document.getElementById("submit");

const form = document.getElementById("comment-form");

const commentDiv = document.getElementById("list");
const commentBox = document.getElementById("comment-input");

minusButton.setAttribute("onclick", "subtractFromTimer();");
plusButton.setAttribute("onclick", "incrementCounter();");
likeButton.setAttribute("onclick", "likeCurrentNumber();");
pauseButton.setAttribute("onclick", "pauseEverything();")

function subtractFromTimer () {
  const newNum = parseInt(num.innerText, 10) - 1;
  num.innerText = newNum;
}

function likeCurrentNumber () {
  const currentValue = num.innerText;

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
  // document.getElementById("myBtn").disabled = true;
}
