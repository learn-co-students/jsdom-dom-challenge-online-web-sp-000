document.addEventListener("DOMContentLoaded", () => {

    const counter = document.getElementById("counter")
    const minus = document.getElementById("minus")
    const plus = document.getElementById("plus")
    const pause = document.getElementById("pause")
    const heart = document.getElementById("heart")
    const heartsList = document.querySelector(".likes")

    timer = setInterval(myTimer, 1000) 

    function myTimer() {
        time = parseInt(counter.innerText)
        inc = time + 1
        counter.innerText = inc.toString()
    }

    minus.addEventListener("click", function () {
        time = parseInt(counter.innerText)
        inc = time - 1
        counter.innerText = inc.toString()
    })

    plus.addEventListener("click", function () {
        time = parseInt(counter.innerText)
        inc = time + 1
        counter.innerText = inc.toString()
    })
    
    heart.addEventListener("click", function() {
        click = 0
        num = parseInt(counter.innerText)

        newLike = document.createElement("li")
        newLike.innerText = `${num} has been liked ${click+1} times`
        heartsList.appendChild(newLike)
    })
    
    pause.addEventListener("click", function() {
        if (pause.innerText == "pause") {
            clearInterval(timer)
            pause.innerText = "resume"
            minus.disabled = true
            plus.disabled = true
            heart.disabled = true
        } else {
            pause.innerText = "pause"
            minus.disabled = false
            plus.disabled = false
            heart.disabled = false
            timer = setInterval(myTimer, 1000)
        }
    })
    
    const form = document.getElementById('comment-form')

    form.addEventListener('submit', (event) =>{
        event.preventDefault(); 

        const text = document.getElementById('comment-input');
        const comments = document.getElementById('list');

        commentsList = document.createElement("p");

        commentsList.innerText = text.value;
        comments.appendChild(commentsList);
    })
    
  })