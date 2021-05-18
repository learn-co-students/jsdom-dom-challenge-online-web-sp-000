let counter = document.getElementById("counter")
let minus = document.getElementById("minus")
let plus = document.getElementById("plus")
let heart = document.getElementById("heart")
let pause = document.getElementById("pause")

let likes = document.querySelector("ul.likes")
let comments = document.getElementById("list")
let comment_input = document.getElementById("comment-input")
let submit = document.getElementById("submit")

let number_likes = { "0": 0 }


function add_number_to_number_likes(n) {
    if (n in number_likes) {
        if (number_likes[n] == NaN) {
            number_likes[n] = 0
        }
        else {
            console.log("skipped")
        }
    } else {
        console.log("number added")
        number_likes[n] = 0
    }
}

let timer = setInterval(() => {
    let number = counter.innerText
    add_number_to_number_likes(number)
    counter.innerText = parseInt(number) + 1
    add_number_to_number_likes(parseInt(number) + 1)
}, 1000);

window.onload = () => {
    console.log("loaded")
    timer
}

minus.addEventListener("click", (e) => {
    e.preventDefault()
    let number = counter.innerText

    counter.innerText = parseInt(number) - 1
    add_number_to_number_likes(counter.innerText)
})

plus.addEventListener("click", (e) => {
    e.preventDefault()
    let number = counter.innerText

    counter.innerText = parseInt(counter.innerText) + 1
    add_number_to_number_likes(counter.innerText)
})

heart.addEventListener("click", (e) => {
    e.preventDefault()
    let number = counter.innerText

    if (number_likes[number] != NaN) {
        number_likes[number] += 1
    }
    else {
        number_likes[number] = 1
    }

    if (document.getElementById(number) == undefined) {
        let li = document.createElement("li")
        li.id = number
        li.innerText = `${number}, has ${parseInt(number_likes[number])} likes`
        likes.appendChild(li)
    } else {
        let li = document.getElementById(number)
        li.innerText = `${number}, has ${parseInt(number_likes[number])} likes`
    }
})

pause.addEventListener("click", (e) => {
    e.preventDefault()
    if (pause.innerText == "pause") {
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
        submit.disabled = true
        clearInterval(timer)
        pause.innerText = "resume"
    }
    else {
        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
        submit.disabled = false
        timer = setInterval(() => {
            let number = counter.innerText
            counter.innerText = parseInt(number) + 1
        }, 1000);
        pause.innerText = "pause"
    }
})

submit.addEventListener("click", (e) => {
    e.preventDefault()
    comment = document.createElement("p")
    comment.innerText = comment_input.value
    comments.appendChild(comment)
    comment_input.value = ""
})