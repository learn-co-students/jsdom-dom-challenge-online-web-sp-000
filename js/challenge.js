// 1. As a user, I should see the timer increment every second once the page has loaded.
// 2. As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// 3. As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// 4. As a user, I can pause the counter, which should 

//   * pause the counter
//   * disable all buttons except the pause button
//   * the pause button should then show the text "resume."
const incrementCounter = () => {
    let counter = document.querySelector("#counter");
    let counterNum = Number(counter.innerText);
    counterNum++;
    return counterNum.toString();
}

const decrementCounter = () => {
    let counter = document.querySelector("#counter");
    let counterNum = Number(counter.innerText);
    counterNum--;
    return counterNum.toString();
}
const pause = (intervalId) => {
    let pauseButton = document.querySelector("#pause");
    let isPaused = false;
    // Stop timer when pause button clicked
    if (intervalId) {
        pauseButton.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector("#minus").disabled = true;
            document.querySelector("#plus").disabled = true;
            document.querySelector("#heart").disabled = true;
            event.target.innerText = "resume";
            clearInterval(intervalId);
            resume(pauseButton);
        }, false)
    }
}

const resume = (pauseButton) => {
    pauseButton.addEventListener("click", function(event) { 
        event.preventDefault();
        document.querySelector("#minus").disabled = false;
        document.querySelector("#plus").disabled = false;
        document.querySelector("#heart").disabled = false;
        event.target.innerText = "pause";
        let intervalId = window.setInterval(timerCallback, 1000);
        pause(intervalId);
    }, false)
}
    //   When 'resume' is clicked, it should restart the counter and re-enable the buttons.
    // 5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
document.addEventListener("DOMContentLoaded", function() {
    runTimer();
    adjustTimer();
    handleLikes();
    handleComments();
});

function adjustTimer() {
    let counter = document.querySelector("#counter");
    let minusButton = document.querySelector("#minus");
    let plusButton = document.querySelector("#plus");

    plusButton.addEventListener("click", function(event) {
        //   let counter = document.querySelector("#counter");
        //   let counterNum = Number(counter.innerText);
        //   debugger;
        //   counterNum++;
        // Increment timer when 0 or greater
        // console.log(event.target);
        counter.innerText = incrementCounter();
        //   debugger;
    })

    // Toggle minus button on timer
    minusButton.addEventListener("click", function(event) {
        //   debugger;
        //   let counter = document.querySelector("#counter");
        //   let counterNum = Number(counter.innerText);
        // Decrement counter when greater than 0
        if (Number(decrementCounter()) > 0) {
            // counterNum--;
            // console.log(event.target);
            counter.innerText = decrementCounter();
        }
    })
}

function runTimer() {
    let intervalId = window.setInterval(timerCallback, 1000);
    pause(intervalId);
}

// function stopTimer() {
//     let timeoutId = setTimeout(stop, 3000);
// }

// function stop() {

// }

function timerCallback() {
    let counter = document.querySelector("#counter");
    let counterNum = parseInt(counter.innerText);
    counter.innerText = counterNum + 1;
    console.log(counterNum);
}

function handleLikes() {
    let likes = document.querySelector(".likes");
    let heartButton = document.querySelector("#heart");
    let likeCount = 0;
    let numLikes = 0;
    // Handle when user press like button
    heartButton.addEventListener("click", function(event) {
        // Determine number user liked and add it to likes
        let counterNum = parseInt(counter.innerText);
        //   debugger;

        // Check if like number found and add to its likes if it exists
        // debugger;
        let existingLike = document.querySelector(`.like${counterNum}`);
        if (!existingLike) {
            // debugger;
            let like = document.createElement("li");
            like.className = `like${counterNum}`;
            likeCount += 1;
            like.innerHTML = `${counterNum} liked ${likeCount} times.`;
            likes.appendChild(like);
        } else {
            // debugger;
            numLikes += 1;
            // let numLikes = parseInt(existingLike.innerText.split(" ")[2]);
            // numLikes += 1;
            // existingLike.innerText.split(" ")[0] = numLikes;
            existingLike.innerText.replace(existingLike.innerText.split(" ")[2], numLikes);
            existingLike.innerHTML = `${counterNum} liked ${numLikes} times.`;
        }
    })
}

function handleComments() {
    let commentList = document.querySelector(".comments");
    let commentInput = document.querySelector("#comment-input");
    let submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        let userComment = document.createElement("p");
        userComment.className = "comment";
        debugger
        userComment.innerHTML = commentInput.innerHTML;
        commentList.appendChild(userComment);
    })
}