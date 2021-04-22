


document.addEventListener("DOMContentLoaded", () => {

const counter = document.querySelector('#counter');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const likes = document.querySelector('.likes');
const listComments = document.querySelector('#comments');
const commentForm = document.querySelector('#comment-form');
const commentInput = document.querySelector('#comment-input');
const commentSubmit = document.querySelector('#submit');

// 1. As a user, I should see the timer increment every second once the page has loaded.

 let count = setInterval( () => {
        counter.innerText++
    }, 1000)

plus.addEventListener("click", incrementCounter);
minus.addEventListener("click", decrementCounter);
heart.addEventListener("click", addLike);
pause.addEventListener("click", pauseAll);
commentForm.addEventListener("submit", showComment);

// 2. As a user, I can manually increment and decrement the counter using the plus and minus buttons.

function incrementCounter() {
    counter.innerText++;
}

function decrementCounter() {
        counter.innerText--;
    }

// 3. As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number. Lots of help with this one...still not sure I get it.

function addLike() {
    let counterNum = document.getElementById(`${counter.innerText}`);
   counterNum ? counterNum.children[0].innerText++ : likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}> 1 </span> times.</li>`;
}
// 4. As a user, I can pause the counter, which should 

//   pause the counter
//   disable all buttons except the pause button
//   the pause button should then show the text "resume."

//   When 'resume' is clicked, it should restart the counter and re-enable the buttons.

function pauseAll() {
    if (pause.innerText === "Pause") {
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        commentSubmit.disabled = true;
        pause.innerText = "Resume";
        clearInterval(count);
    }   else if (pause.innerText === "Resume") {
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        commentSubmit.disabled = false;
        pause.innerText = "Pause";
        count = setInterval( () => {
        counter.innerText++
        }, 1000)
    }
}

// 5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is." Comments not showing up....coming back to this. 

function showComment() {
    let comment = document.createElement("text");
    comment.innerText = commentInput.value;
    listComments.appendChild(comment);
    listComments.innerHTML += `<br>`;
}

})
