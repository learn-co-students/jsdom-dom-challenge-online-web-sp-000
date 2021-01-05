function updateDisplay(display) { display.textContent = count;}
function updateCounter(increment) {increment ? count++ : count--;} 
function toggleCounter() {counterRunning = !counterRunning;}
function toggleDisabled(button) {button.disabled = !button.disabled;}

function timedUpdate(display) {
    setInterval(function() {
        if (counterRunning === true) {
            count ++;
            updateDisplay(display);
        } else {return}
    }, 1000);
}
function createComment(textInput) {
    let e = document.createElement("p");
    e.textContent = textInput.value;
    textInput.value = "";
    return e
}
function createOrFindLike(container) {
    if (!(count in likeCounts)) {
        likeCounts[count] = 1;
        likeElements[count] = document.createElement("li");
        container.appendChild(likeElements[count]);
        
    } else { 
        likeCounts[count]++;
    }
    likeElements[count].textContent = `${count} has been liked ${likeCounts[count]} times`;
}

let count = 0;
let counterRunning = true;
let likeCounts = {};
let likeElements = {};

document.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.getElementById('counter');      // timer display
    const submitComment = document.getElementById("submit")
    
    // minus button
    const minusButton = document.getElementById('minus');
    minusButton.addEventListener("click", () => {
        updateCounter(false);
        updateDisplay(counterDisplay);
    });
    
    // plus button
    const plusButton = document.getElementById('plus');
    plusButton.addEventListener("click", () => {
        updateCounter(true);
        updateDisplay(counterDisplay);
    });
    
    // pause button
    const pauseButton = document.getElementById('pause');
    pauseButton.addEventListener("click", () => {
        toggleCounter();
        toggleDisabled(minusButton);
        toggleDisabled(plusButton);
        toggleDisabled(likeButton);
        toggleDisabled(submitComment);
        pauseButton.textContent = "resume";
        count = 0;
    });
    
    const commentList = document.getElementById('list');        // div to hole comments content
    const commentText = document.getElementById('comment-input');   // comment input text
    
    // form to create new comment
    const commentForm = document.getElementById('comment-form');
    commentForm.addEventListener("submit", (e) => {
        commentList.appendChild(createComment(commentText));
        e.preventDefault();
    })
    
    const likeButton = document.getElementById('heart');            // like button
    const likesList = document.getElementsByClassName('likes')[0];    
    likeButton.addEventListener("click", () => {
        createOrFindLike(likesList);

    });

    
    
    
    timedUpdate(counterDisplay);
});