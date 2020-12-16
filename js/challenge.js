const pauseId = document.getElementById("pause");
const counterId = document.getElementById("counter");
const heartId = document.getElementById("heart");
const minusId = document.getElementById("minus");
const plusId = document.getElementById("plus");
const buttons = document.querySelectorAll("button");
const ulLikesId = document.getElementsByClassName("likes")[0];
const commentsId = document.getElementsByClassName("comments")[0];
const inputId = document.getElementById("comment-input");
const formId = document.getElementById("comment-form");

let seconds = parseInt(counterId.innerText, 10);
let intervalID;
let liLikes;

function startTimer() {       
    intervalID = setInterval(addTime, 1000);
}

function addTime() {
    seconds++;
    counterId.innerText = seconds;
}

function minusTime() {
    counterId.innerText = seconds--;
}

function enableOrDisableButtons() {
    let currentState = heartId.disabled;

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id !== "pause") {
            buttons[i].disabled = !currentState;
        }
    }
}

function pauseTimer() {

    if (pauseId.innerText == "pause") {
        clearInterval(intervalID);
        enableOrDisableButtons();
        pauseId.innerText = "resume";
    } else {
         startTimer();
         enableOrDisableButtons();
         pauseId.textContent = "pause";
    }
}

function addLike() {
    liLikes = document.querySelectorAll("ul.likes li");
    
    if (liLikes.length > 0) {
        for (i = 0; i < liLikes.length; i++) {
            let wordArray = liLikes[i].innerText.split(" ");
            if (wordArray[0] == seconds) {
                wordArray[3] = parseInt(wordArray[3]) + 1;
                wordArray[4] = "likes"
                liLikes[i].innerText = wordArray.join(" ");
                return true;
            }
        }
    }

    let newLi = document.createElement('li');
    newLi.innerText = `${seconds} seconds : 1 like`;
    ulLikesId.appendChild(newLi);
    
}

function postComment(e) {
    e.preventDefault();
    let newParagraph = document.createElement('p');
    newParagraph.innerText = inputId.value;
    commentsId.appendChild(newParagraph);
    e.target.reset();
}

document.addEventListener("DOMContentLoaded", startTimer);
pauseId.addEventListener("click", pauseTimer);
minusId.addEventListener("click", minusTime);
plusId.addEventListener("click", addTime);
heartId.addEventListener("click", addLike);
formId.addEventListener("submit", postComment);