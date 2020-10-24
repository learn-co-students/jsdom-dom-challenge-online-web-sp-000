const counter = document.getElementById("counter");
const pauseButton = document.getElementById("pause");
const likeButton = document.getElementById("heart");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const submitButton = document.getElementById("submit");
const commentList = document.getElementById("list");
const commentInput = document.getElementById("comment-input");
const commentForm = document.getElementById("comment-form");
const likesList = document.getElementsByClassName("likes")[0];
const likesArray = [];

function advanceCounter() {
    let timeString = counter.innerText;
    let timeNumber = parseInt(timeString, 10);
    counter.innerText = `${timeNumber + 1}`;
}

function makeComment() {
    let p = document.createElement('p');
    p.innerText = commentInput.value;
    commentList.appendChild(p);
    commentInput.value = "";
}

function subtractCounter() {
    let timeString = counter.innerText;
    let timeNumber = parseInt(timeString, 10);
    counter.innerText = `${timeNumber - 1}`;
}

function pauseCounter() {
    if (pauseButton.innerText == "pause") {
        pauseButton.innerText = "resume";
        likeButton.disabled = true;
        plusButton.disabled = true;
        minusButton.disabled = true;
        submitButton.disabled = true;
        window.clearInterval(timer);
    } else if (pauseButton.innerText == "resume") {
        pauseButton.innerText = "pause";
        likeButton.disabled = false;
        plusButton.disabled = false;
        minusButton.disabled = false;
        submitButton.disabled = false;
        timer = window.setInterval(advanceCounter, 1000);
    }
}

function likeTime(currentCount) {
    if (likesArray[currentCount] == undefined) {
        likesArray[currentCount] = 1;
        let li = document.createElement('li');
        li.id = `like${currentCount}`;
        li.innerText = `${currentCount} has been liked 1 time`;
        likesList.appendChild(li);
    } else {
        likesArray[currentCount]++;
        let li = document.getElementById(`like${currentCount}`);
        li.innerText = `${currentCount} has been liked ${likesArray[currentCount]} times`;
    }
}

let timer = window.setInterval(advanceCounter, 1000);

pauseButton.addEventListener("click", () => {
    pauseCounter();
});

commentForm.addEventListener("submit", () => {
    makeComment();
    event.preventDefault();
});

plusButton.addEventListener("click", () => {
    advanceCounter();
});

minusButton.addEventListener("click", () => {
    subtractCounter();
});

likeButton.addEventListener("click", () => {
    let count = parseInt(counter.innerText, 10);
    likeTime(count);
});