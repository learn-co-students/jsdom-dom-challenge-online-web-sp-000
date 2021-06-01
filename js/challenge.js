const commentForm = document.getElementById("comment-form")
const commentInput = document.getElementById("comment-input")
const heartLikes = {}
const likesUL = document.querySelector("ul.likes")

document.addEventListener("DOMContentLoaded", () => {
    startCounter()
    minus.addEventListener("click", minusClick)
    plus.addEventListener("click", plusClick)
    heart.addEventListener("click", heartClick)
    pause.addEventListener("click", pauseClick)
    commentForm.addEventListener("submit", handleSubmit)
})

const isRunning = () => {
    return (pause.innerText === "pause") ? true : false
}

const startCounter = () => {
    setInterval(plusClick, 1000)  
}

const plusClick = () => {
    if (isRunning()) {
        counter.innerText = parseInt(counter.innerText) + 1 
    }
}   

const minusClick = () => {
    counter.innerText = parseInt(counter.innerText) - 1 
}

const heartClick = () => {
    const time = parseInt(counter.innerText)
    heartLikes[time] ? heartLikes[time] += 1 : heartLikes[time] = 1
    if (document.getElementById(`like-${time}`)) {
        document.getElementById(`like-${time}`).innerText = `${time} was liked ${heartLikes[time]} times`
    } else{
        const li = document.createElement("li")
        li.id = `like-${time}`
        li.innerText = `${time} was liked 1 time`
        likesUL.appendChild(li)
    }
}

const pauseClick = () => {
    pause.innerText = pause.innerText === "pause" ? "resume" : "pause"
    const buttons = [plus, minus, heart]
    buttons.forEach((button) => {
        button.disabled = !button.disabled
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    const val = commentInput.value
    const p = document.createElement("p")
    p.innerHTML = val
    list.appendChild(p)
    e.target.reset()
}