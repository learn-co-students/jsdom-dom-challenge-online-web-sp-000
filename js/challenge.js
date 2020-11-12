const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const pause = document.getElementById("pause");

const heartButton = document.getElementById("heart");
const likesList = document.querySelector(".likes");

const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const submit = document.getElementById("submit");


// Timer
let time = true;
let i = 0;
const timer = setInterval(function() {
    if (time) {
        counter.innerText = i;
        i++;
    }
}, 1000);

// Pause
pause.addEventListener("click", function(){
    if (time) {
        pause.innerText = "resume";
        time = false;
    }
    else {
        pause.innerText = "pause";
        time = true;
    }
});

plus.addEventListener("click", function() {
    if (time) {
        i++;
    }
});

minus.addEventListener("click", function() {
    if (time) {
        i--;
    }
});

// Likes
heartButton.addEventListener("click", function() {
    if ((time) && (document.getElementById(`li-${i}`) == null)) {
        let newLike = document.createElement("li");
        newLike.setAttribute("id", `li-${i}`);
        newLike.innerText = `Number ${i} is liked: 1`;
        likesList.appendChild(newLike);
    }
    else if ((time) && document.getElementById(`li-${i}`) != null) {
        let existingLike = document.getElementById(`li-${i}`);
        let likeCount = existingLike.innerText.split(": ")[1];
        let likeNumber = parseInt(likeCount);
        likeNumber++;
        existingLike.innerText = `Number ${i} is liked: ${likeNumber}`;
        likesList.appendChild(existingLike);
    }
});

// Comments

submit.addEventListener("click", function(comment) {
    comment.preventDefault();
        let newCommentsList = document.getElementById("comments-list");
        let newComment = document.createElement("li");
        newComment.innerText = commentInput.value;
        newCommentsList.appendChild(newComment);
});