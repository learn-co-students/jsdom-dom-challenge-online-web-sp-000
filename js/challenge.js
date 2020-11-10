document.addEventListener("DOMContentLoaded", function() {
    activateButtons();
})

let count = setInterval(increment, 1000);
let counter = document.getElementById("counter");

function increment() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

function decrement() {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
}

function addLike(number) {
    let list = document.querySelector("ul")
    if (document.getElementById(number)) {
        let liked = document.getElementById(number)
        let likes = parseInt(liked.innerText.split(" ")[2]) + 1
        liked.innerText = `${number} has ${likes} likes.`
    }
    else {
        let liked = document.createElement("li")
        liked.id = `${number}`
        liked.innerText = `${number} has 1 like.`
        list.appendChild(liked)
    }    
}

function activateButtons() {
    plusButton();
    minusButton();
    likeButton();
    pauseButton();
    submitComment();
}

function plusButton() {
    let plus = document.getElementById("plus")
    plus.addEventListener("click", increment)
}

function minusButton() {
    let minus = document.getElementById("minus")
    minus.addEventListener("click", decrement)
}

function likeButton() {
    let heart = document.getElementById("heart")
    heart.addEventListener("click", function(){ addLike(counter.innerText) })
}

function pauseButton() {
    let pause = document.getElementById("pause")
    pause.addEventListener("click", function() {
        if (pause.innerText === "pause") {
            clearInterval(count);
            pause.innerText = "resume";
            document.getElementById("heart").disabled = true;
            document.getElementById("plus").disabled = true;
            document.getElementById("minus").disabled = true;
            document.getElementById("submit").disabled = true;
        }
        else if (pause.innerText === "resume") {
            count = setInterval(increment, 1000);
            pause.innerText = "pause";
            document.getElementById("heart").disabled = false;
            document.getElementById("plus").disabled = false;
            document.getElementById("minus").disabled = false;
            document.getElementById("submit").disabled = false;
        }
    })
}

function submitComment () {
    let commentSection = document.querySelector("div")
    let submit = document.getElementById("submit")
    submit.addEventListener("click", function() {
        event.preventDefault();
        let commentValue = document.getElementById("comment-input").value
        let comment = document.createElement("p")
        comment.innerText = commentValue 
        commentSection.appendChild(comment)
    })
}