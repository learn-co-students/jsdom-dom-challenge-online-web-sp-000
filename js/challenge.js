let pauseResumeTimerbutton = document.getElementById('pause');
let counterDisplay = document.getElementById("counter");
let minusButton = document.getElementById("minus");
let plusButton = document.getElementById("plus");
let likeButton = document.getElementById("heart");
let likeList = document.querySelector("ul.likes");
let likesForNumbers = [];
let commentForm = document.getElementById("comment-form");
let commentList = document.querySelector("div#list.comments");
let commentSubmitButton = document.getElementById("submit");
// ===================== 
// Add Comments
// =====================

function addComment(content) {
    let newCommentLi = document.createElement("li")
    newCommentLi.innerText = `${content}`;
    commentList.appendChild(newCommentLi);
};


function handleCommentFormSubmit() {
    event.preventDefault();
    let commentInputField = document.getElementById("comment-input");
    addComment(commentInputField.value);
    commentInputField.value = "";
};

commentForm.addEventListener("submit", handleCommentFormSubmit);



// ===================== 
// Add Likes
// =====================


function displayLikes(number) {
    let elementID = `likesfornumber${number}`;
    let element = likeList.querySelector(`li#${elementID}`);
    let likeCount = likesForNumbers[number];

    if ( element == null) {
        console.log("not inthere yet")
        let newli = document.createElement("li")
        newli.id = elementID;
        newli.innerHTML = `${number} has been liked <span>${likeCount}</span> times`;
        likeList.appendChild(newli);
    } else {
        console.log("already in there")
        element.getElementsByTagName("span")[0].innerText = `${likeCount}`
    
    }
};

function addLikes() {
    let number = parseInt(counterDisplay.innerText);
    if (likesForNumbers[number] == undefined) {
        likesForNumbers[number] = 1;
        console.log(likesForNumbers[number])
        displayLikes(number)
    } else {
        ++likesForNumbers[number];
        console.log(likesForNumbers[number])
        displayLikes(number)
    }
};

likeButton.addEventListener("click", addLikes)


// ===================== 
// Pause and Resume Counters, increment counter, freezing other functions
//main part. uses setInterval and clearInterval
// =====================


var startincrementCounterID = window.setInterval(incrementCounter, 1000);
let firstTimeRunning = true;
var resumeincrementCounterID; //declare out here to avoid errors. otherwise wont work at all

function incrementCounter() {
    counterDisplay.innerText = parseInt(counterDisplay.innerText) + 1;
};

function decrementCounter() {
    counterDisplay.innerText = parseInt(counterDisplay.innerText) - 1;
};

minusButton.addEventListener("click", decrementCounter)
plusButton.addEventListener("click", incrementCounter)


function pauseTimer() {
    console.log("pause Timer function was called");
    pauseResumeTimerbutton.textContent = " resume ";
    minusButton.disabled = true;
    plusButton.disabled = true;
    likeButton.disabled = true;
    commentSubmitButton.disabled = true;
    if (firstTimeRunning === true) {
        window.clearInterval(startincrementCounterID);
        console.log("startincrementCounterID cleared");
        firstTimeRunning = false;
    }
    else {
        console.log("resumeincrementCounterID cleared");

        window.clearInterval(resumeincrementCounterID);
    }
};

function resumeTimer() {
    pauseResumeTimerbutton.textContent = " pause ";
    console.log("resume Timer function was called");
    minusButton.disabled = false;
    plusButton.disabled = false;
    likeButton.disabled = false;
    commentSubmitButton.disabled = false;

    resumeincrementCounterID = window.setInterval(incrementCounter, 1000);
    //maybe i need var for global access
};

pauseResumeTimerbutton.addEventListener("click", function() {
    if (pauseResumeTimerbutton.textContent === " pause ") {
        pauseTimer() 

    } else {
        resumeTimer() 
    }
});


