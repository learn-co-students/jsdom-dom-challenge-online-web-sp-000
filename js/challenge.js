// Variable declaration
let counter = document.getElementById('counter');
let pause = document.getElementById('pause');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let comments = document.getElementById('list');
let commentForm = document.getElementById('comment-form');
const user_input = document.getElementById('comment-input');
let submit = document.getElementById('submit');
let paused = false;

// Comment submission
commentForm.addEventListener('submit', function(event){
  let newComment = document.createElement('p');
  newComment.innerHTML = user_input.value;
  comments.appendChild(newComment);
  event.preventDefault();
  user_input.value = "";
});

// Updating the counter
function updateCounterTime(value) {
  let counterInt = parseInt(counter.innerText);
  counterInt += value;
  counter.innerText = counterInt.toString();
};
//
// document.addEventListener("DOMContentLoaded", () => {
//   counter.setInterval(updateCounterTime(), 1000, 1);
// })

minus.addEventListener('click', function(event){
  updateCounterTime(-1);
});

plus.addEventListener('click', function(event){
  updateCounterTime(1);
});

// Pressing pause - disable all buttons
pause.addEventListener('click', function(event){
  submit.disabled = !submit.disabled;
  plus.disabled = !plus.disabled;
  minus.disabled = !minus.disabled;
  heart.disabled = !heart.disabled;
  if (paused) {
    pause.innerText = "pause";
  } else {
    pause.innerText = "resume";
  }
  paused = !paused;
});
