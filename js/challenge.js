document.addEventListener("DOMContentLoaded", () => {
    countUp = setInterval(increaseCounter, 1000);
});
let countUp;
let counter = document.getElementById("counter");
let buttons = document.querySelectorAll("button");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");
let form = document.getElementById("comment-form");
let list = document.getElementById("list");
let commentInput = document.getElementById("comment-input");

function increaseCounter() {
    let num = parseInt(counter.innerText, 10);
    num += 1;
    counter.innerText = num.toString();
}

function decreaseCounter() {
    let count = parseInt(counter.innerText, 10);
    count -= 1;
    counter.innerText = count.toString();
}

function stopCounter() {
    clearInterval(countUp);
    pause.innerText = "resume";
    toggleButtons();
}

function startCounter() {
    countUp = setInterval(increaseCounter, 1000);
    pause.innerText = "pause";
    toggleButtons();
}

function toggleButtons() {
    let buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i] != pause) {
            if (buttons[i].disabled) {
                buttons[i].disabled = false;
            } else {
                buttons[i].disabled = true;
            }
        }
    }
}

function addLike() {
    let likes = document.querySelector(".likes");
    let li = document.createElement('li');
    likes.appendChild(li).innerHTML = `${counter.innerText} has been liked`;
}

document.addEventListener("click", function(e) {
    if (e.target == minus) {
        decreaseCounter();
    } else if (e.target == plus) {
        increaseCounter();
    } else if (e.target == heart) {
        addLike();
    } else if (e.target.innerText == "pause") {
        stopCounter();
    } else if (e.target.innerText == "resume") {
        startCounter();
    }
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let p = document.createElement("p");
    list.appendChild(p).innerText = commentInput.value;
    e.target.reset();
});