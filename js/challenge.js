let counter = document.getElementById("counter");
let increment_num = document.getElementById("plus")
let decrement_num = document.getElementById("minus")
let pause_resume_btn = document.getElementById("pause")
let like_btn = document.getElementById("heart")
let ul = document.querySelector(".likes")
let li = document.createElement("li")
let playing = true
let button_collection = document.getElementsByTagName("button")
let commentForm = document.getElementById("comment-form")
let comment = document.querySelector(".comments")

let click = 0
let count = 0;
let timer;

timer = function() { 
    return setInterval(function () {
    count += 1;
    counter.innerText = count;
    }, 1000)
}

interval = timer()

pause_resume_btn.addEventListener("click", function() {
    if (playing == true) {
        clearInterval(interval);
        Array.from(button_collection).forEach(function(element) { 
            if (element.innerText == "pause") {
                element.disabled = false 
            } else {
                element.disabled = true
            }
        })
        pause_resume_btn.innerText = "resume";
        playing = false

    } else if (playing == false) {
        Array.from(button_collection).forEach(function(element) { 
            if (element.innerText == "pause") {
                element.disabled = false 
            } else {
                element.disabled = false
            }
        })
            interval = timer()
            pause_resume_btn.innerText = "pause"
            playing = true
    }  
})
increment_num.addEventListener("click", function() {
    count += 1;
    counter.innerText = count;
})
increment_num.addEventListener("click", function() {
    count += 1;
    counter.innerText = count;
})
decrement_num.addEventListener("click", function() {
    count -=1;
    counter.innerText = count;
})
like_btn.addEventListener("click", function() {
        click += 1;
        let li = document.createElement("li")
        li.innerText = `${count} has been liked ${click}`
        ul.appendChild(li)
        setTimeout(function(){click = 0}, 1000)
    })



commentForm.addEventListener("submit", function() {
        event.preventDefault();
        let p = document.createElement("p")
        p.innerText = document.getElementById("comment-input").value
        comment.appendChild(p)
    })


    
