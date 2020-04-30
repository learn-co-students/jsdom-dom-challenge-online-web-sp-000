
let counterSeconds = 0;
let counterElement = document.getElementById('counter');
let paused = false;
let pause = document.getElementById('pause');
let myInterval = -1;
let form = document.getElementById('comment-form');


document.addEventListener("DOMContentLoaded", () => {
  pageTimer();
  document.getElementById('minus').addEventListener("click", decreaseCounter);
  document.getElementById('plus').addEventListener("click", increaseCounter);
  pause.addEventListener("click", pageTimer);
  form.addEventListener('submit', addComment);
});

function decreaseCounter() {
  counterSeconds = counterSeconds - 1
  counterElement.innerHTML = counterSeconds
};

function increaseCounter() {
  counterSeconds = counterSeconds + 1
  counterElement.innerHTML = counterSeconds
};

function pageTimer() {
  if (myInterval == -1) {
    pause.innerHTML = 'pause';
    myInterval = setInterval(function () {
      counterElement.innerHTML = ++counterSeconds;
    }, 1000);
  } else {
    pause.innerHTML = 'resume';
    clearInterval(myInterval);
    myInterval = -1;
  }
};

function addComment(event) {
  event.preventDefault();
  const newCommentParent = document.getElementById("list");
  const commentElement = document.getElementById('comment-input');
  const userValue = commentElement.value;
  const insertElement = document.createElement('li');
  insertElement.innerText = userValue;
  newCommentParent.appendChild(insertElement);
};

