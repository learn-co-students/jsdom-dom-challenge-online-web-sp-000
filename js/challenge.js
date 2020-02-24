let seconds = 0;
const timer = document.querySelector("#counter");
const ul = document.querySelector(".likes");

const likedNumbers = {};

let isPaused = false;

function increaseTime() {
  if (!isPaused) {
    seconds++;
    timer.innerHTML = seconds;
  }
}

function decreaseTime() {
  if (!isPaused) {
    seconds--;
    timer.innerHTML = seconds;
  }
}

document.querySelector("#minus").addEventListener("click", event => {
  if (!isPaused) {
    decreaseTime();
  }
})

document.querySelector("#plus").addEventListener("click", event => {
  if (!isPaused) {
    increaseTime();
  }
})

document.querySelector("#heart").addEventListener("click", event => {
  if (!isPaused) {
    if (likedNumbers[seconds] == null) {
      likedNumbers[seconds] = 0;
    }
    likedNumbers[seconds]++;

    ul.innerHTML = "";

    for (const number in likedNumbers) {
      const li = document.createElement("li");
      li.innerHTML = `${number} - liked ${likedNumbers[number]}`;
      ul.appendChild(li);
    }
  }
})

document.querySelector("#pause").addEventListener("click", event => {
  event.preventDefault();
  isPaused = !isPaused;
  document.querySelector("#pause").innerHTML = isPaused ? "resume" : "pause";
  seconds = 0;
})

document.querySelector("#comment-form").addEventListener("submit", event => {
  event.preventDefault();
  const comment = document.querySelector("#comment-input").value;
  const commentDiv = document.createElement("div");
  const div = document.querySelector("#list");

  commentDiv.innerHTML = comment;
  div.appendChild(commentDiv);
})

setInterval(increaseTime, 1000);