// declared variables
const counter = document.getElementById("counter")
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const heartButton = document.getElementById("heart")
const commentForm = document.getElementById("comment-form")
let seconds = 0


//event listeners
document.addEventListener('DOMContentLoaded', startTime)
plusButton.addEventListener('click', manuallyIncrement)
minusButton.addEventListener('click', manuallyDecrement)
// heartButton.addEventListener('click', liked)
commentForm.addEventListener('submit', leaveAComment)

//functions

function startTime() {
    setInterval(time, 1000) 
    function time () {
        seconds = parseInt(counter.innerHTML, 10) + 1;
        counter.innerHTML = seconds;
    }
}

function manuallyIncrement() {
    let currentNumber = parseInt(counter.innerHTML, 10)
    counter.innerHTML = `${currentNumber + 1}`
}

function manuallyDecrement() {
    let currentNumber = parseInt(counter.innerHTML, 10)
    counter.innerHTML = `${currentNumber - 1}`
}

// function liked() {
//     const likedNumber = parseInt(counter.innerHTML, 10)
//     document.createElement('li')
//     li.innerHTML = `${likedNumber} has been liked ${} time`
// }

function leaveAComment(event) {
    event.preventDefault()

    let comment = document.getElementById("comment-input").value
    let commentList = document.getElementById("list")
    let newComment = document.createElement("p")

    newComment.innerHTML = comment
    commentList.appendChild(newComment)
    commentForm.reset()
}
