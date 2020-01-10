const counter = document.getElementById("counter");

function increment() {
    counter.innerText++
}

function decrement() {
    counter.innerText--
}

function updateLikes() {
    let likesList = document.getElementsByClassName("likes")
    let newLike = document.createElement("li")
    newLike.innerHTML = `Number ${counter.innerText}, +1 like`
    likesList[0].appendChild(newLike)
}

document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() { increment() }, 1000);
})

const upbutton = document.getElementById("plus");
upbutton.addEventListener("click", function() {
    increment()
})

const downbutton = document.getElementById("minus");
downbutton.addEventListener("click", function() {
    decrement()
})

const likebutton = document.getElementById("heart");
likebutton.addEventListener("click", function() {
    updateLikes()
})