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

const disableButtons = () => {
    document.querySelector("#minus").disabled = true;
    document.querySelector("#plus").disabled = true;
    document.querySelector("#heart").disabled = true;
    document.querySelector("#submit").disabled = true;
}

const enableButtons = () => {
    document.querySelector("#minus").disabled = false;
    document.querySelector("#plus").disabled = false;
    document.querySelector("#heart").disabled = false;
    document.querySelector("#submit").disabled = false;
}

const pause = (intervalId) => {
    let pauseButton = document.querySelector("#pause");
    let isPaused = false;

    // Stop timer when pause button clicked
    if (intervalId) {
        pauseButton.addEventListener("click", function(event) {
            event.preventDefault();
            disableButtons();
            event.target.innerText = "resume";
            clearInterval(intervalId);
            resume(pauseButton);
        }, false)
    }
}

const resume = (pauseButton) => {

    // Resume timer when pause button clicked again
    pauseButton.addEventListener("click", function(event) { 
        event.preventDefault();
        enableButtons();
        event.target.innerText = "pause";
        let intervalId = window.setInterval(timerCallback, 1000);
        pause(intervalId);
    }, false)
}

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

    // Toggle plus button on timer
    plusButton.addEventListener("click", function(event) {
        counter.innerText = incrementCounter();
    })

    // Toggle minus button on timer
    minusButton.addEventListener("click", function(event) {
        if (Number(decrementCounter()) > 0) {
            counter.innerText = decrementCounter();
        }
    })
}

function runTimer() {
    let intervalId = window.setInterval(timerCallback, 1000);
    pause(intervalId);
}

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

        // Check if like number found and add to its likes if it exists
        let existingLike = document.querySelector(`.like${counterNum}`);
        if (!existingLike) {
            likeCount = 0;
            let like = document.createElement("li");
            like.className = `like${counterNum}`;
            likeCount += 1;
            like.innerHTML = `${counterNum} liked ${likeCount} times.`;
            likes.appendChild(like);
        } else {
            numLikes += 1;
            existingLike.innerText.replace(existingLike.innerText.split(" ")[2], numLikes);
            existingLike.innerHTML = `${counterNum} liked ${numLikes} times.`;
        }
    })
}

function handleComments() {
    let commentList = document.querySelector(".comments");
    let commentInput = document.querySelector("#comment-input");
    let submitButton = document.querySelector("#submit");

    // Add comments to comment section when user submits input
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        const userComment = document.createElement("p");
        userComment.className = "comment";
        userComment.innerHTML = commentInput.value;
        commentList.appendChild(userComment);
    })
}