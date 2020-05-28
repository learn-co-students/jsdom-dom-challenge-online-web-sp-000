document.addEventListener("DOMContentLoaded", () => {
    pauseTimer();
    addTime();
    subtractTime();
    eachSecond();
    addComment();
    addFavorite();
    addTime();
})

let counter = 0 // => invoked outside of function
let pauseButton = document.getElementById("pause")

function eachSecond() {
    let element = document.getElementById("counter")
    let current = element.innerHTML

    if (pauseButton.innerText === "resume") {
        setTimeout(function() {
            eachSecond()
        })
    } else {
        setTimeout(function() {
            counter = counter + 1 
            element.innerHTML = `${counter}`
            eachSecond()
        }, 1000)
    }

    
}

function addComment() {
    document.querySelector("form").addEventListener("submit", function(event) {

        event.preventDefault()
        let newList = document.createElement("ul")
        let commentBox = document.getElementById("list")
        let comment = document.getElementById("comment-input").value
        let newerList = commentBox.appendChild(newList)
        newerList.innerHTML += `<li> commented "${comment}" at ${counter} seconds </li>`
    

    })
}

function addFavorite() {
    document.getElementById("heart").addEventListener("click", function(event) {
        let newList = document.createElement("ul")
        let commentBox = document.getElementById("list")
        let newerList = commentBox.appendChild(newList)
        newerList.innerHTML += `<li> favorite at ${counter}`
    })
}

function pauseTimer() {
    document.getElementById("pause").addEventListener("click", function(event) {

        if (pauseButton.innerText === "pause") {
            pauseButton.innerText = "resume"

        } else {
            pauseButton.innerText = "pause"
        }

    })
}

function addTime() {
    document.getElementById("plus").addEventListener("click", function(event) {
        counter += 1
    })
}

function subtractTime() {
    document.getElementById("minus").addEventListener("click", function(event) {
        counter -= 1
    })
}