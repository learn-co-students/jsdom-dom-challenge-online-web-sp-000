const counter = document.getElementById("counter");

function increment() {
    counter.innerText++
}

function decrement() {
    counter.innerText--
}

function createOrUpdateLikes() {
    if (document.getElementById(`${counter.innerText}`) !== null) {
        let foundLike = document.getElementById(`${counter.innerText}`)
        let dataCount = foundLike.getAttribute("data-count")
        dataCount++
        foundLike.setAttribute("data-count", dataCount)
        foundLike.innerHTML = `Number ${counter.innerText}, ${dataCount} likes`
    } else createLike()
}

function createLike() {
    let likesList = document.getElementsByClassName("likes")
    let newLike = document.createElement("li")
    let dataCount = 1
    newLike.setAttribute("id", `${counter.innerText}`);
    newLike.setAttribute("data-count", `${dataCount}`);
    newLike.innerHTML = `Number ${counter.innerText}, ${dataCount} like`
    likesList[0].appendChild(newLike)
}

function interval() { setInterval(function() { increment() }, 1000) }

document.addEventListener("DOMContentLoaded", function() { interval() })

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
    createOrUpdateLikes()
})

const pauseButton = document.getElementById("pause")
pauseButton.addEventListener("click", function() { pause() });


function pause() {
    clearInterval(1);
    upbutton.removeEventListener("click", function() { increment() });
    downbutton.removeEventListener("click", function() { decrement() });
    likebutton.removeEventListener("click", function() { createOrUpdateLikes() })
    pauseButton.addEventListener("click", function() { resume() });
    pauseButton.innerText = "resume"

}

function resume() {
    interval()
    pauseButton.addEventListener("click", function() { pause() });
    pauseButton.innerText = "pause"

}