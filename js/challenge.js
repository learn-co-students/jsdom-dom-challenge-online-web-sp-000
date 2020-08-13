let intervalID;
let counter = document.querySelector("h1#counter");
let counterInt = parseInt(counter.innerText); 
let pauseButton = document.querySelector("#pause");
let minusButton = document.querySelector("#minus"); 
let heartButton = document.querySelector("#heart"); 
let plusButton = document.querySelector("#plus"); 
let likes = document.querySelector(".likes"); 

let paused = false; 

function resume() {
    paused = false; 
    pauseButton.innerText = "pause"; 
    minusButton.disabled = false; 
    plusButton.disabled = false; 
    heartButton.disabled = false; 
    intervalID = setInterval(function() {
        counter.textContent = (counterInt += 1);
    }, 1000); 
}

resume(); 

pauseButton.addEventListener("click", function() {
    if (paused === false) {
        clearInterval(intervalID); 
        paused = true; 
        minusButton.disabled = true; 
        plusButton.disabled = true; 
        heartButton.disabled = true; 
        pauseButton.innerText = "resume";
    } else if (paused === true) {
        resume(); 
    }
});

plusButton.addEventListener("click", function() { 
    counter.textContent = (counterInt += 1);
});

minusButton.addEventListener("click", function() { 
    counter.textContent = (counterInt -= 1); 
});

heartButton.addEventListener("click", function() {
    count = 1;
    let currentNum = counterInt;
    let likeEl = document.createElement("li"); 
    
    likeEl.innerText += `${counterInt} just received a like.`;

    likes.appendChild(likeEl);
}); 

let commentForm = document.querySelector("#comment-form");

let commentList = document.querySelector("#list");

commentForm.addEventListener("submit", function(e) { 
    e.preventDefault(); 
    let newComment = document.querySelector("#comment-input").value;
    let commentItem = document.createElement("li");
    commentItem.innerText = newComment; 
    commentList.appendChild(commentItem);
});

