// (x) As a user, I should see the timer increment every second once the page has loaded.
// (x) As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter and re-enable the buttons.
// (x) As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

let timer;
let isActive = true;
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const heart = document.querySelector("#heart");
const likes = document.querySelector(".likes");
const pause = document.querySelector("#pause");
const counter = document.querySelector("#counter");
const comments = document.querySelector("#list");
const commentForm = document.querySelector("#comment-form");
const commentInput = document.querySelector("#comment-input");

document.addEventListener("DOMContentLoaded", startTimer);
plus.addEventListener("click", countUp);
minus.addEventListener("click", countDown);
heart.addEventListener("click", addLike);
pause.addEventListener("click", pauseOrResume);
commentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const newComment = commentInput.value;
    const newParagraph = document.createElement('p');
    newParagraph.innerText = newComment;
    comments.appendChild(newParagraph);

    commentForm.reset();
})

function startTimer() {
    timer = setInterval(countUp, 1000);
}

function countUp() {
    const currentCount = parseInt(counter.textContent++, 10);
}

function countDown() {
    if (counter.textContent > 0) {
        const currentCount = parseInt(counter.textContent--, 10);
    }
}

function addLike() {
    const currentCount = parseInt(counter.textContent, 10);
    // const previousLikes = document.querySelectorAll('.likes > li'); // longer code
    const previousLikes = Array.from( likes.children );  
    const previousLike = previousLikes.find(previousLike => {
        const previousLikeCount = parseInt(previousLike.textContent.split(" ")[0], 10);
        return previousLikeCount === currentCount;
    })

    if (previousLike) {
        const numberOfHearts = parseInt(previousLike.textContent.split(" ").slice(-2)[0], 10);
        previousLike.textContent = `${currentCount} has been liked ${numberOfHearts + 1} times`;
    } else {
        const newLi = document.createElement("li");
        newLi.textContent = `${currentCount} has been liked 1 time`;
        likes.append(newLi);
    }
}

function pauseOrResume() {
    if (isActive) {
        clearInterval(timer);
        isActive = false;
        plus.disabled = true;
        pause.innerHTML = "resume";
    } else {
        startTimer();
        isActive = true;
        plus.disabled = false;
        pause.innerHTML = "pause";
    }
}