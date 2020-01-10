const counter = document.getElementById("counter")
let paused = false
const upbutton = document.getElementById("plus")
const downbutton = document.getElementById("minus")
const likebutton = document.getElementById("heart")
const pauseButton = document.getElementById("pause")



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

function up() {
    upbutton.addEventListener("click", function() {
        if (paused == false)
            increment()
    })
}

function down() {
    downbutton.addEventListener("click", function() {
        if (paused == false)
            decrement()
    })
}


function likes() {
    likebutton.addEventListener("click", function() {
        if (paused == false)
            createOrUpdateLikes()
    })
}

function startPause() {
    pauseButton.addEventListener("click", function() { pause() })
}


function pause() {
    paused = true
    clearInterval(1);
    pauseButton.addEventListener("click", function() { resume() });
    pauseButton.innerText = "resume"

}

function resume() {
    paused = false
    interval()
    pauseButton.addEventListener("click", function() { pause() });
    pauseButton.innerText = "pause"

}

function addComment() {
    let txt = document.getElementById('comment-input').value
    newComment = document.createElement("p")
    newComment.innerHTML = txt
    document.getElementsByTagName('h3')[0].appendChild(newComment)
}

function disableSubmit() {
    document.getElementById("submit").addEventListener("click", function(event) {
        event.preventDefault();
        addComment()
    })
}


function start() {
    interval();
    up();
    down();
    likes();
    startPause();
    disableSubmit();
}


document.addEventListener("DOMContentLoaded", function() { start() })