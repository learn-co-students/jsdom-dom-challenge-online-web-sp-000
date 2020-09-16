document.addEventListener("DOMContentLoaded", function() { start() })

let pause = false;
const counter = document.getElementById('counter');
const increaseCounter = document.getElementById('plus');
const decreaseCounter = document.getElementById('minus');
const likeButton = document.getElementById('heart');
const pauseCounter = document.getElementById('pause');


// As a user, I should see the timer increment every second once the page has loaded.

function incrementCounter() {
  counter.innerText++
}

function decrementCounter() {
  counter.innerText--
}

function plus() {
  increaseCounter.addEventListener("click", function() {
    if (pause == false)
    incrementCounter()
  })
}

function minus() {
  decreaseCounter.addEventListener("click", function() {
    if (pause == false)
    decrementCounter()
  })
}

function beginPause() {
  pauseCounter.addEventListener("click", function() { pauseInterval() })
}

function pauseInterval() {
  pause = true
  clearInterval(1);
  pauseCounter.addEventListener("click", function() { resume() });
  pauseCounter.innerText = "resume"
}

function resume() {
  pause = false
  interval()
  pauseCounter.addEventListener("click", function() { beginPause() });
  pauseCounter.innerText = "pause"
}

function interval(){
  setInterval(function() {incrementCounter()}, 1000)
  }

function likes() {
  likeButton.addEventListener("click", function() {
    if (pause == false)
    createLike()
  })
}

function createLike() {
  let likesList = document.getElementsByClassName("likes")
  let newLike = document.createElement("li")
  let likeCount = 1
  newLike.setAttribute("id", `${counter.innerText}`);
  newLike.setAttribute("like-count", `${likeCount}`);
  newLike.innerHTML = `Number ${counter.innerText}, ${likeCount} like`
  likesList[0].appendChild(newLike)
}

function comment() {
  let textInput = document.getElementById('comment-input').value
  newComment = document.createElement('p')
  newComment.innerHTML = textInput
  document.getElementsByTagName('h3')[0].appendChild(newComment)
}

function disableSubmit() {
    document.getElementById("submit").addEventListener("click", function(event) {
        event.preventDefault();
        comment()
    })
}



  function start() {
    interval();
    plus();
    minus();
    likes();
    beginPause();
    disableSubmit();
}
