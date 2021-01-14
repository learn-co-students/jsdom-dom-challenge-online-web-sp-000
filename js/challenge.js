let timer;
let isActive = true;
const counter = document.querySelector("#counter");

const pause = document.querySelector("#pause");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const heart = document.querySelector("#heart");
const likes = document.querySelector(".likes");
const comments = document.querySelector("#list");
const commentForm = document.querySelector("#comment-form");

document.addEventListener("DOMContentLoaded", startTimer)

plus.addEventListener("click", incrementCounter);
minus.addEventListener("click", decreaseCounter);
heart.addEventListener("click", addLike);
pause.addEventListener("click", pauseOrResume);
commentForm.addEventListener("submit", displayComment);
// commentInput.addEventListener("input", handleInput);

function startTimer(){
     timer = setInterval(incrementCounter, 1000);
}

function decreaseCounter() {
     const currentCount = parseInt(counter.textContent, 10);
     counter.textContent = `${currentCount - 1}`;  
}

function incrementCounter() {
    const currentCount = parseInt(counter.textContent, 10);
    counter.textContent = `${currentCount + 1}`;
}

function addLike() {
     const currentCount = parseInt(counter.textContent, 10);

     const previousLikes = Array.from( likes.children );
     
     const previousLike = previousLikes.find(previousLike => {
     const previousLikeCount = parseInt(previousLike.textContent.split(" ")[0], 10);
          
          return previousLikeCount === currentCount;
          
     })

     if (previousLike) {
          const numberHeartsText = previousLike.textContent.split(" ").slice(-2)[0];
          const numberOfHearts = parseInt(numberHeartsText, 10);
          
          previousLike.textContent = `${currentCount} has been liked ${numberOfHearts + 1} times`;
          } else {
          
          const newLike = document.createElement("li");
          newLike.textContent = `${currentCount} has been liked 1 time`;
          likes.append(newLike);
}
}
function displayComment(event) {
     event.preventDefault();


const commentFormData = new FormData(event.target);
const commentText = commentFormData.get("comment");
const comment = document.createElement("p");
comment.textContent = commentText;
comments.append(comment);

event.target.reset();
}


function pauseOrResume () {
     const buttons = Array.from( document.querySelectorAll("button"));
     const notPauseButtons = buttons.filter(button => button.id !== "pause");
     if (isActive) {
          clearInterval(timer);
          notPauseButtons.forEach(button => button.disabled = true);
          pause.textContent = "resume";
          isActive = false;
     } else {
          startTimer();
          pause.textContent = "pause";
          notPauseButtons.forEach(button => button.disabled = false);
          isActive = true;
}
}