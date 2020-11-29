let timer;
let isActive = true;
const pause = document.querySelector("#pause")
const counter = document.querySelector("#counter");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const comments = document.querySelector("#list");
const commentForm = document.querySelector("#comment-form");
const heart = document.querySelector("#heart");
const likes = document.querySelector(".likes");

document.addEventListener("DOMContentLoaded", startTimer);
pause.addEventListener("click", pauseOrResumeCounter);
plus.addEventListener("click", incrementCounter);
minus.addEventListener("click", decrementCounter);
commentForm.addEventListener("submit", displayComment);
heart.addEventListener("click", addLike);

function startTimer(){
    timer = setInterval(incrementCounter, 1000);

}

function incrementCounter(){
    let currentCounter = parseInt(counter.textContent, 10);
    counter.textContent = `${currentCounter + 1}`;
}

function decrementCounter(){
    let currentCounter = parseInt(counter.textContent, 10);
    if (currentCounter > 0){
        counter.textContent = `${currentCounter - 1}`;
    }
}

function displayComment(e){
    e.preventDefault();

    const formData = new FormData(e.target);
    const commentText = formData.get("comment");
   
    const comment = document.createElement("p");
    comment.textContent = commentText;
    comments.append(comment);
    e.target.reset();
}

function addLike(){
    let currentCounter = parseInt(counter.textContent, 10);
    
    const previousLikes = Array.from(likes.children);
    const previousLike = previousLikes.find(previousLike =>{
        const previousLikeCount = parseInt(previousLike.textContent.split(' ')[0], 10);
        return previousLikeCount === currentCounter;
    })
    
    if (previousLike){
        const numOfHears = parseInt(previousLike.textContent.split(' ').slice(-2)[0]);
        previousLike.textContent = `${currentCounter} has been liked ${numOfHears + 1} times.`
    } else {
        const newLike = document.createElement("li");
        newLike.textContent = `${currentCounter} has been liked 1 time.`;
        likes.append(newLike);
    }
}

function pauseOrResumeCounter(){
    const buttons = Array.from(document.querySelectorAll("button"));
    const everythingButPause = buttons.filter(button => button.id !== 'pause');
    console.log(everythingButPause)
    if (isActive){
        clearInterval(timer);
        pause.textContent = 'resume';
        everythingButPause.forEach(button => button.disabled = true);
        isActive = false;
    } else {
        startTimer();
        isActive = true;
        pause.textContent = 'pause';
        everythingButPause.forEach(button => button.disabled = false);
    }
}

