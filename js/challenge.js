let timer;
let isActive = true;
const counter = document.querySelector('#counter');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const likes = document.querySelector('.likes');
const commentList = document.querySelector('#list');
const commentForm = document.querySelector("#comment-form");

document.addEventListener("DOMContentLoaded", startTimer);
plus.addEventListener("click", incrementCounter); 
minus.addEventListener("click", decrementCounter);
heart.addEventListener("click", addLike);
pause.addEventListener("click", pauseActivities);
commentForm.addEventListener("submit", displayComment);

function startTimer() {
    timer = setInterval(incrementCounter, 1000);
}

function decrementCounter() {
    const currentCount = parseInt(counter.textContent);
    if (currentCount > 0){
        counter.textContent = `${currentCount - 1}`;
    }
}
function incrementCounter() {
    const currentCount = parseInt(counter.textContent);
    counter.textContent = `${currentCount + 1}`; 
}

function addLike() {
    const currentCount = parseInt(counter.textContent);

    const previousLikes = Array.from(likes.children);
    //find previous likes
    const previousLike = previousLikes.find(previousLike => {
        //Change previous like count from a string to integer
        const previousLikeCount = parseInt (previousLike.textContent.split(" ")[0]);
        return previousLikeCount === currentCount
    })

    if (previousLike) {
        const numberOfLikes = parseInt (previousLike.textContent.split(" ").slice(-2, -1))
        previousLike.textContent = `${currentCount} has been liked ${numberOfLikes+1} times`;
    }
    else {
    const newLike = document.createElement("li");
    newLike.textContent = `${currentCount} has been liked 1 time`;
    likes.append(newLike);
    }
}

function pauseActivities() {
    if (isActive) {
        clearInterval(timer);
        pause.textContent = "resume";
        isActive = false;
    }
    else {
        startTimer();
        pause.textContent = "pause";
        isActive = true;
    }
}

function displayComment(event) {
    event.preventDefault();
    
    const commentFormData = new FormData(event.target);
    const commentText = commentFormData.get("comment");

    const comment = document.createElement('p');
    comment.textContent = commentText
    commentList.append(comment);
    event.target.reset();
    
}
