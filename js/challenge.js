// Variables
const counter = document.getElementById("counter");
const form = document.getElementById('comment-form')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const likeButton = document.getElementById('heart') 
const pauseButton = document.getElementById('pause') 
const likedNumbers = new Map()
var totalSeconds = 0;
var paused = false
var intervalID;

// Event Listeners
document.addEventListener('DOMContentLoaded', startTime)
form.addEventListener('submit', addComment)
plusButton.addEventListener('click', plusTime)
minusButton.addEventListener('click', minusTime)
likeButton.addEventListener('click', clickedLike)
pauseButton.addEventListener('click', pause)

// Functions

function startTime() {
    function setTime() {
        totalSeconds = parseInt(counter.innerHTML, 10) + 1;
        counter.innerHTML = totalSeconds;
      }
    intervalID = window.setInterval(setTime, 1000);
}

function pause() {
    if (!paused) {
        paused = true 
        clearInterval(intervalID)
        pauseButton.innerHTML = 'resume'
        likeButton.disabled = true
        plusButton.disabled = true
        minusButton.disabled = true
    } else {
        paused = false
        startTime()
        pauseButton.innerHTML = 'pause'
        likeButton.disabled = false
        plusButton.disabled = false
        minusButton.disabled = false
    }
}

function addComment(event) {
    event.preventDefault()
    
    let input = document.getElementById('comment-input').value
    let div = document.getElementById('list')
    let comment = document.createElement('p')
    comment.innerHTML = input
    div.appendChild(comment)
    form.reset()
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