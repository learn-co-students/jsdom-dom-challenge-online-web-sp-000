
// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

let timer = 0
let likeCount = 0
let intervalID
startTimer()

function startTimer(){
    document.getElementById("minus").addEventListener("click", subtractTimer);
    document.getElementById("plus").addEventListener("click", addTimer);
    document.getElementById("heart").addEventListener("click", likeTimer);
    intervalID = window.setInterval(increaseTimer, 1000)
    document.getElementById("pause").addEventListener("click", pauseTimer);
    document.getElementById("pause").innerText = "Pause"
    document.getElementById("submit").addEventListener("click", (e) =>{
        e.preventDefault()
        addComment()
    });

}

function addComment() {
    let comment = document.getElementById("comment-input").value
    console.log(comment)
    let node = document.createElement("LI")
    let textNode = document.createTextNode(comment);
    node.appendChild(textNode)
    document.querySelector(".comments").appendChild(node)
    document.getElementById("comment-input").value = ""
}





function increaseTimer() {
    document.getElementById("counter").innerHTML = timer++
    likeCount = 0
}

function addTimer(){
    timer++
    document.getElementById("counter").innerHTML = timer
}
function subtractTimer(){
    timer--
    document.getElementById("counter").innerHTML = timer
}
function likeTimer(){
    likeCount++
    let = likeString = `${timer} was liked ${likeCount} times`
    let node = document.createElement("li")
    let textNode = document.createTextNode(likeString);
    node.appendChild(textNode)

    if (likeCount === 1){
        document.querySelector(".likes").appendChild(node)
    } else {
        document.querySelector(".likes").lastChild.innerHTML = textNode.textContent
    }
}
function pauseTimer(){
    pauseButton = document.getElementById("pause")
    window.clearInterval(intervalID)
    pauseButton.innerText = "Resume"
    pauseButton.removeEventListener("click", pauseTimer)
    document.getElementById("minus").removeEventListener("click", subtractTimer);
    document.getElementById("plus").removeEventListener("click", addTimer);
    document.getElementById("heart").removeEventListener("click", likeTimer);
    pauseButton.addEventListener("click", resumeTimer)
}

function resumeTimer(){
    console.log("resume Timer")
    document.getElementById("pause").removeEventListener("click", resumeTimer);
    startTimer()
}
