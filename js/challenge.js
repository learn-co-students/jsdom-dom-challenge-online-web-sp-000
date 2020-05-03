const form = document.getElementById('comment-form');
const pauseButton = document.getElementById('pause')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const likeButton = document.getElementById('heart')
let likedNumbers = new Map()
let paused = false
let intervalID;

plusButton.addEventListener('click', plusTime)
minusButton.addEventListener('click', minusTime)
likeButton.addEventListener('click', clickedLike)
pauseButton.addEventListener('click', pause)


setTimeout(start, 5000);
  var i = 1;
  var num = document.getElementById("counter");
function start() {
  setInterval(increase, 1000);
}

function increase() {
    if (i < 10000000000) {
      i++;
      num.innerText = i;
    }
}


document.addEventListener("DOMContentLoaded", () => {


let taskDescription = document.getElementById('comment-input');

function addComment (event) {
  const comment = document.createElement('p');
  comment.textContent = taskDescription.value;
  list.appendChild(comment);
  event.preventDefault();
}
form.addEventListener("submit", addComment, false);
});

function pause() {
    if (!paused) {
        paused = true
        clearInterval(intervalID)
        pauseButton.innerHTML = 'resume'
        likeButton.disabled = true
        plusButton.disabled = true
        minusButton.disabled = true
        return !increase
    } else {
        paused = false
        increase()
        pauseButton.innerHTML = 'pause'
        likeButton.disabled = false
        plusButton.disabled = false
        minusButton.disabled = false
        return increase
    }
}

function plusTime(){
  let number = parseInt(counter.innerHTML, 10)
  counter.innerHTML = `${number + 1}`
}

function minusTime(){
  let number = parseInt(counter.innerHTML, 10)
  if (number > 0) {
      counter.innerHTML = `${number - 1}`
  }
}

function clickedLike() {
  let number = parseInt(counter.innerHTML, 10)
  let ul = document.querySelector('ul.likes')
  let li = document.createElement('li')
  let count = 1

  if (likedNumbers.has(number)) {
      count = likedNumbers.get(number) + 1
      li = document.querySelector('[data-num="'+ CSS.escape(number)+ '"]')
      li.innerHTML = `${number} number has been liked ${count} times`
      likedNumbers.set(number, count)
  } else {
      li.setAttribute('data-num', number)
      li.innerHTML = `${number} number has been liked ${count} times`
      ul.appendChild(li)
      likedNumbers.set(number, count)
  }
}
