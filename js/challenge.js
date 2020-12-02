// User Stories
// 1. As a user, I should see the timer increment every second once the page has loaded.
// 2. As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// 3. As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// 4. As a user, I can pause the counter, which should 
    //   * pause the counter
    //   * disable all buttons except the pause button
    //   * the pause button should then show the text "resume."

    //   When 'resume' is clicked, it should restart the counter and re-enable the buttons.
// 5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

// variables

const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');

let intervalID = setInterval(incrementCounter, 1000); // sets the counter in motion at execution 

let likeTracker = {}; // hash to hold like tally
const likes = document.querySelector('ul.likes'); // "likes" is a class

const pause = document.getElementById('pause');
let paused = false; // track the state of the counter

const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('list');


// events
plus.addEventListener("click", incrementCounter);
minus.addEventListener("click", decrementCounter);
heart.addEventListener("click", addLike);
pause.addEventListener("click", togglePauseButton)
commentForm.addEventListener("submit", addComment)

// functions
function incrementCounter(e) {
    counter.innerText = parseInt(counter.innerText) + 1
}

function decrementCounter(e) {
    counter.innerText = parseInt(counter.innerText) - 1   
}

function addLike(e) {
    let count = counter.innerText;
    likeTracker[count] = likeTracker[count] || 0; // the count becomes the key name - if it's not already in hash, it initializes to 0
    likeTracker[count] += 1; // add 1 to the value
    listLikes()
}

function listLikes() {
    likes.innerHTML = ""
    // enumerate through the likeTracker hash
    for (const key in likeTracker) {
        const li = document.createElement("li")
        li.innerText = `The number ${key} has been liked ${likeTracker[key]} times.`
        likes.appendChild(li)  // "likes" is the <ul>
    }
}

function togglePauseButton(e) {
    paused = !paused
    if (paused) {
        clearInterval(intervalID)
        pause.innerText = "resume"
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
    } else {
        intervalID = setInterval(incrementCounter, 1000)
        pause.innerText = "pause"
        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
    }
}

function addComment(e) {   
    e.preventDefault()
    const comment = document.getElementById("comment-input").value;
    const li = document.createElement("li")
    li.innerText = comment
    commentList.appendChild(li)
    e.target.reset()  
}