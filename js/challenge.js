// declared variables
const counter = document.getElementById("counter")
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const heartButton = document.getElementById("heart")
const commentForm = document.getElementById("comment-form")
const pauseButton = document.getElementById("pause")
let seconds = 0;
let count;
let paused = false

//event listeners
document.addEventListener('DOMContentLoaded', startTime)
plusButton.addEventListener('click', manuallyIncrement)
minusButton.addEventListener('click', manuallyDecrement)
heartButton.addEventListener('click', liked)
commentForm.addEventListener('submit', leaveAComment)
pauseButton.addEventListener('click', pauseTimer)

//functions

function startTime() {
    function time () {
        seconds = parseInt(counter.innerHTML, 10) + 1;
        counter.innerHTML = seconds;
    }
    count = setInterval(time, 1000) 

}

function manuallyIncrement() {
    let currentNumber = parseInt(counter.innerHTML, 10)
    counter.innerHTML = `${currentNumber + 1}`
}

function manuallyDecrement() {
    let currentNumber = parseInt(counter.innerHTML, 10)
    counter.innerHTML = `${currentNumber - 1}`
}

function liked() {
    let likesList = document.getElementsByClassName("likes")
    let likedNumber = parseInt(counter.innerHTML, 10)
    let like = document.createElement('li')
    let count = 0
    like.innerHTML = `${likedNumber} has been liked <span id="displayCount">1</span> time(s)`
        
    heartButton.onclick = function(){
        count++;
        document.getElementById("displayCount").innerHTML = count
    }
    likesList[0].appendChild(like)
}

function leaveAComment(event) {
    event.preventDefault()

    let comment = document.getElementById("comment-input").value
    let commentList = document.getElementById("list")
    let newComment = document.createElement("p")

    newComment.innerHTML = comment
    commentList.appendChild(newComment)
    commentForm.reset()
}

function pauseTimer() {
    if (!paused) {
        paused = true
        clearInterval(count)
        pauseButton.innerHTML = 'resume'
        plusButton.disabled = true
        minusButton.disabled = true
        heartButton.disabled = true
    } else {
        paused = false
        startTime()
        pauseButton.innerHTML = 'pause'
        plusButton.disabled = false
        minusButton.disabled = false
        heartButton.disabled = false

    }
}