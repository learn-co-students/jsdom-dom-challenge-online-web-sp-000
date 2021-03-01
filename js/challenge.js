const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const likesUl = document.querySelector("ul")
const pause = document.getElementById("pause")
const counter = document.getElementById("counter")
const commentForm = document.getElementById("comment-form")
const commentInput = document.getElementById("comment-input")
const commentList = document.getElementById("list")

let timer
function startTimer() {
  timer = setInterval(plusCount, 1000);
}
function toggle() {
  if (!timer) { startTimer(); } 
  else { clearInterval(timer); timer = null; }
}

const addComment = event => {
  event.preventDefault();
  let p = document.createElement("p")
  commentList.appendChild(p).innerText = `${commentInput.value}`
  event.target.reset()
}

const addLike = event => {
  let count = parseInt(counter.innerText)
  let li = document.createElement("li")
  let newLike = likesUl.appendChild(li).innerText = `${count} has been liked`
}

const minusCount = event => {
  let count = parseInt(counter.innerText, 10);
  counter.innerText = `${count - 1}`
}

const plusCount = event => {
  let count = parseInt(counter.innerText, 10);
  counter.innerText = `${count + 1}`
}

let buttons = document.querySelectorAll("button")
const toggleCounter = event => {
  toggle();
  if (pause.innerText === "pause") { 
    pause.innerText = "resume";
    buttons[0].disabled = true;  
    buttons[1].disabled = true;  
    buttons[2].disabled = true;  
    buttons[4].disabled = true;  
  }
  else { 
    pause.innerText = "pause";
    buttons[0].disabled = false;  
    buttons[1].disabled = false;  
    buttons[2].disabled = false;  
    buttons[4].disabled = false;
  };
}

minus.addEventListener("click", minusCount);
plus.addEventListener("click", plusCount);
commentForm.addEventListener("submit", addComment);
pause.addEventListener("click", toggleCounter);
heart.addEventListener("click", addLike);
document.addEventListener("DOMContentLoaded", () => {
  startTimer();
});