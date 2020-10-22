// (x) As a user, I should see the timer increment every second once the page has loaded.
// (x) As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter and re-enable the buttons.
// (x) As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const heart = document.querySelector("#heart");
const likes = document.querySelector(".likes");
const pause = document.querySelector("#pause");
const counter = document.querySelector("#counter");
const secondCounter = window.setInterval(keepCounting, 1000);
const comments = document.querySelector("#list");
const commentForm = document.querySelector("#comment-form");
const commentInput = document.querySelector("#comment-input");

plus.addEventListener("click", countUp);
minus.addEventListener("click", countDown);
heart.addEventListener("click", addHeart);


commentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const newComment = commentInput.value;
    newParagraph = document.createElement('p');
    newParagraph.innerText = newComment;
    comments.appendChild(newParagraph);

    commentForm.reset();
})

function keepCounting() {
    counter.textContent++;
}

function countUp() {
    counter.textContent++;
}

function countDown() {
    if (counter.textContent > 0) {
        counter.textContent--;
    }
}

function addHeart() {
    const currentCount = counter.textContent;
    newLi = document.createElement('li');
    newLi.innerText = currentCount;
    likes.appendChild(`${newLi} has been liked ${} time );
}


// document.addEventListener("DOMContentLoaded", () => {
//     setInterval(function(){
//         // add to the timer
//         1000
//     });



// });