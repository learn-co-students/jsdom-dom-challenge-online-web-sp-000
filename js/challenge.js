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
let likesList = document.getElementsByTagName('ul')[0];
let paused = false;
let likes = [];

// Updating the counter
function updateCounterTime(value) {
  let counterInt = parseInt(counter.innerText);
  counterInt += value;
  counter.innerText = counterInt.toString();
};

document.addEventListener("DOMContentLoaded", () => {
  let timer = window.setInterval(updateCounterTime, 1000, 1);

  // Pressing pause - disable all buttons
  pause.addEventListener('click', function(event){
    submit.disabled = !submit.disabled;
    plus.disabled = !plus.disabled;
    minus.disabled = !minus.disabled;
    heart.disabled = !heart.disabled;
    if (paused) {
      pause.innerText = "pause";
      timer = window.setInterval(updateCounterTime, 1000, 1);
    } else {
      pause.innerText = "resume";
      window.clearInterval(timer);
    }
    paused = !paused;
  });

  // Pressing minus - subtract one from the timer
  minus.addEventListener('click', function(event){
    updateCounterTime(-1);
  });

  // Pressing plus - add one to the timer
  plus.addEventListener('click', function(event){
    updateCounterTime(1);
  });

  // Pressing the like button - add one to the current amount in the list
  heart.addEventListener('click', function(event) {
    let counterInt = parseInt(counter.innerText);

    if (typeof likes[counterInt] === 'undefined') {
      likes[counterInt] = 1;
      let li = document.createElement('li');
      li.innerHTML = `${counterInt} has been liked 1 time`;
      li.id = `likes-${counterInt}`;
      likesList.appendChild(li);
    } else {
      likes[counterInt] += 1;
      let li = document.getElementById(`likes-${counterInt}`);
      li.innerHTML = `${counterInt} has been liked ${likes[counterInt]} times`;
    }

  });

  // Comment submission
  commentForm.addEventListener('submit', function(event){
    let newComment = document.createElement('p');
    newComment.innerHTML = user_input.value;
    comments.appendChild(newComment);
    event.preventDefault();
    user_input.value = "";
  });
});
