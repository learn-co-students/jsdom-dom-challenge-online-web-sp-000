let intervalID;

function incrementOne() {
    let counter = document.getElementById("counter");
    let value = parseInt(counter.innerText);
    let result = value + 1;
    counter.innerText = result.toString();
}

function timer() {
    intervalID = setInterval(incrementOne, 1000);
}

timer();

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const likesUl = document.getElementsByClassName("likes")[0];
const pause = document.getElementById("pause");
const submit = document.getElementById("submit");
const comments = document.querySelector("div#list.comments");
const commentInput = document.getElementById("comment-input");
const commentForm = document.getElementById("comment-form");

minus.addEventListener("click", () => {
    let counter = document.getElementById("counter");
    let value = parseInt(counter.innerText);
    let result = value - 1;
    counter.innerText = result.toString();
});

plus.addEventListener("click", () => {
    let counter = document.getElementById("counter");
    let value = parseInt(counter.innerText);
    let result = value + 1;
    counter.innerText = result.toString();
});

heart.addEventListener("click", (e) => {
    let counter = document.getElementById("counter");
    let like = document.createElement("li");
    like.innerText = `${counter.innerText} has been liked`;
    likesUl.appendChild(like);
});

pause.addEventListener("click", () => {
    if (pause.innerText == "pause") {
        clearInterval(intervalID);
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
        pause.innerText = "resume";
    } else if (pause.innerText == "resume") {
        timer();
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
        pause.innerText = "pause";
    }
});

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let comment = document.createElement("p");
    comment.innerText = commentInput.value;
    comments.appendChild(comment);
    commentForm.reset();
})

