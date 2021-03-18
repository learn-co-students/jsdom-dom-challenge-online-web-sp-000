// elements
const counter = document.getElementById("counter");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const heartButton = document.getElementById("heart");
const buttons = [plusButton, minusButton, heartButton]
const likesList = document.querySelector("ul.likes");
const pauseButton = document.getElementById("pause");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("list");

// incrementer
let incrementer = incrementerValue();

// functions
function incrementerValue() {
    return window.setInterval(incrementCounter, 1000);
}

function incrementCounter() {
    counter.innerText = parseInt(counter.innerText) + 1;
}

function decrementCounter() {
    counter.innerText = parseInt(counter.innerText) - 1;
}

function addLike() {
    let newLike = document.createElement("li");
    newLike.innerText = counter.innerText;
    likesList.appendChild(newLike);
}

function toggleState() {
    let state = pauseButton.innerText;
    if (state == "pause") {
        window.clearInterval(incrementer);
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        pauseButton.innerText = "resume";
    } else {
        incrementer = incrementerValue();
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }
        pauseButton.innerText = "pause";
    }
}

function addComment() {
    let newComment = document.createElement("p");
    newComment.innerText = commentInput.value;
    commentList.appendChild(newComment);
    commentInput.value = "";
}

// events

plusButton.addEventListener("click", incrementCounter);
minusButton.addEventListener("click", decrementCounter);
heartButton.addEventListener("click", addLike);
pauseButton.addEventListener("click", toggleState);
commentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addComment();
});